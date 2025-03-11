import React from "react";
import HeroSection from "../components/HeroSection";
import TopCategoryProducts from "../components/TopCategoryProducts";
import FeatureSection from "../components/FeatureSection";



const Home: React.FC = () => {
  return (
    <div>
     <HeroSection/>
     <TopCategoryProducts/>
     <FeatureSection/>
    </div>
  );
};

export default Home;
