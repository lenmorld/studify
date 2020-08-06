import React, { Component } from "react";
import ReactDOM from "react-dom";

// import { Button } from "@material-ui/core";
import Button from '../src/components/Button'

import {
  PlusCircleOutlined
} from '@ant-design/icons';

const styles = {
  header: {
    padding: "1rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // boxShadow: "0px 1px 1px gray"
    // borderBottom: "2px solid gray"
  },
  // TODO: put this in a stylesheet in relation to app.less
  h1: {
    marginBottom: '0',
    color: '#350367'
  }
}

const Header = ({ renderQuestionForm }) => {
  return (
    <header
      style={styles.header}
    >
      <h1 style={styles.h1}>Studify</h1>
      <Button
        type="primary"
        onClick={renderQuestionForm}
      >
        <PlusCircleOutlined /><span>New Question</span>
      </Button>
    </header>
  );
};

export default Header;
