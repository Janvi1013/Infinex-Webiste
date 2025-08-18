import React, { useState } from 'react';
import { 
  Users, 
  Target, 
  Award, 
  TrendingUp, 
  Heart, 
  Coffee,
  GraduationCap,
  Building2,
  MapPin,
  Clock,
  ChevronDown,
  Filter,
  ExternalLink,
  Briefcase,
  DollarSign,
  Calendar,
  Shield,
  Zap,
  Globe
} from 'lucide-react';

const CareerPage = () => {
  const [departmentFilter, setDepartmentFilter] = useState('All Departments');
  const [experienceFilter, setExperienceFilter] = useState('All Experience Levels');
  const [showDepartmentDropdown, setShowDepartmentDropdown] = useState(false);
  const [showExperienceDropdown, setShowExperienceDropdown] = useState(false);

  const departments = [
    'All Departments',
    'Engineering',
    'Design',
    'Marketing',
    'Sales',
    'Product',
    'Data Science',
    'Operations'
  ];

  const experienceLevels = [
    'All Experience Levels',
    'Entry Level',
    'Mid Level',
    'Senior Level',
    'Executive'
  ];

  const openPositions = [
    {
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: 'Senior Level',
      link: '/Engineer'
    },
    {
      title: 'UIUX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      experience: 'Mid Level',
      link: '/Designer'
    },
    //{
    //  title: 'Marketing Manager',
    //  department: 'Marketing',
    //  location: 'Remote',
    //  type: 'Full-time',
    //  experience: 'Mid Level',
    //  link: '/careers/marketing-manager'
    //},
    //{
    //  title: 'Graphic Designer',
    //  department: 'Design',
    //  location: 'Remote	',
    //  type: 'Full-time',
    //  experience: 'Senior Level',
    //  link: '/careers/data-scientist'
    //},
    {
      title: 'Hr Intern',
      department: 'Sales',
      location: 'Remote',
      type: 'Full-time',
      experience: 'Entry Level',
      link: '/HrIntern'
    },
    //{
    //  title: 'DevOps Engineer',
    //  department: 'Engineering',
    //  location: 'Remote',
    //  type: 'Contract',
    //  experience: 'Senior Level',
    //  link: '/HrIntern'
    //}
  ];

  const scrollToPositions = () => {
    document.getElementById('open-positions').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const filteredPositions = openPositions.filter(position => {
    const matchesDepartment = departmentFilter === 'All Departments' || position.department === departmentFilter;
    const matchesExperience = experienceFilter === 'All Experience Levels' || position.experience === experienceFilter;
    return matchesDepartment && matchesExperience;
  });

  return (
    <div className="career-page">
      {/* Banner Section */}
      <section className="career-page-banner-section">
        <div className="career-page-banner-content">
          <div className="career-page-banner-text">
            <h1>Join Our Mission to Transform the Future</h1>
            <p>
              At Infinex, we're building tomorrow's technology today. Join a team of passionate innovators, 
              creative thinkers, and problem solvers who are dedicated to making a meaningful impact. 
              We offer an environment where your ideas matter, your growth is prioritized, and your 
              work contributes to solutions that change the world.
            </p>
            <button className="career-page-cta-button" onClick={scrollToPositions}>
              View Positions Available
            </button>
          </div>
        </div>
      </section>

      {/* Working With Us Section */}
      <section className="career-page-working-with-us">
        <div className="career-page-container">
          <h2>Working With Us</h2>
          <div className="career-page-working-content">
            <p>
              At Infinex, we believe that great work comes from great people working in an environment 
              that supports their best efforts. Our culture is built on collaboration, innovation, and 
              mutual respect. We foster an inclusive workplace where diverse perspectives are not just 
              welcomed but actively sought out.
            </p>
            <p>
              Our team members enjoy the flexibility to work in ways that suit their lifestyle while 
              maintaining strong connections with colleagues through regular team activities, knowledge 
              sharing sessions, and collaborative projects. We invest heavily in professional development, 
              providing opportunities for continuous learning, skill enhancement, and career advancement.
            </p>
            <p>
              Whether you're working on cutting-edge technology solutions, developing innovative products, 
              or supporting our growing customer base, you'll be part of a team that values quality, 
              creativity, and the pursuit of excellence. We maintain a healthy work-life balance while 
              staying committed to delivering exceptional results for our clients and stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Collage Section */}
     <section className="career-page-photo-collage">
  <div className="career-page-container">
    <h2>Life at Infinex</h2>
    <div className="career-page-collage-grid">
      <div className="career-page-photo-item career-page-photo-1">
        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop" alt="Team collaboration" />
      </div>
      <div className="career-page-photo-item career-page-photo-2">
        <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop" alt="Modern office space" />
      </div>
      <div className="career-page-photo-item career-page-photo-3">
        <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop" alt="Team meeting" />
      </div>
      <div className="career-page-photo-item career-page-photo-4">
        <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop" alt="Working together" />
      </div>
      <div className="career-page-photo-item career-page-photo-5">
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop" alt="Office environment" />
      </div>
      <div className="career-page-photo-item career-page-photo-6">
        <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop" alt="Creative workspace" />
      </div>
      <div className="career-page-photo-item career-page-photo-7">
        <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop" alt="Team celebration" />
      </div>
      <div className="career-page-photo-item career-page-photo-8">
        <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop" alt="Innovation space" />
      </div>
      <div className="career-page-photo-item career-page-photo-9">
        <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=300&fit=crop" alt="Company culture" />
      </div>
    </div>
  </div>
</section>

      {/* Why Join Infinex Section */}
      <section className="career-page-why-join">
        <div className="career-page-container">
          <h2>Why Join Infinex</h2>
          <div className="career-page-why-join-content">
            <div className="career-page-why-images">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=400&fit=crop" alt="Team collaboration" />
              <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=400&fit=crop" alt="Innovation" />
            </div>
            <div className="career-page-why-content">
              <div className="career-page-why-item">
                <Users className="career-page-why-icon" />
                <div>
                  <h3>Collaborative Culture</h3>
                  <p>
                    Work alongside talented individuals from diverse backgrounds who share your passion 
                    for innovation. Our open communication culture ensures every voice is heard and valued.
                  </p>
                </div>
              </div>
              <div className="career-page-why-item">
                <Target className="career-page-why-icon" />
                <div>
                  <h3>Meaningful Impact</h3>
                  <p>
                    Contribute to projects that make a real difference in people's lives. Our solutions 
                    reach millions of users worldwide, giving you the opportunity to create lasting impact.
                  </p>
                </div>
              </div>
              <div className="career-page-why-item">
                <Award className="career-page-why-icon" />
                <div>
                  <h3>Recognition & Growth</h3>
                  <p>
                    We celebrate achievements and provide clear paths for career advancement. Your hard 
                    work and dedication are recognized through promotions, bonuses, and public recognition.
                  </p>
                </div>
              </div>
              <div className="career-page-why-item">
                <TrendingUp className="career-page-why-icon" />
                <div>
                  <h3>Continuous Learning</h3>
                  <p>
                    Stay at the forefront of technology with access to training programs, conferences, 
                    certifications, and educational resources. We invest in your professional development.
                  </p>
                </div>
              </div>
              <div className="career-page-why-item">
                <Heart className="career-page-why-icon" />
                <div>
                  <h3>Work-Life Balance</h3>
                  <p>
                    Maintain a healthy balance between your professional and personal life with flexible 
                    working arrangements, generous PTO, and wellness programs designed for your well-being.
                  </p>
                </div>
              </div>
              <div className="career-page-why-item">
                <Zap className="career-page-why-icon" />
                <div>
                  <h3>Innovation Focus</h3>
                  <p>
                    Work with cutting-edge technologies and be part of breakthrough innovations. We encourage 
                    experimentation and provide resources to turn your ideas into reality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth and Benefits Section */}
      <section className="career-page-benefits-section">
        <div className="career-page-container">
          <h2>Growth & Benefits</h2>
          <div className="career-page-benefits-grid">
            <div className="career-page-benefit-item">
              <DollarSign className="career-page-benefit-icon" />
              <h3>Competitive Compensation</h3>
              <p>
                Industry-leading salaries, performance bonuses, equity options, and annual salary reviews 
                to ensure you're fairly compensated for your contributions and market value.
              </p>
            </div>
            <div className="career-page-benefit-item">
              <Shield className="career-page-benefit-icon" />
              <h3>Comprehensive Healthcare</h3>
              <p>
                Full medical, dental, and vision coverage for you and your family, including mental health 
                support, wellness programs, and preventive care initiatives.
              </p>
            </div>
            <div className="career-page-benefit-item">
              <Calendar className="career-page-benefit-icon" />
              <h3>Flexible Time Off</h3>
              <p>
                Unlimited PTO policy, flexible working hours, remote work options, sabbatical opportunities, 
                and generous parental leave to support your life outside of work.
              </p>
            </div>
            <div className="career-page-benefit-item">
              <GraduationCap className="career-page-benefit-icon" />
              <h3>Learning & Development</h3>
              <p>
                Annual learning budget, conference attendance, online course subscriptions, internal training 
                programs, mentorship opportunities, and tuition reimbursement for continued education.
              </p>
            </div>
            <div className="career-page-benefit-item">
              <Coffee className="career-page-benefit-icon" />
              <h3>Workplace Perks</h3>
              <p>
                Modern office spaces, free meals and snacks, game rooms, fitness facilities, company events, 
                team outings, and a fully stocked kitchen to fuel your creativity.
              </p>
            </div>
            <div className="career-page-benefit-item">
              <Globe className="career-page-benefit-icon" />
              <h3>Global Opportunities</h3>
              <p>
                Work with international teams, travel opportunities, cultural exchange programs, and the 
                chance to work on projects that span across different markets and regions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section className="career-page-internships-section">
        <div className="career-page-container">
          <h2>Internship Programs</h2>
          <div className="career-page-internship-content">
            <div className="career-page-internship-text">
              <p>
                Our internship programs are designed to provide students and recent graduates with hands-on 
                experience in their chosen field while contributing to meaningful projects. We offer structured 
                programs across various departments including Engineering, Design, Marketing, Product Management, 
                and Data Science.
              </p>
              <div className="career-page-internship-features">
                <div className="career-page-feature-item">
                  <Building2 className="career-page-feature-icon" />
                  <div>
                    <h4>Real Project Experience</h4>
                    <p>Work on actual company projects that impact our products and services, not just busy work.</p>
                  </div>
                </div>
                <div className="career-page-feature-item">
                  <Users className="career-page-feature-icon" />
                  <div>
                    <h4>Mentorship Program</h4>
                    <p>Paired with experienced professionals who guide your learning and career development.</p>
                  </div>
                </div>
                <div className="career-page-feature-item">
                  <TrendingUp className="career-page-feature-icon" />
                  <div>
                    <h4>Skill Development</h4>
                    <p>Access to training resources, workshops, and skill-building sessions tailored to your growth.</p>
                  </div>
                </div>
                <div className="career-page-feature-item">
                  <Award className="career-page-feature-icon" />
                  <div>
                    <h4>Full-Time Opportunities</h4>
                    <p>High-performing interns are often invited to join us full-time upon graduation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="career-page-internship-cta">
            We run internship programs during Summer, Fall, and Spring semesters. Applications typically open 
            3-4 months before each term begins. Interns receive competitive compensation, housing assistance 
            where applicable, and access to all company benefits and perks.
          </p>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="career-page-positions-section">
        <div className="career-page-container">
          <h2>Open Positions</h2>
          
          {/* Filters */}
          <div className="career-page-filters">
            <div className="career-page-filter-group">
              <div className="career-page-filter-dropdown">
                <button 
                  className="career-page-filter-button"
                  onClick={() => setShowDepartmentDropdown(!showDepartmentDropdown)}
                >
                  <Filter size={16} />
                  {departmentFilter}
                  <ChevronDown size={16} />
                </button>
                {showDepartmentDropdown && (
                  <div className="career-page-dropdown-menu">
                    {departments.map(dept => (
                      <div 
                        key={dept}
                        className="career-page-dropdown-item"
                        onClick={() => {
                          setDepartmentFilter(dept);
                          setShowDepartmentDropdown(false);
                        }}
                      >
                        {dept}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="career-page-filter-dropdown">
                <button 
                  className="career-page-filter-button"
                  onClick={() => setShowExperienceDropdown(!showExperienceDropdown)}
                >
                  <Filter size={16} />
                  {experienceFilter}
                  <ChevronDown size={16} />
                </button>
                {showExperienceDropdown && (
                  <div className="career-page-dropdown-menu">
                    {experienceLevels.map(level => (
                      <div 
                        key={level}
                        className="career-page-dropdown-item"
                        onClick={() => {
                          setExperienceFilter(level);
                          setShowExperienceDropdown(false);
                        }}
                      >
                        {level}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Position Cards */}
          <div className="career-page-positions-grid">
            {filteredPositions.map((position, index) => (
              <div key={index} className="career-page-position-card">
                <div className="career-page-position-header">
                  <h3>{position.title}</h3>
                  <span className="career-page-department-tag">{position.department}</span>
                </div>
                <div className="career-page-position-details">
                  <div className="career-page-detail-item">
                    <MapPin size={16} />
                    <span>{position.location}</span>
                  </div>
                  <div className="career-page-detail-item">
                    <Clock size={16} />
                    <span>{position.type}</span>
                  </div>
                  <div className="career-page-detail-item">
                    <Briefcase size={16} />
                    <span>{position.experience}</span>
                  </div>
                </div>
                <a href={position.link} className="career-page-position-link">
                  View Details <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>

          {filteredPositions.length === 0 && (
            <div className="career-page-no-positions">
              <p>No positions match your current filters. Try adjusting your search criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CareerPage;