import "./clientele.css";
import l from "../../assets/asdm-uniform-assam-skill-development-mission.jpg";
import football from "../../assets/Assam_Football_Association.png";
import awesomeassam from "../../assets/Awesome_Assam_Logo.png";
import balipara from "../../assets/balipara-foundation-logo.jpg";
import cricket from "../../assets/cricketassociation.png";
import GauhatiTown from "../../assets/Gauhatitownclub.jpg";
import haryanatourism from "../../assets/haryanatourism.png";
import IndianArmy from "../../assets/Indian_Army_Insignia_circular.png";
import IncomeTax from "../../assets/Logo_of_Income_Tax_Department_India.png";
import MarwariYuvaManch from "../../assets/Marwariyuvamanch.jpg";
import RoadTransport from "../../assets/Ministry_of_Road_Transport_and_Highways.svg";
import ScienceandTechnology from "../../assets/Ministry_of_Science_and_Technology_India.svg";
import MinistryofTourism from "../../assets/Ministry_of_Tourism_India.svg.png";
import MinistryofYouth from "../../assets/Ministry_of_Youth_Affairs_and_Sports.svg";
import nectar from "../../assets/nectar-ac6e3b7d.webp";
import NEEPCO from "../../assets/NEEPCO.jpg";
import Neramac from "../../assets/Neramac.png";
import Siam from "../../assets/SIAM.jpg";
import IWT from "../../assets/IWT.png";
import Theenergy from "../../assets/The energy and resource.png";
import ios from "../../assets/ios.webp";
import Pernodricard from "../../assets/Pernod_Ricard_logo_2019.svg.png";
import Toyota from "../../assets/toyota-logo-1989-download.png";
import royalenfield from "../../assets/royal-enfield-logo-royal-enfield-icon-free-free-vector.jpg";
import bajaj from "../../assets/Bajaj-Logo.png";
import gettrade from "../../assets/getradecomlogo.png";
import diageo from "../../assets/diageo.jpg";
import macaw from "../../assets/macaw.png";
import shyamsteel from "../../assets/shyamsteel.webp";
import tatapower from "../../assets/Tata_Power_logo.svg.png";
import Mayfair from "../../assets/MayFair_Logo_zzneps.avif";
import rajasthanroyals from "../../assets/rajasthanroyals.png";
import greatwhite from "../../assets/greatwhite.png";
import satyamgroup from "../../assets/satyamgroup.jpg";
import marij from "../../assets/marij.jpg";

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
  RoadTransport,
  ScienceandTechnology,
  MinistryofTourism,
  MinistryofYouth,
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