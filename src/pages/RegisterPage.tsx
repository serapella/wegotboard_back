import { useState } from "react";
import { useNavigate } from "react-router";
import { useRegisterMutation } from "../store/userAPI";
import { RegisterCredentials } from "../types";
import styles from "../css_modules/RegisterPage.module.css";

const RegisterPage = () => {
  const [register, { isLoading, error }] = useRegisterMutation();
  const navigate = useNavigate();

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

    try {
      const { data } = await register(formData).unwrap();
      if (data) {
        navigate("/user/login");
      }
    } catch (err) {
      console.error("Registration error: ", err);
    }
  };

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="first"
            value={formData.first}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="last"
            value={formData.last}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            name="pnumber"
            value={formData.pnumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Postal Code:</label>
          <input
            type="text"
            name="pcode"
            value={formData.pcode}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Region:</label>
          <input
            type="text"
            name="region"
            value={formData.region}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
      {error && <p>{error.message}</p>}
    </main>
  );
};

export default RegisterPage;
