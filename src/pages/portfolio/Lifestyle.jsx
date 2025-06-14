import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/footer/Footer";
import "./lifestyle.css";

import lifestyle1 from "../../assets/56.jpg";
import lifestyle2 from "../../assets/567.jpg";
import lifestyle3 from "../../assets/5678.jpg";
import lifestyle4 from "../../assets/56789.jpg";
import lifestyle5 from "../../assets/5678910.jpg";
import lifestyle6 from "../../assets/567891011.jpg";
import lifestyle7 from "../../assets/56789101112.jpg";
import { Link } from "react-router-dom";

const lifestyleEvents = [
  {
    img: lifestyle1,
    title: "Urban Wellness Escape",
    meta: "Lifestyle · Jan 2024",
    desc: "A curated day of balance with wellness workshops and sensory experiences.",
  },
  {
    img: lifestyle2,
    title: "Style & Soul Soirée",
    meta: "Lifestyle · Feb 2024",
    desc: "A fusion of fashion and mindfulness in a vibrant evening setting.",
  },
  {
    img: lifestyle3,
    title: "Luxury Living Showcase",
    meta: "Lifestyle · Mar 2024",
    desc: "An immersive peek into refined living with elite lifestyle brands.",
  },
  {
    img: lifestyle4,
    title: "Culinary + Culture Fest",
    meta: "Lifestyle · Apr 2024",
    desc: "Gastronomy meets art in this multi-sensory lifestyle celebration.",
  },
  {
    img: lifestyle5,
    title: "The Conscious Market",
    meta: "Lifestyle · May 2024",
    desc: "Sustainable brands and ethical living come together in this fair.",
  },
  {
    img: lifestyle6,
    title: "Experiential Home Expo",
    meta: "Lifestyle · Jun 2024",
    desc: "Interactive installations redefining comfort, style, and function.",
  },
  {
    img: lifestyle7,
    title: "Soulful Escapes Retreat",
    meta: "Lifestyle · Jul 2024",
    desc: "An off-grid mini festival blending nature, music, and wellbeing.",
  },
];

const Lifestyle = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <section className="lifestyle-events">
        <div className="lifestyle-header">
          <p className="lifestyle-breadcrumb">
            <Link to="/" className="breadcrumb-link">HOMEPAGE</Link> /{" "}
            <Link to="/portfolio" className="breadcrumb-link">PORTFOLIO</Link> / LIFESTYLE EVENTS
          </p>

          <h1>
            Curated <span>Lifestyle Moments</span><br /> That Inspire the Senses
          </h1>
          <p className="lifestyle-subline">
            Celebrating modern living with immersive, stylish gatherings.
          </p>
        </div>

        <div className="lifestyle-hero">
          <img src={lifestyleEvents[0].img} alt={lifestyleEvents[0].title} />
          <div className="lifestyle-overlay">
            <p className="event-meta">{lifestyleEvents[0].meta}</p>
            <h2>{lifestyleEvents[0].title}</h2>
            <p>{lifestyleEvents[0].desc}</p>
          </div>
        </div>

        <div className="lifestyle-grid">
          {lifestyleEvents.slice(1).map((event, index) => (
            <div className="lifestyle-card" key={index}>
              <img src={event.img} alt={event.title} />
              <div className="lifestyle-info">
                <p className="event-meta">{event.meta}</p>
                <h3>{event.title}</h3>
                <p>{event.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="lifestyle-cta">
          <h2>Let’s Curate a Lifestyle Journey</h2>
          <p>
            Sophisticated, soulful, and story-driven experiences await your audience.
          </p>
          <a href="/contact" className="lifestyle-cta-button">
            Collaborate With Us →
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Lifestyle;
