import React, { useState } from "react";
import { useAuthStore } from "../../store/AuthStore";
import CashPlus from "../svg/CashPlus";
import { Dialog } from "primereact/dialog";


const CashIn = () => {

    const user = useAuthStore((state) => state.user);
    const [cashInVisible, setCashInVisible] = useState(false);
    const [cardNumber, setCardNumber] = useState<string>("");
    const [cbuNumber, setCbuNumber] = useState<string>("");

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

    React.useEffect(() => {
        setCardNumber(generateCardNumber());
        setCbuNumber(generateCbuNumber());
    }, []);

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
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                        <h4 className="font-bold">Número de tarjeta:</h4>
                        <p className="font-mono tracking-widest">{cardNumber}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <h4 className="font-bold">CBU:</h4>
                        <p className="font-mono tracking-widest">{cbuNumber}</p>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

export default CashIn;