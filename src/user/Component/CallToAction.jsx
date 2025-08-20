//import React, { useEffect } from 'react';
//import { Phone, Mail } from 'lucide-react';
//
//const CallToAction = () => {
//  useEffect(() => {
//    // Simulate AOS initialization
//    const elements = document.querySelectorAll('[data-aos]');
//    elements.forEach(el => {
//      el.style.opacity = '0';
//      el.style.transform = 'translateY(30px)';
//
//      setTimeout(() => {
//        el.style.transition = 'all 0.8s ease-in-out';
//        el.style.opacity = '1';
//        el.style.transform = 'translateY(0)';
//      }, 100);
//    });
//  }, []);
//
//  return (
//    <section className="calltoaction-section" data-aos="fade-up">
//      {/* Floating Icons */}
//      <div className="calltoaction-floating-icons">
//        <a href="tel:+918955100493" className="calltoaction-icon-box calltoaction-phone" title="Call Us">
//          <Phone size={18} />
//        </a>
//        <a href="mailto:info@infinextechnologies.com" className="calltoaction-icon-box calltoaction-mail" title="Email Us">
//          <Mail size={18} />
//        </a>
//      </div>
//
//      {/* Floating Circular Images */}
//      <div className="calltoaction-floating-images-random">
//        <img
//          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
//          alt=""
//          className="calltoaction-circle-img"
//          style={{ top: '20%', left: '5%', animationDelay: '0s' }}
//        />
//        <img
//          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
//          alt=""
//          className="calltoaction-circle-img"
//          style={{ top: '50%', left: '10%', animationDelay: '1s' }}
//        />
//        <img
//          src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
//          alt=""
//          className="calltoaction-circle-img"
//          style={{ top: '70%', left: '25%', animationDelay: '2s' }}
//        />
//        <img
//          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
//          alt=""
//          className="calltoaction-circle-img"
//          style={{ top: '30%', right: '8%', animationDelay: '0.5s' }}
//        />
//        <img
//          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
//          alt=""
//          className="calltoaction-circle-img"
//          style={{ top: '55%', right: '15%', animationDelay: '1.5s' }}
//        />
//       <img
//  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
//  alt=""
//  className="calltoaction-circle-img"
//  style={{ bottom: '10%', right: '5%', animationDelay: '2.5s' }}
///>
//      </div>
//
//      {/* Background Effects */}
//      <div className="calltoaction-background-effects">
//        <div className="calltoaction-gradient-orb calltoaction-orb-1"></div>
//        <div className="calltoaction-gradient-orb calltoaction-orb-2"></div>
//        <div className="calltoaction-gradient-orb calltoaction-orb-3"></div>
//      </div>
//
//      {/* Main Content */}
//      <div className="calltoaction-content" data-aos="zoom-in" data-aos-delay="200">
//        <h2>Ready to Start Your Project?</h2>
//        <p>
//          Transform your ideas into reality with our expert development team. <br />
//          Let's build something amazing together.
//        </p>
//        <a
//          href="https://wa.me/918955100493?text=Hi%20there%2C%20I%20would%20like%20to%20start%20a%20project!"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          <button className="calltoaction-cta-button">
//            <span>Get Started Now</span>
//            <div className="calltoaction-button-shine"></div>
//          </button>
//        </a>
//      </div>
//    </section>
//  );
//};
//
//export default CallToAction;








import React, { useEffect } from 'react';
import { Phone, Mail } from 'lucide-react';

const CallToAction = () => {
  useEffect(() => {
    // Simulate AOS initialization
    const elements = document.querySelectorAll('[data-aos]');
    elements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      
      setTimeout(() => {
        el.style.transition = 'all 0.8s ease-in-out';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 100);
    });
  }, []);

  return (
    <div>

      <section className="calltoaction-section" data-aos="fade-up">
        {/* Content overlay for better contrast */}
        <div className="calltoaction-content-overlay"></div>

        {/* Floating Icons */}
        <div className="calltoaction-floating-icons">
          <a href="tel:+918955100493" className="calltoaction-icon-box" title="Call Us">
            <Phone size={18} />
          </a>
          <a href="mailto:info@infinextechnologies.com" className="calltoaction-icon-box" title="Email Us">
            <Mail size={18} />
          </a>
        </div>

        {/* Floating Circular Images positioned like in the image */}
        <div className="calltoaction-floating-images-random">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" 
            alt="" 
            className="calltoaction-circle-img" 
            style={{ top: '15%', left: '8%', animationDelay: '0s' }} 
          />
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" 
            alt="" 
            className="calltoaction-circle-img" 
            style={{ top: '65%', left: '15%', animationDelay: '1s' }} 
          />
          {/*<img 
            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" 
            alt="" 
            className="calltoaction-circle-img" 
            style={{ bottom: '25%', left: '30%', animationDelay: '2s' }} 
          />*/}
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" 
            alt="" 
            className="calltoaction-circle-img" 
            style={{ top: '20%', right: '8%', animationDelay: '0.5s' }} 
          />
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" 
            alt="" 
            className="calltoaction-circle-img" 
            style={{ top: '70%', right: '12%', animationDelay: '1.5s' }} 
          />
          {/*<img            
            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"            
            alt=""            
            className="calltoaction-circle-img"            
            style={{ bottom: '20%', right: '25%', animationDelay: '2.5s' }}          
          />*/}
        </div>

        {/* Main Content */}
        <div className="calltoaction-content" data-aos="zoom-in" data-aos-delay="200">
          <h2>Ready to Start Your Project?</h2>
          <p>
            Transform your ideas into reality with our expert development team.<br />
            Let's build something amazing together.
          </p>
          <a
            href="https://wa.me/918955100493?text=Hi%20there%2C%20I%20would%20like%20to%20start%20a%20project!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="calltoaction-cta-button">
              <span>Get Started Now</span>
              <div className="calltoaction-button-shine"></div>
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default CallToAction;