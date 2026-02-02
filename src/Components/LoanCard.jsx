import React from "react";

export default function LoanCard({ icon, title, description, className = "" }) {
  return (
    <div
      className={`card bg-transparent text-center h-100 w-75 d-flex justify-content-center align-items-center ${className}`}
      style={{
        border: "9px solid #aa3725",
        borderRadius: "0",
      }}
    >
      <div className="card-body d-flex flex-column justify-content-center py-4 px-3">
        {/* Icon */}
        <div
          className="d-flex justify-content-center mb-3"
          style={{ fontSize: "28px", color: "#fff" }}
        >
          {icon}
        </div>

        {/* Title */}
        <h6 className="fw-semibold text-white mb-3" style={{ fontSize: "14px" }}>
          {title}
        </h6>

        {/* Divider */}
        <div className="d-flex justify-content-center mb-3">
          <div style={{ width: "100%", height: "2px", background: "#fff", opacity: 0.7 }} />
        </div>

        {/* Description */}
        <p className="text-white-50 mb-0" style={{ fontSize: "12px" }}>
          {description}
        </p>
      </div>
    </div>
  );
}
