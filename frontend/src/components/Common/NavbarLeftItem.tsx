import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ROUTES, TypeRoutes } from "../../routes/routes";




interface NavbarItem { 
    title: string;
    children: ReactNode;
    to: typeof ROUTES[TypeRoutes];
    isActive: boolean;
    action?: () => void;
}

const NavbarLeftItem: React.FC<NavbarItem> = ({
    title,
    children,
    to,
    isActive,
    action,
}) => {

    const activeClass = "bg-[rgba(255,255,255,.4)] text-secondary"
    const baseClass = `flex gap-2 items-center justify-start w-full px-4 py-2 rounded-xl transition ${
        isActive ? activeClass : "hover:bg-[rgba(255,255,255,.2)] text-white"
    }`;

    if (action) {
        return (
            <button onClick={action} className={baseClass}>
                {children}
                {title} 
            </button>
        );
    }

    return (
        <Link className={baseClass} to={to!}>
            {children}
            {title}
        </Link>
    );
};

export default NavbarLeftItem;
