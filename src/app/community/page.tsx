import React from 'react'
import NavBar from '../components/NavBar'
import Globe from '../components/UI/Globe'
import ArticlesContent from "../components/ArticlesContent"
import data from "../data/data.json"

export default function page() {
    return (
        <main className='flex'>
            <NavBar />
            <section className='bg-bgHero w-full p-8'>
                <div className='flex gap-8 h-[388px] border-b border-border mb-8 pb-8'>
                    <div className='w-1/2'>
                        <h1 className='font-semibold gradientText text-4xl mb-5'>
                            Join the Paste community
                        </h1>
                        <div className='flex flex-col gap-y-3'>
                            <p className='text-sm text-grayText max-w-[500px] leading-relaxed'>Join our vibrant community of developers today and take your coding journey to the next level!</p>
                            <p className='text-sm text-grayText max-w-[500px] leading-relaxed'>Connect with like-minded professionals, share knowledge, and collaborate on exciting projects. Whether you're a seasoned expert or just starting out, you'll find valuable resources, support, and inspiration.</p>
                            <p className='text-sm text-grayText max-w-[500px] leading-relaxed'>Together, we grow, learn, and innovate. Don't miss out on the opportunity to expand your network and skills... be part of something bigger!</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-1/2 bg-card rounded-xl h-full shadow-forCard overflow-hidden">
                        <Globe />
                    </div>
                </div>
                <section>
                    <h2 className='font-semibold text-white text-2xl mb-10'>Benefits of community</h2>
                    <div className='grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-x-6 gap-y-10'>
                        {data.community.map(item => (
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
