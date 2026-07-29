export function SectionLabel({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p
      className={`text-primary text-xs font-semibold uppercase tracking-[0.25em] ${className}`}
    >
      [ {children} ]
    </p>
  )
}
