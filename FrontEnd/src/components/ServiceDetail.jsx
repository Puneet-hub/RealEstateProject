import React from "react";
import { useParams } from "react-router-dom";

const servicesData = {
  buying: {
    title: "Property Buying Assistance",
    description:
      "Our expert team guides you through every step of your property purchase journey, from property search to legal support.",
    points: [
      "Personalized property recommendations",
      "Expert price negotiation",
      "Legal documentation support",
      "Loan assistance",
    ],
  },
  selling: {
    title: "Property Selling",
    description:
      "Get the best market price for your property with our experienced selling agents and marketing strategies.",
    points: [
      "Property valuation",
      "Professional marketing",
      "Expert negotiation",
      "Complete legal support",
    ],
  },
  rental: {
    title: "Rental Services",
    description:
      "Find quality tenants or the perfect rental property quickly with our verified rental service.",
    points: [
      "Verified tenants and landlords",
      "Rental agreement support",
      "Property management services",
      "Affordable rental solutions",
    ],
  },
  commercial: {
    title: "Commercial Property Advisory",
    description:
      "We help you find the perfect office, showroom, or commercial property for your business needs.",
    points: [
      "Prime commercial locations",
      "Property leasing guidance",
      "Legal documentation",
      "Investment support",
    ],
  },
  legal: {
    title: "Legal & Documentation Help",
    description:
      "We offer end-to-end legal assistance for property transactions, agreements, and compliance.",
    points: [
      "Document verification",
      "Property registration",
      "Agreement drafting",
      "Full legal support",
    ],
  },
  interior: {
    title: "Interior & Renovation Consulting",
    description:
      "Design, plan, and execute beautiful interiors with our expert interior consultants and architects.",
    points: [
      "Custom interior design",
      "Renovation planning",
      "Material selection",
      "Professional project execution",
    ],
  },
};

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];

  if (!service) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold text-red-600">Service not found</h1>
      </div>
    );
  }

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
      <p className="text-lg text-gray-700 mb-6">{service.description}</p>
      <ul className="list-disc pl-6 text-gray-700">
        {service.points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
