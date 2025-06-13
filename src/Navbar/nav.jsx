import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa"; // Import the icons
import { Link, useNavigate } from "react-router-dom";
import { Perfumes, Clothing, Sneaker, Watches, Jackets } from './dummy';
import { useState } from "react";

export default function NavBar() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const categories = {
    Perfumes: Perfumes,
    Clothing: Clothing,
    Sneaker: Sneaker,
    Watches: Watches,
    Jackets: Jackets,
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      updateSuggestions(value);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleInputFocus = () => {
    if (query) {
      updateSuggestions(query);
    }
  };

  const handleBlur = () => {
    setTimeout(() => setShowSuggestions(false), 100);
  };

  const updateSuggestions = (value) => {
    const filteredSuggestions = [];

    Object.keys(categories).forEach((category) => {
      const items = categories[category]
        .filter((item) =>
          item.product_name.toLowerCase().includes(value.toLowerCase())
        )
        .map((item) => {
          const imageObj = item.product_images && item.product_images[0];
          const imageUrl = imageObj ? Object.keys(imageObj)[0] : null;
          return {
            category,
            name: item.product_name,
            image: imageUrl,
            id: item.id, // Assuming each item has a unique id
            details: item, // Save the full item details here
          };
        });

      filteredSuggestions.push(...items);
    });

    // Limit suggestions to 5 items
    const limitedSuggestions = filteredSuggestions.slice(0, 5);
    setSuggestions(limitedSuggestions);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (product) => {
    // Pass the product details to the /ProductDetail page
    navigate(`/`, { state: { product } });
    setShowSuggestions(false);
  };

  return (
    <>
      <Navbar bg="light" expand="lg" style={{ marginTop: '15px', backgroundColor: '#f1f1f1' }}>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.7LkcE4ik6Nzrs70EnL4vFwHaFj&pid=Api&P=0&h=180"              alt="Logo"
              style={{ height: '90px', width: 'auto', mixBlendMode: "darken" }}
            />
            <h2 className="text-black font-bold text-2xl flex justify-center items-center text-black"></h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/about">About</Link>
              <NavDropdown title="Category" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/man">Men's</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/man">Kids'</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/man">Women's</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={query}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleBlur}
              />
              {showSuggestions && (
                <div className="suggestions-container" style={{
                  position: "absolute",
                  backgroundColor: "white",
                  width: "550px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  zIndex: 100,
                  marginTop: "50px",
                  borderRadius: "8px",
                  maxHeight: "250px",
                  overflowY: "auto",
                  marginLeft: "-180px"
                }}>
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="suggestion-item"
                      onClick={() => handleSuggestionClick(suggestion.details)}  // Passing full product details
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '12px',
                        cursor: 'pointer',
                        borderBottom: '1px solid #f1f1f1',
                      }}>
                      {suggestion.image && (
                        <img
                          src={suggestion.image}
                          alt={suggestion.name}
                          style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            marginRight: '12px',
                          }}
                        />
                      )}
                      <span style={{ fontSize: '16px' }}>{suggestion.name}</span>
                    </div>
                  ))}
                </div>
              )}
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav>
              <Link className="nav-link" to="/cart">
                <FaShoppingCart className="me-1" /> Cart
              </Link>
              <Link className="nav-link" to="/login">
                <FaUser className="me-1" /> Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
