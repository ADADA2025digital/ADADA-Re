import React, { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter Email:", email);
    setEmail("");
  };

  return (
    <section className="py-5 ">
      <div className="container">
        {/* Outer Card */}
        <div
          className="p-4 p-lg-5"
          style={{
            background: "linear-gradient(180deg, #2a1a10 0%, #7a3a12 100%)",
            borderRadius: "6px",
            boxShadow: "0 18px 45px rgba(0,0,0,0.6)",
          }}
        >
          {/* Top Row */}
          <div className="row align-items-center g-4">
            {/* Left Heading */}
            <div className="col-12 col-lg-6">
              <h2 className="text-white fw-bold mb-3" style={{ lineHeight: "1.05" }}>
                Subscribe <br /> Our Newsletter
              </h2>

              <p className="text-white-50 mb-0" style={{ maxWidth: "520px" }}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its The point
                of using Lorem Ipsum is that it has a more-normal distribution
                of letters, as opposed to using
              </p>
            </div>

            {/* Right Input + Button */}
            <div className="col-12 col-lg-6">
              <form onSubmit={handleSubmit} className="d-flex justify-content-lg-end">
                <div
                  className="d-flex w-100"
                 
                >
                  <input
                    type="email"
                    className="form-control rounded-0 border-0 bg-light py-3"
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="btn rounded-0 px-4 fw-semibold"
                    style={{
                      background: "#ff4d4d",
                      color: "#111",
                      minWidth: "150px",
                    }}
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Bottom Row text */}
          <div className="row g-4 mt-4">
            <div className="col-12 col-lg-6">
              <p className="text-white-50 mb-0">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its The point
                of using Lorem Ipsum is that it has a more
              </p>
            </div>

            <div className="col-12 col-lg-6">
              <p className="text-white-50 mb-0">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its The point
                of using Lorem Ipsum is that it has a more
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
