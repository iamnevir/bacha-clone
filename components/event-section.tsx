import { Section } from "./section";
import Image from "next/image";
import { Session } from "./session";
import { CarouselTour } from "./carousel";
import { ArrowRight } from "lucide-react";

export const EventSection = () => {
  return (
    <div className="flex flex-col items-center  w-full h-full">
      <div className=" flex flex-col items-center justify-center">
        <Section title="Hình Ảnh & Sự Kiện" />
        <h1 className=" text-[38px] text-center font-sans font-bold text-[#014f2e] uppercase">
          BẮC HÀ 12 THÁNG
          <br /> -THÁNG NÀO CŨNG ĐẬM CHẤT THƠ
        </h1>
        <p className="text-center mt-3">
          Nếu chưa một lần đến Bắc Hà chắc nhiều bạn sẽ băn khoăn không biết nên
          đến với “Cao nguyên <br /> trắng” này vào thời điểm nào đúng không?
          Chúng tôi xin chia sẻ với các bạn một số mốc thời gian đặc <br /> biệt
          để các bạn có thể tự sắp xếp cho mình một chuyến du lịch tới đây.
        </p>
      </div>
      <div className="pl-[8%] flex items-center w-full h-full mt-[5%] z-10">
        <div className="grid grid-cols-2 gap-y-6 w-[45%] h-full">
          <Session url="/spring-300x199.jpg" title="Mùa Xuân" />
          <Session url="/summer.jpg" title="Mùa Hạ" />
          <Session url="/autumn.jpg" title="Mùa Thu" />
          <Session url="/BH-mua-san-may-4.jpg" title="Mùa Đông" />
        </div>
        <div className="ml-5 w-[43%] h-full flex flex-col items-center justify-center">
          <div className=" w-full h-[50%] border-white border-[7px] rounded-[17px]">
            <CarouselTour />
          </div>
          <div className=" h-full  mt-5 pt-3">
            <div className="flex flex-col items-center justify-center gap-y-3">
              <h1 className=" text-[22px] font-sans font-semibold text-[#014f2e] uppercase">
                BẮC HÀ – NHỮNG ĐIỂM ĐẾN 4 MÙA
              </h1>
              <p className="text-center mt-3">
                Khi tới Bắc Hà không theo kế hoạch, bạn có thể tìm một địa điểm
                <br /> nào đó để tham quan tìm hiểu, để sống ảo, để check-in.
                Chúng tôi sẽ
                <br /> mách bạn những địa điểm chưa bao giờ làm du khách thất
                vọng
                <br /> suốt cả 4 mùa ở Bắc Hà.
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
        </div>
      </div>
    </div>
  );
};
