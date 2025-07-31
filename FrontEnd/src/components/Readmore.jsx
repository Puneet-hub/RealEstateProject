import React from 'react';

const Readmore = () => {
  return (
    <section className="px-6 py-12 bg-white text-black min-h-screen">
      <h1 className="text-4xl font-bold mb-8">About Our Leadership</h1>

      <div className="grid gap-12 sm:grid-cols-2">
        <div className="text-center">
          <img
            src="/ceo1.jpg"
            alt="Photo 1"
            className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-gray-300"
          />
          <h3 className="mt-4 text-xl font-semibold">Mr. Ashish</h3>
          <p className="text-gray-600">Founder & CEO</p>
        </div>

        <div className="text-center">
          <img
            src="/ceo2.jpg"
            alt="photo 2"
            className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-gray-300"
          />
          <h3 className="mt-4 text-xl font-semibold">Mr. Ashish</h3>
          <p className="text-gray-600">Co-Founder & MD</p>
        </div>
      </div>

      <div className="mt-12 max-w-3xl mx-auto text-lg leading-relaxed">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quidem pariatur error ullam id praesentium! Nam eum repellat deserunt. Molestias, nulla! Atque id ducimus repellat molestiae nam consectetur perspiciatis vero aut ratione vel culpa ipsam eveniet debitis, possimus adipisci quidem impedit. Maxime vel maiores quaerat quas. Natus molestias dolorum amet.
        </p>
      </div>
    </section>
  );
};

export default Readmore;
