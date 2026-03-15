interface Posts {
    title:string;
    author:User|null;
    content:string;
}

interface User {
    id: string;
    fullName: string;
    email: string;
    role: "user" | "admin";
}

const API_BASE_URL = 'http://localhost:8000/api/auth';

const apiRequestPost = async (url: string, body: any) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {  
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(body)
        });

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error('Error during API request:', error);
        throw error;
    }
}


interface FormData {
  email: string;
  password: string;
}

export const loginRequest = (formData: FormData) =>apiRequestPost(`${API_BASE_URL}/login`, formData);

export interface RegisterFormData extends FormData {
  fullName: string;
  role?:"user" | "admin";
  posts?: Posts[]|[];
}
export const registerRequest = (formData: RegisterFormData) => apiRequestPost(`${API_BASE_URL}/register`, formData);
