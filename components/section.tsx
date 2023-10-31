import Image from "next/image";

interface SectionProps {
  title: string;
}

export const Section = ({ title }: SectionProps) => {
  return (
    <>
      <div className="flex items-center gap-x-3">
        <Image alt="ten-trai" height={18} width={40} src="/ten.png" />
        <span className=" text-[18px] font-semibold font-sans">{title}</span>
        <Image
          className=" rotate-180"
          alt="ten-phai"
          height={18}
          width={40}
          src="/ten.png"
        />
      </div>
    </>
  );
};
