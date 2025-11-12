import { useState } from "react";

function StudentForm({ user, onInputChange }) {
  return (
    <div>
      <label>
        Enter Name:{" "}
        <input
          type="text"
          name="username"
          value={user.username}
          placeholder="Enter your name"
          onChange={onInputChange}
        />
      </label>
      <br />

      <label>
        Enter Age:{" "}
        <input
          type="number"
          name="age"
          value={user.age}
          placeholder="Enter age (in years)"
          onChange={onInputChange}
        />
      </label>
     <br/>
      <label>
        Enter Standard:{" "}
        <input
          type="text"
          name="standard"
          value={user.standard}
          placeholder="Enter standard"
          onChange={onInputChange}
        />
      </label>
      <br />

      <br />
      <label>
        Enter Address:{" "}
        <input
          type="text"
          name="address"
          value={user.address}
          placeholder="Enter your Address"
          onChange={onInputChange}
        />
      </label>
      <br />
      <label>
        Enter Email:{" "}
        <input
          type="text"
          name="email"
          value={user.email}
          placeholder="Enter email"
          onChange={onInputChange}
        />
      </label>
    </div>
  );
}

function StudentProfile({ user }) {
  return (
    <div>
      <h3>--------------- Student Profile -----------------</h3>
      <h3>Name: {user.username }</h3>
      <h3>Age: {user.age }</h3>
      <h3>Standard: {user.standard }</h3>
      <h3>Address: {user.address}</h3>
      <h3>Email:{user.email}</h3>
    </div>
  );
}

function FormInput() {
  const [user, setUser] = useState({ username: "", standard: "", age: "", address:"", email:"" });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div>
      <StudentForm user={user} onInputChange={handleInputChange} />
      <StudentProfile user={user} />
    </div>
  );
}

export default FormInput;
