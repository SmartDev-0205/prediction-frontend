import React, { useState } from "react";
import copy from "../assets/copy.svg";
import toast, { Toaster } from "react-hot-toast";

const Copylink = () => {
  const [text, setText] = useState("");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success("Referral URL Copied!");
    });
  };

  return (
    <div className="border border-[#C94A49] rounded-md flex items-end gap-5 h-20 md:w-[30rem] w-80 bg-[#1C1C1C] p-3 absolute top-28 left-0 z-50">
      <div className="w-full">
        <label className="text-white pb-2">Referral Link</label>
        <input
          placeholder="...."
          onChange={(e) => setText(e.target.value)}
          className="bg-[#2F2F2F] text-white border-gray-600 border rounded-lg p-2 w-full"
        />
      </div>
      <Toaster position="bottom-center" />
      <img
        alt="loading"
        onClick={() => copyToClipboard(text)}
        src={copy}
        className="w-10"
      />
    </div>
  );
};

export default Copylink;
