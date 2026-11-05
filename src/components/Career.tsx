import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Applications</h4>
                <h5>SGT University</h5>
              </div>
              <h3>Pursuing</h3>
            </div>
            <p>
              Specializing in Data Science, focusing on analytical thinking, data management, and the intersection of computing with AI technologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Secondary Education</h4>
                <h5>GD Goenka Public School</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed Class 12 with a strong academic foundation, enabling advanced learning capabilities in modern digital environments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Creator & Developer</h4>
                <h5>VYRON OS</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Built and actively expanding the VYRON OS, a fully autonomous AI assistant utilizing dynamic subagent systems and advanced data structures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
