import "./about.css";
import AboutImg from "../../assets/homes1.png";
import { useInView } from "react-intersection-observer";
import logosssss from "../../assets/homes1.png";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <main ref={ref} className="section container about-section">
      <div className={`about__text ${inView ? "animate-slideIn" : ""}`}>
        <h2 className="about__heading">
          WELCOME <span>TO</span> KOLLECTIVE
        </h2>
        <p className="about__paragraph">
          Kollective Events & Xperiences, is a premier experiential marketing
          company creating immersive, interactive, and memorable brand
          experiences that engage audiences and drive meaningful connections.
          From pop-up events and product activations to large-scale experiential
          campaigns, we craft unique experiences that resonate with consumers
          and amplify brand loyalty.
        </p>
        <p className="about__paragraph">
          Kollective Events & Xperiences, is a premier experiential marketing
          company creating immersive, interactive, and memorable brand
          experiences that engage audiences and drive meaningful connections.
          From pop-up events and product activations to large-scale experiential
          campaigns, we craft unique experiences that resonate with consumers
          and amplify brand loyalty.
        </p>

        <div className="about__quote">
          <img
            src={logosssss}
            alt="profile"
            className="about__quote-img"
          />
          <div>
            <strong>Passionately Creating</strong> Design Wonders:
            <br />
            <span>Unleashing Boundless Creativity</span>
          </div>
        </div>
      </div>

      <div
        className={`about__image-container ${inView ? "animate-dropIn" : ""}`}
      >
        <img src={AboutImg} alt="Studio" className="about__img" />
      </div>
    </main>
  );
};

export default About;
