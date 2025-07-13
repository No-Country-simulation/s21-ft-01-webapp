import React, { useEffect, useState } from 'react';  
import { useNavigate } from 'react-router-dom';  
import Capycash from '../../svgs/capycash.svg';  

interface ModalTransferenciaProps {  
    isOpen: boolean;  
    onClose: () => void;  
}  

const ModalTransferencia: React.FC<ModalTransferenciaProps> = ({ isOpen, onClose }) => {  
    const [isAnimating, setAnimating] = useState(false);   
    const [showImage, setShowImage] = useState(false);    
    const navigate = useNavigate();  

    useEffect(() => {  
        if (isOpen) {  
            setAnimating(true);  
            setShowImage(false);  
            setTimeout(() => {  
                setShowImage(true);  
            }, 600);   

            // Redirigir después de un tiempo  
            setTimeout(() => {  
                navigate('/dashboard');   
                onClose();   
            }, 5000);  
        }  
    }, [isOpen, navigate, onClose]);  

    if (!isOpen) return null;    

    return (  
        <div className="fixed inset-0 flex items-center justify-center bg-beige backdrop-blur py-4 sm:py-10">  
            <div className="bg-gradient-to-b rounded-lg shadow-lg text-center w-full h-full flex flex-col justify-center mx-4 sm:mx-auto max-w-screen-sm sm:max-w-md md:max-w-lg lg:max-w-xl">  
                <div className="flex flex-col items-center">  
                    <div className={`checkmark ${isAnimating ? 'animate-check' : ''} mb-4`}>  
                        <div className="check-symbol"></div>  
                    </div>  

                    {showImage && (   
                        <div className="flex flex-col items-center justify-center space-y-1">  
                            <h2 className="text-2xl md:text-4xl font-bold font-monserrat text-white my-2">   
                                ¡Transferencia enviada con exito!  
                            </h2>     
                            <img   
                                src={Capycash}   
                                alt="Dinero con imagen de Capybara"   
                                className="w-[60%] h-auto max-w-[400px] opacity-100 transition-opacity duration-500"   
                            />  
                        </div>  
                    )}  
                </div>   
            </div>  
        </div>  
    );  
};  

export default ModalTransferencia;  