# Base UI Playground - Application Architecture

## Overview

A Next.js App Router application that showcases every component from `@base-ui-components/react` (v1.x). The app serves as both a reference implementation and an interactive playground for developers evaluating or learning Base UI.

**Tech Stack:**

- **Framework:** Next.js 15 (App Router, React Server Components by default)
- **UI Library:** @base-ui-components/react (latest stable)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript 5
- **Code Highlighting:** Shiki (server-side syntax highlighting)
- **Package Manager:** pnpm

**Key Architectural Decisions:**

- Server Components by default; Client Components only where interactivity is required (demos, playground)
- Static generation (SSG) for all component pages via `generateStaticParams`
- Component metadata stored as TypeScript data files (not a database or CMS)
- Tailwind CSS for styling both the app shell and Base UI component demos

---

## 1. Page Structure (Next.js App Router)

### Route Tree

```
app/
  layout.tsx              # Root layout: html/body, fonts, ThemeProvider, Sidebar
  page.tsx                # Home page: hero, category grid, quick links
  globals.css             # Tailwind imports, CSS custom properties, base styles

  components/
    layout.tsx            # Components section layout: sidebar + content area
    page.tsx              # Components index: all categories listed with component counts

    [category]/
      page.tsx            # Category page: grid of components in this category
      [component]/
        page.tsx          # Individual component demo page

  playground/
    page.tsx              # Interactive playground (Client Component)

  not-found.tsx           # Custom 404
```

### Route Details

| Route                                | Description                                                           | Rendering              |
| ------------------------------------ | --------------------------------------------------------------------- | ---------------------- |
| `/`                                  | Hero section, feature highlights, category navigation cards           | SSG                    |
| `/components`                        | Grid of all categories with icons, descriptions, component counts     | SSG                    |
| `/components/[category]`             | All components within a category, each with a mini preview            | SSG                    |
| `/components/[category]/[component]` | Full component demo: interactive examples, props table, code snippets | SSG + client islands   |
| `/playground`                        | Freeform sandbox for combining components                             | CSR (Client Component) |

### Static Generation

All component and category pages are statically generated at build time:

```typescript
// app/components/[category]/[component]/page.tsx
export function generateStaticParams() {
  return getAllComponents().map((comp) => ({
    category: comp.category,
    component: comp.slug,
  }));
}
```

---

## 2. Component Grouping

All 35 Base UI components organized into 6 categories:

### Inputs & Forms (13 components)

Components for collecting user input and building forms.

| Component      | Base UI Import                  | Slug             |
| -------------- | ------------------------------- | ---------------- |
| Input          | `@base-ui/react/input`          | `input`          |
| Number Field   | `@base-ui/react/number-field`   | `number-field`   |
| Select         | `@base-ui/react/select`         | `select`         |
| Combobox       | `@base-ui/react/combobox`       | `combobox`       |
| Autocomplete   | `@base-ui/react/autocomplete`   | `autocomplete`   |
| Checkbox       | `@base-ui/react/checkbox`       | `checkbox`       |
| Checkbox Group | `@base-ui/react/checkbox-group` | `checkbox-group` |
| Radio          | `@base-ui/react/radio`          | `radio`          |
| Switch         | `@base-ui/react/switch`         | `switch`         |
| Slider         | `@base-ui/react/slider`         | `slider`         |
| Field          | `@base-ui/react/field`          | `field`          |
| Fieldset       | `@base-ui/react/fieldset`       | `fieldset`       |
| Form           | `@base-ui/react/form`           | `form`           |

### Navigation (4 components)

Components for navigating within and across pages.

| Component       | Base UI Import                   | Slug              |
| --------------- | -------------------------------- | ----------------- |
| Tabs            | `@base-ui/react/tabs`            | `tabs`            |
| Menu            | `@base-ui/react/menu`            | `menu`            |
| Menubar         | `@base-ui/react/menubar`         | `menubar`         |
| Navigation Menu | `@base-ui/react/navigation-menu` | `navigation-menu` |

### Feedback (4 components)

