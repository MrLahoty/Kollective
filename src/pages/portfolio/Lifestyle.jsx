import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/footer/Footer";
import "./lifestyle.css";
import { Link } from "react-router-dom";

// Imported lifestyle images
import lifestyle1 from "../../assets/Sandeep _ Binita/Sandeep _ Binita (18th December 2022) - Guwahati, Assam/Sandeep Modi +Binita Modi, Vivanta (47).jpg";
import lifestyle2 from "../../assets/Sandeep _ Binita/Sandeep _ Binita (18th December 2022) - Guwahati, Assam/Sandeep Modi +Binita Modi, Vivanta (32).jpg";
import lifestyle3 from "../../assets/Sandeep _ Binita/Sandeep _ Binita (18th December 2022) - Guwahati, Assam/Sandeep Modi +Binita Modi, Vivanta (5).jpg";
import lifestyle4 from "../../assets/Sandeep _ Binita/Sandeep _ Binita (18th December 2022) - Guwahati, Assam/Sandeep Modi +Binita Modi, Vivanta (8).jpg";
import lifestyle5 from "../../assets/Sandeep _ Binita/Sandeep _ Binita (18th December 2022) - Guwahati, Assam/Sandeep Modi +Binita Modi, Vivanta (98).JPG";
import lifestyle6 from "../../assets/Sandeep _ Binita/Sandeep _ Binita (18th December 2022) - Guwahati, Assam/Sandeep Modi +Binita Modi, Vivanta (89).JPG";
import lifestyle7 from "../../assets/Sandeep _ Binita/Sandeep _ Binita (18th December 2022) - Guwahati, Assam/Sandeep Modi +Binita Modi, Vivanta (119).jpg";
import lifestyle8 from "../../assets/Sandeep _ Binita/Sandeep _ Binita (18th December 2022) - Guwahati, Assam/Sandeep Modi +Binita Modi, Vivanta (111).jpg";
import lifestyle9 from "../../assets/Sandeep _ Binita/Sandeep _ Binita (18th December 2022) - Guwahati, Assam/Sandeep Modi +Binita Modi, Vivanta (93).JPG";
import lifestyle10 from "../../assets/Sandeep _ Binita/Sandeep _ Binita (18th December 2022) - Guwahati, Assam/Sandeep Modi +Binita Modi, Vivanta (103).jpg";
import lifestyle11 from "../../assets/Sandeep _ Binita/Sandeep _ Binita (18th December 2022) - Guwahati, Assam/Sandeep Modi +Binita Modi, Vivanta (21).jpg";
import lifestyle12 from "../../assets/Sandeep _ Binita/Sandeep _ Binita (18th December 2022) - Guwahati, Assam/Sandeep Modi +Binita Modi, Vivanta (54).jpg";
import lifestyle13 from "../../assets/Sandeep _ Binita/Sandeep _ Binita (18th December 2022) - Guwahati, Assam/Sandeep Modi +Binita Modi, Vivanta (53).jpg";
import lifestyle14 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Bhaat - Bride/Bhaat - Bride Side (2).jpg";
import lifestyle15 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Bhaat - Bride/Bhaat - Bride Side (1).jpg";
import lifestyle16 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Bhaat - Bride/Bhaat - Bride Side (4).jpg";
import lifestyle17 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Bhaat - Bride/Bhaat - Bride Side (8).jpg";
import lifestyle18 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Bhaat - Bride/Bhaat - Bride Side (3).jpg";
import lifestyle19 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Bhaat - Groom/Bhaat - Groom Side (1).jpg";
import lifestyle20 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Bhaat - Groom/Bhaat - Groom Side (3).jpg";
import lifestyle21 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Bhaat - Groom/Bhaat - Groom Side (4).jpg";
import lifestyle22 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Bhaat - Groom/Bhaat - Groom Side (6).jpg";
import lifestyle23 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Bhaat - Groom/Bhaat - Groom Side (5).jpg";
import lifestyle24 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Cocktail - Groom/Cocktail - Groom Side (21).jpg";
import lifestyle25 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Cocktail - Groom/Cocktail - Groom Side (2).jpg";
import lifestyle26 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Cocktail - Groom/Cocktail - Groom Side (3).jpg";
import lifestyle27 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Cocktail - Groom/Cocktail - Groom Side (5).jpg";
import lifestyle28 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Cocktail - Groom/Cocktail - Groom Side (13).jpg";
import lifestyle29 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Haldi & Carnival/Haldi & Carnival (9).jpg";
import lifestyle30 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Haldi & Carnival/Haldi & Carnival (34).jpg";
import lifestyle31 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Haldi & Carnival/Haldi & Carnival (49).jpg";
import lifestyle32 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Haldi & Carnival/Haldi & Carnival (31).jpg";
import lifestyle33 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Haldi & Carnival/Haldi & Carnival (21).jpg";
import lifestyle34 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Haldi & Carnival/Haldi & Carnival (10).jpg";
import lifestyle35 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Haldi & Carnival/Haldi & Carnival (9).jpg";
import lifestyle36 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Haldi & Carnival/Haldi & Carnival (13).jpg";
import lifestyle37 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Haldi & Carnival/Haldi & Carnival (8).jpg";
import lifestyle38 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Haldi & Carnival/Haldi & Carnival (7).jpg";
import lifestyle39 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Mehendi - Bride/Mehendi - Bride Side (13).jpg";
import lifestyle40 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Mehendi - Bride/Mehendi - Bride Side (11).jpg";
import lifestyle41 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Mehendi - Bride/Mehendi - Bride Side (8).jpg";
import lifestyle42 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Mehendi - Bride/Mehendi - Bride Side (7).jpg";
import lifestyle43 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Mehendi - Bride/Mehendi - Bride Side (5).jpg";
import lifestyle44 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Pool Party - Bride/Pool Party - Bride Side (6).jpg";
import lifestyle45 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Pool Party - Bride/Pool Party - Bride Side (11).jpg";
import lifestyle46 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Pool Party - Bride/Pool Party - Bride Side (12).jpg";
import lifestyle47 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Pool Party - Bride/Pool Party - Bride Side (13).jpg";
import lifestyle48 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Pool Party - Bride/Pool Party - Bride Side (16).jpg";
import lifestyle49 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Sangeet/Sangeet Night (16).jpg";
import lifestyle50 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Sangeet/Sangeet Night (20).jpg";
import lifestyle51 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Sangeet/Sangeet Night (21).jpg";
import lifestyle52 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Sangeet/Sangeet Night (22).jpg";
import lifestyle53 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Sangeet/Sangeet Night (45).jpg";
import lifestyle54 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Wedding/Wedding (45).jpg";
import lifestyle55 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Wedding/Wedding (15).jpg";
import lifestyle56 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Wedding/Wedding (23).jpg";
import lifestyle57 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Wedding/Wedding (12).jpg";
import lifestyle58 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Wedding/Wedding (24).jpg";
import lifestyle59 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Wedding/Wedding (21).jpg";
import lifestyle60 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Wedding/Wedding (4).jpg";
import lifestyle61 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Wedding/Wedding (5).jpg";
import lifestyle62 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Wedding/Wedding (1).jpg";
import lifestyle63 from "../../assets/Chirag_Surabhi/Chirag + Surabhi/Wedding/Wedding (2).jpg";

