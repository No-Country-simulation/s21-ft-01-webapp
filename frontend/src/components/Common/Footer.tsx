import { nameLogo } from "../../utils/constant";
import { Logo } from "../svg/Logo";
import { Telegram } from "../svg/Telegram";
import { WhatsApp } from "../svg/WhatsApp";
import { YouTube } from "../svg/YouTube";

export function Footer ({ className }: { className?: string }) {
  return (
    <footer className={`bg-[#262626] w-full mt-auto text-neutral-400 relative px-4 md:px-10 py-5 h-auto md:h-80 text-sm flex flex-col md:flex-row justify-between max-w-[2040px] mx-auto ${className}`}>
      {/* Aquí uso flex-col en móviles y flex-row en pantallas medianas (md) */}
      
      {/* Primera parte: Servicios y Sobre nosotros */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-25 h-auto md:h-full mb-8 md:mb-0">
        {/* Apartar estilos para que en móvil sea en columna, en pantalla grande en fila */}
        <div className="flex flex-col h-full gap-4 min-w-[200px]">
          <h3 className="uppercase text-xs">Servicios</h3>
          <ul className="flex flex-col gap-1 list-disc list-inside">
            <li>Quiero abrir una cuenta</li>
            <li>Quiero sacar una tarjeta de débito digital</li>
            <li>Quiero transferir dinero</li>
          </ul>
          <p className="mt-auto">© 2025 CapyBank</p>
        </div>
        <div className="flex flex-col h-full gap-4 min-w-[200px]">
          <h3 className="uppercase text-xs">Sobre nosotros</h3>
          <ul className="flex flex-col gap-1 list-disc list-inside">
            <li>Quienes somos</li>
            <li>Precios</li>
            <li>Noticias</li>
            <li>Contacto</li>
          </ul> 
        </div>
      </div>

      {/* Contacto */}
      <div className="flex flex-col gap-1 mb-8 md:mb-0 md:mx-auto">
        <div className="flex items-center mb-3">
          <Logo />
          <h1 className="text-2xl font-semibold text-white ml-2">{nameLogo}</h1>
        </div>
        <p>+5491122334455</p>
        <p>hola@capybank.com</p>
      </div>

      {/* Botón y privacidad */}
      <div className="flex flex-col items-center md:items-end h-full gap-2">
        <button className="uppercase bg-primary text-white rounded-full py-3 px-8 tracking-widest font-semibold w-full md:w-auto">
          Contactános
        </button>
        <p className="mt-auto text-right md:text-right">Privacidad</p>
    
      {/* Social media overlay */}
        <button className="flex gap-3 bg-neutral-700 text-white rounded-full py-2 px-4">
          <WhatsApp /> <Telegram /> | <YouTube />
        </button>
      </div>
    </footer>
  );
}