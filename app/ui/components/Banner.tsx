

export default function Banner(){
    return(
        <div className=" bg-cover bg-center h-screen w-full flex flex-col  justify-center  text-center" style={{backgroundImage:`url('/images/water.jpg')`}} >
            <div className="mb-5 w-full" >
                <h2 className="text-white mb-10 font-bold text-3xl md:text-5xl">We've got your travel plans.</h2>
                <p className="mb-10 text-white text-md px-2 md:px-0">Tripgram is a platform for explorers to come together by <br /> signing up  for exciting experiential stays in stunning properties or touring destinations.</p>
                <button className="bg-green-400 text-white rounded-full px-5 py-3 hover:bg-green-600 transition ease-in-out duration-300">Explore More</button>
            </div>
        </div>
    )
}