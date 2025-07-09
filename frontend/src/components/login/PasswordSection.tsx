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
                render={({ field }) => (  
                    <Password  
                        {...field}  
                        value={field.value ?? ""}  
                        toggleMask  
                        placeholder="Ingresa tu contraseña"  
                        className={errors.password ? 'p-invalid' : ''}  
                    />  
                )}  
            />  
            {errors.password?.message && (  
                <small className="p-error">{errors.password.message as string}</small>  
            )}  
        </div>  
    );  
};  

export default PasswordSection;