import React from "react";
import { useSelector } from "react-redux";

function DisplayComponent() {
  const firstName = useSelector((store) => store.firstName);
  return (
    <>
      <h2>Display Component</h2>
      <div>{firstName}</div>
    </>
  );
}

export default DisplayComponent;
