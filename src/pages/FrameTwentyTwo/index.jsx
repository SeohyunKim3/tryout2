import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Img, Text } from "components";
import FrameFifteenColumnTwo from "components/FrameFifteenColumnTwo";
import FrameFifteenColumnplusmath from "components/FrameFifteenColumnplusmath";
import Sidebar1 from "components/Sidebar1";

const FrameTwentyTwoPage = () => {
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
            groupthirtyoneimage="images/img_group31_gray_50.svg"
          />
          <Sidebar1 className="!sticky !w-[92px] flex font-inter h-screen md:hidden justify-start mb-auto mt-[-56px] overflow-auto rounded-[18px] top-[0] z-[1]" />
          <div
            className="bg-cover bg-no-repeat flex flex-col font-poppins h-[715px] items-center justify-end mb-auto ml-[368px] mt-[-NaNpx] p-[94px] md:px-10 sm:px-5 w-[41%] z-[1]"
            style={{ backgroundImage: "url('images/img_vector.png')" }}
          >
            <div className="flex flex-col gap-[54px] justify-start mt-[15px] w-[96%] md:w-full">
              <Text
                className="ml-24 md:ml-[0] text-[15.84px] text-black-900 text-center"
                size="txtPoppinsRegular1584"
              >
                Biology notes
              </Text>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="gap-2.5 grid grid-cols-3 justify-center min-h-[auto] w-full">
                  <div className="bg-white-A700 hover:border border hover:border-solid border-solid hover:border-white-A700 border-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-[11px] rounded-[11px] hover:shadow-bs9 shadow-bs9 hover:w-full w-full">
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
                  <div className="bg-white-A700 hover:border border hover:border-solid border-solid hover:border-white-A700 border-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-[11px] rounded-[11px] hover:shadow-bs9 shadow-bs9 hover:w-full w-full">
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
                  <div className="hover:border hover:border-solid hover:border-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-start hover:shadow-bs9 hover:w-full w-full">
                    <div className="md:h-[150px] h-[151px] relative w-full">
                      <div className="bg-indigo-900 border border-solid border-white-A700 h-[150px] m-auto rounded-[11px] shadow-bs10 w-full"></div>
                      <div className="absolute flex flex-col md:gap-10 gap-[90px] inset-x-[0] items-end justify-start mx-auto top-[7%] w-[78%]">
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
                  <div className="bg-white-A700 hover:border border hover:border-solid border-solid hover:border-white-A700 border-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-[11px] rounded-[11px] hover:shadow-bs9 shadow-bs9 hover:w-full w-full">
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
                  <div className="bg-white-A700 hover:border border hover:border-solid border-solid hover:border-white-A700 border-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-[11px] rounded-[11px] hover:shadow-bs9 shadow-bs9 hover:w-full w-full">
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
                  <div className="bg-white-A700 hover:border border hover:border-solid border-solid hover:border-white-A700 border-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-[11px] rounded-[11px] hover:shadow-bs9 shadow-bs9 hover:w-full w-full">
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
                </div>
                <div className="bg-blue_gray-50_4c border border-solid border-white-A700 flex flex-col items-center justify-end mt-1 p-[7px] rounded-[11px] shadow-bs9 w-[31%] md:w-full">
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
      </div>
    </>
  );
};

export default FrameTwentyTwoPage;
