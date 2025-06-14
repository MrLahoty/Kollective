import React, { useEffect } from "react";
import "./teamdetails.css";
import janeImg from "../../assets/project-1.jpg";
import suzaneImg from "../../assets/project-2.jpg";
import johnImg from "../../assets/project-3.jpg";
import edwardImg from "../../assets/project-4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const teamMembers = [
  {
    name: "Jane Doe",
    role: "CEO",
    image: janeImg,
    bio: "Visionary leader with 15+ years in business strategy, scaling startups, and inspiring innovation.",
  },
  {
    name: "Suzane Sparks",
    role: "Finance Manager",
    image: suzaneImg,
    bio: "Expert in corporate finance, budgeting, and financial analytics. Keeps everything running smoothly.",
  },
  {
    name: "John Peters",
    role: "Video Editor",
    image: johnImg,
    bio: "Creative mind behind our video content. Skilled in Adobe Premiere and Final Cut Pro.",
  },
  {
    name: "Edward Palmer",
    role: "Creative Director",
    image: edwardImg,
    bio: "Crafts powerful visual identities and leads design direction across all projects.",
  },
  {
    name: "Max Carter",
    role: "Motion Designer",
    image: suzaneImg,
    bio: "Specialist in animation and transitions. Brings visuals to life with fluid motion design.",
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
          <p className="team-bio">{member.bio}</p>
          <p className="team-tags">
            #leadership #design #strategy #vision #creativity
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

    </section>
  );
};

export default TeamDetails;