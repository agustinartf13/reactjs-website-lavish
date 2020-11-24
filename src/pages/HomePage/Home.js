import React from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Pricing from "../../Components/Pricing/Pricing";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
      <Pricing/>
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Home;
