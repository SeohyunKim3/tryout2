import React from "react";

import { Img, Input, Line, List, Text } from "components";
import FrameFifteenColumnplusmath from "components/FrameFifteenColumnplusmath";
import FrameTwentyFourColumnOne from "components/FrameTwentyFourColumnOne";

const FrameTwentySevenPage = () => {
  return (
    <>
      <div className="bg-gray-100 font-poppins h-[940px] mx-auto relative w-full">
        <div className="absolute sm:h-[1087px] md:h-[867px] h-[940px] inset-[0] justify-center m-auto md:px-5 w-full">
          <div className="absolute md:h-[573px] sm:h-[585px] h-[645px] inset-x-[0] mx-auto top-[0] w-full">
            <div className="absolute bg-white-A700 border-black-900_19 border-l border-solid border-t bottom-[0] flex flex-col justify-start left-[6%] p-[18px] rounded-[30px] w-[43%]">
              <div className="h-[27px] mx-auto relative w-[99%] sm:w-full">
                <Text
                  className="absolute h-full inset-y-[0] left-[4%] my-auto text-black-900 text-lg"
                  size="txtPoppinsRegular18"
                >
                  Knowledge Retriever
                </Text>
                <Line className="absolute bg-black-900_19 bottom-[0] h-px inset-x-[0] mx-auto w-full" />
              </div>
              <Input
                name="groupFour"
                placeholder="Tania’s favourite cake recipe:"
                className="p-0 placeholder:text-black-900 text-left text-sm w-full"
                wrapClassName="md:ml-[0] ml-[82px] mr-[49px] mt-[31px] w-[77%]"
                shape="round"
                color="gray_200_7f"
                size="md"
                variant="fill"
              ></Input>
              <div className="flex md:h-64 h-[244px] sm:h-[268px] justify-end md:ml-[0] ml-[23px] mt-[13px] relative w-[85%] sm:w-full">
                <div className="flex sm:flex-col flex-row gap-[7px] h-full items-center justify-start mb-[19px] mt-auto mx-auto w-[85%]">
                  <div className="bg-gray-50 h-[74px] rounded-[18px] w-[32%]"></div>
                  <div className="bg-gray-50 h-[74px] rounded-[18px] w-[33%]"></div>
                  <div className="bg-gray-50 h-[74px] rounded-[18px] w-[33%]"></div>
                </div>
                <div className="absolute border border-blue_gray-800_19 border-solid flex flex-col h-full inset-[0] items-start justify-center m-auto p-[31px] sm:px-5 rounded-[33px] w-full">
                  <div className="flex flex-col gap-[7px] justify-start mb-[38px] md:ml-[0] ml-[7px] w-[88%] md:w-full">
                    <Text
                      className="leading-[23.00px] text-black-900 text-sm"
                      size="txtPoppinsRegular14"
                    >
                      <>
                        Tania’s favourite cake recipe:
                        <br />4 tablespoon of baking powder
                        <br />2 teaspoon of sugar powder
                        <br />3 egg yolk
                        <br />
                        10 cooking paper
                      </>
                    </Text>
                    <div className="flex flex-row items-center justify-end md:ml-[0] ml-[53px] w-[83%] md:w-full">
                      <Text
                        className="text-black-900 text-center text-xs"
                        size="txtPoppinsRegular12"
                      >
                        Line
                      </Text>
                      <Text
                        className="ml-[114px] text-black-900 text-center text-xs"
                        size="txtPoppinsRegular12"
                      >
                        Dot
                      </Text>
                      <Text
                        className="ml-[113px] text-black-900 text-center text-xs"
                        size="txtPoppinsRegular12"
                      >
                        Blank
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Input
                name="groupFive"
                placeholder="Add ‘2 tablespoon of wheat’ in the recipe for later"
                className="p-0 placeholder:text-black-900 text-left text-sm w-full"
                wrapClassName="md:ml-[0] ml-[82px] mr-[49px] mt-[9px] w-[77%]"
                shape="round"
                color="gray_200_7f"
                size="sm"
                variant="fill"
              ></Input>
              <div className="border-[3px] border-black-900_19 border-solid flex flex-col items-start justify-end mb-1.5 md:ml-[0] ml-[49px] mt-[33px] p-4 rounded-[27px]">
                <Text
                  className="md:ml-[0] ml-[43px] text-center text-gray-400 text-sm"
                  size="txtPoppinsMedium14"
                >
                  What do you want to retrieve?
                </Text>
              </div>
            </div>
            <FrameFifteenColumnplusmath
              className="absolute bg-cover bg-no-repeat flex flex-col h-[66px] inset-x-[0] items-end justify-end mx-auto p-5 top-[0] w-full"
              style={{ backgroundImage: "url('images/img_frame19.svg')" }}
              groupthirtyoneimage="images/img_group31_gray_50.svg"
            />
          </div>
          <FrameTwentyFourColumnOne className="absolute bg-white-A700 border-black-900_19 border-r border-solid flex flex-col font-inter gap-6 md:h-auto h-max inset-y-[0] items-end justify-start left-[0] my-auto p-6 sm:px-5 rounded-[12px] w-[92px]" />
          <div className="absolute bg-white-A700 border-black-900_19 border-l border-solid border-t bottom-[0] flex flex-col font-poppins items-center justify-start pl-2 py-2 right-[0] w-[52%]">
            <div className="flex flex-col gap-[17px] items-end justify-start mb-[244px] w-[99%] md:w-full">
              <div className="flex flex-col items-start justify-start w-[95%] md:w-full">
                <div className="flex flex-row gap-[45px] items-end justify-start w-[36%] md:w-full">
                  <Text
                    className="mt-[5px] text-black-900 text-center text-xs"
                    size="txtPoppinsRegular12"
                  >
                    Recent 1
                  </Text>
                  <Text
                    className="bg-white-A700 border-black-900_19 border-solid border-x h-6 justify-center pt-[5px] sm:px-5 px-[35px] text-black-900 text-center text-xs w-[148px]"
                    size="txtPoppinsRegular12"
                  >
                    Recent 2
                  </Text>
                </div>
                <Line className="bg-black-900_19 h-px md:ml-[0] ml-[93px] mt-1 w-[87%]" />
                <Text
                  className="mt-[60px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                  size="txtPoppinsRegular40"
                >
                  Title
                </Text>
                <Text
                  className="md:ml-[0] ml-[5px] text-black-900 text-xs"
                  size="txtPoppinsRegular12"
                >
                  #tags #tags #tags
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Line className="bg-black-900_19 h-px w-full" />
                <div className="bg-blue_gray-50_4c flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-1 p-0.5 rounded-[15px] w-[94%] md:w-full">
                  <Text
                    className="bg-black-900_0c h-6 justify-center ml-6 sm:ml-[0] pt-1 sm:px-5 px-[35px] rounded text-black-900 text-center text-xs w-[104px]"
                    size="txtPoppinsRegular12"
                  >
                    Line
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[87px] sm:mt-0 mt-[5px] text-black-900 text-center text-xs"
                    size="txtPoppinsRegular12"
                  >
                    Dot
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[124px] sm:mt-0 mt-1 text-black-900 text-center text-xs"
                    size="txtPoppinsRegular12"
                  >
                    Blank
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[118px] sm:mt-0 mt-1 text-black-900 text-center text-xs"
                    size="txtPoppinsRegular12"
                  >
                    Grid
                  </Text>
                </div>
                <Line className="bg-black-900_19 h-px mt-2 w-full" />
                <Line className="bg-blue_gray-100_66 h-px mt-[22px] w-[97%]" />
                <div className="h-[17px] md:h-[21px] mt-1 relative w-[97%] md:w-full">
                  <Text
                    className="absolute h-full inset-y-[0] left-[6%] my-auto text-[11px] text-black-900"
                    size="txtPoppinsRegular11"
                  >
                    Start typing something here! You can change the option of
                    the template to either line, dot, blank or grid.
                  </Text>
                  <Line className="absolute bg-blue_gray-100_66 bottom-[0] h-px inset-x-[0] mx-auto w-full" />
                </div>
                <div className="md:h-5 h-[17px] mt-[3px] relative w-[97%] md:w-full">
                  <Text
                    className="absolute h-full inset-y-[0] left-[6%] my-auto text-[11px] text-black-900"
                    size="txtPoppinsRegular11"
                  >
                    For blank templates, you can choose to insert images and
                    tables!
                  </Text>
                  <Line className="absolute bg-blue_gray-100_66 bottom-[0] h-px inset-x-[0] mx-auto w-full" />
                </div>
                <div className="md:h-5 h-[17px] mt-[3px] relative w-[97%] md:w-full">
                  <Text
                    className="absolute h-full inset-y-[0] left-[6%] my-auto text-[11px] text-black-900"
                    size="txtPoppinsRegular11"
                  >
                    For dot templates, you can create mind maps and workflows!
                  </Text>
                  <Line className="absolute bg-blue_gray-100_66 bottom-[12%] h-px inset-x-[0] mx-auto w-full" />
                </div>
                <Line className="bg-blue_gray-100_66 h-px mt-4 w-[97%]" />
                <Line className="bg-blue_gray-100_66 h-px mt-[19px] w-[97%]" />
                <Line className="bg-blue_gray-100_66 h-px mt-[19px] w-[97%]" />
                <Line className="bg-blue_gray-100_66 h-px mt-[19px] w-[97%]" />
                <Line className="bg-blue_gray-100_66 h-px mt-[19px] w-[97%]" />
                <Line className="bg-blue_gray-100_66 h-px mt-[19px] w-[97%]" />
                <Line className="bg-blue_gray-100_66 h-px mt-[19px] w-[97%]" />
                <Line className="bg-blue_gray-100_66 h-px mt-[19px] w-[97%]" />
                <Line className="bg-blue_gray-100_66 h-px mt-[19px] w-[97%]" />
                <div className="font-inter h-[60px] md:h-[67px] mt-[11px] relative w-[97%] md:w-full">
                  <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[13%] w-full">
                    <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                      <Line className="bg-blue_gray-100_66 h-px w-full" />
                      <Line className="bg-blue_gray-100_66 h-px w-full" />
                    </div>
                  </div>
                  <div className="absolute bg-white-A700 border border-black-900_19 border-solid flex flex-col gap-[2.8px] h-full inset-y-[0] items-center justify-start my-auto p-[5.6px] right-[34%] rounded-lg shadow-bs6 w-[120px]">
                    <Text
                      className="bg-gray-100 justify-center pl-2 sm:pr-5 pr-[35px] py-[5px] rounded-[5px] text-[8.4px] text-black-900 tracking-[-0.17px] w-full"
                      size="txtInterMedium84"
                    >
                      Image
                    </Text>
                    <div className="flex flex-col items-center justify-start px-[8.4px] py-[5.6px] w-full">
                      <Text
                        className="text-[8.4px] text-gray-600 tracking-[-0.17px] w-auto"
                        size="txtInterMedium84Gray600"
                      >
                        Table
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="bg-black-900_19 h-px mt-1.5 w-full" />
                <div className="bg-gray-50 flex sm:flex-col flex-row font-poppins sm:gap-5 items-start justify-start mt-[5px] rounded-[15px] w-[94%] md:w-full">
                  <Text
                    className="ml-16 sm:ml-[0] sm:mt-0 mt-[5px] text-black-900 text-center text-xs"
                    size="txtPoppinsRegular12"
                  >
                    Line
                  </Text>
                  <Text
                    className="ml-32 sm:ml-[0] sm:mt-0 mt-1.5 text-black-900 text-center text-xs"
                    size="txtPoppinsRegular12"
                  >
                    Dot
                  </Text>
                  <div className="flex h-6 md:h-[26px] justify-end sm:ml-[0] ml-[87px] sm:mt-0 mt-0.5 relative w-[16%] sm:w-full">
                    <Text
                      className="mb-0.5 mt-auto mx-auto text-black-900 text-center text-xs"
                      size="txtPoppinsRegular12"
                    >
                      Blank
                    </Text>
                    <div className="absolute bg-black-900_0c h-6 inset-[0] justify-center m-auto rounded w-full"></div>
                  </div>
                  <Text
                    className="sm:ml-[0] ml-[83px] sm:mt-0 mt-[5px] text-black-900 text-center text-xs"
                    size="txtPoppinsRegular12"
                  >
                    Grid
                  </Text>
                </div>
                <Line className="bg-black-900_19 h-px mt-[7px] w-full" />
              </div>
            </div>
          </div>
          <div className="absolute bg-white-A700 border-black-900_19 border-l border-solid border-t bottom-[0] flex flex-col font-poppins items-center justify-start left-[6%] p-[15px] w-[43%]">
            <div className="flex flex-col items-end justify-start mb-[236px] w-[99%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-end w-[96%] md:w-full">
                <Text
                  className="text-black-900 text-lg"
                  size="txtPoppinsRegular18"
                >
                  Recently edited nodes
                </Text>
                <Img
                  className="h-3 md:h-auto mb-1 sm:ml-[0] ml-[278px] sm:mt-0 mt-2.5 object-cover w-3"
                  src="images/img_plusmath_12x12.png"
                  alt="plusmath_One"
                />
                <Text
                  className="ml-1 sm:ml-[0] sm:mt-0 mt-[5px] text-gray-600 text-right text-sm"
                  size="txtPoppinsRegular14Gray600"
                >
                  Search
                </Text>
              </div>
              <Line className="bg-black-900_19 h-px mr-1 w-full" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-[0] flex flex-col items-center justify-end left-[9%] md:px-5 w-[35%]">
          <div className="flex flex-col gap-1.5 justify-start w-full">
            <div className="flex sm:flex-col flex-row gap-[30px] items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col items-center justify-start w-[30%] sm:w-full">
                <div className="md:h-[190px] h-[191px] relative w-full">
                  <div className="bg-indigo-900 border border-solid border-white-A700 h-[190px] m-auto rounded-[14px] shadow-bs7 w-full"></div>
                  <div className="absolute flex flex-col gap-[13px] inset-x-[0] items-center justify-start mx-auto top-[8%] w-[76%]">
                    <div className="flex flex-col gap-[26px] items-center justify-start w-3/5 md:w-full">
                      <Text
                        className="text-[12.83px] text-center text-white-A700"
                        size="txtPoppinsRegular1283"
                      >
                        Web node
                      </Text>
                      <Img
                        className="h-[74px] md:h-auto object-cover"
                        src="images/img_vector.png"
                        alt="vector"
                      />
                    </div>
                    <div className="h-[15px] relative w-full">
                      <Text
                        className="m-auto text-[9.98px] text-center text-white-A700"
                        size="txtPoppinsRegular998"
                      >
                        Biology cells are weird
                      </Text>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-[9.98px] text-center text-white-A700 w-max"
                        size="txtPoppinsRegular998"
                      >
                        Biology cells are weird
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-[30px] grid grid-cols-2 justify-start w-auto"
                orientation="horizontal"
              >
                <div className="bg-blue_gray-50_4c border border-solid border-white-A700 flex flex-col gap-[13px] items-center justify-start p-4 rounded-[14px] shadow-bs8 w-full">
                  <div className="flex flex-col gap-[26px] items-center justify-start w-[59%] md:w-full">
                    <Text
                      className="text-[12.83px] text-black-900 text-center"
                      size="txtPoppinsRegular1283Black900"
                    >
                      Note node
                    </Text>
                    <Img
                      className="h-[75px] md:h-auto object-cover"
                      src="images/img_vector.png"
                      alt="vector"
                    />
                  </div>
                  <Text
                    className="mb-[7px] text-[9.98px] text-black-900 text-center"
                    size="txtPoppinsRegular998Black900"
                  >
                    Biology cells are weird
                  </Text>
                </div>
                <div className="bg-blue_gray-50_4c border border-solid border-white-A700 flex flex-col gap-[13px] items-center justify-start p-4 rounded-[14px] shadow-bs8 w-full">
                  <div className="flex flex-col gap-[26px] items-center justify-start w-[59%] md:w-full">
                    <Text
                      className="text-[12.83px] text-black-900 text-center"
                      size="txtPoppinsRegular1283Black900"
                    >
                      Note node
                    </Text>
                    <Img
                      className="h-[75px] md:h-auto object-cover"
                      src="images/img_vector.png"
                      alt="vector"
                    />
                  </div>
                  <Text
                    className="mb-[7px] text-[9.98px] text-black-900 text-center"
                    size="txtPoppinsRegular998Black900"
                  >
                    Biology cells are weird
                  </Text>
                </div>
              </List>
            </div>
            <div className="flex flex-row gap-[19px] items-center justify-end md:ml-[0] ml-[166px] w-[63%] md:w-full">
              <div className="bg-blue_gray-50_4c border border-solid border-white-A700 flex flex-col items-center justify-start p-2 rounded-[14px] shadow-bs8 w-[47%]">
                <Text
                  className="leading-[21.00px] text-[12.83px] text-black-900 text-center w-[90%] sm:w-full"
                  size="txtPoppinsRegular1283Black900"
                >
                  Note node
                </Text>
                <Img
                  className="h-[75px] md:h-auto mt-[17px] object-cover"
                  src="images/img_vector.png"
                  alt="vector_One"
                />
                <Text
                  className="leading-[14.00px] mb-[5px] text-[9.98px] text-black-900 text-center w-[90%] sm:w-full"
                  size="txtPoppinsRegular998Black900"
                >
                  Biology cells are weird
                </Text>
              </div>
              <div className="bg-blue_gray-50_4c border border-solid border-white-A700 flex flex-col items-center justify-start p-2 rounded-[14px] shadow-bs8 w-[47%]">
                <Text
                  className="leading-[21.00px] text-[12.83px] text-black-900 text-center w-[90%] sm:w-full"
                  size="txtPoppinsRegular1283Black900"
                >
                  Note node
                </Text>
                <Img
                  className="h-[75px] md:h-auto mt-[17px] object-cover"
                  src="images/img_vector.png"
                  alt="vector_Two"
                />
                <Text
                  className="leading-[14.00px] mb-[5px] text-[9.98px] text-black-900 text-center w-[90%] sm:w-full"
                  size="txtPoppinsRegular998Black900"
                >
                  Biology cells are weird
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameTwentySevenPage;
