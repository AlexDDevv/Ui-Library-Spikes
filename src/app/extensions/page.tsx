import React from 'react'
import NavBar from "../components/NavBar";
import extensionImg from "../../assets/img/extension.svg"
import Image from 'next/image';
import data from "../data/data.json"
import ArticlesContent from '../components/ArticlesContent';

export default function page() {
    return (
        <main className='flex'>
            <NavBar />
            <section className='bg-bgHero w-full p-8'>
                <div className='flex gap-8 h-[388px] border-b border-border mb-8 pb-8'>
                    <div className='w-1/2'>
                        <h1 className='font-semibold gradientText text-4xl mb-5'>Extensions</h1>
                        <div className='flex flex-col gap-y-3'>
                            <p className='text-sm text-grayText max-w-[500px] leading-relaxed'>Extensions on our site provide powerful tools to streamline your workflow and boost your projects.</p>
                            <p className='text-sm text-grayText max-w-[500px] leading-relaxed'>With advanced features and enhanced components, you can save time, customize your work, and improve productivity.</p>
                            <p className='text-sm text-grayText max-w-[500px] leading-relaxed'>Whether you're automating tasks or analyzing performance, our extensions help you achieve more, faster.</p>
                        </div>
                    </div>
                    <div className="bg-bgContainer w-1/2 rounded-xl shadow-forCard h-full overflow-hidden p-5">
                        <Image
                            src={extensionImg}
                            alt="Image avec des icones d'extensions"
                            className='w-full h-full'
                        />
                    </div>
                </div>
                <section>
                    <h2 className='font-semibold text-white text-2xl mb-10'>Available extensions</h2>
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
