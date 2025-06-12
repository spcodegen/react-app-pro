import React from "react";
import Fruit from "./Fruit";

// const fruits = ["Apple", "Pineapple", "Banana", "Mango", "Papaya"];
const fruits = [
  { name: "Apple", price: 10, emoji: "🍎", soldout: false },
  { name: "Banana", price: 2, emoji: "🍌", soldout: false },
  { name: "Mango", price: 5, emoji: "🥭", soldout: true },
  { name: "Pineapple", price: 8, emoji: "🍍", soldout: false },
  { name: "Orange", price: 3, emoji: "🍊", soldout: true },
];

function Fruits() {
  return (
    <div>
      <ul>
        {fruits.map((fruit) => {
          return (
            <Fruit
              key={fruit.name}
              name={fruit.name}
              price={fruit.price}
              emoji={fruit.emoji}
              soldout={fruit.soldout}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Fruits;
