import React from "react";
import { FaInstagram, FaEnvelope } from "react-icons/fa";
import "./GospelitoPageV1.css";

const GospelitoPage = () => {
  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Sunday Gospel Coloring Book</h1>
        <p className="subtitle">2026 Edition</p>
        <a
          href="https://www.amazon.com/author/gospelito-books"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="book-image clickable"
            src="/professional_cover_3.png"
            alt="Gospelito Coloring Book"
          />
        </a>
        <p className="description">
          A fun and engaging way for children to connect with the Sunday Gospel
          through coloring!
          <br></br>
          Perfect for families and religious educators.
        </p>
        <a
          className="buy-button"
          href="https://www.amazon.com/author/gospelito-books"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy on Amazon
        </a>
      </div>
      <br></br>

      <footer className="footer">
        <div className="social-icons">
          <a
            href="https://www.instagram.com/gospelcoloringbook/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon" />
          </a>
          <a href="mailto:gospelitobooks@gmail.com">
            <FaEnvelope className="icon" />
          </a>
        </div>
        <p className="rights">© 2025 Gospelito Books. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GospelitoPage;
