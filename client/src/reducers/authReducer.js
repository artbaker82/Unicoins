const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};

export default authReducer;
