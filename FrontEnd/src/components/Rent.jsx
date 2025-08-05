import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Rent = () => {
  const [rentals, setRentals] = useState([]);
  const [filters, setFilters] = useState({ location: "", min: "", max: "" });
  const navigate = useNavigate();

  const customIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [35, 35],
  });

  useEffect(() => {
    API.get("/properties")
      .then((res) => {
        const rentalProperties = res.data.filter((p) => p.type === "rent");
        setRentals(rentalProperties);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredRentals = rentals.filter((p) => {
    const matchesLocation = p.location
      .toLowerCase()
      .includes(filters.location.toLowerCase());
    const matchesMin = filters.min ? p.price >= parseInt(filters.min) : true;
    const matchesMax = filters.max ? p.price <= parseInt(filters.max) : true;
    return matchesLocation && matchesMin && matchesMax;
  });

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">🏢 Rent Properties</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Find premium rental homes and apartments with ease.
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl shadow-lg p-4 mb-6 border border-gray-200 flex flex-wrap gap-4">
        <input
          type="text"
          name="location"
          placeholder="Search by location"
          value={filters.location}
          onChange={handleFilterChange}
          className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-gray-400"
        />
        <input
          type="number"
          name="min"
          placeholder="Min Rent"
          value={filters.min}
          onChange={handleFilterChange}
          className="w-40 p-3 border rounded-lg focus:ring-2 focus:ring-gray-400"
        />
        <input
          type="number"
          name="max"
          placeholder="Max Rent"
          value={filters.max}
          onChange={handleFilterChange}
          className="w-40 p-3 border rounded-lg focus:ring-2 focus:ring-gray-400"
        />
      </div>

      {/* Map and Rental Listings Side by Side */}
      <div className="flex flex-col lg:flex-row gap-8 mb-10">
        {/* Map Section - Left */}
        <div className="lg:w-1/2 w-full sticky top-20 self-start">
          <div className="bg-white shadow-2xl rounded-2xl p-4 border border-gray-200 h-[calc(100vh-100px)]">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">📍 Explore on Map</h2>
            <div className="relative h-full rounded-xl overflow-hidden border border-gray-300 shadow-inner">
              <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: "100%", width: "100%" }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                />
                {filteredRentals.map(
                  (rental) =>
                    rental.coordinates?.lat &&
                    rental.coordinates?.lng && (
                      <Marker
                        key={rental._id}
                        position={[rental.coordinates.lat, rental.coordinates.lng]}
                        icon={customIcon}
                      >
                        <Popup>
                          <div
                            onClick={() => navigate(`/property/${rental._id}`)}
                            className="cursor-pointer"
                          >
                            <img
                              src={rental.image || "https://placehold.co/200x120"}
                              alt={rental.title}
                              className="w-full h-20 object-cover rounded mb-1"
                            />
                            <strong>{rental.title}</strong>
                            <br />
                            {rental.location}
                            <br />
                            <span className="text-blue-600 font-bold">₹{rental.price}/month</span>
                          </div>
                        </Popup>
                      </Marker>
                    )
                )}
              </MapContainer>
            </div>
          </div>
        </div>

        {/* Rental Listings - Right */}
        <div className="lg:w-1/2 w-full overflow-y-auto max-h-[calc(100vh-100px)] pr-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">🏠 Available Rentals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredRentals.length > 0 ? (
              filteredRentals.map((rental) => (
                <div
                  key={rental._id}
                  className="bg-white rounded-xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-1 cursor-pointer border border-gray-100 p-4"
                  onClick={() => navigate(`/property/${rental._id}`)}
                >
                  <div className="relative">
                    <img
                      src={rental.image || "https://placehold.co/400x300"}
                      alt={rental.title}
                      className="w-full h-40 object-cover rounded-md mb-3"
                    />
                    <span className="absolute top-2 left-2 bg-gray-900 text-white text-xs px-2 py-1 rounded">
                      For Rent
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-gray-800">{rental.title}</h2>
                  <p className="text-gray-600">{rental.location}</p>
                  <p className="text-blue-600 font-bold mt-2 text-lg">₹{rental.price}/month</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center text-lg">
                No rentals available.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rent;
