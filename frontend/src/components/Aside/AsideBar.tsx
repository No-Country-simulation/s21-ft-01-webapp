import React, { useState } from "react";
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
import { Link } from 'react-router-dom';  
import CreditCard from "../../svgs/CreditCard1.svg";
import ModalTransferencia from '../modals/ModalTransferencia';

const AsideBar = () => {
    const user = useAuthStore((state) => state.user);
    const [isPending, setIsPending] = useState(false);
    const [transferSuccess, setTransferSuccess] = useState(false);
    const [transferError, setTransferError] = useState("");
    const [saldo, setSaldo] = useState(200000);
    const [showModal, setShowModal] = useState(false);
    const [cardNumber, setCardNumber] = useState<string>("");
    const [cbuNumber, setCbuNumber] = useState<string>("");
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: "all",
        resolver: zodResolver(moveOut),
    });
    const { mutateAsync: transfer } = useTransfer();
    const onSubmit = async (data: MoveOutForm) => {
        setIsPending(true);
        const monto = Number(data.amount);
        if (!isNaN(monto) && monto > 0 && monto <= saldo) {
            setTimeout(() => {
                setShowModal(true);
            }, 2000); // Espera antes de mostrar el modal
            setSaldo(saldo - monto);
        }
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
        } catch {
            setTransferError("Error al realizar la transferencia, compruebe los datos.");
        } finally {
            // El botón vuelve a la normalidad cuando se cierra el modal
        }
    };  

    // Genera un número de tarjeta de 16 dígitos en formato xxxx xxxx xxxx xxxx
    const generateCardNumber = () => {
        const digits = Array.from({ length: 16 }, () => Math.floor(Math.random() * 10));
        return digits.map((d, i) => (i % 4 === 0 && i !== 0 ? " " : "") + d).join("");
    };

    // Genera un CBU de 22 dígitos en formato xxxxxxxx-xxxxxxxxxxxxxx
    const generateCbuNumber = () => {
        const digits = Array.from({ length: 22 }, () => Math.floor(Math.random() * 10));
        return `${digits.slice(0,8).join("")}-${digits.slice(8,22).join("")}`;
    };

    // Generar ambos números 
    React.useEffect(() => {
        setCardNumber(generateCardNumber());
        setCbuNumber(generateCbuNumber());
    }, []);

    return (
        <aside className="hidden lg:flex flex-col min-h-screen h-screen w-[14rem] max-w-[14rem] px-4 py-6 items-start z-40 bg-whiteSecondary">

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
                    <div className="flex flex-col items-center relative">
                        <img className="w-full max-w-xs" src={CreditCard} alt="Imagen de tarjeta de Crédito" />
                        <p className="text-gray mt-2">CBU: {cbuNumber}</p>
                        <div className="flex flex-col items-center w-full mt-4 gap-2">
                            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                                <div className="flex flex-col gap-4">
                                    <InputText  
                                        placeholder="Número de Cuenta"  
                                        {...register("receiver_account_id")}
                                        id="receiver_account_id"
                                        invalid={!!errors.receiver_account_id}  
                                        className="w-full"  
                                    />  
                                    {errors.receiver_account_id && (  
                                        <small className="text-secondary">{errors.receiver_account_id.message}</small>  
                                    )}  

                                    <InputText  
                                        placeholder="Monto"  
                                        {...register("amount")}
                                        id="amount"  
                                        invalid={!!errors.amount}  
                                        className="w-full"  
                                    />  
                                    {errors.amount && (  
                                        <small className="text-secondary">{errors.amount.message}</small>  
                                    )}  
                                </div>  

                                <button type="submit" className="mt-4 w-full bg-blue-500 text-white py-2 rounded" disabled={isPending}>
                                    {isPending ? "Enviando..." : "Enviar"}
                                </button>

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

            <ModalTransferencia isOpen={showModal} onClose={() => { setShowModal(false); reset(); setTransferSuccess(false); setTransferError(""); setIsPending(false); }} />

            {/* Modal de CBU eliminado, ahora se muestra directamente en la billetera */}
        </aside>
    );
};

export default AsideBar;