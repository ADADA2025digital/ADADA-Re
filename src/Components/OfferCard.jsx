import React from "react";

export default function OfferCard({
  image,
  title = "Lorem ipsum",
  description = "There are many variations of passages of Lorem Ipsum",
  imageAlt = "Offer image",
  onClick,
}) {
  return (
    <div
      className="offerCard"
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={(e) => {
        if (!onClick) return;
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
    >
      <div className="offerCard__inner">
        <div className="offerCard__img">
          <img src={image} alt={imageAlt} />
        </div>

        <div className="offerCard__body text-center">
          <h6 className="offerCard__title mb-1">{title}</h6>
          <p className="offerCard__desc mb-0">{description}</p>
        </div>
      </div>
    </div>
  );
}
