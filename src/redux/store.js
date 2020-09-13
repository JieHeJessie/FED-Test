import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "redux/reducers";
import rootSaga from "sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// combine all sagas, accepts a generator and kicks of the process that runs in the background
export const initSagas = (sagaMiddleware) => {
  Object.values(rootSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
};

export default () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  initSagas(sagaMiddleware);
  return store;
};
