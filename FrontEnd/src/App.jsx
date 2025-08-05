import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PropertyProvider } from "./components/PropertyContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurStory from "./components/Story";
import Footer from "./components/Footer";
import FeaturedProperties from "./components/FeaturedProperties";
import InstagramSection from "./components/InstagramSection";
import Sell from "./components/Sell";
import Commercial from "./components/Commercial";
import Services from "./components/Services";
import ServiceDetail from "./components/ServiceDetail";
import Contact from "./components/Contact";
import Readmore from "./components/Readmore";
import AllProperties from "./components/AllProperties";
import PropertyDetails from "./components/PropertyDetails";
import Buy from "./components/Buy";
import Rent from "./components/Rent";
import AdminPanel from "./components/admin/AdminPanel"; // ✅ correct path
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <PropertyProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <OurStory />
                <FeaturedProperties />
                <InstagramSection />
                <Footer />
              </>
            }
          />
          <Route path="/buy" element={<Buy />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/allproperties" element={<AllProperties />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/readmore" element={<Readmore />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </Router>
    </PropertyProvider>
  );
}

export default App;
