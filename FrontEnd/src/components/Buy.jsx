import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import AISearch from "./AISearch";

const Buy = () => {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  // Custom marker icon
  const customIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [35, 35],
  });

  useEffect(() => {
    API.get("/properties")
      .then((res) => setProperties(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">🏡 Buy Properties</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover premium properties across India with our AI-powered search and interactive map.
        </p>
      </div>

      {/* AI Search Section */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-10 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">🔍 AI Property Search</h2>
        <AISearch />
      </div>

      {/* Map Section */}
      <div className="bg-white shadow-2xl rounded-2xl p-6 mb-10 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">📍 Explore on Map</h2>
        <div className="relative h-[500px] rounded-xl overflow-hidden border border-gray-300 shadow-inner">
          <MapContainer
            center={[20.5937, 78.9629]} // India center
            zoom={5}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            />
            {properties.map(
              (property) =>
                property.coordinates?.lat &&
                property.coordinates?.lng && (
                  <Marker
                    key={property._id}
                    position={[property.coordinates.lat, property.coordinates.lng]} // ✅ FIXED
                    icon={customIcon}
                  >
                    <Popup>
                      <div
                        onClick={() => navigate(`/property/${property._id}`)}
                        className="cursor-pointer"
                      >
                        <img
                          src={property.image || "https://placehold.co/200x120"}
                          alt={property.title}
                          className="w-full h-20 object-cover rounded mb-2"
                        />
                        <strong className="block">{property.title}</strong>
                        <span className="text-sm text-gray-500">{property.location}</span>
                        <p className="text-blue-600 font-bold mt-1">₹{property.price}</p>
                        <p className="text-xs text-gray-500">Click for details</p>
                      </div>
                    </Popup>
                  </Marker>
                )
            )}
          </MapContainer>
        </div>
      </div>

      {/* Property Listings */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">🏠 Available Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {properties.length > 0 ? (
            properties.map((p) => (
              <div
                key={p._id}
                className="bg-white rounded-xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-1 cursor-pointer border border-gray-100 p-4"
                onClick={() => navigate(`/property/${p._id}`)}
              >
                <img
                  src={p.image || "https://placehold.co/400x300?text=No+Image"}
                  alt={p.title}
                  className="w-full h-48 object-cover rounded-md mb-3"
                />
                <h2 className="text-lg font-bold text-gray-800">{p.title}</h2>
                <p className="text-gray-600">{p.location}</p>
                <p className="text-blue-600 font-bold mt-2 text-lg">₹{p.price}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center text-lg">No properties available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Buy;