const lifestyleEvents = [
  { img: lifestyle1, title: "Sandeep _ Binita", meta: "18th December 2022" },
  { img: lifestyle2 },
  { img: lifestyle3 },
  { img: lifestyle4 },
  { img: lifestyle5 },
  { img: lifestyle6 },
  { img: lifestyle7 },
  { img: lifestyle8 },
  { img: lifestyle9 },
  { img: lifestyle10 },
  { img: lifestyle11 },
  { img: lifestyle12 },
  { img: lifestyle13 },
  { img: lifestyle14, title: "Chirag + Surabhi, Bhaat - Bride Side" },
  { img: lifestyle15 },
  { img: lifestyle16 },
  { img: lifestyle17 },
  { img: lifestyle18 },
  { img: lifestyle19, title: "Bhaat - Groom Side" },
  { img: lifestyle20 },
  { img: lifestyle21 },
  { img: lifestyle22 },
  { img: lifestyle23 },
  { img: lifestyle24, title: "Cocktail - Groom Side" },
  { img: lifestyle25 },
  { img: lifestyle26 },
  { img: lifestyle27 },
  { img: lifestyle28 },
  { img: lifestyle29 },
  { img: lifestyle30, title: "Haldi and Carnival" },
  { img: lifestyle31 },
  { img: lifestyle32 },
  { img: lifestyle33 },
  { img: lifestyle34 },
  { img: lifestyle35 },
  { img: lifestyle36 },
  { img: lifestyle37 },
  { img: lifestyle38 },
  { img: lifestyle39, title: "Mehendi - Bride" },
  { img: lifestyle40 },
  { img: lifestyle41 },
  { img: lifestyle42 },
  { img: lifestyle43 },
  { img: lifestyle44, title: "Pool Party- Bride" },
  { img: lifestyle45 },
  { img: lifestyle46 },
  { img: lifestyle47 },
  { img: lifestyle48 },
  { img: lifestyle49, title: "Sangeet" },
  { img: lifestyle50 },
  { img: lifestyle51 },
  { img: lifestyle52 },
  { img: lifestyle53 },
  { img: lifestyle54, title: "Wedding" },
  { img: lifestyle55 },
  { img: lifestyle56 },
  { img: lifestyle57 },
  { img: lifestyle58 },
  { img: lifestyle59 },
  { img: lifestyle60 },
  { img: lifestyle61 },
  { img: lifestyle62 },
  { img: lifestyle63 },
];

