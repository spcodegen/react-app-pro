import React from "react";

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
          return (
            <li>
              {fruit.emoji} {fruit.name} ${fruit.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Fruits;
