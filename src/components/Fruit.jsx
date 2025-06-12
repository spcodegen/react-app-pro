import React from "react";

function Fruit({ fruit }) {
  return (
    <>
      {fruit.price > 4 ? (
        <li>
          {fruit.emoji} {fruit.name} ${fruit.price}
        </li>
      ) : (
        ""
      )}
    </>
  );
}

export default Fruit;
