import React, { useEffect, useState } from 'react';
import API from './api';

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // Fetch properties from backend
  const fetchProperties = () => {
    API.get('/properties', { params: { search, minPrice, maxPrice } })
      .then((res) => setProperties(res.data))
      .catch((err) => console.error(err));
  };

  // Fetch whenever search or price changes
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchProperties();
    }, 400); // debounce for better performance
    return () => clearTimeout(timer);
  }, [search, minPrice, maxPrice]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Property Listings</h2>

      {/* Search & Filter Bar */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by title or location"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-1/3"
        />
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="border p-2 rounded w-1/4"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border p-2 rounded w-1/4"
        />
      </div>

      {/* Properties List */}
      <ul>
        {properties.length > 0 ? (
          properties.map((p) => (
            <li key={p._id} className="border p-4 mb-3 rounded bg-white shadow">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p>Location: {p.location}</p>
              <p>Price: ₹{p.price}</p>
              <p>{p.description}</p>
            </li>
          ))
        ) : (
          <p>No properties found.</p>
        )}
      </ul>
    </div>
  );
};

export default Properties;
