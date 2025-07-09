import { Dropdown } from "primereact/dropdown";
import { FieldErrors, UseFormRegister, Controller, Control, useWatch } from "react-hook-form";
import { FormDataRegister } from "../../schemas/register.schema";
import { provinces, cities } from "../../data/provincesAndCities";

interface Props {
    register: UseFormRegister<FormDataRegister>;
    errors: FieldErrors<FormDataRegister>;
    control: Control<FormDataRegister>;
} 

const NacionalitySection: React.FC<Props> = ({ register, errors, control }) => {
    // Solo Argentina como país
    const countryOptions = [{ label: "Argentina", value: "Argentina" }];
    // Observar provincia seleccionada en tiempo real
    const selectedProvince = useWatch({ control, name: "province_id" });
    return (
        <>
            <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-col gap-4 grow-1">
                    <label htmlFor="country_id">País</label>
                    <Dropdown
                        id="country_id"
                        options={countryOptions}
                        placeholder="Selecciona un país"
                        value="Argentina"
                        disabled
                        className={errors.country_id ? "p-invalid" : ""}
                    />
                    {/* Campo oculto para react-hook-form */}
                    <input type="hidden" value="Argentina" {...register("country_id")} />
                    {errors.country_id && <span className="text-red-500">{errors.country_id.message as string}</span>}
                </div>
                <div className="flex flex-col gap-4 grow-1">
                    <label htmlFor="province_id">Provincia</label>
                    <Controller
                        name="province_id"
                        control={control}
                        render={({ field }) => (
                            <Dropdown
                                id="province_id"
                                options={provinces.map(p => ({ label: p.name, value: p.id }))}
                                placeholder="Selecciona una provincia"
                                value={field.value ?? ""}
                                onChange={e => field.onChange(e.value ?? "")}
                                className={errors.province_id ? "p-invalid" : ""}
                            />
                        )}
                    />
                </div>
                <div className="flex flex-col gap-4 grow-1">
                    <label htmlFor="city_id">Ciudad</label>
                    <Controller
                        name="city_id"
                        control={control}
                        render={({ field }) => {
                            // Filtra ciudades según provincia seleccionada en tiempo real
                            const filteredCities = cities.filter(c => c.provinceId === selectedProvince);
                            return (
                                <Dropdown
                                    id="city_id"
                                    options={filteredCities.map(c => ({ label: c.name, value: c.id }))}
                                    placeholder="Selecciona una ciudad"
                                    value={field.value ?? ""}
                                    onChange={e => field.onChange(e.value ?? "")}
                                    className={errors.city_id ? "p-invalid" : ""}
                                />
                            );
                        }}
                    />
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-col gap-4 grow-1">
                    <label htmlFor="address">Dirección</label>
                    <input
                        className={`p-inputtext ${errors.address ? "p-invalid" : ""}`}
                        placeholder="Dirección"
                        id="address"
                        autoComplete="off"
                        {...register("address")}
                    />
                    {errors.address && <span className="text-red-500">{errors.address.message as string}</span>}
                </div>
            </div>
        </>
    );
};

export default NacionalitySection;