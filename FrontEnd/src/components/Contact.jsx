// Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 px-6 pb-24 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-8">Get in Touch</h2>
      <p className="text-center text-gray-600 max-w-xl mx-auto mb-12">
        We'd love to hear from you. Whether you're looking to buy, sell, or invest in property, our expert team is here to help.
      </p>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 bg-white p-8 rounded-xl shadow-lg">
        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="abcd@example.com"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              className="w-full border border-gray-300 rounded px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-6 text-gray-700">
          <div>
            <h4 className="text-lg font-semibold">Visit Our Office</h4>
            <p>123 Beverly Hills Blvd, Los Angeles, CA 90210</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Call Us</h4>
            <p>+91(***) 123-456</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Email</h4>
            <p>contact@abcdefgh.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
