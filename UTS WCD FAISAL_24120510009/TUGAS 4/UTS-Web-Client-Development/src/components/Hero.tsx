export default function Hero() {
  return (
    <div className="relative mx-auto h-[500px] w-full overflow-hidden bg-[#C7D0D9]">
      <img
        src="/images/people.png"
        className="absolute bottom-0 left-1/2 w-[350px] -translate-x-1/2 transform"
      />
      <div className="absolute bottom-10 left-1/2 w-max -translate-x-1/2 text-[145px] font-bold whitespace-nowrap text-white">
        <div className="flex items-center">
          Java Developer - Software Enginer
        </div>
      </div>
    </div>
  );
}
