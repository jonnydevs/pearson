import {
  FaEnvelope,
  FaEnvelopeOpenText,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import "./Contact.css";
import contact from "/src/assets/contact.jpg";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="text">
        <h1>
          Want to <span>Contact</span> us?
        </h1>
        <h2>Here's how to reach us.</h2>
        <img src={contact} alt="" />
      </div>
      <div className="contact-cards">
        <a href="tel:+254704991769" className="contact-card">
          <FaWhatsapp style={{ fontSize: "30px" }} />
          <p>DM us today.</p>
        </a>
        <a
          href="mailto:infopearsonsolutions@gmail.com"
          className="contact-card"
        >
          <FaEnvelope style={{ fontSize: "30px" }} />
          <p>Send us an email.</p>
        </a>
        <a href="tel:+254704991769" className="contact-card">
          <FaPhone style={{ fontSize: "30px" }} />
          <p>Call us today.</p>
        </a>
        <a href="tel:+254704991769" className="contact-card">
          <FaEnvelopeOpenText style={{ fontSize: "30px" }} />
          <p>Message us.</p>
        </a>
      </div>
    </div>
  );
};

export default Contact;
