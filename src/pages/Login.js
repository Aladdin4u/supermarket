import React, { useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigation = useNavigate()
  const [formData, setFormData] = useState({
    username: "",
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

  const logout = async() => {
    await signOut(auth)
  }
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        formData.username,
        formData.password
      );
      console.log(user)
      navigation("/")
    } catch (error) {
      console.log(error);
      console.log(error.message);
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
      <p style={{color: "red"}}>Invalid username and password</p>
        <Button type="submit">Login</Button>
      <p>Don't have an account <Link to="/register" style={{textDecoration: "underline"}}>register</Link></p>
      </form>
    </div>
  );
}
