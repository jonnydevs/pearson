// import { Modal } from "react-bootstrap";
import { useCart } from "react-use-cart";
import CartItem from "../../Utilities/cards/CartItem";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./Cart.css";
import FooterComponent from "../footer/FooterComponent";

const CartComponent = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
  } = useCart();
  return (
    <>
      {isEmpty ? (
        <div
          className="cart"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "30px",
            padding: "50px",
            textAlign: "center",
          }}
        >
          <h1>Your cart is empty! </h1>
          <p>
            Click
            <Link
              to="/shop"
              style={{ color: "rgb(163, 30, 30)", margin: "0 7px" }}
            >
              here
            </Link>
            to continue shopping.
          </p>
        </div>
      ) : (
        <div className="cart">
          <div className="cart-list">
            <div className="cart-title">
              <h1>Shopping Cart</h1>
              <span>{totalUniqueItems} items</span>
            </div>

            <div>
              {items.map((item) => (
                <CartItem
                  item={item}
                  key={item.id}
                  updateItemQuantity={updateItemQuantity}
                  removeItem={removeItem}
                />
              ))}
            </div>
            <div
              style={{ height: "70px", display: "flex", alignItems: "center" }}
            >
              <Link
                to="/shop"
                style={{ color: "#333", display: "flex", gap: "10px" }}
              >
                <FaArrowLeft />
                Continue Shopping
              </Link>
            </div>
          </div>
          <div className="checkout">
            <h2
              className="cart-title summary"
              style={{ borderBottom: "1px solid #555", textAlign: "center" }}
            >
              Summary
            </h2>
            <div className="checkout-desc">
              <h3>Total items {totalUniqueItems}</h3>
              {items.map((item) => (
                <div
                  className="item-summary"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "70%",
                    padding: "20px 0",
                  }}
                  key={item.id}
                >
                  <p>{item.title}</p>
                  <p>&times; {item.quantity}</p>{" "}
                  <p>Total = {(item.quantity * item.price).toFixed(2)}</p>
                </div>
              ))}
            </div>
            <div className="total">
              <h2>Total Price</h2>
              <h2>$ {cartTotal.toFixed(2)}</h2>
            </div>
            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      )}
      <FooterComponent />
    </>
  );
};

export default CartComponent;
