import React from 'react';

const Home = () => {
  return (
    <div className="w-full">
      {/* 🔹 Fullscreen Hero Video */}
      <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://videos.pexels.com/video-files/17380073/17380073-hd_1920_1080_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Discover Luxury Living</h1>
          <p className="text-lg md:text-xl">Step into a world of premium real estate</p>
        </div>

        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black opacity-40 z-0" />
      </section>

      {/* 🔻 Intro Section */}
      <section className="mt-12 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Welcome to Indian Agency</h2>
        <p className="text-gray-700 text-lg">
          We provide handpicked luxury properties for rent, sale, and investment. Explore our latest listings and
          find the perfect property for you.
        </p>
      </section>

      {/* 🔻 Call to Action */}
      <div className="text-center mt-10 mb-12">
        <a
          href="/rent"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Explore Rentals
        </a>
      </div>
    </div>
  );
};

export default Home;
