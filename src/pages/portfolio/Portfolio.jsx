import './portfolio.css';
import { portfolio } from "../../Data";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Portfolio = () => {
 useEffect(() => {
  AOS.init({
    duration: 700,
    once: false, // 🔁 allow animations to happen on every scroll
    mirror: true, // (optional) animates out when scrolling back up
  });

  // Refresh AOS when the component updates (just in case)
  AOS.refresh();
}, []);

  return (
    <section className="portfolio-grid-bg">
      {portfolio.map(({ id, img, title, description, link }, index) => (
        <div
          className={`portfolio-row ${index % 2 !== 0 ? 'reverse' : ''}`}
          key={id}
          data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
          data-aos-delay={`${index * 400}`}
          data-aos-offset="150"
        >
          <div className="portfolio-preview">
            <a href={link} target="_blank" rel="noreferrer">
              <div className="preview-hover">
                <img src={img} alt={title} />
                <div className="preview-overlay">View site</div>
              </div>
            </a>
          </div>

          <div className="separator-line"></div>

          <div className="portfolio-text">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
