import React from "react";
import { FaArrowUp, FaArrowDown, FaWind } from "react-icons/fa";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";
import { BiHappy } from "react-icons/bi";
import "./Desc.css";

const Desc = () => {
  return (
    <div className="section section__desc">
      <div className="card">
        <div className="desc__card--icon">
          <FaArrowDown />
          <small>min</small>
        </div>
        <h2>32 °C</h2>
      </div>
      <div className="card">
        <div className="desc__card--icon">
          <FaArrowDown />
          <small>min</small>
        </div>
        <h2>32 °C</h2>
      </div>
      <div className="card">
        <div className="desc__card--icon">
          <FaArrowDown />
          <small>min</small>
        </div>
        <h2>32 °C</h2>
      </div>
      <div className="card">
        <div className="desc__card--icon">
          <FaArrowDown />
          <small>min</small>
        </div>
        <h2>32 °C</h2>
      </div>
      <div className="card">
        <div className="desc__card--icon">
          <FaArrowDown />
          <small>min</small>
        </div>
        <h2>32 °C</h2>
      </div>
    </div>
  );
};

export default Desc;
