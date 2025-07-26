import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Avatar } from "primereact/avatar";
import { Toast } from "primereact/toast";
import { useRef } from "react";

import { registerSchema, FormDataRegister } from "../schemas/register.schema";
import { useUserProfile } from "../hooks/useUserProfile";
import PersonalSection from "../components/register/PersonalSection";

const Profile: React.FC = () => {
  const { userData, updateUserProfile } = useUserProfile();
  const toast = useRef<Toast>(null);


  const {
    control,
    register,
    handleSubmit,
    setValue,
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
    updateUserProfile(data);
    toast.current?.show({
      severity: "success",
      summary: "Perfil actualizado",
      detail: "Tu perfil ha sido actualizado correctamente.",
      life: 3000,
    });
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Toast ref={toast} />
      <div className="flex-grow flex flex-col items-center justify-center p-6">
        <h1 className="text-2xl font-semibold mb-6">Mi perfil</h1>
        <div className="mb-4 bg-yellow-100 text-yellow-800 p-3 rounded text-center text-sm">
          Estás en modo demo: los datos se guardan solo durante esta sesión.
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
          <div className="flex justify-center mb-4">
            <Avatar
              icon="pi pi-user"
              size="xlarge"
              style={{ backgroundColor: "#2196F3", color: "#ffffff" }}
              shape="circle"
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <PersonalSection
              register={register}
              errors={errors}
              control={control}
            />
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
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