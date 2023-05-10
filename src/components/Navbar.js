import React, { useContext, useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { NavLink } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { AppContext } from "../content/AppContext";
import { AuthContext } from "../content/AuthContext";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

export default function Navbar(props) {
  const app = useContext(AppContext);
  const { user, dispatch } = useContext(AuthContext);
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

  const logout = async () => {
    dispatch({ type: "LOGIN_OUT" });
    await signOut(auth);
  };

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
      <div>
        <ul>
          <li className="nav-item">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyles : null)}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyles : null)}
              to="/about"
            >
              About us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyles : null)}
              to="/products"
            >
              Products
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          {user ? (
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyles : null)}
                to="/"
                title="logout"
              >
                <FaUserCircle size={"24px"} onClick={logout} />
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
                  sunColor={"white"}
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
    </nav>
  );
}
