import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {reducers} from './reducer'

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default function configureStore() {
  const middlewares = [thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(reducers, composedEnhancers)

  return store
}

export const store = configureStore();