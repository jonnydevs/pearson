import { FaStar, FaQuoteLeft, FaStarHalf } from "react-icons/fa";
import man from "/src/assets/man.jfif";

const ReviewCard = ({ message }) => {
  return (
    <div className="review-card">
      <div className="card-header">
        <FaQuoteLeft />
        <div className="stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalf />
        </div>
      </div>
      <div className="card-body">
              <p>{ message.say}</p>
      </div>
      <div className="card-footer">
        <div className="review-img">
          <img src={message.image} alt="" />
        </div>
        <div className="info">
          <h3>{message.name}</h3>
          <p>{message.profession}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
