import React, { useState, useEffect } from "react";
import companyLogo from "../assets/images/IMG_0954-removebg-preview.png";
import image1 from "../assets/images/showcase44.avif";  // Replace with actual image names
import image2 from "../assets/images/showcase33.avif";  
import image3 from "../assets/images/showcase22.avif";
import image4 from "../assets/images/showcase4.avif";
import image5 from "../assets/images/showcase55.avif";
import image6 from "../assets/images/showcase77.avif";


const About = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
 
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="container mx-auto py-12 px-4">
      {/* First Div - About the Company */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Our Company</h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          At Pinnacle Rentals, we believe in providing exceptional real estate services, offering customers access to properties that meet their needs and exceed their expectations. With years of experience in the market, our goal is to deliver personalized, reliable, and professional service to ensure that every client finds the perfect property. Whether buying, selling, or renting, our team is here to guide you every step of the way.
        </p>
      </div>

      {/* Second Div - Logo and Company Achievements */}
      <div className="flex items-center mb-12 flex-col md:flex-row">
        {/* Left - Company Logo */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center">
          <img
            src={companyLogo}
            alt="Company Logo"
            className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right - Company Achievements */}
        <div className="w-full md:w-1/2 pl-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Achievements</h3>
          <ul className="space-y-3 text-lg text-gray-600">
            <li className="flex items-center">
              <span className="mr-2 text-'#fbf7a0'-500">✔</span> Successfully completed over 500 property transactions.
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-'#fbf7a0'-500">✔</span> Trusted by 1000+ satisfied clients.
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-'#fbf7a0'-500">✔</span> Featured in top industry publications.
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-'#fbf7a0'-500">✔</span> Awarded “Best Real Estate Agency” for three consecutive years.
            </li>
          </ul>
        </div>
      </div>

      {/* Text Section with Horizontal Lines */}
      <div className="flex justify-between mb-12">
        {/* Left - Text */}
        <div className="w-full md:w-1/2 pr-8">
          
          <hr className="border-gray-300 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
          <p className="text-lg text-gray-600 mb-4">
            Our mission is to connect clients with properties that match their needs while delivering value-driven services. We work with the utmost professionalism to create lasting relationships with our clients and partners.
          </p>
          <hr className="border-gray-300 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h3>
          <p className="text-lg text-gray-600">
            Our core values are integrity, transparency, and excellence. We believe in providing our clients with an honest and clear process every step of the way, ensuring satisfaction and peace of mind.
          </p>
        </div>

      {/* Right - Image Carousel */}
      <div className="w-full md:w-1/2">
        <div className="relative mb-12">
          <div className="relative w-full h-100">
            <img
              src={images[currentImage]}
              alt={`Showcase Image ${currentImage + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
            <button
              className="p-2 bg-gray-800 text-white rounded-full shadow-lg"
              onClick={() =>
                setCurrentImage((prevImage) =>
                  prevImage === 0 ? images.length - 1 : prevImage - 1
                )
              }
            >
              ◀
            </button>
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
            <button
              className="p-2 bg-gray-800 text-white rounded-full shadow-lg"
              onClick={() =>
                setCurrentImage((prevImage) => (prevImage + 1) % images.length)
              }
            >
              ▶
            </button>
          </div>
        </div>
      </div>

      </div>

      {/* Vision and Core Values Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-black mb-4">Our Vision</h3>
        <div className="flex space-x-6">
          {/* Respect */}
          <div className="flex-1 bg-black text-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold mb-4">Respect</h4>
            <p className="text-lg">
              We believe in fostering an environment where everyone is treated with respect and dignity. Our team values open communication, collaboration, and recognizing the strengths of each individual.
            </p>
          </div>

          {/* Innovation */}
          <div className="flex-1 bg-black text-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold mb-4">Innovation</h4>
            <p className="text-lg">
              At Pinnacle Rentals, we embrace innovation and continuously seek new ways to improve our services. Whether through technology or creative solutions, we ensure that our clients benefit from the latest advancements in the real estate market.
            </p>
          </div>

          {/* Integrity */}
          <div className="flex-1 bg-black text-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold mb-4">Integrity</h4>
            <p className="text-lg">
              Integrity is the foundation of our business. We are committed to doing what is right, even when no one is watching. We operate with transparency, honesty, and ethical practices, ensuring the trust and loyalty of our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
