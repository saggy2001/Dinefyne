import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Footer from "../components/Footer";
import {
  homeObjOne,
  // homeObjThree,
  homeObjTwo,
} from "../components/InfoSection/Data";
import Services from "../components/Services";
// import ClientSection from "../components/ClientSection";
// import Feedback from "../components/FeedbackSection/Feedback";
import Benefits from "../components/BenefitsSection/Benefits";
import Contact from "../components/Contact/Contact";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      {/* <ClientSection /> */}
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Benefits />
      <Services />
      {/* <Feedback /> */}
      {/* <InfoSection {...homeObjThree} /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
