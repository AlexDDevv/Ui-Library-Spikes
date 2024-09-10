"use client"
import React, { useState } from 'react'
import styled from 'styled-components';
import { User, Search } from "lucide-react"
import Image from 'next/image';
import logo from "../../../assets/img/logo.png"
import data from "../data/data.json"

const Li = styled.li<{ $selected?: string }>`
    font-size: 14px;
    color: ${props => props.$selected || "#7E7F81"};
    cursor: pointer;
`

export default function Header() {
    const [selectedLi, setSelectedLi] = useState<string>("Library")

    const selectNavLi = (content: string) => {
        setSelectedLi(content)
    }

  return (
    <div className='flex items-center justify-between gap-x-5 px-8 py-6 w-full'>
        <div className='cursor-pointer'>
            <Image
                src={logo}
                alt='Logo de la marque'
            />
        </div>
        <div className='w-[1px] h-6 bg-border'></div>
        <nav>
            <ul className='flex items-center gap-x-8'>
                {data.navLi.map(item => (
                    <Li 
                        key={item.content} 
                        $selected={`${selectedLi === item.content ? "#ffffff" : "#7E7F81"}`}
                        onClick={() => selectNavLi(item.content)}
                    >{item.content}
                    </Li>
                ))}
            </ul>
        </nav>
        <div className='w-[1px] h-6 bg-border'></div>
        <div className='bg-bgHero max-w-[680px] w-9/12 flex items-center py-2.5 px-4 rounded-md shadow-[inset_0_0_0_1px_#1D1D1D] gap-x-3'>
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
        <div className='bg-bgHero h-8 w-8 rounded-md shadow-[inset_0_0_0_1px_#1D1D1D] flex items-center justify-center cursor-pointer'>
            <User className='text-white h-4 w-4' />
        </div>
    </div>
  )
}
