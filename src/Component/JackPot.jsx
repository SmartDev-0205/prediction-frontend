
import busd from "../assets/logo.png";
import top_10_jackpot from "../assets/top_10_jackpot.svg";
import star_empty from "../assets/star_empty.svg";

const JackPot = () => {
    return (
        <div className="relative flex flex-col items-center justify-center jackpot aspect-video w-[240px] xl:w-[312px] 2xl:w-[466px]">
            {/* <div className="relative flex flex-col items-center justify-center jackpot md:w-64 w-40 md:h-40 h-28 p-2"> */}
            <div className="flex items-center gap-[10px] mt-[30px]">
                <img alt="loading" src={busd} className="w-[30px]" />
                <h1 className="flex-1 text-[#C94A49] text-4xl xl:text-5xl 2xl:text-6xl font-bold">
                    5.8804
                </h1>
            </div>
            <div className="absolute right-[10px] 2xl:right-[20px] w-[30px] 2xl:w-[46px]">
                <img alt="loading"
                    src={top_10_jackpot}
                    className="w-full"
                />
            </div>
            <div className="flex items-center gap-2">
                <img alt="loading" src={star_empty} className="xl:w-4 w-3" />
                <img alt="loading" src={star_empty} className="xl:w-4 w-3" />
                <img alt="loading" src={star_empty} className="xl:w-4 w-3" />
                <img alt="loading" src={star_empty} className="xl:w-4 w-3" />
                <img alt="loading" src={star_empty} className="xl:w-4 w-3" />
                <img alt="loading" src={star_empty} className="xl:w-4 w-3" />
                <img alt="loading" src={star_empty} className="xl:w-4 w-3" />
                <img alt="loading" src={star_empty} className="xl:w-4 w-3" />
                <img alt="loading" src={star_empty} className="xl:w-4 w-3" />
                <img alt="loading" src={star_empty} className="xl:w-4 w-3" />
            </div>
        </div>
    )
}

export default JackPot