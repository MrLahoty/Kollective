import "./clientele.css";
import l from "../../assets/Partner/asdm.png";
import football from "../../assets/Partner/afa.png";
import awesomeassam from "../../assets/Partner/awesome assam.png";
import balipara from "../../assets/Partner/balipara.png";
import cricket from "../../assets/Partner/aca.png";
import GauhatiTown from "../../assets/Partner/gtc.png";
import haryanatourism from "../../assets/Partner/haryana tourism.png";
import IndianArmy from "../../assets/Partner/army.png";
import IncomeTax from "../../assets/Partner/income tax.png";
import MarwariYuvaManch from "../../assets/Partner/yuva manch.png";
import MinistryofTourism from "../../assets/Partner/ministry of tour.png";
import nectar from "../../assets/Partner/nectar.png";
import NEEPCO from "../../assets/Partner/nepco.png";
import Neramac from "../../assets/Partner/nermac.png";
import Siam from "../../assets/Partner/siam.png";
import IWT from "../../assets/Partner/iwt.png";
import Theenergy from "../../assets/Partner/teri.png";
import ios from "../../assets/Partner/apple.png";
import Pernodricard from "../../assets/Partner/pernod.png";
import Toyota from "../../assets/Partner/toyota.png";
import royalenfield from "../../assets/Partner/royalenfield.png";
import bajaj from "../../assets/Partner/bajaj.png";
import gettrade from "../../assets/Partner/get.png";
import diageo from "../../assets/Partner/diageo.png";
import macaw from "../../assets/Partner/macau.png";
import shyamsteel from "../../assets/Partner/syam steel.png";
import tatapower from "../../assets/Partner/tata.png";
import Mayfair from "../../assets/Partner/mayfair.png";
import rajasthanroyals from "../../assets/Partner/rajasthan royals.png";
import greatwhite from "../../assets/Partner/great white.png";
import satyamgroup from "../../assets/Partner/satyam.png";
import marij from "../../assets/Partner/maru.png";

const clienteleLogos = [
  l,
  football,
  awesomeassam,
  balipara,
  cricket,
  GauhatiTown,
  haryanatourism,
  IndianArmy,
  IncomeTax,
  MarwariYuvaManch,
  MinistryofTourism,
  nectar,
  NEEPCO,
  Neramac,
  Siam,
  IWT,
  Theenergy,
  ios,
  Pernodricard,
  Toyota,
  royalenfield,
  bajaj,
  gettrade,
  diageo,
  macaw,
  shyamsteel,
  tatapower,
  Mayfair,
  rajasthanroyals,
  greatwhite,
  satyamgroup,
  marij,
];

const Clientele = () => {
  return (
    <div className="clientele-marquee-section">
      <h2>
        <span className="dotssss"></span>OUR CLIENTELE
      </h2>

      <div className="marqueeeeee">
        <div className="trackssss">
          {[...clienteleLogos, ...clienteleLogos].map((img, i) => (
            <div className="logo-boxssss" key={i}>
              <img src={img} alt={`Partner ${i}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clientele;