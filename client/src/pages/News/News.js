import React from "react";
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount/ScrollToTopOnMount";
import Footer from "../../components/Footer/Footer";
import MultiPictureComponent from "../../components/MultiPictureComponent/MultiPictureComponent";
import { newsObjOne } from "./NewsData.js"


// Fix: Light text to picture descriptions
function About() {
  return (
    <div>
      <ScrollToTopOnMount />
      {/* <h1>News Page</h1>
      <p>
        NEWS CAROUSEL
      </p>
        <MultiPictureComponent {...newsObjOne}/> */}

      <Footer />
    </div>
  );
}

export default About;
