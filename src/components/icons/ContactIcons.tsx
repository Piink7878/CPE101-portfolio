import type { ContactIconKind } from "@/types/portfolio";

function EmailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-9 w-9">
      <rect
        x="3.5"
        y="5.5"
        width="17"
        height="13"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m5.5 7.5 6.5 5 6.5-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-9 w-9">
      <path
        d="M12 4.5c-4.1 0-7.5 3.3-7.5 7.4 0 3.3 2.1 6.1 5 7.1.4.1.6-.2.6-.4v-1.5c-2.1.5-2.6-.9-2.6-.9-.3-.8-.8-1-1-1.1-.8-.5.1-.5.1-.5.9.1 1.3.9 1.3.9.8 1.4 2.2 1 2.7.8.1-.6.3-1 .6-1.2-1.7-.2-3.5-.9-3.5-3.9 0-.9.3-1.7.9-2.3-.1-.2-.4-1.1.1-2.3 0 0 .7-.2 2.4.9.7-.2 1.4-.3 2.1-.3s1.4.1 2.1.3c1.7-1.1 2.4-.9 2.4-.9.5 1.2.2 2.1.1 2.3.6.6.9 1.4.9 2.3 0 3-1.8 3.7-3.5 3.9.3.3.6.8.6 1.6v2.4c0 .2.2.5.6.4 2.9-1 5-3.8 5-7.1 0-4.1-3.4-7.4-7.5-7.4Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-7 w-7">
      <path
        d="M6 18 18 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M10 6h8v8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const iconMap = {
  email: EmailIcon,
  github: GitHubIcon,
} as const;

type ContactIconProps = {
  kind: ContactIconKind;
};

export default function ContactIcon({ kind }: ContactIconProps) {
  const Icon = iconMap[kind];
  return <Icon />;
}
