import React from "react";

function Fruit({ fruit }) {
  return (
    <div>
      <li key={fruit.name}>{fruit.name}</li>
    </div>
  );
}

export default Fruit;
