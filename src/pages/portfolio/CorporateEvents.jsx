import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/footer/Footer";
import "./corporateEvents.css";

import image56 from "../../assets/56.jpg";
import image567 from "../../assets/567.jpg";
import image5678 from "../../assets/5678.jpg";
import image56789 from "../../assets/56789.jpg";
import image5678910 from "../../assets/5678910.jpg";
import image567891011 from "../../assets/567891011.jpg";
import image56789101112 from "../../assets/5678910.jpg";
import { Link } from "react-router-dom";

const events = [
  {
    img: image56,
    title: "Corporate Leadership Summit",
    meta: "Leadership · Jan 2024",
    desc: "An elite gathering of business leaders sharing strategies for tomorrow.",
  },
  {
    img: image567,
    title: "Tech Innovation Meetup",
    meta: "Innovation · Feb 2024",
    desc: "Showcasing cutting-edge corporate technologies and AI disruption.",
  },
  {
    img: image5678,
    title: "Annual Sales Conference",
    meta: "Sales · Mar 2024",
    desc: "Celebrating team success and mapping revenue targets for the next fiscal.",
  },
  {
    img: image56789,
    title: "Marketing Strategy Retreat",
    meta: "Marketing · Apr 2024",
    desc: "Inspiring sessions focused on next-gen brand narratives.",
  },
  {
    img: image5678910,
    title: "Financial Planning Forum",
    meta: "Finance · May 2024",
    desc: "CFOs and strategists collaborate on sustainable growth frameworks.",
  },
  {
    img: image567891011,
    title: "Human Resource Roundtable",
    meta: "HR · Jun 2024",
    desc: "Innovations in people management, culture building, and talent retention.",
  },
  {
    img: image56789101112,
    title: "Sustainability in Business",
    meta: "ESG · Jul 2024",
    desc: "Driving corporate responsibility in a changing world.",
  },
];

const CorporateEvents = () => {
  
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <section className="corporate-events">
        <div className="corporate-header">
          <p className="corporate-breadcrumb">
            <Link to="/" className="breadcrumb-link">
              HOMEPAGE
            </Link>{" "}
            /{" "}
            <Link to="/portfolio" className="breadcrumb-link">
              PORTFOLIO
            </Link>{" "}
            / CORPORATE EVENTS
          </p>

          <h1>
            Powerful <span>Corporate</span> Events <br /> Designed to Inspire
          </h1>
          <p className="corporate-subline">
            From leadership summits to tech showcases — we craft moments that
            matter.
          </p>
        </div>

        {/* === Large First Image === */}
        <div className="corporate-large-img">
          <img src={events[0].img} alt={events[0].title} />
          <div className="event-overlay">
            <p className="event-meta">{events[0].meta}</p>
            <h2>{events[0].title}</h2>
            <p>{events[0].desc}</p>
          </div>
        </div>

        {/* === 2x2 Grid Section === */}
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

        {/* === Section Title === */}
        <div className="corporate-section-text">
          <h2>Corporate Events</h2>
          <p>
            Creating exceptional experiences through professional execution and
            innovation.
          </p>
        </div>

        {/* === Another 2x2 Grid Section === */}
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

        <div className="corporate-cta">
          <h2>Ready to Elevate Your Brand?</h2>
          <p>
            Let us help you deliver memorable and meaningful corporate events.
          </p>
          <a href="/contact" className="corporate-cta-button">
            Get in Touch →
          </a>
        </div>
      </section>

      {/* Footer is placed outside the section here */}
      <Footer />
    </>
  );
};

export default CorporateEvents;
