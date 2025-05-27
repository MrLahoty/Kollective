import { useState, useEffect } from "react";
import logo from "../../assets/KOLLECTIVE EVENTS2-0111.png";
import { NavLink } from "react-router";
import "./footer.css";
import {
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaYoutube,
  FaSnapchat,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const Footer = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();
  const emailAddress = "hi@kollectivexperiential.in";
  const phoneNumber = "+91 8135987175 | 8822438855";

  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.body.offsetHeight;
      setShowConfetti(bottom);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="footer">
      {showConfetti && (
        <Confetti width={width} height={height} numberOfPieces={100} />
      )}

      <div className="footer-container">
        {/* Logo & Slogan */}
        <div className="footer-section">
          <NavLink to="/">
            <img
              src={logo}
              alt="Kollective Events Logo"
              className="logo-imgs"
            />
          </NavLink>
          <p className="footer-description">
            Innovation meets experience. Let's build something extraordinary
            together.
          </p>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3 className="footer-title">Contact</h3>
          <ul className="footer-contact">
            <li>
               <a href={`tel:${phoneNumber}`} className="leftFooter-link ">
              <FaPhone /> +91 8135987175 | 8822438855
              </a>
            </li>
            <li>
              <a href={`mailto:${emailAddress}`} className="leftFooter-link ">
                <FaEnvelope /> hi@kollectivexperiential.in
              </a>
            </li>
            <li>
              <a
                href="https://maps.app.goo.gl/N1w2QBdUnAmoLhen7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapMarkerAlt /> F2, Level 5, Parmeshwari Building, Chatribari
                Road, Nr. Himatsingka House, Guwahati - 781001, Assam
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3 className="footer-titlessss">Follow Us</h3>
          <div className="footer-social">
            <a
              href="https://instagram.com/kollectivexperiential/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-glow"
            >
              <FaInstagram /> Instagram
            </a>
            <a
              href="https://chat.whatsapp.com/Gfdrdrsdgvvhgyttd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-glow"
            >
              <FaWhatsapp /> WhatsApp
            </a>
            <a
              href="https://www.linkedin.com/company/kollectiveXperiential"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-glow"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://www.youtube.com/@Kollective_xperience"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-glow"
            >
              <FaYoutube /> YouTube
            </a>
            <a
              href="https://www.snapchat.com/add/kollective"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-glow"
            >
              <FaSnapchat /> Snapchat
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Kollective. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
