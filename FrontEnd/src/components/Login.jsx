import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await API.post("/users/login", { email, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("isAdmin", res.data.isAdmin);

      setMessage("✅ Login successful!");

      setTimeout(() => {
        if (res.data.isAdmin) {
          navigate("/admin");
        } else {
          navigate("/");
        }
      }, 1000);
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 py-8 sm:px-6">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center">
          Admin Login
        </h2>
        {message && (
          <p className={`text-sm sm:text-base mb-3 sm:mb-4 text-center ${
            message.includes("✅") ? "text-green-600" : "text-red-500"
          }`}>
            {message}
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2.5 sm:py-3 rounded-lg w-full text-sm sm:text-base transition transform hover:scale-[1.02] active:scale-[0.98] mt-4 sm:mt-6"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;