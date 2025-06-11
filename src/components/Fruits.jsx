import React from "react";
import Fruit from "./Fruit";

// const fruits = ["Apple", "Pineapple", "Banana", "Mango", "Papaya"];

const fruits = [
  { name: "Apple", price: 10, emoji: "🍎" },
  { name: "Banana", price: 2, emoji: "🍌" },
  { name: "Mango", price: 5, emoji: "🥭" },
  { name: "Pineapple", price: 8, emoji: "🍍" },
  { name: "Orange", price: 3, emoji: "🍊" },
];

function Fruits() {
  return (
    <div>
      <ul>
        {fruits.map((fruit) => {
          return <Fruit fruit={fruit} />;
        })}
      </ul>
    </div>
  );
}

export default Fruits;
