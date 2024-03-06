import { Montserrat } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

const montserrat = Montserrat({ weight: ['400', '700'], subsets: ["latin"] })

export default function Footer() {
    return (
        <div className="container mx-auto px-4 py-12 md:px-0" id="Contact Us" >
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                <div className="flex flex-col md:w-1/3 text-center md:text-start mt-5">
                    <h2 className={`text-black ${montserrat.className} font-bold text-2xl `}>Tripgram</h2>
                    <p className="text-gray-500 ">Tripgram is an outdoor recreational center which celebrates nature and it&apos;s inexplicable beauty.</p>
                </div>
                <div className="md:border-l md:border-gray-300 md:h-32"></div>
                <div className="hidden  md:flex w-full flex-row justify-around md:flex-col md:w-1/3 md:pl-6">
                    <h3 className="text-black font-semibold pb-5 hidden md:block">Pages</h3>
                    <p className="text-gray-500 hover:text-gray-700 cursor-pointer"><Link href={
                        "/"
                    }>Home</Link></p>
                    <p className="text-gray-500 hover:text-gray-700 cursor-pointer"><Link href={
                        "#Locations"
                    }>Locations</Link></p>
                    <p className="text-gray-500 hover:text-gray-700 cursor-pointer"><Link href={
                        "#Experiences"
                    }>Experiences</Link></p>

                </div>
                <div className="md:border-l md:border-gray-300 md:h-32"></div>

                <div className="flex flex-col md:w-1/3 md:mr-5 md:pl-5">
                    <h3 className="text-black font-semibold py-2 text-center md:text-start" >Social Media</h3>
                    <div className="flex flex-row gap-5 justify-center md:justify-normal pb-3 md:pb-0">
                        <Image className="cursor-pointer" src={'/icons/instagram.svg'} width={25} height={25} alt="instagram-icon" />
                        <Image className="cursor-pointer" src={'/icons/meta-icon.svg'} width={25} height={25} alt="meta-icon" />

                    </div>
                    <h3 className="text-black font-semibold py-2 text-center md:text-start">Newsletter</h3>
                    <p className="text-gray-500 pb-4 text-center md:text-start">Stay updated to all the happenings in Tripgram.</p>
                    <div className="flex flex-row w-full ">
                        <input placeholder="Enter your email" type="text" className=" outline-none pl-2 pr-2 w-full h-10 bg-gray-200 rounded-lg" />
                        <button className="w-1/3 h-10 bg-green-500 hover:bg-green-700 transition ease-in-out duration-300 rounded-lg ml-2 text-white">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="w-full text-center  pt-5">
                <p className="text-gray-500 ">2024 All rights reserved.</p>
            </div>
        </div>
    )
}