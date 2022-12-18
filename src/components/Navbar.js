import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../AppContext";
import Button from "./Button";

export default function Navbar(props) {
  const app = useContext(AppContext);
  const cartCount = app.getCartCount();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const preferDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
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
          <Button className="theme-switcher" onClick={handleThemeClick}>{isDarkTheme ? "Dark" : "Light"}</Button>
        </li>
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
        <li>
          <NavLink to="/cart" className="nav-item nav-cart btn btn-accent">
            Cart ({cartCount})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
