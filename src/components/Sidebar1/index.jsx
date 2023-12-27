import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const Sidebar1 = (props) => {
  const navigate = useNavigate();

  const sideBarMenu = [
    {
      label: <Img className="h-10 w-11" src="images/img_home.svg" alt="home" />,
    },
    {
      label: <Img className="h-10 w-11" src="images/img_lock.svg" alt="lock" />,
    },
    {
      label: (
        <Img
          className="common-pointer h-10 w-11"
          src="images/img_reply.svg"
          alt="reply"
          onClick={() => navigate("/frameten")}
        />
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
      <Sidebar className={props.className}>
        <div className="flex flex-row gap-2.5 items-center justify-between ml-6 mt-6 w-[74%]">
          <div className="flex flex-col h-11 items-start justify-start w-11">
            <div className="flex flex-col items-center justify-start w-auto">
              <Img
                className="h-[43px] md:h-auto object-cover rounded-bl-[18px] rounded-br-[18px] w-[37px]"
                src="images/img_image2.png"
                alt="imageTwo"
              />
            </div>
          </div>
          <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col items-start justify-start mb-1.5 mt-2.5 p-1.5 rounded-[7px] w-auto">
            <Img className="h-[9px]" src="images/img_union.svg" alt="union" />
          </div>
        </div>
        <div className="bg-gray-100 h-0.5 mt-6 mx-6 rounded-[1px] w-[48%]"></div>
        <Menu
          menuItemStyles={{
            button: {
              padding: 0,
              flexDirection: "column",
              paddingLeft: "24px",
              paddingRight: "24px",
              [`&:hover, &.ps-active`]: { color: "#d55f5a" },
            },
          }}
          className="flex flex-col items-center justify-start my-[23px] pb-[499px] w-full"
        >
          <div className="flex flex-col gap-[7px] items-center justify-start w-full">
            <Text
              className="text-[10px] text-gray-600 tracking-[0.40px] uppercase w-auto"
              size="txtInterMedium10"
            >
              Main
            </Text>
            <div className="flex flex-col gap-2 items-center justify-start w-full">
              {sideBarMenu?.map((menu, i) => (
                <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </div>
          </div>
          <div className="bg-gray-100 flex flex-col items-center justify-start mt-2 px-3 py-2.5 rounded-lg w-auto md:w-full">
            <Img
              className="h-[17px] rounded-tl-lg rounded-tr-lg"
              src="images/img_calendar.svg"
              alt="calendar"
            />
          </div>
          <div className="flex flex-col items-center justify-start mt-2 pb-[463px] w-full">
            <div className="flex flex-col gap-2 items-center justify-start w-full">
              {sideBarMenu1?.map((menu, i) => (
                <MenuItem key={`sideBarMenu1Item${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </div>
            <Text
              className="text-[10px] text-gray-600 tracking-[0.40px] uppercase w-auto"
              size="txtInterMedium10"
            >
              Settings
            </Text>
          </div>
          <div className="bg-gray-100 h-px rounded-[1px] w-full"></div>
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
