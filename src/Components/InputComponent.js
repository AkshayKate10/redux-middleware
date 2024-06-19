import React, { useState } from "react";
import { useDispatch } from "react-redux";

function InputComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const dispatch = useDispatch();

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

  const onSubmit = () => {
    const action = { type: "SET_FIRST_NAME", value: firstName };
    dispatch(action);
  };

  return (
    <>
      <h2>Input Component</h2>
      <div>
        First Name :&nbsp;
        <input id="firstName" onChange={onInputChange} value={firstName} />
      </div>
      <div>
        Last Name :&nbsp;
        <input id="lastName" onChange={onInputChange} value={lastName} />
      </div>
      <div>
        <button onClick={onSubmit}> Submit</button>
      </div>
    </>
  );
}

export default InputComponent;
