import { useState } from "react";
import CashMove from "../svg/CashMove"
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { moveOut, MoveOutForm } from "../../schemas/cashMove.schema";
import { useTransfer } from "../../hooks/useMoves";
import { useAuthStore } from "../../store/AuthStore";
import { TransferCash } from "../../types/CashMoves.types";
import BlueButton from "../buttons/BlueButton";


const CashOut = () => {

    const [isTransferModalVisible, setIsTransferModalVisible] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "all",
        resolver: zodResolver(moveOut)
    })

    const { mutate: transfer, isSuccess, isPending, error } = useTransfer();

    const user = useAuthStore((state) => state.user);

    const onSubmit = (data: MoveOutForm) => {

        const complete_transaction: TransferCash = {
            ...data,
            ammount: Number(data.ammount),
            operation_type_id: 1,
            user_id: user!.id_user,
            is_income: false,
            sender_account_id: user!.account_id
        }

        transfer(complete_transaction)
    }

    return (
        <>
            <div>
                <button
                    className="p-2 rounded-sm shadow-md mb-2  bg-secondary cursor-pointer"
                    onClick={() => setIsTransferModalVisible(true)}
                >
                    <CashMove
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                    />
                </button>

                <p className="text-secondary text-center text-sm">
                    Enviar
                </p>

                <Dialog header="Transferir a otra persona" visible={isTransferModalVisible} style={{ width: 'fit-content' }} onHide={() => { if (!isTransferModalVisible) return; setIsTransferModalVisible(false); }} >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-wrap flex-col items-center justify-between gap-2">

                            <div className="flex flex-col gap-4 grow-1">
                                <label htmlFor="reciever_account_number">Numero de Cuenta</label>
                                <InputText
                                    placeholder="Numero de Cuenta"
                                    {...register("reciever_account_number")}
                                    id="reciever_account_number"
                                    invalid={!!errors.reciever_account_number}
                                />
                                {errors && errors.reciever_account_number && (
                                    <small className="text-secondary">{errors.reciever_account_number.message}</small>
                                )}
                            </div>

                            <div className="flex flex-col gap-4 grow-1">
                                <label htmlFor="last_name">Monto</label>
                                <InputText
                                    placeholder="Monto"
                                    {...register("ammount")}
                                    id="ammount"
                                    invalid={!!errors.ammount}
                                />

                                {errors && errors.ammount && (
                                    <small className="text-secondary">{errors.ammount.message}</small>
                                )}
                            </div>

                            <BlueButton
                                label="Enviar"
                                type="submit"
                                disabled={isPending}
                            />

                            {isSuccess && (
                                <p>Transferencia finalizada exitosamente</p>
                            )}

                            {error && (
                                <p>Error al realizar la transferencia, compruebe los datos de cuente y el</p>
                            )}

                        </div>
                    </form>
                </Dialog>
            </div>


        </>

    )
}

export default CashOut