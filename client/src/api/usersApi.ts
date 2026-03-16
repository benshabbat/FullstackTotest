import type { User } from "./authApi";
import { apiRequestDelete, apiRequestGet, apiRequestPut } from "./utilsApi";




const API_BASE_URL = "http://localhost:8000/api/users";


export const getUsersRequest = async () => await apiRequestGet(`${API_BASE_URL}`);
export const getUserByIdRequest = async (id: string) => await apiRequestGet(`${API_BASE_URL}/${id}`);
export const updateUserRequest = async (id: string, data: User) => await apiRequestPut(`${API_BASE_URL}/${id}`, data);
export const deleteUserRequest = async (id: string) => await apiRequestDelete(`${API_BASE_URL}/${id}`);




    