import { Dropdown } from "primereact/dropdown";
import { PropsFormSubcomponent } from "../../types/FormProps.types";
import { FormDataRegister } from "../../schemas/register.schema";
import { useState } from "react";
import { useCountries } from "../../hooks/useCountry";
import { useCities } from "../../hooks/useCities";
import { InputText } from "primereact/inputtext";

const NacionalitySection: React.FC<PropsFormSubcomponent<FormDataRegister>> = ({
    errors,
    setValue,
    trigger,
    register
}) => {

    const [selectedCountry, setSelectedCountry] = useState<number | null>(null);
    const [selectedCity, setSelectedCity] = useState<number | null>(null);


    const { data: countries, isLoading: isLoadingCountries } = useCountries();
    const { data: cities, isLoading: isLoadingCities } = useCities(selectedCountry)

    return (
        <>
            <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-col gap-4 grow-1" >
                    <label htmlFor="country_id">País</label>
                    <Dropdown
                        value={selectedCountry}
                        options={countries}
                        optionLabel="name"
                        placeholder={`${isLoadingCountries ? 'Cargando' : 'Seleccione un país'}`}
                        emptyMessage="No hay paises disponibles"
                        optionValue="country_id"
                        className="w-full grow-1"
                        pt={{
                            root: {
                                style: { width: "100%" }
                            }
                        }}
                        id="country_id"
                        invalid={!!errors.country_id}
                        onChange={(e) => {
                            const countryId = Number(e.value)
                            console.log("ID seleccionado:", countryId);
                            setSelectedCountry(countryId);
                            setValue!("country_id", countryId, { shouldValidate: true });
                            trigger!("country_id");
                        }}
                        loading={isLoadingCountries}
                    />

                    {errors && errors.country_id && (
                        <small className="text-secondary">{errors.country_id.message}</small>
                    )}
                </div>

                <div className="flex flex-col gap-4 grow-1">
                    <label htmlFor="city_id">Ciudad</label>
                    <Dropdown
                        value={selectedCity}
                        options={cities}
                        optionLabel="name"
                        placeholder={`${isLoadingCities ? 'Cargando' : 'Seleccione una ciudad'}`}
                        loading={!!isLoadingCities}
                        optionValue="city_id"
                        emptyMessage="No hay ciudades disponibles"
                        className="w-full grow-1"
                        pt={{
                            root: {
                                style: { width: "100%" }
                            }
                        }}
                        id="city_id"
                        invalid={!!errors.city_id}
                        onChange={(e) => {
                            const cityId = Number(e.value);
                            setSelectedCity(cityId);
                            setValue!("city_id", cityId, { shouldValidate: true });
                            trigger!("city_id");
                        }}
                    />
                    {errors && errors.city_id && (
                        <small className="text-secondary">{errors.city_id.message}</small>
                    )}
                </div>


            </div>

            <div className="flex flex-wrap items-center justify-between gap-2">

                <div className="flex flex-col gap-4 grow-1">
                    <label htmlFor="address">Dirección</label>
                    <InputText
                        placeholder="Dirección"
                        {...register("address")}
                        id="address"
                        invalid={!!errors.address}
                    />
                    {errors && errors.address && (
                        <small className="text-secondary">{errors.address.message}</small>
                    )}
                </div>

            </div>
        </>
    )
}

export default NacionalitySection;