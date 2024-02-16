import React from "react";
import "./App.css";
import Testimonial from "./components/Testimonial";
import reviews from "./components/data";

function App() {
  return (
    <div className="App">
      <div className="div">
        <h1 className="h1">Our Testimonials</h1>
        <div className="underline"></div>
        <Testimonial reviews={reviews} />
      </div>
    </div>
  );
}

export default App;
