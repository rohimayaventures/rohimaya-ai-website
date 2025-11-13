export default function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
}) {
  return (
    <div className="mb-8">
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-peacockTeal">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold text-moonWhite">{title}</h2>
    </div>
  );
}
