import React, { useEffect } from 'react';
import './resume.css';

const Resume: React.FC = () => {
  useEffect(() => { // []
    document.title = 'Resume - Eric Ngor';
  }, []);
  
  return (
    <div className="resume-component">
      <div className="resume-container">
        <a href="Eric-Ngor-Resume.pdf" download>Download Resume PDF</a>
        <object
          id="resume"
          data="Eric-Ngor-Resume.pdf#zoom=FitH"
          type="application/pdf"
          title="Resume"
        >
          <div className="mobile-resume-container">
            <a href="Eric-Ngor-Resume.jpg" download="Eric-Ngor-Resume.jpg" title="Resume">
              <img src="Eric-Ngor-Resume.jpg" id="resume" alt="Resume" />
            </a>
          </div>
        </object>
      </div>
      <p>Last Updated 6/22/22</p>
    </div>
  );
}

export default Resume;