import React from "react";
import PrimaryComponent from "../../components/PrimaryComponent/PrimaryComponent";
import BannerImage from "../../components/BannerImage/BannerImage";
import Footer from "../../components/Footer/Footer";
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount/ScrollToTopOnMount";
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive} from "./HomeData";


function Home() {
  return (
    <div>
      <ScrollToTopOnMount />
      <BannerImage name='hero' banner="HomeBanner" alt="Home banner" title='Rainbow Kidschool' desc='Children learning through active investigation'/>
      <PrimaryComponent {...homeObjOne} />
      <PrimaryComponent {...homeObjTwo} />
      <PrimaryComponent {...homeObjThree} />
      <PrimaryComponent {...homeObjFour} />
      <PrimaryComponent {...homeObjFive} />
      <Footer />
    </div>
  );
}

export default Home;
