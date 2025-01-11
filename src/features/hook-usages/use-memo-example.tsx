import { memo, useCallback, useMemo, useState } from "react";

// Memorize component - same as Class Pure Component
// Only re-render  when props change (shallow compare) - Object.is
const Button = memo(
  (
    props: React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  ) => {
    return <button {...props} />;
  }
);

// Ref: https://react.dev/reference/react/useMemo
const UseMemoExample: React.FC = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(100);
  const [count3, setCount3] = useState(10);

  // Prevent new handleClick defined with new reference address value
  const handleClick = useMemo(
    () => () => {
      setCount((prevCount) => prevCount + 1);
    },
    []
  );

  const handleClick2 = useCallback(() => {
    setCount2((prevCount) => prevCount + 1);
  }, []);

  const handleClick3 = () => {
    setCount3((prevCount) => prevCount + 1);
  };

  // cache the total value of count and count2
  // caches = {"0_100": 100};
  const totalC12 = useMemo(() => count + count2, [count, count2]);

  return (
    <>
      <span>
        <span>Count1: {count}</span>
        <Button key="button1" onClick={handleClick}>
          Count 1
        </Button>
      </span>
      <br />
      <span>
        <span>Count2: {count2}</span>
        <Button key="button2" onClick={handleClick2}>
          Count 2
        </Button>
      </span>
      <br />
      <span>
        <span>Count3: {count3}</span>
        <Button key="button3" onClick={handleClick3}>
          Count 3
        </Button>
      </span>

      <p>Total: {totalC12}</p>
    </>
  );
};

export default UseMemoExample;
