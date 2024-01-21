import { erc20ABI, useAccount, useBalance, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi"
import { parseEther, parseUnits, zeroAddress } from "viem"
import { contractABI, contractAddress } from "../global"
import toast from "react-hot-toast"
import { tokenAddress } from "../global"
import { useState } from "react"

const useBet = ({
    poolId = "0",
    amount = 0,
    side = 0,
}) => {
    const { isConnected, address } = useAccount()
    const balance = useBalance({
        address
    })

    const [isSpinLoading, setIsSpinLoading] = useState(false);

    const { config: approveConfig, error: approvePrepareError, isError: isApprovePrepareError } = usePrepareContractWrite({
        address: tokenAddress,
        abi: erc20ABI,
        functionName: 'approve',
        args: [contractAddress, parseUnits(amount, 18)],
        enabled: (isConnected),
    })

    const { data: approveData, error: approveError, isError: isApproveError, write: approveWrite, isLoading: isApproveWriteLoading } = useContractWrite(approveConfig)
    const { isLoading: isApproveLoading, isSuccess : isApproveSuccess} = useWaitForTransaction({
        hash: approveData?.hash,
        onSuccess(txData) {
            const writeBet = async () => {
                console.log(txData)
                write?.()
            }

            writeBet()
        },
        onError(error) {
            toast.error(`Error: ${(error)?.message}`)
            setIsSpinLoading(false)
        }
    });


    const { config, error: prepareError, isError: isPrepareError, refetch } = usePrepareContractWrite({
        address: contractAddress,
        abi: contractABI,
        functionName: "makeTokenBet",
        args: [poolId, side, tokenAddress, parseEther(String(amount)), "0x0000000000000000000000000000000000000000000000000000000000000000", 0, zeroAddress],
        enabled: isConnected && side > 0 && amount * 1 > 0 && poolId && poolId?.length > 60,
        value: 1000000000000000,
        onError(err) {
            console.log("🚀 ~ file: useBet.jsx:20 ~ onError ~ err:", err)
        }
    })
    const { data, write, isLoading: isWriteLoading } = useContractWrite(config)
    const { isLoading } = useWaitForTransaction({
        hash: data?.hash,
        onSuccess(txData) {
            console.log('hash', data?.hash)
            toast.success("Bet Success!")
            setIsSpinLoading(false)
        },
        onError(error) {
            console.log("🚀 ~ file: useBet.jsx:32 ~ onError ~ error:", error)
            toast.error("Bet failed!")
            setIsSpinLoading(false)
        }
    })

    const makeBet = () => {

        console.log("balance.data?.formatted", balance?.data);
        if (balance.isSuccess && balance.data?.formatted * 1 < 0.1 ) {
            toast.error('You have not enough funds.')
            return;
        }
        if (isApprovePrepareError) {
            console.log("🚀 ~ file: useBet.jsx:39 ~ makeBet ~ isPrepareError:", approvePrepareError?.message)
            toast.error("Approve failed!")
            return;
        }
        console.log(isConnected, address, side, amount * 1, poolId, poolId?.length > 60, approveWrite, isApprovePrepareError, isApproveError)
        approveWrite?.()
        setIsSpinLoading(true)
    }
    return {
        data,
        isPrepareError,
        prepareError,
        isWriteLoading,
        isApproveLoading,
        isLoading,
        isSpinLoading,
        refetch,
        makeBet
    }
}

export default useBet;