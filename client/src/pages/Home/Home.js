import React from "react";
import PrimaryComponent from "../../components/PrimaryComponent/PrimaryComponent";
import MultiPictureComponent from "../../components/MultiPictureComponent/MultiPictureComponent";
import BannerImage from "../../components/BannerImage/BannerImage";
import Footer from "../../components/Footer/Footer";
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount/ScrollToTopOnMount";
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive} from "./HomeData"


function Home() {
  return (
    <div>
      <ScrollToTopOnMount />
      <BannerImage name='hero' banner="HomeBanner" alt="Home banner" title='Rainbow Kidschool' desc='Children learning through active investigation'/>
      <PrimaryComponent {...homeObjOne} />
      <MultiPictureComponent {...homeObjTwo} />
      <PrimaryComponent {...homeObjThree} />
      <MultiPictureComponent {...homeObjFour} />
      <PrimaryComponent {...homeObjFive} />
      <Footer />
    </div>
  );
}

export default Home;
