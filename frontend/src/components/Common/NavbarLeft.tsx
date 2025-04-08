import { useLocation } from "react-router-dom";
import { Logo } from "../svg/Logo";
import HomeSVG from "../svg/HomeSvg";
import ChartPieSVG from "../svg/ChartPieSVG";
import CardSVG from "../svg/CardSVG";
import UserSVG from "../svg/UserSVG";
import SettingsSVG from "../svg/SettingsSVG";
import { useEffect, useState } from "react";
import NavbarLeftItem from "./NavbarLeftItem";
import HelpSVG from "../svg/HelpSVG";


const NavbarLeft = () => {

    const itemsNavbar = [
        {
            id: 1,
            title: "Inicio",
            children: <HomeSVG
                viewBox="0 0 24 24"
                width={24}
                height={24}
            />,
            to: "/dashboard"
        },
        {
            id: 2,
            title: "Historial",
            children: <ChartPieSVG
                viewBox="0 0 24 24"
                width={24}
                height={24}
            />,
            to: "/transacciones"
        },
        {
            id: 3,
            title: "Billetera",
            children: <CardSVG
                viewBox="0 0 24 24"
                width={24}
                height={24}
            />,
            to: "/wallet"
        },
        {
            id: 4,
            title: "Perfil",
            children: <UserSVG
                viewBox="0 0 24 24"
                width={24}
                height={24}
            />,
            to: "/Profile"
        },
        {
            id: 5,
            title: "Ajustes",
            children: <SettingsSVG
                viewBox="0 0 24 24"
                width={24}
                height={24}
            />,
            to: "/settings"
        },
    ]

    const [urlActive, setUrlActive] = useState("");
    const location = useLocation();

    useEffect(() => {
        setUrlActive(location.pathname)
    }, [location.pathname])

    return (
        <div className="bg-secondary w-[30%] h-screen px-4 py-8 flex flex-col lg:w-[15%] items-center justify-between">

            <div className="w-full flex flex-col items-center">
                <div>
                    <Logo />
                </div>

                <nav
                    className="mt-12 gap-4 flex flex-col items-center w-[80%] text-white font-light">

                    {itemsNavbar && itemsNavbar.map((item) => (
                        <NavbarLeftItem
                            title={item.title}
                            to={item.to}
                            isActive={urlActive === item.to}
                        >
                            {item.children}
                        </NavbarLeftItem>
                    ))}

                </nav>
            </div>


            <div
                className="mt-12 gap-4 flex flex-col items-center w-[80%] text-white font-light">

                <NavbarLeftItem
                    to="about"
                    title="Ayuda"
                    isActive={urlActive === 'about'}
                >
                    {
                        <HelpSVG
                            viewBox="0 0 24 24"
                            height={24}
                            width={24}
                        />
                    }
                </NavbarLeftItem>
            </div>
        </div>
    )
}

export default NavbarLeft;