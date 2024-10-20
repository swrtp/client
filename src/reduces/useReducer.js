const initialState = {
  user: null,
  infoBooking: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
      };
    case "LOGOUT":
      return initialState;
    case "ADD_INFOR_BOOKING":
      return {
        ...state,
        infoBooking: action.payload.infoBooking,
      };
    default:
      return state;
  }
};

export default userReducer;
