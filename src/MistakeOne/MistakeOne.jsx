import { useState } from "react";

import "../styles/Mistakes.css";

export const MistakeOne = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((c) => c + 1);
    setCounter((c) => c + 1);
    setCounter((c) => c + 1);
  };

  return (
    <div className="mistakeWrapper">
      <span>Counter is {counter}</span>
      <button onClick={increase}>Increase</button>
    </div>
  );
};
