import { useEffect, useState } from "react";
import { RiSendPlaneLine } from "react-icons/ri";
import "./home.css";
// import image from "../../assets/3.jpg";
import About from "../about/About";
import Team from "../team/Team";
import Footer from "../../components/footer/Footer";
import Gallery from "../gallery/Gallery";
import Services from "../services/Services";
import Clientele from "../clientele/Clientele";
import Partners from "../partners/Partners";
import Testimonial from "../testimonial/Testimonial";
import { useNavigate } from "react-router";

const Home = () => {
  const [introStep, setIntroStep] = useState(0);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

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

            <div className="team-buttons-wrapper" data-aos="fade-up">
              <button className="team-read-mores" onClick={() => navigate("/services")}>
                <span className="read-more-texts">WHAT WE DO</span>
                <span className="arrow-circles">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="arrow-icons"
                  >
                    <path
                      d="M14 5.34c-.26 0-.52.1-.71.29l-.09.09c-.39.39-.39 1.03 0 1.42L17.07 11H4c-.55 0-1 .45-1 1s.45 1 1 1h13.07l-3.87 3.86c-.39.39-.39 1.03 0 1.42l.09.09c.39.39 1.03.39 1.42 0l5.66-5.66c.39-.39.39-1.03 0-1.42L14.71 5.63c-.2-.19-.45-.29-.71-.29z"
                      fill="#ff9800"
                    />
                  </svg>
                </span>
              </button>
              <button className="team-read-mores" onClick={() => navigate("/about")}>
                <span className="read-more-texts">MORE ABOUT US</span>
                <span className="arrow-circles">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="arrow-icons"
                  >
                    <path
                      d="M14 5.34c-.26 0-.52.1-.71.29l-.09.09c-.39.39-.39 1.03 0 1.42L17.07 11H4c-.55 0-1 .45-1 1s.45 1 1 1h13.07l-3.87 3.86c-.39.39-.39 1.03 0 1.42l.09.09c.39.39 1.03.39 1.42 0l5.66-5.66c.39-.39.39-1.03 0-1.42L14.71 5.63c-.2-.19-.45-.29-.71-.29z"
                      fill="#ff9800"
                    />
                  </svg>
                </span>
              </button>
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
          <Services />
          <Team />
          <Testimonial />
          <Gallery />
          <Clientele />
          <Partners />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
