import useJackPotRead from "../hooks/useJackPotRead";

const Graph = ({
    poolId,
    btcPrice
}) => {
    const {startPrice, endPrice} = useJackPotRead({poolId})
    return (
        <div className="w-full flex flex-col gap-y-[20px] items-center">
            <div className="flex flex-row justify-between w-full">
                <div className="text-[#79fbcb] text-2xl mybold text-center">StartPrice</div>
                <div className="text-[#79fbcb] text-2xl mybold text-center">Current</div>
                <div className="text-[#79fbcb] text-2xl mybold text-center">EndPrice</div>
            </div>
            <div className="flex flex-row justify-between w-full">
                <div className="text-[#79fbcb] text-2xl mybold text-center">{startPrice}</div>
                <div className="text-[#79fbcb] text-2xl mybold text-center">{btcPrice}</div>
                <div className="text-[#79fbcb] text-2xl mybold text-center">{btcPrice}</div>
            </div>
        </div>
    )
}

export default Graph;