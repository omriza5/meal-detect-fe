import React from "react";
import "./style.css";

const Button = ({ value, onBtnClick, disabled }) => {
  return (
    <div>
      <input
        className="btn"
        type="submit"
        onClick={onBtnClick}
        value={value}
        disabled={disabled}
      />
    </div>
  );
};

export default Button;
