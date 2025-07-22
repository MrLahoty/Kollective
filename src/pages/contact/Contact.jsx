import { useState } from "react";
import {
  RiBook2Line,
  RiMailLine,
  RiMap2Line,
  RiSendPlaneLine,
  RiUser3Line,
} from "react-icons/ri";
import "./contact.css";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");

  const handleChange = (e) => {
    setFormData({...formData,[e.target.name] : e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if(!formData.name || !formData.email || !formData.subject || !formData.message) {
      setMessageColor('color-red');
      setFeedbackMessage('Write all the input fields');

      setTimeout(() => setFeedbackMessage(''), 5000);
      return;
    }
    emailjs
    .send('service_jrdg6wg', 'template_cwxxh1f', formData,
     'A7n_3BvpFaaUKmezn'
    )
    .then(
      () => {
      setMessageColor('color-first');
      setFeedbackMessage('Message Sent ✔️');

      setTimeout(() => setFeedbackMessage(''), 5000);

      setFormData({name: '', email: '', subject: '', message: ''})
      },
      (error) => {
        alert('OOps! SOMETHING WENT WRONG ....', error);
      },
    );
  }

  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,
    mirror: true,
  });
  // Refresh AOS when the component updates (just in case)
  AOS.refresh();
}, []);

  return (
    <section className="contact section">
      <h2 className="section-title">
        Contact <span>Me</span>
      </h2>

      <div className="contact-container container grid">
        <div className="contact-content grid">
          <div className="contact-card">
            <span className="contact-icon">
              <RiMap2Line />
            </span>
            <div>
              <h3 className="contact-title">Location</h3>
              <p className="contact-data">F2, 5th Floor,Parmeshwari Building, Chatribari,Guwahati- 781008,Assam</p>
            </div>
          </div>

          <div className="contact-card">
            <span className="contact-icon">
              <RiMailLine />
            </span>
            <div>
              <h3 className="contact-title">Email</h3>
              <p className="contact-data">hi@kollectivexperiential.in</p>
            </div>
          </div>

          <div className="contact-card" data-aos="fade-up">
            <span className="contact-icon">
              <RiBook2Line />
            </span>
            <div>
              <h3 className="contact-title">Phone</h3>
              <p className="contact-data">+91 8822438855 | 8135987175</p>
            </div>
          </div>
        </div>

        <form action="" className="contact-form grid" data-aos="fade-left" onSubmit={sendEmail}>
          <div className="contact-form-group grid">
            <div className="contact-form-div">
              <label htmlFor="name" className="contact-form-label">
                Your full Name <b>*</b>
              </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={formData.name}
                id="name"
                className="contact-form-input"
              />
            </div>

            <div className="contact-form-div">
              <label htmlFor="email" className="contact-form-label">
                Your Email Address <b>*</b>
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                id="email"
                className="contact-form-input"
              />
            </div>
          </div>

          <div className="contact-form-div">
            <label htmlFor="subject" className="contact-form-label">
              Your Subject <b>*</b>
            </label>
            <input
              type="text"
              name="subject"
              onChange={handleChange}
              value={formData.subject}
              id="subject"
              className="contact-form-input"
            />
          </div>

          <div className="contact-form-div">
            <label htmlFor="message" className="contact-form-label">
              Your Message <b>*</b>
            </label>
            <textarea
              name="message"
              id="message"
              onChange={handleChange}
              value={formData.message}
              className="contact-form-input contact-form-area"
            ></textarea>
          </div>

          <div className="contact-button">
            <button type="submit" className="button">
              Send Message
              <span className="button-i">
                <RiSendPlaneLine />
              </span>
            </button>
          </div>

          {feedbackMessage &&(
            <p className= {`contact-message ${messageColor}`}>
              {feedbackMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;