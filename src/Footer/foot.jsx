import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./footer.css"; // Updated styles

export default function Footer() {
  return (
    <footer className="footer-container">
      {/* Background Animation */}
      <div className="background-animations">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>

      {/* Footer Content */}
      <div className="footer-content container text-center text-light py-3">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="footer-title mb-3"
        >
          Stay Connected
        </motion.h2>
        <p className="footer-description mb-3">
          Follow us on social media and stay updated with the latest news and updates.
        </p>

        {/* Social Media Icons */}
        <div className="social-icons d-flex justify-content-center gap-4">
          <motion.a
            href="https://github.com/Raghvendrasingh17"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="social-icon colorful"
          >
            <FaGithub size={30} />
          </motion.a>
          <motion.a
            href="https://bento.me/raghvendrasingh"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="social-icon colorful"
          >
            <FaLinkedin size={30} />
          </motion.a>
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="social-icon colorful"
          >
            <FaTwitter size={30} />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/yash_singh_rajpoot958?igsh=bTJlcmoycnFmNnNw"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="social-icon colorful"
          >
            <FaInstagram size={30} />
          </motion.a>
        </div>

        <hr className="footer-divider my-3" />
        <p className="footer-note">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
