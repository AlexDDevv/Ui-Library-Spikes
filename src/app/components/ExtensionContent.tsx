import React from 'react'
import { SunMoon, ListTodo, ChartNoAxesCombined } from "lucide-react"

type ExtensionType = {
    title: string,
    text: string
}

export default function ExtensionContent({ title, text }: ExtensionType) {
    const icons = [
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

    const getIconForExtension = (extension: string) => {
        const foundExtension = icons.find((item) => item.for === extension)
        return foundExtension ? foundExtension.icon : null
    }

    return (
        <article className='bg-bgContainer rounded-xl shadow-forCard p-4 relative min-h-[200px] cursor-pointer group'>
            <div className='flex items-center gap-x-4 text-white mb-5'>
                {getIconForExtension(title)}
                <h3 className='font-medium text-lg'>{title}</h3>
            </div>
            <div className='flex justify-between gap-x-10'>
                <p className='text-sm text-grayText leading-relaxed max-w-[200px] transition-colors duration-200 ease-in-out group-hover:text-white'>{text}</p>
                <div className='absolute h-20 w-20 bottom-3 right-3 transition-transform duration-200 ease-in-out group-hover:rotate-[-20deg]'>
                    {getIconForExtension(text)}
                </div>
            </div>
        </article>
    )
}
