import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { AppContext } from "../context/AppContext";
import { AuthContext } from "../context/AuthContext";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { MdMenu, MdClose } from "react-icons/md";

export default function Navbar(props) {
  const app = useContext(AppContext);
  const { user } = useContext(AuthContext);
  const cartCount = app.getCartCount();
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isDarkMode, setDarkMode] = useState(true);
  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const hide = () => setIsOpen(false);
  const show = () => setIsOpen(true);

  const links = [
    { link: "/", text: "Home" },
    { link: "/about", text: "About Us" },
    { link: "/products", text: "Product" },
  ];

  useEffect(() => {
    const preferDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (preferDark) {
      setIsDarkTheme(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkTheme]);

  function handleThemeClick() {
    setIsDarkTheme(!isDarkTheme);
  }

  const activeStyles = {
    fontWeight: "bold",
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-brand">
        SuperM
      </NavLink>
      <div className="hide">
        <ul>
          {links.map((nav) => (
            <li key={nav.text} className="nav-item">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyles : null)}
                to={nav.link}
              >
                {nav.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="hide">
        <ul>
          {user ? (
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyles : null)}
                to="/profile"
              >
                <FaUserCircle size={"24px"} />
              </NavLink>
            </li>
          ) : (
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyles : null)}
                to="/login"
              >
                Sign up / Login
              </NavLink>
            </li>
          )}
          <li className="nav-item">
            <div className="theme-switcher" onClick={handleThemeClick}>
              {isDarkTheme ? (
                <DarkModeSwitch
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                  size={24}
                  sunColor={"white"}
                />
              ) : (
                <DarkModeSwitch
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                  size={24}
                  moonColor={"black"}
                  sunColor={"#2b8379"}
                />
              )}
            </div>
          </li>
          <li className="nav-item">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyles : null)}
              to="/cart"
            >
              <div className="cartCount-item">
                <FaShoppingCart size={"24px"} />
                {cartCount > 0 && (
                  <div className="cartCount">
                    <div className="cart-item">{cartCount}</div>
                  </div>
                )}
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="menu-nav">
        <button className="menu-toggle" onClick={toggle}>
          {isOpen ? <MdClose size={"24px"} /> : <MdMenu size={"24px"} />}
        </button>
        {isOpen && (
          <ul className="menu-links">
            {links.map((nav) => (
              <li key={nav.text}>
                <NavLink
                  to={nav.link}
                  onClick={toggle}
                  onBlur={hide}
                  onFocus={show}
                >
                  {nav.text}
                </NavLink>
              </li>
            ))}
            <div
              className="menu-items"
              onClick={toggle}
              onBlur={hide}
              onFocus={show}
            >
              {user ? (
                <li className="nav-item">
                  <NavLink
                    style={({ isActive }) => (isActive ? activeStyles : null)}
                    to="/profile"
                  >
                    <FaUserCircle size={"24px"} />
                  </NavLink>
                </li>
              ) : (
                <li className="nav-item">
                  <NavLink
                    style={({ isActive }) => (isActive ? activeStyles : null)}
                    to="/login"
                  >
                    Sign up / Login
                  </NavLink>
                </li>
              )}
              <li className="nav-item">
                <div className="theme-switcher" onClick={handleThemeClick}>
                  {isDarkTheme ? (
                    <DarkModeSwitch
                      checked={isDarkMode}
                      onChange={toggleDarkMode}
                      size={24}
                      sunColor={"white"}
                    />
                  ) : (
                    <DarkModeSwitch
                      checked={isDarkMode}
                      onChange={toggleDarkMode}
                      size={24}
                      moonColor={"black"}
                      sunColor={"#2b8379"}
                    />
                  )}
                </div>
              </li>
              <li className="nav-item">
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyles : null)}
                  to="/cart"
                >
                  <div className="cartCount-item">
                    <FaShoppingCart size={"24px"} />
                    {cartCount > 0 && (
                      <div className="cartCount">
                        <div className="cart-item">{cartCount}</div>
                      </div>
                    )}
                  </div>
                </NavLink>
              </li>
            </div>
          </ul>
        )}
      </div>
    </nav>
  );
}
