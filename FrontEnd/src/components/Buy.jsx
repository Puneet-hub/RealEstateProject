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
      .then((res) => {
        // ✅ Filter only Hyderabad properties
        const hyderabadProperties = res.data.filter(
          (p) => p.location?.toLowerCase().includes("hyderabad")
        );
        setProperties(hyderabadProperties);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Buy Properties in Hyderabad</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Explore premium properties in Hyderabad with our AI-powered search and interactive map.
        </p>
      </div>

      {/* AI Search Section */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-10 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          🔍 Search for properties in Hyderabad
        </h2>
        <AISearch />
      </div>

      {/* Map and Property Listings Side by Side */}
      <div className="flex flex-col lg:flex-row gap-8 mb-10">
        {/* Map Section - Left */}
        <div className="lg:w-1/2 w-full sticky top-20 self-start">
          <div className="bg-white shadow-2xl rounded-2xl p-4 border border-gray-200 h-[calc(100vh-100px)]">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Explore on Map</h2>
            <div className="relative h-full rounded-xl overflow-hidden border border-gray-300 shadow-inner">
              <MapContainer
                center={[17.402822, 78.37076]} // ✅ Hyderabad center
                zoom={12}
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
                        position={[property.coordinates.lat, property.coordinates.lng]}
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
        </div>

        {/* Property Listings - Right */}
        <div className="lg:w-1/2 w-full overflow-y-auto max-h-[calc(100vh-100px)] pr-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Available Properties in Hyderabad</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                    className="w-full h-40 object-cover rounded-md mb-3"
                  />
                  <h2 className="text-lg font-bold text-gray-800">{p.title}</h2>
                  <p className="text-gray-600">{p.location}</p>
                  <p className="text-blue-600 font-bold mt-2 text-lg">₹{p.price}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center text-lg">
                No properties available in Hyderabad.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
