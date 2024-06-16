import React from "react";
import InputComponent from "./InputComponent";
import DisplayComponent from "./DisplayComponent";

function Main() {
  return (
    <>
      <h1>Main</h1>
      <div className="row" style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <InputComponent />
        </div>
        <div style={{ width: "50%" }}>
          <DisplayComponent />
        </div>
      </div>
    </>
  );
}

export default Main;
