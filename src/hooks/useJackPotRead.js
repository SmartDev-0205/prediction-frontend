import { useContractRead } from "wagmi";
import { contractABI, contractAddress } from "../global";
import { useEffect, useState } from "react";
import { formatEther } from "viem";

const useJackPotRead = ({
    poolId = '0'
}) => {
    const [upBet, setUpBet] = useState({})
    const [downBet, setDownBet] = useState({})
    const { data, isSuccess } = useContractRead({
        address: contractAddress,
        abi: contractABI,
        functionName: 'getPoolInfo',
        args: [poolId],
        watch: true
    })

    useEffect(() => {
        if (isSuccess) {
            setUpBet(data?.upBet)
            setDownBet(data?.downBet)
        }
    }, [data])

    return {
        upBet,
        downBet,
        isSuccess
    }
}

export default useJackPotRead;