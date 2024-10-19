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
        <article className='bg-bgContainer rounded-xl shadow-forCard p-4 min-w-[325px] max-w-[350px] h-full'>
            <div className='bg-transparent border border-border px-6 py-5 shadow-[inset_0_-10px_30px_-10px_#ffffff1f] rounded-lg mb-5'>
                <div className='flex items-center justify-between gap-x-5 mb-8'>
                    <h3 className='font-semibold text-white text-lg'>{plan}</h3>
                    {best && (
                        <ShinyButton
                            text={best}
                        />
                    )}
                </div>
                <div className='flex items-center gap-x-3 mb-6'>
                    <h4 className='font-medium text-white text-4xl'>${price}</h4>
                    <p className='text-white'>/ month</p>
                </div>
                <button className='bg-btn text-white font-medium w-full rounded-md px-2 py-2 h-10 shadow-forCard'>Get started</button>
            </div>
            <div>
                <ul className='pl-6'>
                    {avantages.map(avantage => (
                        <li key={avantage} className="flex items-center gap-x-2 text-grayText mb-3">
                            <Check />
                            {avantage}
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    )
}
