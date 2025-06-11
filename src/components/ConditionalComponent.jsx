import React from "react";
import Welcome from "./Welcome";
import Code from "./Code";

const display = true;

function ConditionalComponent() {
  if (display) {
    return <Welcome />;
  } else {
    return <Code />;
  }
}

export default ConditionalComponent;
