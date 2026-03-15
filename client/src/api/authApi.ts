import { apiRequestPost } from "./utilsApi";

interface Posts {
  title: string;
  author: User | null;
  content: string;
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  role: "user" | "admin";
}

const API_BASE_URL = "http://localhost:8000/api/auth";



export interface FormData {
  email: string;
  password: string;
}

export const loginRequest = (formData: FormData) =>
  apiRequestPost(`${API_BASE_URL}/login`, formData);

export interface RegisterFormData extends FormData {
  fullName: string;
  role?: "user" | "admin";
  posts?: Posts[] | [];
}
export const registerRequest = (formData: RegisterFormData) =>
  apiRequestPost(`${API_BASE_URL}/register`, formData);
