import { Dispatch, SetStateAction, useState } from 'react';

interface UseCounterOutput {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setCount: Dispatch<SetStateAction<number>>;
}
function useCounter(
  initialValue: number = 0,
  max: number = Number.MAX_SAFE_INTEGER,
): UseCounterOutput {
  const [count, setCount] = useState<number>(Math.min(Math.max(initialValue, 0), max));

  const increment = () => {
    if (count < max) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const reset = () => setCount(initialValue);

  return {
    count,
    increment,
    decrement,
    reset,
    setCount,
  };
}

export default useCounter;
