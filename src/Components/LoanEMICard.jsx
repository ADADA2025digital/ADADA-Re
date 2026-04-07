import React, { useState } from "react";
import Button from "./Button";
import Heading from "./Heading";

export default function LoanEMICard() {
  const [emiForm, setEmiForm] = useState({
    amount: "",
    rate: "",
    tenure: "",
  });

  const handleChange = (e) => {
    setEmiForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleCalc = (e) => {
    e.preventDefault();
    console.log("EMI Inputs:", emiForm);
    // You can calculate EMI here later
  };

  return (
    <div
      className="loan-emi-card p-4 w-100 h-100 d-flex flex-column"
      style={{
        background: "#141414",
        borderRadius: "4px",
        boxShadow:
          "0 0 25px rgba(255,255,255,0.18), 0 18px 40px rgba(0,0,0,0.6)",
      }}
    >
      <Heading firstText={"Know Your"} secondText={"EMI Decide"}/>

    
    <form onSubmit={handleCalc} className="d-flex flex-column flex-grow-1">
      <div className="mb-3">
        <input
          name="amount"
          value={emiForm.amount}
          onChange={handleChange}
          className="form-control  rounded-2 bg-transparent custom-placeholder text-light py-4"
          placeholder="Loan Amount"
        />
      </div>

      <div className="mb-3">
        <input
          name="rate"
          value={emiForm.rate}
          onChange={handleChange}
          className="form-control  rounded-2 bg-transparent custom-placeholder text-light py-4"
          placeholder="Interest Rate"
        />
      </div>

      <div className="mb-4">
        <input
          name="tenure"
          value={emiForm.tenure}
          onChange={handleChange}
          className="form-control  rounded-2 bg-transparent custom-placeholder text-light py-4"
          placeholder="Tenure"
        />
      </div>

      {/* Button pinned to bottom like screenshot */}
      <div className="text-center mt-auto ">
        <Button text=" Calculate EMI" className="py-3 px-5 fw-bold" type="submit" />
      </div>
    </form>
    </div>
  );
}
