import React from "react";
import Heading from "./Heading"; 
import { Link } from "react-router-dom";
import glowImg from "../assets/Images/glow2.png"; 
import { MdHeight } from "react-icons/md";


const Banner = ({
  className = "page-banner ",
  breadcrumb = { homeLabel: "Home", homeTo: "/", current: "About Us" },
  heading = { firstText: "About", secondText: "Us" },
  description = "",
  image = "", // right-side image
  imageAlt = "Banner image",
}) => {
  return (
    <section className={`${className}  `}>
      <div className="container pt-5">
        <div className="row pt-5 align-items-center g-4">
          {/* LEFT CONTENT */}
          <div className="col-12 col-lg-7 pt-5 mt-5 mt-md-0 pt-md-0 text-center text-md-start">
            <nav aria-label="breadcrumb ">
              <ol className="breadcrumb mb-3 justify-content-center justify-content-md-start">
                <li className="breadcrumb-item ">
                  <Link
                    to={breadcrumb.homeTo}
                    className="text-white text-decoration-none  "
                  >
                    {breadcrumb.homeLabel}
                  </Link>
                </li>
                <li
                  className="breadcrumb-item active text-white-50"
                  aria-current="page"
                >
                  {breadcrumb.current}
                </li>
              </ol>
            </nav>

            {/* Heading component */}
            <Heading
              firstText={heading.firstText}
              secondText={heading.secondText}
              align="start"
              className="mb-2  text-center text-md-start"
            />

            {/* Description */}
            {description ? (
              <p className="text-white-50 mb-0 banner-desc fs-4">{description}</p>
            ) : null}
          </div>

          {/* RIGHT IMAGE */}
<div className="col-12 col-lg-5 d-flex justify-content-center justify-content-lg-end">
  {image ? (
    <div className="banner-image-wrapper position-relative">
      {/* Glow */}
<img
  src={glowImg}
  alt="Glow"
  className="banner-glow"

/>


      {/* Main Image */}
      <img
        src={image}
        alt={imageAlt}
        className="img-fluid banner-img position-relative"
      />
    </div>
  ) : null}
</div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
