import axios from 'axios';  
import { UserProfile } from '../schemas/user.schema';  

const API_URL = 'https://localhost:3000/api';    

export const getUserProfile = async (): Promise<UserProfile> => {  
  try {  
    const response = await axios.get(`${API_URL}/user/profile`, {  
      headers: {  
        'Authorization': `Bearer ${localStorage.getItem('token')}`, 
      },  
    });  
    return response.data;  
  } catch (error) {  
    console.error("Error al obtener el perfil del usuario:", error);  
    throw error;   
  }  
};  

export const updateUserProfile = async (data: UserProfile): Promise<void> => {  
  try {  
    await axios.put(`${API_URL}/user/profile`, data, {  
      headers: {  
        'Authorization': `Bearer ${localStorage.getItem('token')}`, 
      },  
    });  
  } catch (error) {  
    console.error("Error al actualizar el perfil del usuario:", error);  
    throw error; 
  }  
}; 