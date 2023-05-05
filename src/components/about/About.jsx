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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          ipsam veniam architecto, esse eligendi voluptas nisi odio. Asperiores
          optio nihil dolorum, sunt incidunt, fugiat tempora hic velit vel
          labore earum eius quidem perspiciatis quae nobis. Incidunt dolor sequi
          dolorum deleniti, molestiae, id blanditiis ex temporibus nemo, omnis
          velit beatae? Ipsa!
        </p>
        <a href="#" className="secondary-btn">
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default About;
