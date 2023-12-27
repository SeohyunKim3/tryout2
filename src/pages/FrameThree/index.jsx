import React from "react";

import { Button, Img, Line, List, SelectBox, Text } from "components";
import FrameThreeColumnOne from "components/FrameThreeColumnOne";
import FrameThreeRoulette from "components/FrameThreeRoulette";

const linkOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const settingsOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const FrameThreePage = () => {
  return (
    <>
      <div className="bg-gray-100 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-10 md:gap-10 gap-[111px] items-center mx-auto pr-2.5 py-2.5 w-full">
        <FrameThreeColumnOne className="bg-white-A700 border-black-900_19 border-r border-solid flex flex-col gap-6 h-[920px] md:h-auto items-start justify-start p-6 md:px-5 rounded-[12px] w-64" />
        <FrameThreeRoulette className="font-poppins sm:h-[1012px] h-[458px] md:h-[733px] mr-[357px] md:px-5 relative w-1/2 md:w-full" />
      </div>
    </>
  );
};

export default FrameThreePage;
