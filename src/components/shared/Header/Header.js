import Image from 'next/image';
import React from 'react';
import HeaderImage from '@/assets/dailystar.jpg'

const Header = () => {
    return (
        <div className='text-center p-2 md:p-0 my-7'>
            <Image className='block mx-auto w-4/6 md:w-3/6' src={HeaderImage} alt='news portal' width={500} height={200}/>
            <p>Journalist without Fear or Favour</p>
            <p>Thursday, March 20, 2025</p>
        </div>
    );
};

export default Header;