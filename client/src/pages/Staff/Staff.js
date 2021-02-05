import React, { useState } from "react";
import BannerImage from "../../components/BannerImage/BannerImage";
import PrimaryComponent from "../../components/PrimaryComponent/PrimaryComponent";
import Searchbar from "../../components/Searchbar/Searchbar";
import StaffDirectory from "../../components/StaffDirectory/StaffDirectory";
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount/ScrollToTopOnMount";

import "./Staff.css";
import employees from "../../db/staffdb.json";
import { staffObj } from "./StaffData";
import Footer from "../../components/Footer/Footer";

function Staff() {
  const [query, setQuery] = useState("");
  const [isSorted, getSorted] = useState(null);
  const [db, getDirectory] = useState(employees);

  // Sort database entries comparatively and return respective values to ascend/descend in order
  const searchQuery = () => {
    console.log(isSorted)
    // return (isSorted ? )
    if (!isSorted) {
      getDirectory(
        db.sort((employeeX, employeeY) =>
          employeeX.name > employeeY.name ? 1 : -1
        )
      );
      getSorted(true);
    } else {
      getDirectory(
        db.sort((employeeX, employeeY) =>
          employeeX.name > employeeY.name ? -1 : 1
        )
      );
      getSorted(false);
    }
  };

  // Allows for further search functions to be added
  const startSearchQuery = (e) => {
    setQuery(e.target.value);
  };

  let displayedDirectory = db.filter((employee) => {
    return employee.name.toLowerCase().startsWith(query.toLocaleLowerCase());
  });

  // console.log(displayedDirectory);

  return (
    <div>
      <ScrollToTopOnMount />
      <BannerImage
        name="hero"
        banner="StaffBanner"
        alt="Staff banner"
        title="Meet our Educators"
        desc="The educators of Rainbow Kidschool are all registered with the College of Early Childhood Educators. We are particularly proud that our educators have been with Rainbow Kidschool for many years"
      />
      <Searchbar
        query={query}
        startSort={startSearchQuery}
        sortQuery={searchQuery}
      />
        {/* <h1 className="aboutStaff">Who are we?</h1> */}
      <div className="staffDirectoryWrapper">
        <StaffDirectory staff={displayedDirectory} />
      </div>
      <PrimaryComponent {...staffObj}></PrimaryComponent>
      <Footer />
    </div>
  );
}

export default Staff;
