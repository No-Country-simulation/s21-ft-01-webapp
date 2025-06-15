import { useState } from "react"; 
import { InputText } from "primereact/inputtext";
import Bell from "../svg/Bell";
import Search from "../svg/SearchBar";
import { Avatar } from "primereact/avatar";
import { useAuthStore } from "../../store/AuthStore";
import CapyHelp from '../../svgs/CapyHelp.svg';
import CashIn from "../Moves/CashIn";
import { moveOut, MoveOutForm } from "../../schemas/cashMove.schema"; 
import { useForm } from "react-hook-form"; 
import { zodResolver } from "@hookform/resolvers/zod";  
import { useTransfer } from "../../hooks/useMoves";  
import { TransferCash } from "../../types/CashMoves.types";  
import BlueButton from "../buttons/BlueButton";    
import { Link } from 'react-router-dom';  
import CreditCard from "../../svgs/CreditCard1.svg";

const AsideBar = () => {

    const user = useAuthStore((state) => state.user);
 // Estado para manejar el formulario de transferencia  
    const [isPending, setIsPending] = useState(false);  
    const [transferSuccess, setTransferSuccess] = useState(false);  
    const [transferError, setTransferError] = useState(""); 
    const { register, handleSubmit, formState: { errors } } = useForm({  
        mode: "all",  
        resolver: zodResolver(moveOut),  
    }); 
    const { mutate: transfer } = useTransfer();  
    const onSubmit = async (data: MoveOutForm) => {  
        setIsPending(true); 

         // Crear el objeto de transferencia  
        const complete_transaction: TransferCash = {  
            ...data,  
            amount: Number(data.amount),  
            operation_type_id: 1,  
            user_id: user!.id,  
            is_income: false,  
            sender_account_id: user!.sender_account_id,  
        };
        try {  
            await transfer(complete_transaction); 
            setTransferSuccess(true);  
        } catch (error) {  
            setTransferError("Error al realizar la transferencia, compruebe los datos.");  
        } finally {  
            setIsPending(false);  
        }  
    };  

    return (
        <aside className="min-h-screen w-[25%] h-screen px-4 py-6 flex flex-col items-start bg-whiteSecondary">

            <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center h-fit gap-4">
                    <Search
                        width={24}
                        height={24}
                        className="text-secondary"
                        viewBox="0 0 24 24" />
                    <InputText
                        placeholder="Buscar"
                        className="h-8 w-1/2 text-secondary border-secondary border-1" />

                    <Bell viewBox="0 0 24 24" width={24} height={24}
                        className="text-secondary"
                    />
                    <Link to="profile/">  
                    <Avatar label={user?.name.charAt(0)} shape="circle" style={{ backgroundColor: 'var(--color-secondary)', color: '#ffffff' }}/>  
                    </Link>
                </div>
            </div>

            <div className="flex flex-col w-full gap-6">
                <h5 className="text-secondary font-montserrat text-lg">Transferencia rápída</h5>

                <div className="w-full">
                    <h5 className=" text-secondary font-montserrat">Billetera</h5>
                    <div className="flex flex-col items-center">
                        <img className="w-full max-w-xs relative" src={CreditCard} alt="Imagen de tarjeta de Crédito" /> 
                        <p className="absolute text-black top-1/2 transform -translate-y-1/2">{user?.name || "Nombre no disponible"}</p>  
                        <p className="text-gray mt-2"> Numero de cuenta: {user?.account_number|| "No disponible"} </p>  
                        <div className="flex flex-col items-center w-full mt-4 gap-2"> 
                            <form onSubmit={handleSubmit(onSubmit)} className="w-full">  
                                <div className="flex flex-col gap-4">  
                                    <InputText  
                                        placeholder="Número de Cuenta"  
                                        {...register("receiver_account_id", { required: "El número de cuenta es obligatorio" })}
                                        id="receiver_account_id"
                                        invalid={!!errors.receiver_account_id}  
                                        className="w-full"  
                                    />  
                                    {errors.receiver_account_id && (  
                                        <small className="text-secondary">{errors.receiver_account_id.message}</small>  
                                    )}  

                                    <InputText  
                                        placeholder="Monto"  
                                        {...register("amount", { required: "El monto es obligatorio" })}  
                                        id="amount"  
                                        invalid={!!errors.amount}  
                                        className="w-full"  
                                    />  
                                    {errors.amount && (  
                                        <small className="text-secondary">{errors.amount.message}</small>  
                                    )}  
                                </div>  

                                <BlueButton label="Enviar" type="submit" disabled={isPending} className="mt-4" />  

                                {transferSuccess && (  
                                    <p className="text-green-600 mt-2">Transferencia finalizada exitosamente</p>  
                                )}  
                                {transferError && (  
                                    <p className="text-red-600 mt-2">{transferError}</p>  
                                )}  
                            </form>  
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-12 mt-6">
            <CashIn />
            </div>
            <div className="relative h-fit w-full">  
                <img className="m-auto" src={CapyHelp} alt="Icono de CapyHelp" />  
            </div>   
        </aside>
    );
};

export default AsideBar;