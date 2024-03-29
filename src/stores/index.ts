import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import rootReducer, { RootState, RootAction } from "../reducers";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer<RootState, RootAction>(
  persistConfig,
  rootReducer
);
const composeEnhancers =
  typeof window === "object" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const configureStore = () => {
  const middlewares: any = [thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  return createStore(persistedReducer, composeEnhancers(middlewareEnhancer));
};

const store = configureStore();
const persistor = persistStore(store);

export { store, persistor };
