import React from "react";
import PrimaryComponent from "../../components/PrimaryComponent/PrimaryComponent";
import BannerImage from "../../components/BannerImage/BannerImage";
import {programObjOne, programObjTwo, programObjThree, programObjFour, programObjFive} from "./ProgramData"
import MultiPictureComponent from "../../components/MultiPictureComponent/MultiPictureComponent";

function Programs() {
  return (
    <div>
      <BannerImage name='hero' banner="ProgramBanner" alt="Program banner" title="Programs and Registration" desc="Full program of active learning for preschool and school-aged children"/>
      <PrimaryComponent {...programObjOne}/>
      <PrimaryComponent {...programObjTwo}/>
      <MultiPictureComponent {...programObjThree}/>
      <PrimaryComponent {...programObjFour}/>
      <PrimaryComponent {...programObjFive}/>
    </div>
  );
}

export default Programs;
