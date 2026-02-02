import React from "react";

export default function SupportCard({
  image,
  imageAlt = "Support",
  title = "Ongoing Assistance",
  description = "We begin with a thorough consultation to understand your specific goals, needs, and preferences. This allows us to tailor our approach to your unique situation.",
  description2 = "Your aspirations are our priority, ensuring we align with your vision from the outset. This allows us to tailor our approach to your unique situation.",
  onClick,
  className = "",
}) {
  return (
    <div
      className={`support-card ${onClick ? "support-card--clickable" : ""} ${className}`}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={(e) => {
        if (!onClick) return;
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
    >
      {/* Image */}
      <div className="support-card__imgWrap">
        <img className="support-card__img" src={image} alt={imageAlt} />
      </div>

      {/* Body */}
      <div className="support-card__body">
        <h3 className="support-card__title">{title}</h3>

        <p className="support-card__desc">{description}</p>

        {description2 ? <p className="support-card__desc">{description2}</p> : null}
      </div>
    </div>
  );
}
