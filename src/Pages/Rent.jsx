import { useState, useEffect } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import PageBanner from "../Components/Banner";
import aboutImg from "../assets/Images/3.png";
import PropertyCard from "../Components/PropertyCard";
import { rentProperties } from "../Constant/Data";
import dotbg from "../assets/Images/dot.png";

export default function Rent() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Animation variants for fade in/out
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const searchBarAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeInOut"
      }
    }
  };

  const cardAnimation = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  // 🔹 Filter Logic
  const filteredProperties = rentProperties.filter((p) => {
    return (
      (!type || p.propertyType === type) &&
      (!bedrooms || p.beds >= bedrooms) &&
      (!bathrooms || p.baths >= bathrooms) &&
      (p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description?.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <>
      <PageBanner
        breadcrumb={{ homeLabel: "Home", homeTo: "/", current: "Rent" }}
        heading={{ firstText: "Homes for Rent,", secondText: "Made Simple" }}
        description="Explore a wide range of properties across prime locations."
        image={aboutImg}
        imageAlt="Sell banner"
      />

      {/* Background container without animation */}
      <div 
        className="container-fluid p-0"
        style={{
          backgroundImage: `url(${dotbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <section className="py-5">
          <motion.div 
            className="container py-5"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            {/* SEARCH & FILTER BAR */}
            <motion.div 
              className="container mb-4"
              variants={searchBarAnimation}
            >
              <div className="card border border-secondary shadow-lg bg-transparent rounded-4 rounded-md-pill">
                <div className="card-body py-2 px-2 px-md-3">
                  <div className="row g-2 align-items-center">
                    {/* Search (full width always, desktop stays same) */}
                    <div className="col-12 col-lg">
                      <div className="input-group">
                        <span className="input-group-text bg-transparent border-0 ps-3">
                          <FaSearch className="text-secondary" />
                        </span>

                        <input
                          type="search"
                          className="form-control border-0 shadow-none bg-transparent text-light custom-placeholder"
                          placeholder="Search property..."
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Property Type */}
                    <div className="col-6 col-md-4 col-lg-auto">
                      <select
                        className="form-select form-select-sm form-select-md rounded-pill bg-dark text-light border-0 px-3 pe-5 w-100"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                      >
                        <option value="">Type</option>
                        <option value="House">House</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Villa">Villa</option>
                      </select>
                    </div>

                    {/* Bathrooms */}
                    <div className="col-6 col-md-4 col-lg-auto">
                      <select
                        className="form-select form-select-sm form-select-md rounded-pill bg-dark text-light border-0 px-3 pe-5 w-100"
                        value={bathrooms}
                        onChange={(e) => setBathrooms(e.target.value)}
                      >
                        <option value="">Bath</option>
                        <option value="1">1+</option>
                        <option value="2">2+</option>
                        <option value="3">3+</option>
                      </select>
                    </div>

                    {/* Bedrooms */}
                    <div className="col-6 col-md-4 col-lg-auto">
                      <select
                        className="form-select form-select-sm form-select-md rounded-pill bg-dark text-light border-0 px-3 pe-5 w-100"
                        value={bedrooms}
                        onChange={(e) => setBedrooms(e.target.value)}
                      >
                        <option value="">Beds</option>
                        <option value="1">1+</option>
                        <option value="2">2+</option>
                        <option value="3">3+</option>
                      </select>
                    </div>

                    {/* Filter Button */}
                    <div className="col-6 col-md-12 col-lg-auto d-flex justify-content-end justify-content-lg-start">
                      <button
                        type="button"
                        className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: 44, height: 44 }}
                      >
                        <FaFilter />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="container py-5">
              <AnimatePresence mode="wait">
                {filteredProperties.length ? (
                  <motion.div 
                    className="row g-4 justify-content-center"
                    key="properties-grid"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={fadeIn}
                  >
                    {filteredProperties.map((property, index) => (
                      <motion.div
                        className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center"
                        key={property.id}
                        variants={isMobile ? fadeIn : cardAnimation}
                        initial="hidden"
                        animate="visible"
                        transition={{
                          duration: 0.6,
                          delay: isMobile ? 0 : index * 0.1,
                          ease: "easeInOut"
                        }}
                        whileHover={!isMobile ? { 
                          y: -5,
                          transition: { duration: 0.3 }
                        } : {}}
                      >
                        <PropertyCard {...property} />
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div 
                    className="col-12"
                    key="no-results"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={fadeInUp}
                  >
                    <p className="text-center text-muted">
                      No properties found
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}