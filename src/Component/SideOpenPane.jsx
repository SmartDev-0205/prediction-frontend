
import leftdiv from "../assets/user_bet_area_up.svg";
import rightdiv from "../assets/user_bet_area_down.svg";
import button_up from "../assets/button_up.svg";
import button_down from "../assets/button_down.svg";
import users_play_area_down from "../assets/users_play_area_down.svg";
import users_play_area_up from "../assets/users_play_area_up.svg";
import winners from "../assets/winners.svg";
import not_winners from "../assets/not_winners.svg";
import { STATUS } from "../global";
import ReactLoading from 'react-loading';
import useBet from "../hooks/useBet";
import { useEffect } from "react";
import useJackPotRead from "../hooks/useJackPotRead";
import { formatEther, parseEther } from "viem";
const SideOpenPane = ({
    isRight = true,
    status = STATUS.POOL_OPEN,
    winnerSide = true,
    poolId = '',
    amount = '0'
}) => {

    const { makeBet, isLoading, isWriteLoading, refetch } = useBet({ poolId, amount, side: isRight ? 2 : 1 })
    const { upBet, downBet } = useJackPotRead({ poolId })
    useEffect(() => {
        console.log("betting----------", upBet, downBet)
    }, [upBet, downBet])
    useEffect(() => {
        refetch?.()
    }, [])
    return (
        <div className={`flex flex-col ${isRight ? 'items-end' : 'items-start'}`}>
            {(isLoading || isWriteLoading) && <div className="w-screen h-screen fixed top-0 left-0 bg-black opacity-50 z-40 flex justify-center items-center">
                <ReactLoading type={"spinningBubbles"} height={100} width={100} />
            </div>}
            {status === STATUS.POOL_OPEN ?
                <div className={`flex flex-col ${isRight ? 'items-end' : 'items-start'}`}>
                    <div className="flex flex-wrap relative">
                        <img alt="loading" src={isRight ? rightdiv : leftdiv} className="w-[270px] 2xl:w-[320px]" />
                        <div className={`absolute w-full h-full flex flex-wrap flex-col gap-2 pt-4 ${isRight ? 'pr-4 pl-20' : 'pl-4 pr-16'} pb-16`}>
                            {isRight ? downBet?.bets?.map((item) =>
                                <div className="flex items-center justify-center w-[45px] h-[35px] w-full text-white border border-[#5757b1]">{formatEther(item)}</div>
                            )
                                : upBet?.bets?.map((item) =>
                                    <div className="flex items-center justify-center w-[45px] h-[35px] w-full text-white border border-[#5757b1]">{formatEther(item)}</div>
                                )}
                        </div>
                    </div>
                    <img alt="loading" src={isRight ? button_down : button_up} className="md:w-[30rem] w-auto -mt-4 cursor-pointer"
                        onClick={makeBet}
                    />
                </div>

                :
                <div className={`flex flex-col relative ${isRight ? 'items-end' : 'items-start'}`}>
                    <img alt="loading" className="lg:block hidden" src={isRight ? users_play_area_down : users_play_area_up} />
                    <div className={`absolute ${isRight ? 'right-1/4' : 'left-1/4'} mt-24`}>
                        {status === STATUS.DISTRIBUTION_END && <>
                            {(winnerSide && isRight) || (!winnerSide && !isRight) ?
                                <img alt="ico" className="" src={winners} />
                                :
                                <img alt="ico" className="" src={not_winners} />
                            }
                        </>}
                    </div>
                </div>
            }

        </div>
    )
}

export default SideOpenPane