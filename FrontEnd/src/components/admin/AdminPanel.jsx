import React, { useEffect, useState } from "react";
import API from "../../api";

const AdminPanel = () => {
  const [properties, setProperties] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newProperty, setNewProperty] = useState({ title: "", price: "", photo: "", description: "" });
  const [editPropertyData, setEditPropertyData] = useState({ id: "", title: "", price: "", photo: "", description: "" });



useEffect(() => {
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/login");
  } else {
    fetchProperties();
  }
}, []);



  // Fetch properties
  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await API.get("/properties");
      setProperties(response.data);
    } catch (err) {
      console.error("Error fetching properties:", err);
    }
  };

  // Add Property
  const addProperty = async () => {
  try {
    const res = await API.post("/properties", {
      title: newProperty.title,
      price: newProperty.price,
      photo: newProperty.photo,
      description: newProperty.description,
    });
    console.log("Property Added:", res.data);
    setNewProperty({ title: "", price: "", photo: "", description: "" });
    setShowAddModal(false);
    fetchProperties();
  } catch (err) {
    console.error("Error adding property:", err.response?.data || err.message);
    alert(err.response?.data?.message || "Failed to add property");
  }
};



  // Open Edit Modal
  const openEditModal = (property) => {
    setEditPropertyData(property);
    setShowEditModal(true);
  };

  // Update Property
  const updateProperty = async () => {
    try {
      await API.put(`/properties/${editPropertyData._id}`, {
        title: editPropertyData.title,
        price: editPropertyData.price,
        photo: editPropertyData.photo,
        description: editPropertyData.description,
      });
      setShowEditModal(false);
      fetchProperties();
    } catch (err) {
      console.error("Error updating property:", err);
    }
  };

  // Delete Property
  const deleteProperty = async (id) => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      try {
        await API.delete(`/properties/${id}`);
        fetchProperties();
      } catch (err) {
        console.error("Error deleting property:", err);
      }
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      <p className="mb-4 text-gray-600">Manage properties and users here.</p>

      {/* Add Property Button */}
      <button
        onClick={() => setShowAddModal(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
      >
        + Add Property
      </button>

      {/* Property List */}
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Photo</th>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property._id}>
              <td className="border px-4 py-2">
                <img src={property.photo} alt={property.title} className="w-16 h-16 object-cover" />
              </td>
              <td className="border px-4 py-2">{property.title}</td>
              <td className="border px-4 py-2">{property.price}</td>
              <td className="border px-4 py-2">{property.description}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => openEditModal(property)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteProperty(property._id)}
                  className="bg-red-600 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold mb-4">Add New Property</h3>
            <input
              type="text"
              placeholder="Title"
              value={newProperty.title}
              onChange={(e) => setNewProperty({ ...newProperty, title: e.target.value })}
              className="border p-2 w-full mb-2"
            />
            <input
              type="number"
              placeholder="Price"
              value={newProperty.price}
              onChange={(e) => setNewProperty({ ...newProperty, price: e.target.value })}
              className="border p-2 w-full mb-2"
            />
            <input
              type="text"
              placeholder="Photo URL"
              value={newProperty.photo}
              onChange={(e) => setNewProperty({ ...newProperty, photo: e.target.value })}
              className="border p-2 w-full mb-2"
            />
            {newProperty.photo && (
              <img src={newProperty.photo} alt="Preview" className="w-full h-32 object-cover mb-2 rounded" />
            )}
            <textarea
              placeholder="Description"
              value={newProperty.description}
              onChange={(e) => setNewProperty({ ...newProperty, description: e.target.value })}
              className="border p-2 w-full mb-4"
              rows="3"
            />

            <div className="flex justify-end">
              <button
                onClick={() => setShowAddModal(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={addProperty}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold mb-4">Edit Property</h3>
            <input
              type="text"
              placeholder="Title"
              value={editPropertyData.title}
              onChange={(e) => setEditPropertyData({ ...editPropertyData, title: e.target.value })}
              className="border p-2 w-full mb-2"
            />
            <input
              type="number"
              placeholder="Price"
              value={editPropertyData.price}
              onChange={(e) => setEditPropertyData({ ...editPropertyData, price: e.target.value })}
              className="border p-2 w-full mb-2"
            />
            <input
              type="text"
              placeholder="Photo URL"
              value={editPropertyData.photo}
              onChange={(e) => setEditPropertyData({ ...editPropertyData, photo: e.target.value })}
              className="border p-2 w-full mb-2"
            />
            {editPropertyData.photo && (
              <img src={editPropertyData.photo} alt="Preview" className="w-full h-32 object-cover mb-2 rounded" />
            )}
            <textarea
              placeholder="Description"
              value={editPropertyData.description}
              onChange={(e) => setEditPropertyData({ ...editPropertyData, description: e.target.value })}
              className="border p-2 w-full mb-4"
              rows="3"
            />

            <div className="flex justify-end">
              <button
                onClick={() => setShowEditModal(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={updateProperty}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
