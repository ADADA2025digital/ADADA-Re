import React from "react";
import Logo from "/logo.png";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  // Social media links data
  const socialLinks = [
    {
      href: "https://www.facebook.com/",
      icon: FaFacebookF,
      label: "Facebook",
    },
    {
      href: "https://www.instagram.com/",
      icon: FaInstagram,
      label: "Instagram",
    },
    {
      href: "https://www.linkedin.com/",
      icon: FaLinkedin,
      label: "LinkedIn",
    },
    {
      href: "https://wa.me/+61401688492",
      icon: FaWhatsapp,
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="footer container-fluid p-0">
      <div className="container py-3">
        {/* Main footer content */}
        <div className="row text-center text-md-start p-2 p-md-0">
          {/* description section */}
          <div className="col-md-3 mb-4 mb-md-0">
            <div className="mb-4">
              <Link className="navbar-brand" to="/">
                <img src={Logo} alt="Logo" height="50" />
              </Link>
              <div className="mb-4">
                <p className="text-secondary my-3">
                  There are many variations of passages (pasm available)he
                  suffered also ration in by injected humour
                </p>
                <p className="text-secondary mb-0">
                  There are many variations of passages (pasm available)he
                  suffered also ration in by injected humour
                </p>
              </div>
            </div>
          </div>

          {/* contact section */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h6 className="text-white ">Contact</h6>
            <div className="py-2 ">
              <p>
                <a
                  href="mailto:info@adada.com"
                  className="text-decoration-none hover-link text-secondary"
                >
                  info.adada.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+94222334566766"
                  className="text-decoration-none hover-link text-secondary"
                >
                  +94 22 233 4566 766
                </a>
              </p>
              <p>
                <a
                  href="tel:+94222334566766"
                  className="text-decoration-none hover-link text-secondary"
                >
                  +94 22 233 4566 766
                </a>
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="social-icon">
              <h6 className="text-white mb-3">Follow Us</h6>
              <div className="d-flex justify-content-center justify-content-md-start">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none me-3"
                    aria-label={social.label}
                  >
                    <div
                      className="bg-dark rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: "40px",
                        height: "40px",
                        transition: "all 0.3s ease",
                        border: "1px solid #0D0C0C",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#f8f9fa";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "";
                        e.currentTarget.style.transform = "";
                      }}
                    >
                      <social.icon
                        className="text-secondary"
                        style={{ fontSize: "18px" }}
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h6 className="text-white mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              {["Home", "Buy", "Rent", "Sell", "More"].map((item, index) => (
                <li key={index} className="mb-2">
                  <a href="#" className="text-secondary text-decoration-none">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h6 className="text-white mb-3">Services</h6>
            <ul className="list-unstyled">
              {[
                "Property Buying & Selling",
                "Rental Services",
                "Property management",
                "Land & Home valuation",
                "Legal & Documentation support",
              ].map((service, index) => (
                <li key={index} className="mb-2">
                  <a href="#" className="text-secondary text-decoration-none">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer bottom / Copyright */}
      <div className="border-top border-secondary py-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="text-center text-secondary mb-0">
                Copyright © {new Date().getFullYear()}. All rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
