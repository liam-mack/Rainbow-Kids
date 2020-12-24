import React from "react";
import PrimaryComponent from "../../components/PrimaryComponent/PrimaryComponent";
import BannerImage from "../../components/BannerImage/BannerImage"
import {aboutObjOne, aboutObjTwo, aboutObjThree, aboutObjFour} from "./AboutData"
import Timeline from "../../components/Timeline/Timeline";

function About() {
  return (
    <div>
      <BannerImage name='hero' banner="AboutBanner" alt="About banner"/>
      <Timeline />
      <PrimaryComponent {...aboutObjOne} />
      <PrimaryComponent {...aboutObjTwo} />
      <PrimaryComponent {...aboutObjThree} />
      <PrimaryComponent {...aboutObjFour} />
    </div>
  );
}

export default About;
