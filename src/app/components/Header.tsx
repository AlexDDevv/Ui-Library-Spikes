"use client"
import React, { useState } from 'react'
import { User, Search } from "lucide-react"
import Image from 'next/image';
import logo from "../../assets/img/logo.png"
import data from "../data/data.json"
import Link from 'next/link';

export default function Header() {
    const [selectedLink, setSelectedLink] = useState<string>("")

    const selectNavLink = (content: string) => {
        setSelectedLink(content)
    }

    return (
        <header className='bg-bgContainer flex items-center justify-between gap-x-5 px-8 py-6 w-full border-b-2 border-border'>
            <div className='cursor-pointer'>
                <Image
                    src={logo}
                    alt='Logo de la marque'
                />
            </div>
            <div className='w-[1px] h-6 bg-border'></div>
            <nav>
                <ul className='flex items-center gap-x-8'>
                    {data.navLink.map(item => (
                        <Link href={item.href}
                            key={item.content}
                            className={`${selectedLink === item.content ? "text-white" : "text-grayText"} text-sm transition-colors duration-200 ease-in-out cursor-pointer hover:text-white`}
                            onClick={() => selectNavLink(item.content)}
                        >{item.content}
                        </Link>
                    ))}
                </ul>
            </nav>
            <div className='w-[1px] h-6 bg-border'></div>
            <div className='bg-bgHero max-w-[680px] w-9/12 flex items-center py-2.5 px-4 rounded-md shadow-forBorder gap-x-3'>
                <Search className='h-4 w-4 text-grayText cursor-pointer' />
                <input
                    type="text"
                    id='search'
                    name='seach'
                    placeholder='Search for specific components, sections, wireframes, and more...'
                    className='bg-transparent w-full text-grayText text-xs outline-none placeholder:text-grayText'
                />
            </div>
            <div className='w-[1px] h-6 bg-border'></div>
            <div className='bg-bgHero h-8 w-8 rounded-md shadow-forBorder flex items-center justify-center cursor-pointer'>
                <User className='text-white h-4 w-4' />
            </div>
        </header>
    )
}
