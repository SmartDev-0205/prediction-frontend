import { useContractRead } from "wagmi";
import { contractABI, contractAddress } from "../global";
import { useEffect, useState } from "react";
import { formatEther } from "viem";

const useJackPotRead = ({
    poolId = '0'
}) => {
    const [startPrice, setStartPrice] = useState('');
    const [endPrice, setEndPrice] = useState('');
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
            console.log("-----------data-----------",data);
            setStartPrice(formatEther(data?.startPrice || '0'))
            setEndPrice(formatEther(data?.endPrice || '0'))
            setUpBet(data?.upBet)
            setDownBet(data?.downBet)
        }
    }, [data])

    return {
        startPrice,
        endPrice,
        upBet,
        downBet,
        isSuccess
    }
}

export default useJackPotRead;