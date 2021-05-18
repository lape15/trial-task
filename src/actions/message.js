import { SHOW_SUCCESS_MESSAGE, SHOW_ERROR_MESSAGE } from "./types";
export const showErrorMessage = () => ({
  type: SHOW_ERROR_MESSAGE,
});

export const showSuccessMessage = () => ({
  type: SHOW_SUCCESS_MESSAGE,
});
