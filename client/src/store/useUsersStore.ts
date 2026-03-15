import { create } from "zustand";
import {
  type RegisterFormData,
  type User,
} from "../services/authServices";
import { persist } from "zustand/middleware";
import { getUsersRequest } from "../services/usersSevices";

interface UsersState {
  users: User[] | [];
  getUsers: () => Promise<User[] | [] | null>;
  deleteUser: (idUser: string) => Promise<User[] | [] | null>;
  updateUser: (
    idUser: string,
    formData: RegisterFormData,
  ) => Promise<User[] | [] | null>;
}

export const useUsersStore = create<UsersState>()(
  persist(
    (set) => ({
      users: [],
      getUsers: async () => {
        const users = await getUsersRequest();
        set({ users });
        return users;
      },
      deleteUser: async (idUser: string) => {
        // Implement the logic to delete a user
        return [];
      },
      updateUser: async (idUser: string, formData: RegisterFormData) => {
        // Implement the logic to update a user
        return [];
      },
    }),
    {
      name: "users-storage",
    },
  ),
);
