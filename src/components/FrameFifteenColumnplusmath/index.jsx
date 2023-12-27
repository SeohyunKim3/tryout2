import React from "react";

import { Img, Text } from "components";

const FrameFifteenColumnplusmath = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_frame19.svg')" }}
      >
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end mr-6 w-[85%] md:w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[94.5px] items-center justify-start w-auto md:w-full">
            <div className="flex flex-row items-start justify-between w-[32%] md:w-full">
              <div className="flex flex-row gap-[9px] items-center justify-start w-[21%]">
                <Img
                  className="h-[18px] md:h-auto object-cover w-[18px]"
                  src="images/img_plusmath.png"
                  alt="plusmath"
                />
                <Text
                  className="text-[14.4px] text-black-900"
                  size="txtPoppinsRegular144"
                >
                  {props?.text}
                </Text>
              </div>
              <div className="flex flex-row gap-[9px] items-start justify-center mt-0.5 w-[24%]">
                <Img
                  className="h-4"
                  src="images/img_thumbsup.svg"
                  alt="thumbsup"
                />
                <Text
                  className="text-[14.4px] text-black-900"
                  size="txtPoppinsRegular144"
                >
                  {props?.wraptext}
                </Text>
              </div>
              <div className="flex flex-row gap-[9px] items-start justify-start mb-0.5 w-[27%]">
                <Img
                  className="h-4 mt-1"
                  src="images/img_thumbsup_black_900.svg"
                  alt="thumbsup_One"
                />
                <Text
                  className="text-[14.4px] text-black-900"
                  size="txtPoppinsRegular144"
                >
                  {props?.resizetext}
                </Text>
              </div>
            </div>
            <Img
              className="h-[21px] w-[181px]"
              alt="groupThirtyOne"
              src={props?.groupthirtyoneimage}
            />
            <Img
              className="h-[23px] w-[215px]"
              src="images/img_group30.svg"
              alt="groupThirty"
            />
          </div>
          <Text
            className="md:ml-[0] ml-[150px] md:mt-0 mt-[3px] text-[14.4px] text-black-900"
            size="txtPoppinsRegular144"
          >
            {props?.twitterimage}
          </Text>
          <Img
            className="h-[21px] ml-2 md:ml-[0]"
            src="images/img_twitter.svg"
            alt="twitter"
          />
        </div>
      </div>
    </>
  );
};

FrameFifteenColumnplusmath.defaultProps = {
  text: "Text",
  wraptext: "Wrap",
  resizetext: "Resize",
  groupthirtyoneimage: "images/img_group31.svg",
  twitterimage: "Seohyun’s canvas",
};

export default FrameFifteenColumnplusmath;
