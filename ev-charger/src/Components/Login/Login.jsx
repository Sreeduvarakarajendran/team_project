import React, { useState } from "react";
import "./Login.css";

const EVCharger = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    vehicleRegistration: "",
    chargerId: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in with", formData);
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      console.log("Signing up with", formData);
    }
  };

  return (
    <div className="container">
      <h2 className="title">{isLogin ? "Login to EV Charger" : "Signup for EV Charger"}</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {!isLogin && (
          <>
            <input
              className="input"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <input
              className="input"
              type="text"
              name="vehicleRegistration"
              placeholder="Vehicle Registration Number"
              value={formData.vehicleRegistration}
              onChange={handleChange}
              required
            />
            <input
              className="input"
              type="text"
              name="chargerId"
              placeholder="Charger ID"
              value={formData.chargerId}
              onChange={handleChange}
              required
            />
          </>
        )}
        <button type="submit" className="button">
          {isLogin ? "Login" : "Signup"}
        </button>
      </form>
      <p className="toggle-text">
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <span
          onClick={() => setIsLogin(!isLogin)}
          className="toggle-button"
        >
          {isLogin ? " Signup" : " Login"}
        </span>
      </p>
    </div>
  );
};

export default EVCharger;
