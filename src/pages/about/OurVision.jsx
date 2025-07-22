import React, { useEffect } from "react";
import "./ourvision.css";
import vision from "../../assets/download.png";
import AOS from "aos";
import "aos/dist/aos.css";

const OurVision = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);

  return (
    <div className="vision-container">
      <div className="vision-image" data-aos="fade-right">
        <img src={vision} alt="Our Vision" />
      </div>

      <div className="vision-content" data-aos="fade-left">
        <h2 className="vision-title">
          <span className="line"></span>OUR VISION
        </h2>

        <div className="vision-cards">
          <div className="card yellow-card" data-aos="fade-up">
            <h2>01.</h2>
            <p>
              To be the global leader in experiential marketing, renowned for
              our innovative and transformative brand experiences that captivate
              audiences and inspire lasting connections.
            </p>
          </div>
          <div className="card black-card" data-aos="fade-up" data-aos-delay="200">
            <h3>02.</h3>
            <p>
              To continuously push the boundaries of creativity and strategic
              insight, setting new standards in the industry and helping brands
              forge meaningful, emotional connections with their consumers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
