import React from 'react'
import { Check } from "lucide-react"

type PrincingPlanProps = {
    plan: string,
    price: number,
    avantages: string[]
}

export default function PrincingPlan({ plan, price, avantages }: PrincingPlanProps) {
    return (
        <article className='bg-card rounded-xl shadow-forCard p-4 w-[300px] max-w-[350px] h-full'>
            <div className='bg-bgHero px-6 py-5 shadow-forCard rounded-lg mb-5'>
                <div className='flex items-center justify-between gap-x-5'>
                    <h3 className='font-semibold text-grayText text-lg mb-8'>{plan}</h3>
                </div>
                <div className='flex items-center gap-x-3 mb-6'>
                    <h4 className='font-medium text-grayText text-4xl'>${price}</h4>
                    <p className='text-grayText'>/ month</p>
                </div>
                <button className='bg-btn text-white font-medium w-full rounded-md px-2 py-2 h-10 shadow-forCard'>Get started</button>
            </div>
            <div>
                <ul className='pl-5'>
                    {avantages.map(avantage => (
                        <li key={avantage} className="flex items-center gap-x-2 text-white mb-3">
                            <Check />
                            {avantage}
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    )
}
