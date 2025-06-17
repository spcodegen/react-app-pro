import React, { useState } from "react";

function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
  }

  return (
    <div>
      {name.firstName} - {name.lastName}
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          placeholder="Input Your First Name"
        />
        <br />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          placeholder="Input Your Last Name"
        />
        <br />
        <button onClick={(e) => handleSubmit(e)}>Add</button>
      </form>
    </div>
  );
}

export default Form;
