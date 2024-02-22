'use client'
import { Playfair_Display } from "next/font/google"

import 'swiper/css';

import Image from "next/image";
const playFair = Playfair_Display({ weight: ['400', '500', '700'], subsets: ['latin'] })
const images = [{
    src: '/images/meghalaya.jpg',
    alt: 'Meghalaya',
    name: 'Meghalaya',
},
{
    src: '/images/900kandi.jpg',
    alt: '900kandi',
    name: '900 kandi',
},
{
    src: '/images/kayaking.jpg',
    alt: 'Allepppey',
    name: 'Alleppey',
},
{
    src: '/images/kolukkumalai.jpg',
    alt: 'Kolukkumalai',
    name: 'Kolukkumalai',
},
{
    src: '/images/bali.jpg',
    alt: 'Bali',
    name: 'Bali',
},
{
    src: '/images/dal-lake.jpg',
    alt: 'Dal-lake',
    name: 'Dal Lake',
}
]
export default function Experience() {
    return (
        <div className="bg-white w-full min-h-screen flex flex-col pt-4 py-10 border-b" id="Experiences">
            <div className="w-full px-10 md:px-32 py-16">
                <h2 className={`${playFair.className} text-slate-700 font-normal text-3xl md:text-4xl py-2`}>Popular Experiences</h2>
                <p className="text-slate-500 text-md">Browse exciting, adventurous and fun-filled activities for your holiday.</p>
            </div>

            <div className="w-full h-32 grid grid-cols-2 md:grid-cols-3 px-20 gap-10 ">

                {images.map((image, index) => (
                    <div key={index} className="h-32 flex flex-col items-center">
                        <Image src={image.src} width={300} height={200} alt={image.alt} className="max-w-full h-32 rounded-lg object-cover" />
                        <p className="mt-2 text-gray-700 font-bold">{image.name}</p>
                    </div>
                ))}
            </div>


        </div>
    )
}