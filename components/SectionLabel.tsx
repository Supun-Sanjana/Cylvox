export function SectionLabel({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p className={`flex items-center gap-2.5 text-muted-foreground ${className}`}>
      <span
        aria-hidden="true"
        className="size-[5px] shrink-0 rounded-full bg-primary shadow-[0_0_10px_2px_rgba(204,255,0,0.55)]"
      />
      <span className="tech-label">{children}</span>
    </p>
  )
}
