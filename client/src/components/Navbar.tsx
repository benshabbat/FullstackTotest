import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>My App</h1>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;
