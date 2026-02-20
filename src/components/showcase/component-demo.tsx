import { clsx } from "clsx";

interface ComponentDemoProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function ComponentDemo({
  title,
  description,
  children,
  className,
}: ComponentDemoProps) {
  return (
    <div className="rounded-xl border border-border bg-background">
      <div className="border-b border-border px-6 py-4">
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
        {description && (
          <p className="mt-1 text-sm text-muted">{description}</p>
        )}
      </div>
      <div className={clsx("flex items-center justify-center p-8", className)}>
        {children}
      </div>
    </div>
  );
}
