import React from "react";

import { Button, Img, List, Text } from "components";
import FrameTenColumnOne from "components/FrameTenColumnOne";
import FrameThreeRoulette from "components/FrameThreeRoulette";

const FrameTenPage = () => {
  return (
    <>
      <div className="bg-gray-100 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-10 md:gap-10 gap-[275px] items-center mx-auto pr-2 py-2 w-full">
        <FrameTenColumnOne className="bg-white-A700 border-black-900_19 border-r border-solid flex flex-col gap-6 h-[920px] md:h-auto items-start justify-start md:mt-0 mt-1 p-6 md:px-5 rounded-[12px] w-[92px]" />
        <FrameThreeRoulette className="font-poppins sm:h-[1012px] h-[458px] md:h-[733px] mr-[359px] md:px-5 relative w-1/2 md:w-full" />
      </div>
    </>
  );
};

export default FrameTenPage;
