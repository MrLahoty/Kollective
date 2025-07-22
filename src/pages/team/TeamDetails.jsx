import React, { useEffect } from "react";
import "./teamdetails.css";
import janeImgs from "../../assets/Darshan Jain_Buisness and finance head.jpg";
import janeImgss from "../../assets/Sonit Sharma.jpg";
import janeImgssss from "../../assets/Aarti Sharma_Finance manager.jpg";
import janeImgsssss from "../../assets/Esha Jain_Social media manager.jpg";
import janeImg from "../../assets/Subham Choudhury_Creative Head.jpg";
import suzaneImg from "../../assets/Manjyoti Tiwari.jpg";
import johnImg from "../../assets/Makbul Hussain.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const teamMembers = [
  {
    name: "DARSHAN JAIN",
    role: "Business & Finance Head",
    image: janeImgs,
  },
  {
    name: "SONIT SHARMA",
    role: "Client Servicing & Business Development",
    image: janeImgss,
  },
  {
    name: "AARTI SHARMA",
    role: "Finance Manager",
    image: janeImgssss,
  },
  {
    name: "ESHA JAIN",
    role: "Social Media Manager",
    image: janeImgsssss,
  },
  {
    name: "SUBHAM CHOUDHURY",
    role: "Graphics / 3D Designer",
    image: janeImg,
  },
  {
    name: "MANJIT TIWARI",
    role: "Operations Manager",
    image: suzaneImg,
  },
  {
    name: "MOKBUL HUSSAIN",
    role: "Operations Executive",
    image: johnImg,
  },
];

const TeamDetails = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on mount
  }, []);
  
  return (
    <section className="team-details-section">
     <div className="team-details-section">
  <h2 className="team-details-title">Our Team</h2>
  <div className="team-details-grid">
    {teamMembers.map((member, index) => (
    <div className="team-details-row" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
        <div className="team-image-col">
          <img src={member.image} alt={member.name} className="team-image" />
        </div>
        <div className="team-info-col">
          <h3 className="team-name">{member.name}</h3>
          <p className="team-role">{member.role}</p>
        </div>
      </div>
    ))}
  </div>
</div>

    </section>
  );
};

export default TeamDetails;