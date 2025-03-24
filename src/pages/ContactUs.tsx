import style from "../css_modules/contactUs.module.css";
const ContactUs = () => {
  return (
    <div className={style.container}>
      <h1>Contact Us</h1>
      <p>
        If you have any questions about our website, your account or purchases,
        please contact us using the information below:
      </p>
      <p>Email us at: example@email.com</p>
      <p>Phone number: +32 123 4567890</p>
      <br />
      <p>Or send us a letter:</p>
      <p>123 Main Street, Anytown, BE</p>
    </div>
  );
};
export default ContactUs;
