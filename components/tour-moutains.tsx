"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ElementRef, useRef, useState } from "react";
const TourMoutains = () => {
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
    <div ref={containerRef} onWheel={handleScroll} className=" h-full w-full">
      <div
        className={cn(
          "relative w-[50%] -translate-y-[20%] h-full  transition-all duration-1000",
          !isScroll && "mt-2"
        )}
      >
        <Image
          src="/home-tour-left.png"
          alt="home-tour-left"
          fill
          className="p-3"
        />
      </div>
      <div
        className={cn(
          "relative -translate-y-[80%] w-[60%] ml-auto h-full transition-all duration-1000",
          !isScroll && "mt-2"
        )}
      >
        <Image
          src="/home-tour-right.png"
          alt="home-tour-right"
          fill
          className="p-3"
        />
      </div>
    </div>
  );
};

export default TourMoutains;
