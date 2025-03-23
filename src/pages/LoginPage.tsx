import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useLoginMutation } from "../store/authAPI";
import styles from "../css_modules/login.module.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await login({
        email: formData.email,
        password: formData.password,
      }).unwrap();
      navigate("/");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.logoWgb}>
          <h1>WeGotBoard</h1>
        </div>

        {error && <div className={styles.error}>{error}</div>}

        <div className={styles.inputUserDetails}>
          <div className={styles.input}>
            <label htmlFor="email">Email Address*</label>
            <input
              className={styles.inputMod}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your email"
              required
              disabled={isLoading}
            />
          </div>

          <div className={styles.input}>
            <label htmlFor="password">Password*</label>
            <input
              className={styles.inputMod}
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Your password"
              required
              disabled={isLoading}
            />
          </div>

          <div className={styles.rememberForgot}>
            <div className={styles.remember}>
              <input
                type="checkbox"
                id="remember"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                disabled={isLoading}
              />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <Link to="/forgot-password" className={styles.forgot}>
              Forgot Password?
            </Link>
          </div>
        </div>

        <div className={styles.btnSignUp}>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
          <Link to="/register">signup?</Link>
        </div>
      </form>
    </main>
  );
};

export default LoginPage;
