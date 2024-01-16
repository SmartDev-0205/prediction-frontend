import React, { useState } from "react";
import menu from "../assets/menu.svg";
import wallet from "../assets/wallet.svg";
import link from "../assets/link.svg";
import Copylink from "./Copylink";
import Modal from "./Modal";

const Menuicon = () => {
  const [show, setShow] = useState(false);
  const [clip, setClip] = useState(false);

  return (
    <div className="relative cursor-pointer">
      {show && (
        <div className="flex xl:flex-row flex-col items-end gap-5  absolute top-12 left-0 z-50">
          <img
            onClick={() => setClip((prev) => !prev)}
            src={wallet}
            alt="wallet"
          />
          <img
            onClick={() => console.log('')}
            src={link}
            alt="link"
          />
        </div>
      )}
      {clip && <Copylink />}
      {/* {modal && <Modal setShowModal={setShowModal} />} */}
      <div
        className="w-12"
        onClick={() => {
          setShow((prev) => !prev);
          setClip(false);
        }}
      >
        <img alt="menu" src={menu} className="cursor-pointer w-full" />
      </div>
    </div>
  );
};

export default Menuicon;
