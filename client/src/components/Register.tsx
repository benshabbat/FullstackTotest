import React, { useState } from "react";
import {
  registerRequest,
  type RegisterFormData,
} from "../services/authServices";

export default function Register() {
  const [formData, setFormData] = useState<RegisterFormData>({
    email: "",
    password: "",
    fullName: "",
  });

  
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(await registerRequest(formData));
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <label htmlFor="fullName">Full Name:</label>
      <input
        type="text"
        id="fullName"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
      />

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

      <label htmlFor="role">Role:</label>
      <select
        name="role"
        id="role"
        value={formData.role}
        onChange={handleChange}
        defaultValue={"user"}
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
}
