import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';
import rootSaga from './sagas';
import hotelsReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory();

const {
  createReduxHistory,
  routerMiddleware: reduxRouterMiddleware,
  routerReducer,
} = createReduxHistoryContext({
  history,
});

const rootReducer = combineReducers({
  hotels: hotelsReducer,
  router: routerReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(reduxRouterMiddleware, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export const reduxHistory = createReduxHistory(store);
export default store;
