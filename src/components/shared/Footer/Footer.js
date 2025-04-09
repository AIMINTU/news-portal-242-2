import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import React from 'react';

const navItems = [
    {
        route: 'Home',
        path: '/'
    },
    {
        route: 'pages',
        path: '/pages'
    },
    {
        route: 'categories',
        path: '/categories'
    },
    {
        route: 'About',
        path: '/about'
    },
    {
        route: 'contact',
        path: '/contact'
    }
]

const Footer = () => {
    return (
        <div className='bg-black p-10'>
            <div className='flex justify-center'>
                <div className="flex ">
                    <Link href=" https://www.youtube.com/"><FontAwesomeIcon className='text-white w-7 ms-3' icon={faYoutube} /></Link>
                    <Link href=" https://www.facebook.com"><FontAwesomeIcon className='text-white w-7 ms-3' icon={faFacebook} /></Link>
                    <Link href=" https://x.com/i/flow/login"><FontAwesomeIcon className='text-white w-8 ms-3' icon={faTwitter} /></Link>
                    <Link href=" https://www.whatsapp.com/?lang=fr_FR"> <FontAwesomeIcon className='text-white w-8 ms-3' icon={faWhatsapp} /></Link>
                    <Link href=" https://fr.linkedin.com/"><FontAwesomeIcon className='text-white w-8 ms-3' icon={faLinkedin} /></Link>


                </div>
            </div>



            <div className='flex justify-center'>
                <div className="navbar-center flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navItems.map((item, i) => <li key={i} className='text-white font-semibold'><Link href={item.path}>{item.route}</Link></li>)
                        }

                        <li className='text-white'>
                            <details >
                                <summary>Parent</summary>
                                <ul className='p-2 text-black'>
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>

                                </ul>

                            </details>
                        </li>
                    </ul>
                </div>
            </div>
            <p className='text-center text-gray-700'>@2025 The News Portal. Design by Developer Shoriful Islaml</p>
        </div>
    );
};

export default Footer;