import { education } from "@/data/education";
import PageSection from "@/components/ui/PageSection";
import SectionHeading from "@/components/ui/SectionHeading";
import EducationTimeline from "./EducationTimeline";

export default function EducationSection() {
  return (
    <PageSection id="education">
      <SectionHeading>Academic Journey</SectionHeading>
      <EducationTimeline items={education} />
    </PageSection>
  );
}
