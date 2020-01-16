import React, { Component } from "react";
import ReactDOM from "react-dom";

const Header = () => {
  return (
    <div
      style={{
        padding: "0.25rem 1rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "2px solid gray"
      }}
    >
      <h1>Studify</h1>
      <nav>Categories</nav>
    </div>
  );
};

export default Header;
