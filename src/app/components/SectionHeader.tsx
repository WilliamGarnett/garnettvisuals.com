interface SectionHeaderProps {
  label: string;
  index?: string;
}

export function SectionHeader({ label, index = "00" }: SectionHeaderProps) {
  return (
    <div className="mb-12 flex items-center gap-4">
      <span className="text-sm text-gray-mid">{index}</span>
      <span className="text-sm uppercase tracking-[0.3em] text-gray-mid">
        [{label}]
      </span>
      <div className="h-px flex-1 bg-gray-light" />
    </div>
  );
}
