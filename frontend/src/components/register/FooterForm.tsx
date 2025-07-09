import { Link } from "react-router";

interface FooterProps {
    isPending?: boolean,
}

const FooterForm: React.FC<FooterProps> = ({
    isPending
}) => {
    return (
        <>
            <div className="flex flex-col gap-4 mt-4">
            <button
                className="w-full bg-blue-500 text-white py-2 rounded"
                type="submit"
                disabled={isPending}
            >
            Registrarse
            </button>

                <small
                    className="w-full text-center text-gray text-lg"
                >
                    ¿Tenés una cuenta?
                    <Link
                        to={'/login'}
                        className="font-bold text-secondary ml-2">
                        Inicia sesión
                    </Link>

                </small>
            </div>
        </>
    )
}

export default FooterForm;