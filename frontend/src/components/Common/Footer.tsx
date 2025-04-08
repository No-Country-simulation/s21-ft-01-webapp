import { nameLogo } from "../../utils/constant";
import { Logo } from "../svg/Logo";
import { Telegram } from "../svg/Telegram";
import { WhatsApp } from "../svg/WhatsApp";
import { YouTube } from "../svg/YouTube";

export function Footer ({ className }: { className?: string }) {
  return (
    <footer className={`bg-[#262626] w-full mt-auto text-neutral-400 relative px-10 py-5 h-80 text-sm flex justify-between max-w-[2040px] mx-auto ${className}`}>
      <div className="flex gap-25 h-full">
        <div className="flex flex-col h-full gap-4">
          <h3 className="uppercase text-xs">Servicios</h3>
          <ul className="flex flex-col gap-1">
            <li>Quiero abrir una cuenta</li>
            <li>Quiero sacar una tarjeta de débito digital</li>
            <li>Quiero transferir dinero</li>
          </ul>
          <p className="mt-auto">© 2025 CapyBank</p>
        </div>
        <div className="flex flex-col h-full gap-4">
          <h3 className="uppercase text-xs">Sobre nosotros</h3>
          <ul className="flex flex-col gap-1">
            <li>Quienes somos</li>
            <li>Precios</li>
            <li>Noticias</li>
            <li>Contacto</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center mb-3">
          <Logo />
          <h1 className=" text-2xl font-semibold text-white">{nameLogo}</h1>
        </div>
        <p>+5491122334455</p>
        <p>hola@capybank.com</p>
      </div>
      <div className="flex flex-col h-full">
        <button className="uppercase bg-primary text-white rounded-full py-3 px-8 tracking-widest font-semibold">Contactános</button>
        <p className="mt-auto text-right">Privacidad</p>
      </div>
      <div className="absolute right-0 left-0 bottom-3 w-full flex items-center justify-center">
        <button className="flex gap-3 bg-neutral-700 text-white rounded-full py-2 px-4"> <WhatsApp /> <Telegram /> | <YouTube /> </button>
      </div>
    </footer>
  )
}