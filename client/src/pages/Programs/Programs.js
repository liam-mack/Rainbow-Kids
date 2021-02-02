import React from "react";
import PrimaryComponent from "../../components/PrimaryComponent/PrimaryComponent";
import BannerImage from "../../components/BannerImage/BannerImage";
import {programObjOne, programObjTwo, programObjThree, programObjFour, programObjFive} from "./ProgramData"
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount/ScrollToTopOnMount";
import Footer from "../../components/Footer/Footer";



function Programs() {
  return (
    <div>
      <ScrollToTopOnMount />
      <BannerImage name='hero' banner="ProgramBanner" alt="Program banner" title="Programs and Registration" desc="Full program of active learning for preschool and school-aged children"/>
      <PrimaryComponent {...programObjOne}/>
      <PrimaryComponent {...programObjTwo}/>
      <PrimaryComponent {...programObjThree}/>
      <PrimaryComponent {...programObjFour}/>
      <PrimaryComponent {...programObjFive}/>
      <Footer />
    </div>
  );
}

export default Programs;
