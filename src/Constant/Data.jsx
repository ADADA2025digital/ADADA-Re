// assets/Constant/Data.js

// Import images for properties
import property1Img from "../assets/Images/about1.jpg";
import property2Img from "../assets/Images/about1.jpg";
import property3Img from "../assets/Images/about1.jpg";

// Import images for offer cards
import cardImg1 from "../assets/Images/about1.jpg";
import cardImg2 from "../assets/Images/about1.jpg";
import cardImg3 from "../assets/Images/about1.jpg";
import cardImg4 from "../assets/Images/about1.jpg";

// Import icons for offer icons
import sellIcon from "../assets/Images/sell.png";
import buyIcon from "../assets/Images/buy.png";
import inspectionIcon from "../assets/Images/inspection.png";
import legalIcon from "../assets/Images/legal.png";
import evalIcon from "../assets/Images/eval.png";
import marketingIcon from "../assets/Images/marketing.png";
// import rentimage
import rentImg1 from "../assets/Images/about1.jpg";
import rentImg2 from "../assets/Images/about1.jpg";
import rentImg3 from "../assets/Images/about1.jpg";
// Properties data export
export const properties = [
  {
    id: 1,
    image: property1Img,
    status: "House For Sale",
    badgeLeft: 382,
    badgeRight: 382,
    title: "Modern Luxury Villa",
    description:
      "A beautifully designed modern villa featuring spacious interiors, premium finishes, and a serene outdoor space.",
    price: 100000,
    location: "Sydney, NSW",
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
  },
  {
    id: 2,
    image: property2Img,
    status: "Apartment For Sale",
    badgeLeft: 210,
    badgeRight: 210,
    title: "City View Apartment",
    description:
      "Stylish apartment located in the heart of the city with stunning skyline views and modern amenities.",
    price: 85000,
    location: "Parramatta, NSW",
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
  },
  {
    id: 3,
    image: property3Img,
    status: "House For Rent",
    badgeLeft: 145,
    badgeRight: 145,
    title: "Family Friendly Home",
    description:
      "Comfortable family home in a peaceful neighbourhood, close to schools, parks, and shopping centres.",
    price: 65000,
    location: "Blacktown, NSW",
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
  },
  {
    id: 4,
    image: property1Img,
    status: "Townhouse For Sale",
    badgeLeft: 198,
    badgeRight: 198,
    title: "Contemporary Townhouse",
    description:
      "Modern townhouse offering open-plan living, sleek interiors, and excellent connectivity to transport.",
    price: 92000,
    location: "Wentworthville, NSW",
    bedrooms: 3,
    bathrooms: 2,
    parking: 1,
  },
  {
    id: 5,
    image: property2Img,
    status: "Villa For Sale",
    badgeLeft: 260,
    badgeRight: 260,
    title: "Premium Garden Villa",
    description:
      "Elegant villa with private garden, premium fittings, and a calm lifestyle in a gated community.",
    price: 120000,
    location: "Norwest, NSW",
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
  },
  {
    id: 6,
    image: property3Img,
    status: "Apartment For Rent",
    badgeLeft: 175,
    badgeRight: 175,
    title: "Fully Furnished Apartment",
    description:
      "Move-in-ready furnished apartment ideal for professionals, featuring modern interiors and amenities.",
    price: 72000,
    location: "Homebush, NSW",
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
  },
];

// Offer icons data export
export const offerIconsData = [
  {
    id: 1,
    icon: sellIcon,
    title: "Sell your home",
    description: "There are many variations of ratiion in some form, by injected humour",
  },
  {
    id: 2,
    icon: legalIcon,
    title: "Legal services",
    description: "There are many variations of ratiion in some form, by injected humour",
  },
  {
    id: 3,
    icon: buyIcon,
    title: "Buy home",
    description: "There are many variations of ratiion in some form, by injected humour",
  },
  {
    id: 4,
    icon: evalIcon,
    title: "Free evalution",
    description: "There are many variations of ratiion in some form, by injected humour",
  },
  {
    id: 5,
    icon: inspectionIcon,
    title: "Home inspection",
    description: "There are many variations of ratiion in some form, by injected humour",
  },
  {
    id: 6,
    icon: marketingIcon,
    title: "Marketing presentation",
    description: "There are many variations of ratiion in some form, by injected humour",
  },
];


