import React from "react";

const Heading = ({
  firstText,
  secondText,
  firstColor = "#ffffff",
  secondColor = "#ff4d2d",
  align = "",
  className = "",
}) => {
  return (
    <h2
      className={`fw-bold mb-4 text-${align} ${className}`}
      style={{
        fontFamily: "'Rammetto One', cursive",
      }}
    >
      <span style={{ color: firstColor }}>{firstText} </span>
      <span style={{ color: secondColor }}>{secondText}</span>
    </h2>
  );
};

export default Heading;
