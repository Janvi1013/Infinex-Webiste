import React, { useEffect } from 'react';

// Mock project data
const projects = [
  {
    id: 1,
    title: "PointClub",
    description: "Survey-based rewards platform where users earn points for sharing their opinions, which can be redeemed for gift cards or cash and conducting market research with advanced analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop", // Analytics dashboard
    link: "https://www.pointclub.com/"
  },
  {
    id: 2,
    title: "Global Fitness",
    description: "Leading provider of new and refurbished commercial fitness equipment, offering top-brand machines and expert services for both home and professional gym setups.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop", // Gym equipment
    link: "https://www.globalfitness.com/"
  },
  {
    id: 3,
    title: "Design Centre",
    description: "Full-service interior and architectural design firm offering customized, innovative solutions for residential and commercial spaces.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop", // Modern interior design
    link: "https://designcentreindore.com/"
  },
  {
    id: 4,
    title: "Jadwalak",
    description: "Immigration Form Filling application built with Angular, MongoDB & Node.js streamlining visa and immigration processes.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop", // Passport and documents
    link: "https://www.jadwalak.com/"
  },
  {
    id: 5,
    title: "Olivier Laudus",
    description: "Jewellery e-commerce platform powered by Shopify for luxury jewelry shopping with elegant design and seamless checkout.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=300&fit=crop", // Luxury jewelry
    link: "https://www.olivierlaudus.com/"
  },
  {
    id: 6,
    title: "Springfit",
    description: "Mattress e-commerce store built on Shopify platform offering premium sleep solutions with advanced product customization.",
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=500&h=300&fit=crop", // Bedroom with mattress
    link: "https://www.springfit.com/"
  },
  {
    id: 7,
    title: "Mayur Home",
    description: "Interior Design e-commerce platform using WooCommerce for showcasing and selling premium home decor and furniture.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=300&fit=crop", // Modern home furniture
    link: "https://www.mayurhome.com/"
  },
  {
    id: 8,
    title: "Jane Fashion Store",
    description: "Fashion & Apparel web application built with React.js featuring modern UI/UX and comprehensive product catalog.",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&h=300&fit=crop", // Fashion clothing display
    link: "https://jane.com/"
  }
];


