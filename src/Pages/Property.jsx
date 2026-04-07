import PageBanner from "../Components/Banner";
import aboutImg from "../assets/Images/6.png";

export default function Property() {
  return (
    <>
      <PageBanner
        breadcrumb={{ homeLabel: "Home", homeTo: "/", current: "About Us" }}
        heading={{ firstText: "Property", secondText: "Details" }}
        description="There are many variations of passages of Lorem Ipsum..."
        image={aboutImg}
        imageAlt="About banner"
      />

      {/* rest of page */}
    </>
  );
}
 