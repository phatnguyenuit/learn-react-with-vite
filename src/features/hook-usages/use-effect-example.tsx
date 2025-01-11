import { useEffect, useState } from "react";

// Article: https://react.dev/reference/react/useEffect#examples-dependencies
const UseEffectExample: React.FC = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(100);

  const handleClick = () => {
    // setCount(count + 1); (X) avoid referencing state
    setCount((prevCount) => prevCount + 1);
  };

  const handleClick2 = () => {
    setCount2((prevCount) => prevCount + 1);
  };

  // componentDidMount + componentDidUpdate
  // when no dependency list
  // Use Object.is to compare each dependency
  // Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
  useEffect(() => {
    console.log("[effect1] effect will be called every single render");

    const onComponentWillUnmount = () => {
      console.log("[cleanup1] this is cleanup callback - componentWillUnmount");
    };

    return onComponentWillUnmount;
  });

  // componentDidMount
  // when dependency list = []
  useEffect(() => {
    console.log("[effect2] effect will be called only ONCE for did mount");

    const onComponentWillUnmount = () => {
      console.log("[cleanup2] this is cleanup callback - componentWillUnmount");
    };

    return onComponentWillUnmount;
  }, []);

  // componentDidMount + componentDidUpdate
  // when dependency list = [state_name]
  // count changes -> call effect
  useEffect(() => {
    console.log("[effect3] effect will be called whenever count changes");

    const onComponentWillUnmount = () => {
      console.log("[cleanup3] this is cleanup callback - componentWillUnmount");
    };

    return onComponentWillUnmount;
  }, [count]);

  return (
    <div>
      <button onClick={handleClick}>Count 1 ({count})</button>
      <button onClick={handleClick2}>Count 2({count2})</button>
    </div>
  );
};

export default UseEffectExample;
