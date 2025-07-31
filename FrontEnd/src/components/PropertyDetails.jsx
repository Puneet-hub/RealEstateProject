import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";
import Slider from "react-slick";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    API.get(`/properties/${id}`)
      .then((res) => setProperty(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!property) {
    return <p className="text-center text-gray-600 mt-10">Loading property details...</p>;
  }

  // Carousel settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  // ✅ Safe coordinates check
  const coordinates =
    property.coordinates?.lat && property.coordinates?.lng
      ? [property.coordinates.lat, property.coordinates.lng]
      : [26.9124, 75.7873]; // Default Jaipur

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Main Image */}
        <div className="h-96">
          <img
            src={property.image || "https://placehold.co/800x400?text=No+Image"}
            alt={property.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Property Info */}
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800">{property.title}</h1>
          <p className="text-gray-600 mt-1">{property.location}</p>
          <p className="text-blue-600 text-2xl font-bold mt-3">₹{property.price}</p>
          <p className="text-gray-700 mt-4 leading-relaxed">{property.description}</p>

          {/* Gallery Carousel */}
          {property.gallery && property.gallery.length > 0 && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-3">Gallery</h2>
              <Slider {...sliderSettings}>
                {property.gallery.map((img, index) => (
                  <div key={index} className="px-2">
                    <img
                      src={img || "https://placehold.co/400x300?text=No+Image"}
                      alt={`Gallery ${index}`}
                      className="w-full h-80 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          )}

          {/* Map Section */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-3">Location</h2>
            <div className="h-96 rounded-lg overflow-hidden shadow">
              <MapContainer center={coordinates} zoom={13} style={{ height: "100%", width: "100%" }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                />
                <Marker position={coordinates}>
                  <Popup>{property.title}</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-inner">
            <h2 className="text-xl font-semibold mb-4">Contact Agent</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border p-2 rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border p-2 rounded"
              />
              <textarea
                placeholder="Message"
                className="w-full border p-2 rounded"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
