interface UserProps {
  image: string;
  name: string;
  position: string;
}
export default function User({ image, name, position }: UserProps) {
  return (
    <div className="flex items-center">
      <img
        className="h-14 w-14 rounded-full"
        src={image}
        alt="Rounded avatar"
      />
      <div className="ml-4 flex flex-col gap-1">
        <h1 className="font-bold">{name}</h1>
        <p>{position}</p>
      </div>
    </div>
  );
}
