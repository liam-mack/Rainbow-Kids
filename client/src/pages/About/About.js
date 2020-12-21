import React from "react";
import HeroComponent from "../../components/HeroComponent/HeroComponent";
import BannerImage from "../../components/BannerImage/BannerImage"
import {aboutObjOne, aboutObjTwo, aboutObjThree, aboutObjFour} from "./AboutData"
import Timeline from "../../components/Timeline/Timeline";

function About() {
  return (
    <div>
      <BannerImage name='hero' banner="AboutBanner" alt="About banner"/>
      <Timeline />
      <HeroComponent {...aboutObjOne} />
      <HeroComponent {...aboutObjTwo} />
      <HeroComponent {...aboutObjThree} />
      <HeroComponent {...aboutObjFour} />
    </div>
  );
}

export default About;
