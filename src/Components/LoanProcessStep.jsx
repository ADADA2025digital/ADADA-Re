import React from "react";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";

export default function LoanProcessStep({ step, title, showArrow }) {
  return (
    <div className="loan-step d-flex align-items-center">
      <div className="text-center">
        {/* Number Circle */}
        <div className="step-circle">{step}</div>

        {/* Label */}
        <div className="step-label">{title}</div>
      </div>

      {/* Arrow */}
      {showArrow && (
        <>
          <div className="arrow-desktop">
            <FaArrowRight />
          </div>
          <div className="arrow-mobile">
            <FaArrowDown />
          </div>
        </>
      )}
    </div>
  );
}
