import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/footer/Footer";
import "./brand.css";

import brand1 from "../../assets/DELL/DELL1.jpg";
import brand2 from "../../assets/DELL/DELL2.jpg";
import brand3 from "../../assets/DELL/DELL3.jpg";
import brand4 from "../../assets/DELL/DELL4.jpg";
import brand5 from "../../assets/5678910.jpg";
import brand6 from "../../assets/567891011.jpg";
import brand7 from "../../assets/56789101112.jpg";

import { Link } from "react-router-dom";

const brandEvents = [
  // Group 1
  {
    img: brand1,
    title: "DELL TECHNOLOGY",
    meta: "Brand · Jan 2024",
    desc: "An elegant display of brand essence through immersive storytelling.",
  },
  {
    img: brand2,
    // title: "Product Experience Launch",
    // meta: "Brand · Feb 2024",
    // desc: "Curated spaces for high-end product reveals and audience engagement.",
  },
  {
    img: brand3,
    // title: "Rebranding Immersion Event",
    // meta: "Brand · Mar 2024",
    // desc: "Strategic rebranding celebrated with design and narrative-led moments.",
  },
  {
    img: brand4,
    // title: "Brand Heritage Gala",
    // meta: "Brand · Apr 2024",
    // desc: "Paying homage to a legacy through visual and sensory storytelling.",
  },

  // Group 2 (images repeated for now)
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
  {
    img: brand2,
    title: "Creative Showcase Pop-up",
    meta: "Brand · Aug 2024",
    desc: "Showcasing brand values through immersive installations.",
  },

  // Group 3 (repeat again)
  {
    img: brand3,
    title: "Lifestyle Brand Night",
    meta: "Brand · Sep 2024",
    desc: "Blending style, substance, and a strong narrative for guests.",
  },
  {
    img: brand4,
    title: "Pop Culture & Brand Mix",
    meta: "Brand · Oct 2024",
    desc: "Merging culture trends with interactive brand engagement.",
  },
  {
    img: brand5,
    title: "Future Vision Summit",
    meta: "Brand · Nov 2024",
    desc: "Projecting tomorrow with tech, community, and stories.",
  },
  {
    img: brand6,
    title: "Bold Identity Launch",
    meta: "Brand · Dec 2024",
    desc: "Announcing a refreshed brand vision with full-sensory experiences.",
  },
];

const Brand = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <section className="brand-events">
        {/* Header */}
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

        {/* Pattern: 1 big image + 3 small cards */}
        {Array.from({ length: Math.ceil(brandEvents.length / 4) }).map((_, groupIndex) => {
          const baseIndex = groupIndex * 4;
          const bigImage = brandEvents[baseIndex];
          const smallImages = brandEvents.slice(baseIndex + 1, baseIndex + 4);

          if (!bigImage) return null;

          return (
            <div key={groupIndex} className="brand-section-pattern">
              {/* Big Image Section */}
              <div className="brand-hero">
                <img src={bigImage.img} alt={bigImage.title} />
                <div className="brand-overlay">
                  <p className="event-meta">{bigImage.meta}</p>
                  <h2>{bigImage.title}</h2>
                  <p>{bigImage.desc}</p>
                </div>
              </div>

              {/* Small Image Grid */}
              <div className="brand-grid">
                {smallImages.map((event, index) => (
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
            </div>
          );
        })}

        {/* CTA Section */}
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
