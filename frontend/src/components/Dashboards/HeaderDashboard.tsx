import { useAuthStore } from "../../store/AuthStore";
import AnualResume from "./AnualResume";


const HeaderDashboard = () => {

    const user = useAuthStore((state) => state.user);

    return (
        <div className="flex gap-12">
            <div className="w-1/3">
                <div>
                    <h4 className="font-semibold">Hola, {user?.name} 👋</h4>
                </div>

                <div className="font-semibold">
                    <div className="text-secondary flex flex-col gap-2">
                        <h6 className="text-3xl">Saldos</h6>

                        <div className="p-4 pr-18 rounded-xl border-1 border-secondary bg-whiteGray">
                            <p className="font-normal">Balance Total</p>
                            <h4 className="my-2 font-bold text-4xl">$258.369</h4>
                        </div>

                        <div className="p-4 pr-18 rounded-xl border-1 border-secondary bg-whiteGray">
                            <p className="font-normal">Limite de Créditos</p>
                            <h4 className="my-2 font-bold text-black text-3xl">$766.785</h4>
                        </div>

                    </div>

                    <button className="text-center w-full my-4 p-2 rounded-xl bg-secondary text-white font-normal cursor-pointer border-secondary border-1 hover:bg-white hover:text-secondary">
                        Hacer una Transferencia
                    </button>

                </div>

            </div>

            <div className="w-2/3">
                <AnualResume />
            </div>
        </div>
    )
}

export default HeaderDashboard;