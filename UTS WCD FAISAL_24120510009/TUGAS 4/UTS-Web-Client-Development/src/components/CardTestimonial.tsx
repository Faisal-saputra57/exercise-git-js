import User from "./User";
interface CardTestimonialProps {
  image: string;
  name: string;
  position: string;
}
export default function CardTestimonial({
  image,
  name,
  position,
}: CardTestimonialProps) {
  return (
    <>
      <div className="flex flex-col items-start">
        <h1 className="mb-3 text-xl">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        </h1>
        <User image={image} name={name} position={position} />
      </div>
    </>
  );
}
