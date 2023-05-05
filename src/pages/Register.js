import React, { useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../pages/firebase";
import Button from "../components/Button";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    comfirmPassword: "",
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
    if(formData.password !== formData.comfirmPassword) {
      console.log("password not correct")
    }
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        formData.username,
        formData.password
      );
      console.log(user)
    } catch (error) {
      console.log(error);
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
        <div className="input-container">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="confirmPassword"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="confirmPassword"
            value={formData.password}
            onChange={handleChange}
            className="form-input"
          ></input>
        </div>
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
}
