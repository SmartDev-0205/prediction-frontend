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
    const [btcList, setBtcList] = useState([])
    const [startPrice, setStartPrice] = useState('')
    const [endPrice, setEndPrice] = useState('')

    useEffect(() => {
        if (!initialized) {
            setInitialized(true)
            socket.on("CURRENT_TIME", function (data) {
                setStatus(data?.STATE)
                setPoolId(data?.poolId)
                setTimer(data?.secondsRemaining || 0)
                setBtcPrice(data.btcPrice)
                if (data.STATE === STATUS.POOL_CLOSE && data?.secondsRemaining == 0) {
                    setStartPrice(data?.startPrice);
                }
                if (data.STATE === STATUS.DISTRIBUTION_BEGIN && data?.secondsRemaining == 0) {
                    setEndPrice(data?.endPrice);
                    if (data?.endPrice > data?.startPrice) {
                        setWinnerSide(true);
                    } else {
                        setWinnerSide(false);
                    }
                }
                if (data.STATE === STATUS.DISTRIBUTION_BEGIN) {
                    setBtcList(prevBtcList => [...prevBtcList, data.btcPrice]);
                } else {
                    setBtcList([]);
                }

            })
        }
    }, [socket])

    useEffect(() => {
        // console.log("---------btcList---------", btcList);
    }, [btcList]);

    const store = {
        timer: timer,
        status: status,
        winnerSide: winnerSide,
        poolId: poolId,
        startPrice: startPrice,
        endPrice: endPrice,
        btcPrice: btcPrice,
        btcList: btcList,
        signedIn: [signedIn, setSignedIn],
        profile: [profile, setProfile],
        nickName: [nickName, setNickName],
        avatarUrl: [avatarUrl, setAvatarUrl]
    }

    return (
        <SocketContext.Provider value={store}>
            {children}
        </SocketContext.Provider>
    );
}
