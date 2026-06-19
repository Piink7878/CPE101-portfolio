type PageSectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
};

export default function PageSection({
  id,
  children,
  className = "",
  containerClassName = "max-w-7xl",
}: PageSectionProps) {
  return (
    <section
      id={id}
      className={`px-6 py-24 sm:px-10 lg:px-16 ${className}`}
    >
      <div className={`mx-auto ${containerClassName}`}>{children}</div>
    </section>
  );
}
