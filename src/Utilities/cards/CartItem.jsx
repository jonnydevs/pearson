const CartItem = ({ item, updateItemQuantity, removeItem }) => {
  return (
    <div className="cart-item" style={{ marginLeft: 0 }}>
      <div className="cart-item-img">
        <img src={item.image} alt="" />
      </div>
      <h4>{item.title}</h4>
      <button
        className="cart-btn"
        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
      >
        -
      </button>
      <span>{item.quantity}</span>
      <button
        className="cart-btn"
        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
      >
        +
      </button>
      <span className="price">Ksh {item.price} </span>
      <button className="cart-btn" onClick={() => removeItem(item.id)}>
        &times;
      </button>
    </div>
  );
};

export default CartItem;
