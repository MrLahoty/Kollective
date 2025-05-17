import './team.css';
import { useNavigate } from 'react-router';
import janeImg from '../../assets/project-1.jpg';
import suzaneImg from '../../assets/project-2.jpg';
import johnImg from '../../assets/project-3.jpg';
import edwardImg from '../../assets/project-4.jpg';

const teamMembers = [
  { name: 'Jane Doe', role: 'CEO', image: janeImg },
  { name: 'Suzane Sparks', role: 'Finance Manager', image: suzaneImg },
  { name: 'John Peters', role: 'Video Editor', image: johnImg },
  { name: 'Edward Palmer', role: 'Creative Director', image: edwardImg },
  { name: 'Max Carter', role: 'Motion Designer', image: suzaneImg },
];

const Team = () => {
  const navigate = useNavigate();

  return (
    <section className="broken-grid-section">
      <h2 className="broken-grid-heading">Meet The Team</h2>

      <div className="broken-grid-container">
        {teamMembers.map((member, index) => (
          <div className="broken-grid-item" key={index}>
            <div className="flip-card">
              <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front">
                  <img src={member.image} alt={member.name} />
                </div>

                {/* Back */}
                <div className="flip-card-back">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="view-more-container">
        <button
          className="view-more-button"
          onClick={() => {
            console.log("Navigating to /team-details"); // Debug log
            navigate("/team-details");
          }}
        >
          View More
        </button>
      </div>
    </section>
  );
};

export default Team;
