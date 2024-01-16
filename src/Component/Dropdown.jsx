import React, { useState } from "react";
import bnb_coin from "../assets/logo.png";
import bgImg from '../assets/bet_area.svg'

const Dropdown = ({coins,coin,setCoin}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative cursor-pointer">
      {show && (
        <div className="border border-[#C94A49] rounded-lg bg-black p-2 absolute w-full md:-top-80 -top-72 z-50">
          {coins?.map((item,index) => (
            <div 
              key={item}
              onClick={() => {
                setShow(false);
                setCoin(index);
              }}
              className="bg-gradient-to-r from-[#0C0000] via-[#1F1F1F] to-[#0C0C0C] rounded-xl border mt-1 border-slate-900 flex itmes-center justify-center gap-2 text-[#C94A49] md:text-3xl text-xl font-bold p-2 w-full text-center"
            >
              <img alt="loading"
                width="22"
                height="22"
                src={bnb_coin}
                className="4k:w-[44px] 4k:h-[44px] 8k:w-[88px] 8k:h-[88px] "
              />
              {item}
            </div>
          ))}
        </div>
      )}
      
      <div
        onClick={() => setShow((prev) => !prev)}
        className="bet_area flex justify-center items-center w-48 px-4 gap-2 h-24"
      >
        <img alt="loading" className="w-8" src={bnb_coin} />
        <p className="text-[#C94A49] text-4xl font-bold">{coin}</p>
      </div>
    </div>
  );
};

export default Dropdown;
