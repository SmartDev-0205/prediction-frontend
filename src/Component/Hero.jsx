import React, { useContext, useState } from "react";
// import user from "../assets/user.svg";
import bet_minus from "../assets/bet_minus.svg";
import bet_plus from "../assets/bet_plus.svg";
import { LeftPool, RightPool } from "./Pools";
import Dropdown from "./Dropdown";
// import Menuicon from "./Menuicon";
import Slider from "./Slider";
// import { useAccount } from "wagmi";
import SideOpenPane from "./SideOpenPane";
import JackPot from "./JackPot";
import Timer from "./Timer";
import { STATUS } from "../global";
import { Toaster } from "react-hot-toast";
import Potential from "./Potential";
import SmallWinnerPane from "./SmallWinnerPane";
import Modal from "./Modal";
import SmallBet from "./SmallBet";
import { SocketContext } from "../hooks/SocketProvider";
import Graph from "./Graph";

const coins = ["10", " 20", "50", "100", "500"];

const Hero = () => {

  const [coin, setCoin] = useState(0);
  const {
    timer,
    status,
    winnerSide,
    poolId,
    btcPrice,
    signedIn: [signedIn],
  } = useContext(SocketContext)

  const handleIncrement = () => {
    if (coin < coins.length - 1) {
      setCoin(coin + 1);
    }
  };

  const handleDecrement = () => {
    if (coin > 0) {
      setCoin(coin - 1);
    }
  };

  return (
    <div className="body-container min-h-screen sm:flex justify-center items-center" >
      <div className="flex items-start gap-2 justify-items-center items-center p-2">
        <div className="w-[400px] 2xl:w-[520px]">
          <div className="xl:flex col-span-2 hidden items-start">
            <div className="flex flex-col items-start">
              <div className="flex items-start gap-2">
                <LeftPool />
                <div className="flex lg:flex-row flex-col items-center gap-2">
                  {/* <Menuicon /> */}
                  {/* <img alt="loading" src={volume_toggle} className="cursor-pointer md:w-10 w-10" /> */}
                </div>
              </div>
              <SideOpenPane isRight={false} status={status} winnerSide={winnerSide} poolId={poolId} amount={coins[coin]} />
            </div>
          </div>
        </div>

        <div className="flex-auto">
          <div className="flex col-span-3 flex-col items-center">
            {/* {status === STATUS.POOL_OPEN && <JackPot />} */}
            <Timer status={status} timer={timer} isLogo={true} isTimer={false} />

            {status !== STATUS.POOL_OPEN &&
              <div className={`w-full flex flex-col items-center xl:-mt-16 mt-4`}>
                <div className="bg_graphic overflow-hidden w-[400px] xl:w-[700px] 2xl:w-[750px] aspect-video px-3 pt-8 pb-6">
                  <div className="flex flex-col items-center h-full justify-center">
                    {status === STATUS.POOL_CLOSE ?
                      <div className="w-[400px] flex flex-col gap-y-[20px] items-center">
                        <span className="text-[#79fbcb] text-5xl mybold text-center">NO MORE</span>
                        <span className="text-[#79fbcb] text-5xl mybold text-center">PLAYS</span>
                      </div>
                      :
                      <Graph poolId={poolId} btcPrice={btcPrice} />
                    }
                  </div>
                </div>
                <div className="xl:block hidden">
                  <Potential />
                </div>
              </div>}

            <div className={`xl:hidden block pt-5 ${status !== STATUS.POOL_OPEN ? 'w-full' : ''} `}>
              <div className={`flex flex-col items-center ${status !== STATUS.POOL_OPEN ? 'w-full' : 'w-[350px]'} `} >
                <div className="flex flex-row w-full justify-between">
                  {status !== STATUS.DISTRIBUTION_END ? <LeftPool /> : <SmallWinnerPane isRight={false} winnerSide={winnerSide} />}
                  {status !== STATUS.POOL_OPEN && <Timer status={status} timer={timer} isLogo={false} isTimer={true} />}
                  {status !== STATUS.DISTRIBUTION_END ? <RightPool /> : <SmallWinnerPane isRight={true} winnerSide={winnerSide} />}
                </div>
                {status === STATUS.POOL_OPEN &&
                  <div className="flex flex-row w-full justify-between mt-[10px]">
                    <SmallBet poolId={poolId} amount={coins[coin]} isRight={false} />
                    <SmallBet poolId={poolId} amount={coins[coin]} isRight={true} />
                  </div>
                }
              </div>
            </div>

            {status === STATUS.POOL_OPEN &&
              <div className="cursor-pointer flex items-center justify-center gap-2 pt-5">
                <img alt="loading"
                  onClick={handleDecrement}
                  src={bet_minus}
                  className="md:w-20 w-10"
                />
                <Dropdown coin={coins[coin]} setCoin={setCoin} coins={coins} />
                <img alt="loading"
                  onClick={handleIncrement}
                  src={bet_plus}
                  className="md:w-20 w-10"
                />
              </div>}

            {status === STATUS.POOL_OPEN && <Slider />}

            {status !== STATUS.POOL_OPEN &&
              <div className="mt-[110px] xl:hidden block ">
                <Potential />
              </div>
            }

          </div>
        </div>

        <div className="w-[400px] 2xl:w-[520px]">
          <div className="xl:flex col-span-2 hidden  items-start">
            <div className="flex flex-col items-end w-full">
              <div className="flex items-start gap-2">
                <RightPool />
              </div>
              <SideOpenPane isRight={true} status={status} winnerSide={winnerSide} poolId={poolId} amount={coins[coin]} />
            </div>
          </div>
        </div>
        {(!signedIn) && <Modal />}
        <Toaster position="bottom-center" />
      </div>
    </div>

  );
};

export default Hero;
