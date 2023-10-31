"use client";
import Image from "next/image";
import { LuuTruIcon } from "./svg/luu_tru";
import { useState } from "react";
export const CamNangItem = ({
  text,
  src,
}: {
  text: string;
  src: ({ color }: { color: string }) => JSX.Element;
}) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="  w-[190px] h-[165px] gap-y-2 border-dotted border-[1.5px] border-gray-500"
    >
      <div className="relative flex flex-col items-center w-[90%] h-[90%] m-3">
        {src({ color: isMouseOver ? "#014F2E" : "#3f3636" })}
        <span className=" text-[13px] absolute uppercase bottom-0 font-semibold text-[#014F2E]">
          {text}
        </span>
      </div>
    </div>
  );
};
