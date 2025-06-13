import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ecommerce.css";
import { Watches, Perfumes, Clothing, Jackets, Sneaker } from "./Dataa";
import { toast, ToastContainer } from "react-toastify";
import { Content } from '../App';

export default function Product() {
  const [products, setProducts] = useState([]);
  const [displayCount, setDisplayCount] = useState(20);

  // Cart context
  const { cart, setCart } = useContext(Content);

  // Load products and assign unique IDs if needed
  useEffect(() => {
    const combinedProducts = [
      ...(Watches || []),
      ...(Perfumes || []),
      ...(Clothing || []),
      ...(Jackets || []),
      ...(Sneaker || []),
    ];

    const productsWithId = combinedProducts.map((product, index) => ({
      ...product,
      id: product.id || index + 1, // Add unique ID if missing
    }));

    const shuffledProducts = productsWithId.sort(() => Math.random() - 0.5);
    setProducts(shuffledProducts);
  }, []);

  // Handle "Load More" functionality
  const handleLoadMore = () => {
    setDisplayCount((prevCount) => prevCount + 20);
  };

  // Add product to cart
  const addToCart = (item) => {
    // Check if product exists in the cart using `id`
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex >= 0) {
      // Update quantity if product exists
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].qty += 1;
      setCart(updatedCart);
      toast("Quantity updated.....!");
    } else {
      // Add new product to the cart
      const newItem = { ...item, qty: 1 };
      setCart([...cart, newItem]);
      toast("Product added to cart successfully...!");
    }
  };

  return (
    <>
      <div className="container my-5">
        <div className="row">
          {products.slice(0, displayCount).map((item) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={item.id}>
              <div className="card product-card h-100">
                <div className="image-container">
                  <Link to={`/ProductDetail/${item.id}`} state={{ product: item }}>
                    <img
                      src={
                        item.product_images?.[0]
                          ? Object.keys(item.product_images[0])[0]
                          : "https://via.placeholder.com/150"
                      }
                      className="card-img-top fixed-image"
                      alt={item.product_name}
                    />
                  </Link>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.product_name}</h5>
                  <p className="card-text">{item.details?.slice(0, 50)}...</p>
                  <p className="card-text text-success">Price: ₹{item.price || 0}</p>
                  <button className="btn btn-primary mt-auto" onClick={() => addToCart(item)}>
                    Add to Cart 
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {displayCount < products.length && (
          <div className="text-center">
            <button className="btn btn-outline-primary" onClick={handleLoadMore}>
              Load More
            </button>
          </div>
        )}
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
    </>
  );
}
