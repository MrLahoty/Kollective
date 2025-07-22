import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./navbar.css";
import { useState, useEffect } from "react";
import { RiMenu2Fill, RiCloseLine } from "react-icons/ri";
import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaCogs,
} from "react-icons/fa";
import logoWhite from "../../assets/KOLLECTIVE EVENTS2-011.png";
import logoBlack from "../../assets/KOLLECTIVE EVENTS2-0111.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [iconColor, setIconColor] = useState("white");
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false); // 🆕 Dropdown state
  const navigate = useNavigate();
  const location = useLocation();

  const whiteBackgroundRoutes = [
    "/about",
    "/portfolio",
    "/contact",
    "/brands",
    "/branded",
    "/website",
    "/max",
    "/corporateEvents",
    "/largeFormateEvent",
    "/mice",
    "/brand",
    "/lifestyle",
    "/ourvision",
    "/founder",
  ];

  useEffect(() => {
    const whiteBackgroundRoutes = [
      "/about",
      "/portfolio",
      "/contact",
      "/brands",
      "/branded",
      "/website",
      "/max",
      "/corporateEvents",
      "/largeFormateEvent",
      "/mice",
      "/brand",
      "/lifestyle",
      "/ourvision",
      "/founder",
    ];

    if (whiteBackgroundRoutes.includes(location.pathname)) {
      setIconColor("black");
    } else {
      setIconColor("white");
    }
  }, [location.pathname]);

  const handleClose = () => {
    setShowMenu(false);
    navigate("/");
  };

  const currentLogo = whiteBackgroundRoutes.includes(location.pathname)
    ? logoBlack
    : logoWhite;

  // ✅ Define the links directly here (replacing Data.jsx)
  const menuLinks = [
    {
      name: "Home",
      path: "/",
      icon: <FaHome className="nav-icons" />,
    },
    {
      name: "About",
      icon: <FaUser className="nav-icons" />,
      dropdown: true,
      subLinks: [
        { name: "Our Mission", path: "/ourmission" },
        { name: "Our Vision", path: "/ourvision" },
        { name: "Meet The Founder", path: "/founder" },
        { name: "Meet Our Team", path: "/team-details" },
      ],
    },
    {
      name: "Portfolio",
      path: "/portfolio",
      icon: <FaFolderOpen className="nav-icons" />,
    },
    {
      name: "Services",
      path: "/services",
      icon: <FaCogs className="nav-icons" />,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <FaEnvelopeOpen className="nav-icons" />,
    },
  ];

  return (
    <nav className="nav">
      {/* Logo */}
      <div className="nav-logo">
        <NavLink to="/">
          <img
            src={currentLogo}
            alt="Kollective Events Logo"
            className="logo-img"
          />
        </NavLink>
      </div>

      {/* Menu Toggle Icon */}
      <div
        className="menu-toggle-icon"
        style={{ color: iconColor }}
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? (
          <div className="menu-close-icon" style={{ color: iconColor }}>
            <RiCloseLine />
          </div>
        ) : (
          <RiMenu2Fill />
        )}
      </div>

      {/* Fullscreen Menu */}
      {showMenu && (
        <div className="unified-menu">
          <div className="menu-logo">
            <img src={logoWhite} alt="Kollective Events Logo" />
          </div>
          <ul>
            {menuLinks.map(
              ({ name, path, icon, dropdown, subLinks }, index) => (
                <li key={index}>
                  {dropdown ? (
                    <div className="dropdown-wrapper">
                      <div className="unified-link-with-arrow">
                        <NavLink
                          to="/about"
                          className="unified-link"
                          onClick={() => setShowMenu(false)}
                        >
                          {icon} {name}
                        </NavLink>

                        <span
                          className="dropdown-arrowss"
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            setAboutDropdownOpen(!aboutDropdownOpen);
                          }}
                          style={{
                            cursor: "pointer",
                            marginLeft: "12px",
                            color: "white",
                          }}
                        >
                          {aboutDropdownOpen ? "▲" : "▼"}
                        </span>
                      </div>

                      {aboutDropdownOpen && (
                        <ul className="dropdown-menuss">
                          {subLinks.map((sub, i) => (
                            <li key={i}>
                              <NavLink
                                to={sub.path}
                                className="unified-link sub-link"
                                onClick={() => setShowMenu(false)}
                              >
                                {sub.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <NavLink
                      to={path}
                      className="unified-link"
                      onClick={() => {
                        if (path === "/") {
                          handleClose();
                        } else {
                          setShowMenu(false);
                        }
                      }}
                    >
                      {icon} {name}
                    </NavLink>
                  )}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
