"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ElementRef, useRef, useState } from "react";

export const InfoSection = () => {
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
      ref={containerRef}
      onWheel={handleScroll}
      className={cn(
        " w-full h-full flex items-center z-0 translate-y-[5%] transition-all duration-1000",
        isScroll && "mt-4"
      )}
    >
      <Image
        src="/home-guide-bg.png"
        width={1470}
        height={1050}
        alt="home-guide-bg"
        className="z-0"
      />
    </div>
  );
};
