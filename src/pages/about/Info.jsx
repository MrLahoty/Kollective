import { FaAward, FaBriefcase, FaHeadset } from "react-icons/fa";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <FaAward className="about__icon" />
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">8+ Years</span>
      </div>

      <div className="about__box">
        <FaBriefcase className="about__icon" />

        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">48+ Projects</span>
      </div>

      <div className="about__box">
        <FaHeadset className="about__icon" />
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;