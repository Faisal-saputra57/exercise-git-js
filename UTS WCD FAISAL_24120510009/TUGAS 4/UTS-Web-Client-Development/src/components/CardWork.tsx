import { HiArrowUpRight } from "react-icons/hi2";
interface CardWorkProps {
  title: string;
}
export default function CardWork({ title }: CardWorkProps) {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="mb-3 text-4xl font-medium">{title}</h1>
          <p>Brand Design - Webflow Development - Web Design</p>
        </div>
        <div className="group flex h-[80px] w-[80px] cursor-pointer items-center justify-center rounded-full border border-[#3C3D3E] transition-colors duration-300 hover:bg-[#0B0C0E]">
          <HiArrowUpRight className="text-3xl text-[#3C3D3E] transition-colors duration-300 group-hover:text-white" />
        </div>
      </div>
      <hr className="my-6 h-px w-full border-0 bg-[#3C3D3E]" />
    </>
  );
}
