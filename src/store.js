import { createStore,applyMiddleware , compose} from "redux";
import reducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import sagaRoot from "./saga/saga";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(sagaRoot);

export default store;