export const rentProperties = [
  {
    id: 1,
    variant: "rent",
    image: rentImg1,
    status: "House For Rent",
    title: "Family Friendly Home",
    description: "Spacious family home close to schools, parks, and shopping centres.",
    price: 550,
    beds: 3,
    baths: 2,
    parking: 2,
    area: 1800,
    propertyType: "House",
  },
  {
    id: 2,
    variant: "rent",
    image: rentImg2,
    status: "Apartment For Rent",
    title: "City View Apartment",
    description: "Modern apartment with city skyline views and premium amenities.",
    price: 480,
    beds: 2,
    baths: 2,
    parking: 1,
    area: 1200,
    propertyType: "Apartment",
  },
  {
    id: 3,
    variant: "rent",
    image: rentImg3,
    status: "Villa For Rent",
    title: "Luxury Garden Villa",
    description: "Elegant villa with private garden in a secure gated community.",
    price: 750,
    beds: 4,
    baths: 3,
    parking: 2,
    area: 2400,
    propertyType: "Villa",
  },
  {
    id: 4,
    variant: "rent",
    image: rentImg1,
    status: "Townhouse For Rent",
    title: "Modern Townhouse",
    description: "Stylish townhouse with open-plan living and great connectivity.",
    price: 620,
    beds: 3,
    baths: 2,
    parking: 1,
    area: 1600,
    propertyType: "Townhouse",
  },
  {
    id: 5,
    variant: "rent",
    image: rentImg2,
    status: "Apartment For Rent",
    title: "Fully Furnished Apartment",
    description: "Move-in-ready apartment ideal for professionals.",
    price: 520,
    beds: 2,
    baths: 1,
    parking: 1,
    area: 1100,
    propertyType: "Apartment",
  },
  {
    id: 6,
    variant: "rent",
    image: rentImg3,
    status: "House For Rent",
    title: "Suburban Family Home",
    description: "Comfortable home in a peaceful suburban neighbourhood.",
    price: 580,
    beds: 3,
    baths: 2,
    parking: 2,
    area: 1700,
    propertyType: "House",
  },
  {
    id: 7,
    variant: "rent",
    image: rentImg1,
    status: "Studio For Rent",
    title: "Compact Studio Living",
    description: "Ideal studio apartment for singles and students.",
    price: 350,
    beds: 1,
    baths: 1,
    parking: 0,
    area: 600,
    propertyType: "Studio",
  },
  {
    id: 8,
    variant: "rent",
    image: rentImg2,
    status: "Apartment For Rent",
    title: "Riverside Apartment",
    description: "Bright apartment with river views and modern interiors.",
    price: 600,
    beds: 2,
    baths: 2,
    parking: 1,
    area: 1300,
    propertyType: "Apartment",
  },
  {
    id: 9,
    variant: "rent",
    image: rentImg3,
    status: "House For Rent",
    title: "Executive Rental Home",
    description: "Premium executive home suitable for corporate rentals.",
    price: 820,
    beds: 4,
    baths: 3,
    parking: 2,
    area: 2600,
    propertyType: "House",
  },
  {
    id: 10,
    variant: "rent",
    image: rentImg1,
    status: "Unit For Rent",
    title: "Modern Residential Unit",
    description: "Low-maintenance unit with modern finishes.",
    price: 450,
    beds: 2,
    baths: 1,
    parking: 1,
    area: 1000,
    propertyType: "Unit",
  },
  {
    id: 11,
    variant: "rent",
    image: rentImg2,
    status: "Villa For Rent",
    title: "Coastal Style Villa",
    description: "Relaxed coastal villa with spacious outdoor areas.",
    price: 700,
    beds: 3,
    baths: 2,
    parking: 2,
    area: 2100,
    propertyType: "Villa",
  },
  {
    id: 12,
    variant: "rent",
    image: rentImg3,
    status: "Apartment For Rent",
    title: "Central Business Apartment",
    description: "Convenient apartment close to transport and offices.",
    price: 500,
    beds: 1,
    baths: 1,
    parking: 1,
    area: 900,
    propertyType: "Apartment",
  },
];


