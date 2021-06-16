import React from "react";
import { Button } from "reactstrap";
const SearchBar = () => (
  <form className="middle" action="/" method="get">
    <label htmlFor="header-search">
      <span className="visually-hidden">Search Employees</span>
    </label>
    <input
      type="text"
      id="header-search"
      placeholder="Search customers"
      name="s"
    />
    <Button type="submit" color="info">
      {" "}
      <a style={{ color: "white" }}> Search </a>
    </Button>{" "}
  </form>
);

export default SearchBar;
