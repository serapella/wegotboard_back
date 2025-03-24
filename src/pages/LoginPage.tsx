import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import styles from "../css_modules/LoginPage.module.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [error, setError] = useState<string>("");

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
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        throw new Error("Invalid email or password");
      }

      const data = await response.json();
      // Assuming the backend sends the JWT token as part of the response
      document.cookie = `token=${data.token}; path=/;`;

      navigate("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit}>
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
              />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <Link to="/forgot-password" className={styles.forgot}>
              Forgot Password?
            </Link>
          </div>
        </div>

        <div className={styles.btnSignUp}>
          <button type="submit" disabled={false}>
            Login
          </button>
          <Link to="/register">Sign up?</Link>
        </div>
      </form>
    </main>
  );
};

export default Login;
