import React from 'react';
import Header from '../Header/Header';
import logo from '@/assets/News.jpg'
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
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
const Navbar = () => {

    return (
        <div>
            <Header></Header>

            <div className="navbar bg-black px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost bg-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                navItems.map((item, i) => <li key={i} className='md:text-white font-semibold'><Link href={item.path}>{item.route}</Link></li>)
                            }

                            <li className='md:text-white'>
                                <details >


                                </details>
                            </li>

                        </ul>
                    </div>
                    <Link href='/' className=" ">

                        <Image src={logo} width={100} height={100} alt="logo"></Image>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
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
                <div className="navbar-end">
                    <Link href=" https://www.youtube.com/"><FontAwesomeIcon className='text-white w-7 ms-3' icon={faYoutube} /></Link>
                    <Link href=" https://www.facebook.com"><FontAwesomeIcon className='text-white w-7 ms-3' icon={faFacebook} /></Link>
                    <Link href=" https://x.com/i/flow/login"><FontAwesomeIcon className='text-white w-8 ms-3' icon={faTwitter} /></Link>
                    <Link href=" https://www.whatsapp.com/?lang=fr_FR"> <FontAwesomeIcon className='text-white w-8 ms-3' icon={faWhatsapp} /></Link>
                    <Link href=" https://fr.linkedin.com/"><FontAwesomeIcon className='text-white w-8 ms-3' icon={faLinkedin} /></Link>


                </div>


            </div>
        </div>
    );
};

export default Navbar;