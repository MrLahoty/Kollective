import { Link } from "react-router-dom";
import "./brands.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/footer/Footer";

const Branded = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const services = [
    {
      title: "STATE EVENTS",
      description:
        "Organizing large-scale official events for government and public administration with precision and impact.",
    },
    {
      title: "PUBLIC MEETINGS & PARTY MEETINGS",
      description:
        "Expertly managed large public gatherings and political party events ensuring crowd engagement and safety.",
    },
    {
      title: "EXHIBITIONS & TRADE SHOWS",
      description:
        "Designing and managing exhibitions and expos that attract industry leaders, professionals, and consumers.",
    },
    {
      title: "CONCERT & STAGE SHOWS",
      description:
        "Delivering unforgettable live performances with full production support from stage to audience management.",
    },
    {
      title: "FILM FESTIVALS",
      description:
        "Curating film festivals that celebrate cinema, talent, and storytelling in immersive event environments.",
    },
    {
      title: "FILM & TELEVISION AWARD CEREMONY",
      description:
        "Producing prestigious award functions that honor talent and captivate audiences on-screen and in-person.",
    },
    {
      title: "INDUSTRY EVENTS",
      description:
        "Facilitating networking, discussions, and showcases within specialized industries and business communities.",
    },
    {
      title: "ROAD SHOWS & POLITICAL EVENTS",
      description:
        "Executing high-visibility road shows and political campaigns that reach the masses with strategic flair.",
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
          <span className="breadcrumb-cur" data-aos="fade-up">LARGE FORMAT EVENTS</span>
        </p>

        <h1 className="hero-t" data-aos="fade-up">
          Large Format <span className="light-w">Events</span> <br />
          <span className="highlig">that make</span> <span className="light-w">an impact</span>
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
            Looking to make your mark? We'll help you turn your project into a success story.
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

export default Branded;
