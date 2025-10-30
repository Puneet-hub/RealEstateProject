// Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-16 sm:pt-20 md:pt-24 px-4 sm:px-6 md:px-8 lg:px-10 pb-16 sm:pb-20 md:pb-24 bg-gray-50">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-4 sm:mb-6 md:mb-8 text-gray-900">
        Get in Touch
      </h2>
      <p className="text-center text-sm sm:text-base text-gray-600 max-w-xl mx-auto mb-8 sm:mb-10 md:mb-12 px-4">
        We'd love to hear from you. Whether you're looking to buy, sell, or invest in property, our expert team is here to help.
      </p>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 bg-white p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl shadow-2xl">
        {/* Contact Form */}
        <form className="space-y-4 sm:space-y-5 md:space-y-6">
          <div>
            <label className="block text-sm sm:text-base text-gray-700 font-semibold mb-1.5 sm:mb-2">
              Full Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm sm:text-base text-gray-700 font-semibold mb-1.5 sm:mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="abcd@example.com"
            />
          </div>
          <div>
            <label className="block text-sm sm:text-base text-gray-700 font-semibold mb-1.5 sm:mb-2">
              Message
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 h-28 sm:h-32 md:h-36 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-teal-500 text-white px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-full hover:from-green-600 hover:to-teal-600 hover:shadow-lg transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-6 sm:space-y-7 md:space-y-8 bg-gray-50 p-5 sm:p-6 rounded-xl shadow-inner">
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-1.5">
              Visit Our Office
            </h4>
            <p className="text-sm sm:text-base text-gray-600">
              123 Beverly Hills Blvd, Los Angeles, CA 90210
            </p>
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-1.5">
              Call Us
            </h4>
            <p className="text-sm sm:text-base text-gray-600">
              +91(***) 123-456
            </p>
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-1.5">
              Email
            </h4>
            <p className="text-sm sm:text-base text-gray-600">
              contact@abcdefgh.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;