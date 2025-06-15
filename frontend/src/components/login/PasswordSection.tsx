import { Password } from "primereact/password";  
import { useFormContext, Controller } from "react-hook-form";  

const PasswordSection = () => {  
    const {  
        control,  
        formState: { errors },  
    } = useFormContext();  

    return (  
        <div>  
            <Controller  
                name="password"  
                control={control}  
                rules={{  
                    required: "La contraseña es obligatoria",  
                    minLength: {  
                        value: 6,  
                        message: "La contraseña debe tener al menos 6 caracteres",  
                    },  
                }}  
                render={({ field }) => (  
                    <Password  
                        {...field}  
                        toggleMask  
                        placeholder="Ingresa tu contraseña"  
                        className={errors.password ? 'p-invalid' : ''}  
                    />  
                )}  
            />  
            {errors.password && (  
                <small className="p-error">{errors.password.message}</small>  
            )}  
        </div>  
    );  
};  

export default PasswordSection;  