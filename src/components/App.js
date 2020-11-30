import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    gender: "male",
    phoneNumber: "",
    password: ""
  });
  const [errormsg, Seterrormsg] = useState("");
  const [wlcmsg, Setwlcmsg] = useState("");
  const [open, Setopen] = useState(false);
  const handleSubmit = () => {
    console.log(user);
    if (
      user.name === "" ||
      user.email === "" ||
      user.gender === "" ||
      user.phoneNumber === "" ||
      user.password === ""
    ) {
      Seterrormsg("All fields are mandatory");
    } else if (!user.name.match(/^[a-zA-Z0-9_ ]*$/)) {
      Seterrormsg("Name is not alphanumeric");
    } else if (!user.email.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]/)) {
      Seterrormsg("Email must contain @");
    } else if (
      user.gender != "male" &&
      user.gender != "female" &&
      user.gender != "others"
    ) {
      Seterrormsg("Please identify as male, female or others");
    } else if (!user.phoneNumber.match(/^[0-9]*$/)) {
      Seterrormsg("Phone Number must contain only numbers");
    } else if (user.password.length < 6) {
      Seterrormsg("Password must contain atleast 6 letters");
    } else {
      // Setopen(true);
      Seterrormsg(`Hello ${user.name}`);
    }
  };
  return (
    <div id="main">
      Name:{""}
      <input
        type="text"
        value={user.name}
        name="name"
        data-testid="name"
        onChange={(event) => {
          let userCopy = { ...user };
          userCopy.name = event.target.value;
          setUser(userCopy);
        }}
      />
      Email:{" "}
      <input
        type="text"
        name="email"
        value={user.email}
        data-testid="email"
        onChange={(event) => {
          let userCopy = { ...user };
          userCopy.email = event.target.value;
          setUser(userCopy);
        }}
      />
      Gender:{" "}
      <input
        type="text"
        name="gender"
        value={user.gender}
        data-testid="gender"
        onChange={(event) => {
          let userCopy = { ...user };
          userCopy.gender = event.target.value;
          setUser(userCopy);
        }}
      />
      PhoneNumber:{" "}
      <input
        type="text"
        name="number"
        value={user.phoneNumber}
        data-testid="phoneNumber"
        onChange={(event) => {
          let userCopy = { ...user };
          userCopy.phoneNumber = event.target.value;
          setUser(userCopy);
        }}
      />
      Password:{" "}
      <input
        type="password"
        name="password"
        value={user.password}
        data-testid="password"
        onChange={(event) => {
          let userCopy = { ...user };
          userCopy.password = event.target.value;
          setUser(userCopy);
        }}
      />
      <button data-testid="submit" onClick={handleSubmit}>
        Submit
      </button>
      <p>{errormsg} </p>
    </div>
  );
};

export default App;
