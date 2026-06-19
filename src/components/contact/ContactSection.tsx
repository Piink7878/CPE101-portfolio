import { contactLinks } from "@/data/contact";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactCard from "./ContactCard";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/5 bg-[radial-gradient(circle_at_top_left,rgba(74,105,255,0.16),transparent_34%),linear-gradient(180deg,#0b1430_0%,#0a1228_100%)] px-6 py-24 text-white sm:px-10 sm:py-28 lg:px-16 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-20">
        <div className="max-w-xl">
          <SectionHeading className="text-[#3f82ff]">Contact</SectionHeading>
          <p className="mt-10 max-w-[34rem] text-[1.04rem] leading-8 text-[#98a4bf]">
            I&apos;m open to internship opportunities, collaborative projects, or
            just a chat about tech. Feel free to reach out! I typically reply
            within 24 hours.
          </p>
        </div>

        <div className="space-y-6">
          {contactLinks.map((item) => (
            <ContactCard key={item.label} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
