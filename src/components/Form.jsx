import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  // function handleChange(e) {
  //   setName(e.target.value);
  // }

  return (
    <div>
      <form>
        <input
          type="text"
          value={name}
          //1 solution
          // onChange={function demo(e) {
          //   return handleChange(e);
          // }}
          //2 solution
          // onChange={(e) => {
          //   handleChange(e);
          // }}
          //3 solution
          // onChange={(e) => handleChange(e)}
          //4 solution
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Form;
