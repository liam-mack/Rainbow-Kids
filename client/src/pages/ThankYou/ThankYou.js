import React from "react";
import PrimaryComponent from "../../components/PrimaryComponent/PrimaryComponent";
import {thankYouMessage} from "./ThankYouData"
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount/ScrollToTopOnMount";
import Footer from "../../components/Footer/Footer";


// function: user is redirected to thank you page after submitting the form on the contact us page
// Note: Redirecting action on the Form component isn't set up to redirect to this page yet
function ThankYou() {
  return (
    <div>
      <ScrollToTopOnMount />
      <PrimaryComponent {...thankYouMessage}/>
      <Footer />
    </div>
  );
}

export default ThankYou;
