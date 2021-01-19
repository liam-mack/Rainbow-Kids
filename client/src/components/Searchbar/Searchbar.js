import React from "react";
import "./Searchbar.scss"


export default function Searchbar({ searched, sortingName }) {
  return (
    <header>
      <h1>Search Staff Directory: </h1>
      <input className="searchbar" type="textbox" placeholder="Search for Employee..." value={searched} onChange={sortingName}></input>
    </header>
  );
}
