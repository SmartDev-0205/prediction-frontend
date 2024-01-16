import React, { useContext, useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { BiSolidDownArrow } from "react-icons/bi";
import { RiLogoutBoxLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { updateProfile, upload } from "../util/customQuery";
import toast, { Toaster } from "react-hot-toast";
import { useAccount } from "wagmi";
import { SocketContext } from "../hooks/SocketProvider";
import { useSignMessage } from "wagmi";

const Myaccount = () => {
  const [msg, setMsg] = useState("Please sign in profile update.");

  const {
    profile: [profile, setProfile],
    nickName:[nickName, setNickName],
        avatarUrl:[avatarUrl, setAvatarUrl]
  } = useContext(SocketContext)

  const {address, isConnected} = useAccount()
  const tabs = [
    {
      name: "My Transaction",
      active: true,
    },
    {
      name: "My Earnings",
      active: false,
    },
    {
      name: "My Referrals",
      active: false,
    },
    {
      name: "Jackpot",
      active: false,
    },
  ];
  const uploadImg = async (evt) => {
    let formData = new FormData();
    formData.append('file', evt.target.files[0]);
    const res = await upload(formData);
    if (res && res.data && res.data.imgUrl) {
      const url = res.data.imgUrl;
      console.log("asdfasdf",url)
      setAvatarUrl(url);
      toast('Upload Success')
    } else {
      toast('Upload Fail!')
    }
  }
  useEffect(() => {
    document.querySelector("#avatar").addEventListener('change', uploadImg, false);
  }, [])

  const { data: signMessageData, signMessage, variables } = useSignMessage({ message: msg })

  useEffect(() => {
    (async () => {
      if (variables?.message && signMessageData) {

          const res = await updateProfile({
            address: address,
            signature: signMessageData,
            msg: msg,
            nickName: nickName,
            avatar: avatarUrl
          })

          if(res.status == 200 && res.data?.success == true){
            setProfile(res.data?.user)
            setNickName(res.data?.user?.nickName)
            setAvatarUrl(res.data?.user?.avatar)
          }
      }
    })()
  }, [signMessageData, variables?.message])

  const handleSaveChanges = async () => {
    signMessage()
  }
  return (
    <div className="md:p-5 p-2">
      <div className="border-4 rounded-lg border-[#C94A49] grid md:grid-cols-5 grid-cols-1">
        <div className="md:border-r-4 border-[#C94A49] p-3">
          <NavLink to="/">
            <FaHome className="text-[#C94A49] text-4xl" />
          </NavLink>
          <div className="flex flex-col gap-6 items-center">
            <div className="flex w-32 h-32 border-[#C94A49] overflow-hidden items-center justify-center rounded-full border-4 ">
              {avatarUrl != '' && <img src={`${avatarUrl}`} alt="avatar" />}
            </div>
            <div onClick={() => { document.querySelector("#avatar").click() }} className="cursor-pointer bg-gradient-to-r from-[#0C0000] via-[#1F1F1F] to-[#0C0C0C] rounded-xl border border-slate-900 text-white text-2xl p-2 w-full text-center">
              <input type="file" id="avatar" className="hidden" />
              Edit Photo
            </div>
            <div className="w-full">
              <label className="text-[#C94A49]">Nick Name</label>
              <br />
              <input className="bg-[#2F2F2F] text-white border-gray-600 border rounded-lg p-3 w-full" value={nickName} onChange={e => setNickName(e.target.value)} />
            </div>
            <div className="w-full">
              <label className="text-[#C94A49]">Referral Link</label>
              <br />
              <input className="bg-[#2F2F2F] text-white border-gray-600 border rounded-lg p-3 w-full" readOnly value={window.location.origin + "/referral"+ address} />
            </div>
            <div className="w-full">
              <label className="text-[#C94A49]">Wallet Address</label>
              <br />
              <input className="bg-[#2F2F2F] text-white border-gray-600 border rounded-lg p-3 w-full" readOnly value={address || ""} />
            </div>
            <div onClick={handleSaveChanges} className="cursor-pointer bg-gradient-to-r from-[#0C0000] via-[#1F1F1F] to-[#0C0C0C] rounded-xl border border-slate-900 mt-5 rounded-xl text-[#C94A49] text-lg p-3 w-full text-center">
              Save Changes
            </div>
          </div>
        </div>
        <div className="col-span-4 md:p-5 p-2 bg-black ">
          <div className=" gap-5 grid md:grid-cols-7 grid-cols-2 items-start justify-items-start border-b border-gray-800 pb-3">
            <div className="bg-gradient-to-r from-[#0C0000] via-[#1F1F1F] to-[#0C0C0C] md:col-span-2 rounded-xl border border-slate-900 p-5 md:w-80 text-center">
              <span className="text-[#C94A49] text-4xl font-bold">0 BNB</span>{" "}
              <br />
              <span className="text-white text-sm">Earning</span>
            </div>
            <div className="bg-gradient-to-r from-[#0C0000] via-[#1F1F1F] to-[#0C0C0C] md:col-span-2 rounded-xl border border-slate-900 p-5 md:w-80 text-center">
              <span className="text-[#C94A49] text-4xl font-bold">0 BNB</span>{" "}
              <br />
              <span className="text-white text-sm">Commision</span>
            </div>
            <div>
              <span className="text-[#C94A49] text-lg font-semibold">
                Last Session
              </span>{" "}
              <br />
              <span className="text-xl font-semibold text-white">
                Dec 18, 2023
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#C94A49] text-3xl font-bold">Eng</span>{" "}
              <BiSolidDownArrow className="text-[#C94A49] text-3xl font-bold" />
            </div>
            <div className="cursor-pointer bg-gradient-to-r from-[#270100] via-[#1F1F1F] to-[#270100] rounded-xl border border-slate-900 p-3 text-3xl text-[#C94A49]">
              <RiLogoutBoxLine />
            </div>
          </div>
          <div className="flex itmes-center py-5 justify-between">
            {tabs?.map((item, index) => (
              <div
                className={`${item?.active ? "text-[#C94A49] md:border-b-4 border-b-2 border-[#C94A49]" : "text-white"
                  } md:text-lg text-xs  md:font-bold pb-2`}
                key={index.name}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Toaster position="bottom-center" />
    </div>
  );
};

export default Myaccount;