Components that communicate status, progress, or results to the user.

| Component    | Base UI Import                | Slug           |
| ------------ | ----------------------------- | -------------- |
| Alert Dialog | `@base-ui/react/alert-dialog` | `alert-dialog` |
| Toast        | `@base-ui/react/toast`        | `toast`        |
| Progress     | `@base-ui/react/progress`     | `progress`     |
| Meter        | `@base-ui/react/meter`        | `meter`        |

### Overlays (6 components)

Components that render floating or layered content above the page.

| Component    | Base UI Import                | Slug           |
| ------------ | ----------------------------- | -------------- |
| Dialog       | `@base-ui/react/dialog`       | `dialog`       |
| Drawer       | `@base-ui/react/drawer`       | `drawer`       |
| Popover      | `@base-ui/react/popover`      | `popover`      |
| Tooltip      | `@base-ui/react/tooltip`      | `tooltip`      |
| Context Menu | `@base-ui/react/context-menu` | `context-menu` |
| Preview Card | `@base-ui/react/preview-card` | `preview-card` |

### Data Display (4 components)

Components for presenting and organizing content.

| Component   | Base UI Import               | Slug          |
| ----------- | ---------------------------- | ------------- |
| Accordion   | `@base-ui/react/accordion`   | `accordion`   |
| Collapsible | `@base-ui/react/collapsible` | `collapsible` |
| Scroll Area | `@base-ui/react/scroll-area` | `scroll-area` |
| Avatar      | `@base-ui/react/avatar`      | `avatar`      |

### Layout & Utility (4 components)

Structural components and interactive primitives.

| Component    | Base UI Import                | Slug           |
| ------------ | ----------------------------- | -------------- |
| Button       | `@base-ui/react/button`       | `button`       |
| Separator    | `@base-ui/react/separator`    | `separator`    |
| Toggle       | `@base-ui/react/toggle`       | `toggle`       |
| Toggle Group | `@base-ui/react/toggle-group` | `toggle-group` |
| Toolbar      | `@base-ui/react/toolbar`      | `toolbar`      |

### Category Metadata

```typescript
// src/data/categories.ts
export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string; // Lucide icon name
}

export const categories: Category[] = [
  {
    slug: "inputs-forms",
    name: "Inputs & Forms",
    description: "Components for collecting user input and building forms.",
    icon: "text-cursor-input",
  },
  {
    slug: "navigation",
    name: "Navigation",
    description: "Components for navigating within and across pages.",
    icon: "compass",
  },
  {
    slug: "feedback",
    name: "Feedback",
    description: "Components that communicate status, progress, or results.",
    icon: "message-circle",
  },
  {
    slug: "overlays",
    name: "Overlays",
    description: "Components that render floating content above the page.",
    icon: "layers",
  },
  {
    slug: "data-display",
    name: "Data Display",
    description: "Components for presenting and organizing content.",
    icon: "layout-list",
  },
  {
    slug: "layout-utility",
    name: "Layout & Utility",
    description: "Structural components and interactive primitives.",
    icon: "puzzle",
  },
];
```

---

## 3. Shared Components

### App Shell Components

Located in `src/components/app/`:

| Component      | File                | Description                                                                                                               |
| -------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `AppSidebar`   | `app-sidebar.tsx`   | Left sidebar with category navigation, component list, and search. Uses `Collapsible` from Base UI for category sections. |
| `AppHeader`    | `app-header.tsx`    | Top header with breadcrumbs, mobile menu trigger, GitHub link.                                                            |
| `ThemeToggle`  | `theme-toggle.tsx`  | Light/dark mode toggle. Uses `next-themes` for SSR-safe theme switching.                                                  |
| `MobileNav`    | `mobile-nav.tsx`    | Drawer-based navigation for mobile. Uses Base UI `Drawer`.                                                                |
| `SearchDialog` | `search-dialog.tsx` | Command-palette style search (Cmd+K). Uses Base UI `Dialog` + filtering logic.                                            |
| `Breadcrumbs`  | `breadcrumbs.tsx`   | Dynamic breadcrumb trail from route segments.                                                                             |

