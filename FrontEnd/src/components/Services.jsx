import React from 'react';

const services = [
  {
    title: 'Property Buying Assistance',
    description: 'Expert guidance and support through every step of your property purchase journey.',
    icon: '🏡',
  },
  {
    title: 'Property Selling',
    description: 'Get the best market price for your property with our experienced selling agents.',
    icon: '💰',
  },
  {
    title: 'Rental Services',
    description: 'Find quality tenants or the perfect rental property with ease.',
    icon: '📑',
  },
  {
    title: 'Commercial Property Advisory',
    description: 'Leverage our expertise for offices, showrooms, and industrial properties.',
    icon: '🏢',
  },
  {
    title: 'Legal & Documentation Help',
    description: 'Full legal support and document handling for smooth and secure transactions.',
    icon: '📄',
  },
  {
    title: 'Interior & Renovation Consulting',
    description: 'Design, plan, and execute beautiful spaces with our partner services.',
    icon: '🛋️',
  },
];

const OurServices = () => {
  return (
    <div className="min-h-screen pt-24 px-6 bg-white">
      <h2 className="text-4xl font-bold text-center mb-10">Our Services</h2>

      <p className="text-center max-w-2xl mx-auto text-gray-600 mb-12">
        We provide a wide range of real estate services tailored to meet your residential and commercial needs.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-xl transition"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-700 text-sm">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-16 mb-16">
  <a
    href="/contact"
    className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
  >
    Talk to Our Team
  </a>
</div>

    </div>
  );
};

export default OurServices;
