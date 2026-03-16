import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import UsersPage from "./pages/UsersPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
