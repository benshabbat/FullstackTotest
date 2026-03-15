import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import UsersPage from "./pages/UsersPage";

function App() {
  return (
    <>
      <UsersPage />
      <Register />
      <Login />
    </>
  );
}

export default App;
