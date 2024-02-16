import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import "./Card.css";

function Card(props) {
  let review = props.review;
  return (
    <div className="top-card">
      <div className="div-img">
        <img className="img" src={review.image} alt="abc" />
        <div className="img-shadow"></div>
      </div>
      <div className="div-para">
        <p className="para-name">{review.name}</p>
        <p className="para-job">{review.job}</p>
      </div>
      <div style={{ color: "#9370DB", margin: "auto", marginTop: "2rem" }}>
        <FaQuoteLeft />
      </div>
      <div style={{ textAlign: "center", color: "#5A6872" }}>
        <p>{review.text}</p>
      </div>
      <div style={{ color: "#9370DB", margin: "auto", marginTop: "5" }}>
        <FaQuoteRight />
      </div>
    </div>
  );
}

export default Card;
