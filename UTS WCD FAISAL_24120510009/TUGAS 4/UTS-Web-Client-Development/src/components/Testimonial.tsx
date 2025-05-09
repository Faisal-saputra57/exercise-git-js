import { users } from "../lib/data";
import CardTestimonial from "./CardTestimonial";

export default function Testimonial() {
  return (
    <div className="mx-auto mt-[50px] grid max-w-screen-xl grid-cols-1 flex-wrap gap-4 px-[30px] lg:grid-cols-2 lg:gap-0">
      <h1 className="text-3xl font-bold">Testimonial</h1>
      <div className="space-y-10">
        {users.map((val, idx) => (
          <CardTestimonial
            image={val.image}
            name={val.name}
            position={val.position}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
}
