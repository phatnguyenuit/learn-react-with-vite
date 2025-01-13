/* eslint-disable @typescript-eslint/no-explicit-any */
import { Action, applyMiddleware, createStore, Reducer } from "redux";
import { useEffect, useState } from "react";

// store
// reducer
// action creator
// dispatcher
// middleware (optional)

// store -> global state
// store -> global state -> dispatch(action) -> middlewares (if any) -> reducer -> store

// action should be plain object
// reducer should return new state for every action for all cases -> state is immutable (bất biến)
// return new state from current state
// or use immutable libraries to write changes in mutable way
// state.isOpen = action.payload; => return new state;

// react-redux
// React Redux is the official React UI bindings layer for Redux.
// It lets your React components read data from a Redux store, and dispatch actions to the store to update state.

type State = {
  isLoading: boolean;
  data?: unknown;
};

interface PayloadAction<TPayload = unknown> extends Action {
  payload?: TPayload;
}

const initialState: State = { isLoading: false };

const logger = (store: any) => (next: any) => (action: any) => {
  console.log("dispatching", action);
  const result = next(action);

  console.log("result", result);
  console.log("next state", store.getState());
  return action;
};

const store = createStore(
  reducer as Reducer<State, PayloadAction>,
  initialState,
  applyMiddleware(logger)
);

function reducer(state: State, action: PayloadAction): State {
  console.log("reducer:", state, action);

  switch (action.type) {
    case "request/data": {
      return {
        ...state,
        isLoading: true,
      };
    }

    default:
      return state;
  }
}

const requestData = () => ({ type: "request/data" });

const SimpleRedux: React.FC = () => {
  const [state, setState] = useState(store.getState);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      console.log("new store changes", store.getState());
      setState(store.getState());
    });

    return () => {
      console.log("[unmount], unsubscribe from store!");
      unsubscribe();
    };
  }, []);

  // const handleClick = () => {
  //   const state = store.getState();

  //   console.log("state", state);
  // };

  const handleDispatch = () => {
    store.dispatch(requestData());
  };

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={handleDispatch}>Dispatch to store</button>
    </div>
  );
};

export default SimpleRedux;
