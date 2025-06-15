import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import { nameLogo } from "../../utils/constant";
import { Logo } from "../svg/Logo";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-neutral-800 px-4 md:px-6 py-4 rounded-4xl flex items-center justify-between relative z-50">
      {/* Logo y nombre */}
      <NavLink to={ROUTES.HOME} className="flex items-center">
        <Logo />
        <h1 className="text-2xl font-semibold ml-2">{nameLogo}</h1>
      </NavLink>

      {/* Enlaces principales - visible en pantallas grandes */}
      <div className="hidden md:flex">
        <ul className="flex gap-10 text-xl items-center justify-center">
          <li>
            <NavLink
              to={ROUTES.HOME}
              className={({ isActive }) => isActive ? 'border-b-2 border-white pb-2' : ''}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ROUTES.ABOUT}
              className={({ isActive }) => isActive ? 'border-b-2 border-white pb-2' : ''}
            >
              Sobre nosotros
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Acciones en pc */}
      <div className="hidden md:flex gap-4 items-center justify-center text-xl">
        <NavLink to={ROUTES.REGISTER}>Registrate</NavLink>
        <NavLink
          to={ROUTES.LOGIN}
          className="bg-secondary text-white py-3 px-8 rounded-full"
        >
          Inicia sesión
        </NavLink>
      </div>

      {/* Botón hamburguesa en móviles */}
      <div className="md:hidden flex items-center z-50">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="focus:outline-none"
        >
          {/* Icono hamburguesa */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-neutral-800 px-4 py-4 flex flex-col gap-4 md:hidden z-40">
          {/* Enlaces en modo móvil */}
          <ul className="flex flex-col gap-4 text-lg w-full">
            <li>
              <NavLink
                to={ROUTES.HOME}
                className={({ isActive }) =>
                  isActive ? 'border-b-2 border-white pb-2' : ''
                }
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={ROUTES.ABOUT}
                className={({ isActive }) =>
                  isActive ? 'border-b-2 border-white pb-2' : ''
                }
                onClick={() => setMenuOpen(false)}
              >
                Sobre nosotros
              </NavLink>
            </li>
            <li>
              <NavLink
                to={ROUTES.REGISTER}
                className="block"
                onClick={() => setMenuOpen(false)}
              >
                Registrate
              </NavLink>
            </li>
            <li>
              <NavLink
                to={ROUTES.LOGIN}
                className="bg-secondary text-white py-2 px-4 rounded-full block w-full text-center"
                onClick={() => setMenuOpen(false)}
              >
                Inicia sesión
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}