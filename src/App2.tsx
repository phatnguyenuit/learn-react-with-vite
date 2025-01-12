import { Suspense, useState } from "react";
import { EXAMPLES } from "./constants";

type ExampleName = keyof typeof EXAMPLES;

function App() {
  const [activeExample, setActiveExample] = useState<ExampleName>();
  const ExampleComponent = activeExample
    ? EXAMPLES[activeExample].component
    : () => null;

  return (
    <>
      <select
        value={activeExample}
        onChange={(e) => setActiveExample(e.target.value as ExampleName)}
      >
        <option value={""}>Select example</option>
        {Object.entries(EXAMPLES).map(([key, { label }]) => (
          <option key={key} value={key}>
            {label}
          </option>
        ))}
      </select>
      <Suspense fallback="Loading example...">
        <ExampleComponent />
      </Suspense>
    </>
  );
}

export default App;
