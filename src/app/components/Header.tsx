"use client";
import React, { useState } from "react";
import { User, Search } from "lucide-react";
import Image from "next/image";
import logo from "../../assets/img/logo.svg";
import logoMini from "../../assets/img/logoMini.png"
import data from "../data/data.json";
import Link from "next/link";
import UserMenu from "./UI/UserMenu";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const pathname = usePathname();

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header className="bg-bgContainer flex items-center justify-between gap-x-5 px-8 py-6 w-full border-b-2 border-border relative max-sm:px-5 max-sm:py-4 max-sm:gap-0">
            <Link href={"/"} className="cursor-pointer min-w-24 max-sm:min-w-6 max-sm:w-6">
                <picture>
                    <source
                        media="(max-width: 640px)"
                        srcSet={logoMini.src}
                        width={24}
                        height={24}
                    />
                    <Image
                        src={logo}
                        alt="Logo de la marque"
                        className="max-sm:w-6 max-sm:h-6"
                        width={96}
                        height={33}
                        priority
                    />
                </picture>
            </Link>
            <div className="w-[1px] h-6 bg-border max-lg:hidden"></div>
            <nav>
                <ul className="flex items-center gap-x-8 max-sm:gap-x-5">
                    {data.navLink.map((item) => (
                        <Link
                            href={item.href}
                            key={item.content}
                            className={`${pathname === item.href
                                ? "text-white"
                                : "text-grayText"
                                } text-sm transition-colors duration-200 ease-in-out cursor-pointer hover:text-white max-sm:text-xs max-mobile:text-[10px]`}
                        >
                            {item.content}
                        </Link>
                    ))}
                </ul>
            </nav>
            <div className="w-[1px] h-6 bg-border max-lg:hidden"></div>
            <div className="bg-bgHero max-w-[680px] w-9/12 flex items-center py-2.5 px-4 rounded-md shadow-forCard gap-x-3 max-lg:hidden">
                <Search className="h-4 w-4 text-grayText cursor-pointer" />
                <input
                    type="text"
                    id="search"
                    name="seach"
                    placeholder="Search for specific components, sections, wireframes, and more..."
                    className="bg-transparent w-full text-grayText text-xs outline-none placeholder:text-grayText placeholder-shown:text-ellipsis"
                />
            </div>
            <div className="w-[1px] h-6 bg-border max-lg:hidden max-"></div>
            <div
                className="bg-bgHero h-8 w-8 min-w-8 rounded-md shadow-forCard flex items-center justify-center cursor-pointer transition-shadow duration-200 ease-in-out hover:shadow-forCardHover z-[230] max-sm:h-6 max-sm:min-w-6 max-sm:w-6 max-sm:rounded-[5px]"
                onClick={handleShowMenu}
            >
                <User className="text-white h-4 w-4 max-sm:h-3 max-sm:w-3" />
            </div>
            <AnimatePresence>
                {showMenu && <UserMenu showMenu={showMenu} />}
            </AnimatePresence>
            {showMenu && (
                <div className="fixed w-full h-full top-0 right-0 left-0 bottom-0 z-[200]" onClick={handleShowMenu}></div>
            )}
        </header>
    );
}
