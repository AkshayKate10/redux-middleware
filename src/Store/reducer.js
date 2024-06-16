import * as actions from "./actions";

const initialState = {
  firstName: "",
  lastName: "",
  age: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_FIRST_NAME: {
      return { ...state, firstName: action.value };
    }
    default: {
      return state;
    }
  }
}

export { reducer };
