import logo from "../../assets/paarambi.png";
import lo from "../../assets/arihant.avif";
import los from "../../assets/expression360.png";
import logos from "../../assets/mazeimages.png";
import loss from "../../assets/efactor.png";
import logoses from "../../assets/tridents.png";
import "./partners.css";

const partnerLogos = [logos, lo, los, loss, logoses, logo];

const Partners = () => {
  return (
    <div className="partners-marquee-section">
      <h2><span className="dot"></span>Our Partners</h2>

      <div className="marquee">
        <div className="track">
          {partnerLogos.concat(partnerLogos).map((img, i) => (
            <div className="logo-box" key={i}>
              <img src={img} alt={`Partner ${i}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;