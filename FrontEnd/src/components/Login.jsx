import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api.js';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    console.log("Login request:", { email, password });

    try {
      const res = await API.post('/users/login', { email, password });
      localStorage.setItem('token', res.data.token);
      setMessage('✅ Login successful!');
      setTimeout(() => navigate('/'), 1500);
    } catch (err) {
      console.error("❌ Login error:", err.response?.data || err.message);
      setMessage(err.response?.data?.message || 'Login failed.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Please login to your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Input */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-lg shadow-md transition"
          >
            Login
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
            Don't have an account?{" "}
            <a href="/register" className="text-blue-600 font-semibold hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
