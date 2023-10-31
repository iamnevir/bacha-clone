"use client";

import Image from "next/image";
import { ElementRef, useEffect, useRef, useState } from "react";
export const Play = () => {
  const containerRef = useRef<ElementRef<"div">>(null);
  const boxRef = useRef<ElementRef<"div">>(null);

  const handleMouseMove = (event: MouseEvent) => {
    event.stopPropagation();
    const nextX = event.pageX;
    const nextY = event.pageY;

    if (boxRef.current && containerRef.current) {
      boxRef.current.style.setProperty(
        "left",
        `${-(containerRef.current.offsetWidth / 1.3 - nextX)}px`
      );
      boxRef.current.style.setProperty(
        "top",
        `${-(containerRef.current.offsetHeight / 1.28 - nextY)}px`
      );
    }
  };

  useEffect(() => {
    const divElement = containerRef.current;
    if (divElement) {
      divElement.addEventListener("mousemove", handleMouseMove);

      return () => {
        divElement.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);
  return (
    <div className="flex group hover:zoom-in-50  items-center justify-center  -translate-y-[40%] w-full z-[50] h-full">
      <Image alt="banner-1" fill src="/banner-bg-tiny.png" />

      <div
        ref={containerRef}
        className=" relative flex items-center justify-center w-[65%] h-[80%] mt-[37%] z-[60] border-[8px] border-white rounded-md"
      >
        <Image
          alt="keoco"
          className="rounded-md bg-cover "
          fill
          src="/BH-keoco.jpg"
        />
        <div
          ref={boxRef}
          className=" relative transition-all duration-1000 ease-in-out  flex items-center w-[10%] h-[17%]"
        >
          <Image alt="play" fill src="/play.png" />
        </div>
      </div>
    </div>
  );
};
