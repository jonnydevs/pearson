import ServiceCard from "../../Utilities/cards/ServiceCard";
import "./Services.css";
import phoneImg from "/src/assets/icon.png";
import mobile from "/src/assets/mobile.png";

const services = [
  {
    id: 1,
    image: phoneImg,
    title: "Graphic Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore a quo consequatur voluptatem alias expedita quae harum non neque ut?",
  },
  {
    id: 2,
    image: mobile,
    title: "Printing & Lamination",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore a quo consequatur voluptatem alias expedita quae harum non neque ut?",
  },
  {
    id: 3,
    image: phoneImg,
    title: "KRA PIN Application",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore a quo consequatur voluptatem alias expedita quae harum non neque ut?",
  },
  {
    id: 4,
    image: mobile,
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
