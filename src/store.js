import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from "redux"
import rootReducer from "./reducers";
import promise from "redux-promise-middleware";
import { composeWithDevTools } from "redux-devtools-extension"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// import hardSet from "redux-persist/lib/stateReconciler/hardSet";

const middleware = applyMiddleware(thunk, promise);
const enhancer = composeWithDevTools(middleware);
const persistConfig = {
  key: 'root',
  storage
  // stateReconciler: hardSet
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer, enhancer);
  let persistor = persistStore(store);
  return { store, persistor };
};
