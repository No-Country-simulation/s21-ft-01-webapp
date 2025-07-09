import React from "react"
import CapybaraColor from '../../svgs/capybaraColor.svg';


const RightSide: React.FC = () => {
    return (
        <div className="relative w-full h-full flex">
            {/* Fondo azul */}
            <div className="absolute inset-0 w-full min-h-screen bg-primary z-0" style={{ pointerEvents: 'none' }} />
            {/* Contenido alineado arriba, top-0 */}
            <div className="relative z-10 flex flex-col items-center justify-start w-full text-white pt-12 gap-8" >
                <div className="fixed">
                    <h1 className="md:text-5xl lg:text-7xl font-monserrat w-full text-center mb-0">
                        <b>CapyBank</b>
                    </h1>
                    <h4 className="p-4 flex justify-center w-full">
                        <span className="block text-center font-monserrat md:text-lg lg:text-xl w-full max-w-[80%]">
                            Por normativa del BCRA necesitamos que completes tus datos y que nos compartas un DNI o Pasaporte para poder verificar tu identidad y asignarte una Cuenta bancaria 🤓
                        </span>
                    </h4>
                    <div className="bg-secondary w-[80%] md:w-[80%] lg:w-[50%] aspect-square flex items-center justify-center rounded-full mx-auto">
                    <img
                        src={CapybaraColor}
                        alt="Capybara"
                        className="max-w-[80%] max-h-[80%] object-contain"
                    />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightSide