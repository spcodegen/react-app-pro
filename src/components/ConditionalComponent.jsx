import React from "react";
import Welcome from "./Welcome";
import Code from "./Code";

const display = true;

function ConditionalComponent() {
  return display ? <Welcome /> : <Code />;
}

export default ConditionalComponent;
