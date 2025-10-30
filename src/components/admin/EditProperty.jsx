// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import API from "../../api";

// export default function EditProperty() {
//   const { id } = useParams();
//   const [form, setForm] = useState({ title: "", location: "", price: "", image: "" });
//   const navigate = useNavigate();

//   useEffect(() => {
//     API.get(`/properties/${id}`)
//       .then((res) => setForm(res.data))
//       .catch((err) => console.error(err));
//   }, [id]);

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     API.put(`/properties/${id}`, form)
//       .then(() => navigate("/admin/properties"))
//       .catch((err) => console.error(err));
//   };

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Edit Property</h1>
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
//         <input name="title" value={form.title} onChange={handleChange} className="w-full p-2 border mb-3" />
//         <input name="location" value={form.location} onChange={handleChange} className="w-full p-2 border mb-3" />
//         <input name="price" value={form.price} onChange={handleChange} className="w-full p-2 border mb-3" />
//         <input name="image" value={form.image} onChange={handleChange} className="w-full p-2 border mb-3" />
//         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Update Property</button>
//       </form>
//     </div>
//   );
// }
