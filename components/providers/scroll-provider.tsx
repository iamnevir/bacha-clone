"use client";

import { ElementRef, useRef, useState } from "react";
import { Navbar } from "../navbar";

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
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
    <div ref={containerRef} onWheel={handleScroll} className="">
      <Navbar isScroll={isScroll} />
      {children}
    </div>
  );
};
