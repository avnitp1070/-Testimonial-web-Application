import React from "react";
import Card from "./Card";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useState } from "react";

function Testimonial(props) {
  let reviews = props.reviews;

  const [index, setIndex] = useState(0);
  function surpriseHandler() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }
  function leftShiftHandler() {
    let newIndex = index - 1;
    if (newIndex < 0) {
      newIndex = reviews.length - 1;
    }
    setIndex(newIndex);
  }

  function rightShiftHandler() {
    let newIndex = index + 1;
    if (newIndex === reviews.length) {
      newIndex = 0;
    }
    setIndex(newIndex);
  }

  return (
    <div className="testimonial">
      <Card review={reviews[index]}></Card>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "1.875rem",
          marginTop: "2.5rem",
          gap: "0.75rem",
          color: "#9F7AEA",
          fontWeight: "bold",
          margin: "auto",
        }}
      >
        <button
          onClick={leftShiftHandler}
          style={{
            cursor: "pointer",
            color: "#9F7AEA",
            fontWeight: "bold",
            ":hover": {
              color: "violet",
            },
          }}
        >
          <FiChevronLeft size={20} />
        </button>
        <button
          onClick={rightShiftHandler}
          style={{
            cursor: "pointer",
            color: "#9F7AEA",
            fontWeight: "bold",
            ":hover": {
              color: "violet",
            },
          }}
        >
          <FiChevronRight size={20} />
        </button>
      </div>

      <div style={{ marginTop: "1.5rem" }}>
        <button onClick={surpriseHandler} className="myButton">
          Surprise Me
        </button>
      </div>
    </div>
  );
}

export default Testimonial;
