import React, { useState } from "react";

function InputComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onInputChange = (event) => {
    const {
      target: { id, value },
    } = event;

    if (id === "firstName") {
      setFirstName(value);
    } else if (id === "lastName") {
      setLastName(value);
    }
  };
  return (
    <>
      <h2>Input Component</h2>
      <div>
        First Name new :&nbsp;
        <input id="firstName" onChange={onInputChange} value={firstName} />
      </div>
      <div>
        Last Name :&nbsp;
        <input id="lastName" onChange={onInputChange} value={lastName} />
      </div>
      <div>
        <button> Submit</button>
      </div>
    </>
  );
}

export default InputComponent;
