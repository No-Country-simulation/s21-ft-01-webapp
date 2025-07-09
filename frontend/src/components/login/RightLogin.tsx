import React from "react";
import CapybaraColor from '../../svgs/capybaraColor.svg';

const RightLogin: React.FC = () => {
    return (
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* Fondo azul */}
            <div className="absolute inset-0 w-full h-full bg-primary z-0" style={{ pointerEvents: 'none' }} />
            {/* Contenido */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-white">
                <h1 className="stiky md:text-5xl lg:text-7xl font-monserrat w-full text-center">
                    <b>CapyBank</b>
                </h1>
                <h4 className="p-4 w-full lg:w-[80%] md:text-lg lg:text-xl text-center font-monserrat">
                    Somos un banco dedicado a cambiar la manera en la que ves las finanzas <br/>
                    Accede con la cuenta "demo@capybank.com" y la contraseña "capy123"
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
    );
};

export default RightLogin;