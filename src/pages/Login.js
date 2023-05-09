import React, { useState, useContext } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../content/AuthContext";

export default function Login() {
  const navigation = useNavigate();
  const { loading, error, dispatch } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const handleChange = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const logout = async () => {
    await signOut(auth);
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        formData.username,
        formData.password
      );
      console.log(user);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigation("/");
    } catch (error) {
      console.log(error);
      console.log(error.message);
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
    }
  };
  return (
    <div className="login-layout">
      <form onSubmit={handleFormSubmit} className="form-container">
        <div className="input-container">
          <label htmlFor="username">Username*</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            value={formData.username}
            onChange={handleChange}
            className="form-input"
          ></input>
        </div>
        <div className="input-container">
          <label htmlFor="password">Password*</label>
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
        {error && <p style={{ color: "red" }}>Invalid username and password</p>}
        <Button disabled={loading} type="submit">
          Login
        </Button>
        <p>
          Don't have an account{" "}
          <Link to="/register" style={{ textDecoration: "underline" }}>
            register
          </Link>
        </p>
      </form>
    </div>
  );
}
