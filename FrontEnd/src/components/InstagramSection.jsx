import React from "react";
import { FaInstagram } from "react-icons/fa";

const InstagramSection = () => {
  const posts = [
    { id: 1, img: "https://via.placeholder.com/400x300", caption: "Luxury Villa in LA - $7.5M" },
    { id: 2, img: "https://via.placeholder.com/400x300", caption: "Modern Beachfront Mansion" },
    { id: 3, img: "https://via.placeholder.com/400x300", caption: "Tuscan Estate in Malibu" },
  ];

  return (
    <section className="py-16 bg-gray-50 text-center">
      <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">
        Follow Us On
      </p>
      <h2 className="text-4xl font-bold text-gray-800 mb-8 relative inline-block">
        Instagram
        <span className="block w-16 h-1 bg-blue-600 mx-auto mt-2"></span>
      </h2>

      {/* Instagram Posts */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="relative group overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={post.img}
              alt={`Post ${post.id}`}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
            />
            {/* Overlay with caption */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <p className="text-white text-lg font-medium px-4 text-center">
                {post.caption}
              </p>
            </div>
            {/* Instagram Icon */}
            <div className="absolute bottom-3 left-3 text-pink-500 text-2xl">
              <FaInstagram />
            </div>
          </div>
        ))}
      </div>

      {/* Follow Button */}
      <div className="mt-8">
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-900 transition"
        >
          <FaInstagram className="text-pink-500 text-xl" />
          Follow
        </a>
      </div>
    </section>
  );
};

export default InstagramSection;
