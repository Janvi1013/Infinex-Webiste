import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formError, setFormError] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (formError[name]) {
      setFormError(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    let errors = {};
    let valid = true;

    if (!formData.name?.trim() || formData.name.length < 4) {
      errors.name = 'Name should be at least 4 characters';
      valid = false;
    }

    if (!formData.email?.trim() || !emailRegex.test(formData.email)) {
      errors.email = 'Enter a valid email address';
      valid = false;
    }

    if (!formData.subject?.trim() || formData.subject.length < 6) {
      errors.subject = 'Subject should be at least 6 characters';
      valid = false;
    }

    if (!formData.message?.trim() || formData.message.length < 10) {
      errors.message = 'Message should be at least 10 characters';
      valid = false;
    }

    setFormError(errors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault?.();
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 3 seconds
        setTimeout(() => setSubmitSuccess(false), 3000);
      }, 1500);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'Gali No. 5, opp. Durgapura Railway Station, Jadon Nagar-A, Nalanda Vihar, Durgapura, Jaipur, Rajasthan 302018',
      link: 'https://maps.google.com?q=Infinex+Technologies+Jaipur',
      external: true
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 89551 00493',
      link: 'tel:+918955100493'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@infinextechnologies.com',
      link: 'mailto:info@infinextechnologies.com'
    },
    {
      icon: Clock,
      title: 'Open Hours',
      content: 'Mon - Sat, 10:00 AM - 7:00 PM'
    }
  ];

  return (
    <section className="home-contact-section">
      <div className="home-contact-container">
        {/* Section Header */}
        <div className="home-contact-header">
          <h2 className="home-contact-title">Contact Us</h2>
          <p className="home-contact-subtitle">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="home-contact-content">
          {/* Contact Info Cards */}
          <div className="home-contact-info">
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="home-contact-card">
                  <div className="home-card-icon">
                    <IconComponent size={24} />
                  </div>
                  <div className="home-card-content">
                    <h3 className="home-card-title">{item.title}</h3>
                    {item.link ? (
                      <a 
                        href={item.link}
                        className="home-card-link"
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="home-card-text">{item.content}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="home-contact-form-wrapper">
            <div className="home-form-header">
              <MessageSquare className="home-form-icon" size={28} />
              <h3 className="home-form-title">Send Us a Message</h3>
            </div>
            
            {submitSuccess && (
              <div className="home-success-message">
                <div className="home-success-content">
                  <div className="home-success-icon">✓</div>
                  <span>Message sent successfully! We'll get back to you soon.</span>
                </div>
              </div>
            )}

            <div className="home-contact-form">
              <div className="home-form-group">
                <div className="home-input-wrapper">
                  <User className="home-input-icon" size={18} />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={formError.name ? 'error' : ''}
                  />
                </div>
                {formError.name && <span className="home-error-message">{formError.name}</span>}
              </div>

              <div className="home-form-group">
                <div className="home-input-wrapper">
                  <Mail className="home-input-icon" size={18} />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={formError.email ? 'error' : ''}
                  />
                </div>
                {formError.email && <span className="home-error-message">{formError.email}</span>}
              </div>

              <div className="home-form-group">
                <div className="home-input-wrapper">
                  <MessageSquare className="home-input-icon" size={18} />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={formError.subject ? 'error' : ''}
                  />
                </div>
                {formError.subject && <span className="home-error-message">{formError.subject}</span>}
              </div>

              <div className="home-form-group">
                <div className="home-textarea-wrapper">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className={formError.message ? 'error' : ''}
                  />
                </div>
                {formError.message && <span className="home-error-message">{formError.message}</span>}
              </div>

              <div 
                className="home-submit-btn"
                onClick={handleSubmit}
                style={{ cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
              >
                {isSubmitting ? (
                  <div className="home-loading-spinner"></div>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;