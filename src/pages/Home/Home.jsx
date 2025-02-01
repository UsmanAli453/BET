import React from "react";
import {
  LargeTextContent,
  CTA,
  FAQ,
  Hero,
  Services,
  Testimonials,
  WhyChooseUs,
 
} from "../../components/component";

const Home = () => {
  return (
    <>
        <Hero />
        <CTA />
        <Services />
        <FAQ />
        <WhyChooseUs />
        <Testimonials />
        <LargeTextContent />
    </>
  );
};

export default Home;
