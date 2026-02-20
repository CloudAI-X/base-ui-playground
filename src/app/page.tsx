import Link from "next/link";
import {
  LayoutGrid,
  MousePointerClick,
  FormInput,
  MessageSquare,
  Navigation,
  Layers,
} from "lucide-react";

const componentSections = [
  {
    title: "Inputs",
    description: "Form controls, checkboxes, switches, sliders, and more",
    href: "/components/inputs",
    icon: FormInput,
  },
  {
    title: "Overlays",
    description: "Dialogs, popovers, tooltips, and menu components",
    href: "/components/overlays",
    icon: MessageSquare,
  },
  {
    title: "Navigation",
    description: "Tabs, navigation menus, and accordion components",
    href: "/components/navigation",
    icon: Navigation,
  },
  {
    title: "Feedback",
    description: "Alerts, progress indicators, and toast notifications",
    href: "/components/feedback",
    icon: MousePointerClick,
  },
  {
    title: "Layout",
    description: "Collapsible panels, scroll areas, and separators",
    href: "/components/layout",
    icon: LayoutGrid,
  },
  {
    title: "Data Display",
    description: "Avatars, badges, and other presentational components",
    href: "/components/data-display",
    icon: Layers,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Base UI Playground
          </h1>
          <p className="mt-2 text-lg text-muted">
            Interactive demos of Base UI headless components styled with
            Tailwind CSS
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {componentSections.map((section) => {
            const Icon = section.icon;
            return (
              <Link
                key={section.href}
                href={section.href}
                className="group rounded-xl border border-border bg-background p-6 transition-all hover:border-border-hover hover:bg-surface hover:shadow-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-surface text-muted group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="text-lg font-semibold text-foreground">
                  {section.title}
                </h2>
                <p className="mt-1 text-sm text-muted">{section.description}</p>
              </Link>
            );
          })}
        </div>

        {/* Info Section */}
        <div className="mt-16 rounded-xl border border-border bg-surface p-8">
          <h2 className="text-xl font-semibold text-foreground">
            About This Playground
          </h2>
          <div className="mt-4 space-y-3 text-sm text-muted">
            <p>
              Base UI is a library of headless (unstyled) React components. Each
              component provides accessible behavior and keyboard interactions
              out of the box, while giving you complete control over styling.
            </p>
            <p>
              In this playground, all components are styled using Tailwind CSS
              utility classes and Base UI&apos;s{" "}
              <code className="rounded bg-surface-active px-1.5 py-0.5 font-mono text-xs text-foreground">
                data-*
              </code>{" "}
              attribute selectors for state-based styling.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
