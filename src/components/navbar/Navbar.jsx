import { links } from "../../Data";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./navbar.css";
import { useState, useEffect } from "react";
import { RiMenu2Fill, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/KOLLECTIVE EVENTS2-0111.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [iconColor, setIconColor] = useState("white");
  const navigate = useNavigate();
  const location = useLocation();

  // Update icon color based on current route
  useEffect(() => {
    const whiteBackgroundRoutes = ["/about", "/portfolio", "/contact", "/brands", "/branded", "/website", "/max", "/corporateEvents", "/largeFormateEvent", "/mice", "/brand", "/lifestyle"];
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

  return (
    <nav className="nav">
      {/* Logo */}
      <div className="nav-logo">
        <NavLink to="/">
          <img src={logo} alt="Kollective Events Logo" className="logo-img" />
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
            <img src={logo} alt="Kollective Events Logo" />
          </div>
          <ul>
            {links.map(({ name, path }, index) => (
              <li key={index}>
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
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
