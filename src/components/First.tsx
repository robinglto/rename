import React from "react";

interface Person {
  name: string;
  age: number;
  country: string;
}

const people: Person = {
  name: "Saul",
  age: 21,
  country: "D.R",
};

//this statement is use for make the example about conditional operator and logical syntax
const lot: number = 21;

function SayHello() {
  return <p>Hola {people.name}, espero te encuentres bien.</p>;
}

export default function First() {
  return (
    <div>
      <p>Welcome Near, My friends</p>
      <SayHello />
      {lot === 21 ? (
        <p>La variable es igual a 21</p>
      ) : (
        <p>La variable no es 21, sino que es {lot}</p>
      )}

      {lot === 21 && (
        <p>
          This is the way for use in case that you do not need the else branch
        </p>
      )}
    </div>
  );
}
