import type { EducationIconKind } from "@/types/portfolio";

function ElementaryIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M4.5 20.5V9.75L12 5l7.5 4.75V20.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 20.5v-7h8v7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 13.5h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HighSchoolIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M4.5 8.5 12 5l7.5 3.5L12 12 4.5 8.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M7 10v3.5c0 .9 2.2 2 5 2s5-1.1 5-2V10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.2 9.2V13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BachelorIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M3.5 10.5 12 6l8.5 4.5-8.5 4.5-8.5-4.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M7 12.3V16c0 1.7 2.2 3 5 3s5-1.3 5-3v-3.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.2 10.4V15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

const iconMap = {
  elementary: ElementaryIcon,
  highschool: HighSchoolIcon,
  bachelor: BachelorIcon,
} as const;

type EducationIconProps = {
  kind: EducationIconKind;
};

export default function EducationIcon({ kind }: EducationIconProps) {
  const Icon = iconMap[kind];
  return <Icon />;
}