const Lifestyle = () => {
  useEffect(() => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); // scroll to top smoothly
  AOS.init({ duration: 800, once: false });
}, []);

  const renderPatternGroup = (bigIndex, smallStart, smallEnd) => (
    <div className="lifestyle-section-pattern" key={`pattern-${bigIndex}`}>
      <div className="lifestyle-big" data-aos="fade-up">
        <img
          src={lifestyleEvents[bigIndex].img}
          alt={lifestyleEvents[bigIndex].title || "event"}
        />
        {(lifestyleEvents[bigIndex].meta ||
          lifestyleEvents[bigIndex].title ||
          lifestyleEvents[bigIndex].desc) && (
          <div className="lifestyle-overlay">
            {lifestyleEvents[bigIndex].meta && (
              <p className="event-meta">{lifestyleEvents[bigIndex].meta}</p>
            )}
            {lifestyleEvents[bigIndex].title && (
              <h2>{lifestyleEvents[bigIndex].title}</h2>
            )}
            {lifestyleEvents[bigIndex].desc && (
              <p>{lifestyleEvents[bigIndex].desc}</p>
            )}
          </div>
        )}
      </div>

      <div className="lifestyle-small-grid">
        {lifestyleEvents.slice(smallStart, smallEnd + 1).map((ev, idx) => (
          <div
            className="lifestyle-small"
            data-aos="fade-up"
            key={`small-${bigIndex}-${idx}`}
          >
            <img src={ev.img} alt={ev.title || "event"} />
            {(ev.meta || ev.title || ev.desc) && (
              <div className="lifestyle-info">
                {ev.meta && <p className="event-meta">{ev.meta}</p>}
                {ev.title && <h3>{ev.title}</h3>}
                {ev.desc && <p>{ev.desc}</p>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <section className="lifestyle-events">
        <div className="lifestyle-header">
          <p className="lifestyle-breadcrumb">
            <Link to="/" className="breadcrumb-link">
              HOMEPAGE
            </Link>{" "}
            /{" "}
            <Link to="/portfolio" className="breadcrumb-link">
              PORTFOLIO
            </Link>{" "}
            / LIFESTYLE EVENTS
          </p>
          <h1>
            Curated <span>Lifestyle Moments</span>
            <br /> That Inspire the Senses
          </h1>
          <p className="lifestyle-subline">
            Celebrating modern living with immersive, stylish gatherings.
          </p>
        </div>
        {/* Group 1: 1 big (0), 12 small (1–12) */}
        {renderPatternGroup(0, 1, 12)}

        {/* Group 2: 1 big (13), 4 small (14–17) */}
        {renderPatternGroup(13, 14, 17)}

        {/* Group 3: 1 big (18), 4 small (19–22) */}
        {renderPatternGroup(18, 19, 22)}

        {/* Group 4: 1 big (23), 4 small (24–27) */}
        {renderPatternGroup(23, 24, 27)}

        {/* Group 5: 1 big (29), 8 small (30–37) */}
        {renderPatternGroup(29, 30, 37)}

        {/* Group 6: 1 big (38), 5 small (39–43) */}
        {renderPatternGroup(38, 39, 42)}

        {/* Group 7: 1 big (44), 4 small (45–48) */}
        {renderPatternGroup(43, 44, 47)}
        {/* Group 8: 1 big (49), 4 small (50–53) */}
        {renderPatternGroup(48, 49, 52)}
        {/* Group 8: 1 big (54), 4 small (55–63) */}
        {renderPatternGroup(53, 54, 61)}

        {/* CTA Section */}
        <div className="lifestyle-cta">
          <h2>Let’s Curate a Lifestyle Journey</h2>
          <p>
            Sophisticated, soulful, and story-driven experiences await your
            audience.
          </p>
          <a href="/contact" className="lifestyle-cta-button">
            Collaborate With Us →
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Lifestyle;
