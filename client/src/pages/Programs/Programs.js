import React from "react";
import HeroComponent from "../../components/HeroComponent/HeroComponent";
import BannerImage from "../../components/BannerImage/BannerImage";
import {programObjOne, programObjTwo, programObjThree, programObjFour, programObjFive} from "./ProgramData"
import MultiPictureComponent from "../../components/MultiPictureComponent/MultiPictureComponent";

function Programs() {
  return (
    <div>
      <BannerImage name='hero' banner="ProgramBanner" alt="Program banner"/>
      <HeroComponent {...programObjOne}/>
      <HeroComponent {...programObjTwo}/>
      <MultiPictureComponent {...programObjThree}/>
      <HeroComponent {...programObjFour}/>
      <HeroComponent {...programObjFive}/>
    </div>
  );
}

export default Programs;
