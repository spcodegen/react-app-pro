import React from "react";

let message;
const display = false;

function ConditionalComponent() {
  if (display) {
    message = <h2>This is message 1</h2>;
  } else {
    message = <h2>This is message 2</h2>;
  }
  return message;
}

export default ConditionalComponent;
