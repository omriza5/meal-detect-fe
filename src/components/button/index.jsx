import React from "react";

const Button = ({ value, onBtnClick }) => {
  return (
    <div>
      <input type="submit" onClick={onBtnClick} value={value} />
    </div>
  );
};

export default Button;
