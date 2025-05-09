import { works } from "../lib/data";
import CardWork from "./CardWork";

export default function RecentWork() {
  return (
    <div className="mx-auto mt-[50px] grid max-w-screen-xl grid-cols-1 flex-wrap gap-4 px-[30px] lg:grid-cols-2 lg:gap-0">
      <h1 className="text-3xl font-bold">Recent Work</h1>
      <div>
        {works.map((val, idx) => (
          <CardWork title={val.title} key={idx} />
        ))}
      </div>
    </div>
  );
}
