import { Suspense, useState } from "react";
import { EXAMPLES } from "./constants";

type ExampleName = keyof typeof EXAMPLES;

function App() {
  const [activeExample] = useState<ExampleName>("vite-intro");
  const ExampleComponent = EXAMPLES[activeExample].component;

  return (
    <>
      <p>Select example</p>
      <Suspense fallback="Loading example...">
        <ExampleComponent />
      </Suspense>
    </>
  );
}

export default App;
