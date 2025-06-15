import React, { useEffect } from "react";  
import { useForm } from "react-hook-form";  
import { zodResolver } from "@hookform/resolvers/zod";  
import { Avatar } from 'primereact/avatar';   
import { useUserProfile } from "../hooks/useUserProfile";   
import { UserProfile, userSchema } from "../schemas/user.schema";   
import PersonalSection from "../components/register/PersonalSection";  

const Profile: React.FC = () => {  
  const { userData, loading, error, updateUserProfileData } = useUserProfile();  
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<UserProfile>({  
    resolver: zodResolver(userSchema),  
  });  

  // Cargar datos del usuario en el formulario   
  useEffect(() => {  
    if (userData) {  
      setValue("name", userData.name);  
      setValue("last_name", userData.last_name);  
      setValue("email", userData.email);  
      setValue("birth_date", userData.birth_date);  
      setValue("phone", userData.phone);  
    }  
  }, [userData, setValue]);  

  const onSubmit = async (data: UserProfile) => {  
    try {  
      await updateUserProfileData(data); // Actualiza los datos del perfil  
      alert("Perfil actualizado correctamente");  
    } catch (error) {  
      console.error(error);  
      alert("Error al actualizar el perfil");  
    }  
  };  

  if (loading) return <p>Cargando...</p>;  
  if (error) return <p>{error}</p>;  

  return (  
    <div className="flex h-screen">  
      <div className="flex-grow flex flex-col items-center justify-center p-6 bg-gray-100">  
        <h1 className="text-2xl font-semibold mb-6">Mi perfil</h1>  
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">  
          {/* Avatar del usuario */}  
          <div className="flex justify-center mb-4">  
            <Avatar  
              icon="pi pi-user"  
              size="xlarge"  
              style={{ backgroundColor: '#2196F3', color: '#ffffff' }}  
              shape="circle"  
            />  
          </div>  
          {/* Formulario de perfil */}  
          <form onSubmit={handleSubmit(onSubmit)}>  
            <PersonalSection register={register} errors={errors} userData={userData} isProfileView={false} />  
            <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">  
              Guardar Cambios  
            </button>  
          </form>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Profile;  