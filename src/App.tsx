/* eslint-disable @typescript-eslint/no-unused-vars */
import HookUsages from "~/features/hook-usages";
import MemoHoc from "~/features/memo-hoc";
import UncontrolledComponent from "./features/uncontrolled-components";
import ControlledComponent from "./features/controlled-components";
import SimpleRedux from "./features/simple-redux";
import AdvancedRedux from "./features/advanced-redux";

function App() {
  return (
    <>
      {/* <HookUsages /> */}
      {/* <MemoHoc /> */}
      {/* <UncontrolledComponent /> */}
      {/* <ControlledComponent /> */}
      {/* <SimpleRedux /> */}
      <AdvancedRedux />
    </>
  );
}

export default App;
