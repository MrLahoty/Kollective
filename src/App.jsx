import React, { useEffect, useState } from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import OurMission from "./pages/about/OurMission.jsx";
import OurVision from "./pages/about/OurVision.jsx";
import Founder from "./pages/about/Founder.jsx";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
import TeamDetails from "./pages/team/TeamDetails";
import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./components/AppLayout";
import Services from "./pages/services/Services";
import CorporateEvents from "./pages/portfolio/CorporateEvents";
import LargeFormateEvent from "./pages/portfolio/LargeFormateEvent";
import Mice from "./pages/portfolio/Mice";
import Brand from "./pages/portfolio/Brand";
import Lifestyle from "./pages/portfolio/Lifestyle";
import AllServices from "./pages/services/Allservices";
import Brands from "./pages/services/Brands";
import Branded from "./pages/services/Branded";
import Website from "./pages/services/Website";
import Max from "./pages/services/Max";
import LifestyleEvents from "./pages/services/LifestyleEvents";

const App = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  // Handle mouse movement for custom cursor
  useEffect(() => {
    const mouseMoveHandler = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  // Handle scrolling detection and scroll percentage calculation
  useEffect(() => {
    const scrollHandler = () => {
      setIsScrolling(true);
      // Calculate the scroll percentage
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const scrollProgress = (currentScroll / totalHeight) * 100;
      setScrollPercentage(scrollProgress);
    };

    const scrollEndHandler = () => {
      setIsScrolling(false);
    };

    window.addEventListener("scroll", scrollHandler);
    window.addEventListener("touchstart", scrollHandler);
    window.addEventListener("touchend", scrollEndHandler);
    window.addEventListener("mousewheel", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("touchstart", scrollHandler);
      window.removeEventListener("touchend", scrollEndHandler);
      window.removeEventListener("mousewheel", scrollHandler);
    };
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/ourmission", element: <OurMission /> },
        { path: "/ourvision", element: <OurVision /> },
        { path: "/founder", element: <Founder /> },

        { path: "/portfolio", element: <Portfolio /> },
        { path: "/contact", element: <Contact /> },
        { path: "/team-details", element: <TeamDetails /> },
        { path: "/services", element: <Services /> },
        { path: "/allservices", element: <AllServices /> },

        { path: "/brands", element: <Brands /> },
        { path: "/branded", element: <Branded /> },
        { path: "/website", element: <Website /> },
        { path: "/max", element: <Max /> },
        { path: "/lifestyleevents", element: <LifestyleEvents /> },

        { path: "/corporateEvents", element: <CorporateEvents /> },
         { path: "/largeFormateEvent", element: <LargeFormateEvent /> },
          { path: "/mice", element: <Mice /> },
          { path: "/brand", element: <Brand /> },
           { path: "/lifestyle", element: <Lifestyle /> },

      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
      <div
        className="custom-cursor"
        style={{
          left: `${cursorPosition.x}px`,
          top: isScrolling ? `${cursorPosition.y}px` : "-20px",
        }}
      />
      {/* Custom Scrollbar */}
      <div
        className={`custom-scrollbar ${isScrolling ? "active" : ""}`}
        style={{ height: `${scrollPercentage}%` }}
      >
        <div
          className="scroll-indicator"
          style={{ height: `${scrollPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default App;