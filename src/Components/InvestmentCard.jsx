import React from "react";

export default function InvestmentCard({
  image,
  imageAlt = "icon",
  title = "Title",
  description = "Description",
  onClick,
  className = "",
  isActive = false,
  showArrow = false,
  isRevealed = true,
  onArrowClick, //  add this
}) {
  if (!isRevealed) return null;

  return (
   <div
  className={`investment-card ${
    onClick ? "investment-card--clickable" : ""
  } ${className} ${isActive ? "investment-card--active" : ""}`}
  role={onClick ? "button" : undefined}
  tabIndex={onClick ? 0 : undefined}
  onClick={onClick}
  onKeyDown={(e) => {
    if (!onClick) return;
    if (e.key === "Enter" || e.key === " ") onClick();
  }}
>
  {/* CARD CONTENT */}
  <div className="investbg d-flex align-items-center gap-3 position-relative">
    <div className="investment-card__iconWrap">
      <img className="investment-card__icon" src={image} alt={imageAlt} />
    </div>

    <div className="investment-card__content">
      <h4 className="investment-card__title">{title}</h4>
      <p className="investment-card__desc">{description}</p>
    </div>
  </div>

  {/* OUTSIDE FULL-WIDTH ARROW BG */}
  {showArrow && (
    <div
      className="investment-card__arrow-wrap bg-secondary"
      role="button"
      tabIndex={0}
      onClick={(e) => {
        e.stopPropagation();
        onArrowClick?.();
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          e.stopPropagation();
          onArrowClick?.();
        }
      }}
    >
      <span className="investment-card__arrow" />
    </div>
  )}
</div>

  );
}
