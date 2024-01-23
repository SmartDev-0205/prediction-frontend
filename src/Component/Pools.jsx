import { useContext } from "react";
import detail_up from "../assets/detail_up.svg";
import bnb from "../assets/logo.png";
import detail_down from "../assets/detail_down.svg";
import belt from "../assets/belt.svg";
import useJackPotRead from "../hooks/useJackPotRead";
import { SocketContext } from "../hooks/SocketProvider";
import { formatEther } from "viem";


export const LeftPool = () => {
  const {
    poolId,
  } = useContext(SocketContext)
  const { poolBalance } = useJackPotRead({ poolId })
  return (
    <div>
      <div className="hidden xl:block">
        <div className="flex flex-col relative ">
          <div className=" flex h-full w-full text-white absolute z-[10]  flex-col xl:flex-row items-center justify-evenly  ">
            <div className="flex gap-4 items-center">
              <p
                className="textDetail md:text-md text-[15px] md:text-[20px]"
                style={{
                  color: "rgb(121, 251, 203)",
                  fontFamily: "Chakra Petch",
                }}
              >
                ▲ Pool Treasury{" "}
              </p>
              <div className="flex flex-row gap-x-2 items-center pb-3 xl:p-0">
                <img alt="loading"

                  width="22"
                  height="22"
                  src={bnb}
                  className="4k:w-[44px] 4k:h-[44px] 8k:w-[88px] 8k:h-[88px]"
                />
                <p className="textCoinDetail" style={{ color: "rgb(121, 251, 203)" }}>
                  {formatEther(poolBalance)}
                </p>
              </div>
            </div>
          </div>
          <div className="hidden 8k:flex ">
            <img alt="loading"

              width="1614"
              height="611"
              src={detail_up}
              className="pb-8 "
            />
          </div>
          <div className="hidden 4k:flex 8k:hidden">
            <img alt="loading" width="807" height="305" src={detail_up} className="pb-2" />
          </div>
          <div className="hidden 2xl:flex 4k:hidden">
            <img alt="loading"

              width="342"
              height="150"
              src={detail_up}
              className="pb-2 full:w-[392px] full:h-[145px]"
            />
          </div>
          <div className="hidden xl:flex 2xl:hidden">
            <img alt="loading"

              width="261"
              height="93"
              src={detail_up}
              className="pb-2 full:h-[145px] object-cover"
            />
          </div>
          <div className="flex xl:hidden w-full h-[130px]">
            <div className="h-full w-full relative">
              <img alt="loading" className="w-full h-full" src={detail_up} />
            </div>
          </div>
          <div className="hidden xl:flex flex-col">
            <div className="absolute right-0 bottom-0 ">
              <div className="4k:hidden">
                <img alt="loading"

                  width="32"
                  height="32"
                  src={belt}
                  className="aspect-square mb-2 2xl:w-[40px] full:w-[40px] undefined"
                />
              </div>
              <div className="hidden 4k:flex 8k:hidden">
                <img alt="loading"

                  width="100"
                  height="100"
                  src={belt}
                  className="mb-2 undefined"
                />
              </div>
              <div className="hidden 8k:flex">
                <img alt="loading"

                  width="220"
                  height="220"
                  src={belt}
                  className="mb-2 undefined"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block xl:hidden">
        <div className="flex flex-col relative">
          <div className=" flex h-full w-full text-white absolute z-[10] flex-col xl:flex-row p-[10px] justify-evenly  ">
            <div className="flex justify-center items-center gap-4">
              <p
                className="textDetail md:text-md text-[15px]"
                style={{
                  color: "rgb(121, 251, 203)",

                }}
              >
                ▲ Pool Treasury{" "}
              </p>
              <div className="flex flex-row gap-x-2 justify-center items-center">
                <img alt="loading"

                  width="22"
                  height="22"
                  src={bnb}
                  className="4k:w-[44px] 4k:h-[44px] 8k:w-[88px] 8k:h-[88px]"
                />
                <p className="textCoinDetail" style={{ color: "rgb(121, 251, 203)" }}>
                  {formatEther(poolBalance)}
                </p>
              </div>
            </div>
          </div>
          <div className="hidden 8k:flex ">
            <img alt="loading"

              width="1614"
              height="611"
              src={detail_up}
              className="pb-8 "
            />
          </div>
          <div className="hidden 4k:flex 8k:hidden">
            <img alt="loading" width="807" height="305" src={detail_up} className="pb-2" />
          </div>
          <div className="hidden 2xl:flex 4k:hidden">
            <img alt="loading"

              width="342"
              height="150"
              src={detail_up}
              className="pb-2 full:w-[392px] full:h-[145px]"
            />
          </div>
          <div className="hidden xl:flex 2xl:hidden">
            <img alt="loading"

              width="261"
              height="93"
              src={detail_up}
              className="pb-2 full:h-[145px] object-cover"
            />
          </div>
          <div className="flex xl:hidden w-full h-[130px]">
            <div className="h-full w-full relative">
              <img alt="loading" className="w-full h-full" src={detail_up} />
            </div>
          </div>
          <div className="hidden xl:flex flex-col">
            <div className="absolute right-0 bottom-0 ">
              <div className="4k:hidden">
                <img alt="loading"

                  width="32"
                  height="32"
                  src={belt}
                  className="aspect-square mb-2 2xl:w-[40px] full:w-[40px] undefined"
                />
              </div>
              <div className="hidden 4k:flex 8k:hidden">
                <img alt="loading"

                  width="100"
                  height="100"
                  src={belt}
                  className="mb-2 undefined"
                />
              </div>
              <div className="hidden 8k:flex">
                <img alt="loading"

                  width="220"
                  height="220"
                  src={belt}
                  className="mb-2 undefined"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const RightPool = () => {
  const {
    poolId,
  } = useContext(SocketContext)
  const { poolBalance } = useJackPotRead({ poolId })
  return (
    <div>
      <div className="hidden xl:block">
        <div className="flex flex-col relative ">
          <div className=" flex h-full w-full text-white absolute z-[10] flex-col xl:flex-row items-center justify-evenly ">
            <div className="flex gap-4">
              <p
                className="textDetail md:text-md text-[15px] md:text-[20px]"
                style={{
                  color: "rgb(121, 251, 203)",
                  fontFamily: "Chakra Petch",
                }}
              >
                ▲ Pool Treasury{" "}
              </p>
              <div className="flex flex-row gap-x-2 items-center pb-3 xl:p-0">
                <img alt="loading"

                  width="22"
                  height="22"
                  src={bnb}
                  className="4k:w-[44px] 4k:h-[44px] 8k:w-[88px] 8k:h-[88px]"
                />
                <p className="textCoinDetail" style={{ color: "rgb(121, 251, 203)" }}>
                  {formatEther(poolBalance)}
                </p>
              </div>
            </div>
          </div>
          <div className="hidden 8k:flex ">
            <img alt="loading"

              width="1614"
              height="611"
              src={detail_down}
              className="pb-8 "
            />
          </div>
          <div className="hidden 4k:flex 8k:hidden">
            <img alt="loading" width="807" height="305" src={detail_down} className="pb-2" />
          </div>
          <div className="hidden 2xl:flex 4k:hidden">
            <img alt="loading"
              width="342"
              height="150"
              src={detail_down}
              className="pb-2 full:w-[392px] full:h-[145px]"
            />
          </div>
          <div className="hidden xl:flex 2xl:hidden">
            <img alt="loading"
              width="261"
              height="93"
              src={detail_down}
              className="pb-2 full:h-[145px] object-cover"
            />
          </div>
          <div className="flex xl:hidden w-full h-[130px]">
            <div className="h-full w-full relative">
              <img alt="loading" className="w-full h-full" src={detail_down} />
            </div>
          </div>
          <div className="hidden xl:flex flex-col">
            <div className="absolute left-0 bottom-0 ">
              <div className="4k:hidden">
                <img alt="loading"

                  width="32"
                  height="32"
                  src={belt}
                  className="aspect-square mb-2 2xl:w-[40px] full:w-[40px] undefined"
                />
              </div>
              <div className="hidden 4k:flex 8k:hidden">
                <img alt="loading"

                  width="100"
                  height="100"
                  src={belt}
                  className="mb-2 undefined"
                />
              </div>
              <div className="hidden 8k:flex">
                <img alt="loading"

                  width="220"
                  height="220"
                  src={belt}
                  className="mb-2 undefined"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block xl:hidden">
        <div className="flex flex-col relative w-[100px]">
          <div className=" flex h-full w-full text-white absolute z-[10] flex-col xl:flex-row p-[10px] justify-evenly ">
            <div className="flex flex-col">
              <p
                className="textDetail md:text-md text-[10px] md:text-[12px]"
                style={{
                  color: "rgb(232, 54, 152)",
                }}
              >
                ▲ Pool Treasury{" "}
              </p>
              <div className="flex flex-row justify-center  gap-x-2 items-center pb-3 xl:p-0">
                <img alt="loading"

                  width="22"
                  height="22"
                  src={bnb}
                  className="4k:w-[44px] 4k:h-[44px] 8k:w-[88px] 8k:h-[88px]"
                />
                <p className="textCoinDetail" style={{ color: "rgb(232, 54, 152)" }}>
                  {formatEther(poolBalance)}
                </p>
              </div>
            </div>
          </div>
          <div className="hidden 8k:flex ">
            <img alt="loading"

              width="1614"
              height="611"
              src={detail_down}
              className="pb-8 "
            />
          </div>
          <div className="hidden 4k:flex 8k:hidden">
            <img alt="loading" width="807" height="305" src={detail_down} className="pb-2" />
          </div>
          <div className="hidden 2xl:flex 4k:hidden">
            <img alt="loading"
              width="342"
              height="150"
              src={detail_down}
              className="pb-2 full:w-[392px] full:h-[145px]"
            />
          </div>
          <div className="hidden xl:flex 2xl:hidden">
            <img alt="loading"
              width="261"
              height="93"
              src={detail_down}
              className="pb-2 full:h-[145px] object-cover"
            />
          </div>
          <div className="flex xl:hidden w-full h-[130px]">
            <div className="h-full w-full relative">
              <img alt="loading" className="w-full h-full" src={detail_down} />
            </div>
          </div>
          <div className="hidden xl:flex flex-col">
            <div className="absolute left-0 bottom-0 ">
              <div className="4k:hidden">
                <img alt="loading"

                  width="32"
                  height="32"
                  src={belt}
                  className="aspect-square mb-2 2xl:w-[40px] full:w-[40px] undefined"
                />
              </div>
              <div className="hidden 4k:flex 8k:hidden">
                <img alt="loading"

                  width="100"
                  height="100"
                  src={belt}
                  className="mb-2 undefined"
                />
              </div>
              <div className="hidden 8k:flex">
                <img alt="loading"

                  width="220"
                  height="220"
                  src={belt}
                  className="mb-2 undefined"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
