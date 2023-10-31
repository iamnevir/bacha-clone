import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export const ReviewItem = ({
  avt,
  name,
  city,
  content,
}: {
  avt: string;
  name: string;
  city?: string;
  content: string[];
}) => {
  return (
    <div className=" w-full h-full justify-center flex flex-col items-center gap-5 mt-10">
      <div className=" flex flex-col items-center justify-center gap-5">
        <div className="flex items-center rounded-full relative border-[7px] border-white h-[100px] w-[100px]">
          <Image src={avt} fill alt="avt" className=" rounded-full" />
        </div>
        <span className=" font-semibold text-md">
          {name} {!!city && "- " + city}
        </span>
      </div>
      <div className=" items-center text-center justify-center flex-col w-[50%]">
        {content.map((para) => (
          <p className="text-center mt-3">{para}</p>
        ))}
      </div>
    </div>
  );
};
