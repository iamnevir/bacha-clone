"use client";
import { Carousel } from "@material-tailwind/react";
import { CarouselItem } from "./carouselItem";

export const CarouselTour = () => {
  const CarouselData = [
    {
      src: "/carousel/BH-Den-bac-ha.jpg",
      alt: "BH-Den-bac-ha",
      text: "Đền Bắc Hà",
    },
    {
      src: "/carousel/bh-dinhhoangatuong-3.jpg",
      alt: "bh-dinhhoangatuong-3",
      text: "Dinh Hoàng A Tưởng",
    },
    {
      src: "/carousel/BH-phaodai-1.jpg",
      alt: "BH-phaodai-1",
      text: "Pháo Đài Bắc Hà",
    },
    {
      src: "/carousel/BH-thacsonglam-1.jpg",
      alt: "BH-thacsonglam-1",
      text: "Thác Sông Lẫm",
    },
    {
      src: "/carousel/BH-Tour_Simacai-3.jpg",
      alt: "BH-Tour_Simacai-3",
      text: "Cung Đường Simacai",
    },
    {
      src: "/carousel/BH-mua-san-may-4.jpg",
      alt: "BH-mua-san-may-4",
      text: "Săn Mây ở Bắc Hà",
    },
    {
      src: "/carousel/BH-thunglunghoa.jpg",
      alt: "BH-thunglunghoa",
      text: "Thung Lũng Hoa",
    },
    {
      src: "/carousel/BH-Rosefarm-1.jpg",
      alt: "BH-Rosefarm-1",
      text: "Trang Trại Hoa Hồng",
    },
  ];
  return (
    <Carousel className="rounded-xl">
      {CarouselData.map((carousel) => (
        <CarouselItem
          src={carousel.src}
          alt={carousel.alt}
          text={carousel.text}
        />
      ))}
    </Carousel>
  );
};
