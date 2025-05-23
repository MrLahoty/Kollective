import { links } from "../../Data";
import { NavLink } from "react-router";
import './navbar.css';
import { useState } from "react";
import logo from '../../assets/KOLLECTIVE EVENTS2-0111.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="nav">
      {/* Logo on top-left corner */}
      <div className="nav-logo">
        <NavLink to="/">
          <img src={logo} alt="Kollective Events Logo" className="logo-img" />
        </NavLink>
      </div>

      {/* Navigation links */}
      <ul className="nav-list">
        {links.map(({ name, path }, index) => (
          <li className="nav-item" key={index}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? 'nav-link active-nav' : 'nav-link'
              }
              onClick={() => setShowMenu(false)}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
