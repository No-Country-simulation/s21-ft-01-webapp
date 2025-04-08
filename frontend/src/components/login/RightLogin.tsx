import React from "react";
import CapybaraColor from '../../svgs/capybaraColor.svg';

const RightLogin: React.FC = () => {
    return (
        <div className="flex flex-col items-center gap-16 text-white">
            <h1 className="md:text-5xl lg:text-7xl font-monserrat">
                <b>CapyBank</b>
            </h1>
            <h4 className="p-4 lg:w-[80%] md:text-lg lg:text-xl text-center font-monserrat">
                Somos un banco dedicado a cambiar la manera en la que ves las finanzas
            </h4>
            <div className="bg-secondary w-[80%] md:w-[80%] lg:w-[50%] aspect-square flex items-center justify-center rounded-full">
                <img
                    src={CapybaraColor}
                    alt="Capybara"
                    className="max-w-[80%] max-h-[80%] object-contain"
                />
            </div>
        </div>
    );
};

export default RightLogin;