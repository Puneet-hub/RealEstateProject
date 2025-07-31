import React from 'react';
import { Link } from 'react-router-dom';

const properties = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    title: '1645 Vine St #1001',
    location: 'Los Angeles',
  },
  {
    id: 2,
    image: 'https://media.istockphoto.com/id/157307499/photo/beautiful-entryway-with-custom-wrought-iron-staircase-in-estate-home.jpg?s=1024x1024&w=is&k=20&c=3PRYD6C8rM9KmY0j1FbbYJQz4WdGPzX2uOaWeSVgl3A=',
    title: '23618 Malibu Colony Rd #56',
    location: 'Malibu',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb',
    title: '9200 Old Flowers Road',
    location: 'Bellvue',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
    title: '10777 Wilshire Blvd',
    location: 'Beverly Hills',
  },
];

const FeaturedProperties = () => {
  return (
    <section id="featured" className="py-20 bg-gray-100 px-6">
      <div className="max-w-6xl mx-auto">
        <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Our Featured Listings</h4>
        <h2 className="text-4xl font-bold text-gray-800 mb-10">Exclusive Properties</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-10">
          {properties.map((property) => (
            <div key={property.id} className="bg-white shadow-md">
              <div className="relative group">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:opacity-80 transition"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition flex justify-center items-center">
                  <button className="text-white border border-white px-4 py-2 text-sm">VIEW PROPERTY</button>
                </div>
              </div>
              <div className="p-4">
                <p className="text-lg font-semibold">{property.title} <span className="text-gray-500">| {property.location}</span></p>
              </div>
            </div>
          ))}
        </div>

        {/* 🔘 View All Properties Button */}
       <div className="text-center mt-10">
  <Link
    to="/allproperties"
    className="inline-block px-6 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-gray-800 transition"
  >
    View All Properties
  </Link>
</div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
