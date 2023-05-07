import ServiceCard from "../../Utilities/cards/ServiceCard";
import "./Services.css";
import Graphic from "/src/assets/graphic.jpg";
import printing from "/src/assets/printing.jpg";
import KRA from "/src/assets/kra.png";
import software from "/src/assets/software.jpg";

const services = [
  {
    id: 1,
    image: Graphic,
    title: "Graphic Design",
    description:
      "Whether it is a banner for your business,  or a product,we will create stunning graphics for you. Hire us today at an affordable rate.",
  },
  {
    id: 2,
    image: printing,
    title: "Printing & Lamination",
    description:
      "In need of past papers? Want a copy of your id or certificates? Pearson is your one stop shop for you and will provide outstanding services.",
  },
  {
    id: 3,
    image: KRA,
    title: "KRA PIN Application",
    description:
      "All government service applications are available at our shop. KRA, NTSA, HELB and other government services are available.  ",
  },
  {
    id: 4,
    image: software,
    title: "Software Installation",
    description:
      "We do all software installations in your mac, windows and Linux systems. All services are done at pocket friendly rates.",
  },
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div>
        <h2>Our Services</h2>
        <h1>We provide a wide range of services.</h1>
      </div>
      <div className="cards">
        {services.map((service) => (
          <ServiceCard service={service} key={service.id} />
        ))}
      </div>
    </section>
  );
};

export default Services;
