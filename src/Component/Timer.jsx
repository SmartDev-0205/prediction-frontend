
import { NavLink } from "react-router-dom";
import _402 from "../assets/2_402.png";
import timerd from "../assets/timer.svg";
import { STATUS } from "../global";
import Menuicon from "./Menuicon";
const Timer = ({
    timer = 43,
    status = STATUS.POOL_OPEN,
    isLogo = true,
    isTimer = true
}) => {
    return (
        <div className={`${status === STATUS.POOL_OPEN ? "mt-[0px] xl:-mt-[30px] 2xl:-mt-[50px]" : 'mt-0'} z-10`}>
            <div className={`w-full ${((isLogo && status !== STATUS.POOL_OPEN) || status === STATUS.POOL_OPEN) ? 'flex' : 'hidden xl:flex'} gap-2 justify-center`}>
                <div className={`xl:hidden flex ${status === STATUS.POOL_OPEN ? '-mt-32' : ''}`}>
                    <Menuicon />
                </div>
                <div className="w-[240px] h-auto md:w-[300px] z-20">
                    <img alt="loading" src={_402} className="w-full" />
                </div>
            </div>
            <div className={`relative ${((isTimer && status !== STATUS.POOL_OPEN) || status === STATUS.POOL_OPEN) ? 'flex' : 'hidden xl:flex'} items-center justify-center`}>
                <img alt="loading" src={timerd} className={`${isTimer && status !== STATUS.POOL_OPEN ? 'w-40 -mt-4' : 'lg:w-64 w-48 lg:-mt-24 -mt-14 -z-10'}`} />
                <div className="flex flex-col items-center absolute top-[5px] ">
                    <span className="text-[#C94A49] text-7xl xl:text-8xl font-bold">
                        {timer}
                    </span>
                    <span className="text-white text-xl xl:text-2xl font-semibold">sec</span>
                </div>
                <br />
            </div>
        </div>
    )
}

export default Timer