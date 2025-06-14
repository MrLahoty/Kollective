import "./portfolio.css";
import { portfolio } from "../../Data";
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
