import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Contact Top Bar */}
      <div className="footer-contact-bar">
        <div className="footer-contact-item">
          <div className="icon-box animate-icon"><FaPhoneAlt /></div>
          <div className="footer-contact-info">
            <p>Quick Call Us:</p>
            <strong>+190-8800-0393</strong>
          </div>
        </div>
        <div className="footer-contact-item">
          <div className="icon-box animate-icon"><FaEnvelope /></div>
          <div className="footer-contact-info">
            <p>Mail Us On:</p>
            <strong>info@webteck.com</strong>
          </div>
        </div>
        <div className="footer-contact-item">
          <div className="icon-box animate-icon"><FaMapMarkerAlt /></div>
          <div className="footer-contact-info">
            <p>Visit Location:</p>
            <strong>54 Flemington, USA</strong>
          </div>
        </div>
      </div>

      {/* Main Footer Section */}
      <footer className="main-footer">
        <div className="footer-columns">

          {/* About */}
          <div className="footer-col about-col">
            <h3>ABOUT COMPANY</h3>
            <p>
              Professionally redefine transparent ROI through low-risk
              high-yield imperatives. Progressively create empowered,
              cost-effective users via team driven.
            </p>

			<div style={{ fontSize: "30px", color: "#7f5eff", display: "flex", gap: "10px" }} className="footer-social-icons animate-icon">
 <a href="https://www.facebook.com/share/16JQd7VX4T/" target="_blank" rel="noopener noreferrer">
  <FaFacebookF />
</a>
<a href="https://www.instagram.com/infinextechnologies?igsh=ZGRyaHBuaG1kNGRi" target="_blank" rel="noopener noreferrer">
  <FaInstagram />
</a>
<a href="https://www.linkedin.com/company/infinextechnologies/" target="_blank" rel="noopener noreferrer">
  <FaLinkedinIn />
</a>
<a href="https://wa.me/918955100493" target="_blank" rel="noopener noreferrer">
  <FaWhatsapp />
</a>

</div>

          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>QUICK LINKS</h4>
         <ul>
  <li><a href="/about">About Us</a></li>
  <li><a href="/services">Our Services</a></li>
  <li><a href="/portfolio">Our Projects</a></li>
  <li><a href="/blog">Our Blogs</a></li>
  <li><a href="/contact">Contact Us</a></li>
</ul>

          </div>

          {/* IT Services */}
          <div className="footer-col">
            <h4>IT SERVICES</h4>
            <ul>
               <li><a href="/Software">Software Development</a></li>
			  <li><a href="/mobile">Mobile Development</a></li>
			  <li><a href="/digital">Digital Marketing</a></li>
			  <li><a href="/seo">SEO & SMO </a></li>
			  <li><a href="/video">Video Editing</a></li>
			  <li><a href="/social">Social Media Marketing</a></li>
              <li><a href="/uiux">UIUX Designing</a></li>
            </ul>
          </div>

          {/* Newsletter & Map */}
          <div className="footer-col newsletter-col">
            <h4>NEWSLETTER</h4>
            <p>Subscribe to our newsletter to get updates</p>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          <h4 style={{ marginTop: "25px" }}>OUR LOCATION</h4>
<div className="home-map-container">
  <iframe
    title="company-map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2044.3998074992833!2d75.78143261150228!3d26.855633696564876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db55207e7f787%3A0x30c6caefe3401b6d!2sInfinex%20Technologies%20Pvt.%20Ltd%20%7C%20Jaipur!5e0!3m2!1sen!2sin!4v1752239080364!5m2!1sen!2sin"
    width="100%"
    height="150"
    frameBorder="0"
    style={{ border: 0, borderRadius: "8px" }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>Copyright © 2025 <span>Infinex</span>. All Rights Reserved.</p>
          <div className="footer-links">
            <a href="#">Terms & Condition</a>
            <a href="#">Careers</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
