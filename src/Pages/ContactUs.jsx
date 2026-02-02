import PageBanner from "../Components/Banner";
import Heading from "../Components/Heading";
import aboutImg from "../assets/Images/5.png";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";
import ContactCard from "../Components/ContactCard";
import { contactCardsData } from "../Constant/Data";
import Contact from "../Components/Contact";
import { motion } from "framer-motion";

export default function ContactUs() {
  const navigate = useNavigate();

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

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.97 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.7,
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


  const buttonStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const buttonItem = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      {/* Banner remains without animation */}
      <PageBanner
        breadcrumb={{ homeLabel: "Home", homeTo: "/", current: "Contact Us" }}
        heading={{ firstText: "Contact ", secondText: "Us" }}
        description="There are many variations of passages of Lorem Ipsum..."
        image={aboutImg}
        imageAlt="About banner"
      />

      <section className="talk-section py-5">
        <motion.div 
          className="container-fluid py-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
        >
          <motion.div 
            className="container"
            variants={staggerContainer}
          >
            <motion.div 
              className="talk-content text-center"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Heading firstText="Let's Talk" secondText="Real Estate" className="fs-4" />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h6 className="text-light fs-2 my-4 py-4 p-3 p-md-0">
                  Buy - Sell - Rent - Expert Help Just a Call Away
                </h6>
              </motion.div>

              <motion.div 
                className="d-flex justify-content-center gap-5 flex-wrap"
                variants={buttonStagger}
              >
                <motion.div variants={buttonItem}>
                  <Button
                    text="Buy a Property"
                    className="fw-semibold same-btn"
                    onClick={() => navigate("/buy")}
                  />
                </motion.div>
                <motion.div variants={buttonItem}>
                  <Button
                    text="Sell a Property"
                    className="fw-semibold same-btn"
                    onClick={() => navigate("/sell")}
                  />
                </motion.div>
                <motion.div variants={buttonItem}>
                  <Button
                    text="Rent a Home"
                    className="fw-semibold same-btn"
                    onClick={() => navigate("/rent")}
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="contact-details py-4"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <h5 className="text-center text-light py-4">
                  We're Here to Help with Your Property Needs
                </h5>
              </motion.div>

               <div className="contactcard p-4" >
              {contactCardsData.map((item) => (
                <ContactCard key={item.id} {...item} />
              ))}
            </div>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Contact />
          </motion.div>
{/* 
          <motion.div 
            className="container location"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeInUp}>
              <Heading
                firstText="Our"
                secondText="Location"
                className="text-center"
              />
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <p className="text-center fs-4 text-light mb-4">
                At Hallmark Buyers Agency, we simplify the property buying process
                with expert guidance every step of the way. From initial
                consultation to post-purchase support, our tailored approach
                ensures you achieve your investment goals with confidence. Trust
                us to secure the best properties at the best prices.
              </p>
            </motion.div>
          </motion.div> */}
        </motion.div>
      </section>

      {/* Map section - No animation as requested */}
      {/* <section className="">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.107461939068!2d150.7968057754332!3d-33.78372301465693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129a9d8445d9cd%3A0xf8b4fc5ff5c9705c!2s37%20Desborough%20Rd%2C%20Colyton%20NSW%202760%2C%20Australia!5e0!3m2!1sen!2slk!4v1757699398800!5m2!1sen!2slk"
          width="100%"
          height="600"
          className="map-iframe"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section> */}
    </>
  );
}