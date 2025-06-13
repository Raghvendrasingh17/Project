import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./about.css";
import NavBar from "../Navbar/nav";

export default function About1() {
  return (
    <>
    <NavBar/>
      {/* Existing About Section */}
      <div className="butterfly-background">
        <div className="butterfly"></div>
        <div className="butterfly"></div>
        <div className="butterfly"></div>
        <div className="butterfly"></div>
        <div className="butterfly"></div>
        <div className="butterfly"></div>
      </div>

      <section id="about" className="about-section py-5">
        <div className="container text-center">
          <motion.h2
            className="section-title mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            About Us
          </motion.h2>
          <div className="row">
            <div className="col-md-6">
              <div className="about-text">
                <motion.h3
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  Our Story
                </motion.h3>
                <p>
                  We are a dynamic team of skilled developers, designers, and
                  problem-solvers, committed to crafting seamless and intuitive
                  digital experiences. Our mission is to turn visionary ideas
                  into cutting-edge, scalable solutions that drive success.
                </p>
                <p>
                  Our expertise spans across the full-stack development
                  spectrum—ranging from back-end architecture to front-end
                  design. With a deep understanding of modern frameworks and
                  technologies, we specialize in building robust, user-centric
                  applications that perform flawlessly across platforms. Our
                  team also excels in UI/UX design, ensuring that every
                  interaction is not only functional but also visually
                  captivating. From creating high-performing websites to
                  intuitive mobile applications, we have the diverse skill set
                  and passion to bring your digital product to life.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <motion.div
                className="about-image"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <img
                  src="https://creatorspace.imgix.net/users/cm3pjxufi01q7sh01ynhsq5x2/EOSiOL6FX9d5kLs9-SAVE_20230627_225321.jpg?w=550&h=600"
                  alt="About Image"
                  className="img-fluid rounded shadow-lg "
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section bg-dark text-light py-5">
        <div className="container">
          <div className="row">
            {/* About Us */}
            <div className="col-md-4">
              <motion.h4
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="mb-3"
              >
                About Us
              </motion.h4>
              <p>
                We are a team of passionate developers dedicated to building
                beautiful and functional digital solutions. Join us on our
                journey to make the web a better place!
              </p>
            </div>

            {/* Newsletter Subscription */}
            <div className="col-md-4">
              <motion.h4
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="mb-3"
              >
                Subscribe to Our Newsletter
              </motion.h4>
              <form className="d-flex flex-column">
                <input
                  type="email"
                  className="form-control mb-2"
                  placeholder="Enter your email"
                  required
                />
                <motion.button
                  className="btn btn-primary"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Subscribe
                </motion.button>
              </form>
            </div>

            {/* Quick Links */}
            <div className="col-md-4">
              <motion.h4
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="mb-3"
              >
                Quick Links
              </motion.h4>
              <ul className="list-unstyled">
                <motion.li
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="mb-2"
                >
                  <a href="#about" className="text-light text-decoration-none">
                    About Us
                  </a>
                </motion.li>
                <motion.li
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="mb-2"
                >
                  <a href="#services" className="text-light text-decoration-none">
                    Services
                  </a>
                </motion.li>
                <motion.li
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="mb-2"
                >
                  <a href="#team" className="text-light text-decoration-none">
                    Our Team
                  </a>
                </motion.li>
                <motion.li
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="mb-2"
                >
                  <a href="#contact" className="text-light text-decoration-none">
                    Contact Us
                  </a>
                </motion.li>
              </ul>
            </div>
          </div>
          <hr className="border-light my-4" />
          <div className="text-center">
            <p className="mb-0">
              © {new Date().getFullYear()} Your Company. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
