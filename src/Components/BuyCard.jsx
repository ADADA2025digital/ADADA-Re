import React from "react";

export default function BuyCard({
  image,
  title,
  description,
  content, 
  leftBg = "#ff6a3d",
  rightBg = "#f2f2f2",
  titleColor = "#ff6a3d",
}) {
  return (
    <div className="buy-card">
      <div className="buy-card__left " style={{ background: leftBg }}>
        <img src={image} alt={title}  />
      </div>

      <div className="buy-card__right" style={{ background: rightBg }}>
        <h3 style={{ color: titleColor }}>{title}</h3>

        {description && <p>{description}</p>}

        {Array.isArray(content) ? (
          <ul className="buy-card__list">
            {content.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        ) : (
          content && <div className="buy-card__content">{content}</div>
        )}
      </div>
    </div>
  );
}
