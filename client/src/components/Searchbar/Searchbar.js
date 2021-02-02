import React from "react";
import "./Searchbar.scss"


export default function Searchbar({ query, startSort }) {
  return (
    <header>
      <h1>Search Staff Directory: </h1>
      <input className="searchbar" type="textbox" placeholder="Search for Employee..." value={query} onChange={startSort}></input>
    </header>
  );
}
