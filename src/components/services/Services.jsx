import ServiceCard from "../../Utilities/cards/ServiceCard";
import "./Services.css";
import Graphic from "/src/assets/graphic.jpg";
import printing from "/src/assets/printing.jpg";
import KRA from "/src/assets/kra.png"
import software from "/src/assets/software.jpg";

const services = [
  {
    id: 1,
    image: Graphic,
    title: "Graphic Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore a quo consequatur voluptatem alias expedita quae harum non neque ut?",
  },
  {
    id: 2,
    image: printing,
    title: "Printing & Lamination",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore a quo consequatur voluptatem alias expedita quae harum non neque ut?",
  },
  {
    id: 3,
    image: KRA,
    title: "KRA PIN Application",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore a quo consequatur voluptatem alias expedita quae harum non neque ut?",
  },
  {
    id: 4,
    image: software,
    title: "Software Installation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore a quo consequatur voluptatem alias expedita quae harum non neque ut?",
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
