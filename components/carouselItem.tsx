export const CarouselItem = ({
  src,
  alt,
  text,
}: {
  src: string;
  alt: string;
  text: string;
}) => {
  return (
    <div className="items-center w-full h-full relative">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover  inline-block"
      />
      <span className=" absolute bottom-0  right-0 w-full h-full text-white text-center p-3 font-semibold text-lg">
        {text}
      </span>
    </div>
  );
};
