import { FaShopify, FaShoppingBasket, FaShoppingCart } from "react-icons/fa";
import "./Shopping.css";
import ProductCard from "../../Utilities/cards/ProductCard";
import { useCart } from "react-use-cart";
import products from "./products";
import FooterComponent from "../footer/FooterComponent";

const Shopping = () => {
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
      <h1>Products Catalogue</h1>
      <div className="items">
        {products.map((product) => (
          <ProductCard item={product} key={product.id} />
        ))}
      </div>
      <a href="/" className="primary-btn">
        Back to home
      </a>
      <FooterComponent />
    </section>
  );
};

export default Shopping;
