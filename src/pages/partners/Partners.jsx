import "./partners.css";
import logo from "../../assets/paarambi.png";
import lo from "../../assets/arihant.png";
import los from "../../assets/expression360.png";
import logos from "../../assets/mazeimages.png";
import loss from "../../assets/efactor.png";
import logoses from "../../assets/tridents.png";

const partnerLogos = [
  logos, lo, los, loss, logoses, logo
];

const Partners = () => {
  return (
    <div className="partners-marquee-section">
      <h2>
        <span className="dot"></span>OUR PARTNERS
      </h2>

      <div className="marquee">
        <div className="track">
          {[...partnerLogos, ...partnerLogos].map((img, i) => (
            <div className="logo-box" key={i}>
              <img src={img} alt={`Partner ${i}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
