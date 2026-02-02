import PageBanner from "../Components/Banner";
import aboutImg from "../assets/Images/1.png";
import Heading from "../Components/Heading";
import { aboutContentCardsData } from "../Constant/Data";
import AboutContentCard from "../Components/AboutContentCard";
import AboutMiniCard from "../Components/AboutMiniCard";
import { aboutCardsData } from "../Constant/Data";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Button from "../Components/Button";
import React, { useState, useEffect, useMemo } from "react";
import TeamCarousel from "../Components/TeamCarousel";
import { motion } from "framer-motion";

export default function About() {
  const total = aboutCardsData.length;

  const getVisibleCount = () => {
    if (window.innerWidth >= 1200) return 5;
    if (window.innerWidth >= 992) return 4;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  // ✅ IMPORTANT: start index must be visibleCount (because we clone visibleCount items)
  const [index, setIndex] = useState(visibleCount);
  const [animate, setAnimate] = useState(true);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 0.61, 0.36, 1]
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const textStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const textItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // ✅ Build slides with visibleCount clones on both ends
  const slides = useMemo(() => {
    if (!aboutCardsData.length) return [];
    const head = aboutCardsData.slice(0, visibleCount);
    const tail = aboutCardsData.slice(-visibleCount);
    return [...tail, ...aboutCardsData, ...head];
  }, [visibleCount]);

  // ✅ Handle resize (and reset index safely)
  useEffect(() => {
    const onResize = () => {
      const vc = getVisibleCount();
      setVisibleCount(vc);
      setAnimate(false);
      setIndex(vc); // reset to first real slide position
      setTimeout(() => setAnimate(true), 20);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const goNext = () => {
    setIndex((i) => i + 1);
    setAnimate(true);
  };

  const goPrev = () => {
    setIndex((i) => i - 1);
    setAnimate(true);
  };

 // ✅ Auto slide - IMPROVED TIMING
useEffect(() => {
  const t = setInterval(() => {
    setIndex((i) => i + 1);
    setAnimate(true);
  }, 5000); 

  return () => clearInterval(t);
}, [visibleCount]);

// ✅ Improved infinite loop with proper timing
useEffect(() => {
  if (!total) return;

  const firstRealIndex = visibleCount;
  const lastRealIndex = visibleCount + total - 1;
  const afterLastRealIndex = visibleCount + total; // entering end clones
  const beforeFirstRealIndex = visibleCount - 1; // entering start clones

  // Check if we're at the boundary clones
  const isAtEndClone = index === afterLastRealIndex;
  const isAtStartClone = index === beforeFirstRealIndex;
  
  // If we're at boundary clones, teleport IMMEDIATELY without waiting
  if (isAtEndClone || isAtStartClone) {
    // Disable animation for the teleport jump
    setAnimate(false);
    
    // Schedule the teleport in the next frame
    const timeoutId = setTimeout(() => {
      if (isAtEndClone) {
        setIndex(firstRealIndex); // Jump to first real card
      } else if (isAtStartClone) {
        setIndex(lastRealIndex); // Jump to last real card
      }
      
      // Re-enable animation after a tiny delay
      setTimeout(() => setAnimate(true), 50);
    }, 10); // Minimal delay to ensure state updates properly
    
    return () => clearTimeout(timeoutId);
  }

  // Ensure animation is enabled when not teleporting
  if (!animate) {
    const id = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(id);
  }
}, [index, animate, total, visibleCount]);

  return (
    <>
      {/* Banner remains without animation */}
      <PageBanner
        breadcrumb={{ homeLabel: "Home", homeTo: "/", current: "About Us" }}
        heading={{ firstText: "About", secondText: "Us" }}
        description="There are many variations of passages of Lorem Ipsum..."
        image={aboutImg}
        imageAlt="About banner"
      />
      <div className="container-fluid p-0">
        {/* About Content Section */}
        <section className="about-content py-5">
          <motion.div 
            className="container py-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {/* TOP ROW */}
            <motion.div 
              className="row align-items-start g-4"
              variants={staggerContainer}
            >
              {/* LEFT SIDE */}
              <motion.div 
                className="col-12 col-lg-6"
                variants={fadeInUp}
              >
                <small className="text-white d-block mb-3 text-center text-md-start">About us</small>

                <Heading
                  firstText="Lorem Ipsum "
                  secondText={
                    <>
                      {" "}
                      <br />
                      About us What we Provide
                    </>
                  }
                  className="text-center text-md-start"
                />
              </motion.div>

              {/* RIGHT SIDE – 2 paragraphs */}
              <motion.div 
                className="col-12 col-lg-6"
                variants={textStagger}
              >
                <div className="row g-3 text-center text-md-start p-3 p-md-0">
                  <motion.div 
                    className="col-12 col-md-6"
                    variants={textItem}
                  >
                    <p className="text-white mb-0">
                      There are many variations of Lorem but the majority have
                      suffered in words by injected humour but the variations of
                      passages of Lorem
                    </p>
                  </motion.div>

                  <motion.div 
                    className="col-12 col-md-6"
                    variants={textItem}
                  >
                    <p className="text-white mb-0">
                      There are many variations of Lorem but the majority have
                      suffered in words by injected humour but the variations of
                      passages of Lorem
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* BOTTOM ROW – CARDS */}
            <motion.div 
              className="row g-4 mt-4 p-3 p-md-0"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {aboutContentCardsData.map((item, index) => (
                <motion.div 
                  key={item.id} 
                  className="col-12 col-md-4"
                  variants={staggerItem}
                  custom={index}
                >
                  <AboutContentCard {...item} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

     {/* About Cards Section */}
<section className="aboutcards py-5">
  <div className="offer-slider">
    <div className="offer-slider__viewport">
      <div
        className="offer-slider__track"
        style={{
          transform: `translateX(-${index * (100 / visibleCount)}%)`,
          transition: animate ? "transform 0.65s ease" : "none",
        }}
      >
        {slides.map((item, idx) => {
          const pos = idx - index;
          const isVisible = pos >= 0 && pos < visibleCount;
          
          // Simple alternating pattern: even positions = big, odd positions = small
          const sizeClass = isVisible ? 
            (pos % 2 === 0 ? "is-big" : "is-small") : 
            "";
          
          return (
            <div
              key={`${item.id ?? idx}-${idx}`}
              className={`offer-slider__slide ${sizeClass}`}
              style={{ width: `${100 / visibleCount}%` }}
            >
              <AboutMiniCard {...item} />
            </div>
          );
        })}
      </div>
    </div>

    <div className="offer-slider__nav d-flex justify-content-center gap-2 mt-4">
      <Button
        className="offer-nav-btn py-1"
        onClick={goPrev}
        icon={<FaArrowLeft />}
      />
      <Button
        className="offer-nav-btn py-1"
        onClick={goNext}
        icon={<FaArrowRight />}
      />
    </div>
  </div>
</section>

        {/* About Mission Section */}
        <section className="aboutmission py-5">
          <motion.div 
            className="container py-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {/* Heading */}
            <motion.div 
              className="text-center mb-4"
              variants={fadeInUp}
            >
              <Heading
                firstText="The standard Lorem "
                secondText={
                  <>
                   <br />
                    Ipsum <span>since</span> the
                  </>
                }
              />
            </motion.div>

            {/* Intro paragraph */}
            <motion.div 
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              <p className="text-center p-3 p-md-0 text-white mb-5 mx-auto">
                There are many variations of passages of Lorem Ipsum available,
                but the There are many variations of passages of Lorem Ipsum
                available, but the suffered alteration by injected humour There
                are many variations of passages of Lorem Ipsum available, but the
                suffered alteration in some form, by injected humour There are
                variations of passages of Lorem Ipsum available, but the suffered
                alteration in some form, by injected humour
              </p>
            </motion.div>

            {/* Content row */}
            <motion.div 
              className="row g-4 p-3 p-md-0"
              variants={staggerContainer}
            >
              {/* LEFT COLUMN */}
              <motion.div 
                className="col-12 col-lg-6"
                variants={textStagger}
              >
                <motion.h6 
                  className="text-white fw-semibold mb-3"
                  variants={textItem}
                >
                  Lorem Ipsum there are many
                </motion.h6>

                <ul className="list-unstyled mb-0 custom-bullet-list">
                  {[
                    "look like readable English. Many desktop publishing package",
                    "look like readable English. Many desktop publishing packages and",
                    "look like readable English. Many desktop publishing packages and web",
                    "look like readable English. Many desktop publishing packages and web"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="d-flex align-items-start mb-2 text-white"
                      variants={textItem}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* RIGHT COLUMN */}
              <motion.div 
                className="col-12 col-lg-6"
                variants={textStagger}
                transition={{ delay: 0.2 }}
              >
                <ul className="list-unstyled mb-0 mt-lg-4 custom-bullet-list">
                  {[
                    "look like readable English. Many desktop publishing packages",
                    "look like readable English. Many desktop publishing packages and edit",
                    "look like readable English. Many desktop publishing packages anb",
                    "look like readable English. Many desktop publishing packages and web"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="d-flex align-items-start mb-2 text-white"
                      variants={textItem}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* About Team Section */}
        <section className="aboutteam py-5">
          <motion.div 
            className="container py-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div 
              className="text-center mb-4"
              variants={fadeInUp}
            >
              <Heading
                firstText="Team"
                secondText={
                  <>
                    <span>Partner</span>
                  </>
                }
              />
              <motion.div 
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
              >
                <h6 className="text-light p-2">
                  There are many variations of passages of Lorem Ipsum available,
                  but the suffered alteration in some form, by injected humour
                </h6>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="teamcard"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <TeamCarousel />
            </motion.div>
          </motion.div>
        </section>
      </div>
    </>
  );
}