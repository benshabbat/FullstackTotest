const apiRequest = async (url: string, method: string, body?: any) => {
  try {
    const options: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };  
    if (body) {
      options.body = JSON.stringify(body);
    }
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error during API request:", error);
    throw error;
  }

};

export const apiRequestPost = (url: string, body: any) => apiRequest(url, "POST", body);

export const apiRequestGet = (url: string) => apiRequest(url, "GET");

export const apiRequestPut = (url: string, body: any) => apiRequest(url, "PUT", body);

export const apiRequestDelete = (url: string) => apiRequest(url, "DELETE");
