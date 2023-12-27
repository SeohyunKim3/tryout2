import React from "react";

import { Button, Img, List, Text } from "components";

const FrameFourRoulette = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute backdrop-opacity-[0.5] bg-gradient  blur-[90.00px] h-[142px] right-[33%] rounded-[87px] top-[21%] w-[21%]"></div>
        <div className="absolute bg-white-A700 border border-solid border-white-A700 flex flex-col h-full inset-[0] items-center justify-start m-auto rounded-[30px] shadow-bs5 w-auto md:w-full">
          <div className="flex flex-col gap-[27px] justify-start w-[97%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
              <div className="flex relative w-[41%] md:w-full">
                <div className="flex flex-col items-center justify-start ml-[undefinedpx] my-auto p-2.5 w-auto z-[1]">
                  <div className="bg-blue_gray-50_4c border border-solid border-white-A700 flex flex-col gap-[13px] h-[267px] md:h-auto items-center justify-start px-[15px] py-3 rounded-[20px] shadow-bs4 w-[157px]">
                    <Text
                      className="text-black-900 text-center text-lg w-[107px]"
                      size="txtPoppinsRegular18"
                    >
                      {props?.duration}
                    </Text>
                    <Img
                      className="h-[105px] md:h-auto object-cover w-[66px] sm:w-full"
                      src="images/img_vector.png"
                      alt="vector"
                    />
                    <Text
                      className="leading-[20.00px] max-w-[125px] md:max-w-full text-black-900 text-center text-sm"
                      size="txtPoppinsRegular14"
                    >
                      {props?.biologycellsareOne}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start ml-[-7.62px] my-auto px-2.5 w-auto z-[1]">
                  <div className="bg-blue_gray-50_4c border border-solid border-white-A700 flex flex-col items-center justify-end p-2.5 rounded-[20px] shadow-bs4 w-full">
                    <Text
                      className="mt-[15px] text-black-900 text-center text-lg"
                      size="txtPoppinsRegular18"
                    >
                      {props?.durationOne}
                    </Text>
                    <Img
                      className="h-[111px] md:h-auto mt-[33px] object-cover"
                      src="images/img_vector.png"
                      alt="vector_One"
                    />
                    <Text
                      className="leading-[20.00px] mb-[9px] text-black-900 text-center text-sm w-[98%] sm:w-full"
                      size="txtPoppinsRegular14"
                    >
                      {props?.chemistrycells}
                    </Text>
                  </div>
                </div>
              </div>
              <List
                className="md:flex-1 sm:flex-col flex-row gap-3 grid sm:grid-cols-1 grid-cols-3 w-[59%] md:w-full"
                orientation="horizontal"
              >
                <div className="hover:border hover:border-solid hover:border-white-A700 hover:cursor-pointer flex flex-col items-start justify-start hover:shadow-bs4 w-auto hover:w-full">
                  <div className="bg-blue_gray-50_4c border border-solid border-white-A700 flex flex-col items-center justify-end p-2.5 rounded-[20px] shadow-bs4 w-full">
                    <Text
                      className="mt-[15px] text-black-900 text-center text-lg"
                      size="txtPoppinsRegular18"
                    >
                      {props?.duration1}
                    </Text>
                    <Img
                      className="h-[95px] md:h-auto mt-10 object-cover"
                      src="images/img_vector.png"
                      alt="vector"
                    />
                    <Text
                      className="leading-[20.00px] mb-[9px] mt-[5px] text-black-900 text-center text-sm w-[98%] sm:w-full"
                      size="txtPoppinsRegular14"
                    >
                      {props?.physicsiseven}
                    </Text>
                  </div>
                </div>
                <div className="hover:border hover:border-solid hover:border-white-A700 hover:cursor-pointer flex flex-col items-center justify-start hover:shadow-bs4 hover:w-full w-full">
                  <div className="bg-blue_gray-50_4c border border-solid border-white-A700 flex flex-col items-center justify-end p-2.5 rounded-[20px] shadow-bs4 w-full">
                    <Text
                      className="mt-[15px] text-black-900 text-center text-lg"
                      size="txtPoppinsRegular18"
                    >
                      {props?.duration2}
                    </Text>
                    <Img
                      className="h-[111px] md:h-auto mt-[33px] object-cover"
                      src="images/img_vector.png"
                      alt="vector"
                    />
                    <Text
                      className="leading-[20.00px] mb-[9px] text-black-900 text-center text-sm w-[98%] sm:w-full"
                      size="txtPoppinsRegular14"
                    >
                      {props?.chemistrycells1}
                    </Text>
                  </div>
                </div>
                <div className="bg-blue_gray-50_4c hover:border border hover:border-solid border-solid hover:border-white-A700 border-white-A700 hover:cursor-pointer flex flex-col items-center justify-end p-2.5 rounded-[20px] hover:shadow-bs4 shadow-bs4 hover:w-full w-full">
                  <Text
                    className="mt-[15px] text-black-900 text-center text-lg"
                    size="txtPoppinsRegular18"
                  >
                    {props?.duration3}
                  </Text>
                  <Img
                    className="h-[95px] md:h-auto mt-10 object-cover"
                    src="images/img_vector.png"
                    alt="vector"
                  />
                  <Text
                    className="leading-[20.00px] mb-[9px] mt-[5px] text-black-900 text-center text-sm w-[98%] sm:w-full"
                    size="txtPoppinsRegular14"
                  >
                    {props?.physicsiseven1}
                  </Text>
                </div>
              </List>
            </div>
            <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[163px] mr-[116px] md:pl-10 pl-14 sm:pl-5 rounded-bl-[31px] rounded-br-[30px] rounded-tl-[31px] rounded-tr-[30px] shadow-bs w-[67%] md:w-full">
              <Text
                className="text-black-900 text-center text-lg"
                size="txtPoppinsRegular18"
              >
                {props?.typeyourknowledOne}
              </Text>
              <Button
                className="!text-white-A700 cursor-pointer font-poppins min-w-[132px] text-center text-lg"
                shape="round"
                color="indigo_900"
                size="sm"
                variant="fill"
              >
                {props?.rotate}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

FrameFourRoulette.defaultProps = {
  duration: "3 hours ago",
  biologycellsareOne: "Biology cells are weird",
  durationOne: "2 days ago",
  chemistrycells: "Chemistry cells are also",
  duration1: "6 days ago",
  physicsiseven: "Physics is even worse",
  duration2: "2 days ago",
  chemistrycells1: "Chemistry cells are also",
  duration3: "6 days ago",
  physicsiseven1: "Physics is even worse",
  typeyourknowledOne: "Type your knowledge...",
  rotate: "Rotate",
};

export default FrameFourRoulette;
