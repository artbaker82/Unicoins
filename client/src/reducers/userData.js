import { LOAD_DATA } from "../actions/types";

const initialState = {};

const userDataReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_DATA: {
      return payload;
    }

    default: {
      return state;
    }
  }
};

export default userDataReducer;
