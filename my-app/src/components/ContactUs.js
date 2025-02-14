import React, { useState } from "react";
import "./ContactUs.css"; // We'll style the form

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate the form inputs
  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      // You can submit the data to a backend here
      // Example: fetch('/submit', { method: 'POST', body: JSON.stringify(formData) })
      console.log("Form submitted:", formData);
      // Reset the form after submission
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact-us" className="contact-us">
      <h2> Contact Us </h2>{" "}
      {isSubmitted && (
        <p className="success-message"> Thank you for contacting us! </p>
      )}{" "}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name"> Name </label>{" "}
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />{" "}
          {errors.name && <p className="error"> {errors.name} </p>}{" "}
        </div>
        <div className="form-group">
          <label htmlFor="email"> Email </label>{" "}
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />{" "}
          {errors.email && <p className="error"> {errors.email} </p>}{" "}
        </div>
        <div className="form-group">
          <label htmlFor="message"> Message </label>{" "}
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />{" "}
          {errors.message && <p className="error"> {errors.message} </p>}{" "}
        </div>
        <button type="submit"> Send Message </button>{" "}
      </form>{" "}
    </section>
  );
};

export default ContactUs;
