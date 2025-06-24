import { Link } from "react-router-dom";
import "./brands.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/footer/Footer";

const CorporateEvents = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const services = [
    {
      title: "TOWNHALLS & CONFERENCES",
      description: "We organize high-impact townhalls and conferences that keep your audience informed, aligned, and inspired.",
    },
    {
      title: "PRODUCT & FACILITY LAUNCHES",
      description: "From concept to execution, we create launch experiences that generate buzz and build lasting brand recall.",
    },
    {
      title: "SALES & DEALER MEETS",
      description: "We craft dynamic and engaging sales meets and channel partner events that drive motivation and loyalty.",
    },
    {
      title: "CUSTOMER & BRAND ACTIVATIONS",
      description: "Interactive experiences that bring your brand to life and foster stronger connections with your audience.",
    },
    {
      title: "ROADSHOWS & EXHIBITION DISPLAYS",
      description: "Seamless execution of brand roadshows and standout exhibition setups tailored to maximize visibility and engagement.",
    },
    {
      title: "EMPLOYEE ENGAGEMENT ACTIVITIES & EVENTS",
      description: "Creative in-office and offsite programs designed to boost morale, collaboration, and workplace culture.",
    },
    {
      title: "CORPORATE GIFTING & MERCHANDISING",
      description: "Customized gifts and branded merchandise that leave a lasting impression on clients, partners, and teams.",
    },
    {
      title: "ANNUAL DAYS & RNR EVENTS",
      description: "Celebrate milestones with immersive annual day celebrations and recognition events that reward excellence.",
    },
    {
      title: "COMPANY OFFSITES",
      description: "End-to-end planning of corporate retreats and team offsites for strategic alignment and team bonding.",
    },
  ];

  return (
    <section className="allbrands">
      {/* Hero Section */}
      <div className="portfolio-h" data-aos="fade-up">
        <p className="breadcr" data-aos="fade-up">
          <Link to="/" className="breadcrumb-l">HOMEPAGE</Link>
          &nbsp; / &nbsp;
          <Link to="/allservices" className="breadcrumb-l" data-aos="fade-up">SERVICES</Link>
          &nbsp; / &nbsp;
          <span className="breadcrumb-cur" data-aos="fade-up">CORPORATE EVENTS</span>
        </p>

        <h1 className="hero-t" data-aos="fade-up">
          Corporate <span className="light-w">Events</span> <br />
          <span className="highlig">that Engage</span> <span className="light-w">& Inspire</span>
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
            Make your next corporate event unforgettable with our end-to-end planning and execution expertise.
          </p>
          <h2>
            Let’s build <strong>moments</strong> <br />
            <span>your teams</span> will remember
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

export default CorporateEvents;
