import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaBookOpen, FaEye, FaBullseye, FaBalanceScale } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaRocket, FaLightbulb } from 'react-icons/fa';

import {
  SiHtml5, SiCss3, SiSass, SiReact, SiNextdotjs, SiJavascript, SiTypescript,
  SiNodedotjs, SiExpress, SiMongodb, SiFirebase, SiGraphql, SiMysql,
  SiRedux, SiVite, SiPostman, SiJenkins, SiDjango, SiGoland, SiAdobephotoshop,
  SiAdobeillustrator, SiAdobexd, SiAdobeaftereffects, SiAdobepremierepro,
  SiFlutter, SiSalesforce, SiWix, SiYii, SiLaravel, SiCodeigniter,
  SiGoogleads, SiTensorflow, SiPytorch
} from 'react-icons/si';

import {
  FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap,
  FaNodeJs, FaDatabase, FaPython, FaDocker, FaAws,
  FaGitAlt, FaFigma, FaGithub, FaNpm, FaPhp, FaAngular,
  FaSwift, FaJava, FaGoogle, FaVideo, FaRobot, FaWordpress
} from 'react-icons/fa';

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [flippedIndex, setFlippedIndex] = useState(null);
  const cardRefs = useRef([]);

const data = [
  {
    title: 'Story',
    icon: <FaBookOpen size={60} />,
    content: 'Founded in 2025, Infinex Technology emerged from a simple yet powerful vision: to democratize access to cutting-edge technology solutions for businesses of all sizes. What began as a small team of passionate engineers and designers in a modest office has evolved into a leading technology consultancy serving clients across diverse industries worldwide. Our journey started with our founders recognizing a critical gap in the market—businesses struggling to navigate the complex digital transformation landscape while maintaining their core operations. From our first client project, a custom inventory management system for a local retailer, to now developing enterprise-scale cloud platforms for multinational corporations, every milestone has been driven by our unwavering commitment to understanding client needs and delivering solutions that exceed expectations. Our growth story is not just about expanding our team or increasing revenue; it\'s about the countless businesses we\'ve helped transform, the innovative solutions we\'ve pioneered, and the lasting partnerships we\'ve built. As a technology partner committed to your success, we take pride in delivering high-quality solutions that exceed expectations and drive measurable business outcomes. Today, as we continue to push the boundaries of what\'s possible with technology, our founding principles remain unchanged: listen carefully, innovate boldly, and deliver relentlessly.'
  },
  {
    title: 'Vision',
    icon: <FaEye size={60} />,
    content: 'We envision a future where technology serves as the great equalizer, enabling every business—from ambitious startups to established enterprises—to compete and thrive in an increasingly digital world. Our vision extends beyond simply providing software solutions; we aim to be the catalyst that transforms how businesses think about and leverage technology. We see ourselves at the forefront of emerging technologies like artificial intelligence, blockchain, and IoT, not just as implementers but as innovators who help shape these technologies for practical business applications. Our team constantly explores emerging technologies to bring innovative solutions to complex business challenges, ensuring our clients stay ahead of the curve. In our envisioned future, geographical boundaries don\'t limit access to world-class technology solutions, and business size doesn\'t determine the quality of digital tools available. We strive to create an ecosystem where innovation flows seamlessly from concept to implementation, where businesses can adapt quickly to market changes, and where technology amplifies human potential rather than replacing it. Our ultimate vision is to be recognized globally as the technology partner that consistently turns ambitious ideas into market-leading realities, setting new standards for excellence, reliability, and innovation in the technology consulting space.'
  },
  {
    title: 'Mission',
    icon: <FaBullseye size={60} />,
    content: 'Our mission is to empower businesses to harness the full potential of technology to achieve their strategic objectives and maintain competitive advantage in today\'s rapidly evolving digital landscape. We accomplish this by delivering custom-built, scalable, and secure software solutions that are meticulously tailored to each client\'s unique challenges, industry requirements, and growth aspirations. Beyond just building software, we serve as strategic technology advisors, helping businesses navigate complex digital transformation journeys with confidence and clarity. We build lasting relationships with our clients, becoming trusted advisors and partners in their digital journey, providing strategic guidance and technical expertise every step of the way. Our approach combines deep technical expertise with strategic business acumen, ensuring that every solution we deliver not only meets immediate needs but also positions our clients for future success. We are committed to fostering long-term partnerships built on trust, transparency, and mutual success. This means staying engaged throughout the entire lifecycle of our solutions—from initial consultation and strategic planning through development, deployment, training, and ongoing support. We measure our success not just by the functionality of the systems we build, but by the tangible business outcomes our clients achieve—increased efficiency, reduced costs, improved customer satisfaction, and accelerated growth.'
  },
  {
    title: 'Values',
    icon: <FaBalanceScale size={60} />,
    content: 'Innovation & Excellence: We pursue cutting-edge solutions while maintaining the highest standards of quality in every deliverable. Our commitment to excellence drives us to continuously improve our processes, adopt new technologies, and challenge conventional approaches to problem-solving. We believe that innovation without execution is merely imagination, so we focus on turning creative ideas into practical, impactful solutions. Client-Centricity & Partnership: Our clients\' success is our success. We approach every project as true partners, taking time to understand not just what our clients want, but what they need to achieve their broader business objectives. This means active listening, proactive communication, and a willingness to go beyond the scope when it truly benefits our clients. Integrity & Transparency: We build trust through honest communication, ethical practices, and transparent processes. This includes being upfront about project timelines, potential challenges, and costs, as well as taking responsibility when things don\'t go as planned and working diligently to make them right. Security & Reliability: We implement robust security measures and reliable infrastructure to protect your business and ensure continuity, giving you peace of mind to focus on what you do best—running and growing your business. Collaboration & Teamwork: We foster an inclusive environment where diverse perspectives are valued and every team member is empowered to contribute their best work. Agility & Continuous Learning: In the fast-paced technology sector, adaptability is crucial. We embrace change as an opportunity for growth and maintain a learning mindset that keeps us at the forefront of technological advancements.'
  }
];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        cardRefs.current.length &&
        !cardRefs.current.some(ref => ref && ref.contains(event.target))
      ) {
        setFlippedIndex(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleFlip = (index) => {
    setFlippedIndex(prev => (prev === index ? null : index));
  };

  const teamMembers = [
    {
      name: "Mr. Govind Bharadwaj", title: " CEO & Founder", image: "",
      socials: { facebook: "#", twitter: "#", linkedin: "#", Instagram: "#" }
    },
    { name: "Mr. Gaurav Mittal", title: " Chief Technology Officer", image: "", socials: { facebook: "#", twitter: "#", linkedin: "#", Instagram: "#" } },
    { name: " Ms. Aanchal Saini", title: " Team Lead – HR Manager", image: "", socials: { facebook: "#", twitter: "#", linkedin: "#", Instagram: "#" } }
  ];


const testimonials = [
  {
    name: "Mike Hardson",
    title: "Senior Designer",
    image: "/assets/img/testimonials/testimonials-1.jpg",
    rating: 5,
    text: "This is due to their excellent service, competitive pricing and customer support. It’s refreshing to get such a personal touch. Duis aute lorem ipsum is simply free text repreh."
  },
  {
    name: "Aleesha Smith",
    title: "Senior Developer",
    image: "/assets/img/testimonials/testimonials-2.jpg",
    rating: 5,
    text: "This is due to their excellent service, competitive pricing and customer support. It’s refreshing to get such a personal touch. Duis aute lorem ipsum is simply free text repreh."
  }
];

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 600,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992, // tablet & below
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    }
  ]
};

  // TECH STACK
