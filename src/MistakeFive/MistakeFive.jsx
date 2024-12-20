import { useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const increase = () => setCounter((c) => c + 1);

    const interval = setInterval(() => {
      console.log("Вызов внутри setInterval");
      increase();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <h1>{counter}</h1>;
};

export const MistakeFive = () => {
  const [showCounter, setShowCounter] = useState(true);

  if (!showCounter) return <h1>Счётчика нет</h1>;

  return (
    <div>
      <Counter />
      <button onClick={() => setShowCounter((s) => !s)}>
        Показывать счётчик?
      </button>
    </div>
  );
};