// src/data.jsx
import sellImg1 from "../assets/Images/buy1.png";
import sellImg2 from "../assets/Images/buy2.png";
import sellImg3 from "../assets/Images/buy3.png";

export const sellCardsData = [
  {
    id: 1,
    image: sellImg1,
    title: "Full Seller’s Service",
    description:
      "End-to-end selling support—from strategy to settlement—with expert guidance to maximise your sale outcome.",
    content: [
      "Property appraisal and pricing strategy based on real market insights.",
      "Campaign planning, professional marketing coordination, and buyer targeting.",
      "Negotiation support to secure the best offer and smooth settlement process.",
    ],
    leftBg: "linear-gradient(180deg, #ff7a3d, #ff4d4d)",
    rightBg: "#eeeeef",
    titleColor: "#ff4d4d",
  },
  {
    id: 2,
    image: sellImg2,
    title: "Marketing & Presentation",
    description:
      "Make your property stand out with premium presentation and high-performing marketing across key channels.",
    content: [
      "Photography, video, floor plans, and copywriting coordination.",
      "Online advertising strategy and listing optimisation to increase enquiries.",
      "Open home planning and feedback insights to refine the campaign.",
    ],
    leftBg: "#eeeeef",
    rightBg: "linear-gradient(180deg, #ff7a3d, #ff4d4d)",
    titleColor: "#eeeeef",
  },
  {
    id: 3,
    image: sellImg3,
    title: "Negotiation & Closing",
    description:
      "We help you negotiate confidently and close with clarity—ensuring the best price and minimal stress.",
    content: [
      "Offer evaluation and buyer qualification before acceptance.",
      "Negotiation strategy to protect your price and terms.",
      "Contract guidance and support through settlement milestones.",
    ],
    leftBg: "linear-gradient(180deg, #ff7a3d, #ff4d4d)",
    rightBg: "#f4f2ff",
    titleColor: "#ff4d4d",
  },
];


// src/data/supportCardsData.jsx
import supportImg1 from "../assets/Images/about1.jpg";
import supportImg2 from "../assets/Images/about2.jpg";
import supportImg3 from "../assets/Images/about3.jpg";
import supportImg4 from "../assets/Images/about4.jpg";

export const supportCardsData = [
  {
    id: 1,
    image: supportImg1,
    title: "Ongoing Assistance",
    description:
      "We begin with a thorough consultation to understand your specific goals, needs, and preferences.",
    description2:
      "Your aspirations are our priority, ensuring alignment with your vision from the outset.",
  },
  {
    id: 2,
    image: supportImg2,
    title: "Market Insights",
    description:
      "Data-driven insights help identify the most promising opportunities in the market.",
    description2:
      "We combine analytics with local expertise to guide confident decisions.",
  },
  {
    id: 3,
    image: supportImg3,
    title: "Tailored Strategy",
    description:
      "Every property journey is unique, and our strategy reflects your objectives.",
    description2:
      "We customise every step for maximum impact and clarity.",
  },
  {
    id: 4,
    image: supportImg4,
    title: "End-to-End Support",
    description:
      "From planning to execution, we stay with you at every stage.",
    description2:
      "Clear communication and expert guidance ensure a seamless experience.",
  },
];



// src/data.jsx
import IN1 from "../assets/Images/IN1.png";
import IN2 from "../assets/Images/IN2.png";
import IN3 from "../assets/Images/IN3.png";
import IN4 from "../assets/Images/IN4.png";
import IN5 from "../assets/Images/IN5.png";
import IN6 from "../assets/Images/IN6.png";

