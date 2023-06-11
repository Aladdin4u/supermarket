import React, { useState, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Register() {
  const navigation = useNavigate();
  const { loading, dispatch, error } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

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
    if (formData.password !== formData.confirmPassword) {
      dispatch({ type: "LOGIN_FAILURE", payload: "password incorrect" });
      return alert("password incorrect");
    }
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res });
      console.log(res);
      navigation("/login");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.message });
      console.log(error);
    }
  };

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
        <div className="input-container">
          <label htmlFor="confirmPassword">Confirm Password*</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="form-input"
          ></input>
        </div>
        {error && <p className="form-error">{error}</p>}
        <Button disabled={loading} type="submit">
          Sign up
        </Button>
        <p>
          Have an account{" "}
          <Link to="/login" style={{ textDecoration: "underline" }}>
            login
          </Link>
        </p>
      </form>
    </div>
  );
}
