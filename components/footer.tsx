import { FacebookIcon, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CategoryData } from "./categories";

export const Footer = () => {
  return (
    <div className=" w-full h-full flex items-center relative ">
      <Image src="/background-footer.png" fill alt="bg-footer" />
      <div className="flex items-center absolute w-full h-full gap-x-10 pl-[10%]">
        <div className="flex flex-col gap-y-5  -translate-y-[60%]">
          <div className="relative">
            <Image src="/logo-ft.png" alt="hehe" height={90} width={132} />
          </div>
          <div className=" items-center flex gap-x-2">
            <Link href="https://www.facebook.com/groups/2788584197919525">
              <div className=" border hover:border-[#D9A126] border-gray-800 rounded-full group transition duration-500">
                <FacebookIcon className="w-5 h-5 m-1 group-hover:text-[#D9A126] transition duration-500" />
              </div>
            </Link>
            <Link href="https://www.youtube.com/channel/UCxmxuO48jV6uZoizbovlP3w">
              <div className=" border hover:border-[#D9A126] border-gray-800 rounded-full group transition duration-500">
                <Youtube className="w-5 h-5 m-1 group-hover:text-[#D9A126] transition duration-500" />
              </div>
            </Link>
          </div>
        </div>
        <div className=" flex flex-col divide-y-2 divide-dotted divide-gray-600 translate-x-[15%] gap-y-6 translate-y-[17%]">
          <div className=" flex items-start gap-x-20">
            <div className=" flex flex-col leading-8">
              <span className=" text-[#014F2E] font-semibold">
                Phòng VH & TT huyện Bắc Hà:
              </span>
              <span>
                Người chịu trách nhiệm:
                <br /> Ông Bùi Văn Vinh – Trưởng phòng
                <br /> Điện thoại:{" "}
                <span className="text-[#014F2E] font-semibold underline hover:no-underline">
                  0943 283 978
                </span>{" "}
                -{" "}
                <span className="text-[#014F2E] font-semibold underline hover:no-underline">
                  02143 880 243
                </span>
              </span>
              <span className=" text-[#014F2E] font-semibold mt-3">
                CLB Du lịch Bắc Hà:
              </span>
              <span>
                Ông Nguyễn Huy Trung – Chủ tịch CLB
                <br /> Ông Bùi Văn Vinh – Trưởng phòng
                <br /> Điện thoại:{" "}
                <span className="text-[#014F2E] font-semibold underline hover:no-underline">
                  0979 776 288
                </span>
              </span>
              <span className=" text-[#014F2E] font-semibold">Email:</span>
              <span className="text-[#014F2E] font-semibold underline hover:no-underline">
                info.bachatourism@gmail.com
              </span>
            </div>
            <div className=" grid grid-cols-2 gap-y-5 gap-x-20">
              {CategoryData.map((item) => (
                <span className="  py-[6px] group cursor-pointer px-[15px] flex">
                  <div className="flex flex-col items-start">
                    {item.title}

                    <div className=" bg-black h-[1px] w-0 mt-[-1px]  group-hover:w-full transition-all duration-500" />
                  </div>
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start pt-6 gap-y-6">
            <span className=" text-[14px]">
              Website được xây dựng với sự hỗ trợ kỹ thuật của{" "}
              <span className="text-[#014F2E] font-semibold underline hover:no-underline">
                CRED
              </span>
              và dự án: “Tăng cường sinh kế và vị thế của phụ nữ DTTS thông qua
              phát
              <br /> triển DLCD tại huyện Bắc Hà”, trong khuôn khổ chương trình
              <span className="text-[#014F2E] font-semibold underline hover:no-underline">
                GREAT
              </span>
              và tài trợ của Chính phủ Úc.
            </span>
            <span className="text-[15px]">
              Copyright © 2023 BacHa. All rights reserved. Created by{" "}
              <span className="text-[#014F2E] font-semibold underline hover:no-underline">
                ViiVue Design Company
              </span>{" "}
              .
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
