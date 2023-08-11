"use client";

import React, { useState } from "react";

interface MyButtonProps {
  count: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

export default function Four() {
  const [count, setCount] = useState<number>(0);
  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <p>Counter that update together</p>
      <MyButton
        count={count}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
      <MyButton
        count={count}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
}

function MyButton({ count, onIncrement, onDecrement }: MyButtonProps) {
  return (
    <div className="flex space-x-10">
      <button
        onClick={onIncrement}
        className="bg-indigo-400 rounded-lg text-black px-2 py-0.5 my-2"
      >
        Increment
      </button>
      <p className="bg-white rounded-lg text-black px-2 py-0.5 my-2">
        {count} Times
      </p>
      <button
        onClick={onDecrement}
        className="bg-indigo-400 rounded-lg text-black px-2 py-0.5 my-2"
      >
        Decrement
      </button>
    </div>
  );
}
