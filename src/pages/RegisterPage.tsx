import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useRegisterMutation } from "../store/userAPI";
import { RegisterCredentials } from "../types";
import styles from "./css_modules/RegisterPage.module.css";
import WeGotBoardLogo from "../../images/WeGotBoard_cut.png";

const RegisterPage = () => {
  const [register, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const [formData, setFormData] = useState<RegisterCredentials>({
    email: "",
    password: "",
    first: "",
    last: "",
    pnumber: "",
    address: "",
    city: "",
    pcode: "",
    country: "",
    region: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await register(formData).unwrap();
      navigate("/user/login");
    } catch (err) {
      setError("Registration failed. Please try again.");
      console.error("Registration error:", err);
    }
  };

  return (
    <main className={styles.main}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.logoWgb}>
          <Link to="/">
            <img src={WeGotBoardLogo} alt="logo" />
          </Link>
        </div>

        {error && <div className={styles.error}>{error}</div>}

        <div className={styles.inputUserDetails}>
          <div className={styles.input}>
            <label htmlFor="first">First Name*</label>
            <input
              className={styles.inputMod}
              type="text"
              id="first"
              name="first"
              value={formData.first}
              onChange={handleInputChange}
              placeholder="Enter Your First Name"
              required
              disabled={isLoading}
            />
          </div>

          <div className={styles.input}>
            <label htmlFor="last">Last Name*</label>
            <input
              className={styles.inputMod}
              type="text"
              id="last"
              name="last"
              value={formData.last}
              onChange={handleInputChange}
              placeholder="Enter Your Last Name"
              required
              disabled={isLoading}
            />
          </div>

          <div className={styles.input}>
            <label htmlFor="email">Email*</label>
            <input
              className={styles.inputMod}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
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
              onChange={handleInputChange}
              placeholder="Enter Your password"
              required
              disabled={isLoading}
            />
          </div>

          <div className={styles.input}>
            <label htmlFor="pnumber">Phone Number*</label>
            <input
              className={styles.inputMod}
              type="tel"
              id="pnumber"
              name="pnumber"
              value={formData.pnumber}
              onChange={handleInputChange}
              placeholder="Enter Your phone number"
              required
              disabled={isLoading}
            />
          </div>

          <div className={styles.input}>
            <label htmlFor="address">Address*</label>
            <input
              className={styles.inputMod}
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter Your address"
              required
              disabled={isLoading}
            />
          </div>

          <div className={styles.input}>
            <label htmlFor="city">City*</label>
            <input
              className={styles.inputMod}
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="Enter Your city"
              required
              disabled={isLoading}
            />
          </div>

          <div className={styles.input}>
            <label htmlFor="pcode">Postal Code*</label>
            <input
              className={styles.inputMod}
              type="text"
              id="pcode"
              name="pcode"
              value={formData.pcode}
              onChange={handleInputChange}
              placeholder="Enter Your postal code"
              required
              disabled={isLoading}
            />
          </div>

          <div className={styles.input}>
            <label htmlFor="country">Country*</label>
            <input
              className={styles.inputMod}
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              placeholder="Enter Your country"
              required
              disabled={isLoading}
            />
          </div>

          <div className={styles.input}>
            <label htmlFor="region">Region*</label>
            <input
              className={styles.inputMod}
              type="text"
              id="region"
              name="region"
              value={formData.region}
              onChange={handleInputChange}
              placeholder="Enter Your region"
              required
              disabled={isLoading}
            />
          </div>
        </div>

        <div className={styles.btnSignUp}>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Signing Up..." : "Sign Up"}
          </button>
          <Link to="/user/login">Have an account?</Link>
        </div>
      </form>
    </main>
  );
};

export default RegisterPage;
