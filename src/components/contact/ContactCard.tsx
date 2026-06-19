import type { ContactLink } from "@/types/portfolio";
import ContactIcon, { ArrowIcon } from "@/components/icons/ContactIcons";

type ContactCardProps = {
  item: ContactLink;
};

export default function ContactCard({ item }: ContactCardProps) {
  const content = (
    <div className="group flex min-h-[9rem] w-full items-center justify-between gap-5 rounded-[2rem] border border-[#2b3550] bg-[#1a2238] px-6 py-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[#3a4564] hover:bg-[#1c2640] sm:px-7 lg:px-8">
      <div className="flex items-center gap-5 sm:gap-6">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.35rem] bg-[#2a3350] text-[#b6c0d8] transition duration-300 ease-out group-hover:bg-[#303c5b] group-hover:text-[#d2dbef]">
          <ContactIcon kind={item.icon} />
        </div>

        <div className="min-w-0">
          <p className="text-sm font-medium tracking-[0.18em] text-[#6d7995]">
            {item.label}
          </p>
          <p className="mt-2 truncate font-mono text-[1rem] leading-normal tracking-[-0.03em] text-[#e8edf7] sm:text-[1.05rem]">
            {item.value}
          </p>
        </div>
      </div>

      <span className="flex shrink-0 items-center justify-center text-[#606f90] transition duration-300 ease-out group-hover:text-[#9aa7c0]">
        <ArrowIcon />
      </span>
    </div>
  );

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={item.label}
        className="block"
      >
        {content}
      </a>
    );
  }

  return (
    <a href={item.href} aria-label={item.label} className="block">
      {content}
    </a>
  );
}
