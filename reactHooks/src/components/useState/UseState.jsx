import React, { useState } from 'react'

const UseState = () => {

  const [count, setCount] = useState(0);

  const somar = () => {
    setCount((prevState) => prevState + 1)
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={somar}>Somar</button>
    </div>
  );
};

export default UseState;