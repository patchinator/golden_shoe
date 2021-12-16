import { Fragment } from "react";

// style
import style from "./contact.module.scss";

// components
import ContactCards from "../components/Contact/ContactCards";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactUs from "../components/Contact/ContactUs";
import Navbar from "../components/Header/Navbar";
import Footer from "./../components/Footer/Footer";

const ContactPage = () => {
  return (
    <Fragment>
      <Navbar />
      <div className={style.container}>
        <ContactInfo />
        <ContactCards />
        <ContactUs />
      </div>
      <Footer />
    </Fragment>
  );
};

export default ContactPage;
