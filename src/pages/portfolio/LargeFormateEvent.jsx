import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import "./largeformateevent.css";

import img1 from "../../assets/56.jpg";
import img2 from "../../assets/567.jpg";
import img3 from "../../assets/5678.jpg";
import img4 from "../../assets/56789.jpg";
import img5 from "../../assets/5678910.jpg";
import img6 from "../../assets/567891011.jpg";
import img7 from "../../assets/56789101112.jpg";

const events = [
  {
    img: img1,
    title: "Tech Expo 2024",
    meta: "Technology · Feb 2024",
    desc: "Massive exhibition featuring over 500 tech innovators worldwide.",
  },
  {
    img: img2,
    title: "Global Music Festival",
    meta: "Music · Apr 2024",
    desc: "Immersive soundscapes and performances with a crowd of 30,000+.",
  },
  {
    img: img3,
    title: "Mega Product Launch",
    meta: "Brand · May 2024",
    desc: "Unveiling cutting-edge products with synchronized light shows.",
  },
  {
    img: img4,
    title: "Urban Art Fair",
    meta: "Art · Jun 2024",
    desc: "Bold installations transforming urban venues into creative canvases.",
  },
  {
    img: img5,
    title: "Sports Fan Fest",
    meta: "Sports · Jul 2024",
    desc: "Stadium-scale event for fan engagement with live screens and contests.",
  },
  {
    img: img6,
    title: "Digital Culture Convention",
    meta: "Culture · Aug 2024",
    desc: "Celebrating digital creators, streamers, and immersive experiences.",
  },
  {
    img: img7,
    title: "National Business Expo",
    meta: "Business · Sep 2024",
    desc: "Interactive networking zones, panel stages, and business showcases.",
  },
];

const LargeFormateEvent = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <section className="large-events">
        <div className="large-header">
          <p className="large-breadcrumb">
            <Link to="/" className="breadcrumb-link">HOMEPAGE</Link> /{" "}
            <Link to="/portfolio" className="breadcrumb-link">PORTFOLIO</Link> / LARGE FORMAT EVENTS
          </p>
          <h1>
            Spectacular <span>Large Format</span> Events <br /> Engineered to Impress
          </h1>
          <p className="large-subline">
            Grand stages, massive audiences, flawless execution — unforgettable impact.
          </p>
        </div>

        <div className="large-hero-img">
          <img src={events[0].img} alt={events[0].title} />
          <div className="event-overlay">
            <p className="event-meta">{events[0].meta}</p>
            <h2>{events[0].title}</h2>
            <p>{events[0].desc}</p>
          </div>
        </div>

        <div className="event-grid">
          {events.slice(1, 5).map((event, index) => (
            <div className="event-card" key={index}>
              <img src={event.img} alt={event.title} />
              <div className="event-info">
                <p className="event-meta">{event.meta}</p>
                <h3>{event.title}</h3>
                <p>{event.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="large-section-text">
          <h2>Immersive Experiences</h2>
          <p>
            We bring creativity, technology, and scale to produce events that redefine engagement.
          </p>
        </div>

        <div className="event-grid">
          {events.slice(5, 9).map((event, index) => (
            <div className="event-card" key={index}>
              <img src={event.img} alt={event.title} />
              <div className="event-info">
                <p className="event-meta">{event.meta}</p>
                <h3>{event.title}</h3>
                <p>{event.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="large-cta">
          <h2>Plan Your Mega Experience</h2>
          <p>Partner with us to deliver high-impact, large-scale event productions.</p>
          <a href="/contact" className="large-cta-button">Start Planning →</a>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LargeFormateEvent;
