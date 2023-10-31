"use client";

import { Compass, FacebookIcon, Search, Youtube } from "lucide-react";
import Image from "next/image";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { Categories } from "./categories";
import { cn } from "@/lib/utils";
import { ElementRef, useRef, useState } from "react";

export const Navbar = ({ isScroll }: { isScroll: boolean }) => {
  const hotline = "02143 880 243";

  return (
    <div
      className={cn(
        "w-full bg-white justify-between pb-5 transition-opacity duration-1000 ",
        !isScroll ? "opacity-0 bg-transparent" : "opacity-100"
      )}
    >
      <div className="flex items-start px-[90px]  w-full">
        <Image
          className="ml-[60px] mt-6"
          src="/Logo-du-lich-Bac-Ha.jpg"
          alt="Logo-du-lich-Bac-Ha"
          width={91}
          height={91}
        />
        <div className="flex flex-col divide-dotted divide-black/40 divide-y-2 w-full ml-12 pr-[70px] gap-y-3 mt-3">
          <div className="flex justify-between items-center">
            <div className="ml-2 flex items-center">
              <Search className="h-4 w-4 mr-1" />
              <input
                className=" placeholder:text-[13px] input-search placeholder:text-black/70 hover:opacity-70 focus:opacity-70"
                placeholder="Tìm kiếm thông tin...."
              />
            </div>
            <div className="items-center flex gap-x-5">
              <Link href="https://map.bachatourism.com/">
                <div className="bg-[#D9A126] flex items-center group">
                  <Compass className="group-hover:text-white h-5 w-5 ml-3 transition duration-300" />
                  <span className="text-black group-hover:text-white py-2 pr-3 pl-1 transition duration-300 text-[11px] font-semibold">
                    Bản Đồ Du Lịch
                  </span>
                </div>
              </Link>
              <Separator orientation="vertical" className="bg-gray-600 h-7" />
              <div className=" items-center flex">
                <span className="text-sm font-semibold">HOTLINE:</span>
                <div className="flex items-start flex-col group">
                  <span className="ml-1 text-sm font-semibold cursor-pointer">
                    {hotline}
                  </span>
                  <div className=" bg-black h-[1px] ml-1 w-0  group-hover:w-full transition-all duration-500" />
                </div>
              </div>
              <Separator orientation="vertical" className="bg-gray-600 h-7" />
              <div className=" items-center flex gap-x-2">
                <Link href="https://www.facebook.com/groups/2788584197919525">
                  <div className=" border hover:border-[#D9A126] border-gray-800 rounded-full group transition duration-500">
                    <FacebookIcon className="w-4 h-4 m-1 group-hover:text-[#D9A126] transition duration-500" />
                  </div>
                </Link>
                <Link href="https://www.youtube.com/channel/UCxmxuO48jV6uZoizbovlP3w">
                  <div className=" border hover:border-[#D9A126] border-gray-800 rounded-full group transition duration-500">
                    <Youtube className="w-4 h-4 m-1 group-hover:text-[#D9A126] transition duration-500" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="pt-[25px]">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};
