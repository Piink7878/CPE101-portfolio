type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionHeading({
  children,
  className = "text-slate-900",
}: SectionHeadingProps) {
  return (
    <h2
      className={`text-[clamp(2.4rem,4vw,3.9rem)] font-extrabold tracking-[-0.05em] ${className}`}
    >
      {children}
    </h2>
  );
}
