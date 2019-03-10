import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './modules/reducers';
import rootSaga from './modules/sagas';
import createSagaMiddleware, {END} from 'redux-saga';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

export function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];
  const devCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  const composeEnhancers = process.env.NODE_ENV !== 'production' && devCompose ? devCompose : compose;

  const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middleware),
  ));

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  return store;
}

const store = configureStore();
store.runSaga(rootSaga);

ReactDOM.render((
  <Provider store={store}>
    <App/>
  </Provider>
), document.getElementById('root'));

serviceWorker.register();