### Component Showcase Components

Located in `src/components/showcase/`:

| Component           | File                     | Description                                                                                                          |
| ------------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| `ComponentShowcase` | `component-showcase.tsx` | Main wrapper for each demo section. Renders title, description, the live demo, and a toggleable code panel.          |
| `DemoContainer`     | `demo-container.tsx`     | Bordered container for live demos. Provides consistent padding, background, and visual boundary.                     |
| `CodeBlock`         | `code-block.tsx`         | Server-rendered syntax-highlighted code using Shiki. Accepts `code` string and `language`. Includes copy button.     |
| `CodeToggle`        | `code-toggle.tsx`        | Client Component button that toggles code visibility within `ComponentShowcase`.                                     |
| `PropsTable`        | `props-table.tsx`        | Renders a component's props as a styled table. Columns: name, type, default, description.                            |
| `ComponentCard`     | `component-card.tsx`     | Card used in category/index pages showing component name, description, and mini preview. Links to full demo page.    |
| `CategoryCard`      | `category-card.tsx`      | Card for the components index page showing category name, icon, description, and component count.                    |
| `VariantTabs`       | `variant-tabs.tsx`       | When a component has multiple demo variants (e.g., sizes, states), tabs to switch between them. Uses Base UI `Tabs`. |

### Component Architecture: `ComponentShowcase`

This is the primary building block of every component demo page. Its structure:

```
ComponentShowcase
  +-- title (h2)
  +-- description (paragraph)
  +-- DemoContainer
  |     +-- [LiveDemo] (Client Component - the actual Base UI demo)
  +-- CodeToggle (Client Component - show/hide button)
  +-- CodeBlock (Server Component - Shiki-highlighted code)
```

Each component page renders one or more `ComponentShowcase` blocks -- one per demo variant (e.g., "Basic", "Disabled", "With Validation", "Custom Styling").

```tsx
// Usage in a component page:
<ComponentShowcase
  title="Basic Accordion"
  description="A simple accordion with three collapsible panels."
  code={basicAccordionCode}
  language="tsx"
>
  <BasicAccordionDemo />
</ComponentShowcase>
```

---

## 4. File Structure

