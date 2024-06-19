import React from "react";
import InputComponent from "./InputComponent";
import DisplayComponent from "./DisplayComponent";
import { Provider } from "react-redux";
import { store } from "../Store/appStore";

function Main() {
  return (
    <Provider store={store}>
      <div>
        <h1>Main</h1>
        <div className="row" style={{ display: "flex" }}>
          <div style={{ width: "50%" }}>
            <InputComponent />
          </div>
          <div style={{ width: "50%" }}>
            <DisplayComponent />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default Main;
