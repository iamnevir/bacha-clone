"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ElementRef, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Section } from "./section";
const TourSection = () => {
  const containerRef = useRef<ElementRef<"div">>(null);
  const [isScroll, setIsScroll] = useState(false);
  const handleScroll = (event: React.WheelEvent) => {
    const nextY = event.deltaY;
    if (nextY < 0) {
      setIsScroll(true);
    }
    if (nextY > 0) {
      setIsScroll(false);
    }
  };
  return (
    <div
      onWheel={handleScroll}
      ref={containerRef}
      className="bg-bg-bacha-3 z-[10] flex items-center justify-center translate-y-[20%]  h-full w-full"
    >
      <div className="flex items-center justify-center ">
        <div className="flex flex-col translate-y-10 translate-x-10 ml-[5%] w-[900px] h-full gap-3 ">
          <div className="flex items-center gap-x-3">
            <span className=" text-[18px] font-semibold font-sans">Tour</span>
            <Image
              className=" rotate-180"
              alt="ten-phai"
              height={18}
              width={40}
              src="/ten.png"
            />
          </div>

          <h1 className=" text-[30px] font-sans font-bold text-[#014f2e] uppercase">
            DU LỊCH BẮC HÀ VỚI NHỮNG
            <br /> PHIÊN CHỢ VÙNG CAO
          </h1>
          <p className="text-start mt-3">
            Chương trình du lịch Bắc Hà với những phiên chợ vùng cao
            <br /> không đơn thuần là một tour chỉ đi đến các chợ mà nó được
            thiết
            <br /> kế phù hợp theo những phiên chợ mỗi ngày trên địa bàn huyện
            <br /> Bắc Hà. Bên cạnh đó, du khách sẽ có cơ hội được trải nghiệm,
            <br />
            khám phá, tìm hiểu về cuộc sống, cảnh đẹp và con người Bắc Hà.
          </p>
          <div className=" rounded-full w-[174px] h-[51px] group items-center justify-center border-2 px-1 pt-1 border-[#D9A126] hover:border-[#014F2E] transition-all duration-500">
            <Link href="https://www.bachatourism.com/tour/">
              <Button className="group-hover:bg-[#014F2E] w-full bg-[#D9A126] text-black/80 group-hover:text-white font-semibold  transition-all duration-500 text-xs uppercase rounded-full">
                Xem tất cả
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center w-full h-full -translate-x-[150px]">
          <div
            className={cn(
              `relative w-[320px] h-[350px] items-center justify-center flex  -rotate-6 transition-all duration-1000`,
              !isScroll && "-translate-y-5 translate-x-3"
            )}
          >
            <Image src="/stamp.png" fill alt="stamp-1" />
            <div className=" fixed w-[90%] h-[90%]">
              <Image
                src="/IMG_8356.jpg"
                alt="children-stamp-1"
                fill
                className="p-3"
              />
            </div>
          </div>

          <div
            className={`relative w-[370px] h-[410px] items-center justify-center flex rotate-12 ml-[70%] -translate-y-12 transition-all duration-1000 ${
              !isScroll && "-translate-y-2 translate-x-5"
            }`}
          >
            <Image src="/stamp.png" fill alt="stamp-1" />
            <div className="fixed  w-[90%] h-[90%]">
              <Image
                src="/20191223_171243.jpg"
                alt="children-stamp-1"
                fill
                className="p-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourSection;