```
base-ui-playground/
  docs/
    ARCHITECTURE.md           # This file

  public/
    og-image.png              # Open Graph image

  src/
    app/
      layout.tsx              # Root layout
      page.tsx                # Home page
      globals.css             # Global styles + Tailwind

      components/
        layout.tsx            # Components section layout (sidebar + outlet)
        page.tsx              # /components index

        [category]/
          page.tsx            # Category listing
          [component]/
            page.tsx          # Component demo page

      playground/
        page.tsx              # Interactive playground

      not-found.tsx           # 404 page

    components/
      app/                    # App shell components
        app-sidebar.tsx
        app-header.tsx
        theme-toggle.tsx
        mobile-nav.tsx
        search-dialog.tsx
        breadcrumbs.tsx

      showcase/               # Component demo components
        component-showcase.tsx
        demo-container.tsx
        code-block.tsx
        code-toggle.tsx
        props-table.tsx
        component-card.tsx
        category-card.tsx
        variant-tabs.tsx

      demos/                  # Actual Base UI component demos
        accordion/
          basic.tsx           # Client Component: basic accordion demo
          controlled.tsx      # Client Component: controlled accordion
          index.ts            # Re-exports all demos
        alert-dialog/
          basic.tsx
          nested.tsx
          index.ts
        autocomplete/
          basic.tsx
          index.ts
        avatar/
          basic.tsx
          group.tsx
          index.ts
        button/
          basic.tsx
          variants.tsx
          index.ts
        checkbox/
          basic.tsx
          indeterminate.tsx
          index.ts
        checkbox-group/
          basic.tsx
          index.ts
        collapsible/
          basic.tsx
          index.ts
        combobox/
          basic.tsx
          index.ts
        context-menu/
          basic.tsx
          index.ts
        dialog/
          basic.tsx
          form-dialog.tsx
          nested.tsx
          index.ts
        drawer/
          basic.tsx
          anchors.tsx
          index.ts
        field/
          basic.tsx
          validation.tsx
          index.ts
        fieldset/
          basic.tsx
          index.ts
        form/
          basic.tsx
          index.ts
        input/
          basic.tsx
          with-field.tsx
          index.ts
        menu/
          basic.tsx
          nested.tsx
          with-icons.tsx
          index.ts
        menubar/
          basic.tsx
          index.ts
        meter/
          basic.tsx
          index.ts
        navigation-menu/
          basic.tsx
          index.ts
        number-field/
          basic.tsx
          index.ts
        popover/
          basic.tsx
          index.ts
        preview-card/
          basic.tsx
          index.ts
        progress/
          basic.tsx
          indeterminate.tsx
          index.ts
        radio/
          basic.tsx
          index.ts
        scroll-area/
          basic.tsx
          index.ts
        select/
          basic.tsx
          grouped.tsx
          index.ts
        separator/
          basic.tsx
          index.ts
        slider/
          basic.tsx
          range.tsx
          index.ts
        switch/
          basic.tsx
          index.ts
        tabs/
          basic.tsx
          index.ts
        toast/
          basic.tsx
          variants.tsx
          index.ts
        toggle/
          basic.tsx
          index.ts
        toggle-group/
          basic.tsx
          index.ts
        toolbar/
          basic.tsx
          index.ts
        tooltip/
          basic.tsx
          index.ts

    data/                     # Component metadata and registry
      categories.ts           # Category definitions
      components.ts           # Component registry (all 35 components)
      props/                  # Props metadata per component
        accordion.ts
        alert-dialog.ts
        ... (one file per component)
        index.ts              # Re-exports all props

    lib/                      # Shared utilities
      code.ts                 # Shiki highlighter setup, code loading utilities
      utils.ts                # General utilities (cn, slugify, etc.)
      types.ts                # Shared TypeScript types

    hooks/                    # Custom React hooks
      use-copy-to-clipboard.ts

  tailwind.config.ts          # Tailwind configuration (if needed beyond v4 defaults)
  tsconfig.json
  next.config.ts
  package.json
  .env.local                  # Environment variables (if any)
  CLAUDE.md                   # Project-specific agent instructions
  AGENTS.md                   # Cross-agent instructions
```

---

## 5. Data Model

### Component Registry

The central data structure is the component registry. It maps every Base UI component to its metadata, category, and demo references.

```typescript
// src/data/components.ts

export interface ComponentDemo {
  /** Display name for the demo variant */
  name: string;
  /** Description of what this variant shows */
  description: string;
  /** Path to the demo component file (for dynamic import) */
  componentPath: string;
  /** Raw source code string (imported at build time) */
  code: string;
}

export interface ComponentMeta {
  /** URL-safe slug: "number-field" */
  slug: string;
  /** Display name: "Number Field" */
  name: string;
  /** One-line description */
  description: string;
  /** Category slug: "inputs-forms" */
  category: string;
  /** Base UI import path: "@base-ui/react/number-field" */
  importPath: string;
  /** Sub-components: ["Root", "Input", "Increment", "Decrement", "ScrubArea"] */
  subComponents: string[];
  /** Link to official Base UI docs */
  docsUrl: string;
  /** Demo variants for this component */
  demos: ComponentDemo[];
}

// Full registry
export const components: ComponentMeta[] = [
  {
    slug: "accordion",
    name: "Accordion",
    description: "A set of collapsible panels with headings.",
    category: "data-display",
    importPath: "@base-ui/react/accordion",
    subComponents: ["Root", "Item", "Header", "Trigger", "Panel"],
    docsUrl: "https://base-ui.com/react/components/accordion",
    demos: [
      {
        name: "Basic",
        description: "A simple accordion with three panels.",
        componentPath: "@/components/demos/accordion/basic",
        code: "", // Populated at build time or via raw import
      },
      {
        name: "Controlled",
        description: "An accordion with controlled open state.",
        componentPath: "@/components/demos/accordion/controlled",
        code: "",
      },
    ],
  },
  // ... all 35 components
];
```

