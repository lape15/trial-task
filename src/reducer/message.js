import { SHOW_SUCCESS_MESSAGE, SHOW_ERROR_MESSAGE } from "../actions/types";
const initialState = {
  message: "",
};

const messageReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case SHOW_ERROR_MESSAGE:
      return {
        ...state,
        message: "Error Submitting form",
      };
    case SHOW_SUCCESS_MESSAGE:
      return {
        ...state,
        message: "Form submitted successfully",
      };
    default:
      return state;
  }
};

export default messageReducer;
