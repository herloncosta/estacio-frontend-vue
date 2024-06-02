import { useEffect, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <p>Counter</p>
      <h1>{count}</h1>
      <button onClick={handleCount}>Increment</button>
    </>
  );
};
