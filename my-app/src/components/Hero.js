import React from "react";
import backgroundImage from "../assets/background.jpg"; // Import image from src folder
import "./Hero.css";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Apply background image via inline style
    >
      <h1>Welcome to Our Website</h1>
      <p>Learn more about our products and services.</p>
    </section>
  );
};

export default Hero;
