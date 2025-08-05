import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api.js';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    console.log("Registration request:", formData);

    try {
      const res = await API.post('/users/register', formData);
      if (res.status === 201) {
        setMessage('✅ Registration successful! Redirecting to login...');
        setTimeout(() => navigate('/login'), 1500);
      }
    } catch (err) {
      console.error(err.response?.data || err.message);
      if (err.response?.status === 400) {
        setMessage('❌ Email already exists.');
      } else {
        setMessage('⚠️ Registration failed. Please try again.');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Register now and start exploring properties
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Input */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none transition"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none transition"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none transition"
              required
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold text-lg shadow-md transition"
          >
            Register
          </button>

          {/* Message */}
          {message && (
            <p className={`text-center mt-3 font-medium ${message.includes('✅') ? 'text-green-600' : 'text-red-500'}`}>
              {message}
            </p>
          )}
        </form>

        {/* Additional Links */}
        <div className="mt-6 text-center text-gray-500">
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-green-600 font-semibold hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
