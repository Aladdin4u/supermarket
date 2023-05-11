import React, { useState, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import React, { useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigation = useNavigate()
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../content/AuthContext";

export default function Login() {
  const navigation = useNavigate();
  const { loading, error, dispatch } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState({})

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  const handleChange = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await signInWithEmailAndPassword(
  const logout = async() => {
    await signOut(auth)
  }
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.user.email });
      navigation("/cart");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.message });
    }
  };
      console.log(user)
      navigation("/")
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };
  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log(event)
  }
  return (
    <div className="login-layout">
      <form onSubmit={handleFormSubmit} className="form-container">
        <div className="input-container">
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          ></input>
        </div>
        <div className="input-container">
          <label htmlFor="password">Password*</label>

          <label htmlFor="password">Password*</label>

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
            className="form-input"
          ></input>
        </div>
        {error && <p className="form-error">Invalid email and password</p>}
        <Button disabled={loading} type="submit">
          Login
        </Button>
        <p>
          Don't have an account{" "}
          <Link to="/register" style={{ textDecoration: "underline" }}>
            register
          </Link>
        </p>

      <p style={{color: "red"}}>Invalid username and password</p>
        <Button type="submit">Login</Button>
      <p>Don't have an account <Link to="/register" style={{textDecoration: "underline"}}>register</Link></p>

        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}
