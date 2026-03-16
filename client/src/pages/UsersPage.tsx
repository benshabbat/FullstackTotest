import { useEffect } from "react";
import { useUsersStore } from "../store/useUsersStore";

function UsersPage() {
  const { users, getUsers } = useUsersStore();

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.fullName}</p>
          <p>{user.email}</p>
          <p>{user.role}</p>
        </div>
      ))}
    </div>
  );
}

export default UsersPage;
