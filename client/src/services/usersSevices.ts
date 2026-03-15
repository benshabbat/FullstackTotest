import { apiRequestGet } from "./authServices";



const API_BASE_URL = "http://localhost:8000/api/users";


export const getUsersRequest = async () => await apiRequestGet(`${API_BASE_URL}`);




