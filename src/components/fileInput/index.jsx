import React from "react";

const FileInput = ({ onFileChange }) => {
  return (
    <div>
      <input type="file" onChange={onFileChange} />
    </div>
  );
};

export default FileInput;
