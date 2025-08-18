import React, { useState } from 'react';

const HRInternJobPage = () => {
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
          INFINEX TECHNOLGY | Full time
        </div>
        <h1 className="job-opening-job-title">HR Intern</h1>
        <div className="job-opening-location-date">
          Multiple, India | Posted on 05/23/2025
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
              <h2>Apply for HR Intern Position</h2>
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
                At <strong>GKM IT</strong>, we're passionate about building seamless digital experiences that look stunning 
                and work even better. We're on the lookout for an <strong>HR Intern</strong> to join our dynamic HR team 
                and gain valuable experience in human resources management.
              </p>
              <p>
                If you love working with people, enjoy learning about HR processes, and thrive in a 
                collaborative environment, this internship opportunity is perfect for you!
              </p>
            </div>
          </section>

          {/* Responsibilities */}
          <section className="job-opening-section">
            <h2 className="job-opening-section-title">Responsibilities</h2>
            <ul className="job-opening-list">
              <li>Assist in recruitment and selection processes</li>
              <li>Support employee onboarding and orientation programs</li>
              <li>Help maintain employee records and HR databases</li>
              <li>Assist in organizing training and development sessions</li>
              <li>Support performance management activities</li>
              <li>Help with employee engagement initiatives</li>
              <li>Assist in policy documentation and updates</li>
            </ul>
          </section>

          {/* Requirements */}
          <section className="job-opening-section">
            <h2 className="job-opening-section-title">Requirements</h2>
            <ul className="job-opening-list">
              <li>Currently pursuing or recently completed degree in HR, Psychology, or related field</li>
              <li>Strong communication and interpersonal skills</li>
              <li>Proficiency in MS Office Suite (Word, Excel, PowerPoint)</li>
              <li>Basic understanding of HR principles and practices</li>
              <li>Attention to detail and organizational skills</li>
              <li>Ability to maintain confidentiality</li>
              <li>Eagerness to learn and grow in HR field</li>
            </ul>
          </section>

          {/* Benefits */}
          <section className="job-opening-section">
            <h2 className="job-opening-section-title">Benefits</h2>
            <ul className="job-opening-list">
              <li>Mentorship from experienced HR professionals</li>
              <li>Hands-on experience in various HR functions</li>
              <li>Certificate of completion upon successful internship</li>
              <li>Potential for full-time employment based on performance</li>
              <li>Flexible work schedule and remote options</li>
              <li>Professional development opportunities</li>
              <li>Networking opportunities within the industry</li>
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
              <span className="job-opening-info-value">Internship</span>
            </div>
            
            <div className="job-opening-info-item">
              <span className="job-opening-info-label">Location</span>
              <span className="job-opening-info-value">Remote / Jaipur, India</span>
            </div>
            
            <div className="job-opening-info-item">
              <span className="job-opening-info-label">Duration</span>
              <span className="job-opening-info-value">3-6 Months</span>
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

export default HRInternJobPage;