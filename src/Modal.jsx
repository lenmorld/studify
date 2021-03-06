import React, { createContext, createElement } from "react"
import ReactDOM from "react-dom"

const themeContext = createContext()

// /**
//  * usage:
//  * <SomeContextProvider theme="DARK">
//  * </SomeContextProvider
//  *
//  */

const SomeContextProvider = ({ children, theme = "LIGHT" }) => (
  <themeContext.Provider>{children}</themeContext.Provider>
)

/*
const Modal = ({ component, props = {} }) => {
  return createPortal(
    <div>{component}</div>,
    // createElement(SomeContextProvider, {}, createElement(component, props)),
    document.querySelector("#portal")
  );
};
*/
const styles = {
  backdrop: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    opacity: "0.8",
    // alignment
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center"
  },

  container: {
    backgroundColor: "white", // cancel out the backdrop transparency
    position: "absolute",
    top: "12%", // 100-75% = 25/2
    left: "12%",
    display: "flex",

    minHeight: "75%",
    width: "75%",
  },

  content: {
    // flexBasis: "50%",

    border: "1px solid lightgray",
    // height: "100%",
    // width: "100%"
    flex: 1, // consume free space on the main axis, instead of 100%

    display: "flex",
    flexDirection: "column",
  },
}

// TODO: improve composition via HoC or render-props?

const Backdrop = ({ onHide }) => {
  return <div style={styles.backdrop} onClick={onHide} />
}

const Content = ({ children }) => {
  // {/* component on center */}
  return (
    <div style={styles.container}>
      <div style={styles.content}>{children}</div>
    </div>
  )
}

// TODO: make work with createElement

const Modal = ({ children, onHide }) => {
  // const Modal = ({ Component }) => {
  return ReactDOM.createPortal(
    <SomeContextProvider>
      <Backdrop onHide={onHide}>{children}</Backdrop>
      <Content>{children}</Content>
    </SomeContextProvider>,
    document.querySelector("#portal"),
  )
}

// const Modal = ({ Component, props = {} }) => {
//   return ReactDOM.createPortal(
//     createElement(
//       SomeContextProvider,
//       {},
//       createElement(Backdrop, {}, createElement(Component, props))
//     ),
//     document.querySelector("#portal")
//   );
// };

export default Modal
