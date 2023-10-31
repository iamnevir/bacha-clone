"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { CamNangItem } from "./camnang-item";
import { LuuTruIcon } from "./svg/luu_tru";
import { XeOmIcon } from "./svg/xe-om";
import { HuongDanVienIcon } from "./svg/huong-dan-vien";
import { NgheTruyenThongIcon } from "./svg/nghe-truyen-thong";
import { VanNgheIcon } from "./svg/van-nghe";
import { DichVuKhacIcon } from "./svg/dich-vu-khac";

export const NeedToKnowSection = () => {
  const toKnows = [
    {
      text: "Lưu Trú",
      src: LuuTruIcon,
    },
    {
      text: "Xe Ôm Du Lịch",
      src: XeOmIcon,
    },
    {
      text: "Hướng dẫn viên",
      src: HuongDanVienIcon,
    },
    {
      text: "Nghề truyền thống",
      src: NgheTruyenThongIcon,
    },
    {
      text: "Văn nghệ",
      src: VanNgheIcon,
    },
    {
      text: "Các dịch vụ khác",
      src: DichVuKhacIcon,
    },
  ];
  return (
    <div className="relative w-full h-full flex items-center justify-center rounded-md">
      <Image
        src="/home-reviews-bg.png"
        fill
        alt="bg"
        className=" translate-y-[50%]"
      />
      <div className="flex items-center justify-center rounded-md border-[7px] border-white bg-[#EEECEA] w-[80%] h-[65%] -translate-y-[50%]">
        <div className="flex items-center justify-between rounded-md gap-x-10">
          <div className="flex flex-col  items-start w-[40%] ml-14 -translate-y-5 gap-3">
            <div className="flex items-center gap-3">
              <span className=" text-[18px] font-semibold font-sans">
                Cẩm Nang Du Lịch
              </span>
              <Image
                className=" rotate-180"
                alt="ten-phai"
                height={18}
                width={40}
                src="/ten.png"
              />
            </div>
            <h1 className=" text-[30px] font-sans font-bold text-[#014f2e] uppercase">
              NHỮNG ĐIỀU CẦN BIẾT
              <br />
              KHI ĐI DU LỊCH BẮC HÀ
            </h1>
            <p className="text-start mt-3 text-md">
              Đến với Bắc Hà không phải là cuộc rong chơi lướt qua, mà là một
              hành trình trải nghiệm vùng cao nguyên, nhẹ nhàng tận hưởng cảnh
              đẹp núi rừng, đời sống văn hóa đầy bản sắc và con người chân tình,
              sâu lắng.
            </p>
            <div className="mt-2 rounded-full w-[174px] h-[51px] group items-center justify-center border-2 px-1 pt-1 border-[#D9A126] hover:border-[#014F2E] transition-all duration-500">
              <Link href="https://www.bachatourism.com/tour/">
                <Button className="group-hover:bg-[#014F2E] w-full bg-[#D9A126] text-black/80 group-hover:text-white font-semibold  transition-all duration-500 text-xs uppercase rounded-full">
                  Xem tất cả
                </Button>
              </Link>
            </div>
          </div>
          <div className=" items-center flex flex-wrap w-[60%] h-full pr-1">
            {toKnows.map((item) => (
              <CamNangItem text={item.text} src={item.src} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
