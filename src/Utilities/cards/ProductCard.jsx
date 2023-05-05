import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "react-use-cart";

const ProductCard = ({ item }) => {
  const { addItem } = useCart();
  return (
    <div className="item">
      <div className="item-img">
        <img src={item.image} alt="" />
      </div>
      <div className="item-info">
        <h2>{item.title}</h2>
        <div className="controls">
          <span>Ksh {item.price}</span>
          <button onClick={() => addItem(item)}>
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
