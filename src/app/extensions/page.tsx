import React from 'react'
import NavBar from "../components/NavBar";
import extensionImg from "../../assets/img/extension.svg"
// import extentionsImgMini from "../../assets/img/extensionMini.svg"
import Image from 'next/image';
import data from "../data/data.json"
import ArticlesContent from '../components/ArticlesContent';
import { Blocks, SunMoon, ChartNoAxesCombined, ListTodo, TypeOutline, BookA, BadgePoundSterling, SquareCode, Accessibility, Languages } from "lucide-react"

export default function page() {
    return (
        <main className='flex max-sm:flex-col'>
            <NavBar />
            <section className='bg-bgHero w-full p-8 max-md:p-7'>
                <div className='flex gap-8 border-b border-border mb-8 pb-8 max-lg:flex-col max-md:mb-7 max-md:pb-7 max-md:gap-7'>
                    <div className='w-1/2 max-lg:w-full'>
                        <h1 className='font-semibold gradientText text-4xl mb-5 max-lg:text-3xl'>Extensions</h1>
                        <div className='flex flex-col gap-y-3'>
                            <p className='text-sm text-grayText max-w-[500px] leading-relaxed'>Extensions on our site provide powerful tools to streamline your workflow and boost your projects.</p>
                            <p className='text-sm text-grayText max-w-[500px] leading-relaxed'>With advanced features and enhanced components, you can save time, customize your work, and improve productivity.</p>
                            <p className='text-sm text-grayText max-w-[500px] leading-relaxed'>Whether you're automating tasks or analyzing performance, our extensions help you achieve more, faster.</p>
                        </div>
                    </div>
                    <div className="bg-bgContainer w-1/2 rounded-xl shadow-forCard h-full overflow-hidden p-5 max-lg:w-full max-lg:flex  max-lg:items-center max-lg:justify-center max-mobile:p-4 max-mobile:rounded-lg">
                        <Image
                            src={extensionImg}
                            alt="Image avec des icones d'extensions"
                            className='w-full h-full max-lg:hidden'
                        />
                        <div className='hidden w-full text-grayText max-lg:flex max-lg:items-center max-lg:justify-between'>
                            <Blocks className='h-[5%] w-[5%] cursor-pointer transition duration-200 ease-in-out hover:text-white hover:rotate-[-20deg]' />
                            <SunMoon className='h-[5%] w-[5%] cursor-pointer transition duration-200 ease-in-out hover:text-white hover:rotate-[-20deg]' />
                            <ChartNoAxesCombined className='h-[5%] w-[5%] cursor-pointer transition duration-200 ease-in-out hover:text-white hover:rotate-[-20deg]' />
                            <ListTodo className='h-[5%] w-[5%] cursor-pointer transition duration-200 ease-in-out hover:text-white hover:rotate-[-20deg]' />
                            <TypeOutline className='h-[5%] w-[5%] cursor-pointer transition duration-200 ease-in-out hover:text-white hover:rotate-[-20deg]' />
                            <BookA className='h-[5%] w-[5%] cursor-pointer transition duration-200 ease-in-out hover:text-white hover:rotate-[-20deg]' />
                            <BadgePoundSterling className='h-[5%] w-[5%] cursor-pointer transition duration-200 ease-in-out hover:text-white hover:rotate-[-20deg]' />
                            <SquareCode className='h-[5%] w-[5%] cursor-pointer transition duration-200 ease-in-out hover:text-white hover:rotate-[-20deg]' />
                            <Accessibility className='h-[5%] w-[5%] cursor-pointer transition duration-200 ease-in-out hover:text-white hover:rotate-[-20deg]' />
                            <Languages className='h-[5%] w-[5%] cursor-pointer transition duration-200 ease-in-out hover:text-white hover:rotate-[-20deg]' />
                        </div>
                    </div>
                </div>
                <section>
                    <h2 className='font-semibold text-white text-2xl mb-10 max-md:text-xl'>Available extensions</h2>
                    <div className='grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-x-6 gap-y-10'>
                        {data.extensions.map(item => (
                            <ArticlesContent
                                key={item.title}
                                title={item.title}
                                text={item.text}
                            />
                        ))}
                    </div>
                </section>
            </section>
        </main>
    )
}
