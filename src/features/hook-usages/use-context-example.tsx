/* 
propA is passed from top level to every single level

<App propA={propA}>
  <ComponentB propA={propA}>
    <ComponentC propA={propA}>
      <ComponentD />
    </ComponentC>
  </ComponentB>
</App>

Context provides a way to pass data through the component tree without having to pass props down manually at every level.
Ref: https://legacy.reactjs.org/docs/context.html
*/

import React, { useContext, useState } from "react";
import Hello, { MemoizedHello } from "~/components/hello";

type ThemeContextValue = {
  scheme: "dark" | "light" | "cyan";
  fontSize?: number;
};

// create context and specify default value
const ThemeContext = React.createContext<ThemeContextValue>({
  scheme: "light",
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Button = (props: any) => {
  const { scheme } = useContext(ThemeContext);

  const handleClick = () => {
    console.log("Button > scheme", scheme);
  };

  return <button {...props} onClick={handleClick} />;
};

const CheckFontSize = () => {
  const { fontSize } = useContext(ThemeContext);

  const handleClick = () => {
    console.log("CheckFont > fontSize", fontSize);
  };

  return <button onClick={handleClick}>Check font size</button>;
};

export const ThemeContextExample: React.FC = () => {
  return (
    <>
      <Button>Check scheme 1!</Button>
      <ThemeContext.Provider value={{ scheme: "dark" }}>
        <Button>Check scheme 2!</Button>
        <div>
          <ThemeContext.Provider value={{ scheme: "cyan" }}>
            <Button>Check scheme 3!</Button>
          </ThemeContext.Provider>
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export const ThemeContextExample2: React.FC = () => {
  const [scheme, setScheme] = useState<ThemeContextValue["scheme"]>("dark");

  const handleClick = () => {
    setScheme("light");
  };

  return (
    <>
      <button onClick={handleClick}>Switch scheme!</button>
      <ThemeContext.Provider value={{ scheme }}>
        <Button>Check scheme!</Button>
        <CheckFontSize />
        <Hello />
        <MemoizedHello />
      </ThemeContext.Provider>
    </>
  );
};

const UseContextExample: React.FC = () => {
  return (
    <>
      {/* <ThemeContextExample /> */}
      <ThemeContextExample2 />
    </>
  );
};

export default UseContextExample;
