import React from "react";

export default function AboutMiniCard({ image, title, description }) {
  return (
    <div className="about-mini-card">
      <div className="about-mini-card__imgWrap">
        <img src={image} alt={title} className="about-mini-card__img" />
      </div>

      <div className="about-mini-card__body text-center">
        <h6 className="about-mini-card__title mb-1">{title}</h6>
        <p className="about-mini-card__desc mb-0">{description}</p>
      </div>
    </div>
  );
}
