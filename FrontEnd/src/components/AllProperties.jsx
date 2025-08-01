import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import API from "../api";

const AllProperties = () => {
  const [properties, setProperties] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get("search") || "";

    API.get("/properties", { params: { search: searchQuery } })
      .then((res) => setProperties(res.data))
      .catch((err) => console.error(err));
  }, [location.search]);

  const handleClearFilters = () => {
    navigate("/allproperties");
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">All Properties</h2>
        <button
          onClick={handleClearFilters}
          className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
        >
          Clear Filters
        </button>
      </div>

      {properties.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {properties.map((p) => (
            <Link
              to={`/property/${p._id}`} // ✅ Make it clickable
              key={p._id}
              className="block"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
                {/* Property Image */}
                <div className="h-48 bg-gray-200">
                  <img
  src={p.image || "https://placehold.co/400x300?text=No+Image"}
  alt={p.title}
  className="w-full h-full object-cover"
/>
                </div>

                {/* Property Info */}
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">{p.title}</h3>
                  <p className="text-gray-600">{p.location}</p>
                  <p className="text-blue-600 font-bold mt-2 text-lg">₹{p.price}</p>
                  <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                    {p.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-lg">No properties found.</p>
      )}
    </div>
  );
};

export default AllProperties;

