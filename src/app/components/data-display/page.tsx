"use client";

import * as React from "react";
import { Avatar } from "@base-ui/react/avatar";
import { Collapsible } from "@base-ui/react/collapsible";
import { ScrollArea } from "@base-ui/react/scroll-area";
import { Separator } from "@base-ui/react/separator";
import { PageHeader } from "@/components/layout";
import { ComponentDemo } from "@/components/showcase";

// ============================================
// Avatar Demo
// ============================================

interface AvatarExampleProps {
  src?: string;
  initials: string;
  size: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "size-8 text-xs",
  md: "size-10 text-sm",
  lg: "size-14 text-lg",
} as const;

function AvatarExample({ src, initials, size }: AvatarExampleProps) {
  return (
    <Avatar.Root
      className={`inline-flex items-center justify-center overflow-hidden rounded-full bg-surface-active font-medium text-foreground select-none ${sizeClasses[size]}`}
    >
      {src && (
        <Avatar.Image
          src={src}
          alt={`Avatar for ${initials}`}
          className="size-full object-cover"
        />
      )}
      <Avatar.Fallback className="flex size-full items-center justify-center">
        {initials}
      </Avatar.Fallback>
    </Avatar.Root>
  );
}

function AvatarDemo() {
  return (
    <div className="flex flex-col gap-8">
      {/* Sizes */}
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Sizes</p>
        <div className="flex items-end gap-4">
          <AvatarExample
            src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
            initials="LT"
            size="sm"
          />
          <AvatarExample
            src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
            initials="LT"
            size="md"
          />
          <AvatarExample
            src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
            initials="LT"
            size="lg"
          />
        </div>
      </div>

      {/* Fallback initials */}
      <div>
        <p className="mb-3 text-sm font-medium text-muted">
          Fallback initials (no image)
        </p>
        <div className="flex items-end gap-4">
          <AvatarExample initials="AB" size="sm" />
          <AvatarExample initials="CD" size="md" />
          <AvatarExample initials="EF" size="lg" />
        </div>
      </div>

      {/* Group */}
      <div>
        <p className="mb-3 text-sm font-medium text-muted">Avatar group</p>
        <div className="flex -space-x-2">
          <AvatarExample
            src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
            initials="LT"
            size="md"
          />
          <AvatarExample initials="JD" size="md" />
          <AvatarExample
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=128&h=128&dpr=2&q=80"
            initials="MK"
            size="md"
          />
          <AvatarExample initials="RS" size="md" />
          <Avatar.Root className="inline-flex size-10 items-center justify-center overflow-hidden rounded-full border-2 border-background bg-surface-active text-xs font-medium text-muted select-none">
            <Avatar.Fallback className="flex size-full items-center justify-center">
              +3
            </Avatar.Fallback>
          </Avatar.Root>
        </div>
      </div>
    </div>
  );
}

// ============================================
// Collapsible Demo
// ============================================

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function CollapsibleSection({
  title,
  children,
  defaultOpen = false,
}: CollapsibleSectionProps) {
  return (
    <Collapsible.Root defaultOpen={defaultOpen} className="w-full">
      <Collapsible.Trigger className="group flex w-full items-center gap-2 rounded-lg bg-surface px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-active focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring">
        <ChevronIcon className="size-3.5 text-muted transition-transform duration-150 ease-out group-data-[panel-open]:rotate-90" />
        {title}
      </Collapsible.Trigger>
      <Collapsible.Panel className="flex h-collapsible-panel flex-col justify-end overflow-hidden transition-all duration-200 ease-out [&[hidden]:not([hidden='until-found'])]:hidden data-[ending-style]:h-0 data-[starting-style]:h-0">
        <div className="px-4 pt-2 pb-3">{children}</div>
      </Collapsible.Panel>
    </Collapsible.Root>
  );
}

function ChevronIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path d="M3.5 9L7.5 5L3.5 1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function CollapsibleDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <CollapsibleSection title="What is Base UI?" defaultOpen>
        <p className="text-sm leading-relaxed text-muted">
          Base UI is a library of headless (unstyled) React components and
          hooks. It provides accessible behavior and keyboard interactions out
          of the box, while giving you complete control over styling.
        </p>
      </CollapsibleSection>
      <CollapsibleSection title="How is it different from Material UI?">
        <p className="text-sm leading-relaxed text-muted">
          Unlike Material UI, Base UI ships zero CSS. You bring your own styles
          using Tailwind, CSS Modules, or any styling solution. This makes it
          ideal for custom design systems.
        </p>
      </CollapsibleSection>
      <CollapsibleSection title="Is it production-ready?">
        <p className="text-sm leading-relaxed text-muted">
          Yes. Base UI v1.0+ is stable and used in production by many teams. It
          follows WAI-ARIA patterns and is thoroughly tested for accessibility.
        </p>
      </CollapsibleSection>
    </div>
  );
}

// ============================================
// Scroll Area Demo
// ============================================

