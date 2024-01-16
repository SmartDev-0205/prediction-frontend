import useBet from "../hooks/useBet";
import ReactLoading from 'react-loading';
import button_up from "../assets/button_up.svg";
import button_down from "../assets/button_down.svg";
import { useEffect } from "react";

const SmallBet = ({
    poolId = '',
    amount = '0',
    isRight = true
}) => {
    const { makeBet, isLoading, isWriteLoading, refetch } = useBet({ poolId, amount, side: isRight ? 2 : 1 })
    useEffect(() => {
        refetch?.()
    }, [])
    return (
        <>
            {(isLoading || isWriteLoading) && <div className="w-screen h-screen fixed top-0 left-0 bg-black opacity-50 z-40 flex justify-center items-center">
                <ReactLoading type={"spinningBubbles"} height={100} width={100} />
            </div>}
            <img alt="loading" src={isRight ? button_down : button_up} onClick={makeBet} className="w-40" />
        </>
    )
}

export default SmallBet;