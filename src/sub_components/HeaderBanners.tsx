'use client'
import React from 'react'
import Image from 'next/image'
import ImageOne from '@/assets/album_covers/Adele_21.png'
import ImageTwo from '@/assets/artist_images/logic.webp'
import ImageThree from '@/assets/album_covers/rihanna_album.jpg'

const HeaderBanners = () => {
    interface BannersProps {
        image: any
        title: string
        description: string
    }

    const Banner: BannersProps[] = [
        {
            image: ImageOne,
            title: '21',
            description: 'Hot Right Now'
        },
        {
            image: ImageTwo,
            title: 'Logic',
            description: "Revealers' Artist Of The Month"
        },
        {
            image: ImageThree,
            title: 'Logic',
            description: "Revealers' Artist Of The Month"
        }
    ]

    return (
        <>
            {Banner.map((item) => (
                <div className='h-full pr-8 shadow-2xl'>
                    <Image
                        src={item.image}
                        alt={item.title}
                        width={100}
                        className='w-full h-full rounded-lg shadow-xl'
                    />  
                </div>
            ))}
        </>
    )
}

export default HeaderBanners