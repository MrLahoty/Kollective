// Footer.jsx
import React from 'react';
import './Footer.css'; // Link to external CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Logo & Description */}
        <div className="footer-section">
          <h2 className="footer-logo">YourBrand</h2>
          <p className="footer-description">
            Bringing innovation and quality to your fingertips. Let's build something great together.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="footer-section">
          <h3 className="footer-title">Contact</h3>
          <ul className="footer-contact">
            <li>Email: info@yourbrand.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Location: 123 Main Street, City</li>
          </ul>
        </div>

        {/* Column 4: Social */}
        <div className="footer-section">
          <h3 className="footer-title">Follow Us</h3>
          <div className="footer-social">
            <a href="#" aria-label="Facebook">🌐</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="LinkedIn">💼</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

// import "./footer.css";
// import {
//   FaInstagram,
//   FaSnapchat,
//   FaWhatsapp,
//   FaYoutube,
//   FaLinkedin,
// } from "react-icons/fa";
// import "@fortawesome/fontawesome-free/css/all.css";
// import logo from "../../assets/KOLLECTIVE EVENTS2-0111.png";
// import { NavLink } from "react-router";
// import { useState } from "react";

// const Footer = () => {
//   const [instagramColor, setInstagramColor] = useState("#2c2c2c");
//   const [whatsappColor, setWhatsappColor] = useState("#2c2c2c");
//   const [instagramTextColor, setInstagramTextColor] = useState("#2c2c2c");
//   const [whatsappTextColor, setWhatsappTextColor] = useState("#2c2c2c");
//   const [youtubeColor, setYoutubeColor] = useState("#2c2c2c");
//   const [youtubeTextColor, setYoutubeTextColor] = useState("#2c2c2c");
//   const [snapchatColor, setSnapchatColor] = useState("#2c2c2c");
//   const [snapchatTextColor, setSnapchatTextColor] = useState("#2c2c2c");
//   const [linkedinColor, setLinkedinColor] = useState("#2c2c2c");
//   const [linkedinTextColor, setLinkedinTextColor] = useState("#2c2c2c");

//   const phoneNumber = "+91 8135987175 | 8822438855";
//   const emailAddress = "hi@kollectivexperiential.in";
//   const addressUrl = "https://maps.app.goo.gl/N1w2QBdUnAmoLhen7";

//   return (
//     <footer className="footer">
//       <div className="footer-left">
//         <NavLink to="/">
//           <img src={logo} alt="Kollective Events Logo" className="logo-imgs" />
//         </NavLink>
//         <h2>Contact Information</h2>
//         <a href={`tel:${phoneNumber}`} className="leftFooter-link ">
//           <p>
//             <i className="fas fa-phone"></i> {phoneNumber}
//           </p>
//         </a>
//         <a href={`mailto:${emailAddress}`} className="leftFooter-link ">
//           <p>
//             <i className="fas fa-envelope"></i> {emailAddress}
//           </p>
//         </a>
//         <a
//           href="https://kollectivexperiential.in"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="leftFooter-link"
//         >
//           <p>
//             <i className="fas fa-globe"></i> www.kollectivexperiential.in
//           </p>
//         </a>
//         <a
//           href={addressUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="leftFooter-link "
//         >
//           <p>
//             <i className="fas fa-map-marker-alt"></i>F2, Level 5, Parmeshwari
//             Building, Chatribari Road, Nr. Himatsingka House, Guwahati - 781001,
//             Assam
//           </p>
//         </a>
//       </div>

//       <div className="midFooter">
//         <div className="footer-center">
//           <a href="/">
//             <i className="fas fa-home"></i> Home
//           </a>
//           <a href="/portfolio">
//             <i className="fas fa-briefcase"></i> Portfolio
//           </a>
//           <a href="/team">
//             <i className="fas fa-users"></i> Our Team
//           </a>
//           <a href="/Terms&Condition">
//             <i className="fas fa-file-contract"></i> Terms & Conditions
//           </a>
//           <a href="/about">
//             <i className="fas fa-info-circle"></i> About Us
//           </a>
//           <a href="/contact">
//             <i className="fas fa-envelope"></i> Contact Us
//           </a>
//           <a href="/services">
//             <i className="fas fa-concierge-bell"></i> Our Services
//           </a>

