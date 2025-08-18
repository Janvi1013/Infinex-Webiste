import React, { useState } from 'react';

const UIUXDesigner = () => {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      resume: e.target.files[0]
    }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.resume) {
      alert('Please fill in all required fields');
      return;
    }
    console.log('Application submitted:', formData);
    alert('Application submitted successfully!');
    setShowApplicationForm(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      resume: null,
      coverLetter: ''
    });
  };

  return (
    <div className="job-opening-container">
      {/* Job Title Section */}
      <div className="job-opening-title-section">
        <div className="job-opening-company-info">
          INFINEX TECHNOLOGY | Full time
        </div>
        <h1 className="job-opening-job-title">UI/UX Designer</h1>
        <div className="job-opening-location-date">
          Remote | Posted on 05/23/2025
        </div>

        <div className="job-opening-action-buttons">
          <button 
            className="job-opening-interested-btn"
            onClick={() => setShowApplicationForm(true)}
          >
            I'm interested
          </button>
          <button className="job-opening-share-btn">
            Share job via email
          </button>
        </div>

        <div className="job-opening-social-share">
          <p>Share this job with your network</p>
          <div className="job-opening-social-icons">
            <div className="job-opening-social-icon">f</div>
            <div className="job-opening-social-icon">X</div>
            <div className="job-opening-social-icon">in</div>
            <div className="job-opening-social-icon">W</div>
            <div className="job-opening-social-icon">T</div>
            <div className="job-opening-social-icon">🔗</div>
          </div>
        </div>
      </div>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="job-opening-modal-overlay">
          <div className="job-opening-modal">
            <div className="job-opening-modal-header">
              <h2>Apply for UI/UX Designer Position</h2>
              <button 
                className="job-opening-close-btn"
                onClick={() => setShowApplicationForm(false)}
              >
                ×
              </button>
            </div>
            <div className="job-opening-form">
              <div className="job-opening-form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="job-opening-form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="job-opening-form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="job-opening-form-group">
                <label htmlFor="resume">Resume *</label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  required
                />
              </div>
              <div className="job-opening-form-group">
                <label htmlFor="coverLetter">Cover Letter</label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Tell us why you're interested in this position..."
                />
              </div>
              <div className="job-opening-form-actions">
                <button 
                  type="button" 
                  className="job-opening-cancel-btn"
                  onClick={() => setShowApplicationForm(false)}
                >
                  Cancel
                </button>
                <button 
                  type="button" 
                  className="job-opening-submit-btn"
                  onClick={handleSubmit}
                >
                  Submit Application
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="job-opening-main-content">
        <div className="job-opening-left-section">
          {/* Job Description */}
          <section className="job-opening-section">
            <h2 className="job-opening-section-title">Job Description</h2>
            <div className="job-opening-description">
              <p>
                We are looking for a creative and detail-oriented <strong>UI/UX Designer</strong> 
                to join our design team. In this role, you will craft intuitive, user-centered 
                designs for web and mobile applications, ensuring seamless user experiences 
                and visually appealing interfaces.
              </p>
              <p>
                This is a great opportunity for someone who is passionate about design, 
                understands user psychology, and can transform ideas into polished, 
                functional digital products.
              </p>
            </div>
          </section>

          {/* Responsibilities */}
          <section className="job-opening-section">
            <h2 className="job-opening-section-title">Responsibilities</h2>
            <ul className="job-opening-list">
              <li>Design intuitive user interfaces and engaging user experiences</li>
              <li>Create wireframes, prototypes, and high-fidelity mockups</li>
              <li>Collaborate with developers, product managers, and stakeholders</li>
              <li>Conduct user research and usability testing to validate designs</li>
              <li>Develop and maintain design systems and style guides</li>
              <li>Stay updated on design trends, tools, and best practices</li>
              <li>Ensure designs are accessible and optimized for performance</li>
            </ul>
          </section>

          {/* Requirements */}
          <section className="job-opening-section">
            <h2 className="job-opening-section-title">Requirements</h2>
            <ul className="job-opening-list">
              <li>Bachelor’s degree in Design, HCI, or related field</li>
              <li>3+ years of experience as a UI/UX Designer</li>
              <li>Strong portfolio showcasing web and mobile design projects</li>
              <li>Proficiency in Figma, Adobe XD, or similar tools</li>
              <li>Understanding of responsive design and accessibility standards</li>
              <li>Excellent communication and collaboration skills</li>
              <li>Ability to translate business requirements into design solutions</li>
            </ul>
          </section>

          {/* Benefits */}
          <section className="job-opening-section">
            <h2 className="job-opening-section-title">Benefits</h2>
            <ul className="job-opening-list">
              <li>Competitive salary and bonuses</li>
              <li>Health and wellness benefits</li>
              <li>Remote-first and flexible work environment</li>
              <li>Learning and professional growth budget</li>
              <li>Opportunity to work with a creative and innovative team</li>
              <li>Inclusive and collaborative work culture</li>
            </ul>
          </section>
        </div>

        {/* Right Sidebar */}
        <div className="job-opening-right-section">
          <div className="job-opening-sidebar">
            <h3 className="job-opening-sidebar-title">Job Information</h3>
            
            <div className="job-opening-info-item">
              <span className="job-opening-info-label">Number of Positions</span>
              <span className="job-opening-info-value">2</span>
            </div>
            
            <div className="job-opening-info-item">
              <span className="job-opening-info-label">Date Opened</span>
              <span className="job-opening-info-value">05/23/2025</span>
            </div>
            
            <div className="job-opening-info-item">
              <span className="job-opening-info-label">Job Type</span>
              <span className="job-opening-info-value">Full Time</span>
            </div>
            
            <div className="job-opening-info-item">
              <span className="job-opening-info-label">Location</span>
              <span className="job-opening-info-value">Remote</span>
            </div>
            
            <div className="job-opening-info-item">
              <span className="job-opening-info-label">Experience Required</span>
              <span className="job-opening-info-value">3+ Years</span>
            </div>
            
            <div className="job-opening-info-item">
              <span className="job-opening-info-label">Posted</span>
              <span className="job-opening-info-value">June 5, 2025</span>
            </div>
            
            <div className="job-opening-info-item">
              <span className="job-opening-info-label">Apply By</span>
              <span className="job-opening-info-value">June 25, 2025</span>
            </div>

            <button 
              className="job-opening-apply-now-btn"
              onClick={() => setShowApplicationForm(true)}
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIUXDesigner;
