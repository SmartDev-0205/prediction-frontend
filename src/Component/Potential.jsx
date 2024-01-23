
import star_empty from "../assets/star_empty.svg";
const Potential = () => {
    return (
        <div className="flex items-center justify-center py-2 -mt-[90px] gap-8">
            <div className="flex xl:flex-row flex-col gap-2 xl:mt-10 mt-0">
                <img alt="loading" src={star_empty} className="md:w-4 w-3" />
                <img alt="loading" src={star_empty} className="md:w-4 w-3" />
                <img alt="loading" src={star_empty} className="md:w-4 w-3" />
                <img alt="loading" src={star_empty} className="md:w-4 w-3" />
                <img alt="loading" src={star_empty} className="md:w-4 w-3" />
            </div>
            <div className="flex xl:w-80 w-52 xl:h-36 h-24 aspect-auto z-20 object-contain potential-img justify-center items-center">
                <div className="flex flex-col gap-2">
                    {/* <span className="text text-[#C94A49] font-bold text-[22px] text-center">0 BNB</span> */}
                    {/* <span className="text text-white text-center">Your Potential Return</span> */}
                </div>
            </div>
            <div className="flex xl:flex-row flex-col gap-2 xl:mt-10 mt-0">
                <img alt="loading" src={star_empty} className="md:w-4 w-3" />
                <img alt="loading" src={star_empty} className="md:w-4 w-3" />
                <img alt="loading" src={star_empty} className="md:w-4 w-3" />
                <img alt="loading" src={star_empty} className="md:w-4 w-3" />
                <img alt="loading" src={star_empty} className="md:w-4 w-3" />
            </div>
        </div>
    )
}

export default Potential;