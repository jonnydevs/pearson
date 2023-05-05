import "./Shop.css";
import { FaShopify, FaShoppingBasket, FaShoppingCart } from "react-icons/fa";
import ProductCard from "../../Utilities/cards/ProductCard";
import { useCart } from "react-use-cart";
import covers from "/src/assets/covers.jpg";
import wirelessMouse from "/src/assets/wirelessMouse.jpg";
import i12 from "/src/assets/i12.jpg";
import gamingKeyboard from "/src/assets/gamingKeyboard.jpg";
import i12black from "/src/assets/i12black.jpg";
import gamingMouse from "/src/assets/gamingMouse.jpg";
import mouse from "/src/assets/mouse.jpg";
import gamingHeadphones from "/src/assets/gamingHeadphones.jpg";
import Headphones from "/src/assets/headphone.jpg";
import watch from "/src/assets/watch.jpg";
import iphoneCase from "/src/assets/iphoneCover.jpg";
import stickers from "/src/assets/sticker.jpg";
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
  {
    id: 5,
    title: "i12 Pods",
    image: i12black,
    price: 650,
  },
  {
    id: 6,
    title: "Gaming Headphones",
    image: gamingHeadphones,
    price: 1400,
  },
  {
    id: 7,
    title: "Iphone Case",
    image: iphoneCase,
    price: 1250,
  },
  {
    id: 8,
    title: "Watch",
    image: watch,
    price: 450,
  },
  {
    id: 9,
    title: "Gaming Mouse",
    image: gamingMouse,
    price: 700,
  },
  {
    id: 10,
    title: "Phone stickers",
    image: stickers,
    price: 300,
  },
  {
    id: 11,
    title: "Headphones",
    image: Headphones,
    price: 600,
  },
  {
    id: 12,
    title: "Mouse",
    image: mouse,
    price: 350,
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
    </section>
  );
};

export default Shop;
