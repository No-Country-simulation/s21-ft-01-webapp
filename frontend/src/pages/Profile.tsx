import React, { useEffect } from "react";  
import { useForm } from "react-hook-form";  
import { zodResolver } from "@hookform/resolvers/zod";  
import { FormDataRegister, userProfileSchema } from "../schemas/user.profile.schema";   
import PersonalSection from "../components/register/PersonalSection";  
import { useUserProfile } from "../hooks/useUserProfile";  
import { updateUserProfile } from "../service/userService"; 
import { Avatar } from 'primereact/avatar';   
//import Navbar from '../components/Common/Navbar';   
//import Sidebar from '../components/Common/NavbarLeft';  

const UserProfile: React.FC = () => {  
    const { userData, fetchUserData } = useUserProfile();   
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormDataRegister>({  
        resolver: zodResolver(userProfileSchema),  
    });  

    useEffect(() => {  
        if (userData) {  
            // Carga datos en el formulario  
            setValue("name", userData.name);  
            setValue("last_name", userData.last_name);  
            setValue("email", userData.email);  
            setValue("birth_date", userData.birth_date);  
            setValue("phone", userData.phone);  
        }  
    }, [userData, setValue]);  

    const onSubmit = async (data: FormDataRegister) => {    
        try {  
            await updateUserProfile(data);  
            alert("Perfil actualizado correctamente");  
            fetchUserData(); // Recarga datos actualizados  
        } catch (error) {  
            console.error(error);  
            alert("Error al actualizar el perfil");  
        }  
    };  

    return (  
        <div className="flex h-screen">  
            <Navbar />  
            <div className="flex-grow flex flex-col items-center justify-center p-6 mt-80 ">  
                <h1 className="text-2xl font-semibold mb-6">Mi perfil</h1>  
                <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">  
                    {/* Avatar imagen de Usuario */}  
                    <div className="flex justify-center mb-4">   

                    <Avatar icon="pi pi-user" size="xlarge" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} shape="circle" />
                    </div>  
                    {/* Formulario y sección personal */}  
                    <form onSubmit={handleSubmit(onSubmit)}>  
                        <PersonalSection register={register} errors={errors} userData={userData} isProfileView={true} />   
                        <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Guardar Cambios</button>  
                    </form>   
                </div>  
            </div>  
            <Sidebar />  
        </div>  
    );  
};       

export default UserProfile;  
