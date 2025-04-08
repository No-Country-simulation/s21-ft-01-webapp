import { NavLink } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import { nameLogo } from "../../utils/constant";
import { Logo } from "../svg/Logo";

export function Navbar () {
  return (
    <nav className="bg-neutral-800 px-6 py-4 rounded-4xl flex items-center justify-between text-white">
      <NavLink to={ROUTES.HOME}>
        <div className="flex items-center">
          <Logo />
          <h1 className=" text-2xl font-semibold">{nameLogo}</h1>
        </div>
      </NavLink>
      <div>
        <ul>
          <li className="flex gap-20 text-xl items-center justify-center">
            <NavLink to={ROUTES.HOME} className={({ isActive }) => isActive ? 'border-b-2 border-white pb-2' : ''}>Home</NavLink>
            <NavLink to={ROUTES.ABOUT} className={({ isActive }) => isActive ? 'border-b-2 border-white pb-2' : ''}>Sobre nosotros</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex gap-10 items-center justify-center text-xl ">
        <NavLink to={ROUTES.REGISTER}>Registrate</NavLink>
        <NavLink to={ROUTES.LOGIN} className="bg-secondary text-white py-3 px-8 rounded-full">Inicia sesión</NavLink>
      </div>
    </nav>
  )
}