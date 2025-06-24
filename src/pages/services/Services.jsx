import "./services.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import serviceImg from "../../assets/Image.jpeg";

const services = [
  {
    title: "CORPORATE EVENTS",
    description:
      "End-to-end execution of townhalls, launches, offsites, and employee engagement programs tailored to your company goals.",
    path: "/brands",
  },
  {
    title: "LARGE FORMAT EVENT",
    description:
      "High-impact expos, summits, and mass-scale productions that blend creativity with flawless logistics.",
    path: "/branded",
  },
  {
    title: "MICE",
    description:
      "Meetings, Incentives, Conferences, and Exhibitions—planned with precision and international standards.",
    path: "/website",
  },
  {
    title: "BRAND COMMUNICATION AND ADVERTISING",
    description:
      "Strategic campaigns and creative solutions that amplify your brand message across digital and traditional platforms.",
    path: "/max",
  },
    {
    title: "LIFESTYLE & LUXURY EVENTS",
    description:
      "Curated experiences for premium brands—fashion shows, art launches, private parties, and ultra-luxury affairs.",
    path: "/lifestyleevents",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
      disable: false, // 👈 This enables animations on all devices including mobile
    });
  }, []);

  return (
    <div className="services-section">
      <div className="harshlahoty">
        <p className="sub-highlight">
          Professionals focused on helping your brand <br />
          <span className="highlight-right">grow and move forward.</span>
        </p>
        <div className="line-after"></div>
      </div>

      <div className="services-intro" data-aos="fade-up">
        <div className="intro-left">
          <img src={serviceImg} alt="Team Image" className="intro-image" />
          <h1 className="main-subheading">
            <span className="highlight" data-aos="fade-up">
              For Your
            </span>{" "}
            Business.
          </h1>
        </div>

        <div className="intro-right">
          <h1 className="main-heading">
            <span className="highlightsssss">Unique</span> Ideas
          </h1>
          <Link
            to="/allservices"
            className="team-read-moress"
            data-aos="fade-up"
            onClick={() => window.scrollTo(0, 0)}
          >
            <span className="read-more-textss">WHAT WE DO</span>
            <span className="arrow-circless">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="arrow-iconss"
              >
                <path
                  d="M14 5.34c-.26 0-.52.1-.71.29l-.09.09c-.39.39-.39 1.03 0 1.42L17.07 11H4c-.55 0-1 .45-1 1s.45 1 1 1h13.07l-3.87 3.86c-.39.39-.39 1.03 0 1.42l.09.09c.39.39 1.03.39 1.42 0l5.66-5.66c.39-.39.39-1.03 0-1.42L14.71 5.63c-.2-.19-.45-.29-.71-.29z"
                  fill="#ff9800"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <Link
            to={service.path}
            key={index}
            onClick={() => window.scrollTo(0, 0)}
            className="service-card-link"
          >
            <div
              className="service-card"
              data-aos={
                ["zoom-in-up", "flip-left", "slide-up", "fade-right"][index % 4]
              }
              data-aos-offset="100"
              data-aos-delay={index * 100}
            >
              <h2 className="service-title">{service.title}</h2>
              <div className="card-hover-details">
                <p>{service.description}</p>
              </div>
              <span className="arrow-circlessssss">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="arrow-iconssssss"
                >
                  <path
                    d="M14 5.34c-.26 0-.52.1-.71.29l-.09.09c-.39.39-.39 1.03 0 1.42L17.07 11H4c-.55 0-1 .45-1 1s.45 1 1 1h13.07l-3.87 3.86c-.39.39-.39 1.03 0 1.42l.09.09c.39.39 1.03.39 1.42 0l5.66-5.66c.39-.39.39-1.03 0-1.42L14.71 5.63c-.2-.19-.45-.29-.71-.29z"
                    fill="#000"
                  />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
