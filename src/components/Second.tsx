import React from "react";

interface Three {
  title: string;
  id: number;
}

const products: Three[] = [
  { title: "Gold", id: 1 },
  { title: "Silver", id: 2 },
  { title: "Cooper", id: 3 },
];

export default function Second() {
  return (
    <div>
      <div>
        {products.map((index) => (
          <div key={index.id}>{index.title}</div>
        ))}
      </div>
    </div>
  );
}