function ScrollAreaDemo() {
  return (
    <ScrollArea.Root className="h-48 w-full max-w-md">
      <ScrollArea.Viewport className="h-full rounded-lg border border-border focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring">
        <div className="flex flex-col gap-4 py-4 pr-6 pl-4 text-sm leading-relaxed text-foreground">
          <p>
            <strong className="font-semibold">Vernacular architecture</strong>{" "}
            is building done outside any academic tradition, and without
            professional guidance. It is not a particular architectural movement
            or style, but rather a broad category, encompassing a wide range and
            variety of building types, with differing methods of construction,
            from around the world, both historical and extant and classical and
            modern.
          </p>
          <p>
            Vernacular architecture constitutes 95% of the world&apos;s built
            environment, as estimated in 1995 by Amos Rapoport, as measured
            against the small percentage of new buildings every year designed by
            architects and built by engineers.
          </p>
          <p>
            This type of architecture usually serves immediate, local needs, is
            constrained by the materials available in its particular region and
            reflects local traditions and cultural practices. The study of
            vernacular architecture does not examine formally schooled
            architects, but instead that of the design skills and tradition of
            local builders, who were rarely given any attribution for the work.
          </p>
          <p>
            More recently, vernacular architecture has been examined by
            designers and the building industry in an effort to be more energy
            conscious with contemporary design and construction -- part of a
            broader interest in sustainable design.
          </p>
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar className="m-2 flex w-1 justify-center rounded bg-gray-200 opacity-0 transition-opacity duration-150 pointer-events-none data-[hovering]:pointer-events-auto data-[hovering]:opacity-100 data-[hovering]:delay-0 data-[scrolling]:pointer-events-auto data-[scrolling]:opacity-100 data-[scrolling]:duration-0 dark:bg-gray-700">
        <ScrollArea.Thumb className="w-full rounded bg-gray-500 dark:bg-gray-400" />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
}

// ============================================
// Separator Demo
// ============================================

function SeparatorDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-8">
      {/* Horizontal separators */}
      <div>
        <p className="mb-4 text-sm font-medium text-muted">Horizontal</p>
        <div className="flex flex-col gap-0 rounded-lg border border-border">
          <div className="px-4 py-3">
            <p className="text-sm font-medium text-foreground">
              Account Settings
            </p>
            <p className="text-xs text-muted">
              Manage your account preferences
            </p>
          </div>
          <Separator className="h-px w-full bg-border" />
          <div className="px-4 py-3">
            <p className="text-sm font-medium text-foreground">Notifications</p>
            <p className="text-xs text-muted">
              Configure notification preferences
            </p>
          </div>
          <Separator className="h-px w-full bg-border" />
          <div className="px-4 py-3">
            <p className="text-sm font-medium text-foreground">Privacy</p>
            <p className="text-xs text-muted">Control your privacy settings</p>
          </div>
        </div>
      </div>

      {/* Vertical separator */}
      <div>
        <p className="mb-4 text-sm font-medium text-muted">Vertical</p>
        <nav className="flex items-center gap-4" aria-label="Navigation links">
          <a
            href="#"
            className="text-sm text-foreground underline-offset-2 hover:underline"
            onClick={(e) => e.preventDefault()}
          >
            Home
          </a>
          <a
            href="#"
            className="text-sm text-foreground underline-offset-2 hover:underline"
            onClick={(e) => e.preventDefault()}
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-sm text-foreground underline-offset-2 hover:underline"
            onClick={(e) => e.preventDefault()}
          >
            Blog
          </a>
          <Separator orientation="vertical" className="h-4 w-px bg-border" />
          <a
            href="#"
            className="text-sm text-foreground underline-offset-2 hover:underline"
            onClick={(e) => e.preventDefault()}
          >
            Log in
          </a>
          <a
            href="#"
            className="text-sm text-foreground underline-offset-2 hover:underline"
            onClick={(e) => e.preventDefault()}
          >
            Sign up
          </a>
        </nav>
      </div>
    </div>
  );
}

// ============================================
// Page
// ============================================

export default function DataDisplayPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Data Display"
        description="Avatars, collapsible sections, scroll areas, and separators for presenting content."
      />

      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="space-y-8">
          <ComponentDemo
            title="Avatar"
            description="Displays a user profile picture with fallback initials when the image is unavailable. Supports multiple sizes."
          >
            <AvatarDemo />
          </ComponentDemo>

          <ComponentDemo
            title="Collapsible"
            description="Expandable and collapsible content sections with smooth height animation."
          >
            <CollapsibleDemo />
          </ComponentDemo>

          <ComponentDemo
            title="Scroll Area"
            description="A scrollable container with a custom-styled scrollbar that appears on hover and while scrolling."
          >
            <ScrollAreaDemo />
          </ComponentDemo>

          <ComponentDemo
            title="Separator"
            description="Visual dividers between content sections, available in horizontal and vertical orientations."
          >
            <SeparatorDemo />
          </ComponentDemo>
        </div>
      </main>
    </div>
  );
}
