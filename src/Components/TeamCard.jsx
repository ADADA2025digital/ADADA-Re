import React from "react";

export default function TeamCard({ image, name, description }) {
  return (
    <div
      className="text-center team-card"
      style={{
        width: "100%",
        maxWidth: "260px",
        margin: "0 auto",
      }}
    >
      {/* IMAGE AREA */}
      <div
        className="team-card__imageWrap"
        style={{
          position: "relative",
          height: "240px",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        {/* ORANGE BACK PANEL (SMALLER) */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            width: "260px",
            height: "160px", 
            background: "linear-gradient(180deg, #ff7a3d, #ff4d4d)",
            zIndex: 1,
          }}
        />

        {/* PERSON IMAGE */}
        <img
          src={image}
          alt={name}
          style={{
            height: "250px",
            objectFit: "contain",
            zIndex: 2,
          }}
        />
      </div>

      {/* GREY INFO BOX */}
      <div
        style={{
          background: "#d9d9d9",
          padding: "14px 12px",
          boxShadow: "0 18px 35px rgba(0,0,0,0.45)",
        }}
      >
        <h6
          className="fw-bold mb-1"
          style={{ fontSize: "14px", letterSpacing: "0.3px" }}
        >
          {name}
        </h6>
        <p
          className="mb-0"
          style={{
            fontSize: "12px",
            lineHeight: "1.4",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
