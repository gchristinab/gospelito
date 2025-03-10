import React from "react";
import { FaInstagram, FaEnvelope } from "react-icons/fa";
import "./GospelitoPage.css";

const GospelitoPage = () => {
  return (
    <div className="container">
      <div className="content">
        <h1 className="title">GOSPELITO</h1>
        <p className="subtitle">Sunday Gospel Coloring Book for Children</p>
        <a
          href="https://www.amazon.com/Gospelito-Sunday-Gospel-Coloring-Children/dp/B0DYD19N6G/ref=sr_1_1?dib=eyJ2IjoiMSJ9.r8IW10DVEzZVA2mSj7cVwQ.XpDi2p7-jYAxkfm6-dVou75NexiMNwAlxQexX2GGSAE&dib_tag=se&qid=1741193860&refinements=p_27%3AGospelito+Books&s=books&sr=1-1&text=Gospelito+Books"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="book-image clickable"
            src="https://m.media-amazon.com/images/I/71oplcQkcEL._SY522_.jpg"
            alt="Gospelito Coloring Book"
          />
        </a>
        <p className="description">
          A fun and engaging way for children to connect with the Sunday Gospel
          through coloring! Perfect for families and religious educators.
        </p>
        <a
          className="buy-button"
          href="https://www.amazon.com/Gospelito-Sunday-Gospel-Coloring-Children/dp/B0DYD19N6G/ref=sr_1_1?dib=eyJ2IjoiMSJ9.r8IW10DVEzZVA2mSj7cVwQ.XpDi2p7-jYAxkfm6-dVou75NexiMNwAlxQexX2GGSAE&dib_tag=se&qid=1741193860&refinements=p_27%3AGospelito+Books&s=books&sr=1-1&text=Gospelito+Books"
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
            href="https://www.instagram.com/gospelitobooks/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon" />
          </a>
          <a href="mailto:admin@gospelito.com">
            <FaEnvelope className="icon" />
          </a>
        </div>
        <p className="rights">© 2025 Gospelito. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GospelitoPage;