const Portfolio = () => {
  useEffect(() => {
    // Initialize AOS
    const initAOS = () => {
      const elements = document.querySelectorAll('[data-aos]');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('portfolio-aos-animate');
          }
        });
      });
      
      elements.forEach(element => {
        observer.observe(element);
      });
    };
    
    initAOS();
  }, []);

  return (
    <div className="portfolio">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="portfolio-hero-background">
          <svg className="portfolio-pattern portfolio-pattern-1" viewBox="0 0 200 200">
            <polygon points="100,10 40,198 190,78 10,78 160,198" fill="rgba(255,255,255,0.1)" />
          </svg>
          <svg className="portfolio-pattern portfolio-pattern-2" viewBox="0 0 200 200">
            <path d="M20,20 L180,20 L180,100 L100,180 L20,100 Z" fill="rgba(255,255,255,0.05)" />
          </svg>
          <svg className="portfolio-pattern portfolio-pattern-3" viewBox="0 0 200 200">
            <path d="M100,20 L180,60 L160,140 L40,140 L20,60 Z" fill="rgba(255,255,255,0.08)" />
          </svg>
        </div>
        
        <div className="portfolio-hero-content" data-aos="fade-up">
  <h1 className="portfolio-hero-title">Portfolio</h1>
  <p className="portfolio-hero-subtitle">
    Transforming digital landscapes with innovative web and mobile solutions
  </p>
  <p className="portfolio-hero-description">
    We craft exceptional digital experiences through cutting-edge technology and creative design. 
    From dynamic web applications to scalable e-commerce platforms, our portfolio showcases 
    diverse projects built with modern frameworks and technologies.
  </p>
          
          <div className="portfolio-hero-icon" data-aos="zoom-in" data-aos-delay="300">
            <svg viewBox="0 0 100 100" className="portfolio-infinity-icon">
              <path d="M25 50 C25 30, 40 20, 50 30 C60 20, 75 30, 75 50 C75 70, 60 80, 50 70 C40 80, 25 70, 25 50 Z" 
                    fill="none" stroke="white" strokeWidth="3"/>
            </svg>
          </div>
        </div>
      </section>

		  {/* Success Stories Section */}
      <section className="portfolio-success-stories" id="success-stories">
        <div className="portfolio-container">
          <div className="portfolio-success-content">
            <div className="portfolio-success-text" data-aos="fade-right">
              <h2 className="portfolio-section-title">Our Portfolio & Success Stories</h2>
              <p className="portfolio-success-description">
                We have successfully delivered 100+ projects across industries, helping businesses 
                streamline operations and enhance digital presence locally and globally. We have 
                done E-commerce websites, Gaming Apps, Management Software, Food Delivery 
                apps many more!
              </p>
            </div>
            <div className="portfolio-success-logos" data-aos="fade-left">
              <p className="portfolio-success-stats">
                We have successfully designed and delivered 50+ brand logos across 
                various industries, empowering businesses to streamline operations 
                and enhance their digital presence both locally and globally.
              </p>
              <div className="portfolio-logos-section">
  <div className="portfolio-logos-container">
    <img 
      src="/assets/img/portfolio/portfolio_logos.png" 
      alt="Portfolio Client Logos" 
      className="portfolio-logos-image"
    />
  </div>
</div>
            </div>
          </div>
        </div>
      </section>

      {/* Magazine Covers Section */}
      <section className="portfolio-magazine-covers" id="magazine-covers">
        <div className="portfolio-container">
          <div className="portfolio-magazine-content">
            <div className="portfolio-magazine-text" data-aos="fade-right">
              <p className="portfolio-magazine-description">
                We have successfully designed 30+ Magazine covers for Bollywood celebrities 
                and top brands, creating impactful visuals for luxury, lifestyle, fashion, 
                and corporate editions.
              </p>
            </div>
            <div className="portfolio-magazine-images" data-aos="fade-left">
              <div className="portfolio-magazine-grid">
                <div className="portfolio-magazine-item">
                  <img src="/assets/img/portfolio/magzine_1.png" alt="Filmfare Magazine" />
                </div>
                <div className="portfolio-magazine-item">
                  <img src="/assets/img/portfolio/magzine_2.png" alt="Grazia Magazine" />
                </div>
                {/*<div className="portfolio-magazine-item">
                  <img src="https://images.unsplash.com/photo-1533228876829-65c94e7b1406?w=300&h=400&fit=crop" alt="Heroes Magazine" />
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UI/UX Solutions Section */}
      <section className="portfolio-uiux-solutions" id="uiux-solutions">
        <div className="portfolio-container">
          <div className="portfolio-uiux-content">
            <div className="portfolio-uiux-images" data-aos="fade-right">
              <div className="portfolio-uiux-showcase">
                <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=350&fit=crop" alt="Food Delivery App UI" />
              </div>
            </div>
            <div className="portfolio-uiux-text" data-aos="fade-left">
              <p className="portfolio-uiux-description">
                We have successfully designed 100+ UI/UX solutions for websites and mobile apps, 
                including prototyping and wireframing. Our expertise spans industries like food delivery, 
                e-commerce, management software, fintech, healthtech, edtech, and SaaS platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Solutions Section */}
      <section className="portfolio-digital-solutions" id="digital-solutions">
        <div className="portfolio-container">
          <div className="portfolio-digital-content">
            <div className="portfolio-digital-text" data-aos="fade-right">
              <p className="portfolio-digital-description">
                We have successfully designed and developed 100+ digital solutions, including 
                platforms like Femme Care AI Tool, HCC Intake, Neqqo.com, Goodvets.com, 
                Justtime.ch, PointClub.com, and Greekexperience.com, spanning industries 
                from healthtech and e-commerce to pet care and travel.
              </p>
            </div>
            <div className="portfolio-digital-images" data-aos="fade-left">
              <div className="portfolio-digital-showcase">
                <img src="/assets/img/portfolio/project_1.png" alt="Web Development" />
                <img src="/assets/img/portfolio/project_2.png" alt="Mobile App" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects List Section */}
      <section className="portfolio-projects-list" id="projects-list">
        <div className="portfolio-container">
          <div className="portfolio-list-content">
            <div className="portfolio-list-text" data-aos="fade-up">
              <h3 className="portfolio-list-title">Here are some of our project's list!</h3>
              <p className="portfolio-list-description">
                We have successfully developed 100+ digital solutions, including Femme Care 
                AI Tool, HCC Intake, Neqqo.com, Goodvets.com, Justtime.ch, PointClub.com, 
                and Greekexperience.com. Our work spans healthtech, e-commerce, pet care, and travel.
              </p>
            </div>
            <div className="portfolio-list-table" data-aos="fade-up" data-aos-delay="200">
              <div className="portfolio-table-container">
                <table className="portfolio-projects-table">
                  <thead>
                    <tr>
                      <th>Project Name</th>
                      <th>Technology</th>
                      <th>Industry</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Femme Care AI Tool</td>
                      <td>React, Node.js</td>
                      <td>HealthTech</td>
                      <td className="portfolio-status-completed">Completed</td>
                    </tr>
                    <tr>
                      <td>HCC Intake</td>
                      <td>Angular, MongoDB</td>
                      <td>Healthcare</td>
                      <td className="portfolio-status-completed">Completed</td>
                    </tr>
                    <tr>
                      <td>Neqqo.com</td>
                      <td>PHP, MySQL</td>
                      <td>E-commerce</td>
                      <td className="portfolio-status-completed">Completed</td>
                    </tr>
                    <tr>
                      <td>Goodvets.com</td>
                      <td>WordPress</td>
                      <td>Pet Care</td>
                      <td className="portfolio-status-completed">Completed</td>
                    </tr>
                    <tr>
                      <td>Justtime.ch</td>
                      <td>React, Express</td>
                      <td>Travel</td>
                      <td className="portfolio-status-completed">Completed</td>
                    </tr>
                    <tr>
                      <td>PointClub.com</td>
                      <td>PHP, MongoDB</td>
                      <td>Survey Platform</td>
                      <td className="portfolio-status-completed">Completed</td>
                    </tr>
                    <tr>
                      <td>Greekexperience.com</td>
                      <td>Shopify</td>
                      <td>Travel & Tourism</td>
                      <td className="portfolio-status-completed">Completed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Projects Section */}
      <section className="portfolio-projects" id="projects">
        <div className="portfolio-container">
          <h2 className="portfolio-section-title" data-aos="fade-up">Some of Our Projects</h2>
          
          <div className="portfolio-projects-grid">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="portfolio-project-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="portfolio-project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="portfolio-project-overlay">
                    <a href={project.link} className="portfolio-view-project-btn">
                      View Project
                    </a>
                  </div>
                </div>
                
                <div className="portfolio-project-content">
                  <h3 className="portfolio-project-title">{project.title}</h3>
                  <p className="portfolio-project-description">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;