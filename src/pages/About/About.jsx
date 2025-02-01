import React from "react";
import {
  MinimalSectionAbout,
  WhyChooseUs,
  MissionAndVision,
  WhyDrivesUs,
} from "../../components/component";
// import { MinimalSectionAbout } from "../../components/MinimalSectionAbout/MinimalSectionAbout";

const AboutSection = () => {
  return (
    <>
      <div className="mt-20 mx-8 sm:mx-0">
        <MinimalSectionAbout />
        <MissionAndVision/>
        <WhyDrivesUs />
      </div>
    </>
  );
};

export default AboutSection;
