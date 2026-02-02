import React, { useState } from "react";
import Heading from "../Components/Heading";
import Button from "../Components/Button";
import about1 from "../assets/Images/map.png";
import dotbg from "../assets/Images/dot.png"

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Data:", form);
  };

  return (
    <>
      <section className="contact py-5">
        <div className="container-fluid p-0" style={{
                                backgroundImage: `url(${dotbg})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                              }}>
        <div className="container "  >
          <div className="contact-box p-4  shadow-white rounded-1">
            <div className="row g-4 align-items-stretch">

              {/* LEFT SIDE – FORM */}
              <div className="col-12 col-lg-6">
                <Heading firstText="Get In" secondText="Touch" />

                <form onSubmit={handleSubmit} className="mt-4">
                  <div className="mb-3">
                    <input
                      type="text"
                      name="name"
                      className="form-control rounded-2 bg-transparent custom-placeholder text-light"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="tel"
                      name="phone"
                       className="form-control rounded-2 bg-transparent custom-placeholder text-light"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                       className="form-control rounded-2 bg-transparent custom-placeholder text-light"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <textarea
                      name="message"
                      rows="6"
                        className="form-control rounded-2 bg-transparent custom-placeholder text-light"
                      placeholder="Message"
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="d-flex justify-content-end">
                    <Button
                      text="Send"
                      className="contact-send-btn px-4 py-2 fw-semibold"
                      type="submit"
                    />
                  </div>
                </form>
              </div>

              {/* RIGHT SIDE – IMAGE */}
              <div className="col-12 col-lg-6">
                <div className="h-100 d-flex align-items-center ">
                  <img
                    src={about1}
                    alt="Contact"
                    className="img-fluid w-100 object-fit-cover"
                    style={{ maxHeight: "480px"}}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
