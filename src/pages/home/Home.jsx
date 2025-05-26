import { useEffect, useState } from "react";
import { RiSendPlaneLine } from "react-icons/ri";
import "./home.css";
// import image from "../../assets/3.jpg";
import About from "../about/About";
import Portfolio from "../portfolio/Portfolio";
import Team from "../team/Team.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Gallery from "../gallery/Gallery.jsx";
import Services from "../services/Services.jsx";
import Partners from "../partners/Partners.jsx";

const Home = () => {
  const [introStep, setIntroStep] = useState(0);
  const [visible, setVisible] = useState(false);

  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight =
        document.querySelector(".hero-section")?.offsetHeight || 0;
      setShowTopButton(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const timers = [
      setTimeout(() => {
        setIntroStep(4); // Directly show Kollective.com
        setVisible(false); // Reset visibility
        setTimeout(() => setVisible(true), 50);
      }, 100), // Slight delay for smooth entrance
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
            <span className={`word ${visible ? "visible" : ""}`}>
              Kollective.com
            </span>
          </h1>
        </div>
      ) : (
        <section className="hero-section">
          {/* <div
            className="background-image"
            style={{ backgroundImage: `url(${image})` }}
          ></div> */}

          <div className="hero-content fade-in">
            <h1 className="hero-title">
              <span className="bold">Designing</span>{" "}
              <span className="thin">a Better</span>
              <br />
              <span className="bold">World</span>{" "}
              <span className="thin">Today</span>
            </h1>

            <p className="hero-description">
              Welcome to our world of endless imagination and boundless
              creativity. Together, let's embark on a remarkable journey where
              dreams become tangible realities.
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

          <div className="scroll-down-static" onClick={handleScroll}>
            <svg className="scroll-circle-text" viewBox="0 0 100 100">
              <defs>
                <path
                  id="circlePath"
                  d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                />
              </defs>
              <text
                fill="white"
                fontSize="9"
                letterSpacing="3.6"
                opacity={0.67}
              >
                <textPath href="#circlePath" startOffset="0%">
                  SCROLL DOWN - SCROLL DOWN -
                </textPath>
              </text>
            </svg>
            <div className="scroll-center-orange">
              <div className="scroll-inner-black">
                <span className="scroll-arrow">&#8595;</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Only render About, Portfolio, and Contact after the animation is done */}
      {introStep >= 5 && (
        <>
          <div className="vertical-label">HOMEPAGE</div>

          <div
            className={`back-to-top ${showTopButton ? "show" : ""}`}
            onClick={scrollToTop}
          >
            <div className="circle">
              <span className="arrow">↑</span>
            </div>
            <div className="label">BACK TO TOP</div>
          </div>

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
