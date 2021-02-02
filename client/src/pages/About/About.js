import React from "react";
import PrimaryComponent from "../../components/PrimaryComponent/PrimaryComponent";
import BannerImage from "../../components/BannerImage/BannerImage"
import {aboutObjOne, aboutObjTwo, aboutObjThree, aboutObjFour} from "./AboutData"
import Timeline from "../../components/Timeline/Timeline";
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount/ScrollToTopOnMount";
import Footer from "../../components/Footer/Footer";

function About() {
  return (
    <div>
      <ScrollToTopOnMount />
      <BannerImage name='hero' banner="AboutBanner" alt="About banner" title="About Us" desc="Rainbow Kidschool is a proud member of Child.Family.Connect Inc. Our network of centres is a resource-sharing partnership of five independently operated, non-profit, school-based child care centres."/>
      <Timeline />
      <PrimaryComponent {...aboutObjOne} />
      <PrimaryComponent {...aboutObjTwo} />
      <PrimaryComponent {...aboutObjThree} />
      <PrimaryComponent {...aboutObjFour} />
      <Footer />
    </div>
  );
}

export default About;
