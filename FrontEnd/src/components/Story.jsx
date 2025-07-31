import React, { useEffect } from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./OurStory.css"; // Import custom CSS for underline animation

const OurStory = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS animations
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-gray-100 via-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2
          className="animated-title text-4xl font-bold text-gray-800 mb-12 relative inline-block"
          data-aos="fade-up"
        >
          About Our Leadership
        </h2>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Leader 1 */}
          <div
            className="flex flex-col items-center text-center bg-white shadow-xl p-6 rounded-xl hover:shadow-2xl hover:scale-105 transform transition duration-300"
            data-aos="fade-right"
          >
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-gray-200 mb-4 shadow-md">
              <img
                src="https://via.placeholder.com/150"
                alt="Leader 1"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Mr. Ashish</h3>
            <p className="text-gray-500 mb-4">Founder & CEO</p>
            <p className="text-gray-600 text-sm mb-4">
              Mr. Ashish has over 15 years of experience in real estate, leading
              the company with vision and passion for excellence.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl">
                <FaLinkedin />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600 text-2xl">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Leader 2 */}
          <div
            className="flex flex-col items-center text-center bg-white shadow-xl p-6 rounded-xl hover:shadow-2xl hover:scale-105 transform transition duration-300"
            data-aos="fade-left"
          >
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-gray-200 mb-4 shadow-md">
              <img
                src="https://via.placeholder.com/150"
                alt="Leader 2"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Mr. Ashish</h3>
            <p className="text-gray-500 mb-4">Co-Founder & MD</p>
            <p className="text-gray-600 text-sm mb-4">
              With deep expertise in property development, he has played a
              crucial role in building our brand and expanding our reach.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl">
                <FaLinkedin />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600 text-2xl">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
