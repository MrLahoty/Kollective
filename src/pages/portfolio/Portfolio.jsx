import "./portfolio.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer.jsx";

const Portfolio = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  // Portfolio data moved here directly
  const portfolio = [
    {
      id: 1,
      title: "Corporate Events",
      description:
        "End-to-end corporate event planning, including conferences, product launches, and team-building experiences.",
      img: "https://woyago.com/wp-content/uploads/2021/11/corporate-event.webp",
      link: "/portfolio/CorporateEvents",
    },
    {
      id: 2,
      title: "Large Format Events",
      description:
        "Massive stage setups, crowd engagement, and technical coordination for grand experiences.",
      img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "/portfolio/LargeFormateEvent",
    },
    {
      id: 3,
      title: "MICE",
      description:
        "Specialized services for Meetings, Incentives, Conferences, and Exhibitions with detailed planning.",
      img: "https://pelatihan-bisnis.com/wp-content/uploads/2022/03/Meeting-Incentive-Convention-Exhibition.jpg",
      link: "/portfolio/Mice",
    },
    {
      id: 4,
      title: "Brand Communication & Advertising",
      description:
        "Engaging brand activation campaigns and multimedia promotional strategies.",
      img: "https://thestrategystory.com/wp-content/uploads/2021/04/Chanel-the-chanel-iconic-Spring-21-handbags-ad-The-Impression-002-1024x668@2x.jpeg",
      link: "/portfolio/Brand",
    },
    {
      id: 5,
      title: "Lifestyle Events",
      description:
        "Luxury and style-driven events including fashion shows, art expos, and exclusive parties.",
      img: "https://lifestyle.events/wp-content/uploads/homepage.slide_.TRI_.color_.jpg",
      link: "/portfolio/Lifestyle",
    },
  ];

  const chunkedPortfolio = [];
  for (let i = 0; i < portfolio.length; i += 2) {
    chunkedPortfolio.push(portfolio.slice(i, i + 2));
  }

  return (
    <section>
      {/* Hero Section */}
      <div className="portfolio-hero">
        <p className="breadcrumb">
          <Link to="/" className="breadcrumb-link">
            HOMEPAGE
          </Link>{" "}
          / PORTFOLIO
        </p>
        <h1 className="hero-titles">
          Designing a <br />
          <span className="highlight">Better</span> World Today
        </h1>
        <a href="#our-works" className="our-works-link">
          OUR WORKS <span className="down-arrow">↓</span>
        </a>
      </div>

      {/* Portfolio Grid */}
      <div className="portfolio-container" id="our-works">
        {chunkedPortfolio.map((pair, rowIndex) => (
          <div className="portfolio-row" key={rowIndex}>
            {pair.map(({ id, img, title, link }, i) => {
              const isLeft = i === 0;
              const isEvenRow = rowIndex % 2 === 0;
              const sizeClass =
                (isEvenRow && isLeft) || (!isEvenRow && !isLeft)
                  ? "small"
                  : "big";

              return (
                <div
                  className={`portfolio-column ${sizeClass}`}
                  key={id}
                  data-aos="pop-up"
                >
                  <a href={link}>
                    <img src={img} alt={title} className="portfolio-img" />
                  </a>
                  <div className="portfolio-text">
                    <p className="portfolio-meta">Branding · May 24 2023</p>
                    <h3>{title}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="portfolio-cta">
        <div className="cta-content">
          <p className="cta-subtext">
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

export default Portfolio;
