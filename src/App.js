import "./App.css";
import Main from "./Components/Main";

import { Provider } from "react-redux";

import { store } from "./Store/appStore";

function App() {
  console.log(store.getState());
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
