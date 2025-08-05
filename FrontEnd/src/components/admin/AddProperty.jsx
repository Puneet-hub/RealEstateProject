// import React, { useState, useContext } from 'react';
// import { PropertyContext } from '../PropertyContext';

// const AddProperty = () => {
//   const { addProperty } = useContext(PropertyContext);
//   const [form, setForm] = useState({ title: '', location: '', price: '', image: '' });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addProperty(form); // instantly update context
//     setForm({ title: '', location: '', price: '', image: '' }); // reset form
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Add Property</h2>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="border p-2 rounded" />
//         <input name="location" value={form.location} onChange={handleChange} placeholder="Location" className="border p-2 rounded" />
//         <input name="price" value={form.price} onChange={handleChange} placeholder="Price" className="border p-2 rounded" />
//         <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL" className="border p-2 rounded" />
//         <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
//           Add Property
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddProperty;
