import React, { useContext, useEffect, useState } from "react";
import modalimg from "../assets/metamask.svg";
import connectWallet from "../assets/connectWallet.svg";
import { useAccount, useConnect, useNetwork, useSignMessage } from 'wagmi'
import { polygon } from "viem/chains";
import { recoverMessageAddress } from "viem";
import { SocketContext } from "../hooks/SocketProvider";
import { signIn } from "../util/customQuery";
import toast from "react-hot-toast";
import { useWeb3Modal } from '@web3modal/wagmi/react'

const Modal = () => {
  const [msg, setMsg] = useState("Please sign in");
  const { connector: activeConnector, isConnected, address } = useAccount()
  const { data: signMessageData, signMessage, variables } = useSignMessage({ message: msg })
  const { chain } = useNetwork()
  const { open } = useWeb3Modal()
  const {
    profile: [profile, setProfile],
    signedIn: [signedIn, setSignedIn],
    nickName: [nickName, setNickName],
    avatarUrl: [avatarUrl, setAvatarUrl]
  } = useContext(SocketContext)
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect({
      chainId: polygon.id,
    })

  useEffect(() => {
    if (isConnected) {
      console.log("sign msg", signMessage)

      signMessage()
      setSignedIn(true)
    }
  }, [isConnected])

  useEffect(() => {
    (async () => {
      if (variables?.message && signMessageData) {

        setSignedIn(true)
        const res = await signIn({
          address: address,
          signature: signMessageData,
          msg: msg
        })

        if (res?.status == 200 && res?.data?.success == true) {
          setProfile(res.data?.user)
          setNickName(res.data?.user?.nickName)
          setAvatarUrl(res.data?.user?.avatar)
        }
      }
    })()
  }, [signMessageData, variables?.message])

  const handleConnect = () => {
    if(!isConnected) {
      open()
    } else {

    }
    // let cons = connectors.filter(con => con.name === "MetaMask" || con.name === "WalletConnect")
    // if (cons && cons.length > 0)
    //   connect({ connector: cons[0] })
    // else
    //   toast.error("Please install MetaMask wallet")
  }

  const [showMenu1, setShowMenu1] = useState(false);
  const [showMenu2, setShowMenu2] = useState(false);
  return (
    <div className="transition-10 duration-50 justify-center items-center flex fixed lg:-top-40 z-50  inset-0  outline-0 ">
      <div className="bg-gradient-to-r from-[#0C0000] via-[#1F1F1F] to-[#0C0C0C] md:w-[35rem] rounded-xl flex items-center justify-center flex-col border border-slate-900 px-5 py-10">
        <img alt="loading" src={modalimg} className="w-80" />
        <div className="p-5 flex items-center justify-center flex-col">
          <div className="flex w-full ">
            {/* <div className="w-1/2 mr-1">
              <div className="custom-selector">
                <div
                  onClick={() => setShowMenu1((prev) => !prev)}
                  className="selector-header open"
                >
                  BSC<span className="arrow ">▲</span>
                </div>
                {showMenu1 && (
                  <ul className="options ">
                    <li>BSC</li>
                  </ul>
                )}
              </div>
            </div> */}
            {/* <div className="w-1/2 ml-1">
              <div className="custom-selector">
                <div
                  onClick={() => setShowMenu2((prev) => !prev)}
                  className="selector-header open"
                >
                  BNB<span className="arrow ">▲</span>
                </div>
                {showMenu2 && (
                  <ul className="options ">
                    <li>BNB</li>
                    <li>BUSD</li>
                  </ul>
                )}
              </div>
            </div> */}
          </div>
          <img alt="loading" onClick={handleConnect} src={connectWallet} className="w-80 mt-5" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
