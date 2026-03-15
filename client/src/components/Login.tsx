import React, { useState } from "react";
import { loginRequest } from "../services/authServices";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //service for fetching data from backend and saving in zustand store (create file in folder services and create function for fetching data from backend and saving in zustand store)
  //logic for handling form submission and fetching data from backend and saving in zustand store

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(await loginRequest(formData));
    //logic for handling form submission
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}
