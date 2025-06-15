import { Calendar } from "primereact/calendar";  
import { InputText } from "primereact/inputtext";  
import { UseFormRegister, FieldErrors } from "react-hook-form";  
import { UserProfile } from "../../schemas/user.schema"; 

interface PersonalSectionProps {  
    register: UseFormRegister<UserProfile>;  
    errors: FieldErrors<UserProfile>;  
}  

const PersonalSection: React.FC<PersonalSectionProps> = ({  
    register,  
    errors,  
}) => {  
    return (  
        <>  
            <div className="flex flex-wrap items-center justify-between gap-2">  
                <div className="flex flex-col gap-4 grow-1">  
                    <label htmlFor="name">Nombre</label>  
                    <InputText  
                        placeholder="Nombre"  
                        {...register("name")}  
                        id="name"  
                        invalid={!!errors.name}  
                    />  
                    {errors.name && (  
                        <small className="text-secondary">{errors.name.message}</small>  
                    )}  
                </div>  
                <div className="flex flex-col gap-4 grow-1">  
                    <label htmlFor="last_name">Apellido</label>  
                    <InputText  
                        placeholder="Apellido"  
                        {...register("last_name")}  
                        id="last_name"  
                        invalid={!!errors.last_name}  
                    />  
                    {errors.last_name && (  
                        <small className="text-secondary">{errors.last_name.message}</small>  
                    )}  
                </div>  
            </div>  

            <div className="flex flex-col gap-4">  
                <label htmlFor="email">Correo electrónico</label>  
                <InputText  
                    placeholder="Correo electrónico"  
                    {...register("email")}  
                    id="email"  
                    invalid={!!errors.email}  
                />  
                {errors.email && (  
                    <small className="text-secondary">{errors.email.message}</small>  
                )}  
            </div>  

            <div className="flex flex-wrap items-center justify-between gap-2">  
                <div className="flex flex-col gap-4 grow-1">  
                    <label htmlFor="birth_date">Fecha de nacimiento</label>  
                    <Calendar  
                        showIcon  
                        placeholder="Fecha de Nacimiento"  
                        className="custom-calendar"  
                        {...register("birth_date")}  
                        invalid={!!errors.birth_date}  
                    />  
                    {errors.birth_date && (  
                        <small className="text-secondary">{errors.birth_date.message}</small>  
                    )}  
                </div>  
                <div className="flex flex-col gap-4 grow-1">  
                    <label htmlFor="phone">Número de teléfono</label>  
                    <InputText  
                        placeholder="(+54) 1234 5678"  
                        {...register("phone")}  
                        id="phone"  
                        invalid={!!errors.phone}  
                    />  
                    {errors.phone && (  
                        <small className="text-secondary">{errors.phone.message}</small>  
                    )}  
                </div>  
            </div>  
        </>  
    );  
}  

export default PersonalSection;  