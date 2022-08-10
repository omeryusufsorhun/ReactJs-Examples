import React from "react";

export default function Container(props) {
  return (
    <div
      style={{
        width: "400px",
        height: "400px",
        border: "2px solid black",
        margin: "0px auto",
      }}
    >
      {props.baslik}
      {props.number}
    </div>
  );
}
