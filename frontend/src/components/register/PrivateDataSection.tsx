import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Dropdown } from "primereact/dropdown";
import { FieldErrors, UseFormRegister, Control, Controller } from "react-hook-form";
import { FormDataRegister } from "../../schemas/register.schema";

const docTypes = [
    { label: "DNI", value: "dni" },
    { label: "Pasaporte", value: "pasaporte" },
    { label: "Libreta Cívica", value: "libreta_civica" },
    { label: "Libreta de Enrolamiento", value: "libreta_enrolamiento" }
];

interface Props {
    register: UseFormRegister<FormDataRegister>;
    errors: FieldErrors<FormDataRegister>;
    control: Control<FormDataRegister>;
}

const PrivateDataSection: React.FC<Props> = ({ register, errors, control }) => {
    return (
        <>
            <div className="flex gap-2 items-center justify-between flex-wrap">
                <div className="flex flex-col gap-4 grow-1">
                    <label htmlFor="doc_type">Tipo de documento</label>
                    <Controller
                        name="doc_type"
                        control={control}
                        render={({ field }) => (
                            <Dropdown
                                id="doc_type"
                                options={docTypes}
                                placeholder="Selecciona tipo de documento"
                                value={field.value ?? ""}
                                onChange={e => field.onChange(e.value ?? "")}
                                className={errors.doc_type ? "p-invalid" : ""}
                            />
                        )}
                    />
                    {errors.doc_type && <span className="text-red-500">{errors.doc_type.message as string}</span>}
                </div>
                <div className="flex flex-col gap-4 grow-1">
                    <label htmlFor="dni">Número de documento</label>
                    <InputText
                        placeholder="Número de documento"
                        id="dni"
                        {...register("dni")}
                        inputMode="numeric"
                    />
                    {errors.dni && <span className="text-red-500">{errors.dni.message as string}</span>}
                </div>
            </div>
            <div className="flex gap-2 items-center justify-between flex-wrap">
                <div className="flex flex-col grow-1 gap-4" >
                    <label htmlFor="password">Contraseña</label>
                    <Password
                        toggleMask
                        placeholder="Contraseña"
                        className={`grow-1 custom-password ${errors.password ? "p-invalid" : ""}`}
                        feedback={false}
                        id="password"
                        {...register("password")}
                    />
                    {errors.password && <span className="text-red-500">{errors.password.message as string}</span>}
                </div>
                <div className="flex flex-col gap-4 grow-1">
                    <label htmlFor="repeatPwd">Repetir contraseña</label>
                    <Password
                        toggleMask
                        placeholder="Repetir contraseña"
                        feedback={false}
                        className={`grow-1 ${errors.repeatPwd ? "p-invalid" : ""}`}
                        id="repeatPwd"
                        {...register("repeatPwd")}
                    />
                    {errors.repeatPwd && <span className="text-red-500">{errors.repeatPwd.message as string}</span>}
                </div>
            </div>
        </>
    );
};

export default PrivateDataSection;