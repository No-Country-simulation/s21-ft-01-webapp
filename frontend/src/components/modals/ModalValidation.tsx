import React, { useEffect, useState } from 'react';  
import { useNavigate } from 'react-router-dom'; 
import Capymonoculus from 'frontend/src/svgs/Capymonoculus.svg';  

interface ModalValidationProps {  
    isOpen: boolean;  
    onClose: () => void;  
}  

const ModalValidation: React.FC<ModalValidationProps> = ({ isOpen, onClose }) => {  
    const [isAnimating, setAnimating] = useState(false);   
    const [showContent, setShowContent] = useState(true);  
    const [showImage, setShowImage] = useState(false);  
    const [code, setCode] = useState(Array(6).fill(''));   
const [errorMessage, setErrorMessage] = useState(''); 
    const navigate = useNavigate();  

    useEffect(() => {  
        if (isOpen) {  
            setAnimating(false);  
            setShowContent(true);  
            setShowImage(false);   
            setCode(Array(6).fill('')); // Reinicia código al abrir 
            setErrorMessage(''); 
        }  
    }, [isOpen]);  

    if (!isOpen) return null;  

    const handleChange = (index: number, value: string) => {  
        if (value === '' || /^[0-9]$/.test(value)) {  
            const newCode = [...code];  
            newCode[index] = value;  
            setCode(newCode);  
            setErrorMessage(''); 
        
        // Pasar al siguiente input   
        if (value && index < 5) {  
            const nextInput = document.getElementById(`code-input-${index + 1}`);  
            if (nextInput) {  
                (nextInput as HTMLInputElement).focus();  
            }  
        } 
        } else {  
            setErrorMessage('* Solo se permiten números');   
        }
    };  

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {  
        if (event.key === 'Backspace' && !code[index] && index > 0) {  
            const prevInput = document.getElementById(`code-input-${index - 1}`);  
            if (prevInput) {  
                (prevInput as HTMLInputElement).focus();  
            }  
        }  
    };  

    const handleSubmit = () => {  
        if (code.join('').length < 6) {  
            setErrorMessage('* Por favor, completa todos los campos con números');  
            return; // Prevent further execution  
        }  
        
        if (code.join('').length === 6) {
            setShowContent(false);   
            setAnimating(true);   
            setTimeout(() => {  
                setShowImage(true);  
            }, 600);   
            
            setTimeout(() => {  
                navigate('/dashboard');   
                onClose();   
            }, 5000);  
        }  
    };  

    return (  
 <div className="fixed inset-0 flex items-center justify-center bg-beige backdrop-blur py-4 sm:py-10">  
            <div className="bg-gradient-to-b rounded-lg shadow-lg text-center w-full h-full  flex flex-col justify-center mx-4 sm:mx-auto max-w-screen-sm sm:max-w-md md:max-w-lg lg:max-w-xl">  

                {showContent ? (  
                    <>  
                        <h2 className="text-2xl md:text-4xl font-bold font-monserrat text-white mb-2"> ¡Solo falta un paso! </h2>    
                        <p className="text-black font-monserrat text-base md:text-lg mb-2"> Revisa tu bandeja de entrada para validar tu correo electrónico. </p>  

                        <div className="flex justify-center space-x-2 mb-4">  
                            {code.map((digit, index) => (  
                                <input   
                                    id={`code-input-${index}`}  
                                    key={index}  
                                    type="text"  
                                    maxLength={1}  
                                    value={digit}  
                                    onChange={(e) => handleChange(index, e.target.value)}  
                                    onKeyDown={(e) => handleKeyDown(e, index)}   
                                    className="w-16 h-16 text-center border border-gray-300 rounded-md text-black special-input"  
                                />  
                            ))}  
                        </div>  
                        
                        {errorMessage && <p className="text-red-500 mb-2">{errorMessage}</p>}  

                        <button   
                            onClick={handleSubmit}   
                            className="mx-auto block mt-4 px-6 py-3 bg-primary text-white rounded-lg font-monserrat hover:bg-primary-dark transition-colors">  
                            Validar  
                        </button>  
                    </>  
                ) : (  
                    <>  
                    <div className="flex flex-col items-center">  
                        <div className={`checkmark ${isAnimating ? 'animate-check' : ''} mb-4`}>  
                            <div className="check-symbol"></div>  
                        </div>  

                        {showImage && (   
                            <div className="flex flex-col items-center justify-center space-y-1">  

                                <h2 className="text-2xl md:text-4xl font-bold font-monserrat text-white my-2">   
                                    ¡Bienvenido al CapyClub!   
                                </h2> 
                                <p className="text-grey font-monserrat text-base md:text-lg my-2">
                                     Ya podés disfrutar los beneficios de CapyBank
                                </p>  
                                <img   
                                    src={Capymonoculus}   
                                    alt="Capybara con monoculo"   
                                    className="w-[60%] h-auto max-w-[400px] opacity-100 transition-opacity duration-500"   
                                />  
                            </div>  
                        )}  
                    </div>   
                    </>   
                )}  
            </div>  
        </div>  
    );  
};  

export default ModalValidation;  