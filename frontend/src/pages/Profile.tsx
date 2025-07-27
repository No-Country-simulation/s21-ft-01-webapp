import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Toast } from "primereact/toast";

import { registerSchema, FormDataRegister } from "../schemas/register.schema";
import { useUserProfile } from "../hooks/useUserProfile";
import PersonalSection from "../components/register/PersonalSection";
import { useNavigate } from "react-router-dom";
import capybaraImage from "../svgs/Capybara.png";

const Profile: React.FC = () => {
  const { userData, updateUserProfile } = useUserProfile();
  const toast = useRef<Toast>(null);
  const navigate = useNavigate();


  const {
    control,
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormDataRegister>({
    resolver: zodResolver(registerSchema),
  });

  useEffect(() => {
    if (userData) {
      setValue("name", userData.name);
      setValue("last_name", userData.last_name);
      setValue("email", userData.email);
      setValue("birth_date", userData.birth_date);
      setValue("phone", userData.phone);
    }
  }, [userData, setValue]);

  const onSubmit = (data: FormDataRegister) => {
    console.log("Submit ejecutado", data);
    updateUserProfile(data);
    toast.current?.show({
      severity: "success",
      summary: "Perfil actualizado",
      detail: "Tu perfil ha sido actualizado correctamente.",
      life: 3000,
    });
    setTimeout(() => {
    navigate("/dashboard");
  }, 3000);

  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Toast ref={toast} />
      {/* Fondo dividido */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-primary pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary pointer-events-none" />

      {/* Imagen local centrada */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-10">
        <img
          src={capybaraImage}
          alt="Foto de perfil"
          className="w-35 h-35 rounded-full border-4 border-white shadow-xl object-cover"
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-20 flex flex-col items-center justify-start p-6 pt-40 overflow-y-auto text-white">
        <h1 className="text-4xl font-bold mb-4">Mi perfil</h1>

        <div className="bg-yellow-100 text-yellow-800 p-3 rounded text-center text-sm max-w-sm mb-6">
          Estás en modo demo: los datos se guardan solo durante esta sesión.
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-black">
          <form onSubmit={handleSubmit(onSubmit)}>
            <PersonalSection register={register} errors={errors} control={control} />
            <button
  type="button"
  onClick={() => {
    const datos = getValues();
    console.log("Valores actuales", datos); // 👈 consola para debug
    updateUserProfile(datos);
    toast.current?.show({
      severity: "success",
      summary: "Cambios guardados",
      detail: "Tu perfil ha sido actualizado correctamente.",
      life: 3000,
    });
    setTimeout(() => navigate(-1), 3000);
  }}
  className="mt-6 w-full px-4 py-2 bg-[#3498db] hover:bg-[#2980b9] text-white rounded transition"
>
  Guardar Cambios
</button>

          </form>
        </div>
      </div>
    </div>
  );
  
};

export default Profile;