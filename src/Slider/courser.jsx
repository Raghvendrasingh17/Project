import { useState, useEffect } from "react";
import style from "./courser.module.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export default function Slide() {
  const [index, setIndex] = useState(0);
  const [img] = useState([
    "images/176.jpg",
    "images/12.jpg",
    "images/011.jpg",
    "images/031.jpg",
    "images/21.jpg",
  ]);

  // Function to move to the previous image
  const back = () => {
    setIndex((prevIndex) => {
      let newIndex = prevIndex - 1;
      if (newIndex === -1) {
        newIndex = img.length - 1; // Loop to the last image
      }
      return newIndex;
    });
  };

  // Function to move to the next image
  const next = () => {
    setIndex((prevIndex) => {
      let newIndex = prevIndex + 1;
      if (newIndex === img.length) {
        newIndex = 0; // Loop to the first image
      }
      return newIndex;
    });
  };

  // Automatically change the image every 2 seconds
  useEffect(() => {
    const interval = setInterval(next, 2000); // Change image every 2 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="container">
      <div className={`row justify-content-center ${style.slider}`}>
        <div
          style={{
            width: "98%", // Adjust the width to your liking
            height: "470px", // Full height container
            backgroundSize: "cover", // Make the image cover the entire container
            backgroundPosition: "center", // Ensure the image is centered
            marginTop: "20px",
            backgroundImage: `url(${img[index]})`, // Dynamically change the image
            position: "relative", // Necessary for positioning icons
            border: "2px solid transparent", // Transparent border to apply animation
            borderRadius: "10px", // Rounded corners for the box
            animation: "borderAnimation 2s infinite", // Border animation
          }}
          className="position-relative"
        >
          <p className="position-absolute top-50 start-0 translate-middle-y ms-3">
            <ion-icon
              onClick={back}
              name="chevron-back-outline"
              style={{ fontSize: "2rem", color: "white" }}
            ></ion-icon>
          </p>
          <p className="position-absolute top-50 end-0 translate-middle-y me-3">
            <ion-icon
              onClick={next}
              name="chevron-forward-outline"
              style={{ fontSize: "2rem", color: "white" }}
            ></ion-icon>
          </p>
        </div>
      </div>
    </div>
  );
}
