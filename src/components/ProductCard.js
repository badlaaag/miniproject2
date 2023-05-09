import React from 'react'
import ReactStars from "react-rating-stars-component";

const ProductCard = () => {
  return (
    <div className="col-3">
        <div className="product-card">
            <div className="product-image">
                <img src="images/watch.jpg" alt="product image" />
            </div>
            <div className="product-details">
                <h6 className="brand">Smart Watch</h6>
                <h5 className="product-title">lorem ipsum</h5>
                <ReactStars
                    count={5}   
                    size={24}
                    activeColor="#ffd700"
                />
                <p className="price">P1000.00</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard