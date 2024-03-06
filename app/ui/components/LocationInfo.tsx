import { Oswald, Playfair_Display } from "next/font/google"
import Image from "next/image"

const oswald = Oswald({ weight: ['400', '700'], subsets: ["latin"] })
const playFair = Playfair_Display({ weight: ['400', '500', '700'], subsets: ['latin'] })
const locationDetails = [{
    place: 'Munnar',
    imgUrl: '/images/munnar.jpg',
},
{
    place: 'Alapuzha',
    imgUrl: '/images/alleppey.jpg',
},
{
    place: 'Kochi',
    imgUrl: '/images/kochi.jpg',
},
{
    place: 'Dubai',
    imgUrl: '/images/uae.jpg',
},
{
    place: 'Varkala',
    imgUrl: '/images/varkala.jpg',
},
{
    place: 'Himachal',
    imgUrl: '/images/himachal.jpg',
},

]

export default function LocationInfo() {
    return (
        <div className="bg-white w-full min-h-screen flex flex-col pt-4" id="Locations">
            <div className="w-full px-10 md:px-32 py-16">
                <h2 className={`${playFair.className} text-slate-700 font-normal text-3xl md:text-4xl py-2`}>Our Locations</h2>
                <p className="text-slate-500 text-md">Browse destination for your next holiday plan.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 justify-items-center">
                {
                    locationDetails.map(({ place, imgUrl }, index) => (
                        <div key={index} className="text-center mb-4 w-full ">
                            <Image className="rounded-full object-cover  w-32 h-32 mx-auto" width={125} height={125} src={imgUrl} alt={place} />
                            <p className={`text-slate-700 font-bold ${oswald.className} pt-2`}>{place}</p>

                        </div>

                    ))
                }

            </div>


        </div>
    )
}