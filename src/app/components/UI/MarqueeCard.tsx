import React from 'react'
import Image from 'next/image'

type MarqueeCardProps = {
    name: string,
    username: string,
    body: string,
    img: string
}

export default function MarqueeCard({ name, username, body, img }: MarqueeCardProps) {
    return (
        <figure className='bg-transparent p-5 rounded-lg max-w-[300px] shadow-[inset_0_-10px_30px_-10px_#ffffff1f] border border-border cursor-pointer relative transition-all duration-200 ease-in-out hover:border-[#ffffff33] hover:bg-bgHero'>
            <div className='mb-5 flex items-center gap-x-3'>
                <Image
                    src={img}
                    alt={`Photo de profil de ${name}`}
                    width={56}
                    height={56}
                    className='h-14 w-14 rounded-full overflow-hidden'
                />
                <div>
                    <figcaption className='font-semibold text-white'>{name}</figcaption>
                    <p className='font-medium text-sm text-grayText'>{username}</p>
                </div>
            </div>
            <blockquote className='text-grayText text-xs font-medium leading-normat'>
                {body}
            </blockquote>
        </figure>
    )
}
