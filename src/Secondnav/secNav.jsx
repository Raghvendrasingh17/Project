import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './category.css'; // Custom CSS for the animation effect

export default function Category() {
  return (
    <div className="container my-5">
      {/* Category Row */}
      <div className="row">
        {/* Category 1 - Fashion */}
        <div className="col-lg-2 col-md-4 col-sm-6 text-center">
          <div className="category-card">
            <img 
              src="https://th.bing.com/th/id/OIP.RzvEQfuD-ZFm2s7D8qdahgHaLH?w=203&h=304&c=7&r=0&o=5&pid=1.7"
              alt="Fashion" 
              className="img-fluid mb-2 category-image"
            />
            <h5 className="font-weight-bold">Fashion</h5> {/* Bold text */}
          </div>
        </div>

        {/* Category 2 - Mobile */}
        <div className="col-lg-2 col-md-4 col-sm-6 text-center">
          <div className="category-card">
            <img 
              src="https://th.bing.com/th/id/OIP.AJnbmhig7IJByp5qAt5BMQHaEM?rs=1&pid=ImgDetMain"
              alt="Mobile" 
              className="img-fluid mb-2 category-image"
            />
            <h5 className="font-weight-bold">Sports</h5> {/* Bold text */}
          </div>
        </div>

        {/* Category 3 - Electronics */}
        <div className="col-lg-2 col-md-4 col-sm-6 text-center">
          <div className="category-card">
            <img 
              src="https://th.bing.com/th/id/OIP.oAIeK5EOxaqJMPBER0naggHaIP?w=166&h=184&c=7&r=0&o=5&pid=1.7"
              alt="Electronics" 
              className="img-fluid mb-2 category-image"
            />
            <h5 className="font-weight-bold">Electronics</h5> {/* Bold text */}
          </div>
        </div>

        {/* Category 4 - Home & Kitchen */}
        <div className="col-lg-2 col-md-4 col-sm-6 text-center">
          <div className="category-card">
            <img 
              src="https://th.bing.com/th/id/OIP.KbddGwAkYzzlXzQobE4xfAAAAA?pid=ImgDet&w=203&h=203&c=7"
              alt="Home & Kitchen" 
              className="img-fluid mb-2 category-image"
            />
            <h5 className="font-weight-bold">Home & Kitchen</h5> {/* Bold text */}
          </div>
        </div>

        {/* Category 5 - Books */}
        <div className="col-lg-2 col-md-4 col-sm-6 text-center">
          <div className="category-card">
            <img 
              src="https://th.bing.com/th/id/OIP.PJ0PyRXOXD-2gqlfs4RG-wHaHa?w=194&h=194&c=7&r=0&o=5&pid=1.7"
              alt="Books" 
              className="img-fluid mb-2 category-image"
            />
            <h5 className="font-weight-bold">Books</h5> {/* Bold text */}
          </div>
        </div>

        {/* Category 6 - Beauty */}
        <div className="col-lg-2 col-md-4 col-sm-6 text-center">
          <div className="category-card">
            <img 
              src="https://th.bing.com/th/id/OIP.0-1WWvkfLcrJT5e0pXN69QHaGe?w=222&h=194&c=7&r=0&o=5&pid=1.7"
              alt="Beauty" 
              className="img-fluid mb-2 category-image"
            />
            <h5 className="font-weight-bold">Health & Beauty</h5> {/* Bold text */}
          </div>
        </div>
      </div>
    </div>
  );
}
