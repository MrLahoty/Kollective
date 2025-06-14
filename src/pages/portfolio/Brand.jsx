import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/footer/Footer";
import "./brand.css";

import brand1 from "../../assets/56.jpg";
import brand2 from "../../assets/567.jpg";
import brand3 from "../../assets/5678.jpg";
import brand4 from "../../assets/56789.jpg";
import brand5 from "../../assets/5678910.jpg";
import brand6 from "../../assets/567891011.jpg";
import brand7 from "../../assets/56789101112.jpg";

import { Link } from "react-router-dom";

const brandEvents = [
  {
    img: brand1,
    title: "Signature Brand Showcase",
    meta: "Brand · Jan 2024",
    desc: "An elegant display of brand essence through immersive storytelling.",
  },
  {
    img: brand2,
    title: "Product Experience Launch",
    meta: "Brand · Feb 2024",
    desc: "Curated spaces for high-end product reveals and audience engagement.",
  },
  {
    img: brand3,
    title: "Rebranding Immersion Event",
    meta: "Brand · Mar 2024",
    desc: "Strategic rebranding celebrated with design and narrative-led moments.",
  },
  {
    img: brand4,
    title: "Brand Heritage Gala",
    meta: "Brand · Apr 2024",
    desc: "Paying homage to a legacy through visual and sensory storytelling.",
  },
  {
    img: brand5,
    title: "Tech x Identity Activation",
    meta: "Brand · May 2024",
    desc: "Blending digital innovation with brand authenticity in live format.",
  },
  {
    img: brand6,
    title: "Heritage Meets Future Forum",
    meta: "Brand · Jun 2024",
    desc: "Discussing the brand’s role in tomorrow’s world with thought leaders.",
  },
  {
    img: brand7,
    title: "Brand Culture Capsule",
    meta: "Brand · Jul 2024",
    desc: "A time-bound event exploring identity, voice, and audience love.",
  },
];

const Brand = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <section className="brand-events">
        <div className="brand-header">
          <p className="brand-breadcrumb">
            <Link to="/" className="breadcrumb-link">HOMEPAGE</Link> /{" "}
            <Link to="/portfolio" className="breadcrumb-link">PORTFOLIO</Link> / BRAND EVENTS
          </p>

          <h1>
            Compelling <span>Brand Experiences</span><br /> That Define Presence
          </h1>
          <p className="brand-subline">
            We translate brand identity into unforgettable physical moments.
          </p>
        </div>

        <div className="brand-hero">
          <img src={brandEvents[0].img} alt={brandEvents[0].title} />
          <div className="brand-overlay">
            <p className="event-meta">{brandEvents[0].meta}</p>
            <h2>{brandEvents[0].title}</h2>
            <p>{brandEvents[0].desc}</p>
          </div>
        </div>

        <div className="brand-grid">
          {brandEvents.slice(1).map((event, index) => (
            <div className="brand-card" key={index}>
              <img src={event.img} alt={event.title} />
              <div className="brand-info">
                <p className="event-meta">{event.meta}</p>
                <h3>{event.title}</h3>
                <p>{event.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="brand-cta">
          <h2>Let’s Bring Your Brand Vision to Life</h2>
          <p>
            Strategic, bold, and visually arresting brand activations start here.
          </p>
          <a href="/contact" className="brand-cta-button">
            Partner With Us →
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Brand;
