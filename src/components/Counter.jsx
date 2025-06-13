import React, { useState } from "react";

function Counter() {
  const [count, setcount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);

  function increment() {
    setcount(count + incrementBy);
  }

  function decrement() {
    setcount(count - incrementBy);
  }

  function increaseIncrement() {
    setIncrementBy(incrementBy + 1);
  }

  function decreaseIncrement() {
    setIncrementBy(incrementBy - 1);
  }

  return (
    <div>
      <h2>Counter value is: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <h2>We are incrementing the value by: {incrementBy}</h2>
      <button onClick={increaseIncrement}>Increment Increment</button>
      <button onClick={decreaseIncrement}>Decrease Increment</button>
    </div>
  );
}

export default Counter;
