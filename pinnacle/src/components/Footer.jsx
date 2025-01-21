// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#fbf7a0",
        color: "#000", // Optional: Set text color for better contrast
      }}
      className="py-4 text-center"
    >
      <p>&copy; {new Date().getFullYear()} React Dashboard. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
