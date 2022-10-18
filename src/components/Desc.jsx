import React from "react";
import { FaArrowUp, FaArrowDown, FaWind } from "react-icons/fa";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";
import { BiHappy } from "react-icons/bi";

const Desc = () => {
  return (
    <div className="section section__desc">
      <div className="card">
        <div className="desc__card--icon">
          <FaArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Desc;
