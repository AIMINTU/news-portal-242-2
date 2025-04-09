import Image from 'next/image';
import React from 'react';
import HeaderImage from '@/assets/dailynews.png'
import { getCurrentDate } from '@/utilities/getCurrentDate';

const Header = () => {
    const date=getCurrentDate()
    return (
        <div className='text-center p-2 md:p-0 my-7'>
            <Image className='block mx-auto w-4/6 md:w-3/6' src={HeaderImage} alt='news portal' width={300} height={200}/>
            <p>Journalist without Fear or Favour</p>
            <p>{date}</p>
        </div>
    );
};

export default Header;