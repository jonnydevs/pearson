import phoneImg from "/src/assets/icon.png";
import "./About.css";
const About = () => {
  return (
    <section id="about" className="about">
      <img src={phoneImg} alt="" />
      <div className="text">
        <h2>About Us</h2>
        <h1>
          We are a <span>computer solutions</span> company.
        </h1>
        <p>
          We are a computer solutions company. We offer a wide range of IT related
          services.  In case of any computer repairs, we have got you covered for that.
          We are committed to providing you with the best IT solutions. For more information, you can 
          hit the button below and send us a message today. We will get back  to you soon.
        </p>
        <a
          href="mailto:infopearsonsolutions@gmail.com"
          className="secondary-btn"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default About;
