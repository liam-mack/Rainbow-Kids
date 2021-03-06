import React from "react";
import PrimaryComponent from "../../components/PrimaryComponent/PrimaryComponent";
import BannerImage from "../../components/BannerImage/BannerImage";
import ContactForm from "../../components/ContactForm/ContactForm"
import {contactObjOne, contactObjTwo} from "./ContactData";
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount/ScrollToTopOnMount";
import Footer from "../../components/Footer/Footer";


function Contact(props) {
  return (
    <div>
      <ScrollToTopOnMount />
      <BannerImage name='hero' banner="ContactBanner" alt="Contact banner" title="Have Any Questions?" desc="Connect with us through phone or email"/>
      <PrimaryComponent {...contactObjOne} />
      <PrimaryComponent {...contactObjTwo} />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contact;
