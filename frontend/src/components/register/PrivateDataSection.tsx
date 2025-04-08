import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import Upload from '../../svgs/upload.svg';
import { PropsFormSubcomponent } from "../../types/FormProps.types";
import { FormDataRegister } from "../../schemas/register.schema";
import { Controller } from "react-hook-form";


const PrivateDataSection: React.FC<PropsFormSubcomponent<FormDataRegister>> = ({
    errors,
    control,
    register
}) => {

    return (
        <>

            <div className="flex gap-2 items-center justify-between flex-wrap">

                <div className="flex flex-col gap-4 grow-1">
                    <label htmlFor="dni">Dni o Pasaporte</label>
                    <InputText
                        placeholder="Dni o Pasaporte"
                        {...register("dni")}
                        id="dni"
                        invalid={!!errors.dni}
                    />
                    {errors && errors.dni && (
                        <small className="text-secondary">{errors.dni.message}</small>
                    )}
                </div>

                <div className="flex flex-col gap-4 grow-1">
                    <label htmlFor="dni_file">Dni o Pasaporte</label>

                    <div
                        className="relative flex items-center"
                    >
                        <InputText
                            type="file"
                            className="w-full"
                            id="dni_file"
                        // invalid={!!errors.dni_file}

                        // {...register('dni_file')}

                        />
                        <img
                            className="absolute top-auto right-3 bg-white p-2"
                            src={Upload} />
                    </div>

                    {/* {errors.dni_file && (
                        <small className="text-secondary">{errors.dni_file?.message}</small>
                    )} */}
                </div>

            </div>

            <div className="flex gap-2 items-center justify-between flex-wrap">
                <div className="flex flex-col grow-1 gap-4" >
                    <label htmlFor="password">Contraseña</label>
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                            <Password
                                {...field}
                                toggleMask
                                placeholder="Contraseña"
                                className="grow-1 custom-password"
                                feedback={false}
                                pt={{
                                    iconField: {
                                        root: { style: { width: "100%" } },
                                    },
                                    input: { style: { width: "100%" } },
                                    root: { style: { width: "100%" } },
                                }}
                                invalid={!!errors.password}
                            />
                        )}
                    />

                    {errors.password && (
                        <small className="text-secondary">{errors.password?.message}</small>
                    )}
                </div>

                <div className="flex flex-col gap-4 grow-1">
                    <label htmlFor="repeatPwd">Repetir contraseña</label>

                    <Controller
                        name="repeatpwd"
                        control={control}
                        render={({ field }) => (
                            <Password
                                {...field}
                                toggleMask
                                placeholder="Repetir contraseña"
                                feedback={false}
                                className="grow-1"
                                pt={{
                                    iconField: {
                                        root: { style: { width: "100%" } },
                                    },
                                    input: { style: { width: "100%" } },
                                    root: { style: { width: "100%" } },
                                }}
                                invalid={!!errors.repeatpwd}

                            />
                        )}
                    />

                    {errors.repeatpwd && (
                        <small className="text-secondary">{errors.repeatpwd?.message}</small>
                    )}

                </div>
            </div>
        </>
    )
}

export default PrivateDataSection;