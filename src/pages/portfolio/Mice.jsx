import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/footer/Footer";
import "./mice.css";

import mice1 from "../../assets/56.jpg";
import mice2 from "../../assets/567.jpg";
import mice3 from "../../assets/5678.jpg";
import mice4 from "../../assets/56789.jpg";
import mice5 from "../../assets/5678910.jpg";
import mice6 from "../../assets/567891011.jpg";
import mice7 from "../../assets/56789101112.jpg";
import { Link } from "react-router-dom";

const miceEvents = [
  {
    img: mice1,
    title: "International Business Meet",
    meta: "Meetings · Feb 2024",
    desc: "Facilitating global partnerships through high-level corporate networking.",
  },
  {
    img: mice2,
    title: "Employee Reward Escapade",
    meta: "Incentives · Mar 2024",
    desc: "An unforgettable luxury retreat celebrating team accomplishments.",
  },
  {
    img: mice3,
    title: "Annual Tech Conference",
    meta: "Conference · Apr 2024",
    desc: "Thought leaders discuss emerging technologies shaping the business world.",
  },
  {
    img: mice4,
    title: "Sustainable Future Expo",
    meta: "Exhibition · May 2024",
    desc: "Showcasing eco-innovation in industry and business practices.",
  },
  {
    img: mice5,
    title: "Global Trade Dialogue",
    meta: "Meetings · Jun 2024",
    desc: "Cross-border B2B discussions and panel insights on economic shifts.",
  },
  {
    img: mice6,
    title: "Incentive Gala – Bali Edition",
    meta: "Incentives · Jul 2024",
    desc: "A vibrant mix of leisure, networking, and cultural immersion.",
  },
  {
    img: mice7,
    title: "Innovation Product Expo",
    meta: "Exhibition · Aug 2024",
    desc: "A launchpad for groundbreaking ideas and next-gen solutions.",
  },
];

const Mice = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <section className="mice-events">
        <div className="mice-header">
          <p className="mice-breadcrumb">
            <Link to="/" className="breadcrumb-link">HOMEPAGE</Link> /{" "}
            <Link to="/portfolio" className="breadcrumb-link">PORTFOLIO</Link> / MICE EVENTS
          </p>

          <h1>
            Impactful <span>MICE</span> Events <br /> That Drive Connection & Growth
          </h1>
          <p className="mice-subline">
            From incentive getaways to large-scale exhibitions — we execute with precision and creativity.
          </p>
        </div>

        {/* === Highlighted Hero === */}
        <div className="mice-hero">
          <img src={miceEvents[0].img} alt={miceEvents[0].title} />
          <div className="mice-overlay">
            <p className="event-meta">{miceEvents[0].meta}</p>
            <h2>{miceEvents[0].title}</h2>
            <p>{miceEvents[0].desc}</p>
          </div>
        </div>

        {/* === Event Grid Section === */}
        <div className="mice-grid">
          {miceEvents.slice(1, 7).map((event, index) => (
            <div className="mice-card" key={index}>
              <img src={event.img} alt={event.title} />
              <div className="mice-info">
                <p className="event-meta">{event.meta}</p>
                <h3>{event.title}</h3>
                <p>{event.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* === Call to Action === */}
        <div className="mice-cta">
          <h2>Ready to Plan Your Next MICE Event?</h2>
          <p>
            Let’s create something unforgettable — from strategy to seamless delivery.
          </p>
          <a href="/contact" className="mice-cta-button">
            Start Planning →
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Mice;
