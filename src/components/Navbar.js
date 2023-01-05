import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { AppContext } from "../AppContext";
import { FaShoppingCart } from "react-icons/fa";
import Button from "./Button";

export default function Navbar(props) {
  const app = useContext(AppContext);
  const cartCount = app.getCartCount();
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isDarkMode, setDarkMode] = useState(true);
  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

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

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-brand">
        SuperM
      </NavLink>
      <ul>
        <li className="nav-item">
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="active" to="/about">
            About us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="active" to="/products">
            Products
          </NavLink>
        </li>
        <li className="nav-item" style={{paddingRight: "15px"}}>
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
                sunColor={"white"}
              />
            )}
          </div>
        </li>
        <li>
          <NavLink to="/cart" className="nav-item">
            <div className="cartCount-item">
              <FaShoppingCart size={"24px"} />
              {cartCount > 0 && <div className="cartCount">
                <div className="cart-item">{cartCount}</div>
              </div>
              }
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