### Accessor Functions

```typescript
// src/data/components.ts (continued)

export function getAllComponents(): ComponentMeta[] {
  return components;
}

export function getComponentsByCategory(categorySlug: string): ComponentMeta[] {
  return components.filter((c) => c.category === categorySlug);
}

export function getComponent(slug: string): ComponentMeta | undefined {
  return components.find((c) => c.slug === slug);
}

export function getComponentByCategory(
  categorySlug: string,
  componentSlug: string,
): ComponentMeta | undefined {
  return components.find(
    (c) => c.category === categorySlug && c.slug === componentSlug,
  );
}

export function getAllCategories(): Category[] {
  return categories;
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
```

### Props Metadata

```typescript
// src/data/props/accordion.ts

export interface PropDefinition {
  name: string;
  type: string;
  default?: string;
  required: boolean;
  description: string;
}

export interface SubComponentProps {
  subComponent: string;
  props: PropDefinition[];
}

export const accordionProps: SubComponentProps[] = [
  {
    subComponent: "Root",
    props: [
      {
        name: "defaultValue",
        type: "string[]",
        default: "[]",
        required: false,
        description: "The default open panels (uncontrolled).",
      },
      {
        name: "value",
        type: "string[]",
        required: false,
        description: "The open panels (controlled).",
      },
      {
        name: "onValueChange",
        type: "(value: string[]) => void",
        required: false,
        description: "Callback when open panels change.",
      },
      // ...
    ],
  },
  {
    subComponent: "Item",
    props: [
      {
        name: "value",
        type: "string",
        required: true,
        description: "Unique identifier for this panel.",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        required: false,
        description: "Whether the panel is disabled.",
      },
    ],
  },
  // ... Trigger, Header, Panel
];
```

### Source Code Loading

Demo source code is loaded at build time using raw string imports so the `CodeBlock` can display the actual source without runtime file reading.

```typescript
// src/components/demos/accordion/index.ts
export { default as BasicAccordionDemo } from "./basic";
export { default as ControlledAccordionDemo } from "./controlled";

// Raw source for code display
export { default as basicAccordionCode } from "./basic.tsx?raw";
export { default as controlledAccordionCode } from "./controlled.tsx?raw";
```

For Next.js, raw imports require a webpack/turbopack loader config:

```typescript
// next.config.ts
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      resourceQuery: /raw/,
      type: "asset/source",
    });
    return config;
  },
};
```

Alternative (simpler, no config): Use `fs.readFileSync` in a Server Component with a known file path, since component pages are statically generated:

```typescript
// In the [component]/page.tsx Server Component:
import { readFileSync } from "fs";
import { join } from "path";

const code = readFileSync(
  join(process.cwd(), "src/components/demos/accordion/basic.tsx"),
  "utf-8",
);
```

**Recommendation:** Use the `fs.readFileSync` approach. It is simpler, requires no bundler config, and is safe because these pages are statically generated at build time.

---

## 6. Styling Strategy

### Approach: Tailwind CSS v4

Base UI components are unstyled by design. We apply Tailwind CSS utility classes directly via the `className` prop on each sub-component part. This aligns with Base UI's official Tailwind examples.

### Styling Layers

1. **App Shell** -- The sidebar, header, layout, and shared showcase components use Tailwind utility classes directly. A neutral design system (gray tones, clean borders, generous spacing).

2. **Component Demos** -- Each demo applies Tailwind classes to Base UI sub-components. The demos follow Base UI's official Tailwind examples as a starting point, with adjustments for visual consistency across the app.

3. **Dark Mode** -- Tailwind's `dark:` variant, driven by `next-themes`. The `<html>` element gets a `class="dark"` attribute. All demos and app shell components include dark mode variants.

### Data Attribute Styling

Base UI exposes data attributes for component states (`[data-checked]`, `[data-highlighted]`, `[data-popup-open]`, etc.). These are styled using Tailwind's arbitrary variant syntax:

