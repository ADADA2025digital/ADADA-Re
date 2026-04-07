import React from "react";

export default function IconWithText({
  icon,
  title,
  description,
  className = "",
  iconClass = "",
  titleClass = "",
  descClass = "",
  onClick,
}) {
  return (
    <div
      className={`icon-with-text d-flex align-items-center gap-3 ${className}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
    >
      {/* Icon */}
      <div className={`icon-with-text__icon ${iconClass}`}>
        {typeof icon === "string" ? (
          <img src={icon} alt={title} />
        ) : (
          icon
        )}
      </div>

      {/* Text */}
      <div className="icon-with-text__content">
        <h5 className={`icon-with-text__title mb-1 ${titleClass}`}>
          {title}
        </h5>
        <p className={`icon-with-text__desc mb-0 ${descClass}`}>
          {description}
        </p>
      </div>
    </div>
  );
}
