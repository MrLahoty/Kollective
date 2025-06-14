import "./team.css";
import janeImg from "../../assets/project-1.jpg";
import suzaneImg from "../../assets/project-2.jpg";
import johnImg from "../../assets/project-3.jpg";
import edwardImg from "../../assets/project-4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const teamMembers = [
  { name: "Jane Doe", image: janeImg, occupation: "Project Manager" },
  { name: "Suzane Sparks", image: suzaneImg, occupation: "UI/UX Designer" },
  { name: "John Peters", image: johnImg, occupation: "Full Stack Developer" },
  { name: "Edward Palmer", image: edwardImg, occupation: "Marketing Lead" },
];

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // once: false allows repeat on scroll
  }, []);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/team-details");
  };

  return (
    <section className="team-section" data-aos="fade-up">
      <div className="team-text" data-aos="fade-right">
        <h2 className="team-subtitle">
          Meet <br />
          Our Team
        </h2>
        <p>
          We are talented individuals who are passionate about bringing ideas to
          life. With a diverse range of backgrounds and skill sets, we
          collaborate to produce effective solutions for our clients.
        </p>
        <p>
          Together, our creative team is committed to delivering impactful work
          that exceeds expectations.
        </p>
        <button className="team-read-more" data-aos="fade-up" onClick={handleClick}>
          <span className="read-more-text">READ MORE</span>
          <span className="arrow-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="arrow-icon"
            >
              <path
                d="M14 5.34c-.26 0-.52.1-.71.29l-.09.09c-.39.39-.39 1.03 0 1.42L17.07 11H4c-.55 0-1 .45-1 1s.45 1 1 1h13.07l-3.87 3.86c-.39.39-.39 1.03 0 1.42l.09.09c.39.39 1.03.39 1.42 0l5.66-5.66c.39-.39.39-1.03 0-1.42L14.71 5.63c-.2-.19-.45-.29-.71-.29z"
                fill="#ff9800"
              />
            </svg>
          </span>
        </button>

        {/* Add this below the button */}
        <div className="team-message">
          <span className="light-text">We</span>&nbsp;
          <span className="bold-text">delivering</span>&nbsp;
          <br />
          <span className="light-text">exceptional </span>
          <span className="bold-text">results.</span>&nbsp;
        </div>
      </div>

      <div className="team-images-grid">
        {teamMembers.map((member, index) => (
          <div
            key={member.name}
            className={`team-image-box ${index % 2 === 1 ? "down" : ""}`}
            data-aos={index % 2 === 0 ? "zoom-in-up" : "zoom-in-down"}
            data-aos-delay={index * 200}
          >
            <div className="team-image-wrapper">
              <img src={member.image} alt={member.name} />
              <div className="image-overlay"></div>
              <div className="member-info">
                <div className="member-name">{member.name}</div>
                <div className="member-occupation">{member.occupation}</div>
              </div>
              <div className="gold-line"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
