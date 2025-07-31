import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurStory from './components/Story';
import Footer from './components/Footer';
import FeaturedProperties from './components/FeaturedProperties';
import InstagramSection from './components/InstagramSection';
import Sell from './components/Sell';
import Commercial from './components/Commercial';
import OurServices from './components/Services';
import Contact from './components/Contact';
import Readmore from './components/Readmore';
import AllProperties from './components/AllProperties';
import PropertyDetails from "./components/PropertyDetails";
import Buy from "./components/Buy";
import Rent from "./components/Rent";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page */}
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

        {/* Buy Page */}
        <Route path="/buy" element={<Buy />} />  
        <Route path="/rent" element={<Rent />} />

        {/* All Properties Page */}
        <Route path="/allproperties" element={<AllProperties />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/readmore" element={<Readmore />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
