import { useState } from "react";

function LabForm() {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [standard, setStandard] = useState();

  // function to display name
  function displayName() {
    // updating state variasble
    setName(event.target.value);
  }

  // function to display age
  function displayAge() {
    // updating state variasble
    setAge(event.target.value);
  }
  // function to display standrad
  function displayStandard() {
    // updating state variasble
    setStandard(event.target.value);
  }

  return (
    <div>
      Name of User : {name}
      <input
        type="text"
        name="name"
        value={name}
        placeholder="Enter your name"
        onChange={displayName}
      />
      <br />
      <br />
      Age of User : {age}
      <input
        type="number"
        name="age"
        value={age}
        placeholder="Enter your Age"
        onChange={displayAge}
      />
      <br />
      <br />
      Standard of User : {standard}
      <input
        type="number"
        name="standard"
        value={standard}
        placeholder="Enter your standard"
        onChange={displayStandard}
      />
      <br />
      <h3>
        ---------------------------------------------------------------------
      </h3>
      Name of User : {name}
      <br />
      <br />
      Age of User : {age}
      <br />
      <br />
      Standard of User : {standard}
    </div>
  );
}

export default LabForm;
