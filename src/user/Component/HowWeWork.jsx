import React from 'react';
import { Search, GitBranch, Code, CheckCircle, Rocket } from 'lucide-react';

const steps = [
  {
    id: '01',
    icon: <Search size={32} />,
    title: 'Understand',
    description: 'We deeply explore your needs, goals, and challenges to align perfectly.',
  },
  {
    id: '02',
    icon: <GitBranch size={32} />,
    title: 'Plan',
    description: 'We create a clear, strategic roadmap with timelines and milestones.',
  },
  {
    id: '03',
    icon: <Code size={32} />,
    title: 'Build',
    description: 'Our experts develop scalable, high-quality solutions tailored to you.',
  },
  {
    id: '04',
    icon: <CheckCircle size={32} />,
    title: 'Refine',
    description: 'We test, iterate, and perfect the product based on feedback.',
  },
  {
    id: '05',
    icon: <Rocket size={32} />,
    title: 'Launch',
    description: 'We go live with confidence and ensure smooth deployment and support.',
  },
];

const HowWeWork = () => {
  return (
    <div>
      <style>{`
        .how-we-work-section {
          padding: 60px 20px;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          text-align: center;
          font-family: 'Inter', 'Segoe UI', sans-serif;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }

        .how-we-work-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 15% 25%, rgba(108, 99, 255, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 85% 75%, rgba(0, 48, 135, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(108, 99, 255, 0.03) 0%, transparent 70%);
          pointer-events: none;
        }

        .how-we-work-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          width: 100%;
        }

        .how-we-work-header {
          margin-bottom: 60px;
          position: relative;
        }

        .how-we-work-header::after {
          content: '';
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #6c63ff, #003087);
          border-radius: 2px;
        }

        .how-we-work-subtitle {
          color: #003087;
          font-weight: 700;
          letter-spacing: 2px;
          font-size: 14px;
          margin-bottom: 15px;
          text-transform: uppercase;
          position: relative;
          display: inline-block;
          padding: 8px 20px;
          background: linear-gradient(135deg, rgba(108, 99, 255, 0.1), rgba(0, 48, 135, 0.1));
          border-radius: 25px;
          border: 1px solid rgba(108, 99, 255, 0.2);
          backdrop-filter: blur(10px);
        }

        .how-we-work-title {
          font-size: clamp(28px, 5vw, 42px);
          font-weight: 800;
          margin-bottom: 20px;
          color: #1a202c;
          line-height: 1.2;
          letter-spacing: -1px;
          background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .how-we-work-description {
          font-size: clamp(14px, 3vw, 18px);
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
          font-weight: 400;
          padding: 0 20px;
        }

        .how-we-work-steps-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-top: 60px;
          position: relative;
          padding: 40px 0;
          max-width: 100%;
        }

        /* Wavy Connecting Line - Desktop Only */
        .how-we-work-steps-container::before {
          content: '';
          position: absolute;
          top: 120px;
          left: 5%;
          right: 5%;
          height: 4px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(108, 99, 255, 0.4) 10%, 
            rgba(108, 99, 255, 0.8) 25%,
            rgba(0, 48, 135, 0.8) 50%,
            rgba(108, 99, 255, 0.8) 75%,
            rgba(108, 99, 255, 0.4) 90%, 
            transparent 100%);
          z-index: 0;
          border-radius: 2px;
          clip-path: polygon(
            0% 50%, 
            5% 30%, 
            10% 70%, 
            15% 20%, 
            20% 80%, 
            25% 40%, 
            30% 60%, 
            35% 30%, 
            40% 70%, 
            45% 35%, 
            50% 65%, 
            55% 35%, 
            60% 70%, 
            65% 30%, 
            70% 60%, 
            75% 40%, 
            80% 80%, 
            85% 20%, 
            90% 70%, 
            95% 30%, 
            100% 50%
          );
          display: none;
        }

        .how-we-work-steps-container::after {
          content: '';
          position: absolute;
          top: 118px;
          left: 5%;
          right: 5%;
          height: 8px;
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='8' viewBox='0 0 100 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 4 Q25 0 50 4 T100 4' stroke='%236c63ff' stroke-width='3' fill='none' opacity='0.6'/%3E%3C/svg%3E");
          background-repeat: repeat-x;
          background-size: 100px 8px;
          z-index: 1;
          animation: waveFlow 3s ease-in-out infinite;
          display: none;
        }

        @keyframes waveFlow {
          0%, 100% {
            opacity: 0.6;
            transform: translateX(0);
          }
          50% {
            opacity: 0.9;
            transform: translateX(5px);
          }
        }

        .how-we-work-step-box {
          background: linear-gradient(135deg, #6c63ff 0%, #4f46e5 100%);
          color: white;
          padding: 40px 25px;
          border-radius: 24px;
          position: relative;
          box-shadow: 
            0 20px 40px rgba(108, 99, 255, 0.15),
            0 10px 20px rgba(108, 99, 255, 0.1),
            0 0 0 1px rgba(255, 255, 255, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 2;
          min-height: 300px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .how-we-work-step-box::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }

        .how-we-work-step-box:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 
            0 30px 60px rgba(108, 99, 255, 0.25),
            0 15px 30px rgba(108, 99, 255, 0.15),
            0 0 0 1px rgba(255, 255, 255, 0.2);
          z-index: 10;
        }

        .how-we-work-step-box:hover::before {
          opacity: 1;
        }

        .how-we-work-step-box:nth-child(even) {
          background: linear-gradient(135deg, #003087 0%, #002266 100%);
        }

        .how-we-work-step-box:nth-child(even):hover {
          box-shadow: 
            0 30px 60px rgba(0, 48, 135, 0.25),
            0 15px 30px rgba(0, 48, 135, 0.15),
            0 0 0 1px rgba(255, 255, 255, 0.2);
        }

        .how-we-work-icon-wrapper {
          font-size: 36px;
          margin-bottom: 20px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
          position: relative;
          z-index: 3;
        }

        .how-we-work-step-box:hover .how-we-work-icon-wrapper {
          transform: scale(1.1) rotate(5deg);
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .how-we-work-step-number {
          position: absolute;
          top: -10px;
          right: -10px;
          background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
          width: 55px;
          height: 55px;
          border-radius: 50%;
          font-weight: 900;
          font-size: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 
            0 12px 25px rgba(255, 107, 53, 0.4),
            0 6px 12px rgba(255, 107, 53, 0.3),
            0 0 0 4px rgba(255, 255, 255, 1);
          transition: all 0.3s ease;
          z-index: 1000;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .how-we-work-step-box:hover .how-we-work-step-number {
          transform: scale(1.2);
          box-shadow: 
            0 15px 35px rgba(255, 107, 53, 0.5),
            0 8px 18px rgba(255, 107, 53, 0.4),
            0 0 0 5px rgba(255, 255, 255, 1);
          z-index: 2000;
        }

        .how-we-work-step-title {
          font-size: clamp(18px, 4vw, 22px);
          margin: 15px 0 12px;
          font-weight: 700;
          line-height: 1.3;
          letter-spacing: -0.5px;
          position: relative;
          z-index: 3;
        }

        .how-we-work-step-description {
          font-size: clamp(13px, 3vw, 15px);
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          font-weight: 400;
          position: relative;
          z-index: 3;
        }

        /* Responsive Breakpoints */

        /* Large Desktop */
        @media (min-width: 1200px) {
          .how-we-work-steps-container {
            grid-template-columns: repeat(5, 1fr);
            gap: 20px;
          }
          
          .how-we-work-steps-container::before,
          .how-we-work-steps-container::after {
            display: block;
          }
        }

        /* Desktop */
        @media (min-width: 992px) and (max-width: 1199px) {
          .how-we-work-steps-container {
            grid-template-columns: repeat(3, 1fr);
            gap: 25px;
          }
          
          .how-we-work-step-box {
            min-height: 280px;
            padding: 35px 20px;
          }
        }

        /* Tablet */
        @media (min-width: 768px) and (max-width: 991px) {
          .how-we-work-section {
            padding: 50px 15px;
          }
          
          .how-we-work-steps-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-top: 50px;
          }
          
          .how-we-work-step-box {
            min-height: 260px;
            padding: 30px 20px;
          }
          
          .how-we-work-icon-wrapper {
            width: 70px;
            height: 70px;
            font-size: 30px;
          }
          
          .how-we-work-step-number {
            width: 50px;
            height: 50px;
            font-size: 16px;
          }
        }

        /* Mobile Large */
        @media (min-width: 576px) and (max-width: 767px) {
          .how-we-work-section {
            padding: 40px 10px;
          }
          
          .how-we-work-steps-container {
            grid-template-columns: 1fr;
            gap: 20px;
            margin-top: 40px;
            max-width: 400px;
            margin-left: auto;
            margin-right: auto;
          }
          
          .how-we-work-step-box {
            min-height: 240px;
            padding: 30px 20px;
          }
          
          .how-we-work-icon-wrapper {
            width: 65px;
            height: 65px;
            font-size: 28px;
          }
          
          .how-we-work-step-number {
            width: 45px;
            height: 45px;
            font-size: 16px;
            top: -8px;
            right: -8px;
          }
        }

        /* Mobile */
        @media (max-width: 575px) {
          .how-we-work-section {
            padding: 30px 10px;
          }
          
          .how-we-work-subtitle {
            font-size: 12px;
            padding: 6px 15px;
            letter-spacing: 1px;
          }
          
          .how-we-work-header {
            margin-bottom: 40px;
          }
          
          .how-we-work-steps-container {
            grid-template-columns: 1fr;
            gap: 15px;
            margin-top: 30px;
            padding: 20px 0;
          }
          
          .how-we-work-step-box {
            min-height: 220px;
            padding: 25px 15px;
            border-radius: 20px;
            margin: 0 auto;
            max-width: 320px;
          }
          
          .how-we-work-icon-wrapper {
            width: 60px;
            height: 60px;
            font-size: 26px;
            margin-bottom: 15px;
          }
          
          .how-we-work-step-number {
            width: 40px;
            height: 40px;
            font-size: 14px;
            top: -6px;
            right: -6px;
            border: 2px solid rgba(255, 255, 255, 0.9);
          }
          
          .how-we-work-step-box:hover .how-we-work-step-number {
            transform: scale(1.1);
          }
        }

        /* Extra Small Mobile */
        @media (max-width: 375px) {
          .how-we-work-section {
            padding: 25px 5px;
          }
          
          .how-we-work-step-box {
            min-height: 200px;
            padding: 20px 12px;
            max-width: 300px;
          }
          
          .how-we-work-icon-wrapper {
            width: 55px;
            height: 55px;
            font-size: 24px;
          }
          
          .how-we-work-step-number {
            width: 35px;
            height: 35px;
            font-size: 12px;
          }
        }

        /* Animation */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .how-we-work-step-box {
          animation: fadeInUp 0.6s ease-out;
          animation-fill-mode: both;
        }

        .how-we-work-step-box:nth-child(1) { animation-delay: 0.1s; }
        .how-we-work-step-box:nth-child(2) { animation-delay: 0.2s; }
        .how-we-work-step-box:nth-child(3) { animation-delay: 0.3s; }
        .how-we-work-step-box:nth-child(4) { animation-delay: 0.4s; }
        .how-we-work-step-box:nth-child(5) { animation-delay: 0.5s; }

        /* Focus and Accessibility */
        .how-we-work-step-box:focus {
          outline: 3px solid rgba(108, 99, 255, 0.5);
          outline-offset: 2px;
        }
      `}</style>
      
      <section className="how-we-work-section">
        <div className="how-we-work-container">
          <div className="how-we-work-header">
            <p className="how-we-work-subtitle">HOW WE WORK</p>
            <h2 className="how-we-work-title">Our Process to Deliver Excellence</h2>
            <p className="how-we-work-description">
              Follow our proven methodology that ensures exceptional results through careful planning, 
              execution, and continuous refinement.
            </p>
          </div>
          <div className="how-we-work-steps-container">
            {steps.map((step, index) => (
              <div
                className="how-we-work-step-box"
                key={index}
              >
                <div className="how-we-work-step-number">{step.id}</div>
                <div className="how-we-work-icon-wrapper">{step.icon}</div>
                <h3 className="how-we-work-step-title">{step.title}</h3>
                <p className="how-we-work-step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;