import React from "react";

import { Button, Img, Input, Line, SelectBox, Text } from "components";

const settingsOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const FrameEightColumnOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-6 items-start justify-start w-full">
          <div className="flex flex-row gap-2.5 items-center justify-between w-full">
            <div className="flex flex-row gap-3 items-center justify-start w-52">
              <div className="flex flex-col items-center justify-start w-auto">
                <Img
                  className="h-[43px] md:h-auto object-cover rounded-bl-[18px] rounded-br-[18px] w-[37px]"
                  src="images/img_image2.png"
                  alt="imageTwo"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                <Text
                  className="text-[10px] text-gray-600 tracking-[0.40px] uppercase w-full"
                  size="txtInterMedium10"
                >
                  {props?.overline}
                </Text>
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtInterMedium14"
                >
                  {props?.title}
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col items-start justify-start mb-[5px] mt-2.5 p-1.5 rounded-[7px] w-auto">
              <Img
                className="h-[9px]"
                src="images/img_union_black_900.svg"
                alt="union"
              />
            </div>
          </div>
          <Line className="bg-gray-100 h-0.5 rounded-[1px] w-[90%]" />
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <div className="flex flex-col items-start justify-start px-3 w-full">
              <Text
                className="text-[10px] text-gray-600 tracking-[0.40px] uppercase w-auto"
                size="txtInterMedium10"
              >
                {props?.overlineOne}
              </Text>
            </div>
            <Input
              name="link"
              placeholder="Dashboard"
              className="!placeholder:text-black-900 !text-black-900 font-inter font-medium p-0 text-left text-sm tracking-[-0.28px] w-full"
              wrapClassName="flex rounded-lg w-full"
              prefix={
                <Img
                  className="h-5 mr-3 my-auto"
                  src="images/img_icon_homesimpledoor_black_900.svg"
                  alt="Icon / Home-simple-door"
                />
              }
              color="gray_100"
              size="xs"
              variant="fill"
            ></Input>
            <div className="flex flex-row gap-3 items-center justify-start px-3 py-2.5 w-full">
              <Img
                className="h-5 w-5"
                src="images/img_iconuser1.svg"
                alt="iconuserOne"
              />
              <Text
                className="flex-1 text-gray-600 text-sm tracking-[-0.28px] w-auto"
                size="txtInterMedium14Gray600"
              >
                {props?.label}
              </Text>
            </div>
            <Button
              className="bg-transparent cursor-pointer flex items-center justify-center min-w-[208px]"
              leftIcon={
                <Img
                  className="h-5 mr-3"
                  src="images/img_file_gray_600.svg"
                  alt="file"
                />
              }
              size="xs"
            >
              <div className="font-inter font-medium text-gray-600 text-left text-sm tracking-[-0.28px]">
                {props?.notes}
              </div>
            </Button>
            <div className="flex flex-row gap-3 items-center justify-start px-3 py-2.5 w-full">
              <Img
                className="h-5 w-5"
                src="images/img_iconcalendar.svg"
                alt="iconcalendar"
              />
              <Text
                className="flex-1 text-gray-600 text-sm tracking-[-0.28px] w-auto"
                size="txtInterMedium14Gray600"
              >
                {props?.labelOne}
              </Text>
            </div>
            <div className="flex flex-col items-end justify-start w-full">
              <div className="flex flex-row gap-3 items-center justify-start px-3 py-2.5 w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_iconreports.svg"
                  alt="iconreports"
                />
                <Text
                  className="flex-1 text-gray-600 text-sm tracking-[-0.28px] w-auto"
                  size="txtInterMedium14Gray600"
                >
                  {props?.labelTwo}
                </Text>
              </div>
            </div>
          </div>
          <Line className="bg-gray-100 h-0.5 rounded-[1px] w-[90%]" />
          <div className="flex flex-col gap-2 h-full items-start justify-start w-full">
            <div className="flex flex-col items-start justify-start px-3 w-full">
              <Text
                className="text-[10px] text-gray-600 tracking-[0.40px] uppercase w-auto"
                size="txtInterMedium10"
              >
                {props?.overlineTwo}
              </Text>
            </div>
            <div className="flex flex-row gap-3 items-center justify-start px-3 py-2.5 w-full">
              <Img
                className="h-5 w-5"
                src="images/img_iconsettings.svg"
                alt="iconsettings"
              />
              <SelectBox
                className="sm:flex-1 font-inter font-medium text-gray-600 text-left text-sm tracking-[-0.28px] w-[83%] sm:w-full"
                placeholderClassName="text-gray-600"
                indicator={
                  <Img
                    className="h-4 mr-[0] w-4"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="groupThirtyEight"
                options={settingsOptionsList}
                isSearchable={false}
                placeholder="Settings"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <div className="flex flex-row gap-3 items-center justify-start px-3 py-2.5 w-full">
              <Img
                className="h-5 w-5"
                src="images/img_iconhelpcircle.svg"
                alt="iconhelpcircle"
              />
              <Text
                className="flex-1 text-gray-600 text-sm tracking-[-0.28px] w-auto"
                size="txtInterMedium14Gray600"
              >
                {props?.labelThree}
              </Text>
            </div>
            <div className="flex flex-row gap-3 items-center justify-start px-3 py-2.5 w-full">
              <Img
                className="h-5 w-5"
                src="images/img_iconlogout.svg"
                alt="iconlogout"
              />
              <Text
                className="flex-1 text-red-400 text-sm tracking-[-0.28px] w-auto"
                size="txtInterMedium14Red400"
              >
                {props?.labelFour}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

FrameEightColumnOne.defaultProps = {
  overline: "creative designer",
  title: "Seohyun Kim",
  overlineOne: "Main",
  label: "Community",
  notes: "Notes",
  labelOne: "Canvas",
  labelTwo: "View stats",
  overlineTwo: "Settings",
  labelThree: "Help",
  labelFour: "Logout Account",
};

export default FrameEightColumnOne;
