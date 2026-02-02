import React from "react";

export default function AboutContentCard({ icon, title, desc }) {
  return (
    <div
      className="d-flex align-items-center p-2 "
      style={{
        background: "#ffffff",
      }}
    >
      {/* Icon box */}
      <div
        className="d-flex align-items-center justify-content-center flex-shrink-0 "
        style={{
          width: "72px",
          height: "78px",
          background: "#ff6a00",
        }}
      >
        <div
          style={{
            fontSize: "34px",
            color: "#111",
            lineHeight: 1,
          }}
        >
          {icon}
        </div>
      </div>

      {/* Text content */}
      <div
        className="ps-3 pe-2"
        style={{
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <div
          className="fw-bold"
          style={{
            fontSize: "16px",
            color: "#111",
            lineHeight: 1.15,
          }}
        >
          {title}
        </div>

        <div
          style={{
            marginTop: "4px",
            fontSize: "12px",
            color: "#111",
            opacity: 0.85,
            lineHeight: 1.3,
            maxWidth: "260px",
          }}
        >
          {desc}
        </div>
      </div>
    </div>
  );
}
