import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import axios from "axios";

// Import the images
import image1 from "../assets/images/showcase44.avif";
import image2 from "../assets/images/showcase33.avif";
import image3 from "../assets/images/showcase22.avif";

// Import the PropertiesSection component
const PropertiesSection = () => {
  const properties = [
    {
      title: "3 Bedroom",
      image: image1,
      price: "Price Available on Request",
      location: "Edmonton, Canada",
      type: "For Rent / For Sale",
    },
    {
      title: "2 Bedroom Suite",
      image: image2,
      price: "Price Available on Request",
      location: "Edmonton, Canada",
      type: "Guest House",
    },
    {
      title: "4 Bedroom Apartment",
      image: image3,
      price: "Price Available on Request",
      location: "Edmonton, Canada",
      type: "For Sale / For Rent",
    },
  ];

  return (
    <section className="py-12 px-6 bg-gray-900 text-yellow-400">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold">Properties</h2>
        <p className="text-gray-300 mt-2">
          Experience Pinnacle Standards. We raise the bar of short-term rental
          hospitality to a new level of quality.
        </p>
        <button className="mt-4 px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500">
          View All Properties
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {properties.map((property, index) => (
          <div
            key={index}
            className="bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{property.title}</h3>
              <p className="text-sm mb-2">{property.price}</p>
              <p className="text-sm mb-2">{property.location}</p>
              <p className="text-sm mb-4">{property.type}</p>
              <div className="flex justify-between">
                <button className="px-4 py-2 bg-gray-900 text-yellow-400 font-semibold rounded-lg hover:bg-gray-700">
                  View
                </button>
                <button className="px-4 py-2 bg-yellow-400 text-white font-semibold rounded-lg hover:bg-green-600">
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to handle the search button click
  const handleSearch = async () => {
    if (searchQuery.trim() === "") return;

    setLoading(true);
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${searchQuery}`
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setSearchResults([]);
    }
    setLoading(false);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white text-black py-10 px-6">
        <div className="flex items-center    bg-gray-900  text-black rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Country, City, Address, Postal Code or ID"
            className="flex-grow px-2 py-1 outline-none rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="   bg-gray-900  px-4 py-2 rounded-full text-white hover:bg-[#ffe34f] transition"
          >
            →
          </button>
        </div>

        {/* Display Search Results */}
        {loading && <p>Loading...</p>}
        <div className="mt-4">
          {searchResults.length > 0 && (
            <ul className="space-y-2">
              {searchResults.map((country, index) => (
                <li key={index}>
                  <p className="font-semibold">{country.name.common}</p>
                  <p>
                    {country.capital
                      ? `Capital: ${country.capital[0]}`
                      : "No capital available"}
                  </p>
                  <p>
                    {country.subregion
                      ? `Region: ${country.subregion}`
                      : "No region available"}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Navigation Bar */}
      <header className="  bg-gray-900  text-yellow-400 py-4 px-6 flex justify-between items-center">
        <nav className="flex space-x-6 text-sm">
          <a href="#" className="hover:underline">
            Buy
          </a>
          <a href="#" className="hover:underline">
            sell
          </a>
          <a href="#" className="hover:underline">
            Rent
          </a>
          <a href="#" className="hover:underline">
            Mortage
          </a>
          <button className="border border-white px-4 py-1 rounded hover:bg-white hover:text-[#001F44] transition">
            Find Realtors
          </button>
        </nav>
        <div className="flex space-x-4 text-sm">
          <a href="#" className="hover:underline">
            My Home
          </a>
          <a href="#" className="hover:underline">
            Manage Rentals  
          </a>
        </div>
      </header>

      {/* Text Section with Images */}
      <div className="flex justify-between mb-12">
        <div className="w-full md:w-1/2 pr-8">
          <hr className="border-gray-300 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 ms-9">
            Our Mission
          </h3>
          <p className="text-lg text-gray-600 ms-9 mt-5 mb-4">
            Our mission is to connect clients with properties that match their
            needs while delivering value-driven services. We work with the
            utmost professionalism to create lasting relationships with our
            clients and partners.
          </p>
          <hr className="border-gray-300 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 ms-9 ">
            Our Values
          </h3>
          <p className="text-lg text-gray-600 ms-9 mt-4">
            Our core values are integrity, transparency, and excellence. We
            believe in providing our clients with an honest and clear process
            every step of the way, ensuring satisfaction and peace of mind.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <div className="relative m-9">
            <img
              src={image1}
              alt="Showcase Image"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="mt-4">
            <Link
              to="/properties"
              className="bg-yellow-400 text-black py-2 px-4 rounded hover:bg-[#fbf7a0] transition ms-9"
            >
              View Properties
            </Link>
          </div>
        </div>
      </div>

      {/* Image Grid Section */}
<section className="py-12 px-6 grid grid-cols-4 gap-6 bg-gray-900">
  {[image1, image2, image3, image1].map((image, index) => (
    <div key={index} className="relative group bg-gray-900 p-4 rounded-md">
      <img
        src={image}
        alt={`Property ${index}`}
        className="rounded-md shadow-md w-full h-full object-cover"
      />
      <p className="text-center mt-2 text-sm font-semibold text-yellow-400">
        {index % 2 === 0
          ? "Modern Minimalist Home"
          : "Spacious Family Villa"}
      </p>
    </div>
  ))}
</section>


      {/* Video Section */}
      {/* Video Section */}
      <div className="relative mt-8 bg-gray-900 py-8">
        <div className="w-full max-w-screen-xl mx-auto bg-white rounded-md shadow-md p-4">
          <video
            className="w-full h-[300px] rounded-md shadow-md"
            src={require("../assets/videos/house11.mp4")}
            controls
            autoPlay
            loop
            muted
          >
            Your browser does not support the video tag.
          </video>
          <p className="text-center mt-2 text-sm font-semibold text-gray-800">
            Discover Your Dream Home
          </p>
        </div>
      </div>

      {/* Properties Section */}
      <PropertiesSection />
    </div>
  );
};

export default Home;
