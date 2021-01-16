import React from "react";
import "./Searchbar.scss"


export default function Searchbar({ searched, sortingName, startSorting }) {
  return (
    <header>
      <h1>Search Staff Directory: </h1>
      <input className="searchbar" type="textbox" placeholder="Enter a name" value={searched} onChange={sortingName}></input>
    </header>
  );
}
