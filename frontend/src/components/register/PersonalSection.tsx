import { Calendar } from "primereact/calendar";  
import { InputText } from "primereact/inputtext";  
import { FieldErrors, UseFormRegister, Control, Controller } from "react-hook-form";  
import { FormDataRegister } from "../../schemas/register.schema";  

interface Props {  
    register: UseFormRegister<FormDataRegister>;  
    errors: FieldErrors<FormDataRegister>;  
    control: Control<FormDataRegister>;  
}   

const PersonalSection: React.FC<Props> = ({ register, errors, control }) => {  
    return (  
        <>  
            <div className="flex flex-wrap items-center justify-between gap-2">  
                <div className="flex flex-col gap-4 grow-1">  
                    <label htmlFor="name">Nombre</label>  
                    <InputText  
                        placeholder="Nombre"  
                        id="name"  
                        {...register("name")}  
                    />  
                    {errors.name && (  
                        <span className="text-red-500">{errors.name.message as string}</span>  
                    )}  
                </div>  
                <div className="flex flex-col gap-4 grow-1">  
                    <label htmlFor="last_name">Apellido</label>  
                    <InputText  
                        placeholder="Apellido"  
                        id="last_name"  
                        {...register("last_name")}  
                    />  
                    {errors.last_name && (  
                        <span className="text-red-500">{errors.last_name.message as string}</span>  
                    )}  
                </div>  
            </div>  

            <div className="flex flex-col gap-4">  
                <label htmlFor="email">Correo electrónico</label>  
                <InputText  
                    placeholder="Correo electrónico"  
                    id="email"  
                    {...register("email")}  
                />  
                {errors.email && (  
                    <span className="text-red-500">{errors.email.message as string}</span>  
                )}  
            </div>  

            <div className="flex flex-wrap items-center justify-between gap-2">  
                <div className="flex flex-col gap-4 grow-1">  
                    <label htmlFor="birth_date">Fecha de nacimiento</label>  
                    <Controller  
                        name="birth_date"  
                        control={control}  
                        render={({ field }) => (  
                            <Calendar  
                                id="birth_date"  
                                value={field.value ? new Date(field.value) : null}  
                                onChange={e => {  
                                    const date = e.value;  
                                    if (date instanceof Date && !isNaN(date.getTime())) {  
                                        // Formato YYYY-MM-DD  
                                        const yyyy = date.getFullYear();  
                                        const mm = String(date.getMonth() + 1).padStart(2, '0');  
                                        const dd = String(date.getDate()).padStart(2, '0');  
                                        field.onChange(`${yyyy}-${mm}-${dd}`);  
                                    } else {  
                                        field.onChange("");  
                                    }  
                                }}  
                                showIcon  
                                placeholder="Fecha de Nacimiento"  
                                className="custom-calendar"  
                                dateFormat="yy-mm-dd"  
                            />  
                        )}  
                    />  
                    {errors.birth_date && (  
                        <span className="text-red-500">{errors.birth_date.message as string}</span>  
                    )}  
                </div>  
                <div className="flex flex-col gap-4 grow-1">  
                    <label htmlFor="phone">Número de teléfono</label>  
                    <InputText  
                        placeholder="(+54) 1234 5678"  
                        id="phone"  
                        {...register("phone")}  
                    />  
                    {errors.phone && (  
                        <span className="text-red-500">{errors.phone.message as string}</span>  
                    )}  
                </div>  
            </div>  
        </>  
    );  
}  

export default PersonalSection;