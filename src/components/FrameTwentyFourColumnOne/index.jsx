import React from "react";

import { Img, Text } from "components";

const FrameTwentyFourColumnOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-6 items-start justify-start w-full">
          <div className="flex flex-row gap-2.5 items-center justify-between ml-1 md:ml-[0] w-[95%] md:w-full">
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
          <div className="bg-gray-100 h-0.5 ml-1 md:ml-[0] rounded-[1px] w-[62%]"></div>
          <div className="flex flex-col gap-2 items-center justify-start ml-1 md:ml-[0] w-full">
            <Text
              className="text-[10px] text-gray-600 tracking-[0.40px] uppercase w-auto"
              size="txtInterMedium10"
            >
              {props?.overline}
            </Text>
            <div className="flex flex-col gap-2 items-center justify-start w-full">
              <Img className="h-10 w-11" src="images/img_home.svg" alt="home" />
              <Img className="h-10 w-11" src="images/img_lock.svg" alt="lock" />
              <Img
                className="h-10 w-11"
                src="images/img_reply.svg"
                alt="reply"
              />
              <div className="bg-gray-100 flex flex-col items-center justify-start px-3 py-2.5 rounded-lg w-auto">
                <Img
                  className="h-[17px] w-4"
                  src="images/img_calendar.svg"
                  alt="calendar"
                />
              </div>
              <Img
                className="h-10 w-11"
                src="images/img_television.svg"
                alt="television"
              />
            </div>
          </div>
          <div className="bg-gray-100 h-0.5 ml-1 md:ml-[0] rounded-[1px] w-[62%]"></div>
          <div className="flex flex-col gap-2 h-full items-center justify-start w-full">
            <Text
              className="text-[10px] text-gray-600 tracking-[0.40px] uppercase w-auto"
              size="txtInterMedium10"
            >
              {props?.overlineOne}
            </Text>
            <Img
              className="h-10 w-11"
              src="images/img_search.svg"
              alt="search"
            />
          </div>
          <div className="flex flex-col gap-2 items-start justify-start ml-1 md:ml-[0] w-full">
            <Img className="h-10 w-11" src="images/img_link.svg" alt="link" />
            <Img className="h-10 w-11" src="images/img_close.svg" alt="close" />
          </div>
        </div>
      </div>
    </>
  );
};

FrameTwentyFourColumnOne.defaultProps = {
  overline: "Main",
  overlineOne: "Settings",
};

export default FrameTwentyFourColumnOne;
