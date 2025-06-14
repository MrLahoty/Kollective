import { Link } from "react-router-dom";
import "./brands.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/footer/Footer";

const Website = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const services = [
    {
      title: "UX AUDITS",
      description: "We evaluate your user experience to uncover friction points and improve usability.We evaluate your user experience to uncover friction points and improve usability.We evaluate your user experience to uncover friction points and improve usability.",
    },
    {
      title: "DESIGN THINKING",
      description: "We apply a problem-solving approach that starts with understanding your users' needs.We apply a problem-solving approach that starts with understanding your users' needs.We apply a problem-solving approach that starts with understanding your users' needs.",
    },
    {
      title: "WIREFRAMING",
      description: "We build layout blueprints to help visualize product functionality and flow.We build layout blueprints to help visualize product functionality and flow.We build layout blueprints to help visualize product functionality and flow.We build layout blueprints to help visualize product functionality and flow.",
    },
    {
      title: "AESTHETICS",
      description: "We create visually pleasing designs that align with your brand and appeal to users.We create visually pleasing designs that align with your brand and appeal to users.We create visually pleasing designs that align with your brand and appeal to users.We create visually pleasing designs that align with your brand and appeal to users.",
    },
    {
      title: "METHODOLOGIES",
      description: "We follow industry-standard processes to ensure quality and efficiency.We follow industry-standard processes to ensure quality and efficiency.We follow industry-standard processes to ensure quality and efficiency.We follow industry-standard processes to ensure quality and efficiency.",
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
          <span className="breadcrumb-cur" data-aos="fade-up">WEBSITE</span>
        </p>

        <h1 className="hero-t" data-aos="fade-up">
          Website <span className="light-w">Design</span> <br />
          <span className="highlig">and</span> <span className="light-w">Development</span>
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
            Looking to make your mark? We'll help you turn your project into a
            success story.
          </p>
          <h2>
            Ready to bring <strong>your</strong> ideas to <strong>life?</strong>
            <br />
            <span>We're</span> here to help
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

export default Website;
