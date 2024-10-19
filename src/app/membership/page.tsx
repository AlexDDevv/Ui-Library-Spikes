import React from 'react'
import NavBar from "../components/NavBar";
import Marquee from '../components/UI/Marquee';
import data from "../data/data.json"
import PrincingPlan from '../components/PrincingPlan';

export default function page() {
    return (
        <main className='flex'>
            <NavBar />
            <section className='bg-bgHero w-full p-8 overflow-hidden'>
                <div className='flex gap-8 h-[388px] border-b border-border mb-8 pb-8'>
                    <div className='w-1/2'>
                        <h1 className='font-semibold gradientText text-4xl mb-5'>
                            Rise your level
                        </h1>
                        <div className='flex flex-col gap-y-3'>
                            <p className='text-sm text-grayText max-w-[500px] leading-relaxed'>Join our passionate developer community and unlock access to exclusive component libraries, powerful extensions, and dedicated support.</p>
                            <p className='text-sm text-grayText max-w-[500px] leading-relaxed'>Boost your projects with regular updates and connect with experts to level up your skills.</p>
                            <p className='text-sm text-grayText max-w-[500px] leading-relaxed'> Whether you're a beginner or a pro, our platform helps you save time and build better, faster!</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-1/2 bg-bgContainer rounded-xl h-full border-2 border-border overflow-x-hidden py-6 relative">
                        <Marquee reverse />
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-5 bg-gradient-to-r from-bgContainer"></div>
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-5 bg-gradient-to-l from-bgContainer"></div>
                    </div>
                </div>
                <section>
                    <h2 className='font-semibold text-white text-2xl mb-20'>Princing plans</h2>
                    <div className='flex justify-between gap-10 flex-wrap'>
                        {data.pricing.map(item => (
                            <PrincingPlan
                                key={item.plan}
                                plan={item.plan}
                                best={item.best}
                                price={item.price}
                                avantages={item.avantages}
                            />
                        ))}
                    </div>
                </section>
            </section>
        </main>
    )
}
