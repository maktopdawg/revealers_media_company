import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import ImageOne from '@/assets/SL-123119-26540-18.jpg'
import ImageTwo from '@/assets/man-portrait-with-blue-lights-visual-effects.jpg'
import HeaderBanners from '@/sub_components/HeaderBanners';

const Header = () => {

    const content = (
        <header className='border h-96 w-full rounded-lg flex flex-row gap-6'>
            <HeaderBanners />
        </header>
    )

    return content
}

export default Header