```tsx
<Switch.Thumb
  className="
  size-5 rounded-full bg-white shadow transition-transform
  data-[checked]:translate-x-5
"
/>
```

For group-level data attributes (e.g., parent state affecting child), use Tailwind's `group` utility:

```tsx
<Accordion.Trigger className="group ...">
  <ChevronIcon className="transition-transform group-data-[panel-open]:rotate-180" />
</Accordion.Trigger>
```

### CSS Variables from Base UI

Some Base UI components expose CSS variables for dynamic sizing (e.g., `--accordion-panel-height`, `--available-height`, `--anchor-width`). These are consumed via Tailwind's arbitrary value syntax:

```tsx
<Accordion.Panel className="h-[var(--accordion-panel-height)] overflow-hidden transition-[height]" />
```

### Animation Strategy

Base UI supports entry/exit animations via `[data-starting-style]` and `[data-ending-style]` data attributes. Use Tailwind arbitrary variants:

```tsx
<Menu.Popup
  className="
  origin-[var(--transform-origin)]
  transition-[transform,scale,opacity]
  data-[starting-style]:scale-90
  data-[starting-style]:opacity-0
  data-[ending-style]:scale-90
  data-[ending-style]:opacity-0
"
/>
```

### Utility Function

A `cn()` helper (using `clsx` + `tailwind-merge`) for conditional class composition:

```typescript
// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### Global Styles

```css
/* src/app/globals.css */
@import "tailwindcss";

/*
 * Isolation context for Base UI portals.
 * Ensures portaled popups (Dialog, Popover, Tooltip, etc.)
 * render above all page content regardless of z-index.
 */
.root {
  isolation: isolate;
}

/*
 * iOS 26+ Safari: required for backdrop positioning
 */
body {
  position: relative;
}
```

---

## 7. Playground Architecture

The `/playground` page is a fully client-side interactive sandbox.

### Design

The playground allows users to:

- Pick a Base UI component from a sidebar list
- Adjust its props via auto-generated controls (toggles, selects, text inputs)
- See the live result in a preview pane
- Copy the generated code

### Structure

```
PlaygroundPage (Client Component)
  +-- PlaygroundSidebar
  |     +-- Component picker (searchable list)
  |     +-- Props panel (auto-generated from props metadata)
  +-- PlaygroundPreview
  |     +-- Live rendered component with current props
  +-- PlaygroundCodePanel
        +-- Generated code output (read-only, copyable)
