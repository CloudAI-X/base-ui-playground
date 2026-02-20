import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description: string;
  backHref?: string;
  backLabel?: string;
}

export function PageHeader({
  title,
  description,
  backHref = "/",
  backLabel = "Back to Home",
}: PageHeaderProps) {
  return (
    <header className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <Link
          href={backHref}
          className="mb-4 inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4" />
          {backLabel}
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          {title}
        </h1>
        <p className="mt-2 text-lg text-muted">{description}</p>
      </div>
    </header>
  );
}
