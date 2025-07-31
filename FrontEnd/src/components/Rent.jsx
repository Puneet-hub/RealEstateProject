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
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section - Clean and Minimal */}
      <div className="relative h-48 bg-white flex flex-col items-center justify-center text-center border-b border-gray-200">
        <h1 className="text-4xl font-extrabold text-gray-900">🏢 Rent Properties</h1>
        <p className="text-gray-600 mt-2">Find premium rental homes and apartments with ease</p>
      </div>

      <div className="p-8 max-w-7xl mx-auto">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 bg-white p-4 rounded-xl shadow-md mb-8">
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

        {/* Map */}
        <div className="bg-white shadow-lg rounded-2xl p-4 mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Explore on Map</h2>
          <div className="h-[450px] w-full rounded-lg overflow-hidden">
            <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: "100%", width: "100%" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
              />
              {filteredRentals.map(
                (rental) =>
                  rental.coordinates && (
                    <Marker key={rental._id} position={rental.coordinates} icon={customIcon}>
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

        {/* Rental Listings */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Available Rentals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredRentals.length > 0 ? (
            filteredRentals.map((rental) => (
              <div
                key={rental._id}
                className="bg-white rounded-xl shadow-md p-4 hover:shadow-2xl transition transform hover:-translate-y-1 cursor-pointer"
                onClick={() => navigate(`/property/${rental._id}`)}
              >
                <div className="relative">
                  <img
                    src={rental.image || "https://placehold.co/400x300"}
                    alt={rental.title}
                    className="w-full h-48 object-cover rounded-md mb-3"
                  />
                  <span className="absolute top-2 left-2 bg-gray-900 text-white text-xs px-2 py-1 rounded">
                    For Rent
                  </span>
                </div>
                <h2 className="text-lg font-bold text-gray-800">{rental.title}</h2>
                <p className="text-gray-600">{rental.location}</p>
                <p className="text-blue-600 font-bold mt-2">₹{rental.price}/month</p>
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
  );
};

export default Rent;
