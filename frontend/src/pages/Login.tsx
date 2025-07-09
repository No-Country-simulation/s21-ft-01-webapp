import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

import RightLogin from "../components/login/RightLogin";
import { FormDataLogin, loginSchema } from "../schemas/login.schema";
import Silueta from "frontend/src/svgs/silueta.png";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";

const Login: React.FC = () => {
    const [showErrors, setShowErrors] = useState(false);
    const [loginError, setLoginError] = useState("");
    const {
        handleSubmit,
        register,
        control,
        formState: { errors }
    } = useForm<FormDataLogin>({
        resolver: zodResolver(loginSchema),
        mode: "onSubmit"
    });

    const onSubmit = (data: FormDataLogin) => {
        setShowErrors(true);
        // Login demo: busca usuario en localStorage
        const userStr = localStorage.getItem("demoUser");
        if (userStr) {
            const user = JSON.parse(userStr);
            if (data.email === user.email && data.password === user.password) {
                setLoginError("");
                window.location.href = "/dashboard";
                return;
            }
        }
        // Fallback demo fijo
        if (data.email === "demo@capybank.com" && data.password === "capy123") {
            setLoginError("");
            window.location.href = "/dashboard";
        } else {
            setLoginError("Usuario o contraseña incorrectos. Prueba con tu registro o demo@capybank.com / capy123");
        }
    };

    return (
        <div className="flex min-h-screen">
            {/* Formulario de login */}
            <div className="w-full md:w-6/12 bg-white flex items-center justify-center p-8">
                <form
                    className="w-full max-w-md flex flex-col gap-4"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {/* Logo */}
                    <div className="flex justify-center mb-8">
                        <img src={Silueta} alt="Logo" className="w-32 h-32 object-contain" />
                    </div>

                    {/* Título de bienvenida */}
                    <div className="mb-8 text-center">
                        <h4 className="font-monserrat text-black text-2xl md:text-[32px]">
                            <b>¡Hola! 👋</b>
                        </h4>
                        <h4 className="font-monserrat text-black text-2xl md:text-[32px]">
                            <b>Te damos la bienvenida</b>
                        </h4>
                    </div>

                    {/* Campo de email */}
                    <div className="font-monserrat flex flex-col gap-2">
                        <label htmlFor="email">Correo electrónico</label>
                        <InputText
                            {...register("email")}
                            placeholder="Correo electrónico"
                            className={`w-full ${showErrors && errors.email ? "p-invalid" : ""}`}
                        />
                        {showErrors && errors.email && (
                            <small className="text-secondary">{errors.email?.message}</small>
                        )}
                    </div>

                    {/* Campo de contraseña */}
                    <div className="font-monserrat flex flex-col gap-2">
                        <label htmlFor="password">Contraseña</label>
                        <Controller
                            name="password"
                            control={control}
                            render={({ field }) => (
                                <Password
                                    {...field}
                                    toggleMask
                                    placeholder="Contraseña"
                                    className={`w-full ${showErrors && errors.password ? "p-invalid" : ""}`}
                                    feedback={false}
                                    invalid={showErrors && !!errors.password}
                                    pt={{
                                        iconField: { root: { style: { width: "100%" } } },
                                        input: { style: { width: "100%" } },
                                        root: { style: { width: "100%" } }
                                    }}
                                />
                            )}
                        />
                        {showErrors && errors.password && (
                            <small className="text-secondary">{errors.password?.message}</small>
                        )}
                    </div>

                    {/* Mensaje de error de login */}
                    {loginError && <small className="text-red-500 text-center">{loginError}</small>}

                    {/* Botón de envío */}
                    <button
                        type="submit"
                        // disabled={isPending}
                        className={`w-full mt-6 px-6 py-3 rounded-lg font-monserrat transition-colors bg-primary text-white hover:bg-primary-dark`}
                        aria-label="Iniciar sesión"
                    >
                        Iniciar sesión
                    </button>

                    {/* Enlace al registro */}
                    <Link
                        to="/register"
                        className="w-full font-monserrat text-center text-gray-600 text-lg mt-4"
                        aria-label="Registrarse"
                    >
                        ¿No tienes una cuenta?{" "}
                        <span className="font-monserrat text-red-600 hover:underline">
                            Regístrate
                        </span>
                    </Link>
                </form>
            </div>

            {/* Componente de la derecha (fondo azul) */}
            <div className="hidden md:flex md:w-6/12 bg-primary items-center justify-center">
                <RightLogin />
            </div>
        </div>
    );
};

export default Login;
