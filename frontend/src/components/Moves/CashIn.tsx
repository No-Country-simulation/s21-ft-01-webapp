import { useState } from "react";
import { useAuthStore } from "../../store/AuthStore";
import CashPlus from "../svg/CashPlus";
import { Dialog } from "primereact/dialog";


const CashIn = () => {

    const user = useAuthStore((state) => state.user);

    const [cashInVisible, setCashInVisible] = useState(false);

    return (
        <div>
            <button
                className="p-2 flex items-center justify-center rounded-sm shadow-md mb-2  bg-secondary cursor-pointer"
                onClick={() => setCashInVisible(true)}
            >
                <CashPlus
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                />
            </button>
            <p className="text-secondary text-center text-sm">Recibir</p>

            <Dialog header="Mis datos de cuenta" visible={cashInVisible} style={{ width: 'fit-content' }} onHide={() => { if (!cashInVisible) return; setCashInVisible(false); }} >
                <div className="flex gap-2">
                    <h4 className="font-bold">Numero de cuenta: </h4>
                    <p>{user?.account_number}</p>
                </div>
            </Dialog>
        </div>
    )
}

export default CashIn;