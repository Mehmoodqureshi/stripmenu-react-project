import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { sidebarOpen, submenuOpen, submenuClose } = useGlobalContext();
  const displayMenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.right + tempBtn.left) / 2;
    const bottom = tempBtn.bottom - 3;
    submenuOpen(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      submenuClose();
    }
  };
  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="Stripe" className="nav-logo" />
          <button className="btn toggle-btn" onClick={sidebarOpen}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displayMenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displayMenu}>
              develpors
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displayMenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
