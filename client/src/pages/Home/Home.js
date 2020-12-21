import React from "react";
import HeroComponent from "../../components/HeroComponent/HeroComponent";
import MultiPictureComponent from "../../components/MultiPictureComponent/MultiPictureComponent";
import BannerImage from "../../components/BannerImage/BannerImage"
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive} from "./HomeData"


function Home() {
  return (
    <div>
      <BannerImage name='hero' banner="HomeBanner" alt="Home banner"/>
      <HeroComponent {...homeObjOne} />
      <MultiPictureComponent {...homeObjTwo} />
      <HeroComponent {...homeObjThree} />
      <MultiPictureComponent {...homeObjFour} />
      <HeroComponent {...homeObjFive} />
    </div>
  );
}

export default Home;
