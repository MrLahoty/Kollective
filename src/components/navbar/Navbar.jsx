import { links } from "../../Data";
import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
import { RiMenu2Fill, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/KOLLECTIVE EVENTS2-0111.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

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

      {/* Menu Toggle Icon - Always visible */}
      <div className="menu-toggle-icon" onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? <div className="menu-close-icon"><RiCloseLine /></div> : <RiMenu2Fill />}
      </div>

      {showMenu && (
        <div className="unified-menu">
          {/* Logo inside fullscreen menu */}
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
