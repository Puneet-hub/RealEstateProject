import React, { useEffect } from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./OurStory.css"; // Custom CSS for underline animation

const OurStory = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS animations
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-gray-100 via-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2
          className="animated-title text-4xl font-bold text-gray-800 mb-12 relative inline-block"
          data-aos="fade-up"
        >
          About Our Leadership
        </h2>

        {/* Single Leader Section */}
        <div
          className="flex flex-col items-center text-center bg-white shadow-xl p-6 rounded-xl hover:shadow-2xl hover:scale-105 transform transition duration-300"
          data-aos="fade-up"
        >
          <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-gray-200 mb-4 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1724093832100-fa80f73b424b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Leader"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Mr. Ashish</h3>
          <p className="text-gray-500 mb-4">Founder & CEO</p>
          <p className="text-gray-600 text-sm mb-4 max-w-lg">
            Mr. Ashish has over 15 years of experience in real estate, leading
            the company with vision and passion for excellence.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl">
              <FaLinkedin />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600 text-2xl">
              <FaTwitter />
            </a>
          </div>

          {/* Read More Button */}
          <button
            onClick={() => navigate("/readmore")}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