//           {/* <div className="copyrights">
//           <h6> &copy; {new Date().getFullYear()} Kollective Xperience. All rights reserved.</h6>
//        </div> */}
//         </div>
//       </div>

//       <div className="midFooter">
//         <div className="footer-center">
//           <a href="/">
//             <i className="fas fa-home"></i> Home
//           </a>
//           <a href="/portfolio">
//             <i className="fas fa-briefcase"></i> Portfolio
//           </a>
//           <a href="/team">
//             <i className="fas fa-users"></i> Our Team
//           </a>
//           <a href="/Terms&Condition">
//             <i className="fas fa-file-contract"></i> Terms & Conditions
//           </a>
//           <a href="/about">
//             <i className="fas fa-info-circle"></i> About Us
//           </a>
//           <a href="/contact">
//             <i className="fas fa-envelope"></i> Contact Us
//           </a>
//           <a href="/services">
//             <i className="fas fa-concierge-bell"></i> Our Services
//           </a>
//         </div>
//       </div>

//       <div className="footer-right">
//         <h5>Follow Us</h5>
//         <a
//           href="https://instagram.com/kollectivexperiential/"
//           onMouseEnter={() => {
//             setInstagramColor("#eb4034");
//             setInstagramTextColor("#eb4034");
//           }}
//           onMouseLeave={() => {
//             setInstagramColor("#2c2c2c");
//             setInstagramTextColor("#2c2c2c");
//           }}
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{ color: instagramTextColor }}
//         >
//           <FaInstagram style={{ color: instagramColor, marginRight: "3px" }} />
//           Instagram
//         </a>
//         <a
//           href="https://chat.whatsapp.com/Gfdrdrsdgvvhgyttd"
//           onMouseEnter={() => {
//             setWhatsappColor("green");
//             setWhatsappTextColor("green");
//           }}
//           onMouseLeave={() => {
//             setWhatsappColor("#2c2c2c");
//             setWhatsappTextColor("#2c2c2c");
//           }}
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{ color: whatsappTextColor }}
//         >
//           <FaWhatsapp style={{ color: whatsappColor, marginLeft: "2px" }} />
//           WhatsApp
//         </a>
//         <a
//           href="https://www.linkedin.com/company/kollectiveXperiential"
//           onMouseEnter={() => {
//             setLinkedinColor("#0077b5");
//             setLinkedinTextColor("#0077b5");
//           }}
//           onMouseLeave={() => {
//             setLinkedinColor("#2c2c2c");
//             setLinkedinTextColor("#2c2c2c");
//           }}
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{ color: linkedinTextColor }}
//         >
//           <FaLinkedin style={{ color: linkedinColor, marginRight: "7px" }} />
//           LinkedIn
//         </a>
//         <a
//           href="https://www.youtube.com/@Kollective_xperience"
//           onMouseEnter={() => {
//             setYoutubeColor("#FF0000");
//             setYoutubeTextColor("#FF0000");
//           }}
//           onMouseLeave={() => {
//             setYoutubeColor("#2c2c2c");
//             setYoutubeTextColor("#2c2c2c");
//           }}
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{ color: youtubeTextColor }}
//         >
//           <FaYoutube style={{ color: youtubeColor, marginRight: "7px" }} />
//           YouTube
//         </a>
//         <a
//           href="https://www.snapchat.com/add/fabsurat?share_id=tFRAN8MIVSw&locale=en-I"
//           onMouseEnter={() => {
//             setSnapchatColor("rgb(255, 255, 0)"); // Lighter yellow
//             setSnapchatTextColor("rgba(10, 10, 5, 0.8)"); // Lighter yellow
//           }}
//           onMouseLeave={() => {
//             setSnapchatColor("#2c2c2c");
//             setSnapchatTextColor("#2c2c2c");
//           }}
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{ color: snapchatTextColor }}
//         >
//           <FaSnapchat style={{ color: snapchatColor, marginRight: "7px" }} />
//           Snapchat
//         </a>
//       </div>

//       <div className="back-to-top">↑</div>
//     </footer>
//   );
// };

// export default Footer;
