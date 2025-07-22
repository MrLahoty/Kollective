import React, { useEffect } from "react";
import "./founder.css";
import founderImg from "../../assets/founder.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Founder = () => {
    useEffect(() => {
    AOS.init({ duration: 1200, once: false });
}, []);

  return (
    <div className="founder-container">
      <div className="founder-left" data-aos="fade-right">
        <h2>
          <span className="highlightssss">I</span>SHAN JAIN
        </h2>
        <h4 className="role">FOUNDER</h4>

        <div className="skills" data-aos="fade-up">
          <div className="skill">
            <div className="semi-circle">
              <div className="fill fill-90"></div>
              <div className="percentage-text">90%</div>
            </div>
            <p>
              Corporate
              <br />
              Events
            </p>
          </div>

          <div className="skill">
            <div className="semi-circle">
              <div className="fill fill-90"></div>
              <div className="percentage-text">90%</div>
            </div>
            <p>
              Large Format
              <br />
              Events
            </p>
          </div>

          <div className="skill">
            <div className="semi-circle">
              <div className="fill fill-88"></div>
              <div className="percentage-text">88%</div>
            </div>
            <p>MICE</p>
          </div>

          <div className="skill">
            <div className="semi-circle">
              <div className="fill fill-92"></div>
              <div className="percentage-text">92%</div>
            </div>
            <p>
              Brand Comm.
              <br />& Advertising
            </p>
          </div>
        </div>

        <p className="bioss" data-aos="fade-up" data-aos-delay="200">
          Born & Brought up in Guwahati, Ishan started his career in the year
          2017 to follow his passion and love towards the event industry.
        </p>
        <p className="bioss" data-aos="fade-up" data-aos-delay="400">
          A graduate of Royal Global University with a degree in Commerce, Ishan
          combines a strong academic background with hands-on expertise in
          strategic marketing, event management, and creative design. Before
          founding Kollective Events & Xperiences, Ishan held key positions at
          several top marketing agencies, where they led successful campaigns
          for renowned global brands.
        </p>
      </div>

      <div className="founder-right" data-aos="fade-left">
        <img src={founderImg} alt="Ishan Jain - Founder" />
      </div>
    </div>
  );
};

export default Founder;
