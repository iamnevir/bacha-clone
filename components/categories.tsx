import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ElementRef, useRef } from "react";

export const CategoryData: {
  title: string;
  children?: { title: string; url?: string }[];
  url: string;
}[] = [
  {
    title: "Trang Chủ",
    children: undefined,
    url: "/",
  },
  {
    title: "Về Bắc Hà",
    children: [
      {
        title: "Hướng dẫn du khách đi đến Bắc Hà",
        url: "https://www.bachatourism.com/ve-bac-ha/huong-dan-khach-di-den-bac-ha/",
      },
      {
        title: "Nên đến Bắc Hà vào thời gian nào?",
        url: "https://www.bachatourism.com/ve-bac-ha/nen-den-bac-ha-vao-thoi-gian-nao/",
      },
    ],
    url: "a",
  },
  {
    title: "Tour",
    children: undefined,
    url: "https://www.bachatourism.com/tour/",
  },
  {
    title: "Hình Ảnh & Sự Kiện",
    children: [
      {
        title:
          "Du lịch Bắc Hà: Dự kiến tổ chức Lễ hội nhảy lửa chào mừng xuân Quý Mão 2023",
        url: "https://www.bachatourism.com/du-lich-bac-ha-du-kien-to-chuc-le-hoi-nhay-lua-chao-mung-xuan-quy-mao-2023/",
      },
      {
        title: "Mùa Xuân",
        url: undefined,
      },
      {
        title: "Mùa Hạ",
        url: undefined,
      },
      {
        title: "Mùa Thu",
        url: undefined,
      },
      {
        title: "Mùa Đông",
        url: undefined,
      },
    ],
    url: "/a",
  },
  {
    title: "Cẩm Nang Du Lịch",
    children: undefined,
    url: "https://www.bachatourism.com/cam-nang-du-lich/",
  },
  {
    title: "Cảm Nhận Về Nơi Đây",
    children: undefined,
    url: "https://www.bachatourism.com/cam-nhan-ve-noi-day/",
  },
  {
    title: "Liên Hệ",
    children: undefined,
    url: "https://www.bachatourism.com/den-va-trai-nghiem-bac-ha/",
  },
];

export const Categories = () => {
  const pathname = usePathname();

  return (
    <div className="flex w-full gap-x-2">
      {CategoryData.map((category, index) => (
        <div
          key={index}
          className={cn(
            " border-gray-700 group block  items-center rounded-full",
            pathname === category.url && "bg-[#014F2E]"
          )}
        >
          <span
            className={cn(
              " font-bold py-[6px] group cursor-pointer px-[15px] flex relative",
              pathname === category.url && "text-white"
            )}
          >
            <div className="flex flex-col items-start">
              {category.title}

              {pathname !== category.url && (
                <div className=" bg-black h-[1px] w-0 mt-[-1px]  group-hover:w-full transition-all duration-500" />
              )}
            </div>
            {!!category.children && (
              <div className="flex  items-center group-hover:rotate-180 transition duration-300">
                <ChevronDown className="w-5 h-5" />
              </div>
            )}
          </span>

          {!!category.children && (
            <div className=" group-hover:translate-y-6 group-hover:visible -translate-x-[25%] invisible transition-all duration-500 flex z-20  absolute divide-y divide-white flex-col opacity-0 group-hover:opacity-100  rounded-sm bg-[#F4F2F0] border-2 border-white">
              {category.children.map((item, index) => (
                <Link
                  key={index}
                  className="p-3 mx-3 flex items-start"
                  href={item?.url || ""}
                >
                  <span className="font-semibold  group/cca ">
                    {item.title}
                    <div className=" bg-black h-[1px] w-0 mt-[-1px]  group-hover/cca:w-full transition-all duration-500" />
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
