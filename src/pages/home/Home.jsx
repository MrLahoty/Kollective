import { useEffect, useState } from "react";
import { RiSendPlaneLine } from "react-icons/ri";
import "./home.css";
import image from "../../assets/3.jpg";
import scrollGif from "../../assets/scroll-down.gif";
import About from "../about/About";
import Portfolio from "../portfolio/Portfolio";
import Team from "../team/Team.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Gallery from "../gallery/Gallery.jsx";
import Services from "../services/Services.jsx"
import Partners from "../partners/Partners.jsx";

const Home = () => {
  const [introStep, setIntroStep] = useState(0);
  const [visible, setVisible] = useState(false);

useEffect(() => {
  const timers = [
    setTimeout(() => {
      setIntroStep(4);       // Directly show Kollective.com
      setVisible(false);     // Reset visibility
      setTimeout(() => setVisible(true), 50);
    }, 100),                 // Slight delay for smooth entrance
    setTimeout(() => setIntroStep(5), 2100), // Fade out intro
  ];
  return () => timers.forEach(clearTimeout);
}, []);

  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
     {introStep < 5 ? (
  <div className={`intro-overlay ${introStep === 5 ? "fade-out" : ""}`}>
    <h1 className="intro-text">
      <span className={`word ${visible ? "visible" : ""}`}>Kollective.com</span>
    </h1>
        </div>
      ) : (
        <section className="hero-section">
          <div
            className="background-image"
            style={{ backgroundImage: `url(${image})` }}
          ></div>

          <div className="hero-content fade-in">
            <h1 className="hero-title">
              Designing a Better<br />  <span> World</span> Today
            </h1>
            <p className="hero-description">
              Welcome to our world of endless imagination and boundless creativity.
              Together, let's embark on a remarkable journey where dreams become tangible realities.
            </p>

            <div className="hero-buttons">
              <a href="/services" className="button primary">
                What We Do
                <span className="button-i">
                  <RiSendPlaneLine />
                </span>
              </a>
              <a href="/about" className="button secondary">
                More About Us
                <span className="button-i">
                  <RiSendPlaneLine />
                </span>
              </a>
            </div>
          </div>

          <div className="scroll-down" onClick={handleScroll}>
            <img src={scrollGif} alt="Scroll Down" className="scroll-down-img" />
          </div>
        </section>
      )}

      {/* Only render About, Portfolio, and Contact after the animation is done */}
      {introStep >= 5 && (
        <>
          <About />
          <Team />
          <Services />
          <Portfolio />
          <Gallery />
          <Partners />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
