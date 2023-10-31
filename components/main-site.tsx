import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Section } from "./section";

export const MainSite = () => {
  return (
    <div className=" h-full overflow-auto pt-[100px]">
      <div className="flex flex-col items-center justify-center gap-y-3">
        <Section title="Khám Phá Bắc Hà" />
        <h1 className=" text-[45px] font-sans font-semibold text-[#014f2e] uppercase">
          Kỳ diệu cao nguyên trắng
        </h1>
        <p className="text-center mt-3">
          Nằm ở phía Đông Bắc tỉnh Lào Cai, cách Hà Nội hơn 300km về phía Bắc,
          giao thông kết nối thuận
          <br /> lợi trên cao tốc Nội Bài – Lào Cai, ở độ cao gần 1000m so với
          mặt nước biển, khí hậu quanh năm
          <br /> mát mẻ, miền cao nguyên Bắc Hà là mảnh đất lưu giữ những nét
          văn hóa và cảnh đẹp độc đáo
          <br /> trên vùng núi cao.
        </p>
        <div className="flex items-center group  cursor-pointer gap-x-2 mt-2">
          <span className="text-[#014f2e] group-hover:text-[#D9A126]  transition-all duration-500 font-semibold text-[13px]">
            XEM THÊM
          </span>
          <div className="border-[3px] group-hover:border-[#D9A126] border-[#014f2e] group-hover:translate-x-2  transition-all duration-500 rounded-full">
            <ArrowRight className="w-5 h-5 m-1 group-hover:text-[#D9A126] text-[5px] transition-all duration-500 " />
          </div>
        </div>
      </div>
    </div>
  );
};
