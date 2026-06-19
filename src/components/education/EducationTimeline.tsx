import type { EducationItem } from "@/types/portfolio";
import EducationIcon from "@/components/icons/EducationIcons";

type EducationTimelineItemProps = {
  item: EducationItem;
};

function EducationTimelineItem({ item }: EducationTimelineItemProps) {
  return (
    <article className="group relative pl-14 transition duration-300 ease-out hover:-translate-y-1">
      <div className="absolute left-0 top-1 z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 border-sky-400 bg-[#f4f7fb] text-sky-500 shadow-[0_6px_20px_rgba(59,130,246,0.12)] transition duration-300 ease-out group-hover:border-sky-500 group-hover:bg-white group-hover:shadow-[0_10px_26px_rgba(59,130,246,0.18)]">
        <EducationIcon kind={item.icon} />
      </div>

      <div className="rounded-[1.4rem] border border-transparent p-1 transition duration-300 ease-out group-hover:border-sky-100 group-hover:bg-white/70 group-hover:shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold tracking-[0.24em] text-blue-500">
            {item.year}
          </span>
          {item.status ? (
            <span className="rounded-full bg-blue-100 px-3 py-1 text-[0.72rem] font-semibold tracking-[0.18em] text-blue-500">
              {item.status}
            </span>
          ) : null}
        </div>
        <h3 className="mt-2 text-[1.55rem] font-bold tracking-[-0.03em] text-slate-900">
          {item.label}
        </h3>
        <p className="mt-2 text-lg font-medium text-slate-700">{item.school}</p>
        <p className="mt-1 text-sm text-slate-400">{item.location}</p>
        {item.detail ? (
          <p className="mt-3 text-[0.98rem] text-slate-600">{item.detail}</p>
        ) : null}
      </div>
    </article>
  );
}

type EducationTimelineProps = {
  items: EducationItem[];
};

export default function EducationTimeline({ items }: EducationTimelineProps) {
  return (
    <div className="relative mt-16 max-w-3xl pl-10 sm:pl-12">
      <div className="absolute left-[1.3rem] top-4 bottom-4 w-px bg-sky-200 sm:left-[1.55rem]" />
      <div className="space-y-12">
        {items.map((item) => (
          <EducationTimelineItem key={`${item.year}-${item.label}`} item={item} />
        ))}
      </div>
    </div>
  );
}
