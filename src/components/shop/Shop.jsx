import "./Shop.css";
import { FaShopify, FaShoppingBasket, FaShoppingCart } from "react-icons/fa";
import ProductCard from "../../Utilities/cards/ProductCard";
import { useCart } from "react-use-cart";
import covers from "/src/assets/covers.jpg";
import wirelessMouse from "/src/assets/wirelessMouse.jpg";
import i12 from "/src/assets/i12.jpg";
import gamingKeyboard from "/src/assets/gamingKeyboard.jpg";
import order from "/src/assets/order.jpg";
const products = [
  {
    id: 1,
    title: "Phone Covers",
    image: covers,
    price: 700,
  },
  {
    id: 2,
    title: "Wireless Mouse",
    image: wirelessMouse,
    price: 550,
  },
  {
    id: 3,
    title: "i12 Tws Earpods",
    image: i12,
    price: 800,
  },
  {
    id: 4,
    title: "Gaming Keyboard",
    image: gamingKeyboard,
    price: 2500,
  },
];
const Shop = () => {
  const { totalUniqueItems, items } = useCart();
  return (
    <section id="shop" className="shop">
      <div className="shop-header">
        <div>
          <h2>
            <FaShopify />
            Our Shop
          </h2>
        </div>
        <a href="/cart">
          <i>
            <FaShoppingBasket />
          </i>
          <span>{totalUniqueItems}</span>
        </a>
      </div>
      <h1>Top Featured Products</h1>
      <div className="items">
        {products.map((product) => (
          <ProductCard item={product} key={product.id} />
        ))}
      </div>
      <p className="shop-link">
        <a href="/shop" className="primary-btn">
          View All Products
        </a>
      </p>
      <div className="order">
        <div className="text">
          <h2>Order at the comfort of your home now!</h2>
          <h1>
            We will <span>deliver</span> it to you!
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias a
            laborum porro at illum perferendis quae? Deleniti, id? Temporibus,
            delectus?
          </p>
          <p>See our full product catalogue <a href="/shop">here.</a></p>
        </div>
        <img src={order} alt="" />
      </div>
    </section>
  );
};

export default Shop;
