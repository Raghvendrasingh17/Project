import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaShoppingCart } from "react-icons/fa"; // Cart icon
import { Content } from "../App";
import { toast } from "react-toastify";
import "./CartPage.css"; // CSS for animation
import Footer from "../Footer/foot";
import NavBar from "../Navbar/nav";

export default function CartPage() {
  const { cart, setCart } = useContext(Content);

  const [totalPrice, setTotalPrice] = useState(0);
  const [deliveryCost, setDeliveryCost] = useState(0);

  // Calculate total price and delivery cost whenever cart updates
  useEffect(() => {
    const itemsTotal = cart.reduce(
      (total, item) => total + Number(item.price || 0) * item.qty,
      0
    );
    setTotalPrice(itemsTotal);
    setDeliveryCost(cart.length * 35); // Example delivery cost per item
  }, [cart]);

  // Remove item from cart
  const removeItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    toast("Product removed!");
  };

  // Increment quantity
  const incrementQuantity = (item) => {
    if (item.qty >= 10) {
      toast.warn("Maximum quantity reached!");
      return;
    }

    const updatedCart = cart.map((cartItem) =>
      cartItem.product_name === item.product_name
        ? { ...cartItem, qty: cartItem.qty + 1 }
        : cartItem
    );
    setCart(updatedCart);
    toast("Quantity updated!");
  };

  // Decrement quantity
  const decrementQuantity = (item, index) => {
    if (item.qty === 1) {
      removeItem(index); // Automatically remove item if qty becomes less than 1
      return;
    }

    const updatedCart = cart.map((cartItem) =>
      cartItem.product_name === item.product_name
        ? { ...cartItem, qty: cartItem.qty - 1 }
        : cartItem
    );
    setCart(updatedCart);
    toast("Quantity updated!");
  };

  return (
    <>
    <NavBar/>
      <div className="cart-page container my-5">
        <h2 className="text-center mb-4">
          <FaShoppingCart /> Your Cart
        </h2>

        {cart.length === 0 ? (
          <p className="text-center text-secondary">Your cart is empty</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <thead className="thead-dark">
                <tr>
                  <th>Product Name</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td>{item.product_name}</td>
                    <td>
                      <img
                        src={
                          item.product_images?.[0]
                            ? Object.keys(item.product_images[0])[0]
                            : "https://via.placeholder.com/150"
                        }
                        className="img-fluid rounded"
                        width="100"
                        alt={item.product_name}
                      />
                    </td>
                    <td>₹{Number(item.price || 0).toFixed(2)}</td>
                    <td>
                      <div className="d-flex align-items-center justify-content-center">
                        <button
                          className="btn btn-danger btn-sm me-2"
                          onClick={() => decrementQuantity(item, index)}
                        >
                          -
                        </button>
                        <span>{item.qty}</span>
                        <button
                          className="btn btn-success btn-sm ms-2"
                          onClick={() => incrementQuantity(item)}
                          disabled={item.qty >= 10} // Disable button when qty is 10
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>₹{(Number(item.price || 0) * item.qty).toFixed(2)}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeItem(index)}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {cart.length > 0 && (
          <div className="text-end">
            <h4>Delivery Cost: ₹{deliveryCost.toFixed(2)}</h4>
            <h3>Grand Total: ₹{(totalPrice + deliveryCost).toFixed(2)}</h3>
            <button className="btn btn-primary btn-lg mt-3">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
      <Footer/>
    </>
  );
}
