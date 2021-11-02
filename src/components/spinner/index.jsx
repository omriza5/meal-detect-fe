import React from "react";
import "./style.css";

const Spinner = ({ extraStyle }) => {
  return <div className="loader" style={extraStyle}></div>;
};

export default Spinner;
