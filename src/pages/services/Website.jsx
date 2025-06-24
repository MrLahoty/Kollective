import { Link } from "react-router-dom";
import "./brands.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/footer/Footer";

const Mice = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const services = [
    {
      title: "MEETINGS",
      description: "Professional planning and execution of business meetings, ensuring seamless coordination and productive outcomes.",
    },
    {
      title: "INCENTIVES",
      description: "Designing unique and motivational experiences to reward performance and boost morale within teams and organizations.",
    },
    {
      title: "CONFERENCES",
      description: "Comprehensive support for organizing industry and corporate conferences, from logistics to content management.",
    },
    {
      title: "EXHIBITIONS",
      description: "Curating impactful exhibition experiences that attract audiences, engage brands, and showcase innovation.",
    },
    {
      title: "BUYER SELLER MEETS",
      description: "Facilitating dynamic buyer-seller networking sessions to encourage business opportunities and partnerships.",
    },
    {
      title: "CONCLAVES",
      description: "Strategic ideation and execution of high-profile conclaves featuring thought leadership, discussions, and engagement.",
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
          <span className="breadcrumb-cur" data-aos="fade-up">MICE</span>
        </p>

        <h1 className="hero-t" data-aos="fade-up">
          Meetings, Incentives, <br />
          <span className="highlig">Conferences &</span> <span className="light-w">Exhibitions</span>
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
            Planning a MICE initiative? Let’s build an event that makes a lasting impression.
          </p>
          <h2>
            From vision to <strong>venue</strong>—<br />
            <span>we bring</span> MICE ideas to life.
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

export default Mice;
