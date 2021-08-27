import React from "react";
import "./DropDown.css";
import { BsChevronDown } from "react-icons/bs";

const Dropdown = ({ isWhite }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div className="dropdown">
        <button
          className={isWhite ? "dropbtn dropbtn-white" : "dropbtn dropbtn-red"}
        >
          Use Cases <BsChevronDown />
        </button>
        <div className="dropdown-content">
          <p>Restaurant</p>
          <p>Hotel</p>
          <p>Cafe & Backery</p>
          <p>Coffee Shop</p>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
