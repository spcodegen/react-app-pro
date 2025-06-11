import React from "react";

function Hello({ person }) {
  return (
    <div>
      <h2>
        {person.message} {person.emoji} {person.name}
        {person.seatNumbers}
      </h2>
    </div>
  );
}

export default Hello;
