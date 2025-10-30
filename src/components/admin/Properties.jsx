// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import API from "../../api";

// export default function Properties() {
//   const [properties, setProperties] = useState([]);

//   useEffect(() => {
//     API.get("/properties")
//       .then((res) => setProperties(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   const deleteProperty = (id) => {
//     if (window.confirm("Are you sure you want to delete this property?")) {
//       API.delete(`/properties/${id}`)
//         .then(() => setProperties(properties.filter((p) => p._id !== id)))
//         .catch((err) => console.error(err));
//     }
//   };

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Manage Properties</h1>
//       <table className="w-full border-collapse bg-white shadow-md rounded-lg">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="p-3">Image</th>
//             <th className="p-3">Title</th>
//             <th className="p-3">Location</th>
//             <th className="p-3">Price</th>
//             <th className="p-3">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {properties.map((p) => (
//             <tr key={p._id} className="border-b">
//               <td className="p-3">
//                 <img src={p.image || "https://placehold.co/50"} alt={p.title} className="h-12 rounded" />
//               </td>
//               <td className="p-3">{p.title}</td>
//               <td className="p-3">{p.location}</td>
//               <td className="p-3">₹{p.price}</td>
//               <td className="p-3 flex gap-2">
//                 <Link
//                   to={`/admin/edit-property/${p._id}`}
//                   className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
//                 >
//                   Edit
//                 </Link>
//                 <button
//                   onClick={() => deleteProperty(p._id)}
//                   className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
