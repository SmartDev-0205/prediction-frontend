import { erc20ABI, useContractRead } from "wagmi";
import { contractABI, contractAddress, tokenAddress } from "../global";
import { useEffect, useState } from "react";

const useJackPotRead = ({
    poolId = '0'
}) => {
    const [upBet, setUpBet] = useState({})
    const [downBet, setDownBet] = useState({})
    const [poolBalance, setPoolBalance] = useState({})

    const { data, isSuccess } = useContractRead({
        address: contractAddress,
        abi: contractABI,
        functionName: 'getPoolInfo',
        args: [poolId],
        watch: true
    })


    const  contractBalance = useContractRead({
        address: tokenAddress,
        abi: erc20ABI,
        functionName: 'balanceOf',
        args: [contractAddress],
        watch: true
    })

    useEffect(() => {
        if (contractBalance.isSuccess) {
            setPoolBalance(contractBalance.data)
        }
    }, [contractBalance])

    useEffect(() => {
        if (isSuccess) {
            console.log("------------data balance----------------", data);
            setUpBet(data?.upBet)
            setDownBet(data?.downBet)
        }
    }, [data])

    return {
        upBet,
        downBet,
        isSuccess,
        poolBalance
    }
}

export default useJackPotRead;