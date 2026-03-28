// Q3: Shopping Cart
// Build your solution here

import { useState } from "react";

export default function ShoppingCart() {
  const products = [
    { id: 1, name: "Wireless Mouse", price: 599 },
    { id: 2, name: "Mechanical Keyboard", price: 1499 },
    { id: 3, name: "USB-C Hub", price: 899 },
    { id: 4, name: "Monitor Stand", price: 1299 },
    { id: 5, name: "Webcam HD", price: 1999 },
    { id: 6, name: "Laptop Sleeve", price: 499 },
    { id: 7, name: "Desk Lamp", price: 749 },
    { id: 8, name: "Mouse Pad XL", price: 349 },
    { id: 9, name: "Bluetooth Speaker", price: 1199 },
    { id: 10, name: "Phone Stand", price: 299 },
  ];
  const [cart, setCart] = useState<
    { id: number; name: string; price: number; quantity: number }[]
  >([]);

  const handleAddtoCart = (id: number) => {
    const exist = cart.find((val) => val.id === id);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      );
    } else {
      const product = products.find((p) => p.id === id);
      if (product) {
        setCart([...cart, { ...product, quantity: 1 }]);
      }
    }
  };

  const handleIncrease = (id: number) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const handleDecrease = (id: number) => {
    const item = cart.find((i) => i.id === id);
    if (item && item.quantity === 1) {
      setCart(cart.filter((i) => i.id !== id));
    } else {
      setCart(
        cart.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i,
        ),
      );
    }
  };

  const handleRemove = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-info">
              <span className="product-name">{product.name}</span>
              <span className="product-price">₹{product.price}</span>
            </div>
            <button
              className="todo-add-btn"
              onClick={() => handleAddtoCart(product.id)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="cart-section">
        <h3>Cart ({cart.length} items)</h3>

        {cart.length === 0 && (
          <p className="todo-empty">Your cart is empty</p>
        )}

        {cart.length > 0 && (
          <>
            <ul className="cart-list">
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <span className="cart-item-name">{item.name}</span>
                    <span className="cart-item-price">₹{item.price} each</span>
                  </div>
                  <div className="cart-item-actions">
                    <button className="qty-btn" onClick={() => handleDecrease(item.id)}>-</button>
                    <span className="qty-value">{item.quantity}</span>
                    <button className="qty-btn" onClick={() => handleIncrease(item.id)}>+</button>
                    <button className="todo-delete-btn" onClick={() => handleRemove(item.id)}>Remove</button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-total">
              <span>Total:</span>
              <span className="cart-total-price">₹{total}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
