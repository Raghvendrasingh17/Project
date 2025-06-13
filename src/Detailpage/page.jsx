import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaCheckCircle, FaInfoCircle, FaExclamationCircle } from "react-icons/fa"; // Import icons
import "./Detail.css";
import NavBar from "../Navbar/nav";
import Footer from "../Footer/foot";
import { Content } from "../App";
import { toast, ToastContainer } from "react-toastify";

export default function ProductDetail() {
  const location = useLocation();
  const { product } = location.state || {};

  // Cart add product
  const { cart, setCart } = useContext(Content);

  // Add product to cart
  const addToCart = (product) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === product.id);

    if (existingItemIndex >= 0) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].qty += 1;
      setCart(updatedCart);
      toast("Quantity updated.....!");
    } else {
      const newItem = { ...product, qty: 1 };
      setCart([...cart, newItem]);
      toast("Product added to cart successfully...!");
    }
  };

  // Default image setup
  const defaultImage =
    product?.product_images?.[0]
      ? Object.keys(product.product_images[0])[0]
      : "https://via.placeholder.com/400";

  // State for Main Image
  const [mainImage, setMainImage] = useState(defaultImage);

  // Function to Handle Thumbnail Click
  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <>
      <NavBar />
      <div className="product-detail">
        <div className="product-container">
          {/* Product Image Section */}
          <div className="product-images">
            <img src={mainImage} alt="Main Product" className="main-image" />

            <div className="thumbnail-container">
              {product?.product_images?.map((imgObj, index) => {
                const imgUrl = Object.keys(imgObj)[0];
                return (
                  <img
                    key={index}
                    src={imgUrl}
                    alt={`Thumbnail ${index + 1}`}
                    className="thumbnail"
                    onClick={() => handleThumbnailClick(imgUrl)}
                  />
                );
              })}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="product-info">
            <h1 style={{ color: "black", fontWeight: "bold" }}>
              {product?.product_name || "Product Name Not Available"}
            </h1>

            <p className="rating" style={{ color: "green", fontWeight: "bold" }}>
              ⭐ {product?.rating || "4.5"} | {product?.reviews || "1,200 Reviews"}
            </p>

            <p className="price" style={{ color: "black", fontWeight: "bold" }}>
              ₹{product?.price || "12,999"}{" "}
              {product?.original_price && (
                <>
                  <span className="original-price">₹{product.original_price}</span>{" "}
                  <span className="discount">{product.discount || "13% off"}</span>
                </>
              )}
            </p>

            <p className="offer">{product?.offers || "Extra ₹1,000 off on exchange"}</p>

            <p className="product-type">Type: {product?.Type || "Not Available"}</p>
            <p className="gender">Gender: {product?.Gender || "Unisex"}</p>

            {product?.highlights && (
              <div className="highlights">
                <h3>Highlights</h3>
                <ul>
                  {product.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Buttons */}
            <div className="buttons">
              <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
              <button className="buy-now">Buy Now</button>
            </div>

            {/* Terms and Conditions Section */}
            <div className="terms">
              <h3>Terms & Conditions</h3>
              <ul>
                <li>
                  <FaCheckCircle style={{ color: "green" }} /> Product availability may vary based on location.
                </li>
                <li>
                  <FaInfoCircle style={{ color: "#007bff" }} /> Prices are subject to change without prior notice.
                </li>
                <li>
                  <FaExclamationCircle style={{ color: "#f0ad4e" }} /> For returns, please refer to our return policy.
                </li>
                <li>
                  <FaCheckCircle style={{ color: "" }} /> By purchasing, you agree to the terms of service.
                </li>
                <li>
                  <FaCheckCircle style={{ color: "pink" }} /> All product descriptions and prices are accurate to the best of knowledge.
                </li>
                <li>
                  <FaInfoCircle style={{ color: "red" }} /> We may cancel orders due to stock unavailability or payment issues.
                </li>
                <li>
                  <FaExclamationCircle style={{ color: "yellowgreen" }} /> For returns, please refer to our return policy.
                </li>
                <li>
                  <FaCheckCircle style={{ color: "orange" }} /> E-Shop is not liable for any indirect or consequential losses.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={700}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Footer />
    </>
  );
}
