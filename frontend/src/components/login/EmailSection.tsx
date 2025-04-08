import { InputText } from "primereact/inputtext";
import { useFormContext } from "react-hook-form";

const EmailSection = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div className="font-monserrat flex flex-col gap-4">
            <label htmlFor="email">Correo electrónico</label>
            <InputText
                {...register("email")}
                placeholder="Correo electrónico"
                className="w-full"
                invalid={!!errors.email}
            />
            {errors.email && (
                <small className="text-secondary">{errors.email?.message}</small>
            )}
        </div>
    );
};

export default EmailSection;




