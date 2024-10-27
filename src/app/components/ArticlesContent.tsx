"use client"
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { SunMoon, ListTodo, ChartNoAxesCombined, SquareCode, GraduationCap } from "lucide-react"
import DiscordIcon from './UI/DiscordIcon'
import Image from 'next/image'
import discordIcon from "../../assets/img/discordIcon.svg"

type ExtensionType = {
    title: string,
    text: string
}

export default function ArticlesContent({ title, text }: ExtensionType) {
    const pathName = usePathname()
    const [isHovered, setIsHovered] = useState(false);

    const iconsExtensions = [
        {
            "icon": <ListTodo />,
            "for": "Task Automation Tool"
        },
        {
            "icon": <SunMoon />,
            "for": "Dark Mode Toggle"
        },
        {
            "icon": <ChartNoAxesCombined />,
            "for": "Real-Time Performance Analyzer"
        },
        {
            "icon": <ListTodo className='text-[#2F2F2F] h-full w-full transition-colors duration-200 ease-in-out group-hover:text-grayText' />,
            "for": "Automate repetitive tasks like deployments and testing."
        },
        {
            "icon": <SunMoon className='text-[#2F2F2F] h-full w-full transition-colors duration-200 ease-in-out group-hover:text-grayText' />,
            "for": "Easily integrate a dark mode toggle into your UI."
        },
        {
            "icon": <ChartNoAxesCombined className='text-[#2F2F2F] h-full w-full transition-colors duration-200 ease-in-out group-hover:text-grayText' />,
            "for": "Identify bottlenecks, and fine-tune for optimal results."
        }
    ]
    const iconsCommunity = [
        {
            "icon": <Image src={discordIcon} alt='Logo Discord' className='h-6 w-6' />,
            "for": "Free Discord Access"
        },
        {
            "icon": <SquareCode />,
            "for": "Open-Source Projects"
        },
        {
            "icon": <GraduationCap />,
            "for": "Learning Resources"
        },
        {
            "icon": <DiscordIcon isHovered={isHovered} />,
            "for": "Connect with developers for support and collaboration."
        },
        {
            "icon": <SquareCode className='text-[#2F2F2F] h-full w-full transition-colors duration-200 ease-in-out group-hover:text-grayText' />,
            "for": "Contribute and learn with community-driven projects."
        },
        {
            "icon": <GraduationCap className='text-[#2F2F2F] h-full w-full transition-colors duration-200 ease-in-out group-hover:text-grayText' />,
            "for": "Access tutorials and coding challenges for free."
        }
    ]

    const getIconForExtension = (extension: string) => {
        const foundExtension = iconsExtensions.find((item) => item.for === extension)
        return foundExtension ? foundExtension.icon : null
    }
    const getIconForCommunity = (extension: string) => {
        const foundIcons = iconsCommunity.find((item) => item.for === extension)
        return foundIcons ? foundIcons.icon : null
    }

    return (
        <article
            className='bg-bgContainer rounded-xl shadow-forCard p-4 relative min-h-[200px] cursor-pointer transition-shadow duration-200 ease-in-out hover:shadow-forCardHover group'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className='flex items-center gap-x-4 text-white mb-5'>
                {pathName === "/community" ? getIconForCommunity(title) : getIconForExtension(title)}
                <h3 className='font-medium text-lg max-mobile:text-base'>{title}</h3>
            </div>
            <div className='flex justify-between gap-x-10'>
                <p className='text-sm text-grayText leading-relaxed max-w-[200px] transition-colors duration-200 ease-in-out group-hover:text-white'>{text}</p>
                <div className='absolute h-20 w-20 bottom-3 right-3 transition-transform duration-200 ease-in-out group-hover:rotate-[-20deg]'>
                    {pathName === "/community" ? getIconForCommunity(text) : getIconForExtension(text)}
                </div>
            </div>
        </article>
    )
}
