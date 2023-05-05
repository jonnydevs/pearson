const ServiceCard = ({ service }) => {
  return (
    <div className="card">
      <div className="icon">
        <img src={service.image} alt="" />
      </div>
      <div className="desc">
        <h2>{service.title}</h2>
        <p>{service.description}</p>
        <a href="#" className="primary-btn">
          Hire us
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
