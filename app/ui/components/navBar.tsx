'use client'
import { Montserrat, Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
const montserrat = Montserrat({ weight: ['400', '700'], subsets: ["latin"] })

const links = [
    {
        id: 1,
        link: "Trips",
    },
    {
        id: 2,
        link: "Membership",
    },
    {
        id: 3,
        link: "Contact Us",
    },
    {
        id: 4,
        link: "About",
    },
];

export function NavBar() {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };
    const [scroll, setScroll] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
        return () => {
            window.removeEventListener('scroll', changeNav);
        };
    }, [])
    return (
        <nav className={`w-full fixed h-20 z-[1] flex flex-row justify-around items-center md:justify-around transition duration-500 ease-in-out ${scroll ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            {/* hamburger button */}
            <div className="md:hidden block">
                <button className="relative group" onClick={handleClick}>
                    <div className={`relative flex overflow-hidden items-center justify-center   w-[50px] h-[50px] transform transition-all bg-transparent  duration-200`}>
                        <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition duration-300 origin-center overflow-hidden">
                            <div className={`${scroll?'bg-slate-700':'bg-white'} h-[2px] w-7 transform transition rounded-lg duration-300 origin-left ${isClicked && 'group-focus:rotate-[42deg]'}`}></div>
                            <div className={`${scroll?'bg-slate-700':'bg-white'} h-[2px] w-1/2 rounded-lg transform transition duration-300 ${isClicked && 'group-focus:-translate-x-10'}`}></div>
                            <div className={`${scroll?'bg-slate-700':'bg-white'} h-[2px] w-7 transform rounded-lg transition duration-300 origin-left ${isClicked && 'group-focus:-rotate-[42deg]'}`}></div>
                        </div>
                    </div>
                </button>
            </div>
            <h2 className={`${scroll ? 'text-black' : 'text-white'} ${montserrat.className} font-bold text-2xl `}>Tripgram</h2>
            <div className="w-[30%] md:w-1/2  flex flex-row justify-between items-center">
                <div className="w-3/4 hidden md:block">

                    <ul className="w-3/4 flex flex-row justify-between  ">
                        {
                            links.map(({ link, id }) => (
                                <li key={id} className={`${scroll ? 'text-gray-500 hover:text-black' : 'text-gray-200 hover:text-white  '} text-md`}>
                                    <Link href={link}>{link}</Link>
                                </li>
                            ))
                        }
                    </ul>

                </div>
                <button type="button" className=" text-white bg-green-400 hover:bg-green-600 transition ease-in-out  font-medium rounded-full text-sm md:text-md px-3  md:px-5 py-2.5 sm:font-xs ">Reserve Now</button>

            </div>
            {isClicked && (

                <div className="md:hidden fixed inset-y-0 z-10  flex flex-col  text-center bg-white w-[100%] max-w-lg  px-4 py-6 space-y-4  mt-20 transition ease-in-out">
                    {links.map(({ link, id }) => (
                        <li key={id} className="py-2 w-full list-none text-slate-500 text-lg hover:text-black">
                            <Link href={link}>{link}</Link>
                        </li>
                    ))}
                </div>
            )


            }
        </nav>
    )
}