import React, { useState, useRef, useEffect } from "react";
//import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  const hoverTimeout = useRef();
   const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50); // You can adjust this value
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setDropdownOpen(false), 150);
  };

const [mobileContactOpen, setMobileContactOpen] = useState(false);


  return (
    <>

         <header className={`custom-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-content">

        <img src="/infinexLogo.svg" alt="Logo" className="logo-img" />
   
        </div>

        <nav className="nav-menu">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>

          {/* ✅ Dropdown with hover and click support */}
          <div
            className="dropdown-wrapper"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span
              className="dropdown-toggle"
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              Pages +
            </span>
            <div className={`dropdown-box ${dropdownOpen ? "visible" : ""}`}>
              <a href="/portfolio">Portfolio</a>
              <a href="/careerpage">Careers</a>
            </div>
          </div>

          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </nav>

		<div className="cta-dropdown">
  <button className="cta-btn">Let’s Talk ▾</button>
  <div className="cta-menu">
    <a href="tel:+918955100493" className="cta-item">📞 Call Us</a>
    <a href="https://wa.me/918955100493" target="_blank" rel="noopener noreferrer" className="cta-item">💬 WhatsApp</a>
	 <a href="mailto:info@infinextechnologies.com" className="cta-item">📧 Email Us</a>
  </div>
</div>

        <div className="hamburger-icon" onClick={() => setDrawerOpen(true)}>
          <FaBars />
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      {drawerOpen && (
        <div className="drawer-backdrop" onClick={() => setDrawerOpen(false)} />
      )}

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${drawerOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <div className="logo">
            <img src="/infinexLogo.svg" alt="Logo" className="logo-img"/>
            {/*<span><b>Web</b>Teck</span>*/}
          </div>
          <FaTimes onClick={() => setDrawerOpen(false)} />
        </div>

        <ul className="mobile-nav">
          <li><a href="/">Home</a></li>
				  <li><a href="/about">About</a></li>
				  
          <li
            className="mobile-dropdown-toggle"
            onClick={() => setMobileDropdownOpen((prev) => !prev)}
            onMouseEnter={() => setMobileDropdownOpen(true)}
            onMouseLeave={() => setMobileDropdownOpen(false)}
          >
            Services +
            <ul className={`mobile-submenu ${mobileDropdownOpen ? "show" : ""}`}>
              <li><a href="/Software">Software Development</a></li>
			  <li><a href="/mobile">Mobile Development</a></li>
			  <li><a href="/digital">Digital Marketing</a></li>
			  <li><a href="/seo">SEO & SMO </a></li>
			  <li><a href="/video">Video Editing</a></li>
			  <li><a href="/social">Social Media Marketing</a></li>
              <li><a href="/uiux">UIUX Designing</a></li>
            </ul>
          </li>

          <li
            className="mobile-dropdown-toggle"
            onClick={() => setMobileDropdownOpen((prev) => !prev)}
            onMouseEnter={() => setMobileDropdownOpen(true)}
            onMouseLeave={() => setMobileDropdownOpen(false)}
          >
            Pages +
            <ul className={`mobile-submenu ${mobileDropdownOpen ? "show" : ""}`}>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/careerpage">Career</a></li>
            </ul>
          </li>

          <li><a href="/blog">Blog</a></li>
          {/*<li><a href="/contact">Contact</a></li>*/}
		  <li
  className="mobile-dropdown-toggle"
  onClick={() => setMobileContactOpen((prev) => !prev)}
  onMouseEnter={() => setMobileContactOpen(true)}
  onMouseLeave={() => setMobileContactOpen(false)}
>
  <li><a href="/contact">Contact +</a></li>
  <ul className={`mobile-submenu ${mobileContactOpen ? "show" : ""}`}>
    <li><a href="tel:+918955100493">📞 Call Us</a></li>
    <li><a href="https://wa.me/918955100493" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a></li>
    <li><a href="mailto:info@infinextechnologies.com">📧 Email Us</a></li>
  </ul>
</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
