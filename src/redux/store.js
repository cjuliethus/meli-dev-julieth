import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";

const middleware = [];

if (process.env.NODE_ENV === "development") middleware.push(logger);
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(...middleware))
);

export default store;
