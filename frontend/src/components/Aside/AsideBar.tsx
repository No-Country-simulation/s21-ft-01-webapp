import { InputText } from "primereact/inputtext";
import Bell from "../svg/Bell";
import Search from "../svg/SearchBar";
import { Avatar } from "primereact/avatar";
import { useAuthStore } from "../../store/AuthStore";
import DialogHelp from '../../svgs/CapyHelp.png';
import CapyHelp from '../../svgs/DialogHelp.png';
//import CashOut from "../Moves/CashOut";
//import CashIn from "../Moves/CashIn";

const AsideBar = () => {

    const user = useAuthStore((state) => state.user);

    return (

        <aside className="grow-1 bg-whiteSecondary gap-4 w-[40%] h-screen px-4 py-8 flex flex-col lg:w-[15%] items-start justify-between">


            <div className="w-full">
                <div className="flex items-center h-fit gap-4">
                    <Search
                        width={24}
                        height={24}
                        className=" center left-4 text-secondary"
                        viewBox="0 0 24 24" />
                    <InputText
                        placeholder="Buscar"
                        className="h-8 w-1/2 text-secondary border-secondary border-1" />

                    <Bell viewBox="0 0 24 24" width={24} height={24}
                        className="text-secondary"
                    />
                    <Avatar
                        label={user?.name[0]} shape="circle"
                        style={{ backgroundColor: 'var(--color-secondary)', color: '#ffffff' }}
                    />
                </div>
            </div>

            <div className="grow-1 flex flex-col w-full gap-6">
                <h5 className="text-secondary text-lg">Transferencia rápída</h5>

                <div className="w-full">
                    <h5 className=" text-secondary">Billetera</h5>

                    <div className="min-h-48 w-full flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300">
                        <p
                            className="text-gray text-sm"
                        >Cards Comming soon!</p>
                    </div>
                </div>
            </div>

            <div className="grow-1 text-white flex flex-col w-full gap-16">

                <div className="flex flex-col gap-2">
                    <InputText
                        placeholder="Numero de Cuenta"
                    />

                    <InputText
                        placeholder="Monto"
                    />

                    <div>
                        <button
                            className="p-2 bg-secondary cursor-pointer"
                        >
                            Enviar Dinero
                        </button>
                    </div>

                    <div>
                        <button
                            className="p-2 bg-secondary cursor-pointer"
                        >
                            Recibir
                        </button>
                    </div>
                </div>
            </div>
            <div className="relative h-fit w-full">
                <img className="m-auto" src={CapyHelp} alt="" />
                <img
                    className="absolute -top-3 right-0"
                    src={DialogHelp} />
            </div>

        </aside >
    )
}

export default AsideBar;

