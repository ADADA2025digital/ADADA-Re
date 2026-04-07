import React from "react";

export default function FeaturedArticleCard({
  image,
  imageAlt = "Featured article",
  description,
  onClick,
}) {
  return (
    <div
      className={` h-100  bg-transparent`}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={(e) => {
        if (!onClick) return;
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
      style={{
     
   
        overflow: "hidden",
      }}
    >
      {/* Image */}
      <img
        src={image}
        alt={imageAlt}
        className="w-100"
        style={{ height: "200px", objectFit: "cover" }}
      />

      {/* Description */}
      <div className="bg-white p-3">
        <p className="mb-0" style={{ fontSize: "14px", lineHeight: "1.5" }}>
          {description}
        </p>
      </div>
    </div>
  );
}
