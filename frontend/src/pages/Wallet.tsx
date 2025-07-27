import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputText } from "primereact/inputtext";
import { Avatar } from "primereact/avatar";
import { Link } from "react-router-dom";

import NavbarLeft from "../components/Common/NavbarLeft";
import Search from "../components/svg/SearchBar.tsx";
import Bell from "../components/svg/Bell.tsx";
import CreditCard from "../../src/svgs/CreditCard1.svg";
import CapyHelp from "../../src/svgs/CapyHelp.svg";
import BalanceBox from "../components/BalanceBoxProps.tsx";
import ModalTransferencia from "../components/modals/ModalTransferencia";

import { useAuthStore } from "../../src/store/AuthStore";
import { useTransfer } from "../../src/hooks/useMoves";
import { moveOut, MoveOutForm } from "../../src/schemas/cashMove.schema";
import { TransferCash } from "../../src/types/CashMoves.types";

const Wallet: React.FC = () => {
  const saldoStore = useAuthStore((state) => state.user?.balanceTotal);
  const user = useAuthStore((state) => state.user);

  const [saldoActual, setSaldoActual] = useState(200000);
  const [isPending, setIsPending] = useState(false);
  const [transferSuccess, setTransferSuccess] = useState(false);
  const [transferError, setTransferError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cbuNumber, setCbuNumber] = useState<string>("");

  const { register, handleSubmit, formState: { errors }, reset } = useForm<MoveOutForm>({
    mode: "all",
    resolver: zodResolver(moveOut),
  });

  const { mutateAsync: transfer } = useTransfer();

  const onSubmit = async (data: MoveOutForm) => {
    setIsPending(true);
    const monto = Number(data.amount);

    if (!isNaN(monto) && monto > 0 && monto <= saldoActual) {
      setTimeout(() => {
      setSaldoActual(saldoActual - monto);
      setShowModal(true); // Mostrar modal después de actualizar saldo
    }, 2000);
    }

    const complete_transaction: TransferCash = {
      ...data,
      amount: monto,
      operation_type_id: 1,
      user_id: user!.id,
      is_income: false,
      sender_account_id: user!.sender_account_id,
    };

    try {
      await transfer(complete_transaction);
      setTransferSuccess(true);
    } catch (err) {
        console.error("Error al realizar la transferencia:", err);
        setTransferError("Error al realizar la transferencia, compruebe los datos.");
      } finally {
        setIsPending(false);
        reset();
      }
  };

  const generateCardNumber = () => {
    const digits = Array.from({ length: 16 }, () => Math.floor(Math.random() * 10));
    return digits.map((d, i) => (i % 4 === 0 && i !== 0 ? " " : "") + d).join("");
  };

  const generateCbuNumber = () => {
    const digits = Array.from({ length: 22 }, () => Math.floor(Math.random() * 10));
    return `${digits.slice(0, 8).join("")}-${digits.slice(8, 22).join("")}`;
  };

  useEffect(() => {
    setCardNumber(generateCardNumber());
    setCbuNumber(generateCbuNumber());
  }, []);

  return (
    <div className="flex min-h-screen bg-white">
      <NavbarLeft />

      <main className="flex-1 flex flex-col gap-6 p-4 md:p-8 ml-0 lg:ml-[16rem] transition-all duration-300">
        <section className="w-full overflow-x-auto">
          <h1 className="text-3xl font-semibold mb-6 text-primary">Mi Billetera</h1>

          {/* Top bar */}
          <div className="flex items-center gap-4 mb-6">
            <Search width={24} height={24} className="text-secondary" viewBox="0 0 24 24" />
            <InputText placeholder="Buscar" className="h-8 w-1/2 text-secondary border-secondary border-1" />
            <Bell viewBox="0 0 24 24" width={24} height={24} className="text-secondary" />
            <Link to="/profile">
              <Avatar label={user?.name.charAt(0)} shape="circle" style={{ backgroundColor: 'var(--color-secondary)', color: '#ffffff' }} />
            </Link>
          </div>

          {/* Wallet section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tarjeta y transferencia */}
          <div className="w-full flex flex-col items-center">
          {/* Tarjeta virtual */}
          <img className="w-full max-w-xs mt-2" src={CreditCard} alt="Tarjeta de Crédito" />
            <p className="font-bold text-gray-500 text-center mb-2">Número de tarjeta: {cardNumber}</p>
            <p className="text-gray-500 mt-2">CBU: {cbuNumber}</p>

          {/* Formulario */}
          <h2 className="text-primary font-bold font-montserrat mt-8 mb-4">Transferir</h2>
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

  {/* Balance y ayuda */}
  <div className="flex flex-col items-center justify-start gap-6">
    <BalanceBox saldo={saldoActual} className="w-fit text-center mt-8" />
    <img className="m-auto mt-10" src={CapyHelp} alt="Icono de CapyHelp" />
  </div>
</section>


          {/* Modal de confirmación */}
          <ModalTransferencia
            isOpen={showModal}
            onClose={() => {
              setShowModal(false);
              reset();
              setTransferSuccess(false);
              setTransferError("");
              setIsPending(false);
            }}
          />
        </section>
      </main>
    </div>
  );
};

export default Wallet;

