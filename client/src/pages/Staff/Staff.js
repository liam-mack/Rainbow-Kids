import React from "react";
import HeroComponent from "../../components/HeroComponent/HeroComponent";
import BannerImage from "../../components/BannerImage/BannerImage"
import {staffObj} from "./StaffData"

function About() {
  return (
    <div>
      <h1>Staff Page</h1>
      <BannerImage name='hero' banner="StaffBanner" alt="Staff banner"/>
      <HeroComponent {...staffObj}></HeroComponent>
    </div>
  );
}

export default About;