const techCategories = [
    {
      name: "Frontend & Mobile",
      items: [
        { icon: <FaReact />, label: "ReactJS" },
        { icon: <FaReact />, label: "React Native" },
        { icon: <FaAngular />, label: "Angular" },
        { icon: <SiTypescript />, label: "TypeScript" },
        { icon: <FaJsSquare />, label: "JavaScript" },
        { icon: <SiNextdotjs />, label: "Next.js" },
        { icon: <SiFlutter />, label: "Flutter" },
        { icon: <FaSwift />, label: "Swift" },
      ],
    },
    {
      name: "Backend & Database",
      items: [
        { icon: <SiMysql />, label: "MySQL" },
        { icon: <SiMongodb />, label: "MongoDB" },
        { icon: <FaNodeJs />, label: "Node.js" },
        { icon: <FaPhp />, label: "PHP" },
        { icon: <SiLaravel />, label: "Laravel" },
        { icon: <SiCodeigniter />, label: "CodeIgniter" },
        { icon: <SiYii />, label: "Yii2" },
        { icon: <FaPython />, label: "Python" },
        { icon: <SiGoland />, label: "Go Lang" },
        { icon: <SiDjango />, label: "Django" },
      ],
    },
    {
      name: "CMS & Enterprise",
      items: [
        { icon: <FaWordpress />, label: "WordPress" },
        { icon: <SiWix />, label: "Wix" },
        { icon: <FaJava />, label: "Java" },
        { icon: <SiSalesforce />, label: "Apex/LWC" },
        { icon: <SiSalesforce />, label: "Salesforce" },
      ],
    },
    {
      name: "Design & Creative",
      items: [
        { icon: <SiAdobeillustrator />, label: "Adobe Illustrator" },
        { icon: <SiAdobephotoshop />, label: "Photoshop" },
        { icon: <FaFigma />, label: "Figma" },
        { icon: <SiAdobexd />, label: "Adobe XD" },
        { icon: <SiAdobeaftereffects />, label: "After Effects" },
        { icon: <SiAdobepremierepro />, label: "Premiere Pro" },
        { icon: <FaVideo />, label: "Video Editing" },
      ],
    },
    {
      name: "Marketing & Social",
      items: [
        { icon: <FaFacebookF />, label: "Facebook Marketing" },
        { icon: <FaInstagram />, label: "Instagram Marketing" },
        { icon: <FaLinkedinIn />, label: "LinkedIn Marketing" },
        { icon: <SiGoogleads />, label: "Google Ads" },
        { icon: <SiGoogleads />, label: "Meta Ads" },
        { icon: <FaVideo />, label: "SEO" },
        { icon: <FaVideo />, label: "SMO" },
      ],
    },
    {
      name: "AI & Advanced",
      items: [
        { icon: <FaRobot />, label: "AI Tools" },
        { icon: <SiTensorflow />, label: "ML Tools" },
        { icon: <FaRobot />, label: "AI/ML Solutions" },
      ],
    }
  ];

  const [activeCategory, setActiveCategory] = useState("Frontend & Mobile");

  return (
    <div className="about-page-wrapper">
      {/* HERO SECTION */}
      <section className="about-page-hero-section" data-aos="fade-up">
        <div className="about-page-hero-wrapper">
          <div className="about-page-hero-text">
            <h1>About Us</h1>
            <p>At Infinex, we believe in turning bold ideas into scalable digital experiences.</p>
          </div>
        </div>
      </section>

{/*CONTENT */}
 <section className="about-page-hero">
      <div className="about-page-hero-container">
        {/* Left Side */}
        <div className="about-page-hero-left">
          <div className="about-page-hero-image-wrapper">
        <img
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center"
        alt="About Us - Technology Team"
        className="about-page-hero-image"
      />
            <img src="/assets/shapes/yellow-triangle.png" alt="" className="triangle-yellow" />
            <img src="/assets/shapes/blue-triangle.png" alt="" className="triangle-blue" />
          </div>
        </div>

        {/* Right Side */}
        <div className="about-page-hero-right">
          <div className="about-page-hero-badge">ABOUT US</div>
   <h1>
  Technology is the backbone of <span>tomorrow's</span> success
</h1>
<p>
  At Infinex Technology, we transform complex digital challenges into streamlined solutions that drive growth, efficiency, and innovation for businesses ready to thrive in the digital age.
</p>

<div className="about-page-hero-cards">
  <div className="about-page-hero-card">
    <div className="icon-placeholder">
      <FaRocket />
    </div>
    <h3>Our Ambition</h3>
    <p>
      To empower businesses with cutting-edge technology solutions that accelerate growth, streamline operations, and unlock new possibilities in the digital landscape.
    </p>
  </div>
  <div className="about-page-hero-card">
    <div className="icon-placeholder">
      <FaLightbulb />
    </div>
    <h3>Our Purpose</h3>
    <p>
      To be the trusted technology partner that bridges the gap between ambitious ideas and successful digital transformation for businesses worldwide.
    </p>
  </div>
</div>
        </div>
      </div>
    </section>


      {/* FLIP CARDS */}
      <section className="about-page-flip-section" data-aos="fade-up">
        <div className="about-page-flip-card-container">
          {data.map((item, index) => (
            <div
              className={`flip-card ${flippedIndex === index ? 'flipped' : ''}`}
              key={index}
              onClick={() => handleFlip(index)}
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <div className="about-page-flip-card-inner">
                <div className="about-page-flip-card-front">
                  {item.icon}
                  <h3>{item.title}</h3>
                  <p className="about-page-open-text">Open →</p>
                </div>
                <div className="about-page-flip-card-back">
                  <h4>{item.title}</h4>
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THREE BLOCKS */}
      <section className="about-page-three-section">
        {[
         {
  title: "Who We Are",
  text: "Infinex Technology is a forward-thinking team of engineers, designers, and strategists united by a shared passion for digital innovation. We specialize in turning complex challenges into smart, efficient, and scalable solutions. Our culture thrives on curiosity, collaboration, and continuous learning.",
  img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center",
  bgColor: "#f3f9ff"
},
{
  title: "What We Do", 
  text: "We design and develop custom software applications—including web platforms, mobile apps, and cloud-based systems—that help businesses automate, scale, and innovate. From intuitive UI/UX to backend architecture and DevOps, we deliver full-stack solutions tailored to client needs.",
  img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&crop=center",
  bgColor: "#fff7f0"
},
{
  title: "Why It Matters",
  text: "In today's fast-evolving digital landscape, businesses need more than just technology—they need vision, speed, and adaptability. At Infinex, we empower our clients with future-ready tools that reduce friction, accelerate growth, and create long-term value through innovation.",
  img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center", 
  bgColor: "#f6fff0"
}
        ].map((section, index) => (
          <div
            className={`about-page-block ${index % 2 !== 0 ? 'reverse' : ''}`}
            key={index}
            data-aos="fade-up"
            style={{
              backgroundColor: section.bgColor,
              padding: "40px 20px",
              borderRadius: "16px",
              marginBottom: "30px"
            }}
          >
            <div className="about-page-block-text">
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </div>
            <div className="about-page-block-img">
              <img src={section.img} alt={section.title} />
            </div>
          </div>
        ))}
      </section>

      {/* TECH STACK TABS */}
      <section className="about-page-tech-stack-section" data-aos="fade-up" style={{ background: "#eaf6fd", padding: "60px 20px", borderRadius: "20px", margin: "40px auto", maxWidth: "1200px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Technologies We Use</h2>
        
        {/* Tab Buttons */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px", marginBottom: "30px" }}>
          {techCategories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(cat.name)}
              style={{
                padding: "10px 20px",
                borderRadius: "999px",
                border: "none",
                backgroundColor: activeCategory === cat.name ? "#007acc" : "#dbe9f5",
                color: activeCategory === cat.name ? "#fff" : "#333",
                fontWeight: "600",
                cursor: "pointer",
                transition: "background-color 0.3s"
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Tech Icons Grid */}
        <div className="about-page-tech-grid" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
          {techCategories
            .find(cat => cat.name === activeCategory)
            .items.map((tech, i) => (
              <div key={i} className="about-page-tech-box" style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "12px",
                textAlign: "center",
                width: "120px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                cursor: "pointer",
                transition: "transform 0.3s ease"
              }}>
                <div style={{ fontSize: "28px", marginBottom: "10px" }}>{tech.icon}</div>
                <p style={{ fontSize: "14px", fontWeight: "500" }}>{tech.label}</p>
              </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
   <section className="about-page-team-section" data-aos="fade-up">
        <h2 className="about-page-team-heading">Meet the Team</h2>
        <div className="about-page-team-container">
          {teamMembers.map((member, idx) => (
            <div className="about-page-team-card-v2" key={idx}>
              <div className="about-page-team-img-holder">
                <img src={member.image} alt={member.name} className="about-page-team-avatar" />
              </div>
              <div className="about-page-team-details">
                <h3>{member.name}</h3>
                <p>{member.title}</p>
                <div className="about-page-team-social-icons">
                  <a href={member.socials.facebook} target="_blank" rel="noreferrer"><FaFacebookF /></a>
                  <a href={member.socials.twitter} target="_blank" rel="noreferrer"><FaTwitter /></a>
                  <a href={member.socials.linkedin} target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                  <a href={member.socials.Instagram} target="_blank" rel="noreferrer"><FaInstagram /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
    <section className="about-page-testimonial-section">
      <h5 className="about-page-testimonial-subtitle">Client Testimonials</h5>
      <h2 className="about-page-testimonial-title">What They’re Talking?</h2>
      <Slider {...settings} className="about-page-testimonial-slider">
        {testimonials.map((item, index) => (
          <div className="about-page-testimonial-card" key={index}>
            <div className="about-page-testimonial-profile">
              <img src={item.image} alt={item.name} className="testimonial-img" />
              <div className="about-page-testimonial-name">
                <h4>{item.name}</h4>
                <p>{item.title}</p>
              </div>
            </div>
            <div className="about-page-testimonial-content">
              <div className="stars">
                {Array.from({ length: item.rating }, (_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="about-page-testimonial-text">{item.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>

      {/* CONTACT */}
      <section className="about-page-contact-section" data-aos="fade-up">
        <h2>Get in Touch</h2>
        <form className="about-page-contact-form">
          <div className="about-page-form-group">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
          </div>
          <textarea rows="4" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default AboutPage;
