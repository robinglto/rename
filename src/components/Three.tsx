"use client";

import React, { useState } from "react";

export default function Three() {
  const [count, setCount] = useState<number>(0);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-green-400 rounded-lg text-black px-2 py-0.5 my-2"
      >
        Clicked {count} times
      </button>
    </div>
  );
}
