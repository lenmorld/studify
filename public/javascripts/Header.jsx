import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Button } from "@material-ui/core";

const styles = {
  header: {
    padding: "0.25rem 1rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "2px solid gray"
  }
}

const Header = ({ renderQuestionForm }) => {
  return (
    <div
      style={styles.header}
    >
      <h1>Studify</h1>
      <nav>
        <ul>
          <li>
            <Button
              variant="contained"
              color="primary"
              onClick={renderQuestionForm}
            >
              + New
            </Button>
          </li>
          <li>Categories</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
