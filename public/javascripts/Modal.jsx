import React, { createContext, createElement, createPortal } from "react";
import ReactDOM from "react-dom";

// const themeContext = createContext();

// /**
//  * usage:
//  * <SomeContextProvider theme="DARK">
//  * </SomeContextProvider
//  *
//  */

// const SomeContextProvider = ({ children, theme = "LIGHT" }) => (
//   <themeContext.Provider>{children}</themeContext.Provider>
// );

/*
const Modal = ({ component, props = {} }) => {
  return createPortal(
    <div>{component}</div>,
    // createElement(SomeContextProvider, {}, createElement(component, props)),
    document.querySelector("#portal")
  );
};
*/

const Background = ({ children }) => {
  const styles = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    opacity: "0.8"
  };

  return <div style={styles}>{children}</div>;
};

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <Background>{children}</Background>,
    document.querySelector("#portal")
  );
};

export default Modal;
