import React from "react";

function Fruit({ name, emoji, price, soldout }) {
  return (
    <>
      <li>
        {emoji} {name} ${price} {soldout ? "soldout" : ""}
      </li>
    </>
  );
}

export default Fruit;
