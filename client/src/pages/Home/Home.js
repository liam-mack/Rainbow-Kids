import React from "react";
import PrimaryComponent from "../../components/PrimaryComponent/PrimaryComponent";
import MultiPictureComponent from "../../components/MultiPictureComponent/MultiPictureComponent";
import BannerImage from "../../components/BannerImage/BannerImage"
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive} from "./HomeData"


function Home() {
  return (
    <div>
      <BannerImage name='hero' banner="HomeBanner" alt="Home banner" title='Rainbow Kidschool' desc='Children learning through active investigation'/>
      <PrimaryComponent {...homeObjOne} />
      <MultiPictureComponent {...homeObjTwo} />
      <PrimaryComponent {...homeObjThree} />
      <MultiPictureComponent {...homeObjFour} />
      <PrimaryComponent {...homeObjFive} />
    </div>
  );
}

export default Home;
