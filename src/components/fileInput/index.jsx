import React from "react";
import "./style.css";

const FileInput = ({ onFileChange }) => {
  return (
    <div className="fileInput">
      <input type="file" id="file" onChange={onFileChange} accept="image" />
      <label htmlFor="file">Choose a photo</label>
    </div>
  );
};

export default FileInput;
