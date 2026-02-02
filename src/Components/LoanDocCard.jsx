import React from "react";

export default function LoanDocCard({ icon, title, description }) {
  return (
    <div
      className="d-flex gap-3 align-items-start bg-white px-3 py-3 mb-3"
      style={{
        borderRadius: "2px",
        boxShadow: "0 10px 20px rgba(0,0,0,0.25)",
      }}
    >
      <div
        className="d-flex align-items-center justify-content-center flex-shrink-0"
        style={{
          width: "34px",
          height: "34px",
          borderRadius: "2px",
          background: "#ff7a3d",
          color: "#111",
          fontSize: "16px",
        }}
      >
        {icon}
      </div>

      <div>
        <h6 className="mb-1 fw-bold" style={{ fontSize: "13px" }}>
          {title}
        </h6>
        <p className="mb-0 text-muted" style={{ fontSize: "11px", lineHeight: "1.25" }}>
          {description}
        </p>
      </div>
    </div>
  );
}
