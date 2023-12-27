import React from "react";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import FrameEightColumnOne from "components/FrameEightColumnOne";

const settingsOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const FrameEightPage = () => {
  return (
    <>
      <div className="bg-gray-100 flex sm:flex-col md:flex-col flex-row font-inter gap-8 items-start mx-auto py-2 w-full">
        <FrameEightColumnOne className="bg-white-A700 border-black-900_19 border-r border-solid flex flex-col gap-6 h-[920px] md:h-auto items-start justify-start md:mt-0 mt-1 p-6 md:px-5 rounded-[12px] w-64" />
        <div className="font-poppins md:h-[1008px] sm:h-[2022px] h-[620px] md:mt-0 mt-[191px] md:px-5 relative w-4/5 md:w-full">
          <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[0] w-[82%]">
            <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
              <Img
                className="h-[66px] md:h-auto mt-[26px] object-cover"
                src="images/img_vector_66x81.png"
                alt="vector"
              />
              <Img
                className="h-[186px] md:h-auto object-cover"
                src="images/img_vector_186x172.png"
                alt="vector_One"
              />
            </div>
          </div>
          <div className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-[89%]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="md:gap-5 gap-[18px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                <div className="bg-white-A700 border border-gray-100 border-solid flex flex-1 flex-col h-60 items-center justify-start p-[9px] rounded-[24px] shadow-bs1 w-full">
                  <div className="flex flex-col gap-[26px] items-center justify-start mb-[30px] mt-0.5 w-full">
                    <div className="bg-blue_gray-50_4c border border-solid border-white-A700 h-36 rounded-[16px] w-full"></div>
                    <Text
                      className="text-[11.31px] text-black-900 text-center"
                      size="txtPoppinsRegular1131"
                    >
                      Physics is even worse
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-gray-100 border-solid flex flex-1 flex-col h-60 items-center justify-start p-[9px] rounded-[24px] shadow-bs1 w-full">
                  <div className="flex flex-col gap-[26px] items-center justify-start mb-[30px] mt-0.5 w-full">
                    <div className="bg-blue_gray-50_4c border border-solid border-white-A700 h-36 rounded-[16px] w-full"></div>
                    <Text
                      className="text-[11.31px] text-black-900 text-center"
                      size="txtPoppinsRegular1131"
                    >
                      Physics is even worse
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-gray-100 border-solid flex flex-1 flex-col h-60 items-center justify-start p-[9px] rounded-[24px] shadow-bs1 w-full">
                  <div className="flex flex-col gap-[26px] items-center justify-start mb-[30px] mt-0.5 w-full">
                    <div className="bg-blue_gray-50_4c border border-solid border-white-A700 h-36 rounded-[16px] w-full"></div>
                    <Text
                      className="text-[11.31px] text-black-900 text-center"
                      size="txtPoppinsRegular1131"
                    >
                      Physics is even worse
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-gray-100 border-solid flex flex-1 flex-col h-60 items-center justify-start p-[9px] rounded-[24px] shadow-bs1 w-full">
                  <div className="flex flex-col gap-[26px] items-center justify-start mb-[30px] mt-0.5 w-full">
                    <div className="bg-blue_gray-50_4c border border-solid border-white-A700 h-36 rounded-[16px] w-full"></div>
                    <Text
                      className="text-[11.31px] text-black-900 text-center"
                      size="txtPoppinsRegular1131"
                    >
                      Physics is even worse
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-gray-100 border-solid flex flex-1 flex-col h-60 items-center justify-start p-[9px] rounded-[24px] shadow-bs1 w-full">
                  <div className="flex flex-col gap-[26px] items-center justify-start mb-[22px] mt-2.5 w-full">
                    <div className="bg-blue_gray-50_4c border border-solid border-white-A700 h-36 rounded-[16px] w-full"></div>
                    <Text
                      className="text-[11.31px] text-black-900 text-center"
                      size="txtPoppinsRegular1131"
                    >
                      Physics is even worse
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-gray-100 border-solid flex flex-1 flex-col h-60 items-center justify-start p-[9px] rounded-[24px] shadow-bs1 w-full">
                  <div className="flex flex-col gap-[26px] items-center justify-start mb-[22px] mt-2.5 w-full">
                    <div className="bg-blue_gray-50_4c border border-solid border-white-A700 h-36 rounded-[16px] w-full"></div>
                    <Text
                      className="text-[11.31px] text-black-900 text-center"
                      size="txtPoppinsRegular1131"
                    >
                      Physics is even worse
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-gray-100 border-solid flex flex-1 flex-col h-60 items-center justify-start p-[9px] rounded-[24px] shadow-bs1 w-full">
                  <div className="flex flex-col gap-[26px] items-center justify-start mb-[22px] mt-2.5 w-full">
                    <div className="bg-blue_gray-50_4c border border-solid border-white-A700 h-36 rounded-[16px] w-full"></div>
                    <Text
                      className="text-[11.31px] text-black-900 text-center"
                      size="txtPoppinsRegular1131"
                    >
                      Physics is even worse
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-gray-100 border-solid flex flex-1 flex-col h-60 items-center justify-start p-[9px] rounded-[24px] shadow-bs1 w-full">
                  <div className="flex flex-col gap-[26px] items-center justify-start mb-[22px] mt-2.5 w-full">
                    <div className="bg-blue_gray-50_4c border border-solid border-white-A700 h-36 rounded-[16px] w-full"></div>
                    <Text
                      className="text-[11.31px] text-black-900 text-center"
                      size="txtPoppinsRegular1131"
                    >
                      Physics is even worse
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameEightPage;
