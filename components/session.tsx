import Image from "next/image";

interface SessionProps {
  url: string;
  title: string;
}

export const Session = ({ url, title }: SessionProps) => {
  return (
    <div className="  flex flex-col items-center w-full h-full gap-3 ">
      <div className=" relative flex rounded-full items-center border-[7px] cursor-pointer border-white h-[230px] w-[230px]">
        <Image src={url} alt="mua-xuan" fill className="rounded-full" />
      </div>
      <span className=" font-bold text-[#014f2e] uppercase text-xl mt-3 cursor-pointer">
        {title}
      </span>
    </div>
  );
};
