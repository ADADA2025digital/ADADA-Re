import PageBanner from "../Components/Banner";
import aboutImg from "../assets/Images/7.png";
import Heading from "../Components/Heading";
import FeaturedArticleCard from "../Components/FeaturedArticleCard";
import { featuredArticlesData } from "../Constant/Data";
import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Button from "../Components/Button";
import NewsLetter from "../Components/NewsLetter";
import bgImg from "../assets/Images/bg.jpg";
import dotbg from "../assets/Images/dot.png";

export default function Blog() {
  const total = featuredArticlesData.length;

  // ✅ Get visible count based on screen width
  const getVisibleCount = () => {
    if (window.innerWidth >= 1200) return 3;
    if (window.innerWidth >= 992) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const [index, setIndex] = useState(visibleCount); // Start at visibleCount for clones
  const [animate, setAnimate] = useState(true);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 0.61, 0.36, 1] },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  // ✅ Build slides with clones for infinite effect (same as About page)
  const slides = useMemo(() => {
    if (!featuredArticlesData.length) return [];
    const head = featuredArticlesData.slice(0, visibleCount);
    const tail = featuredArticlesData.slice(-visibleCount);
    return [...tail, ...featuredArticlesData, ...head];
  }, [visibleCount]);

  // ✅ Handle resize
  useEffect(() => {
    const onResize = () => {
      const vc = getVisibleCount();
      setVisibleCount(vc);
      setAnimate(false);
      setIndex(vc); // Reset to first real slide position
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

  // ✅ Auto slide
  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => i + 1);
      setAnimate(true);
    }, 3000);

    return () => clearInterval(t);
  }, [visibleCount]);

  // ✅ Infinite loop "teleport" (same as About page)
  useEffect(() => {
    if (!total) return;

    const firstRealIndex = visibleCount;
    const lastRealIndex = visibleCount + total - 1;
    const afterLastRealIndex = visibleCount + total;
    const beforeFirstRealIndex = visibleCount - 1;

    // Moved right into end clones -> jump back to first real
    if (index === afterLastRealIndex) {
      const id = setTimeout(() => {
        setAnimate(false);
        setIndex(firstRealIndex);
      }, 650);
      return () => clearTimeout(id);
    }

    // Moved left into start clones -> jump to last real
    if (index === beforeFirstRealIndex) {
      const id = setTimeout(() => {
        setAnimate(false);
        setIndex(lastRealIndex);
      }, 650);
      return () => clearTimeout(id);
    }

    // Re-enable animation after teleport
    if (!animate) {
      const id = setTimeout(() => setAnimate(true), 20);
      return () => clearTimeout(id);
    }
  }, [index, animate, total, visibleCount]);

  return (
    <>
      <div className="container-fluid p-0">
        <PageBanner
          breadcrumb={{ homeLabel: "Home", homeTo: "/", current: "Blog" }}
          heading={{ firstText: "Property", secondText: "Perspectives" }}
          description="There are many variations of passages of Lorem Ipsum..."
          image={aboutImg}
          imageAlt="About banner"
        />

        <motion.section
          className="blog-content py-5"
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
          <motion.div className="container py-5" variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <Heading
                firstText="Featured"
                secondText="Article"
                className="text-center pb-md-4"
              />
            </motion.div>

            <motion.div
              className="feature-card p-4 p-md-0"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="support-slider">
                <div className="support-slider__viewport">
                  <div
                    className="support-slider__track"
                    style={{
                      transform: `translateX(-${index * (100 / visibleCount)}%)`,
                      transition: animate ? "transform 0.65s ease" : "none",
                    }}
                  >
                    {slides.map((item, idx) => {
                      const pos = idx - index;
                      
                      // Apply different size classes based on position (optional)
                      const sizeClass = pos >= 0 && pos < visibleCount 
                        ? (pos === 1 ? "is-middle" : "") 
                        : "";

                      return (
                        <div
                          key={`${item.id || idx}-${idx}`}
                          className={`support-slider__slide ${sizeClass}`}
                          style={{ width: `${100 / visibleCount}%` }}
                        >
                          <div className="h-100 px-2">
                            <FeaturedArticleCard {...item} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="support-slider__nav d-flex justify-content-center gap-2 mt-4">
                  <Button
                    className="support-nav-btn py-1"
                    onClick={goPrev}
                    icon={<FaArrowLeft />}
                  />
                  <Button
                    className="support-nav-btn py-1"
                    onClick={goNext}
                    icon={<FaArrowRight />}
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="tips py-5 text-center"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div variants={fadeInUp}>
                <Heading
                  firstText="Real Estate"
                  secondText="Tips & Advice"
                  className="p-4 p-md-0"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <p className="text-light p-4 p-md-0">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its The
                  point of using Lorem Ipsum is that it has a more- normal
                  distribution of letters...
                </p>
              </motion.div>
            </motion.div>

            <motion.div className="newsletter" variants={fadeInUp}>
              <NewsLetter />
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section
          className="img-section pt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <motion.div
            className="imgwithtext d-flex align-items-center justify-content-center text-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${bgImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "360px",
            }}
            variants={staggerContainer}
          >
            <div className="container">
              <motion.h3
                className="text-white fw-semibold mb-3"
                variants={fadeInUp}
              >
                Looking to Buy or Sell a Property
              </motion.h3>

              <motion.div
                className="d-flex justify-content-center mb-3"
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
              >
                <div
                  style={{
                    width: "180px",
                    height: "1px",
                    background: "rgba(255,255,255,0.6)",
                  }}
                />
              </motion.div>

              <motion.p
                className="text-white mb-4"
                style={{ fontSize: "18px" }}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                Contact Our Experts Today!
              </motion.p>

              <motion.div variants={fadeInUp} transition={{ delay: 0.3 }}>
                <Button text="Get In Touch" className="px-4 py-2 fw-semibold" />
              </motion.div>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </>
  );
}