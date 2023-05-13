import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";



const SpecialProduct = () => {
  const [timer, setTimer] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [showProduct, setShowProduct] = useState(true);

  useEffect(() => {
    const endDate = new Date("2023-05-14");
    const interval = setInterval(() => {
      const now = new Date();
      const timeDifference = endDate.getTime() - now.getTime();
      if (timeDifference <= 0) {
        
        clearInterval(interval);
        setShowProduct(false);
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        setTimer({ days, hours, minutes, seconds });
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  if (!showProduct) {
    return null; 
  }

  return (
    <div className="col-6 mb-3">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
        
            <img src="images/watch.jpg" className="img-fluid" alt="watch" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Havels</h5>
            <h6 className="title">Samsung Galaxy Note10+ Mobile Phone; Sim...</h6>
            <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700" />
            <p className="price">
              <span className="red-p">₱10000</span> &nbsp; <strike>₱20000</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>{timer.days}</b> days
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-3 bg-danger">{timer.hours}</span>:
                <span className="badge rounded-circle p-3 bg-danger">{timer.minutes}</span>:
                <span className="badge rounded-circle p-3 bg-danger">{timer.seconds}</span>
              </div>
            </div>
            <div className="prod-count my-3">
              <p>Products: 5</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <Link className="button">Add to Cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
};



export default SpecialProduct;
