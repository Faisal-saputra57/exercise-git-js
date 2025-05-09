import Marquee from "react-fast-marquee";
interface ImageGridProps {
  images: string[];
  direction: "left" | "right" | "up" | "down" | undefined;
}
const ImageGrid = ({ images, direction }: ImageGridProps) => {
  return (
    <div className="py-10">
      <Marquee speed={40} gradient={false} pauseOnHover direction={direction}>
        {images.map((src, i) => (
          <div
            key={i}
            className="mx-4 h-[330px] w-[500px] shrink-0 overflow-hidden rounded-sm bg-[#C7D0D9] px-[48px] py-[56px] shadow-lg transition-all duration-300 hover:scale-105"
          >
            <img src={src} className="h-full w-full object-cover" alt="" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ImageGrid;
