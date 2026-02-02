import React from "react";

const Button = ({
  text = "",
  onClick,
  backgroundColor = "#ff4d2d",
  textColor = "#ffffff",
  className = "",
  type = "button",
  icon,
  ...rest // ✅ IMPORTANT: catch data-bs-* and any extra props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`custom-btn d-inline-flex align-items-center gap-2 ${className}`}
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
      }}
      {...rest} // ✅ IMPORTANT: forward to button
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
