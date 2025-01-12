// import { useRef, useState } from "react";
import { forwardRef, useRef } from "react";

const ComponentWithRef = forwardRef((props, ref) => {
  console.log(props, ref);
  return null;
});

const UseRefExample: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLElement>(null);
  // trigger re-render when setting new value when useState
  // const [intervalId, setIntervalId] = useState<number>();
  const intervalIdRef = useRef<number>();

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleLazyHello = () => {
    const intervalId = setInterval(() => alert("hello"), 5000);
    // setIntervalId(intervalId);
    intervalIdRef.current = intervalId;
  };

  const handleResetTimeout = () => {
    clearInterval(intervalIdRef.current);
  };

  return (
    <div>
      <ComponentWithRef ref={ref2} />
      <input ref={inputRef} placeholder="Please input your name!" />
      <button onClick={handleClick}>Focus input by using ref</button>
      <br />
      <button onClick={handleLazyHello}>Lazy hello every 5s!</button>
      <button onClick={handleResetTimeout}>Reset all intervals!</button>
    </div>
  );
};

export default UseRefExample;
