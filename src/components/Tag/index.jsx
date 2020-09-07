import React from "react";

// import { Tag as TagUI } from 'antd'

export default function Tag({ key, color, children, style, ...rest }) {
  return (
    <div
      key={key}
      style={{
        color: "white",
        backgroundColor: color,
        display: "inline-block",
        padding: "5px 10px",
        borderRadius: "5px",
        ...style
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
