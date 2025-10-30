    import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    agent: false,
    tour: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto my-12">
      <h2 className="text-2xl font-bold mb-4 text-red-600">Contact Us</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="border p-3 rounded-lg w-full"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="border p-3 rounded-lg w-full"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-3 rounded-lg w-full md:col-span-2"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number (Optional)"
          className="border p-3 rounded-lg w-full md:col-span-2"
          value={formData.phone}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Message"
          className="border p-3 rounded-lg w-full md:col-span-2 h-28"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <label className="flex items-center space-x-2 md:col-span-2">
          <input
            type="checkbox"
            name="agent"
            checked={formData.agent}
            onChange={handleChange}
          />
          <span>I am currently working with an agent</span>
        </label>

        <label className="flex items-center space-x-2 md:col-span-2">
          <input
            type="checkbox"
            name="tour"
            checked={formData.tour}
            onChange={handleChange}
          />
          <span>Schedule a Property Tour</span>
        </label>

        <button
          type="submit"
          className="bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 md:col-span-2"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