```

### Implementation Notes

- The playground uses `useState` for all prop values
- Component rendering is done via a registry mapping slug -> React component factory
- Code generation is a string template function per component
- Props controls are generated from the `PropDefinition[]` metadata:
  - `boolean` props -> Switch/Toggle
  - `string` props -> Input
  - `string` union props (e.g., `"sm" | "md" | "lg"`) -> Select
  - `number` props -> NumberField/Slider
- Playground state is persisted in the URL via query params (shareable links)

---

## 8. Performance Considerations

| Concern           | Strategy                                                                                                   |
| ----------------- | ---------------------------------------------------------------------------------------------------------- |
| Bundle size       | Tree-shaking via `@base-ui/react/[component]` imports (not barrel imports). Each demo is a separate chunk. |
| Initial load      | SSG for all pages. Demos are Client Component islands within Server Component pages.                       |
| Code highlighting | Shiki runs at build time (Server Component). Zero runtime JS for syntax highlighting.                      |
| Images            | Next.js `<Image>` for any static assets. No component screenshots needed (live demos instead).             |
| Navigation        | `next/link` with prefetching for instant page transitions.                                                 |
| Search            | Client-side fuzzy search over the component registry (small dataset, no server needed).                    |

---

## 9. Dependencies

### Production

| Package                     | Purpose                           |
| --------------------------- | --------------------------------- |
| `next` (15.x)               | Framework                         |
| `react`, `react-dom` (19.x) | UI library                        |
| `@base-ui-components/react` | Component library being showcased |
| `tailwindcss` (v4)          | Styling                           |
| `next-themes`               | Dark mode with SSR support        |
| `shiki`                     | Server-side syntax highlighting   |
| `clsx`                      | Conditional class names           |
| `tailwind-merge`            | Tailwind class deduplication      |
| `lucide-react`              | Icons for app shell               |

### Development

| Package                                   | Purpose                                |
| ----------------------------------------- | -------------------------------------- |
| `typescript`                              | Type safety                            |
| `eslint`, `eslint-config-next`            | Linting                                |
| `prettier`, `prettier-plugin-tailwindcss` | Formatting with Tailwind class sorting |

---

## 10. Key Design Trade-offs

### Why TypeScript data files instead of MDX/CMS?

**Chosen:** Component metadata lives in `.ts` files (`src/data/`).

| Alternative             | Pros                                 | Cons                                                    | Why rejected                                                                |
| ----------------------- | ------------------------------------ | ------------------------------------------------------- | --------------------------------------------------------------------------- |
| MDX files per component | Rich content, familiar to docs teams | Adds MDX toolchain, slower builds, harder to type-check | Over-engineered for structured data; we need typed metadata, not rich prose |
| Headless CMS            | Non-dev editing, API-driven          | External dependency, latency, cost, auth complexity     | No non-developer editors; all content is code-adjacent                      |
| JSON files              | Language-agnostic                    | No type safety without codegen, no code colocation      | TypeScript files give us types, imports, and IDE support for free           |

### Why Shiki instead of Prism/highlight.js?

**Chosen:** Shiki with server-side rendering.

- Shiki produces VS Code-quality highlighting with zero client JS
- Runs at build time in Server Components (no hydration cost)
- Supports all languages and themes out of the box
- Trade-off: Slightly slower build times, but negligible for ~70 code blocks

### Why not a monorepo with the demos as a separate package?

This is a single application, not a library. A monorepo adds tooling complexity (turborepo, workspace config) with no benefit. If demos ever need to be published separately, we can extract later -- a two-way door decision.

### Why Tailwind v4 specifically?

Base UI's official examples target Tailwind v4. Using v4 ensures:

- Direct copy-paste compatibility with official docs
- Native CSS nesting, `@theme`, and modern features
- No configuration file needed (v4 is zero-config by default)

---

## 11. Implementation Path

Ordered by dependency. Each step produces a working (if incomplete) application.

| Step                       | Scope                                                                     | Depends On | Risk                                      |
| -------------------------- | ------------------------------------------------------------------------- | ---------- | ----------------------------------------- |
| 1. Project scaffolding     | `create-next-app`, install deps, Tailwind v4, base config                 | Nothing    | Low                                       |
| 2. Data layer              | `src/data/categories.ts`, `src/data/components.ts` with all 35 components | Step 1     | Low                                       |
| 3. App shell               | Root layout, sidebar, header, theme toggle, navigation                    | Steps 1-2  | Low                                       |
| 4. Route structure         | All page files with placeholder content, `generateStaticParams`           | Steps 1-3  | Low                                       |
| 5. Showcase components     | `ComponentShowcase`, `CodeBlock`, `PropsTable`, `DemoContainer`           | Steps 1-4  | Medium (Shiki setup)                      |
| 6. First 5 component demos | Button, Switch, Checkbox, Dialog, Accordion (one per category)            | Steps 1-5  | Medium (establishing demo patterns)       |
| 7. Remaining 30 demos      | All other component demos following established patterns                  | Steps 1-6  | Low (repetitive)                          |
| 8. Props metadata          | Props definitions for all 35 components                                   | Steps 1-2  | Medium (manual research)                  |
| 9. Search                  | Client-side search dialog (Cmd+K)                                         | Steps 1-3  | Low                                       |
| 10. Playground             | Interactive playground page                                               | Steps 1-8  | High (code generation, dynamic rendering) |
| 11. Polish                 | Animations, responsive design, OG images, accessibility audit             | Steps 1-10 | Low                                       |

**Critical path:** Steps 1 through 6 establish all patterns. Step 7 is parallelizable. Step 10 (playground) is the highest risk and can be deferred.
