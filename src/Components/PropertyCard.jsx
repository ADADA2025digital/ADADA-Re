import React from "react";

export default function PropertyCard({
  image,
  status = "House For Sale",
  title = "Lorem ipsum",
  description = "There are many variations of passages of Lorem Ipsum",
  price = 100000,
  onClick,

  /* 🔹 Variant */
  variant = "default", // "sell" | "rent" | "default"

  /* 🔹 Common details */
  beds,
  baths,
  parking,
  area,
  propertyType,
  featured = false,
}) {
  const formattedPrice =
    typeof price === "number"
      ? price.toLocaleString(undefined, {
          style: "currency",
          currency: "USD",
        })
      : price;

  return (
    <div
      className={`property-card d-flex flex-column m-md-3 bg-white property-card--${variant}`}
      role="button"
      tabIndex={0}
      onClick={onClick}
    >
      {/* Image */}
      <div className="property-card__imgWrap">
        <img
          className="property-card__img object-fit-cover d-block"
          src={image}
          alt={title}
        />
      </div>

      {/* Body */}
      <div className="property-card__body bg-white p-3 d-flex flex-column flex-grow-1 ">
        <div className="property-card__meta d-flex align-items-center justify-content-between mb-2">
          <span className="property-card__status fw-bold text-secondary">
            {status}
          </span>
        </div>

        <h3 className="property-card__title text-black mb-2 fs-5 fw-bold">
          {title}
        </h3>

        <p className="property-card__desc text-secondary lh-sm m-0 flex-grow-1">
          {description}
        </p>

        {/* 🔥 SELL CARD DETAILS */}
        {variant === "sell" && (
          <div className="property-card__details">
            <span>{beds} Bed</span>
            <span>{baths} Bath</span>
            <span>{parking} Parking</span>
            {area && <span>{area} sqft</span>}
            {propertyType && <span>{propertyType}</span>}
          </div>
        )}

        {/* 🔥 RENT CARD DETAILS */}
        {variant === "rent" && (
          <div className="property-card__details">
            <span>{beds} Bed</span>
            <span>{baths} Bath</span>
            <span>{parking} Parking</span>
          </div>
        )}

        {/* Footer */}
        <div className="property-card__footer d-flex justify-content-end mt-3 ">
          <span className="property-card__price fs-5 fw-bold text-dark ">
            {formattedPrice}
            {variant === "rent" && <small> / week</small>}
          </span>
        </div>
      </div>
    </div>
  );
}
