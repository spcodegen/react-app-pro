import React from "react";

function handleClick() {
  console.log("Button Clicked");
}

function Message() {
  return (
    <div>
      <button onClick={handleClick}>Click here to get a message</button>
    </div>
  );
}

export default Message;
