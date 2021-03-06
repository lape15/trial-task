import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import logger from "redux-logger";

const middleware = [logger];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export { store };
