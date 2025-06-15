import { useState, useEffect } from "react";  
import { getUserProfile, updateUserProfile } from "../service/userService";   
import { UserProfile } from "../schemas/user.schema"; 

export const useUserProfile = () => {  
    const [userData, setUserData] = useState<UserProfile | null>(null);  
    const [loading, setLoading] = useState(true);  
    const [error, setError] = useState<string | null>(null);  

    const fetchUserData = async () => {  
        try {  
            setLoading(true);  
            const data: UserProfile = await getUserProfile(); // Obtiene los datos del usuario  
            setUserData(data);  // Guardar datos en el estado  
        } catch (err) {  
            setError("Error al cargar los datos del usuario.");  
        } finally {  
            setLoading(false);  
        }  
    };   

    useEffect(() => {  
        fetchUserData();  
    }, []);  

    const updateUserProfileData = async (data: UserProfile) => {  
        try {  
            await updateUserProfile(data); // Actualiza la información del perfil del usuario  
            fetchUserData(); // Actualiza los datos después de modificar  
        } catch (err) {  
            setError("Error al actualizar el perfil.");  
        }  
    };  

    return {  
        userData,  
        loading,  
        error,  
        updateUserProfileData,  
    };  
};  

