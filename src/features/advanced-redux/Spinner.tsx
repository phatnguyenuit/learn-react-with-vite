/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { State } from "./types";
import { bindActionCreators, Dispatch } from "redux";

type SpinnerProps = {
  isLoading: boolean;
  toggleLoading: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

class Spinner extends React.PureComponent<SpinnerProps> {
  constructor(props: SpinnerProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div>
        <p>Is loading: {`${this.props.isLoading}`}</p>
        <button onClick={this.props.toggleLoading}>Toggle loading</button>
      </div>
    );
  }
}

// mapStateToProps <-> map state from redux store to component props
// mapDispatchToProps <-> map dispatch from redux store to component props (use dispatch inside component props as a wrapped function)

const mapStateToProps = (state: State) => ({
  isLoading: state.isLoading,
});

const toggleLoading = () => {
  // custom here...
  return { type: "toggle/loading" };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleLoading: (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("toggleLoading", e.clientX);
    dispatch(toggleLoading());
  },
});
const mapDispatchToProps2 = (dispatch: Dispatch) =>
  bindActionCreators({ toggleLoading }, dispatch);

export const ConnectedSpinner = connect(
  mapStateToProps,
  mapDispatchToProps2
)(Spinner);

// useSelector + useDispatch
const selectIsLoading = (state: State): boolean => state.isLoading;
export const SpinnerFC: React.FC = () => {
  const isLoading = useSelector(selectIsLoading);
  // select another from state
  const dispatch = useDispatch();

  const toggleLoading = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("toggleLoading", e.clientX);
    dispatch({ type: "toggle/loading" });
  };

  return <Spinner isLoading={isLoading} toggleLoading={toggleLoading} />;
};

export default Spinner;
