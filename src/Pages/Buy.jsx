// Buy.jsx (Support carousel updated to BLOG-style: show 3/2/1 but move 1-by-1, infinite, autoplay)
// ✅ Keeps your UI + Buttons + SupportCard
// ✅ Removes Bootstrap Carousel engine (we only use Bootstrap grid/classes)

import PageBanner from "../Components/Banner";
import Heading from "../Components/Heading";
import aboutImg from "../assets/Images/2.png";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SupportCard from "../Components/SupportCard";
import { supportCardsData } from "../Constant/Data";
import Button from "../Components/Button";
import InvestmentCardStack from "../Components/InvestmentCardStack";
import dotbg from "../assets/Images/dot.png";
import BuyCard from "../Components/BuyCard";
import { sellCardsData } from "../Constant/Data";

export default function Buy() {
  const total = supportCardsData.length;

  // ✅ Get visible count based on screen width (same behavior as your Blog)
  const getVisibleCount = () => {
    if (window.innerWidth >= 1200) return 3;
    if (window.innerWidth >= 992) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  // ✅ BLOG STYLE STATES
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const [index, setIndex] = useState(getVisibleCount()); // start at visibleCount (because we prepend clones)
  const [animate, setAnimate] = useState(true);

  // autoplay + pause
  const AUTOPLAY_DELAY = 3000;
  const intervalRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // touch swipe
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // =========================
  // ✅ Animations (your existing)
  // =========================
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.96 },
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

  const cardStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const cardItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // =========================
  // ✅ Build slides with clones (BLOG STYLE infinite)
  // =========================
  const slides = useMemo(() => {
    if (!supportCardsData.length) return [];
    const head = supportCardsData.slice(0, visibleCount);
    const tail = supportCardsData.slice(-visibleCount);
    return [...tail, ...supportCardsData, ...head];
  }, [visibleCount]);

  // =========================
  // ✅ Handle resize (BLOG STYLE)
  // =========================
  useEffect(() => {
    const onResize = () => {
      const vc = getVisibleCount();
      setVisibleCount(vc);

      // reset position cleanly
      setAnimate(false);
      setIndex(vc);
      setTimeout(() => setAnimate(true), 20);
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // =========================
  // ✅ NEXT / PREV (move 1 card)
  // =========================
  const goNext = () => {
    if (!total) return;
    setIndex((i) => i + 1);
    setAnimate(true);
  };

  const goPrev = () => {
    if (!total) return;
    setIndex((i) => i - 1);
    setAnimate(true);
  };

  // =========================
  // ✅ AUTOPLAY (pause on hover/touch)
  // =========================
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    if (!isPaused && total > 1) {
      intervalRef.current = setInterval(() => {
        setIndex((i) => i + 1);
        setAnimate(true);
      }, AUTOPLAY_DELAY);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, total, visibleCount]);

  // =========================
  // ✅ Infinite loop teleport (BLOG STYLE)
  // =========================
  useEffect(() => {
    if (!total) return;

    const firstRealIndex = visibleCount;
    const lastRealIndex = visibleCount + total - 1;
    const afterLastRealIndex = visibleCount + total;
    const beforeFirstRealIndex = visibleCount - 1;

    // moved right into end clones -> jump to first real
    if (index === afterLastRealIndex) {
      const id = setTimeout(() => {
        setAnimate(false);
        setIndex(firstRealIndex);
      }, 650);
      return () => clearTimeout(id);
    }

    // moved left into start clones -> jump to last real
    if (index === beforeFirstRealIndex) {
      const id = setTimeout(() => {
        setAnimate(false);
        setIndex(lastRealIndex);
      }, 650);
      return () => clearTimeout(id);
    }

    // re-enable animation after teleport
    if (!animate) {
      const id = setTimeout(() => setAnimate(true), 20);
      return () => clearTimeout(id);
    }
  }, [index, animate, total, visibleCount]);

  // =========================
  // ✅ Swipe handlers (same as Blog)
  // =========================
  const onTouchStart = (e) => {
    setIsPaused(true);
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (touchStart == null || touchEnd == null) {
      setIsPaused(false);
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) goNext();
    if (isRightSwipe) goPrev();

    setIsPaused(false);
  };

  return (
    <>
      {/* Banner remains without animation */}
      <PageBanner
        breadcrumb={{ homeLabel: "Home", homeTo: "/", current: "Buy" }}
        heading={{ firstText: "Find Your", secondText: "Perfect Home" }}
        description="Explore a wide range of rental properties across prime locations."
        image={aboutImg}
        imageAlt="Rent banner"
      />

      <div className="container-fluid p-0">
        {/* Hallmark section */}
        <section className="Hallmark-section py-5">
          <motion.div
            className="container py-0 py-md-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div className="hallmark-content text-center" variants={fadeInUp}>
              <Heading
                firstText="How Hallmark Property"
                secondText="Services is different"
              />

              <motion.div variants={fadeInUp}>
                <h6 className="text-light pb-1 p-4 p-md-0">
                  Our property services are based on a commitment to long-term
                  client relationships, meticulous data analysis, and access to
                  exclusive off-market deals. By leveraging advanced data-driven
                  insights, we identify the most promising investment
                  opportunities across Australia, ensuring informed and
                  optimised decisions for our clients.
                </h6>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h6 className="text-light p-4 p-md-0">
                  Our extensive network allows us to secure deals that are not
                  available to the general public, giving you a competitive edge
                  in the market. Each service we offer is designed to provide
                  comprehensive support and personalised guidance, ensuring that
                  your property investment journey is smooth, successful, and
                  aligned with your long-term financial goals.
                </h6>
              </motion.div>
            </motion.div>

            {/* ✅ Buy Cards Section */}
            <motion.div
              className="buyCard-section mt-4 d-flex flex-column gap-4"
              variants={cardStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {sellCardsData.map((card, idx) => (
                <motion.div key={card.id || idx} variants={cardItem} custom={idx}>
                  <BuyCard {...card} reverse={idx % 2 === 1} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Get Ahead section */}
        <section className="Getahead-section py-5">
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
            <div className="container p-0">
              <motion.div className="getahead-content text-center" variants={staggerContainer}>
                <motion.div variants={fadeInUp}>
                  <Heading firstText="Get Ahead" secondText="with our support" />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <p className="text-center text-light p-1 pb-md-3">
                    At Hallmark Buyers Agency, we simplify the property buying
                    process with expert guidance every step of the way. From
                    initial consultation to post-purchase support, our tailored
                    approach ensures you achieve your investment goals with
                    confidence. Trust us to secure the best properties at the
                    best prices.
                  </p>
                </motion.div>

                {/* ✅ SUPPORT CAROUSEL (BLOG STYLE) */}
                <motion.div
                  className="support-slider"
                  variants={scaleIn}
                  transition={{ delay: 0.2 }}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  onTouchStart={onTouchStart}
                  onTouchMove={onTouchMove}
                  onTouchEnd={onTouchEnd}
                >
                  <div className="support-slider__viewport">
                    <div
                      className="support-slider__track"
                      style={{
                        transform: `translateX(-${index * (100 / visibleCount)}%)`,
                        transition: animate ? "transform 0.65s ease" : "none",
                      }}
                    >
                      {slides.map((item, idx) => (
                        <div
                          key={`${item.id || "s"}-${idx}`}
                          className="support-slider__slide"
                          style={{ width: `${100 / visibleCount}%` }}
                        >
                          <div className="h-100 px-2 d-flex justify-content-center">
                            {/* keep card centered inside each slide */}
                            <SupportCard {...item} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ✅ SAME NAV UI */}
                  {total > 1 && (
                    <motion.div
                      className="support-slider__nav d-flex justify-content-center gap-2 mt-4"
                      variants={fadeIn}
                      transition={{ delay: 0.3 }}
                    >
                      <Button
                        className="support-nav-btn py-1"
                        icon={<FaArrowLeft />}
                        onClick={() => {
                          setIsPaused(true);
                          goPrev();
                          setTimeout(() => setIsPaused(false), 800);
                        }}
                      />
                      <Button
                        className="support-nav-btn py-1"
                        icon={<FaArrowRight />}
                        onClick={() => {
                          setIsPaused(true);
                          goNext();
                          setTimeout(() => setIsPaused(false), 800);
                        }}
                      />
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Investment section */}
        <section className="investment-section py-5">
          <motion.div
            className="container py-0 py-md-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div className="investment-content text-center" variants={fadeInUp}>
              <Heading
                firstText="Ready to Invest?"
                secondText="Start Your Journey Today"
                className="p-3 p-md-0"
              />

              <motion.div variants={fadeInUp}>
                <p className="text-center text-light p-4 p-md-0">
                  At Hallmark Buyers Agency, our team combines expertise,
                  dedication, and a personalised approachto ensure your property
                  investment journey is successful. With our support, you can
                  navigate the property market with confidence and clarity.Trust
                  us to help you make informed decisions and achieve your
                  investment goals.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="investment-card-wrap p-3 p-md-0"
              variants={scaleIn}
              transition={{ delay: 0.3 }}
            >
              <InvestmentCardStack />
            </motion.div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
