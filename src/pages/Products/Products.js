import React from "react";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import Pricing from "../../Components/Pricing/Pricing";
import HeroSection from "../../Components/HeroSection/HeroSection";

function Products() {
  return (
    <div>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <Pricing/>
    </div>
  );
}

export default Products;
