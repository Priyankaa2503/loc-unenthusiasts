
export const Banner=()=>{
    return(
        <div className="flex flex-row  p-48 bg-bannerBg h-screen bg-cover bg-no-repeat w-full">
            <div className="flex flex-col items-start h-[100%] w-[60%] bg-transparent justify-center">
                <h1 className="text-5xl font-bold text-white">Welcome <span>User</span> !</h1>
                <p className="font-light text-white mt-10">description</p>
            </div>
            <div className=" h-[100%] w-[60%]"></div>
        </div>
    )
}