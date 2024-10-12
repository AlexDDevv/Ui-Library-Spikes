import React from 'react'
import { Check } from "lucide-react"
import ShinyButton from './UI/ShinyButton'

type PrincingPlanProps = {
    plan: string,
    best?: string,
    price: number,
    avantages: string[]
}

export default function PrincingPlan({ plan, best, price, avantages }: PrincingPlanProps) {
    return (
        <article className='bg-card rounded-xl shadow-forCard p-4 min-w-[325px] max-w-[350px] h-full'>
            <div className='bg-bgHero px-6 py-5 shadow-[0_5px_15px_0_rgb(126,127,129,0.1)] rounded-lg mb-5'>
                <div className='flex items-center justify-between gap-x-5 mb-8'>
                    <h3 className='font-semibold text-grayText text-lg'>{plan}</h3>
                    {best && (
                        <ShinyButton
                            text={best}
                        />
                    )}
                </div>
                <div className='flex items-center gap-x-3 mb-6'>
                    <h4 className='font-medium text-grayText text-4xl'>${price}</h4>
                    <p className='text-grayText'>/ month</p>
                </div>
                <button className='bg-btn text-white font-medium w-full rounded-md px-2 py-2 h-10 shadow-forCard'>Get started</button>
            </div>
            <div>
                <ul className='pl-6'>
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
