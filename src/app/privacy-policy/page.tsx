import Navbar from "@/_components/Navbar";
import Hero from "@/_components/Hero";
import Footer from "@/_components/Footer";
import PrivatePolicies from "./_sections/PrivatePolicies";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <Hero headingText="Privacy Policy" displayImage={false} />
      <PrivatePolicies
        businessName="Sabir's Grills"
        businessEmail="info@sabirs.co.uk"
        businessPhone="01709 838899"
      />
      <Footer />
    </>
  );
}
