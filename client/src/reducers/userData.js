import { LOAD_DATA, CLEAR_DATA } from "../actions/types";

const initialState = {};

const userDataReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_DATA: {
      return payload;
    }

    case CLEAR_DATA: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

export default userDataReducer;
