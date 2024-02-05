// Child1.jsx

import React from "react";
import "./Child1.css";

function Child1({ image }) {
  return (
    <>
      <div className="show_box">
        <img src={image} alt="EV9" />
      </div>
    </>
  );
}

export default Child1;
