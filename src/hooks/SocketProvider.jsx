import { createContext, useEffect, useState } from "react";
import { socket } from "../util/socket"
import { STATUS } from "../global";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
    const [timer, setTimer] = useState(0);
    const [signedIn, setSignedIn] = useState(false);
    const [initialized, setInitialized] = useState(false);
    const [status, setStatus] = useState(STATUS.POOL_OPEN)
    const [winnerSide, setWinnerSide] = useState(true)
    const [poolId, setPoolId] = useState("")
    const [btcPrice, setBtcPrice] = useState()
    const [profile, setProfile] = useState({})
    const [nickName, setNickName] = useState("")
    const [avatarUrl, setAvatarUrl] = useState('')

    useEffect(() => {
        if (!initialized) {
            setInitialized(true)
            socket.on("CURRENT_TIME", function (data) {
                // console.log(new Date(), data?.STATE, data?.poolId)
                setStatus(data?.STATE)
                setPoolId(data?.poolId)
                setTimer(data?.secondsRemaining || 0)
                setBtcPrice(data.btcPrice)
            })
        }
    }, [])
    useEffect(() => {
        // console.log("Status", status)
    }, [status])

    const store = {
        timer: timer,
        status: status,
        winnerSide: winnerSide,
        poolId: poolId,
        btcPrice: btcPrice,
        signedIn: [signedIn, setSignedIn],
        profile: [profile, setProfile],
        nickName:[nickName, setNickName],
        avatarUrl:[avatarUrl, setAvatarUrl]
    }

    return (
        <SocketContext.Provider value={store}>
            {children}
        </SocketContext.Provider>
    );
}
