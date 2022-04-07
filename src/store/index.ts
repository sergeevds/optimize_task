import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import { save } from "redux-localstorage-simple";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
 
const enhancer = composeEnhancers(
  applyMiddleware(
    save({ namespace: "todo-list" })
  ),
  // other store enhancers if any
);

export const store = createStore(
  rootReducer,
  /* preloadedState, */
  enhancer
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
