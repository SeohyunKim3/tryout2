import React from "react";

import { Img, Line, List, Text } from "components";
import FrameFifteenColumnTwo from "components/FrameFifteenColumnTwo";
import FrameFifteenColumnplusmath from "components/FrameFifteenColumnplusmath";
import FrameTwentyFourColumnOne from "components/FrameTwentyFourColumnOne";

const FrameTwentyPage = () => {
  return (
    <>
      <div className="bg-gray-100 font-poppins h-[940px] mx-auto pb-2 relative w-full">
        <FrameFifteenColumnTwo className="absolute bottom-[1%] flex flex-col gap-[9px] items-center justify-start px-2.5 md:px-5 right-[0] w-[17%]" />
        <div className="absolute md:h-[765px] h-[930px] inset-[0] justify-center m-auto md:px-5 w-full">
          <div className="md:h-[765px] h-[930px] m-auto w-full">
            <div className="flex flex-col m-auto w-full">
              <FrameFifteenColumnplusmath
                className="bg-cover bg-no-repeat flex flex-col h-[66px] items-end justify-end mx-auto p-5 w-full"
                style={{ backgroundImage: "url('images/img_frame19.svg')" }}
                groupthirtyoneimage="images/img_group31_gray_50.svg"
              />
              <FrameTwentyFourColumnOne className="bg-white-A700 border-black-900_19 border-r border-solid flex flex-col font-inter gap-6 h-[920px] md:h-auto items-end justify-start mb-auto mt-[-56px] p-6 sm:px-5 rounded-[12px] w-[92px] z-[1]" />
              <div className="flex flex-col font-poppins items-center justify-start mb-[194px] mt-[-NaNpx] mx-auto w-[36%] z-[1]">
                <div className="flex flex-col gap-[33px] justify-start w-full">
                  <Text
                    className="md:ml-[0] ml-[137px] text-[15.84px] text-black-900 text-center"
                    size="txtPoppinsRegular1584"
                  >
                    Biology notes
                  </Text>
                  <div className="flex flex-col justify-start w-full">
                    <List
                      className="flex flex-col gap-[7px] items-center w-full"
                      orientation="vertical"
                    >
                      <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start mr-[136px] my-0 w-[74%] md:w-full">
                        <div className="bg-white-A700 border border-solid border-white-A700 flex flex-col md:gap-10 gap-[91px] items-center justify-start p-[13px] rounded-[11px] shadow-bs9">
                          <Text
                            className="text-[10.14px] text-black-900 text-center"
                            size="txtPoppinsRegular1014"
                          >
                            Note node
                          </Text>
                          <Text
                            className="mb-[5px] text-[7.88px] text-black-900 text-center"
                            size="txtPoppinsRegular788"
                          >
                            Biology cells are weird
                          </Text>
                        </div>
                        <div className="bg-white-A700 border border-solid border-white-A700 flex flex-col md:gap-10 gap-[91px] items-center justify-start ml-2.5 sm:ml-[0] p-[13px] rounded-[11px] shadow-bs9">
                          <Text
                            className="text-[10.14px] text-black-900 text-center"
                            size="txtPoppinsRegular1014"
                          >
                            Note node
                          </Text>
                          <Text
                            className="mb-[5px] text-[7.88px] text-black-900 text-center"
                            size="txtPoppinsRegular788"
                          >
                            Biology cells are weird
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[21px] w-[31%] sm:w-full">
                          <div className="md:h-[150px] h-[151px] relative w-full">
                            <div className="bg-indigo-900 border border-solid border-white-A700 h-[150px] m-auto rounded-[11px] shadow-bs10 w-full"></div>
                            <div className="absolute flex flex-col md:gap-10 gap-[89px] inset-x-[0] items-end justify-start mx-auto top-[8%] w-[78%]">
                              <div className="flex flex-row gap-[5px] items-start justify-end w-4/5 md:w-full">
                                <Text
                                  className="text-[10.14px] text-center text-white-A700"
                                  size="txtPoppinsRegular1014WhiteA700"
                                >
                                  Web node
                                </Text>
                                <Img
                                  className="h-[17px] md:h-auto object-cover"
                                  src="images/img_vector.png"
                                  alt="vector"
                                />
                              </div>
                              <div className="h-3 mr-0.5 relative w-[98%]">
                                <Text
                                  className="m-auto text-[7.88px] text-center text-white-A700"
                                  size="txtPoppinsRegular788WhiteA700"
                                >
                                  Biology cells are weird
                                </Text>
                                <Text
                                  className="absolute h-full inset-[0] justify-center m-auto text-[7.88px] text-center text-white-A700 w-max"
                                  size="txtPoppinsRegular788WhiteA700"
                                >
                                  Biology cells are weird
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between my-0 w-full">
                        <div className="bg-white-A700 border border-solid border-white-A700 flex flex-col md:gap-10 gap-[91px] items-center justify-start mb-[3px] p-[13px] rounded-[11px] shadow-bs9">
                          <Text
                            className="text-[10.14px] text-black-900 text-center"
                            size="txtPoppinsRegular1014"
                          >
                            Note node
                          </Text>
                          <Text
                            className="mb-[5px] text-[7.88px] text-black-900 text-center"
                            size="txtPoppinsRegular788"
                          >
                            Biology cells are weird
                          </Text>
                        </div>
                        <div className="bg-white-A700 border border-solid border-white-A700 flex flex-col md:gap-10 gap-[91px] items-center justify-start mb-[3px] p-[13px] rounded-[11px] shadow-bs9">
                          <Text
                            className="text-[10.14px] text-black-900 text-center"
                            size="txtPoppinsRegular1014"
                          >
                            Note node
                          </Text>
                          <Text
                            className="mb-[5px] text-[7.88px] text-black-900 text-center"
                            size="txtPoppinsRegular788"
                          >
                            Biology cells are weird
                          </Text>
                        </div>
                        <div className="bg-white-A700 border border-solid border-white-A700 flex flex-col md:gap-10 gap-[91px] items-center justify-start sm:mt-0 mt-[3px] p-[13px] rounded-[11px] shadow-bs9">
                          <Text
                            className="text-[10.14px] text-black-900 text-center"
                            size="txtPoppinsRegular1014"
                          >
                            Note node
                          </Text>
                          <Text
                            className="mb-[5px] text-[7.88px] text-black-900 text-center"
                            size="txtPoppinsRegular788"
                          >
                            Biology cells are weird
                          </Text>
                        </div>
                        <div className="bg-white-A700 border border-solid border-white-A700 flex sm:flex-1 flex-col items-center justify-start sm:mt-0 mt-[3px] p-[11px] rounded-[11px] shadow-bs9 w-[23%] sm:w-full">
                          <div className="flex flex-col md:gap-10 gap-[91px] items-end justify-start mb-[7px] w-[96%] md:w-full">
                            <div className="flex flex-row gap-[5px] items-center justify-end w-4/5 md:w-full">
                              <Text
                                className="text-[10.14px] text-black-900 text-center"
                                size="txtPoppinsRegular1014"
                              >
                                Note node
                              </Text>
                              <Img
                                className="h-[17px] md:h-auto object-cover"
                                src="images/img_vector.png"
                                alt="vector"
                              />
                            </div>
                            <Text
                              className="mr-0.5 text-[7.88px] text-black-900 text-center"
                              size="txtPoppinsRegular788"
                            >
                              Biology cells are weird
                            </Text>
                          </div>
                        </div>
                      </div>
                    </List>
                    <div className="bg-blue_gray-50_4c border border-solid border-white-A700 flex flex-col items-center justify-end md:ml-[0] ml-[125px] mr-[274px] mt-1 p-[7px] rounded-[11px] shadow-bs9 w-[23%] md:w-full">
                      <div className="flex flex-col md:gap-10 gap-16 items-end justify-start mt-[5px] w-[89%] md:w-full">
                        <div className="flex flex-row items-start justify-end w-[85%] md:w-full">
                          <Text
                            className="text-[10.14px] text-black-900 text-center"
                            size="txtPoppinsRegular1014"
                          >
                            Audio node
                          </Text>
                          <Img
                            className="h-[17px] md:h-auto object-cover"
                            src="images/img_vector.png"
                            alt="vector_Three"
                          />
                        </div>
                        <Text
                          className="mr-0.5 text-[7.88px] text-black-900 text-center"
                          size="txtPoppinsRegular788"
                        >
                          Biology cells are weird
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[5%] flex flex-row inset-x-[0] items-center justify-center mx-auto w-[19%]">
              <Line className="bg-black-900 h-[765px] w-px" />
              <Line className="bg-black-900 h-[765px] ml-[132px] w-px" />
              <Line className="bg-black-900 h-[765px] ml-[137px] w-px" />
            </div>
          </div>
          <div className="absolute bottom-[33%] flex flex-col md:gap-10 gap-[157px] items-center justify-start left-[18%] w-[54%]">
            <Line className="bg-black-900 h-px w-full" />
            <Line className="bg-black-900 h-px w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameTwentyPage;
