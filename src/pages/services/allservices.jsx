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
          &nbsp; / &nbsp;
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

      {/* Services Section 1 */}
      <div id="our-services" className="services-gridss" data-aos="fade-up">
        {[
          {
            title: "CORPORATE EVENTS",
            desc: "Our creative agency is a team of professionals focused on helping your brand grow.",
            path: "/brands",
            list: [
              "TOWNHALLS & CONFERENCES",
              "PRODUCT & FACILITY LAUNCHES",
              "SALES & DEALER MEETS",
              "CUSTOMERS & BRAND ACTIVATIONS",
              "ROADSHOWS & EXHIBITIONS DISPLAYS",
              "EMPLOYEE ENGAGEMENT ACTIVITIES & EVENTS",
              "CORPORATE GIFTINGS & MERCHANDISING",
              "ANNUAL DAYS & RNR EVENTS",
              "COMPANY OFFSITES",
            ],
          },
          {
            title: "LARGE FORMAT EVENTS",
            desc: "Our creative agency is a team of professionals focused on helping your brand grow.",
            path: "/branded",
            list: [
              "STATE EVENTS 01.",
              "PUBLIC MEETINGS & PARTY MEETINGS 02.",
              "EXHIBITIONS & TRADE SHOWS 03.",
              "CONCERT & STAGE SHOWS 04.",
              "FILM FESTIVALS 05.",
              "FILM & TELEVISION AWARD CEREMONY 06.",
              "INDUSTRY EVENTS 07.",
              "ROAD SHOWS & POLITICAL EVENTS",
            ],
          },
        ].map((service, index) => (
          <Link
            to={service.path}
            key={index}
            className="service-card-link"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="service-cardss">
              <h3 className="service-titless">{service.title}</h3>
              <p className="service-descss">{service.desc}</p>
              <ul className="service-listss">
                {service.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <div className="read-more-sectionss">
                <button className="read-more-btnss">→</button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Services Section 2 */}
      <div className="services-gridss" data-aos="fade-up">
        {[
          {
            title: "MICE",
            desc: "Our creative agency is a team of professionals focused on helping your brand grow.",
            path: "/website",
            list: [
              "MEETINGS 01.",
              "INCENTIVES 02.",
              "CONFERENCES 03.",
              "EXHIBITIONS 04.",
              "BUYER SELLER MEETS 05.",
              "CONCLAVES",
            ],
          },
          {
            title: "BRAND COMMUNICATION AND ADVERTISING",
            desc: "Our creative agency is a team of professionals focused on helping your brand grow.",
            path: "/max",
            list: [
              "OUT OF HOME SOLUTIONS (OOH) 01.",
              "RADIO SPOTS & CAMPAIGNS 02.",
              "DIGITAL ADS & ADVERTORIALS 03.",
              "BRAND IDENTITY DEVELOPMENT 04.",
              "SOCIAL MEDIA CAMPAIGNS 05.",
              "PRINT & NATIVE ADVERTISING 06.",
              "AMBIENT MEDIA & INSTALLATION",
            ],
          },
        ].map((service, index) => (
          <Link
            to={service.path}
            key={index}
            className="service-card-link"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="service-cardss">
              <h3 className="service-titless">{service.title}</h3>
              <p className="service-descss">{service.desc}</p>
              <ul className="service-listss">
                {service.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <div className="read-more-sectionss">
                <button className="read-more-btnss">→</button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Services Section 3 - LIFESTYLE & LUXURY EVENTS */}
      <div className="services-gridss" data-aos="fade-up">
        <Link
          to="/lifestyleevents"
          className="service-card-link"
          onClick={() => window.scrollTo(0, 0)}
        >
          <div className="service-cardss">
            <h3 className="service-titless">LIFESTYLE & LUXURY EVENTS</h3>
            <p className="service-descss">
              Our creative agency is a team of professionals focused on helping your brand grow.
            </p>
            <ul className="service-listss">
              <li>FASHION SHOWS 01.</li>
              <li>‘BY INVITE’ EXCLUSIVE EVENTS 02.</li>
              <li>THEATRICAL EXPERIENCES 03.</li>
              <li>SPORTS EVENTS & EXPERIENCES 04.</li>
              <li>MOTORSPORTS EXPERIENCES 05.</li>
              <li>WEDDING CELEBRATIONS 06.</li>
              <li>MILESTONE CELEBRATIONS</li>
            </ul>
            <div className="read-more-sectionss">
              <button className="read-more-btnss">→</button>
            </div>
          </div>
        </Link>
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

export default AllServices;
