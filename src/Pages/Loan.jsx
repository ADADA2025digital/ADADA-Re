import PageBanner from "../Components/Banner";
import aboutImg from "../assets/Images/8.png";
import Heading from "../Components/Heading";
import LoanCard from "../Components/LoanCard";
import { loanCardsData } from "../Constant/Data";
import LoanProcessStep from "../Components/LoanProcessStep";
import { loanProcessData } from "../Constant/Data";
import LoanDocCard from "../Components/LoanDocCard";
import { loanDocumentData } from "../Constant/Data";
import LoanEMICard from "../Components/LoanEMICard";
import dotbg from "../assets/Images/dot.png";
import { motion } from "framer-motion";

export default function Loan() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.22, 0.61, 0.36, 1]
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: "easeOut"
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.65,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const stepStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const stepItem = {
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

  return (
    <>
      {/* Banner remains without animation */}
      <PageBanner
        breadcrumb={{ homeLabel: "Home", homeTo: "/", current: "Home Loan" }}
        heading={{ firstText: "Home", secondText: "Loan" }}
        description="There are many variations of passages of Lorem Ipsum..."
        image={aboutImg}
        imageAlt="About banner"
      />
      
      {/* Home Loan Section */}
      <section className="homeloan py-5">
        <motion.div 
          className="container py-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <Heading
              firstText="Why choose our"
              secondText="Home loan"
              className="text-center text-md-start"
            />
          </motion.div>

          <motion.div 
            className="row g-4 justify-content-center"
            variants={staggerContainer}
          >
            {loanCardsData.map((item, index) => (
              <motion.div
                key={item.id}
                className="col-12 col-md-4 d-flex justify-content-center"
                variants={staggerItem}
                custom={index}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <LoanCard {...item} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <motion.section 
        className="howworks py-5"
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
        <motion.div 
          className="container"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <Heading
              firstText="How it"
              secondText="Works"
              className="text-center text-md-start mb-4"
            />
          </motion.div>

          <motion.div variants={fadeInUp}
            className="loan-process-wrapper d-flex justify-content-center flex-wrap gap-3"
          
          >
            {loanProcessData.map((item, index) => (
            
              
               
              
                <LoanProcessStep
                  key={item.id}
                  step={item.step}
                  title={item.title}
                  showArrow={index !== loanProcessData.length - 1}
                />
            
            ))}
          </motion.div >
        </motion.div>
      </motion.section>

      {/* Loan Documentation Section */}
      <motion.section 
        className="loandocument py-5"
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
        <motion.div 
          className="container"
          variants={staggerContainer}
        >
          <motion.div 
            className="row g-4 align-items-stretch"
            variants={staggerContainer}
          >
            {/* LEFT SIDE */}
            <motion.div 
              className="col-12 col-lg-6"
              variants={fadeInUp}
            >
              <Heading
                firstText="Minimum Documentation"
                secondText="Needed"
                className="text-center text-md-start mb-4"
              />

              <motion.div 
                variants={staggerContainer}
              >
                {loanDocumentData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    variants={staggerItem}
                    custom={index}
                  >
                    <LoanDocCard {...item} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div 
              className="col-12 col-lg-6 d-flex"
              variants={scaleIn}
              transition={{ delay: 0.3 }}
            >
              <LoanEMICard />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Loan Content Section */}
      <section className="loan-content">
        <motion.div 
          className="container py-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <Heading
              firstText="The right home loan makes your"
              secondText=" dream home stress-free"
              className="mb-4 text-center"
            />
          </motion.div>

          <motion.ul 
            className="loan-list list-unstyled text-light mx-auto text-center"
            variants={staggerContainer}
          >
            <motion.li 
              className="mb-2"
              variants={staggerItem}
            >
              Partnered with leading banks & financial institutions
            </motion.li>
            <motion.li 
              className="mb-2"
              variants={staggerItem}
            >
              Trusted by happy homeowners
            </motion.li>
          </motion.ul>
        </motion.div>
      </section>
    </>
  );
}