import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/allproperties?search=${search}`);
      setSearch('');
    }
  };

  return (
    <nav className="bg-black shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}

      
      <h1 className="text-2xl font-bold text-white tracking-wide">
        <Link to="/" className="hover:text-blue-400 transition">IndianAgency</Link>
      </h1>

      {/* Navigation Links */}
      <ul className="flex gap-6 text-white font-medium">
        <li><Link to="/buy" className="hover:text-blue-400 transition">Buy</Link></li>
        <li><Link to="/sell" className="hover:text-blue-400 transition">Sell</Link></li>
        <li><Link to="/rent" className="hover:text-blue-400 transition">Rent</Link></li>
        <li><Link to="/commercial" className="hover:text-blue-400 transition">Commercial</Link></li>
        <li><Link to="/services" className="hover:text-blue-400 transition">Our Services</Link></li>
        <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
      </ul>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="relative ml-6">
        <FiSearch className="absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search properties..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 pr-4 py-2 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 transition-all duration-300 placeholder-gray-400"
        />
      </form>
    </nav>
  );
};

export default Navbar;