export const investmentCardsData = [
  {
    id: 1,
    image: IN1,
    title: "Integrity First",
    description:
      "We conduct all business with honesty and transparency, ensuring trust and confidence among clients, partners, and employees.",
  },
  {
    id: 2,
    image: IN2,
    title: "Smart Guidance",
    description:
      "Our team provides clear, data-backed guidance to help you make confident property and investment decisions.",
  },
  {
    id: 3,
    image: IN3,
    title: "Market Knowledge",
    description:
      "We track local trends and demand to identify the right opportunities at the right time.",
  },
  {
    id: 4,
    image: IN4,
    title: "Client Focused",
    description:
      "Your goals come first—our process is built around your priorities, timeline, and comfort level.",
  },
  {
    id: 5,
    image: IN5,
    title: "Risk-Aware Planning",
    description:
      "We assess key risks early and plan proactively to reduce surprises and improve outcomes.",
  },
  {
    id: 6,
    image: IN6,
    title: "End-to-End Support",
    description:
      "From the first conversation to final execution, we provide consistent support and communication.",
  },
];



// src/data.jsx
import { FaPhoneAlt, FaComments, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export const contactCardsData = [
  {
    id: 1,
    icon: <FaPhoneAlt />,
    title: "Call Us",
    value: "123 345 67676",
    href: "tel:12334567676",
  },
  {
    id: 2,
    icon: <FaComments />,
    title: "Chat Us",
    value: "Whatsapp",
    href: "https://wa.me/12334567676",
  },
  {
    id: 3,
    icon: <FaEnvelope />,
    title: "Email",
    value: "adada@gmail.com",
    href: "mailto:adada@gmail.com",
  },
  {
    id: 4,
    icon: <FaMapMarkerAlt />,
    title: "Visit Us",
    value: "123 Main street",
    href: "https://www.google.com/maps?q=123+Main+street",
  },
];








import { FaFileAlt, FaClock, FaMoneyBillWave  } from "react-icons/fa";

export const loanCardsData = [
  {
    id: 1,
    icon: <FaFileAlt  />,
    title: "Simple documentation",
     description:"Minimum paper work, smooth process",
  },
  {
    id: 2,
    icon: <FaMoneyBillWave  />,
    title: "Best intrest date",
    description:"Market competitive & transpirent",
  },
  {
    id: 3,
    icon: <FaClock />,
    title: "Quick approval",
    description:"Reduce EMI with better waiting",
  },

];


// src/data/loanProcessData.jsx
export const loanProcessData = [
  { id: 1, step: "1", title: "Apply Online" },
  { id: 2, step: "2", title: "Eligibility Check" },
  { id: 3, step: "3", title: "Doc Verification" },
  { id: 4, step: "4", title: "Loan Approval" },
  { id: 5, step: "5", title: "Disbursement" },
];


// src/data.jsx (add at bottom)
import { FaStarOfLife } from "react-icons/fa";

export const loanDocumentData = [
  {
    id: 1,
    title: "Identification Proof",
    description:
      "There are many variations of Lorem but the majority have suffered There many variations of Lorem but the majority have suffered",
    icon: <FaStarOfLife />,
  },
  {
    id: 2,
    title: "Income Proof",
    description:
      "There are many variations of Lorem but the majority have suffered There many variations of Lorem but the majority have suffered",
    icon: <FaStarOfLife />,
  },
  {
    id: 3,
    title: "Address Proof",
    description:
      "There are many variations of Lorem but the majority have suffered There many variations of Lorem but the majority have suffered",
    icon: <FaStarOfLife />,
  },
  {
    id: 4,
    title: "Property Documents",
    description:
      "There are many variations of Lorem but the majority have suffered There many variations of Lorem but the majority have suffered",
    icon: <FaStarOfLife />,
  },
];



// src/data.jsx  (or wherever you keep data)
import feature1 from "../assets/Images/about1.jpg";
import feature2 from "../assets/Images/about2.jpg";
import feature3 from "../assets/Images/about3.jpg";
import feature4 from "../assets/Images/about4.jpg";

export const featuredArticlesData = [
  {
    id: 1,
    image: feature1,
    description:
      "Discover key market trends shaping property prices and what it means for buyers and investors this season.",
  },
  {
    id: 2,
    image: feature2,
    description:
      "Simple ways to improve your home’s value before listing—small upgrades that attract more buyers.",
  },
  {
    id: 3,
    image: feature3,
    description:
      "Choosing the right suburb: factors like transport, schools, and growth corridors that matter most.",
  },
  {
    id: 4,
    image: feature4,
    description:
      "Rental demand insights: what tenants look for today and how to maximise weekly returns.",
  },
];


// src/data.jsx (append this)
import { FaHome, FaKey, FaHandshake } from "react-icons/fa";

export const aboutContentCardsData = [
  {
    id: 1,
    icon: <FaHome />,
    title: "Buy",
    desc: "There are many variations of Lorem but the majority have suffered",
  },
  {
    id: 2,
    icon: <FaKey />,
    title: "Rent",
    desc: "There are many variations of Lorem but the majority have suffered",
  },
  {
    id: 3,
    icon: <FaHandshake />,
    title: "Sale",
    desc: "There are many variations of Lorem but the majority have suffered",
  },
];


// ../assets/Constant/Data.jsx
import aboutC1 from "../assets/Images/about1.jpg";
import aboutC2 from "../assets/Images/about2.jpg";
import aboutC3 from "../assets/Images/about3.jpg";
import aboutC4 from "../assets/Images/about4.jpg";
import aboutC5 from "../assets/Images/about1.jpg";
import aboutC6 from "../assets/Images/about2.jpg";

export const aboutCardsData = [
  {
    id: 1,
    image: aboutC1,
    title: "Lorem ipsum",
    description:
      "There are many variations of Lorem but the majority have suffered",
  },
  {
    id: 2,
    image: aboutC2,
    title: "Lorem ipsum",
    description:
      "There are many variations of Lorem but the majority have suffered",
  },
  {
    id: 3,
    image: aboutC3,
    title: "Lorem ipsum",
    description:
      "There are many variations of Lorem but the majority have suffered",
  },
  {
    id: 4,
    image: aboutC4,
    title: "Lorem ipsum",
    description:
      "There are many variations of Lorem but the majority have suffered",
  },
  {
    id: 5,
    image: aboutC5,
    title: "Lorem ipsum",
    description:
      "There are many variations of Lorem but the majority have suffered",
  },
  {
    id: 6,
    image: aboutC6,
    title: "Lorem ipsum",
    description:
      "There are many variations of Lorem but the majority have suffered",
  },
];


// ../assets/Constant/Data.jsx
import team1 from "../assets/Images/team1.png";
import team2 from "../assets/Images/team2.png";
import team3 from "../assets/Images/team3.png";
import team4 from "../assets/Images/team4.png";

export const teamCardsData = [
  {
    id: 1,
    image: team1,
    name: "M.S Lara",
    description: "look like readable English. Many desktop publishing package",
  },
  {
    id: 2,
    image: team2,
    name: "A.T Kal",
    description: "look like readable English. Many desktop publishing package",
  },
  {
    id: 3,
    image: team3,
    name: "K.S Forw",
    description: "look like readable English. Many desktop publishing package",
  },
  {
    id: 4,
    image: team4,
    name: "A.M quil",
    description: "look like readable English. Many desktop publishing package",
  },
];



import about1 from "../assets/Images/about1.jpg";
import about2 from "../assets/Images/about2.jpg";
import about3 from "../assets/Images/about3.jpg";
import about4 from "../assets/Images/about4.jpg";

export const offerCardsData = [
  {
    id: 1,
    image: about1,
    title: "Lorem ipsum",
    description: "There are many variations of many variat passages of Lorem Ipsum",
  },
  {
    id: 2,
    image: about2,
    title: "Lorem ipsum",
    description: "There are many variations of many variat passages of Lorem Ipsum",
  },
  {
    id: 3,
    image: about3,
    title: "Lorem ipsum",
    description: "There are many variations of many variat passages of Lorem Ipsum",
  },
  {
    id: 4,
    image: about4,
    title: "Lorem ipsum",
    description: "There are many variations of many variat passages of Lorem Ipsum",
  },
];




// If you want a default export, you can add:
// export default properties;
// But I recommend using named exports as above