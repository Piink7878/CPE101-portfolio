import { works } from "@/data/works";
import PageSection from "@/components/ui/PageSection";
import SectionHeading from "@/components/ui/SectionHeading";
import WorkCard from "./WorkCard";

export default function WorksSection() {
  return (
    <PageSection id="works" containerClassName="max-w-[88rem]">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading>Works</SectionHeading>
        <a
          href="https://github.com/Piink7878"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-500 transition duration-200 ease-out hover:text-blue-600"
        >
          View all on GitHub
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="mt-14 grid gap-8 xl:grid-cols-3 xl:gap-10">
        {works.slice(0, 3).map((item) => (
          <WorkCard key={item.title} item={item} />
        ))}
      </div>

      <div className="mx-auto mt-8 grid max-w-5xl gap-8 md:grid-cols-2 md:gap-10">
        {works.slice(3).map((item) => (
          <WorkCard key={item.title} item={item} />
        ))}
      </div>
    </PageSection>
  );
}
