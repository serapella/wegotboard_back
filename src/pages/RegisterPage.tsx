import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useRegisterMutation } from "../store/userAPI";
import { useDispatch } from "react-redux";
import { setCredentials } from "../store/authSlice";
import { RegisterCredentials } from "../types";
import styles from "../css_modules/RegisterPage.module.css";
import WeGotBoardLogo from "../images/WeGotBoard_cut.png";

const RegisterPage = () => {
  const [register, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const [errors, setErrors] = useState({
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
    form: "",
  });

  const validateForm = () => {
    const newErrors = {
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
      form: "",
    };
    let isValid = true;

    // First Name validation
    if (!formData.first.trim()) {
      newErrors.first = "First name is required";
      isValid = false;
    } else if (formData.first.length < 2) {
      newErrors.first = "First name must be at least 2 characters";
      isValid = false;
    }

    // Last Name validation
    if (!formData.last.trim()) {
      newErrors.last = "Last name is required";
      isValid = false;
    } else if (formData.last.length < 2) {
      newErrors.last = "Last name must be at least 2 characters";
      isValid = false;
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    // Phone validation
    if (!formData.pnumber) {
      newErrors.pnumber = "Phone number is required";
      isValid = false;
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.pnumber.replace(/\s/g, ""))) {
      newErrors.pnumber = "Please enter a valid phone number";
      isValid = false;
    }

    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
      isValid = false;
    }

    // City validation
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
      isValid = false;
    }

    // Postal Code validation
    if (!formData.pcode.trim()) {
      newErrors.pcode = "Postal code is required";
      isValid = false;
    }

    // Country validation
    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
      isValid = false;
    }

    // Region validation
    if (!formData.region.trim()) {
      newErrors.region = "Region is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
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
      const result = await register(formData).unwrap();

      if (result.user && result.token) {
        dispatch(setCredentials(result));
        navigate("/user/profile");
      } else {
        setErrors((prev) => ({
          ...prev,
          form: "Registration failed. Please try again.",
        }));
      }
    } catch (err: any) {
      console.error("Registration error:", err);
      setErrors((prev) => ({
        ...prev,
        form: err?.data?.message || "Registration failed. Please try again.",
      }));
    }
  };

  return (
    <>
      <section className={styles.headerNav}>
        <nav>
          <Link to="/cart">Cart</Link>
          <div>
            <Link to="/">Home</Link>/<Link to="/user/login">Login</Link>
          </div>
        </nav>
      </section>

      <main className={styles.main}>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.logoWgb}>
            <Link to="/">
              <img src={WeGotBoardLogo} alt="logo" />
            </Link>
          </div>

          {errors.form && <div className={styles.error}>{errors.form}</div>}

          <div className={styles.inputUserDetails}>
            <div className={styles.input}>
              <label htmlFor="first">First Name*</label>
              <input
                className={`${styles.inputMod} ${
                  errors.first ? styles.inputError : ""
                }`}
                type="text"
                id="first"
                name="first"
                value={formData.first}
                onChange={handleInputChange}
                placeholder="Enter Your First Name"
                disabled={isLoading}
              />
              {errors.first && (
                <span className={styles.errorMessage}>{errors.first}</span>
              )}
            </div>

            <div className={styles.input}>
              <label htmlFor="last">Last Name*</label>
              <input
                className={`${styles.inputMod} ${
                  errors.last ? styles.inputError : ""
                }`}
                type="text"
                id="last"
                name="last"
                value={formData.last}
                onChange={handleInputChange}
                placeholder="Enter Your Last Name"
                disabled={isLoading}
              />
              {errors.last && (
                <span className={styles.errorMessage}>{errors.last}</span>
              )}
            </div>

            <div className={styles.input}>
              <label htmlFor="email">Email*</label>
              <input
                className={`${styles.inputMod} ${
                  errors.email ? styles.inputError : ""
                }`}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
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
                onChange={handleInputChange}
                placeholder="Enter Your password"
                disabled={isLoading}
              />
              {errors.password && (
                <span className={styles.errorMessage}>{errors.password}</span>
              )}
            </div>

            <div className={styles.input}>
              <label htmlFor="pnumber">Phone Number*</label>
              <input
                className={`${styles.inputMod} ${
                  errors.pnumber ? styles.inputError : ""
                }`}
                type="tel"
                id="pnumber"
                name="pnumber"
                value={formData.pnumber}
                onChange={handleInputChange}
                placeholder="Enter Your phone number"
                disabled={isLoading}
              />
              {errors.pnumber && (
                <span className={styles.errorMessage}>{errors.pnumber}</span>
              )}
            </div>

            <div className={styles.input}>
              <label htmlFor="address">Address*</label>
              <input
                className={`${styles.inputMod} ${
                  errors.address ? styles.inputError : ""
                }`}
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter Your address"
                disabled={isLoading}
              />
              {errors.address && (
                <span className={styles.errorMessage}>{errors.address}</span>
              )}
            </div>

            <div className={styles.input}>
              <label htmlFor="city">City*</label>
              <input
                className={`${styles.inputMod} ${
                  errors.city ? styles.inputError : ""
                }`}
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="Enter Your city"
                disabled={isLoading}
              />
              {errors.city && (
                <span className={styles.errorMessage}>{errors.city}</span>
              )}
            </div>

            <div className={styles.input}>
              <label htmlFor="pcode">Postal Code*</label>
              <input
                className={`${styles.inputMod} ${
                  errors.pcode ? styles.inputError : ""
                }`}
                type="text"
                id="pcode"
                name="pcode"
                value={formData.pcode}
                onChange={handleInputChange}
                placeholder="Enter Your postal code"
                disabled={isLoading}
              />
              {errors.pcode && (
                <span className={styles.errorMessage}>{errors.pcode}</span>
              )}
            </div>

            <div className={styles.input}>
              <label htmlFor="country">Country*</label>
              <input
                className={`${styles.inputMod} ${
                  errors.country ? styles.inputError : ""
                }`}
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                placeholder="Enter Your country"
                disabled={isLoading}
              />
              {errors.country && (
                <span className={styles.errorMessage}>{errors.country}</span>
              )}
            </div>

            <div className={styles.input}>
              <label htmlFor="region">Region*</label>
              <input
                className={`${styles.inputMod} ${
                  errors.region ? styles.inputError : ""
                }`}
                type="text"
                id="region"
                name="region"
                value={formData.region}
                onChange={handleInputChange}
                placeholder="Enter Your region"
                disabled={isLoading}
              />
              {errors.region && (
                <span className={styles.errorMessage}>{errors.region}</span>
              )}
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
    </>
  );
};

export default RegisterPage;
