import Image from "next/image";
import { skills } from "@/data/skills";
import PageSection from "@/components/ui/PageSection";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillBadge from "@/components/ui/SkillBadge";

export default function AboutSection() {
  return (
    <PageSection id="about">
      <SectionHeading>Who I Am</SectionHeading>

      <div className="mt-14 grid gap-12 lg:grid-cols-[340px_minmax(0,1fr)] lg:items-start">
        <div className="flex justify-center lg:justify-start">
          <div className="relative h-[440px] w-full max-w-[320px] overflow-hidden rounded-[1.7rem] border border-sky-200 bg-[linear-gradient(180deg,#d9eaff_0%,#c4dcff_100%)] shadow-[0_20px_60px_rgba(59,130,246,0.14)]">
            <Image
              src="/profile.jpg"
              alt="Profile photo"
              fill
              
              className="object-cover"
            />
          </div>
        </div>

        <div className="pt-1">
          <h3 className="text-2xl font-bold tracking-[-0.03em] text-slate-900">
            About Me
          </h3>
          <p className="mt-5 max-w-3xl text-[1.04rem] leading-8 text-slate-600">
            I am a second-year Computer Engineering student with a strong
            interest in UI/UX design. Currently, I am actively expanding my
            skills into frontend development, aiming to combine intuitive
            design with functional technology to create meaningful user
            experiences.
          </p>

          <div className="mt-10">
            <h3 className="text-2xl font-bold tracking-[-0.03em] text-slate-900">
              Tech Stack & Tools
            </h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <SkillBadge key={skill.name} name={skill.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
}
