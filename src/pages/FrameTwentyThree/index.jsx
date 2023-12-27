import React from "react";

import { Img, Line, List, Text } from "components";
import FrameFifteenColumnTwo from "components/FrameFifteenColumnTwo";
import FrameFifteenColumnplusmath from "components/FrameFifteenColumnplusmath";
import FrameTwentyFourColumnOne from "components/FrameTwentyFourColumnOne";

const FrameTwentyThreePage = () => {
  return (
    <>
      <div className="bg-gray-100 flex font-poppins h-[940px] justify-end mx-auto pb-2 relative w-full">
        <div className="h-[765px] md:h-[810px] sm:h-[868px] mb-[45px] ml-[265px] mt-auto md:px-5 w-[59%] md:w-full">
          <div className="h-[765px] sm:h-[823px] m-auto w-full">
            <div className="flex m-auto w-full">
              <div className="h-[765px] my-auto w-[765px] md:w-full">
                <div className="absolute flex flex-col inset-x-[0] items-end justify-start mx-auto top-[3%] w-full">
                  <div className="flex flex-row gap-2 items-center justify-end w-[34%] md:w-full">
                    <div className="bg-blue_gray-100 h-[150px] w-[49%]"></div>
                    <div className="bg-blue_gray-100 h-[150px] w-[49%]"></div>
                  </div>
                  <Line className="bg-deep_orange-300 h-px mt-[5px] w-full" />
                  <div className="bg-blue_gray-100 h-[159px] mr-[43px] w-[17%]"></div>
                </div>
                <Line className="absolute bg-deep_orange-300 h-[765px] inset-y-[0] my-auto right-[5%] w-px" />
              </div>
              <div className="bg-blue_gray-100 h-[159px] ml-[-36px] mt-[179px] w-[15%] z-[1]"></div>
              <div className="bg-blue_gray-100 h-[150px] mb-[272px] ml-[-36px] mt-auto w-[15%] z-[1]"></div>
              <div className="flex flex-col items-center justify-start ml-[undefinedpx] mr-[131px] my-auto w-[61%] z-[1]">
                <div className="flex flex-col gap-[33px] justify-start w-full">
                  <Text
                    className="md:ml-[0] ml-[137px] text-[15.84px] text-black-900 text-center"
                    size="txtPoppinsRegular1584"
                  >
                    Biology notes
                  </Text>
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-[22px] items-center justify-start w-[74%] md:w-full">
                      <List
                        className="sm:flex-col flex-row gap-2.5 grid grid-cols-2 w-[64%] sm:w-full"
                        orientation="horizontal"
                      >
                        <div className="bg-white-A700 border border-solid border-white-A700 flex flex-col items-center justify-start sm:ml-[0] p-[11px] rounded-[11px] shadow-bs9 w-full">
                          <div className="flex flex-col md:gap-10 gap-[90px] items-end justify-start mb-[7px] w-[96%] md:w-full">
                            <div className="flex flex-row gap-[5px] items-start justify-end w-4/5 md:w-full">
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
                        <div className="bg-white-A700 border border-solid border-white-A700 flex flex-col items-center justify-start sm:ml-[0] p-[11px] rounded-[11px] shadow-bs9 w-full">
                          <div className="flex flex-col md:gap-10 gap-[90px] items-end justify-start mb-1.5 w-[96%] md:w-full">
                            <div className="flex flex-row items-start justify-end w-4/5 md:w-full">
                              <Text
                                className="text-[10.14px] text-black-900 text-center"
                                size="txtPoppinsRegular1014"
                              >
                                Note node
                              </Text>
                              <Img
                                className="h-[17px] md:h-auto ml-1 object-cover"
                                src="images/img_vector.png"
                                alt="vector"
                              />
                            </div>
                            <Text
                              className="text-[7.88px] text-black-900 text-center"
                              size="txtPoppinsRegular788"
                            >
                              Biology cells are weird
                            </Text>
                          </div>
                        </div>
                      </List>
                      <div className="flex flex-col items-center justify-start w-[31%] sm:w-full">
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
                    <div className="flex sm:flex-col flex-row gap-[22px] items-center justify-between mt-[7px] w-full">
                      <List
                        className="sm:flex-1 sm:flex-col flex-row gap-2.5 grid grid-cols-2 mb-[3px] w-[47%] sm:w-full"
                        orientation="horizontal"
                      >
                        <div className="bg-white-A700 border border-solid border-white-A700 flex flex-col items-center justify-start p-[11px] rounded-[11px] shadow-bs9 w-full">
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
                        <div className="bg-white-A700 border border-solid border-white-A700 flex flex-col items-center justify-start p-[11px] rounded-[11px] shadow-bs9 w-full">
                          <div className="flex flex-col md:gap-10 gap-[91px] items-end justify-start mb-1.5 w-[96%] md:w-full">
                            <div className="flex flex-row items-center justify-end w-4/5 md:w-full">
                              <Text
                                className="text-[10.14px] text-black-900 text-center"
                                size="txtPoppinsRegular1014"
                              >
                                Note node
                              </Text>
                              <Img
                                className="h-[17px] md:h-auto ml-1 object-cover"
                                src="images/img_vector.png"
                                alt="vector"
                              />
                            </div>
                            <Text
                              className="text-[7.88px] text-black-900 text-center"
                              size="txtPoppinsRegular788"
                            >
                              Biology cells are weird
                            </Text>
                          </div>
                        </div>
                      </List>
                      <List
                        className="sm:flex-1 sm:flex-col flex-row gap-[21px] grid grid-cols-2 sm:mt-0 mt-[3px] w-[49%] sm:w-full"
                        orientation="horizontal"
                      >
                        <div className="bg-white-A700 border border-solid border-white-A700 flex flex-col items-center justify-start p-[11px] rounded-[11px] shadow-bs9 w-full">
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
                              className="text-[7.88px] text-black-900 text-center"
                              size="txtPoppinsRegular788"
                            >
                              Biology cells are weird
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white-A700 border border-solid border-white-A700 flex flex-col items-center justify-start p-[11px] rounded-[11px] shadow-bs9 w-full">
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
                      </List>
                    </div>
                    <div className="bg-blue_gray-50_4c border border-solid border-white-A700 flex flex-col items-center justify-end md:ml-[0] ml-[125px] mt-1 p-[7px] rounded-[11px] shadow-bs9 w-[23%] md:w-full">
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
                            alt="vector_One"
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
            <Line className="absolute bg-black-900 h-[765px] inset-y-[0] left-[38%] my-auto w-px" />
            <Line className="absolute bg-black-900 h-[765px] inset-y-[0] my-auto right-[46%] w-px" />
            <Line className="absolute bg-black-900 h-[765px] inset-y-[0] my-auto right-[30%] w-px" />
          </div>
          <Line className="absolute bg-black-900 h-px left-[0] top-[44%] w-[91%]" />
          <Line className="absolute bg-black-900 bottom-[35%] h-px left-[0] w-[91%]" />
          <div className="absolute flex flex-col items-center justify-start right-[12%] top-[21%] w-[14%]">
            <div className="md:h-[149px] h-[151px] relative w-full">
              <div className="absolute bg-indigo-900 border border-solid border-white-A700 flex flex-col gap-[9px] h-max inset-[0] items-center justify-center m-auto p-[13px] rounded-[11px] shadow-bs10 w-[98%]">
                <div className="flex flex-col gap-[21px] items-center justify-start w-3/5 md:w-full">
                  <Text
                    className="text-[10.14px] text-center text-white-A700"
                    size="txtPoppinsRegular1014WhiteA700"
                  >
                    Web node
                  </Text>
                  <Img
                    className="h-[59px] md:h-auto object-cover"
                    src="images/img_vector.png"
                    alt="vector_Two"
                  />
                </div>
                <div className="h-3 md:h-[18px] mb-1.5 relative w-[99%]">
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
              <Img
                className="absolute h-7 right-[0] top-[14%] w-7"
                src="images/img_cursorpointer.svg"
                alt="cursorpointer"
              />
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col inset-[0] justify-center m-auto md:px-5 w-full">
          <FrameFifteenColumnplusmath
            className="bg-cover bg-no-repeat flex flex-col h-[66px] items-end justify-end mx-auto p-5 w-full"
            style={{ backgroundImage: "url('images/img_frame19.svg')" }}
            groupthirtyoneimage="images/img_group31_gray_50.svg"
          />
          <FrameTwentyFourColumnOne className="bg-white-A700 border-black-900_19 border-r border-solid flex flex-col font-inter gap-6 h-[920px] md:h-auto items-end justify-start mb-auto mt-[-56px] p-6 sm:px-5 rounded-[12px] w-[92px] z-[1]" />
          <FrameFifteenColumnTwo className="flex flex-col font-poppins gap-[9px] items-center justify-start ml-auto mr-[5px] mt-[-NaNpx] px-2.5 w-[17%] z-[1]" />
        </div>
      </div>
    </>
  );
};

export default FrameTwentyThreePage;
