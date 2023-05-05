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
        <div className="contact-card">
          <FaWhatsapp style={{ fontSize: "30px" }} />
          <a href="tel:+254000000000">DM us today.</a>
        </div>
        <div className="contact-card">
          <FaEnvelope style={{ fontSize: "30px" }} />
          <a href="tel:+254000000000">Send us an email.</a>
        </div>
        <div className="contact-card">
          <FaPhone style={{ fontSize: "30px" }} />
          <a href="tel:+254000000000">Call us today.</a>
        </div>
        <div className="contact-card">
          <FaEnvelopeOpenText style={{ fontSize: "30px" }} />
          <a href="tel:+254000000000">Message us.</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
