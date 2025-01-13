/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStore, Reducer } from "redux";
import { ConnectedSpinner, SpinnerFC } from "./Spinner";
import { Provider } from "react-redux";
import { PayloadAction, State } from "./types";

/*
Fetch data with redux action

Inside component
async function fetchData() {
  try {
    dispatch({ type: 'request/loading' });
    const response = await fetch();
    const data = await response.json();

    dispatch({ type: 'request/success', payload: data });
  } catch (e) {
    dispatch({ type: 'request/fail', payload: e });
  }
}


// extracted fetch data util
// require dispatch as a parameter
async function fetchData(dispatch) {
  try {
    dispatch({ type: 'request/loading' });
    const response = await fetch();
    const data = await response.json();

    dispatch({ type: 'request/success', payload: data });
  } catch (e) {
    dispatch({ type: 'request/fail', payload: e });
  }
}

// thunk action (must have middleware for redux to accept thunk action)
// redux-thunk (https://github.com/reduxjs/redux-thunk)
// getState param is optional
const fetchDataThunkAction = async (dispatch, getState) => {
  try {
    dispatch({ type: 'request/loading' });
    const response = await fetch();
    const data = await response.json();

    dispatch({ type: 'request/success', payload: data });
  } catch (e) {
    dispatch({ type: 'request/fail', payload: e });
  }
}

// usage
store.dispatch(fetchDataThunkAction);

const fetchDataThunkActionById = (id: number) => async (dispatch, getState) => {
  try {
    dispatch({ type: 'request/loading' });
    const response = await fetch(`http://localhost:1234/hello?id=${id}`);
    const data = await response.json();

    dispatch({ type: 'request/success', payload: data });
  } catch (e) {
    dispatch({ type: 'request/fail', payload: e });
  }
}

// usage
store.dispatch(fetchDataThunkActionById(123));


// synchronous thunk action
const prepareReports = (dispatch, getState) => {
  dispatch({ type: 'report/preparing' });

  // process abc xyz synchronous
  const state = getState();
  const report = JSON.stringify(state);

  // compute reports from state
  dispatch({ type: 'report/save', payload: reports });
}

// usage
store.dispatch(prepareReports);

// include params
const prepareReportsWithParams = (params: any[]) => (dispatch, getState) => {
  dispatch({ type: 'report/step1' });

  // process abc xyz synchronous
  const state = getState();
  const reports = JSON.stringify(state);

  // compute reports from state
  dispatch({ type: 'report/step2', payload: reports });
}

// usage
store.dispatch(prepareReportsWithParams([1, 2, 3]));

*/

const initialState: State = { isLoading: false };

const store = createStore(
  reducer as Reducer<State, PayloadAction>,
  initialState
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

    case "toggle/loading": {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    }

    default:
      return state;
  }
}

const AdvancedRedux: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h4>Advanced redux</h4>
        {/* <Spinner isLoading={store.getState().isLoading} toggleLoading={() => {}} /> */}
        <ConnectedSpinner />
        <SpinnerFC />
      </div>
    </Provider>
  );
};

export default AdvancedRedux;
