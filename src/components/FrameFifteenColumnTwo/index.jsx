import React from "react";

import { Img, Text } from "components";

const FrameFifteenColumnTwo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col gap-2.5 items-center justify-start p-3 rounded-[20px] shadow-bs1 w-full">
          <div className="bg-blue_gray-50_4c border border-solid border-white-A700 flex flex-col gap-[15px] items-center justify-center p-[21px] sm:px-5 rounded-[17px] shadow-bs2 w-[92%] md:w-full">
            <div className="flex flex-col gap-[33px] items-center justify-start w-3/5 md:w-full">
              <Text
                className="text-[15.84px] text-black-900 text-center"
                size="txtPoppinsRegular1584"
              >
                {props?.notetext}
              </Text>
              <Img
                className="h-[93px] md:h-auto object-cover"
                src="images/img_vector.png"
                alt="vector"
              />
            </div>
            <Text
              className="mb-2 text-[12.32px] text-black-900 text-center"
              size="txtPoppinsRegular1232"
            >
              {props?.biologytext}
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start w-[92%] md:w-full">
            <div className="md:h-[234px] h-[236px] relative w-full">
              <div className="absolute bg-indigo-900 border border-solid border-white-A700 h-[234px] inset-[0] justify-center m-auto rounded-[17px] shadow-bs3 w-[99%]"></div>
              <div className="absolute flex flex-col gap-4 inset-x-[0] items-center justify-start mx-auto top-[9%] w-[76%]">
                <div className="flex flex-col gap-8 items-center justify-start w-[61%] md:w-full">
                  <Text
                    className="text-[15.84px] text-center text-white-A700"
                    size="txtPoppinsRegular1584WhiteA700"
                  >
                    {props?.webtext}
                  </Text>
                  <Img
                    className="h-[92px] md:h-auto object-cover"
                    src="images/img_vector.png"
                    alt="vector_One"
                  />
                </div>
                <div className="h-[19px] relative w-full">
                  <Text
                    className="absolute h-full inset-[0] justify-center m-auto text-[12.32px] text-center text-white-A700 w-max"
                    size="txtPoppinsRegular1232WhiteA700"
                  >
                    {props?.biologytext1}
                  </Text>
                  <Text
                    className="absolute h-full inset-[0] justify-center m-auto text-[12.32px] text-center text-white-A700 w-max"
                    size="txtPoppinsRegular1232WhiteA700"
                  >
                    {props?.biologytext2}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue_gray-50_4c border border-solid border-white-A700 flex flex-col items-center justify-end mb-1.5 p-3 rounded-[17px] shadow-bs2 w-[92%] md:w-full">
            <Text
              className="mt-[9px] text-[15.84px] text-black-900 text-center"
              size="txtPoppinsRegular1584"
            >
              {props?.audionode}
            </Text>
            <Img
              className="h-[93px] md:h-auto mt-0.5 object-cover"
              src="images/img_vector.png"
              alt="vector_Two"
            />
            <Text
              className="mt-[5px] text-[12.32px] text-black-900 text-center"
              size="txtPoppinsRegular1232"
            >
              {props?.biologytext3}
            </Text>
          </div>
        </div>
        <div className="bg-blue_gray-50_4c border border-solid border-white-A700 flex flex-col items-center justify-start p-[18px] rounded-[17px] shadow-bs2 w-[97%] md:w-full">
          <div className="flex flex-col gap-1.5 items-center justify-start mb-2 w-[77%] md:w-full">
            <Text
              className="text-[15.84px] text-black-900 text-center"
              size="txtPoppinsRegular1584"
            >
              {props?.minimaptext}
            </Text>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row gap-[11px] items-start justify-between w-full">
                <div className="bg-blue_gray-100 h-9 w-[14%]"></div>
                <div className="bg-blue_gray-100 h-9 w-[36%]"></div>
                <div className="bg-blue_gray-100 h-[27px] mb-[9px] w-[36%]"></div>
              </div>
              <div className="flex flex-row gap-[11px] items-start justify-between w-full">
                <div className="bg-blue_gray-100 h-9 mt-1.5 w-[14%]"></div>
                <div className="flex flex-col gap-[7px] items-center justify-start mt-1.5">
                  <div className="bg-blue_gray-100 h-[11px] w-full"></div>
                  <div className="bg-blue_gray-100 h-[18px] w-full"></div>
                </div>
                <div className="bg-blue_gray-100 h-[42px] w-[36%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

FrameFifteenColumnTwo.defaultProps = {
  notetext: "Note node",
  biologytext: "Biology cells are weird",
  webtext: "Web node",
  biologytext1: "Biology cells are weird",
  biologytext2: "Biology cells are weird",
  audionode: "Audio node",
  biologytext3: "Biology cells are weird",
  minimaptext: "Minimap",
};

export default FrameFifteenColumnTwo;
