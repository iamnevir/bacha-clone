"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ReviewItem } from "./review-item";
import { Carousel } from "@material-tailwind/react";

export const ReviewSection = () => {
  const reviews = [
    {
      avt: "/review/BH-Review-thao-02.jpg",
      name: "NGUYỄN PHƯƠNG THẢO",
      city: "HÀ NỘI",
      content: [
        "Lần đầu tiên tự lên đỉnh và tuột dốc bằng xe máy với một đứa vừa sợ độ cao lại thêm sợ tốc độ như mình quả thật cực kỳ căng thẳng. Từ Simacai lên Sín Chéng, qua Tả Van Chư, Hoàng Thu Phố, mấy mẹ con luôn miệng xuýt xoa trước vẻ đẹp của vùng cao nguyên trắng.",
        "Chiều về, ngồi trong căn nhà gỗ của Anne house ngắm nhìn hoàng hôn qua cửa sổ, cảm giác như đang ở giữa rừng bạch dương ở Nga. Tối về, tiếc là bồn gỗ còn thiếu nút bịt nên 3 mẹ con không được ngâm mình trong nước tắm của người Dao. Bù lại, bạn gà được ướp bằng hạt dổi và phơi mình trên than hồng chấm với muối + mắc khén, rau cải mèo luộc chấm mắm ớt, mía nướng, khoai nướng cộng thêm tiếng sáo réo rắt mà hào sảng vang vọng giữa núi rừng. Cảm giác thật phê pha. Sáng hôm sau, vẫn đang lười trong chăn ngắm nhìn những đỉnh núi mờ sương, thật chẳng muốn quay lại Hà Nội ồn ào và náo nhiệt.",
      ],
    },
    {
      avt: "/review/BH-review-hoai-pham-01.jpg",
      name: "HOAI PHAM",
      city: "HÀ NỘI",
      content: [
        "Mình ngồi bên bếp lửa ấm nồng vừa nghe chị kể chuyện, vừa thích thú ngắm nhìn từng góc nhà và khung cảnh bình yên của núi rừng, của ruộng đồng bên ngoài cửa sổ mà thấy cảm phục vợ chồng chị quá. Và mình chợt nghĩ phát triển du lịch bền vững là đây chứ đâu- là cái cách những con người này mang hết sự hồn hậu, tử tế, tốt lành ra chào đón những người xa lạ như mình, là cái cách họ đang dần xây dựng cuộc sống tốt đẹp hơn mà vẫn giữ trọn vẹn những nét đẹp trong văn hoá và nếp sống của mình. Nồi sắn luộc bốc hơi nghi ngút, những chén chè tươi sóng sánh, bếp lửa hồng tí tách, bữa cơm toàn rau, thịt của nhà ngọt lành, mấy chén rượu cay nồng, nụ cười trong veo của Nâng, của Cân, của Toàn, cuộc dạo chơi trên ngọn đồi trồng cọ xen với quế…đã cho mình những giây phút không thể tuyệt hơn nơi núi rừng Tây Bắc trong một ngày đông như thế!",
      ],
    },
    {
      avt: "/review/BH-Review-trai-hoa-qua.jpg",
      name: "TRẦN HẰNG",
      city: "HÀ NỘI",
      content: [
        "Không quá sầm uất, nổi tiếng và ồn ào như Sa Pa, cũng không quá hoang sơ và vắng lặng như Tà Xùa. Đối với mình, Bắc Hà vừa đủ; vừa đủ dịch vụ để nghỉ ngơi cũng vừa đủ sự tự nhiên để có thể khám phá!",
      ],
    },
    {
      avt: "/review/BH-Review-diem-dang-01.jpg",
      name: "DIEM DANG",
      city: undefined,
      content: [
        "Không biết mọi người có giống mình không: khi search điểm vui chơi trên Bắc Hà, cảm nhận của mình là: chả có gì đặc sắc, thấy mấy review thưa thớt vài điểm chung chung. Nói chung, mình đã đi nhiều vùng núi, mình thấy vùng nào cũng na ná nhau vì đều có rừng, mà rừng thì toàn màu xanh. Nhưng chuyến đi vừa rồi thật may mắn vì biết 1 bạn người Tày chuyên tổ chức các tour trekking đi những cung đường mới lạ, vậy nên mình mới được chiêm ngưỡng nhiều cảnh sắc và những điều hay ho đến mức giờ rảnh ngồi viết review.",
        "Chủ yếu mình muốn đảm bảo các bạn khi đến nơi này sẽ sập nguồn điện thoại (vì điện thoại hoạt động hết công suất), rồi mang về cả tỷ ảnh checkin đẹp mê hồn và mới lạ ý . Riêng Bản Liền, khi đến nơi, mình đã rất thoảng thốt vì khung cảnh y chang mấy bộ phim khủng long mình xem, nguyên thuỷ hết sức luôn ý. Những con suối to với cây cổ thụ 2 bên bờ y chang một thế giới khác.",
      ],
    },
  ];
  return (
    <div className="flex items-center w-full h-full relative">
      <Image
        src="/home-footer-bg.jpg"
        fill
        alt="footer"
        className=" translate-y-[35%]"
      />
      <div className="flex flex-col items-center w-full h-full z-10 -translate-y-[30%]">
        <h1 className=" text-[40px] font-sans font-bold text-[#014f2e] uppercase">
          CẢM NHẬN VỀ NƠI ĐÂY
        </h1>
        <div className=" h-full">
          <Carousel className=" overflow-clip" color="#014F2E">
            {reviews.map((item) => (
              <ReviewItem
                avt={item.avt}
                name={item.name}
                city={item.city}
                content={item.content}
              />
            ))}
          </Carousel>
        </div>
        <div className=" rounded-full w-[174px] h-[51px] mt-10 group items-center justify-center border-2 px-1 py-1 border-[#D9A126] hover:border-[#014F2E] transition-all duration-500">
          <Link href="https://www.bachatourism.com/tour/">
            <Button className="group-hover:bg-[#014F2E] w-full bg-[#D9A126] text-black/80 group-hover:text-white font-semibold  transition-all duration-500 text-xs uppercase rounded-full">
              Xem tất cả
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
