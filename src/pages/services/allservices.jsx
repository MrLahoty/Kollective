import { Link } from "react-router-dom";
import "./allservices.css";
import Footer from "../../components/footer/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AllServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  return (
    <section className="allservicess">
      {/* Hero Section */}
      <div className="portfolio-heross" data-aos="fade-up">
        <p className="breadcrumbss" data-aos="fade-up">
          <Link to="/" className="breadcrumb-linkss">
            HOMEPAGE
          </Link>
          &nbsp;  /  &nbsp;
          <span className="breadcrumb-current" data-aos="fade-up">
            SERVICES
          </span>
        </p>

        <h1 className="hero-titlesss" data-aos="fade-up">
          This is <span className="light-word">what</span> <br />
          <span className="highlightss">we</span> do{" "}
          <span className="light-word">best</span>
        </h1>

        <a href="#our-services" className="our-works-links" data-aos="fade-up">
          OUR SERVICES <span className="down-arrows">↓</span>
        </a>
      </div>

      {/* Services Section */}
      <div id="our-services" className="services-gridss" data-aos="fade-up">
        {[
          {
            title: "Branding and Identity Design",
            desc: "Our creative agency is a team of professionals focused on helping your brand grow.",
            path: "/brands",
          },
          {
            title: "Website Design and Development",
            desc: "Our creative agency is a team of professionals focused on helping your brand grow.",
            path: "/branded",
          },
        ].map((service, index) => (
          <Link
            to={service.path}
            key={index}
            className="service-card-link"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="service-cardss" key={index}>
              <h3 className="service-titless">{service.title}</h3>
              <p className="service-descss">{service.desc}</p>
              <ul className="service-listss">
                <li>UX AUDITS</li>
                <li>DESIGN THINKING</li>
                <li>METHODOLOGIES</li>
                <li>WIREFRAMING</li>
              </ul>
              <div className="read-more-sectionss">
                <button className="read-more-btnss">→</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* Services Section */}
      <div className="services-gridss" data-aos="fade-up">
        {[
          {
            title: "Branding and Identity Design",
            desc: "Our creative agency is a team of professionals focused on helping your brand grow.",
            path: "/website",
          },
          {
            title: "Website Design and Development",
            desc: "Our creative agency is a team of professionals focused on helping your brand grow.",
            path: "/max",
          },
        ].map((service, index) => (
          <Link
            to={service.path}
            key={index}
            className="service-card-link"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="service-cardss" key={index}>
              <h3 className="service-titless">{service.title}</h3>
              <p className="service-descss">{service.desc}</p>
              <ul className="service-listss">
                <li>UX AUDITS</li>
                <li>DESIGN THINKING</li>
                <li>METHODOLOGIES</li>
                <li>WIREFRAMING</li>
              </ul>
              <div className="read-more-sectionss">
                <button className="read-more-btnss">→</button>
              </div>
            </div>
          </Link>
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

export default AllServices;
