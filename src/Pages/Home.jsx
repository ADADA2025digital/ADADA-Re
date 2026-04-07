// Home.jsx (FULL CODE) – Offer carousel converted to BLOG-style (translateX + clones + infinite + autoplay + pause + swipe)

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import dotbg from "../assets/Images/dot.png";
import {
  FaSearch,
  FaFilter,
  FaSortAmountDown,
  FaTh,
  FaTimesCircle,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
import Heading from "../Components/Heading";
import Button from "../Components/Button";
import PropertyCard from "../Components/PropertyCard";
import { properties, offerIconsData, offerCardsData } from "../Constant/Data";
import IconWithText from "../Components/IconWithText";
import about1 from "../assets/Images/about1.jpg";
import about2 from "../assets/Images/about2.jpg";
import about3 from "../assets/Images/about3.jpg";
import about4 from "../assets/Images/about4.jpg";
import OfferCard from "../Components/OfferCard";
import glow from "../assets/Images/glow2.png";
import leftmap from "../assets/Images/leftmap.png";
import rightmap from "../assets/Images/rightmap.png";
import line1 from "../assets/Images/line1.png";
import line2 from "../assets/Images/line2.png";
import mainhome from "../assets/Images/mainhome.png";

function Home() {
  const navigate = useNavigate();

  // ==================== OFFER SLIDER (BLOG STYLE) ====================
  const offerTotal = offerCardsData?.length || 0;

  const getOfferVisibleCount = () => {
    // mobile 1, md+ 2 (you can change md+ to 1 if you want always 1)
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const OFFER_TRANSITION_MS = 650;
  const OFFER_AUTOPLAY_DELAY = 5000;

  const [offerVisibleCount, setOfferVisibleCount] = useState(getOfferVisibleCount());
  const [offerIndex, setOfferIndex] = useState(getOfferVisibleCount()); // start at clones offset
  const [offerAnimate, setOfferAnimate] = useState(true);
  const [offerPaused, setOfferPaused] = useState(false);

  const offerIntervalRef = useRef(null);

  // Swipe support
  const [offerTouchStart, setOfferTouchStart] = useState(null);
  const [offerTouchEnd, setOfferTouchEnd] = useState(null);

  const offerSlides = useMemo(() => {
    if (!offerCardsData?.length) return [];

    // if items < visibleCount, avoid bad slicing
    const vc = Math.min(offerVisibleCount, offerCardsData.length);

    const head = offerCardsData.slice(0, vc);
    const tail = offerCardsData.slice(-vc);

    return [...tail, ...offerCardsData, ...head];
  }, [offerVisibleCount, offerTotal]);

  const offerNext = () => {
    if (offerTotal <= 1) return;
    setOfferIndex((i) => i + 1);
    setOfferAnimate(true);
  };

  const offerPrev = () => {
    if (offerTotal <= 1) return;
    setOfferIndex((i) => i - 1);
    setOfferAnimate(true);
  };

  // Resize => recalc visibleCount + reset to first real
  useEffect(() => {
    const onResize = () => {
      const vc = getOfferVisibleCount();
      setOfferVisibleCount(vc);

      setOfferAnimate(false);
      setOfferIndex(vc);
      setTimeout(() => setOfferAnimate(true), 20);
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Autoplay
  useEffect(() => {
    if (offerIntervalRef.current) clearInterval(offerIntervalRef.current);

    if (!offerPaused && offerTotal > 1) {
      offerIntervalRef.current = setInterval(() => {
        setOfferIndex((i) => i + 1);
        setOfferAnimate(true);
      }, OFFER_AUTOPLAY_DELAY);
    }

    return () => {
      if (offerIntervalRef.current) clearInterval(offerIntervalRef.current);
    };
  }, [offerPaused, offerTotal, offerVisibleCount]);

  // Infinite teleport (clone loop)
  useEffect(() => {
    if (!offerTotal) return;

    const firstRealIndex = offerVisibleCount;
    const lastRealIndex = offerVisibleCount + offerTotal - 1;
    const afterLastRealIndex = offerVisibleCount + offerTotal;
    const beforeFirstRealIndex = offerVisibleCount - 1;

    // moved right into end clones => jump to first real
    if (offerIndex === afterLastRealIndex) {
      const id = setTimeout(() => {
        setOfferAnimate(false);
        setOfferIndex(firstRealIndex);
      }, OFFER_TRANSITION_MS);
      return () => clearTimeout(id);
    }

    // moved left into start clones => jump to last real
    if (offerIndex === beforeFirstRealIndex) {
      const id = setTimeout(() => {
        setOfferAnimate(false);
        setOfferIndex(lastRealIndex);
      }, OFFER_TRANSITION_MS);
      return () => clearTimeout(id);
    }

    // re-enable animation after teleport
    if (!offerAnimate) {
      const id = setTimeout(() => setOfferAnimate(true), 20);
      return () => clearTimeout(id);
    }
  }, [offerIndex, offerAnimate, offerTotal, offerVisibleCount]);

  // Swipe handlers
  const onOfferTouchStart = (e) => {
    setOfferPaused(true);
    setOfferTouchEnd(null);
    setOfferTouchStart(e.targetTouches[0].clientX);
  };
  const onOfferTouchMove = (e) => setOfferTouchEnd(e.targetTouches[0].clientX);
  const onOfferTouchEnd = () => {
    if (offerTouchStart == null || offerTouchEnd == null) {
      setOfferPaused(false);
      return;
    }

    const dist = offerTouchStart - offerTouchEnd;
    if (dist > 50) offerNext();
    if (dist < -50) offerPrev();

    setOfferPaused(false);
  };

  // ==================== Animation variants ====================
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageStagger = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="container-fluid p-0">
      {/* hero section */}
      <section className="hero-section position-relative overflow-hidden">
        <div className="vh-100 position-relative">
          {/* Glow */}
          <img src={glow} alt="" className="hero-glow" />

          {/*Left Map & Line */}
          <img src={leftmap} alt="" className="hero-left-map" />
          <img src={line1} alt="" className="hero-left-line" />

          {/*Right Map & Line */}
          <img src={rightmap} alt="" className="hero-right-map" />
          <img src={line2} alt="" className="hero-right-line" />

          {/* Main Home Image */}
          <img src={mainhome} alt="Luxury Home" className="hero-home" />

          {/* ===== CONTENT ===== */}
          <motion.div
            className="hero-content position-relative z-2 text-center text-white px-3"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              className="fw-bold mt-4"
              style={{ fontFamily: "'Rammetto One', cursive" }}
              variants={staggerItem}
            >
              Step Into a New <br /> Standard of Living
            </motion.h1>

            <motion.p className="lead mt-5 mt-md-0" variants={staggerItem}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have <br />
              suffered alteration in some form, by injected humour
            </motion.p>

            <div className="search-container">
              <div className="hero-searchbar">
                <div className="hero-searchbar__inputWrap">
                  <span className="hero-searchbar__icon">
                    <FaSearch />
                  </span>

                  <input
                    type="search"
                    className="hero-searchbar__input"
                    placeholder="Search for anything..."
                    aria-label="Search"
                  />
                </div>

                <button className="hero-searchbar__btn" type="button">
                  Search
                </button>

                <div className="dropdown">
                  <button
                    className="hero-searchbar__filter"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FaFilter />
                  </button>

                  <ul className="dropdown-menu dropdown-menu-end shadow border-0 p-3 mt-2">
                    <li>
                      <h6 className="dropdown-header text-secondary mb-2">
                        Filter Options
                      </h6>
                    </li>
                    <li>
                      <a className="dropdown-item rounded" href="#">
                        <FaSortAmountDown className="me-2" />
                        Date: Newest
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item rounded" href="#">
                        <FaTh className="me-2" />
                        Category: All
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item rounded text-danger" href="#">
                        <FaTimesCircle className="me-2" />
                        Clear filters
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* about section */}
      <section className="about-section py-5">
        <div className="container py-0 py-md-5">
          <motion.div
            className="row justify-content-center align-items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <div className="col-md-6 mb-5 mb-md-0">
              <motion.div
                className="image-grid-container position-relative"
                variants={imageStagger}
              >
                <div className="about-stack position-relative">
                  <motion.div
                    className="about-stack__img img-1 overflow-hidden shadow-lg"
                    variants={scaleIn}
                    transition={{ delay: 0.1 }}
                  >
                    <img
                      src={about1}
                      alt="About us 1"
                      className="w-100 h-100 object-fit-cover"
                    />
                  </motion.div>

                  <motion.div
                    className="about-stack__img img-2 position-absolute overflow-hidden shadow-lg"
                    variants={scaleIn}
                    transition={{ delay: 0.2 }}
                  >
                    <img
                      src={about2}
                      alt="About us 2"
                      className="w-100 h-100 object-fit-cover"
                    />
                  </motion.div>

                  <motion.div
                    className="about-stack__img img-3 position-absolute overflow-hidden shadow-lg"
                    variants={scaleIn}
                    transition={{ delay: 0.3 }}
                  >
                    <img
                      src={about3}
                      alt="About us 3"
                      className="w-100 h-100 object-fit-cover"
                    />
                  </motion.div>

                  <motion.div
                    className="about-stack__img img-4 position-absolute overflow-hidden shadow-lg"
                    variants={scaleIn}
                    transition={{ delay: 0.4 }}
                  >
                    <img
                      src={about4}
                      alt="About us 4"
                      className="w-100 h-100 object-fit-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <div className="col-md-6">
              <motion.div className="ps-md-4" variants={staggerContainer}>
                <motion.div variants={fadeInUp}>
                  <Heading
                    firstText="About"
                    secondText="Us"
                    className="text-center text-md-start"
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <p className="text-light text-center text-md-start p-3 p-md-0">
                    There are many variations of passages of Lorem but the
                    majority have suffered alteration in some by injected humour
                    or randomised words look even slightlyd. There are many
                    variations of passages of Lorem but the majority have
                    suffered alteration in some by injected humour or randomised
                    words look even slightlyd.
                  </p>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <p className="text-light text-center text-md-start p-3 p-md-0">
                    There are many variations of passages of Lorem but the
                    majority have suffered alteration in some by injected humour
                    or randomised words look even slightlyd. There are many
                    variations of passages of Lorem but the majority have
                    suffered alteration in some by injected humour or randomised
                    words look even slightlyd.
                  </p>
                </motion.div>

                <motion.div className="mb-5" variants={fadeInUp}>
                  <h3 className="h4 fw-bold text-light text-start p-3 p-md-0">
                    Lorem Ipsum there are many
                  </h3>

                  <ul className="ps-3 list-unstyled text-light row custom-bullet justify-content-center justify-content-md-start text-center text-md-start">
                    {[
                      "Lorem ipsum dolor sit amet",
                      "Lorem ipsum consectetur adipiscing",
                      "Lorem ipsum sed do eiusmod",
                      "Lorem ipsum tempor incididunt",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        className="col-12 col-md-6 mb-3 d-flex align-items-center justify-content-start justify-content-md-start"
                        variants={staggerItem}
                        custom={index}
                      >
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  className="d-flex justify-content-center justify-content-md-start"
                  variants={fadeInUp}
                >
                  <Button
                    text="Learn More"
                    className="px-4 py-2 fw-semibold"
                    onClick={() => console.log("Learn More clicked")}
                    icon={<FaArrowRight />}
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Property Section */}
      <section className="properties-section py-5">
        <motion.div
          className="container-fluid py-0 py-md-5"
          style={{
            backgroundImage: `url(${dotbg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
        >
          <div className="container">
            <motion.div
              className="property-content text-center mb-4"
              variants={fadeInUp}
            >
              <Heading
                firstText="Featured"
                secondText="Properties"
                className="text-center pt-1 pt-md-0"
              />

              <h6 className="text-light mt-2 p-3 p-md-0">
                There are many variations of passages of Lorem Ipsum available,
                but the
                <br />
                suffered alteration in some form, by injected humour
              </h6>
            </motion.div>

            {/* MOBILE CAROUSEL */}
            <motion.div className="d-block d-md-none" variants={scaleIn}>
              <div
                id="propertyCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="3000"
                data-bs-pause="hover"
              >
                <div className="carousel-inner">
                  {properties.slice(0, 6).map((property, index) => (
                    <div
                      key={property.id}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <div className="w-100 d-flex justify-content-center">
                        <div className="w-100" style={{ maxWidth: "335px" }}>
                          <PropertyCard {...property} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* DESKTOP GRID */}
            <motion.div
              className="row g-4 my-5 d-none d-md-flex"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              {properties.slice(0, 6).map((property, index) => (
                <motion.div
                  key={property.id}
                  variants={staggerItem}
                  custom={index}
                  className="col-md-6 col-lg-4 d-flex justify-content-center"
                >
                  <PropertyCard {...property} />
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="text-center mt-4" variants={fadeInUp}>
              <Button
                text="View All Properties"
                className="px-4 py-2 fw-semibold"
                onClick={() => navigate("/rent")}
                icon={<FaArrowRight />}
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* offer section */}
      <section className="offer-section py-5">
        <div className="container py-md-5 py-0">
          <motion.div
            className="row align-items-center g-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {/* LEFT SIDE – ICON WITH TEXT */}
            <div className="col-12 col-lg-6">
              <motion.div variants={fadeInUp}>
                <Heading
                  firstText="What We"
                  secondText="Offer"
                  className="text-center text-md-start"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <p className="offer-sub mb-4 text-light text-center text-md-start p-3 p-md-0">
                  There are many variations of passages of Lorem Ipsum
                  available, but the suffered alteration in some form, by
                  injected humour
                </p>
              </motion.div>

              <motion.div className="row g-4" variants={staggerContainer}>
                <div className="col-12 col-md-6 px-5 px-md-0">
                  {offerIconsData.slice(0, 3).map((item, index) => (
                    <motion.div
                      key={item.id}
                      variants={staggerItem}
                      custom={index}
                    >
                      <IconWithText
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                        className="offer-item pt-3"
                        iconClass="offer-item__icon"
                        titleClass="text-white fw-bold small"
                        descClass="text-white-50 small lh-sm"
                      />
                    </motion.div>
                  ))}
                </div>

                <div className="col-12 col-md-6 px-5 px-md-0">
                  {offerIconsData.slice(3, 6).map((item, index) => (
                    <motion.div
                      key={item.id}
                      variants={staggerItem}
                      custom={index + 3}
                    >
                      <IconWithText
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                        className="offer-item pt-3"
                        iconClass="offer-item__icon"
                        titleClass="text-white fw-bold small"
                        descClass="text-white-50 small lh-sm"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* RIGHT SIDE – OFFER SLIDER (BLOG STYLE) */}
            <motion.div
              className="col-12 col-lg-6"
              variants={scaleIn}
              transition={{ delay: 0.3 }}
            >
              <div
                className="offer-slider bg-dark rounded-4 p-4"
                style={{
                  boxShadow: `
                    0 0 35px rgba(205, 130, 39, 0.10),
                    0 0 80px rgba(228, 61, 6, 0.25)
                  `,
                }}
                onMouseEnter={() => setOfferPaused(true)}
                onMouseLeave={() => setOfferPaused(false)}
                onTouchStart={onOfferTouchStart}
                onTouchMove={onOfferTouchMove}
                onTouchEnd={onOfferTouchEnd}
              >
                <div className="offer-slider__viewport">
                  <div
                    className="offer-slider__track"
                    style={{
                      transform: `translateX(-${
                        offerIndex * (100 / offerVisibleCount)
                      }%)`,
                      transition: offerAnimate
                        ? `transform ${OFFER_TRANSITION_MS}ms ease`
                        : "none",
                    }}
                  >
                    {offerSlides.map((item, idx) => (
                      <div
                        key={`${item.id || "offer"}-${idx}`}
                        className="offer-slider__slide"
                        style={{ width: `${100 / offerVisibleCount}%` }}
                      >
                        <div className="h-100 d-flex justify-content-center px-2">
                          <OfferCard {...item} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* NAV BUTTONS */}
                {offerTotal > 1 && (
                  <motion.div
                    className="d-flex justify-content-center gap-2 mt-3"
                    variants={fadeIn}
                    transition={{ delay: 0.5 }}
                  >
                    <Button
                      className="offer-nav-btn py-1"
                      icon={<FaArrowLeft />}
                      onClick={() => {
                        setOfferPaused(true);
                        offerPrev();
                        setTimeout(() => setOfferPaused(false), 800);
                      }}
                    />
                    <Button
                      className="offer-nav-btn py-1"
                      icon={<FaArrowRight />}
                      onClick={() => {
                        setOfferPaused(true);
                        offerNext();
                        setTimeout(() => setOfferPaused(false), 800);
                      }}
                    />
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
