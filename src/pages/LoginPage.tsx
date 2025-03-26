import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useLoginMutation } from "../store/userAPI";
import { useDispatch } from "react-redux";
import { setCredentials } from "../store/authSlice";
import styles from "../css_modules/LoginPage.module.css";
import WeGotBoardLogo from "../images/WeGotBoard_cut.png";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    form: "",
  });

  const validateForm = () => {
    const newErrors = {
      email: "",
      password: "",
      form: "",
    };
    let isValid = true;

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
        form: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const result = await login({
        email: formData.email,
        password: formData.password,
      }).unwrap();

      if (result.user && result.token) {
        dispatch(setCredentials(result));
        navigate("/");
      } else {
        setErrors((prev) => ({
          ...prev,
          form: "Login failed. Please try again.",
        }));
      }
    } catch (err: any) {
      console.error("Login error:", err);
      setErrors((prev) => ({
        ...prev,
        form: err?.data?.message || "Invalid email or password",
      }));
    }
  };

  return (
    <>
      <section className={styles.headerNav}>
        <nav>
          <Link to="/cart">Cart</Link>
          <div>
            <Link to="/">Home</Link>/<Link to="/user/register">Register</Link>
          </div>
        </nav>
      </section>

      <main className={styles.main}>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.logoWgb}>
            <Link to="/">
              <img src={WeGotBoardLogo} alt="WeGotBoard Logo" />
            </Link>
          </div>

          {errors.form && <div className={styles.error}>{errors.form}</div>}

          <div className={styles.inputUserDetails}>
            <div className={styles.input}>
              <label htmlFor="email">Email Address*</label>
              <input
                className={`${styles.inputMod} ${
                  errors.email ? styles.inputError : ""
                }`}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your email"
                disabled={isLoading}
              />
              {errors.email && (
                <span className={styles.errorMessage}>{errors.email}</span>
              )}
            </div>

            <div className={styles.input}>
              <label htmlFor="password">Password*</label>
              <input
                className={`${styles.inputMod} ${
                  errors.password ? styles.inputError : ""
                }`}
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Your password"
                disabled={isLoading}
              />
              {errors.password && (
                <span className={styles.errorMessage}>{errors.password}</span>
              )}
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
            <Link to="/user/register">Don't have an account?</Link>
          </div>
        </form>
      </main>
    </>
  );
};

export default LoginPage;
