import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import {
  FaCheckCircle,
  FaNetworkWired,
  FaBolt,
  FaLightbulb,
  FaStar,
  FaLayerGroup,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
//import "./AboutCompany.css";

const AboutCompany = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="about-company-section">
      <div className="about-container">
        <div className="about-left" data-aos="fade-right">
          <div className="about-image-grid">
            <div className="image-wrapper">
              <img
                src="/assets/img/working-4.jpg"
                alt="Team"
                className="about-main-img"
              />
              <div className="about-overlay-box">
                <h2>
                  <CountUp end={50} duration={3} />+
                </h2>
                <p>Satisfied Clients</p>
              </div>
            </div>
            <img
              src="/assets/img/working-2.jpg"
              alt="Discussion"
              className="about-sub-img"
            />
          </div>
        </div>

        <div className="about-right" data-aos="fade-left">
     
          <p className="subheading">About Infinex Technologies</p>
<p className="description">
  We are a leading IT solutions provider specializing in Software Development, 
  Mobile App Development, and Digital Marketing. Our mission is to empower 
  businesses with scalable and innovative technology solutions. A subsidiary 
  of GB Tech Solutions Pvt. Ltd.
</p>

<h3>Our Reach & Community:</h3>
				  <ul className="about-features">
					  <li> <FaCheckCircle /> We take pride in delivering high-quality solutions that exceed expectations and drive measurable business outcomes. </li>
					  <li> <FaCheckCircle /> Our team constantly explores emerging technologies to bring innovative solutions to complex business challenges. </li>
					  <li> <FaCheckCircle /> We build lasting relationships with our clients, becoming trusted advisors and partners in their digital journey. </li>
					  <li> <FaCheckCircle />We implement robust security measures and reliable infrastructure to protect your business and ensure continuity. </li>
				  </ul>

<p className="description">
  We are committed to innovation, excellence, and knowledge-sharing to shape the 
  future of technology.
</p>


          {/*<button className="btn-primary">Learn More</button>*/}
        </div>
      </div>

      <div className="infinex-values-section">
        <h3 className="infinex-heading">What INFINEX Stands For</h3>
        <div className="infinex-grid">
          {[
            {
              letter: "I",
              word: "Innovation",
              icon: <FaLightbulb />,
              desc: "We thrive on new ideas and creative solutions.",
            },
            {
              letter: "N",
              word: "Next-Level",
              icon: <FaBolt />,
              desc: "Pushing beyond limits to deliver future-ready results.",
            },
            {
              letter: "F",
              word: "Focus",
              icon: <FaLayerGroup />,
              desc: "We stay locked in on what truly matters.",
            },
            {
              letter: "I",
              word: "Integrity",
              icon: <MdVerified />,
              desc: "We act with honesty and strong moral principles.",
            },
            {
              letter: "N",
              word: "Network",
              icon: <FaNetworkWired />,
              desc: "Building bridges that empower collaboration.",
            },
            {
              letter: "E",
              word: "Excellence",
              icon: <FaStar />,
              desc: "Striving for quality in every detail we deliver.",
            },
            {
              letter: "X",
              word: "eXperience",
              icon: <GiPerspectiveDiceSixFacesRandom />,
              desc: "Crafting journeys users love and remember.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="infinex-box"
              title={item.desc}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="infinex-icon">{item.icon}</div>
              <div className="letter">{item.letter}</div>
              <div className="word">{item.word}</div>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
