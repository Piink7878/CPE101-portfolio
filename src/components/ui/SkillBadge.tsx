type SkillBadgeProps = {
  name: string;
};

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <span className="rounded-full border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 shadow-sm transition duration-200 ease-out hover:border-blue-400 hover:bg-blue-100">
      {name}
    </span>
  );
}
