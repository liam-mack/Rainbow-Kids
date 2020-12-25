import React, { useState } from "react";
import BannerImage from "../../components/BannerImage/BannerImage"
import PrimaryComponent from "../../components/PrimaryComponent/PrimaryComponent";
import Searchbar from '../../components/Searchbar/Searchbar';
import StaffComponent from "../../components/StaffComponent/StaffComponent"
import StaffDirectory from "../../components/StaffDirectory/StaffDirectory";

import "./Staff.css"
import employees from '../../db/staffdb.json';
import {staffObj} from "./StaffData"

function Staff() {
  const [query, setQuery] = useState("");
  const [isSorted, getSorted] = useState(null);
  const [db, getDirectory] = useState(employees);

    // Sort database entries comparatively and return respective values to ascend/descend in order
    const searchQuery = () => {
      // return (isSorted ? )
      if (!isSorted) {
        getDirectory(db.sort((employeeX, employeeY) => (employeeX.name > employeeY.name ? 1: -1)));
        getSorted(true);
      } else {
        getDirectory(db.sort((employeeX, employeeY) => (employeeX.name > employeeY.name ? -1 : 1)));
        getSorted(false);
      }
}

  // Allows for further search functions to be added
  const startSearchQuery = (e) => {
    setQuery(e.target.value)
  }

let displayedDirectory =  db.filter((employee) => {
  return employee.name.toLowerCase().startsWith(query.toLocaleLowerCase())
});


  return (
    <div>
      <BannerImage name='hero' banner="StaffBanner" alt="Staff banner"/>
      <Searchbar search = {query} sortingName = {startSearchQuery} startSorting = {searchQuery} />
      {/* <Directory seeds ={displayedDirectory}/> */}
      <div className = "staffDirectoryWrapper">
      < StaffDirectory staff = {displayedDirectory} />
      </div>
      <PrimaryComponent {...staffObj}></PrimaryComponent>
      
    </div>
  );
}

export default Staff;
