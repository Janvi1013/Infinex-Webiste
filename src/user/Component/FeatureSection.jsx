import React from 'react';
import { Users, Cpu, Wrench, ThumbsUp, Palette, TrendingUp, Smartphone, Award, Clock } from 'lucide-react';

const FeatureItem = ({ icon: Icon, title, description }) => (
  <div className="features-home-item">
    <div className="features-home-icon">
      <Icon size={24} />
    </div>
    <div className="features-home-content">
      <h3 className="features-home-title">{title}</h3>
      <p className="features-home-description">{description}</p>
    </div>
  </div>
);

const FeaturesSection = () => {
const features = [
  {
    icon: Users, // 👥 Team of developers
    title: "Experienced Team of Developers",
    description: "Our skilled developers bring years of experience in building high-quality, reliable, and scalable software solutions."
  },
  {
    icon: Cpu, // 💻 Technology solutions
    title: "Cutting-Edge Technology Solutions",
    description: "We leverage the latest technologies and frameworks to deliver innovative and future-ready solutions."
  },
  {
    icon: Wrench, // 🛠️ Custom/tailored solutions
    title: "Tailored Software Development",
    description: "Every solution is customized to meet your unique business needs, ensuring maximum efficiency and value."
  },
  {
    icon: Award, // 🏆 Proven success
    title: "Proven Track Record of Success",
    description: "With a history of successful projects, we have earned the trust of clients across diverse industries."
  },
  {
    icon: ThumbsUp, // 👍 Client satisfaction
    title: "Commitment to Client Satisfaction",
    description: "We go above and beyond to ensure our clients are fully satisfied with every solution we deliver."
  }
];

  return (
    <section className="features-home-section">
      <div className="features-home-container">
        <div className="features-home-wrapper">
          <div className="features-home-text">
            <div className="features-home-header">
              <h2 className="features-home-section-title">WHY CHOOSE OUR COMPANY</h2>
              <p className="features-home-section-subtitle">
                We combine technical expertise with creative innovation to deliver exceptional digital solutions. 
                Here's what sets us apart in development, design, marketing, and mobile technologies.
              </p>
            </div>
            
            <div className="features-home-grid">
              {features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
          
          <div className="features-home-image">
            <div className="features-home-image-container">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
                alt="Software development team collaborating on projects with modern laptops and design tools"
                className="features-home-main-image"
              />
              <div className="features-home-overlay">
                <div className="features-home-overlay-content">
                  <h3>Excellence Delivered</h3>
                  <p>Your trusted software development partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default FeaturesSection;