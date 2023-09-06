import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import ImageOne from '@/assets/SL-123119-26540-18.jpg'


const Header = () => {

    const content = (
        <header className='border rounded-lg'>
            <Image
                src={ImageOne}
                width={1000}
                height={100}
                alt='kj'
            />
        </header>
    )

    return content
}

export default Header