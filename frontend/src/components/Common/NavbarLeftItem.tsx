import React, { ReactNode } from "react";
import { Link } from "react-router-dom";



interface NavbarItem {
    title: string,
    children: ReactNode,
    to: string,
    isActive: boolean
}

const NavbarLeftItem: React.FC<NavbarItem> = ({
    title,
    children,
    to,
    isActive,
}) => {

    const activeClass = "bg-[rgba(255,255,255,.4)] text-secondary"

    return (
        <Link
            className={`flex gap-2 items-center justify-start w-full px-4 py-2 rounded-xl ${isActive ? activeClass : ""}`}
            to={to}>
            {children}
            {title}
        </Link>
    )
}

export default NavbarLeftItem;
