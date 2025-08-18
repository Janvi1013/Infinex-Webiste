import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [formError, setformError] = useState({});
  const emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handlechange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (varify()) {
      console.log("Form Submitted:", formData);
    }
  };

  const varify = () => {
    let localError = {};
    let valid = true;

    if (formData.name.length === 0) {
      localError.name = "Name is required";
      valid = false;
    } else if (formData.name.length < 4) {
      localError.name = "Name must be at least 4 characters";
      valid = false;
    }

    if (formData.email.length === 0) {
      localError.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      localError.email = "Invalid email format";
      valid = false;
    }

    if (formData.subject.length === 0) {
      localError.subject = "Subject is required";
      valid = false;
    } else if (formData.subject.length < 6) {
      localError.subject = "Subject must be at least 6 characters";
      valid = false;
    }

    if (formData.message.length === 0) {
      localError.message = "Message is required";
      valid = false;
    } else if (formData.message.length < 10) {
      localError.message = "Message must be at least 10 characters";
      valid = false;
    }

    setformError(localError);
    return valid;
  };

  return (
    <section id="contact" className="contact-section">

      {/* 🔷 Banner */}
      <div className="contact-banner" data-aos="fade-down">
        <img src="/assets/img/working-3.jpg" alt="Contact Banner" className="banner-bg" />
        <div className="banner-text">
          <h2>Contact Us</h2>
          <p>We'd love to hear from you!</p>
        </div>
      </div>

      {/* 🔷 Info Boxes */}
      <div className="info-boxes" data-aos="fade-up">
        <div className="info-box" data-aos="fade-up" data-aos-delay="100">
          <i className="bi bi-geo-alt"></i>
          <h4>Address</h4>
          <p>  Gali No. 5, opp. Durgapura Railway Station, Jadon Nagar-A, Nalanda Vihar, Durgapura, Jaipur, Rajasthan 302018</p>
        </div>
        <div className="info-box" data-aos="fade-up" data-aos-delay="200">
          <i className="bi bi-telephone"></i>
          <h4>Phone</h4>
          <Link to={"tel:+918955100493"}>+91 8955100493</Link>
        </div>
        <div className="info-box" data-aos="fade-up" data-aos-delay="300">
          <i className="bi bi-envelope"></i>
          <h4>Email</h4>
          <Link to={"mailto:info@infinextechnologies.com"}>info@infinextechnologies.com</Link>
        </div>
        <div className="info-box" data-aos="fade-up" data-aos-delay="400">
          <i className="bi bi-clock"></i>
          <h4>Open Hours</h4>
          <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
        </div>
      </div>

      {/* 🔷 Full-width Form Section with BG Image */}
      <div className="form-bg-container" data-aos="zoom-in-up" data-aos-delay="100">
        <img src="/assets/img/working-2.jpg" alt="Form BG" className="form-full-bg" />
        <div className="contact-form-wrapper">
          <form className="contact-form">
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handlechange}
                data-aos="fade-right"
                data-aos-delay="200"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                onChange={handlechange}
                data-aos="fade-left"
                data-aos-delay="300"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              onChange={handlechange}
              data-aos="fade-up"
              data-aos-delay="400"
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Message"
              onChange={handlechange}
              data-aos="fade-up"
              data-aos-delay="500"
            ></textarea>

            {Object.values(formError).length > 0 && (
              <div className="error-message" data-aos="fade-in" data-aos-delay="600">
                {Object.values(formError).map((err, i) => (
                  <p key={i}>{err}</p>
                ))}
              </div>
            )}

            <button
              type="button"
              onClick={handleSubmit}
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* 🔷 Map */}
      <div className="map-container" data-aos="fade-up" data-aos-delay="300">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2044.3998074992833!2d75.78143261150228!3d26.855633696564876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db55207e7f787%3A0x30c6caefe3401b6d!2sInfinex%20Technologies%20Pvt.%20Ltd%20%7C%20Jaipur!5e0!3m2!1sen!2sin!4v1752239080364!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;
