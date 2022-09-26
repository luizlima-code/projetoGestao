import createSagaMiddleware from "redux-saga";
import { legacy_createStore as createStore, applyMiddleware } from "redux";

import rootReducer from "./ducks/rootReducer";
import { rootSaga } from "./ducks/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

export default store;