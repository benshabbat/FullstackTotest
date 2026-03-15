import { create } from "zustand";
import { persist } from "zustand/middleware";
import { loginRequest, registerRequest, type FormData, type RegisterFormData, type User } from "../api/authApi";

interface AuthState {
  user: User | null;
  login: (formData: FormData) => Promise<User | null>;
  register: (formData: RegisterFormData) => Promise<User | null>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      login: async (formData: FormData )=> {
        const { user } = await loginRequest(formData);
        set({ user });
        return user;
      },
      register: async (formData: RegisterFormData) => {
        const { user } = await registerRequest(formData);
        set({ user });
        return user;
      },
    }),
    {
      name: "auth-posts-storage",
    },
  ),
);
