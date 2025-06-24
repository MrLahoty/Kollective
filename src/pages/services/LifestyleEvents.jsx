import { Link } from "react-router-dom";
import "./brands.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/footer/Footer";

const LifestyleEvents = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const services = [
    {
      title: "FASHION SHOWS",
      description:
        "Experience high-fashion like never before with runway productions, designer showcases, and trend-forward event staging that turns heads and sets standards.",
    },
    {
      title: "‘BY INVITE’ EXCLUSIVE EVENTS",
      description:
        "Crafted for the select few — our exclusive soirées and members-only gatherings offer prestige, privacy, and elevated engagement.",
    },
    {
      title: "THEATRICAL EXPERIENCES",
      description:
        "Merge entertainment and elegance with immersive performances that blend stagecraft, storytelling, and spectacle for unforgettable guest journeys.",
    },
    {
      title: "SPORTS EVENTS & EXPERIENCES",
      description:
        "From courtside to VIP lounges — we curate sports-based luxury moments that combine adrenaline, luxury, and social status.",
    },
    {
      title: "MOTORSPORTS EXPERIENCES",
      description:
        "Precision, power, and prestige come together in bespoke motorsports experiences including track days, racing hospitality, and brand-integrated drives.",
    },
    {
      title: "WEDDING CELEBRATIONS",
      description:
        "From intimate ceremonies to destination extravaganzas — our weddings are personal, polished, and profoundly beautiful.",
    },
    {
      title: "MILESTONE CELEBRATIONS",
      description:
        "Celebrate life’s defining moments with curated settings, luxury details, and heartfelt storytelling made tangible.",
    },
  ];

  return (
    <section className="allbrands">
      {/* Hero Section */}
      <div className="portfolio-h" data-aos="fade-up">
        <p className="breadcr" data-aos="fade-up">
          <Link to="/" className="breadcrumb-l">HOMEPAGE</Link>
          &nbsp; / &nbsp;
          <Link to="/allservices" className="breadcrumb-l">SERVICES</Link>
          &nbsp; / &nbsp;
          <span className="breadcrumb-cur">LIFESTYLE & LUXURY</span>
        </p>

        <h1 className="hero-t" data-aos="fade-up">
          Lifestyle <span className="light-w">& Luxury</span> <br />
          <span className="highlig">Experiences</span> <span className="light-w">Reimagined</span>
        </h1>

        <a href="#our-services" className="our-works-l" data-aos="fade-up">
          ABOUT SERVICE <span className="down-arr">↓</span>
        </a>
      </div>

      {/* Accordion Section */}
      <div className="accordion-wrapper" id="our-services" data-aos="fade-up">
        {services.map((item, index) => (
          <div className="accordion-item" key={index}>
            <div className="accordion-header" onClick={() => toggleItem(index)}>
              <span className="accordion-title">{item.title}</span>
              <div className={`accordion-toggle ${openIndex === index ? "open" : ""}`}>
                {openIndex === index ? "−" : "+"}
              </div>
            </div>
            {openIndex === index && (
              <div className="accordion-body">
                <p>{item.description}</p>
              </div>
            )}
            <hr />
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="portfolio-cta" data-aos="fade-up">
        <div className="cta-content" data-aos="fade-up">
          <p className="cta-subtext" data-aos="fade-up">
            Luxury is in the detail — and we obsess over every one. Let’s design moments that leave a legacy.
          </p>
          <h2>
            Plan <strong>extraordinary</strong> <br />
            <span>lifestyle events</span> with us.
          </h2>
          <a href="/contact" className="cta-button">
            Contact Us <span className="arrow">→</span>
          </a>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default LifestyleEvents;
