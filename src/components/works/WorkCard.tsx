import Image from "next/image";
import type { WorkItem } from "@/types/portfolio";

type WorkCardProps = {
  item: WorkItem;
};

export default function WorkCard({ item }: WorkCardProps) {
  return (
    <article className="group overflow-hidden rounded-[1.6rem] border border-slate-200/80 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.04)] transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
      <div className="aspect-[16/10] overflow-hidden bg-slate-50">
        <Image
          src={item.image}
          alt=""
          width={1200}
          height={675}
          unoptimized
          className="h-full w-full object-contain p-4 transition duration-500 ease-out group-hover:scale-[1.01]"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold tracking-[-0.03em] text-slate-900">
          {item.title}
        </h3>
        <p className="mt-3 text-[0.96rem] leading-7 text-slate-600">
          <span className="font-semibold text-slate-900">{item.year}</span>{" "}
          {item.description}
        </p>
      </div>
    </article>
  );
}
