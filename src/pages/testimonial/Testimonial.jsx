import { useState, useEffect } from "react";
import "./testimonial.css";
import AOS from "aos";
import "aos/dist/aos.css";
import user1 from "../../assets/12.jpg";
import user2 from "../../assets/123.jpg";
import user3 from "../../assets/1234.jpg";
import user4 from "../../assets/12345.jpg";
import user5 from "../../assets/12.jpg";
import user6 from "../../assets/123.jpg";
import user7 from "../../assets/1234.jpg";

const testimonials = [
  {
    name: "Sarah Newman",
    company: "Envato Market",
    image: user1,
    text: "This creative agency stands out with their exceptional talent and expertise.Their ability to think outside the box and bring unique ideas to life is truly impressive. With meticulous attention to detail, they consistently deliver visually stunning and impactful work.",
  },
  {
    name: "Emily Carter",
    company: "Tech Solutions",
    image: user2,
    text: "I had the pleasure of working with this creative agency, and I must say, they truly impressed me. They consistently think outside the box, resulting in impressive and impactful work. I highly recommend this agency for their consistent delivery of exceptional creative solutions.",
  },
  {
    name: "James Taylor",
    company: "VisionCorp",
    image: user3,
    text: "Creative, professional, and timely. I highly recommend them for anyone seeking standout digital experiences.With meticulous attention to detail, they consistently deliver visually stunning and impactful work.",
  },
  {
    name: "Lisa Moore",
    company: "Bright Agency",
    image: user4,
    text: "Great collaboration and brilliant results. They made our brand look and feel premium. With meticulous attention to detail, they consistently deliver visually stunning and impactful work.",
  },
  {
    name: "Michael Brooks",
    company: "StartUp Inc.",
    image: user5,
    text: "Top-notch work from start to finish. Would love to work again on future projects. With meticulous attention to detail, they consistently deliver visually stunning and impactful work.",
  },
  {
    name: "Alex Turner",
    company: "Design Hub",
    image: user6,
    text: "Clean design, fast development, and amazing support. A truly seamless experience! With meticulous attention to detail, they consistently deliver visually stunning and impactful work.",
  },
  {
    name: "Daniel White",
    company: "Inspire Co.",
    image: user7,
    text: "The team went above and beyond to deliver a visually stunning platform. Loved the outcome! With meticulous attention to detail, they consistently deliver visually stunning and impactful work.",
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState("");

  const handleSetIndex = (newIndex) => {
    if (newIndex === activeIndex) return;
    setAnimationDirection(
      newIndex > activeIndex ? "slide-right" : "slide-left"
    );
    setActiveIndex(newIndex);
  };

  const prev = () => {
    if (activeIndex > 0) {
      setAnimationDirection("slide-left");
      setActiveIndex((prev) => prev - 1);
    }
  };

  const next = () => {
    if (activeIndex < testimonials.length - 1) {
      setAnimationDirection("slide-right");
      setActiveIndex((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const content = document.querySelector(".testimonial-content");
    if (content && animationDirection) {
      content.classList.remove("slide-left", "slide-right");
      void content.offsetWidth; // Trigger reflow
      content.classList.add(animationDirection);
    }
  }, [activeIndex, animationDirection]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="zigzag-testimonial">
      <h2 data-aos="fade-up">
        <span className="bold">Customer</span>{" "}
        <span className="light">Voices:</span>
        <br />
        <strong>
          <span className="bold">Hear What</span>{" "}
          <span className="light">They Say!</span>
        </strong>
      </h2>

      <div className="zigzag-avatars" data-aos="fade-up" data-aos-delay="200">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className={`avatar-wrapper ${
              index === activeIndex ? "active" : ""
            } ${index % 2 === 0 ? "up" : "down"}`}
            onClick={() => handleSetIndex(index)}
          >
            <img
              src={item.image}
              className="testimonial-avatar"
              alt={item.name}
            />
          </div>
        ))}
      </div>

      <div className="testimonial-box" data-aos="fade-up" data-aos-delay="400">
        <button
          className={`nav-arrow left ${activeIndex === 0 ? "disabled" : ""}`}
          onClick={prev}
          disabled={activeIndex === 0}
        >
          ←
        </button>

        <div
          className="testimonial-content"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="quote-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="40"
              height="40"
              style={{
                transform: "translate(0px, 0px)",
                opacity: 1,
                fill: "orange",
              }}
            >
              <path
                d="M 13.5 10 A 8.5 8.5 0 0 0 13.5 27 A 8.5 8.5 0 0 0 18.291016 25.519531 C 17.422273 29.222843 15.877848 31.803343 14.357422 33.589844 C 12.068414 36.279429 9.9433594 37.107422 9.9433594 37.107422 A 1.50015 1.50015 0 1 0 11.056641 39.892578 C 11.056641 39.892578 13.931586 38.720571 16.642578 35.535156 C 19.35357 32.349741 22 27.072581 22 19 A 1.50015 1.50015 0 0 0 21.984375 18.78125 A 8.5 8.5 0 0 0 13.5 10 z M 34.5 10 A 8.5 8.5 0 0 0 34.5 27 A 8.5 8.5 0 0 0 39.291016 25.519531 C 38.422273 29.222843 36.877848 31.803343 35.357422 33.589844 C 33.068414 36.279429 30.943359 37.107422 30.943359 37.107422 A 1.50015 1.50015 0 1 0 32.056641 39.892578 C 32.056641 39.892578 34.931586 38.720571 37.642578 35.535156 C 40.35357 32.349741 43 27.072581 43 19 A 1.50015 1.50015 0 0 0 42.984375 18.78125 A 8.5 8.5 0 0 0 34.5 10 z"
                fill="orange"
              ></path>
            </svg>
          </div>
          <h4 className="testimonial-name">{testimonials[activeIndex].name}</h4>
          <p className="testimonial-company">
            {testimonials[activeIndex].company}
          </p>
          <br />
          <br />
          <p className="testimonial-text">{testimonials[activeIndex].text}</p>
        </div>

        <button
          className={`nav-arrow right ${
            activeIndex === testimonials.length - 1 ? "disabled" : ""
          }`}
          onClick={next}
          disabled={activeIndex === testimonials.length - 1}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
