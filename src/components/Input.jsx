import React from "react";
import cold2 from "../assets/cold2.jpg";
import warm2 from "../assets/warm2.jpg";

export default function Input() {
  return (
    <>
      <div className="overlay">
        <div className="container">
          <div className="section section__inputs">
            <input
              className="indent-4"
              name="city"
              type="text"
              placeholder="Enter City"
            />
            <button>°F</button>
          </div>
        </div>
      </div>
    </>
  );
}
