import React from "react";
import "./App.css";
import "./components/Header.css"; // Import the Header styles
import "./components/Hero.css";
import "./components/About.css";
import "./components/Footer.css";
import "./components/ContactUs.css"; // Import the ContactUs styles

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ContactUs from "./components/ContactUs"; // Import the ContactUs component
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <section id="home">
        <Hero />
      </section>{" "}
      <section id="about">
        <About />
      </section>{" "}
      <section id="purchase">
        <div className="purchase-section">
          <h2> Get Your Gospelito </h2>{" "}
          <p> Get our product now and start your journey with Gospelito! </p>{" "}
          <button className="purchase-btn"> Buy Now </button>{" "}
        </div>{" "}
      </section>{" "}
      <section id="contact">
        <ContactUs />
      </section>{" "}
      <Footer />
    </div>
  );
}

export default App;
