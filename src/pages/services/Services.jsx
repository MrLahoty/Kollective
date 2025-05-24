import "./services.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "CORPORATE EVENTS",
    icon: "📅",
    color: "black",
    textColor: "orange",
  },
  {
    title: "LARGE FORMAT EVENTS",
    icon: "🪧",
    color: "black",
    textColor: "orange",
  },
  {
    title: "MICE",
    icon: "👔",
    color: "black",
    textColor: "orange",
  },
  {
    title: "BRAND COMMUNICATION & ADVERTISING",
    icon: "📢",
    color: "black",
    textColor: "orange",
  },
  {
    title: "LIFESTYLE EVENTS",
    icon: "🕺",
    color: "black",
    textColor: "orange",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // <-- Important: allow animation every time you scroll
      mirror: true,
    });
  }, []);

  return (
    <div className="services-container">
      <h1 className="services-title">OUR SERVICES</h1>
      <div className="bento-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="bento-box"
            data-aos={["zoom-in-up", "flip-left", "slide-up", "fade-right", "flip-down"][index % 5]}
            data-aos-offset="100"
            data-aos-delay={index * 100}
            style={{
              backgroundColor: service.color === "orange" ? "#fdb913" : "#000",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            <div className="icon">{service.icon}</div>
            <h2
              className="service-name"
              style={{
                color: service.textColor === "orange" ? "#fdb913" : "#000",
              }}
            >
              {service.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
