
interface FormData {
  email: string;
  password: string;
}

export const loginRequest = async (formData: FormData) => {
    try {
        const response = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {  
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
}