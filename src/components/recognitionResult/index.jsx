import React from "react";
import "./style.css";

const RecognitionResult = ({ data }) => {
  return (
    <div className="result">
      <p className="result-title">Recognition Results</p>
      <ul className="list">
        <p className="list-title">Food Family</p>
        {data.foodFamily.map((fm) => (
          <li className="list-item" key={fm.id}>
            <p>{fm.name}</p>
            <p>Accuracy: {Math.round(fm.prob.toFixed(2) * 100)}&#37;</p>
          </li>
        ))}
      </ul>
      <ul className="list">
        <p className="list-title">Food</p>
        {data.recognition_results.map((fm) => (
          <li className="list-item" key={fm.id}>
            <p>{fm.name}</p>
            <p>Accuracy: {Math.round(fm.prob.toFixed(2) * 100)}&#37;</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecognitionResult;
