import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Img, Text } from "components";
import FrameFifteenColumnTwo from "components/FrameFifteenColumnTwo";
import FrameFifteenColumnplusmath from "components/FrameFifteenColumnplusmath";
import Sidebar1 from "components/Sidebar1";

const FrameFifteenPage = () => {
  const sideBarMenu = [
    {
      label: <Img className="h-10 w-11" src="images/img_home.svg" alt="home" />,
    },
    {
      label: <Img className="h-10 w-11" src="images/img_lock.svg" alt="lock" />,
    },
    {
      label: (
        <Img className="h-10 w-11" src="images/img_reply.svg" alt="reply" />
      ),
    },
  ];
  const sideBarMenu1 = [
    {
      label: (
        <Img
          className="h-10 w-11"
          src="images/img_television.svg"
          alt="television"
        />
      ),
    },
    {
      label: <Img className="h-10 w-11" src="images/img_link.svg" alt="link" />,
    },
    {
      label: (
        <Img
          className="h-10 text-gray-600 w-11"
          src="images/img_close.svg"
          alt="close"
        />
      ),
    },
  ];

  return (
    <>
      <div className="bg-gray-100 font-poppins h-[940px] mx-auto pb-2 relative w-full">
        <FrameFifteenColumnTwo className="absolute bottom-[1%] flex flex-col gap-[9px] items-center justify-start px-2.5 md:px-5 right-[0] w-[17%]" />
        <div className="absolute flex flex-col inset-[0] justify-center m-auto md:px-5 w-full">
          <FrameFifteenColumnplusmath
            className="bg-cover bg-no-repeat flex flex-col h-[66px] items-end justify-end mx-auto p-5 w-full"
            style={{ backgroundImage: "url('images/img_frame19.svg')" }}
          />
          <Sidebar1 className="!sticky !w-[92px] flex font-inter h-screen md:hidden justify-start mb-auto mt-[-56px] overflow-auto rounded-[18px] top-[0] z-[1]" />
        </div>
      </div>
    </>
  );
};

export default FrameFifteenPage;
