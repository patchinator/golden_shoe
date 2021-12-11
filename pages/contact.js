import ContactCard from "../components/ContactCard";
import Navbar from "../components/Navbar";

const ContactPage = () => {
  return (
    <section>
      <Navbar />
      <section>
        <div>Contact Us</div>
        <ContactCard />
      </section>
    </section>
  );
};

export default ContactPage;
