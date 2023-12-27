import React from "react";

import { Button, Img, List, Text } from "components";

const FrameThreeRoulette = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute backdrop-opacity-[0.5] bg-gradient  blur-[90.00px] h-[142px] right-[33%] rounded-[50%] top-[21%] w-[142px]"></div>
        <div
          className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto p-8 sm:px-5 w-full"
          style={{ backgroundImage: "url('images/img_group1.svg')" }}
        >
          <div className="flex flex-col gap-[37px] items-center justify-start mb-[27px] mt-0.5 w-full">
            <List
              className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
              orientation="horizontal"
            >
              <div className="bg-blue_gray-50_4c hover:border border hover:border-solid border-solid hover:border-white-A700 border-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-start sm:ml-[0] hover:mx-0 p-[23px] sm:px-5 rounded-[20px] hover:shadow-bs4 shadow-bs4 hover:w-full w-full">
                <Text
                  className="mt-0.5 text-black-900 text-center text-lg"
                  size="txtPoppinsRegular18"
                >
                  {props?.durationone}
                </Text>
                <Img
                  className="h-[105px] md:h-auto mt-[35px] object-cover"
                  src="images/img_vector.png"
                  alt="vector"
                />
                <Text
                  className="mb-2.5 mt-[17px] text-black-900 text-center text-sm"
                  size="txtPoppinsRegular14"
                >
                  {props?.biologycellsone}
                </Text>
              </div>
              <div className="hover:border hover:border-solid hover:border-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-start sm:ml-[0] hover:mx-0 hover:shadow-bs4 hover:w-full w-full">
                <div className="bg-blue_gray-50_4c border border-solid border-white-A700 flex flex-col items-center justify-start p-[17px] rounded-[20px] shadow-bs4 w-full">
                  <Text
                    className="mt-[9px] text-black-900 text-center text-lg"
                    size="txtPoppinsRegular18"
                  >
                    {props?.durationtwo}
                  </Text>
                  <Img
                    className="h-[111px] md:h-auto mt-[33px] object-cover"
                    src="images/img_vector.png"
                    alt="vector"
                  />
                  <Text
                    className="mb-4 mt-[13px] text-black-900 text-center text-sm"
                    size="txtPoppinsRegular14"
                  >
                    {props?.chemistrycells}
                  </Text>
                </div>
              </div>
              <div className="hover:border hover:border-solid hover:border-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-start sm:ml-[0] hover:mx-0 hover:shadow-bs4 hover:w-full w-full">
                <div className="bg-blue_gray-50_4c border border-solid border-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 rounded-[20px] shadow-bs4 w-full">
                  <Text
                    className="text-black-900 text-center text-lg"
                    size="txtPoppinsRegular18"
                  >
                    {props?.durationthree}
                  </Text>
                  <Img
                    className="h-[95px] md:h-auto mt-10 object-cover"
                    src="images/img_vector.png"
                    alt="vector"
                  />
                  <Text
                    className="mb-[7px] mt-[22px] text-black-900 text-center text-sm"
                    size="txtPoppinsRegular14"
                  >
                    {props?.physicsiseven}
                  </Text>
                </div>
              </div>
            </List>
            <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-row sm:gap-10 items-center justify-between md:pl-10 pl-14 sm:pl-5 rounded-bl-[31px] rounded-br-[30px] rounded-tl-[31px] rounded-tr-[30px] shadow-bs w-[89%] md:w-full">
              <Text
                className="text-black-900 text-center text-lg"
                size="txtPoppinsRegular18"
              >
                {props?.typeyourknowledge}
              </Text>
              <Button
                className="!text-white-A700 cursor-pointer font-poppins min-w-[132px] text-center text-lg"
                shape="round"
                color="indigo_900"
                size="sm"
                variant="fill"
              >
                {props?.rotatebutton}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

FrameThreeRoulette.defaultProps = {
  durationone: "3 hours ago",
  biologycellsone: "Biology cells are weird",
  durationtwo: "2 days ago",
  chemistrycells: "Chemistry cells are also",
  durationthree: "6 days ago",
  physicsiseven: "Physics is even worse",
  typeyourknowledge: "Type your knowledge...",
  rotatebutton: "Rotate",
};

export default FrameThreeRoulette;
