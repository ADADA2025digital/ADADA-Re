import React, { useEffect, useState, useCallback } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import Logo from "/logo.png";
import Offcanvas from "bootstrap/js/dist/offcanvas"; // ✅ important

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationLinks = [
    { to: "/", label: "Home" },
    { to: "/buy", label: "Buy" },
    { to: "/rent", label: "Rent" },
    { to: "/sell", label: "Sell" },
  ];

  const moreLinks = [
    { to: "/about", label: "About us" },
    { to: "/blog", label: "Blog" },
    { to: "/home-loans", label: "Home loans" },
    { to: "/contact", label: "Contact us" },
  ];

  // ✅ Scroll shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Get Offcanvas instance safely (NO window.bootstrap)
  const getOffcanvasInstance = useCallback(() => {
    const el = document.getElementById("mainOffcanvas");
    if (!el) return null;
    return Offcanvas.getInstance(el) || new Offcanvas(el);
  }, []);

  const openOffcanvas = useCallback(() => {
    const instance = getOffcanvasInstance();
    instance?.show();
  }, [getOffcanvasInstance]);

  const closeOffcanvas = useCallback(() => {
    const instance = getOffcanvasInstance();
    instance?.hide();
    setIsMenuOpen(false); // ✅ blur off immediately
  }, [getOffcanvasInstance]);

  // ✅ Sync blur state using Bootstrap events
  useEffect(() => {
    const el = document.getElementById("mainOffcanvas");
    if (!el) return;

    const onShown = () => setIsMenuOpen(true);
    const onHidden = () => setIsMenuOpen(false);

    el.addEventListener("shown.bs.offcanvas", onShown);
    el.addEventListener("hidden.bs.offcanvas", onHidden);

    return () => {
      el.removeEventListener("shown.bs.offcanvas", onShown);
      el.removeEventListener("hidden.bs.offcanvas", onHidden);
    };
  }, []);

  // ✅ Close on route change
  useEffect(() => {
    closeOffcanvas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const handleNavClick = useCallback(() => {
    closeOffcanvas();
  }, [closeOffcanvas]);

  return (
    <>
      {/* ✅ Blur overlay */}
      <div
        className={`menu-blur-overlay ${isMenuOpen ? "show" : ""}`}
        onClick={closeOffcanvas}
      />

      <header className="header text-white">
        <nav
          className={`navbar navbar-expand-lg navbar-dark py-3 fixed-top header ${
            isScrolled ? "shadow-sm" : ""
          }`}
        >
          <div className="container">
            <Link className="navbar-brand" to="/" onClick={closeOffcanvas}>
              <img src={Logo} alt="Logo" height="50" />
            </Link>

            {/* ✅ MOBILE */}
            <button
              className="navbar-toggler border-0"
              type="button"
              onClick={openOffcanvas}
              aria-controls="mainOffcanvas"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            {/* ✅ DESKTOP */}
            <div className="d-none d-lg-flex ms-auto align-items-center">
              <ul className="navbar-nav gap-4 align-items-center">
                {navigationLinks.map((link) => (
                  <li className="nav-item" key={link.to}>
                    <NavLink className="nav-link" to={link.to}>
                      {link.label}
                    </NavLink>
                  </li>
                ))}

                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-link nav-link p-0 text-decoration-none"
                    onClick={openOffcanvas}
                  >
                    More +
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* ✅ OFFCANVAS */}
        <div
          className="offcanvas offcanvas-end menu-offcanvas bg-dark"
          tabIndex="-1"
          id="mainOffcanvas"
          aria-labelledby="mainOffcanvasLabel"
          data-bs-backdrop="true"
          data-bs-scroll="false"
        >
          <div className="offcanvas-header justify-content-center position-relative">
            <h5
              className="offcanvas-title fw-semibold text-light"
              id="mainOffcanvasLabel"
            >
              Menu
            </h5>

            <button
              type="button"
              className="btn-close btn-close-white position-absolute end-0 me-3"
              onClick={closeOffcanvas}
              aria-label="Close"
            />
          </div>

          <div className="offcanvas-body d-flex flex-column justify-content-start pt-3">
            <div className="px-3">
              {navigationLinks.map((link) => (
                <div
                  key={link.to}
                  className="d-flex align-items-center justify-content-center py-2"
                >
                  <NavLink
                    to={link.to}
                    className="menu-link text-white text-decoration-none"
                    onClick={handleNavClick}
                  >
                    {link.label}
                  </NavLink>
                </div>
              ))}
            </div>

            <hr className="menu-divider text-light my-4 mx-3" />

            <div className="px-3">
              {moreLinks.map((link) => (
                <div
                  key={link.to}
                  className="d-flex align-items-center justify-content-center py-2"
                >
                  <NavLink
                    to={link.to}
                    className="menu-link text-white text-decoration-none"
                    onClick={handleNavClick}
                  >
                    {link.label}
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
