# Base UI Playground -- Design System

This document defines the complete styling strategy for the Base UI component showcase.
Base UI (`@base-ui-components/react`) is an **unstyled** component library. Every visual
treatment described here is implemented with Tailwind CSS classes applied directly to
Base UI component parts via the `className` prop.

---

## Table of Contents

1. [Design Tokens](#1-design-tokens)
2. [Styling Approach](#2-styling-approach)
3. [Dark Mode Strategy](#3-dark-mode-strategy)
4. [Component Styles Reference](#4-component-styles-reference)
5. [Animation Patterns](#5-animation-patterns)
6. [Responsive Design](#6-responsive-design)
7. [Accessibility Styling](#7-accessibility-styling)

---

## 1. Design Tokens

All tokens map to Tailwind's default scale so they work out of the box without
extending `tailwind.config.ts`. Where custom values are needed (e.g. CSS
variables for Base UI internals), they are noted explicitly.

### 1.1 Color Palette

The palette is built on Tailwind's `gray` scale with a single accent color
(`blue-800`) for focus rings and primary actions. Semantic aliases keep intent
clear.

| Token                 | Light Value         | Dark Value              | Tailwind Class (light / dark)                    |
| --------------------- | ------------------- | ----------------------- | ------------------------------------------------ |
| **Background**        | `white` / `gray-50` | `gray-950` / `gray-900` | `bg-white` / `dark:bg-gray-950`                  |
| **Surface**           | `gray-50`           | `gray-900`              | `bg-gray-50` / `dark:bg-gray-900`                |
| **Surface Hover**     | `gray-100`          | `gray-800`              | `hover:bg-gray-100` / `dark:hover:bg-gray-800`   |
| **Surface Active**    | `gray-200`          | `gray-700`              | `active:bg-gray-200` / `dark:active:bg-gray-700` |
| **Border**            | `gray-200`          | `gray-700`              | `border-gray-200` / `dark:border-gray-700`       |
| **Border Subtle**     | `gray-100`          | `gray-800`              | `border-gray-100` / `dark:border-gray-800`       |
| **Text Primary**      | `gray-900`          | `gray-100`              | `text-gray-900` / `dark:text-gray-100`           |
| **Text Secondary**    | `gray-600`          | `gray-400`              | `text-gray-600` / `dark:text-gray-400`           |
| **Text Muted**        | `gray-400`          | `gray-500`              | `text-gray-400` / `dark:text-gray-500`           |
| **Text Inverse**      | `gray-50`           | `gray-900`              | `text-gray-50` / `dark:text-gray-900`            |
| **Focus Ring**        | `blue-800`          | `blue-400`              | `outline-blue-800` / `dark:outline-blue-400`     |
| **Accent**            | `gray-900`          | `gray-100`              | `bg-gray-900` / `dark:bg-gray-100`               |
| **Accent Text**       | `gray-50`           | `gray-900`              | `text-gray-50` / `dark:text-gray-900`            |
| **Danger**            | `red-600`           | `red-400`               | `text-red-600` / `dark:text-red-400`             |
| **Danger Background** | `red-50`            | `red-950`               | `bg-red-50` / `dark:bg-red-950`                  |
| **Success**           | `green-600`         | `green-400`             | `text-green-600` / `dark:text-green-400`         |
| **Warning**           | `amber-600`         | `amber-400`             | `text-amber-600` / `dark:text-amber-400`         |

**CSS custom properties** (defined in `globals.css` for Base UI CSS variable interop):

```css
:root {
  --color-background: theme(colors.white);
  --color-surface: theme(colors.gray.50);
  --color-border: theme(colors.gray.200);
  --color-text: theme(colors.gray.900);
  --color-text-secondary: theme(colors.gray.600);
  --color-accent: theme(colors.gray.900);
  --color-focus: theme(colors.blue.800);
}

.dark {
  --color-background: theme(colors.gray.950);
  --color-surface: theme(colors.gray.900);
  --color-border: theme(colors.gray.700);
  --color-text: theme(colors.gray.100);
  --color-text-secondary: theme(colors.gray.400);
  --color-accent: theme(colors.gray.100);
  --color-focus: theme(colors.blue.400);
}
```

### 1.2 Typography Scale

Uses Tailwind defaults. The showcase uses a system font stack for maximum
compatibility. All sizes reference Tailwind utility classes directly.

| Token          | Size / Leading     | Tailwind Class | Usage                        |
| -------------- | ------------------ | -------------- | ---------------------------- |
| **Display**    | 2.25rem / 2.5rem   | `text-4xl`     | Page hero headings           |
| **Heading 1**  | 1.875rem / 2.25rem | `text-3xl`     | Section headings             |
| **Heading 2**  | 1.5rem / 2rem      | `text-2xl`     | Subsection headings          |
| **Heading 3**  | 1.25rem / 1.75rem  | `text-xl`      | Card headings                |
| **Heading 4**  | 1.125rem / 1.75rem | `text-lg`      | Dialog titles, panel headers |
| **Body**       | 1rem / 1.5rem      | `text-base`    | Default body text            |
| **Body Small** | 0.875rem / 1.25rem | `text-sm`      | Labels, secondary text       |
| **Caption**    | 0.75rem / 1rem     | `text-xs`      | Hints, timestamps            |

**Font weights:**

| Weight         | Tailwind Class  | Usage                     |
| -------------- | --------------- | ------------------------- |
| Regular (400)  | `font-normal`   | Body text                 |
| Medium (500)   | `font-medium`   | Labels, buttons, triggers |
| Semibold (600) | `font-semibold` | Headings                  |
| Bold (700)     | `font-bold`     | Emphasis                  |

### 1.3 Spacing System

Follows Tailwind's 4px base grid. Key architectural spacings:

| Context                | Value    | Tailwind Class |
| ---------------------- | -------- | -------------- |
| Page padding (mobile)  | 1rem     | `p-4`          |
| Page padding (desktop) | 2rem     | `p-8`          |
| Section gap            | 3rem     | `gap-12`       |
| Card padding           | 1.5rem   | `p-6`          |
| Component internal gap | 0.5rem   | `gap-2`        |
| Input padding-left     | 0.875rem | `pl-3.5`       |
| Button padding-x       | 0.875rem | `px-3.5`       |

### 1.4 Border Radius Tokens

| Token       | Value    | Tailwind Class | Usage                               |
| ----------- | -------- | -------------- | ----------------------------------- |
| **None**    | 0        | `rounded-none` | --                                  |
| **Small**   | 0.25rem  | `rounded-sm`   | Checkboxes, indicator highlights    |
| **Default** | 0.375rem | `rounded-md`   | Buttons, inputs, selects, cards     |
| **Medium**  | 0.5rem   | `rounded-lg`   | Dialogs, popovers, popups, toasts   |
| **Large**   | 0.75rem  | `rounded-xl`   | Feature cards, hero sections        |
| **Full**    | 9999px   | `rounded-full` | Switch track, slider thumb, avatars |

### 1.5 Shadow Tokens

| Token       | Tailwind Class                                             | Usage                        |
| ----------- | ---------------------------------------------------------- | ---------------------------- |
| **Inset**   | `shadow-[inset_0_0_0_1px]`                                 | Track/progress inset borders |
| **Small**   | `shadow-sm`                                                | Subtle elevation             |
| **Default** | `shadow-md`                                                | Cards, raised surfaces       |
| **Large**   | `shadow-lg shadow-gray-200 dark:shadow-none`               | Popups, menus, dialogs       |
| **Outline** | `outline outline-1 outline-gray-200 dark:outline-gray-300` | Popup borders (light/dark)   |

**Pattern:** In light mode, popups use both `shadow-lg` and `outline-1`. In dark mode,
shadows are removed (`dark:shadow-none`) and outlines use a lighter gray
(`dark:outline-gray-300`) since shadows are invisible on dark backgrounds.

### 1.6 Animation / Transition Tokens

| Token               | Duration | Easing                                 | Tailwind                                                    |
| ------------------- | -------- | -------------------------------------- | ----------------------------------------------------------- |
| **Fast**            | 125ms    | `cubic-bezier(0.26, 0.75, 0.38, 0.45)` | `duration-[125ms] ease-[cubic-bezier(0.26,0.75,0.38,0.45)]` |
| **Default**         | 150ms    | `ease-out`                             | `duration-150`                                              |
| **Medium**          | 200ms    | `ease-in-out`                          | `duration-200 ease-in-out`                                  |
| **Slow**            | 300ms    | `ease-in-out`                          | `duration-300 ease-in-out`                                  |
| **Drawer**          | 450ms    | `cubic-bezier(0.32, 0.72, 0, 1)`       | `duration-[450ms] ease-[cubic-bezier(0.32,0.72,0,1)]`       |
| **Progress**        | 500ms    | default                                | `duration-500`                                              |
| **Height collapse** | --       | `ease-out`                             | `transition-[height] ease-out`                              |
| **Scale + opacity** | 150ms    | default                                | `transition-[transform,scale,opacity]`                      |

---

## 2. Styling Approach

Base UI is styling-agnostic. This project uses **Tailwind CSS classes** applied
directly to each component part. This section explains every available styling
mechanism.

### 2.1 The `className` Prop

Every Base UI component part that renders an HTML element accepts a `className`
prop. This is the primary styling hook.

```tsx
<Switch.Thumb className="aspect-square h-full rounded-full bg-white" />
```

**Callback form** -- the prop also accepts a function that receives the
component's state:

```tsx
<Switch.Thumb
  className={(state) =>
    state.checked ? "translate-x-4 bg-white" : "translate-x-0 bg-white"
  }
/>
```

**When to use the callback:** Only when class logic depends on state that is
not available as a data attribute. Prefer data attributes for state-based
styling (see next section).

### 2.2 Data Attributes for State-Based Styling

Base UI sets data attributes on rendered elements to reflect component state.
Tailwind's arbitrary data attribute selector (`data-[attr]:`) targets them
directly -- no JavaScript needed.

#### Common data attributes across components

| Data Attribute                    | Meaning                                   | Example Components                 |
| --------------------------------- | ----------------------------------------- | ---------------------------------- |
| `data-checked`                    | Component is in checked state             | Checkbox, Switch, Radio            |
| `data-unchecked`                  | Component is in unchecked state           | Checkbox, Switch, Radio            |
| `data-disabled`                   | Component is disabled                     | All interactive components         |
| `data-highlighted`                | Item is keyboard/pointer highlighted      | Menu.Item, Select.Item, Combobox   |
| `data-active`                     | Tab or toggle is currently active         | Tabs.Tab, Toggle                   |
| `data-pressed`                    | Toggle is pressed/on                      | Toggle                             |
| `data-open`                       | Popup/panel is open (CSS animations)      | Dialog, Popover, Menu, Collapsible |
| `data-closed`                     | Popup/panel is closed (CSS animations)    | Dialog, Popover, Menu, Collapsible |
| `data-starting-style`             | Initial style for CSS transitions (enter) | All popup/overlay components       |
| `data-ending-style`               | Final style for CSS transitions (exit)    | All popup/overlay components       |
| `data-popup-open`                 | Trigger's popup is currently open         | Menu.Trigger, Select.Trigger       |
| `data-panel-open`                 | Associated panel is open                  | Accordion.Trigger                  |
| `data-side=top/bottom/left/right` | Popup placement side                      | Tooltip.Arrow, Popover.Arrow       |
| `data-state=indeterminate`        | Checkbox is indeterminate                 | Checkbox                           |
| `data-dragging`                   | Slider thumb is being dragged             | Slider.Thumb                       |
| `data-instant`                    | Skip transitions (e.g., instant tooltips) | Tooltip.Popup                      |
| `data-swiping`                    | Drawer/toast is being swiped              | Drawer, Toast                      |
| `data-swipe-direction`            | Direction of active swipe                 | Toast                              |
| `data-expanded`                   | Toast stack is expanded                   | Toast                              |
| `data-behind`                     | Toast is not the frontmost                | Toast.Content                      |
| `data-limited`                    | Toast exceeds visible limit               | Toast                              |

#### Tailwind syntax for data attributes

```tsx
// Simple boolean attribute
className = "data-[checked]:bg-gray-900 data-[unchecked]:border";

// Attribute with value
className = "data-[side=top]:-bottom-2 data-[side=bottom]:-top-2";

// Combined with pseudo-classes
className =
  "data-[highlighted]:text-gray-50 data-[highlighted]:before:bg-gray-900";

// Group-based (styling children based on parent state)
// Parent: className="group"
// Child: className="group-data-[panel-open]:rotate-45"
```

### 2.3 CSS Custom Properties (CSS Variables)

Base UI exposes dynamic CSS variables on certain component parts. These are
critical for sizing, positioning, and transform calculations.

| CSS Variable                 | Component         | Description                             |
| ---------------------------- | ----------------- | --------------------------------------- |
| `--transform-origin`         | All popups        | Anchor-aware transform origin           |
| `--available-height`         | Popover, Select   | Max height before viewport overflow     |
| `--available-width`          | Popover, Select   | Max width before viewport overflow      |
| `--anchor-width`             | Select, Popover   | Width of the trigger element            |
| `--anchor-height`            | Select, Popover   | Height of the trigger element           |
| `--active-tab-width`         | Tabs.Indicator    | Width of the currently active tab       |
| `--active-tab-left`          | Tabs.Indicator    | Left offset of the currently active tab |
| `--accordion-panel-height`   | Accordion.Panel   | Full height of panel content            |
| `--collapsible-panel-height` | Collapsible.Panel | Full height of panel content            |
| `--slider-thumb-width`       | Slider            | Width of the thumb element              |
| `--slider-thumb-height`      | Slider            | Height of the thumb element             |
| `--popup-width`              | Popover.Popup     | Computed popup width                    |
| `--popup-height`             | Popover.Popup     | Computed popup height                   |
| `--positioner-width`         | Positioner parts  | Width of the positioner                 |
| `--positioner-height`        | Positioner parts  | Height of the positioner                |
| `--toast-index`              | Toast.Root        | Position index in the toast stack       |
| `--toast-offset-y`           | Toast.Root        | Computed Y offset for stacking          |
| `--toast-height`             | Toast.Root        | Height of the toast element             |
| `--toast-frontmost-height`   | Toast.Root        | Height of the frontmost toast           |
| `--toast-swipe-movement-x`   | Toast.Root        | Swipe X delta during gesture            |
| `--toast-swipe-movement-y`   | Toast.Root        | Swipe Y delta during gesture            |
| `--drawer-swipe-movement-x`  | Drawer.Popup      | Swipe X delta during gesture            |
| `--drawer-swipe-progress`    | Drawer.Backdrop   | 0-1 swipe progress for opacity calc     |

**Usage in Tailwind:**

```tsx
// Referencing CSS variables in Tailwind arbitrary values
className = "origin-[var(--transform-origin)]";
className = "h-[var(--accordion-panel-height)]";
className = "translate-x-[var(--active-tab-left)]";
className = "w-[var(--active-tab-width)]";
className = "max-h-[var(--available-height)]";
className = "min-w-[var(--anchor-width)]";
```

### 2.4 The `render` Prop

The `render` prop lets you replace the default rendered element with a custom
one while preserving all Base UI behavior (ARIA attributes, event handlers,
refs, etc).

**Two signatures:**

```tsx
// 1. Element form (JSX element) -- for composition with animation libraries
<Popover.Popup
  render={
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    />
  }
>
  Content
</Popover.Popup>

// 2. Function form -- receives (props, state) for conditional rendering
<Popover.Popup
  render={(props, state) => (
    <motion.div
      {...(props as HTMLMotionProps<'div'>)}
      initial={false}
      animate={{
        opacity: state.open ? 1 : 0,
        scale: state.open ? 1 : 0.8,
      }}
    />
  )}
>
  Content
</Popover.Popup>
```

**When to use `render`:**

- Integrating with animation libraries (Motion, Framer Motion)
- Rendering as a different HTML element (`render={<nav />}`)
- Composing with third-party components

### 2.5 The `style` Prop

Works like React's standard `style` prop but also supports a callback:

```tsx
<Switch.Thumb
  style={(state) => ({
    transform: state.checked ? "translateX(1rem)" : "translateX(0)",
  })}
/>
```

**When to use `style`:** Only for truly dynamic values that depend on runtime
calculations (e.g., computed positions). Prefer `className` and data attributes
for all other styling.

---

## 3. Dark Mode Strategy

### 3.1 Implementation Approach: Class-Based Dark Mode

We use Tailwind's `dark:` variant with the `class` strategy. This gives users
explicit control (toggle button) rather than relying solely on
`prefers-color-scheme`.

**Tailwind configuration (`tailwind.config.ts`):**

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
```

### 3.2 Dark Class Application

The `dark` class is toggled on the `<html>` element:

```html
<!-- Light mode -->
<html lang="en">
  <!-- Dark mode -->
  <html lang="en" class="dark"></html>
</html>
```

### 3.3 Toggle Mechanism

A client component manages the toggle and persists the preference in
`localStorage`:

```tsx
// src/components/theme-toggle.tsx
"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored) {
      setTheme(stored);
      applyTheme(stored);
    }
  }, []);

  function applyTheme(value: Theme) {
    const root = document.documentElement;
    if (value === "dark") {
      root.classList.add("dark");
    } else if (value === "light") {
      root.classList.remove("dark");
    } else {
      // System preference
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    }
  }

  function toggle() {
    const next =
      theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    applyTheme(next);
  }

  return (
    <button
      onClick={toggle}
      className="flex h-8 w-8 items-center justify-center rounded-md
        border border-gray-200 text-gray-600
        hover:bg-gray-100 focus-visible:outline focus-visible:outline-2
        focus-visible:-outline-offset-1 focus-visible:outline-blue-800
        dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800"
      aria-label={`Switch to ${theme === "light" ? "dark" : theme === "dark" ? "system" : "light"} mode`}
    >
      {/* Sun / Moon / System icon */}
    </button>
  );
}
```

### 3.4 Preventing FOUC (Flash of Unstyled Content)

Add an inline script in `<head>` via the root layout to apply the theme before
paint:

```tsx
// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### 3.5 Dark Mode Styling Pattern

Every component uses both light and dark variants inline:

```tsx
className="
  bg-gray-50 text-gray-900 border-gray-200
  dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700
"
```

**Popup-specific dark mode (shadows vs outlines):**

```tsx
// Light: shadow + thin outline
// Dark: no shadow (invisible on dark), thicker outline
className="
  shadow-lg shadow-gray-200 outline outline-1 outline-gray-200
  dark:shadow-none dark:outline-gray-300 dark:-outline-offset-1
"
```

---

## 4. Component Styles Reference

This section defines the complete Tailwind class map for every Base UI
component. The corresponding TypeScript implementation lives in
`src/styles/component-styles.ts`.

### Implementation File: `src/styles/component-styles.ts`

```typescript
/**
 * Base UI Component Styles
 *
 * Central style definitions for all Base UI component parts.
 * Each component maps its sub-parts to Tailwind CSS class strings.
 *
 * Usage:
 *   import { componentStyles } from '@/styles/component-styles';
 *   <Accordion.Trigger className={componentStyles.accordion.trigger}>
 *
 * All styles include:
 *   - Light and dark mode variants
 *   - Focus-visible outlines for keyboard navigation
 *   - Data-attribute-based state styling
 *   - Responsive adjustments where relevant
 */

export const componentStyles = {
  // ---------------------------------------------------------------------------
  // ACCORDION
  // ---------------------------------------------------------------------------
  accordion: {
    root: "flex w-full max-w-md flex-col justify-center text-gray-900 dark:text-gray-100",
    item: "border-b border-gray-200 dark:border-gray-700",
    header: "",
    trigger: [
      "group relative flex w-full items-baseline justify-between gap-4",
      "bg-gray-50 py-2 pr-1 pl-3 text-left font-medium",
      "hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800",
      "focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-800",
      "dark:focus-visible:outline-blue-400",
    ].join(" "),
    triggerIcon: [
      "mr-2 size-3 shrink-0 transition-all ease-out",
      "group-data-[panel-open]:scale-110 group-data-[panel-open]:rotate-45",
    ].join(" "),
    panel: [
      "h-[var(--accordion-panel-height)] overflow-hidden text-base",
      "text-gray-600 dark:text-gray-400",
      "transition-[height] ease-out",
      "data-[ending-style]:h-0 data-[starting-style]:h-0",
    ].join(" "),
    panelContent: "p-3",
  },

  // ---------------------------------------------------------------------------
  // ALERT DIALOG
  // ---------------------------------------------------------------------------
  alertDialog: {
    trigger: [
      "flex h-10 items-center justify-center rounded-md",
      "border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-gray-900",
      "select-none hover:bg-gray-100 active:bg-gray-100",
      "focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800",
      "dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800",
      "dark:focus-visible:outline-blue-400",
    ].join(" "),
    backdrop: [
      "fixed inset-0 min-h-dvh bg-black opacity-20",
      "transition-all duration-150",
      "data-[ending-style]:opacity-0 data-[starting-style]:opacity-0",
      "dark:opacity-70",
    ].join(" "),
    popup: [
      "fixed top-1/2 left-1/2 -mt-8 w-96 max-w-[calc(100vw-3rem)]",
      "-translate-x-1/2 -translate-y-1/2 rounded-lg",
      "bg-gray-50 p-6 text-gray-900",
      "outline outline-1 outline-gray-200",
      "transition-all duration-150",
      "data-[ending-style]:scale-90 data-[ending-style]:opacity-0",
      "data-[starting-style]:scale-90 data-[starting-style]:opacity-0",
      "dark:bg-gray-900 dark:text-gray-100 dark:outline-gray-300",
    ].join(" "),
    title: "-mt-1.5 mb-1 text-lg font-medium",
    description: "mb-6 text-base text-gray-600 dark:text-gray-400",
    actions: "flex justify-end gap-4",
  },

  // ---------------------------------------------------------------------------
  // AVATAR
  // ---------------------------------------------------------------------------
  avatar: {
    root: "inline-flex size-10 items-center justify-center overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700",
    image: "size-full object-cover",
    fallback: "text-sm font-medium text-gray-600 dark:text-gray-300",
  },

  // ---------------------------------------------------------------------------
  // BUTTON (shared trigger/button style)
  // ---------------------------------------------------------------------------
  button: {
    base: [
      "flex h-10 items-center justify-center rounded-md px-3.5",
      "text-base font-medium select-none",
      "focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800",
      "dark:focus-visible:outline-blue-400",
    ].join(" "),
    primary: [
      "bg-gray-900 text-gray-50",
      "hover:bg-gray-800 active:bg-gray-700",
      "dark:bg-gray-100 dark:text-gray-900",
      "dark:hover:bg-gray-200 dark:active:bg-gray-300",
    ].join(" "),
    secondary: [
      "border border-gray-200 bg-gray-50 text-gray-900",
      "hover:bg-gray-100 active:bg-gray-100",
      "dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100",
      "dark:hover:bg-gray-800 dark:active:bg-gray-800",
    ].join(" "),
    danger: [
      "bg-red-600 text-white",
      "hover:bg-red-700 active:bg-red-800",
      "dark:bg-red-500 dark:hover:bg-red-600 dark:active:bg-red-700",
    ].join(" "),
    ghost: [
      "bg-transparent text-gray-900",
      "hover:bg-gray-100 active:bg-gray-200",
      "dark:text-gray-100 dark:hover:bg-gray-800 dark:active:bg-gray-700",
    ].join(" "),
    small: "h-8 px-2.5 text-sm",
    medium: "h-10 px-3.5 text-base",
    large: "h-12 px-5 text-lg",
  },

  // ---------------------------------------------------------------------------
  // CHECKBOX
  // ---------------------------------------------------------------------------
  checkbox: {
    label: "flex items-center gap-2 text-base text-gray-900 dark:text-gray-100",
    root: [
      "flex size-5 items-center justify-center rounded-sm",
      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800",
      "data-[checked]:bg-gray-900 dark:data-[checked]:bg-gray-100",
      "data-[unchecked]:border data-[unchecked]:border-gray-300 dark:data-[unchecked]:border-gray-600",
      "dark:focus-visible:outline-blue-400",
    ].join(" "),
    indicator: "flex text-gray-50 data-[unchecked]:hidden dark:text-gray-900",
    icon: "size-3",
  },

  // ---------------------------------------------------------------------------
  // CHECKBOX GROUP
  // ---------------------------------------------------------------------------
  checkboxGroup: {
    root: "flex flex-col gap-2",
  },

  // ---------------------------------------------------------------------------
  // COLLAPSIBLE
  // ---------------------------------------------------------------------------
  collapsible: {
    root: "flex w-80 flex-col gap-2",
    trigger: [
      "flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium",
      "hover:bg-gray-100 dark:hover:bg-gray-800",
      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-800",
      "dark:focus-visible:outline-blue-400",
    ].join(" "),
    panel: [
      "h-[var(--collapsible-panel-height)] overflow-hidden text-sm",
      "text-gray-600 dark:text-gray-400",
      "transition-[height] ease-out",
      "data-[ending-style]:h-0 data-[starting-style]:h-0",
    ].join(" "),
  },

  // ---------------------------------------------------------------------------
  // COMBOBOX
  // ---------------------------------------------------------------------------
  combobox: {
    root: "flex flex-col gap-1",
    label: "text-sm font-medium text-gray-900 dark:text-gray-100",
    control:
      "flex items-center rounded-md border border-gray-200 dark:border-gray-700",
    input: [
      "h-10 w-56 rounded-md bg-transparent pl-3.5 text-base text-gray-900",
      "focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-blue-800",
      "dark:text-gray-100 dark:focus:outline-blue-400",
    ].join(" "),
    positioner: "outline-none select-none z-10",
    popup: [
      "min-w-[var(--anchor-width)] origin-[var(--transform-origin)]",
      "rounded-md bg-[canvas] py-1 text-gray-900",
      "shadow-lg shadow-gray-200 outline outline-1 outline-gray-200",
      "transition-[transform,scale,opacity]",
      "data-[ending-style]:scale-90 data-[ending-style]:opacity-0",
      "data-[starting-style]:scale-90 data-[starting-style]:opacity-0",
      "dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300 dark:text-gray-100",
    ].join(" "),
    item: [
      "flex cursor-default py-2 pr-8 pl-4 text-sm leading-4",
      "outline-none select-none",
      "data-[highlighted]:relative data-[highlighted]:z-0",
      "data-[highlighted]:text-gray-50",
      "data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1",
      "data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1]",
      "data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900",
      "dark:data-[highlighted]:text-gray-900 dark:data-[highlighted]:before:bg-gray-100",
    ].join(" "),
    noResults: "px-4 py-2 text-sm text-gray-500 dark:text-gray-400",
  },

  // ---------------------------------------------------------------------------
  // CONTEXT MENU
  // ---------------------------------------------------------------------------
  contextMenu: {
    // Uses same popup/item styles as menu
    trigger: [
      "flex h-40 w-64 items-center justify-center rounded-md",
      "border border-dashed border-gray-300 text-sm text-gray-500",
      "dark:border-gray-600 dark:text-gray-400",
    ].join(" "),
    // popup and item styles reuse menu styles
  },

  // ---------------------------------------------------------------------------
  // DIALOG
  // ---------------------------------------------------------------------------
  dialog: {
    trigger: [
      "flex h-10 items-center justify-center rounded-md",
      "border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-gray-900",
      "select-none hover:bg-gray-100 active:bg-gray-100",
      "focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800",
      "dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800",
      "dark:focus-visible:outline-blue-400",
    ].join(" "),
    backdrop: [
      "fixed inset-0 min-h-dvh bg-black opacity-20",
      "transition-all duration-150",
      "data-[ending-style]:opacity-0 data-[starting-style]:opacity-0",
      "dark:opacity-70",
      "supports-[-webkit-touch-callout:none]:absolute",
    ].join(" "),
    popup: [
      "fixed top-1/2 left-1/2 -mt-8 w-96 max-w-[calc(100vw-3rem)]",
      "-translate-x-1/2 -translate-y-1/2 rounded-lg",
      "bg-gray-50 p-6 text-gray-900",
      "outline outline-1 outline-gray-200",
      "transition-all duration-150",
      "data-[ending-style]:scale-90 data-[ending-style]:opacity-0",
      "data-[starting-style]:scale-90 data-[starting-style]:opacity-0",
      "dark:bg-gray-900 dark:text-gray-100 dark:outline-gray-300",
    ].join(" "),
    title: "-mt-1.5 mb-1 text-lg font-medium",
    description: "mb-6 text-base text-gray-600 dark:text-gray-400",
    close: [
      "flex h-10 items-center justify-center rounded-md",
      "border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-gray-900",
      "select-none hover:bg-gray-100 active:bg-gray-100",
      "focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800",
      "dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800",
      "dark:focus-visible:outline-blue-400",
    ].join(" "),
    actions: "flex justify-end gap-4",
  },

  // ---------------------------------------------------------------------------
  // DRAWER
  // ---------------------------------------------------------------------------
  drawer: {
    trigger: [
      "flex h-10 items-center justify-center rounded-md",
      "border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-gray-900",
      "select-none hover:bg-gray-100 active:bg-gray-100",
      "focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800",
      "dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800",
      "dark:focus-visible:outline-blue-400",
    ].join(" "),
    backdrop: [
      "[--backdrop-opacity:0.2] dark:[--backdrop-opacity:0.7]",
      "fixed inset-0 min-h-dvh bg-black",
      "opacity-[calc(var(--backdrop-opacity)*(1-var(--drawer-swipe-progress)))]",
      "transition-opacity duration-[450ms] ease-[cubic-bezier(0.32,0.72,0,1)]",
      "data-[swiping]:duration-0",
      "data-[ending-style]:opacity-0 data-[starting-style]:opacity-0",
      "data-[ending-style]:duration-[calc(var(--drawer-swipe-strength)*400ms)]",
      "supports-[-webkit-touch-callout:none]:absolute",
    ].join(" "),
    viewport: [
      "fixed inset-0 flex items-stretch justify-end",
      "[--viewport-padding:0px]",
      "supports-[-webkit-touch-callout:none]:[--viewport-padding:0.625rem]",
      "p-[var(--viewport-padding)]",
    ].join(" "),
    popup: [
      "[--bleed:3rem] h-full w-[calc(20rem+3rem)] max-w-[calc(100vw-3rem+3rem)]",
      "-mr-[3rem] bg-gray-50 p-6 pr-[calc(1.5rem+3rem)]",
      "text-gray-900 outline outline-1 outline-gray-200",
      "overflow-y-auto overscroll-contain touch-auto",
      "[transform:translateX(var(--drawer-swipe-movement-x))]",
      "transition-transform duration-[450ms] ease-[cubic-bezier(0.32,0.72,0,1)]",
      "data-[swiping]:select-none",
      "data-[ending-style]:[transform:translateX(calc(100%-var(--bleed)+var(--viewport-padding)))]",
      "data-[starting-style]:[transform:translateX(calc(100%-var(--bleed)+var(--viewport-padding)))]",
      "dark:bg-gray-900 dark:text-gray-100 dark:outline-gray-300",
    ].join(" "),
    content: "mx-auto w-full max-w-[32rem]",
    title: "-mt-1.5 mb-1 text-lg font-medium",
    description: "mb-6 text-base text-gray-600 dark:text-gray-400",
  },

  // ---------------------------------------------------------------------------
  // FIELD
  // ---------------------------------------------------------------------------
  field: {
    root: "flex flex-col gap-1",
    label: "text-sm font-medium text-gray-900 dark:text-gray-100",
    description: "text-sm text-gray-500 dark:text-gray-400",
    error: "text-sm text-red-600 dark:text-red-400",
    control: "",
  },

  // ---------------------------------------------------------------------------
  // FIELDSET
  // ---------------------------------------------------------------------------
  fieldset: {
    root: "flex flex-col gap-4 rounded-lg border border-gray-200 p-4 dark:border-gray-700",
    legend: "text-sm font-medium text-gray-900 dark:text-gray-100 px-1",
  },

  // ---------------------------------------------------------------------------
  // FORM
  // ---------------------------------------------------------------------------
  form: {
    root: "flex flex-col gap-6",
    submit: [
      "flex h-10 items-center justify-center rounded-md px-3.5",
      "bg-gray-900 text-base font-medium text-gray-50",
      "hover:bg-gray-800 active:bg-gray-700",
      "focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800",
      "dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200",
      "dark:focus-visible:outline-blue-400",
    ].join(" "),
  },

  // ---------------------------------------------------------------------------
  // INPUT
  // ---------------------------------------------------------------------------
  input: {
    label:
      "flex flex-col items-start gap-1 text-sm font-medium text-gray-900 dark:text-gray-100",
    root: [
      "h-10 w-56 rounded-md border border-gray-200 bg-transparent pl-3.5",
      "text-base text-gray-900",
      "placeholder:text-gray-400",
      "focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-blue-800",
      "dark:border-gray-700 dark:text-gray-100 dark:placeholder:text-gray-500",
      "dark:focus:outline-blue-400",
    ].join(" "),
  },

  // ---------------------------------------------------------------------------
  // MENU
  // ---------------------------------------------------------------------------
  menu: {
    trigger: [
      "flex h-10 items-center justify-center gap-1.5 rounded-md",
      "border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-gray-900",
      "select-none hover:bg-gray-100 active:bg-gray-100",
      "focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800",
      "data-[popup-open]:bg-gray-100",
      "dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800",
      "dark:data-[popup-open]:bg-gray-800",
      "dark:focus-visible:outline-blue-400",
    ].join(" "),
    positioner: "outline-none",
    popup: [
      "origin-[var(--transform-origin)] rounded-md bg-[canvas] py-1",
      "text-gray-900 shadow-lg shadow-gray-200 outline outline-1 outline-gray-200",
      "transition-[transform,scale,opacity]",
      "data-[ending-style]:scale-90 data-[ending-style]:opacity-0",
      "data-[starting-style]:scale-90 data-[starting-style]:opacity-0",
      "dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300 dark:text-gray-100",
    ].join(" "),
    item: [
      "flex cursor-default py-2 pr-8 pl-4 text-sm leading-4",
      "outline-none select-none",
      "data-[highlighted]:relative data-[highlighted]:z-0",
      "data-[highlighted]:text-gray-50",
      "data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1",
      "data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1]",
      "data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900",
      "dark:data-[highlighted]:text-gray-900 dark:data-[highlighted]:before:bg-gray-100",
    ].join(" "),
    separator: "my-1 h-px bg-gray-200 dark:bg-gray-700",
    groupLabel:
      "px-4 py-1.5 text-xs font-medium text-gray-500 dark:text-gray-400",
    submenuTrigger: [
      "flex cursor-default items-center justify-between py-2 pr-2 pl-4 text-sm leading-4",
      "outline-none select-none",
      "data-[highlighted]:relative data-[highlighted]:z-0",
      "data-[highlighted]:text-gray-50",
      "data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1",
      "data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1]",
      "data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900",
      "dark:data-[highlighted]:text-gray-900 dark:data-[highlighted]:before:bg-gray-100",
    ].join(" "),
  },

  // ---------------------------------------------------------------------------
  // MENUBAR
  // ---------------------------------------------------------------------------
  menubar: {
    root: [
      "flex items-center gap-0.5 rounded-md border border-gray-200 bg-gray-50 p-0.5",
      "dark:border-gray-700 dark:bg-gray-900",
    ].join(" "),
    trigger: [
      "flex items-center rounded-sm px-2 py-1 text-sm font-medium",
      "text-gray-900 select-none",
      "hover:bg-gray-100 data-[popup-open]:bg-gray-100",
      "focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800",
      "dark:text-gray-100 dark:hover:bg-gray-800 dark:data-[popup-open]:bg-gray-800",
      "dark:focus-visible:outline-blue-400",
    ].join(" "),
    // popup and item reuse menu styles
  },

  // ---------------------------------------------------------------------------
  // METER
  // ---------------------------------------------------------------------------
  meter: {
    root: "grid w-48 grid-cols-2 gap-y-2",
    label: "text-sm font-medium text-gray-900 dark:text-gray-100",
    value: "col-start-2 text-right text-sm text-gray-900 dark:text-gray-100",
    track: [
      "col-span-full h-1 overflow-hidden rounded",
      "bg-gray-200 shadow-[inset_0_0_0_1px] shadow-gray-200",
      "dark:bg-gray-700 dark:shadow-gray-700",
    ].join(" "),
    indicator: "block rounded bg-gray-500 transition-all duration-500",
  },

  // ---------------------------------------------------------------------------
  // NAVIGATION MENU
  // ---------------------------------------------------------------------------
  navigationMenu: {
    root: "flex items-center gap-1",
    trigger: [
      "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium",
      "text-gray-900 select-none hover:bg-gray-100",
      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-800",
      "data-[popup-open]:bg-gray-100",
      "dark:text-gray-100 dark:hover:bg-gray-800 dark:data-[popup-open]:bg-gray-800",
      "dark:focus-visible:outline-blue-400",
    ].join(" "),
    link: [
      "flex items-center rounded-md px-3 py-2 text-sm font-medium",
      "text-gray-900 select-none hover:bg-gray-100",
      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-800",
      "dark:text-gray-100 dark:hover:bg-gray-800",
      "dark:focus-visible:outline-blue-400",
    ].join(" "),
    positioner: "outline-none",
    popup: [
      "origin-[var(--transform-origin)] rounded-lg bg-[canvas] p-4",
      "shadow-lg shadow-gray-200 outline outline-1 outline-gray-200",
      "transition-[transform,scale,opacity]",
      "data-[ending-style]:scale-95 data-[ending-style]:opacity-0",
      "data-[starting-style]:scale-95 data-[starting-style]:opacity-0",
      "dark:shadow-none dark:outline-gray-300",
    ].join(" "),
  },

  // ---------------------------------------------------------------------------
  // NUMBER FIELD
  // ---------------------------------------------------------------------------
  numberField: {
    root: "flex flex-col gap-1",
    label: "text-sm font-medium text-gray-900 dark:text-gray-100",
    group: [
      "flex items-center rounded-md border border-gray-200",
      "dark:border-gray-700",
    ].join(" "),
    input: [
      "h-10 w-20 bg-transparent text-center text-base text-gray-900",
      "outline-none",
      "dark:text-gray-100",
    ].join(" "),
    decrement: [
      "flex h-10 w-10 items-center justify-center border-r border-gray-200",
      "text-gray-600 hover:bg-gray-100 active:bg-gray-200",
      "disabled:opacity-40 disabled:cursor-not-allowed",
      "dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800",
    ].join(" "),
    increment: [
      "flex h-10 w-10 items-center justify-center border-l border-gray-200",
      "text-gray-600 hover:bg-gray-100 active:bg-gray-200",
      "disabled:opacity-40 disabled:cursor-not-allowed",
      "dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800",
    ].join(" "),
  },

  // ---------------------------------------------------------------------------
  // POPOVER
  // ---------------------------------------------------------------------------
  popover: {
    trigger: [
      "flex h-10 items-center justify-center rounded-md",
      "border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-gray-900",
      "select-none hover:bg-gray-100 active:bg-gray-100",
      "focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800",
      "data-[popup-open]:bg-gray-100",
      "dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800",
      "dark:data-[popup-open]:bg-gray-800",
      "dark:focus-visible:outline-blue-400",
    ].join(" "),
    positioner: "outline-none",
    popup: [
      "box-border rounded-lg bg-[canvas] p-4 text-gray-900",
      "origin-[var(--transform-origin)]",
      "max-w-[500px]",
      "shadow-lg shadow-gray-200 outline outline-1 outline-gray-200",
      "transition-[transform,scale,opacity] duration-150",
      "data-[ending-style]:scale-90 data-[ending-style]:opacity-0",
      "data-[starting-style]:scale-90 data-[starting-style]:opacity-0",
      "dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300 dark:text-gray-100",
    ].join(" "),
    arrow: [
      "flex",
      "data-[side=bottom]:-top-2 data-[side=bottom]:rotate-0",
      "data-[side=left]:right-[-13px] data-[side=left]:rotate-90",
      "data-[side=right]:left-[-13px] data-[side=right]:-rotate-90",
      "data-[side=top]:-bottom-2 data-[side=top]:rotate-180",
    ].join(" "),
    title: "mb-1 text-base font-medium",
    description: "text-sm text-gray-600 dark:text-gray-400",
    close: [
      "absolute top-2 right-2 flex size-6 items-center justify-center rounded",
      "text-gray-500 hover:bg-gray-100 hover:text-gray-700",
      "dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200",
    ].join(" "),
  },

  // ---------------------------------------------------------------------------
  // PREVIEW CARD
  // ---------------------------------------------------------------------------
  previewCard: {
    trigger: "text-blue-700 underline dark:text-blue-400",
    positioner: "outline-none",
    popup: [
      "w-72 rounded-lg bg-[canvas] p-4",
      "shadow-lg shadow-gray-200 outline outline-1 outline-gray-200",
      "origin-[var(--transform-origin)]",
      "transition-[transform,scale,opacity]",
      "data-[ending-style]:scale-90 data-[ending-style]:opacity-0",
      "data-[starting-style]:scale-90 data-[starting-style]:opacity-0",
      "dark:shadow-none dark:outline-gray-300",
    ].join(" "),
  },

  // ---------------------------------------------------------------------------
  // PROGRESS
  // ---------------------------------------------------------------------------
  progress: {
    root: "grid w-48 grid-cols-2 gap-y-2",
    label: "text-sm font-medium text-gray-900 dark:text-gray-100",
    value: "col-start-2 text-right text-sm text-gray-900 dark:text-gray-100",
    track: [
      "col-span-full h-1 overflow-hidden rounded",
      "bg-gray-200 shadow-[inset_0_0_0_1px] shadow-gray-200",
      "dark:bg-gray-700 dark:shadow-gray-700",
    ].join(" "),
    indicator: "block bg-gray-500 transition-all duration-500",
  },

  // ---------------------------------------------------------------------------
  // RADIO
  // ---------------------------------------------------------------------------
  radio: {
    group: "flex flex-col gap-2",
    label: "flex items-center gap-2 text-base text-gray-900 dark:text-gray-100",
    root: [
      "flex size-5 items-center justify-center rounded-full",
      "border border-gray-300",
      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800",
      "data-[checked]:border-gray-900 data-[checked]:bg-gray-900",
      "dark:border-gray-600",
      "dark:data-[checked]:border-gray-100 dark:data-[checked]:bg-gray-100",
      "dark:focus-visible:outline-blue-400",
    ].join(" "),
    indicator: [
      "size-2 rounded-full bg-white",
      "data-[unchecked]:hidden",
      "dark:bg-gray-900",
    ].join(" "),
  },

  // ---------------------------------------------------------------------------
  // SCROLL AREA
  // ---------------------------------------------------------------------------
  scrollArea: {
    root: "relative h-64 w-80 overflow-hidden rounded-md border border-gray-200 dark:border-gray-700",
    viewport: "size-full overscroll-contain",
    scrollbar: [
      "flex touch-none select-none p-0.5",
      "data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:h-2.5",
      "data-[orientation=horizontal]:flex-col",
    ].join(" "),
    thumb: "relative flex-1 rounded-full bg-gray-300 dark:bg-gray-600",
  },

  // ---------------------------------------------------------------------------
  // SELECT
  // ---------------------------------------------------------------------------
  select: {
    root: "",
    trigger: [
      "flex h-10 min-w-40 items-center justify-between gap-3 rounded-md",
      "border border-gray-200 bg-[canvas] pr-3 pl-3.5 text-base text-gray-900",
      "select-none hover:bg-gray-100",
      "focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800",
      "data-[popup-open]:bg-gray-100",
      "dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800",
      "dark:data-[popup-open]:bg-gray-800",
      "dark:focus-visible:outline-blue-400",
    ].join(" "),
    value: "data-[placeholder]:opacity-60",
    icon: "flex",
    positioner: "outline-none select-none z-10",
    popup: [
      "group min-w-[var(--anchor-width)] origin-[var(--transform-origin)]",
      "bg-clip-padding rounded-md bg-[canvas] text-gray-900",
      "shadow-lg shadow-gray-200 outline outline-1 outline-gray-200",
      "transition-[transform,scale,opacity]",
      "data-[ending-style]:scale-90 data-[ending-style]:opacity-0",
      "data-[side=none]:min-w-[calc(var(--anchor-width)+1rem)]",
      "data-[starting-style]:scale-90 data-[starting-style]:opacity-0",
      "data-[side=none]:data-[ending-style]:transition-none",
      "data-[side=none]:data-[starting-style]:scale-100",
      "data-[side=none]:data-[starting-style]:opacity-100",
      "data-[side=none]:data-[starting-style]:transition-none",
      "dark:shadow-none dark:outline-gray-300 dark:text-gray-100",
    ].join(" "),
    scrollUpArrow: [
      "top-0 z-[1] flex h-4 w-full cursor-default items-center justify-center",
      "rounded-md bg-[canvas] text-center text-xs",
    ].join(" "),
    scrollDownArrow: [
      "bottom-0 z-[1] flex h-4 w-full cursor-default items-center justify-center",
      "rounded-md bg-[canvas] text-center text-xs",
    ].join(" "),
    list: "relative py-1 scroll-py-6 overflow-y-auto max-h-[var(--available-height)]",
    item: [
      "grid cursor-default grid-cols-[0.75rem_1fr] items-center gap-2",
      "py-2 pr-4 pl-2.5 text-sm leading-4 outline-none select-none",
      "group-data-[side=none]:pr-12 group-data-[side=none]:text-base",
      "data-[highlighted]:relative data-[highlighted]:z-0",
      "data-[highlighted]:text-gray-50",
      "data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1",
      "data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1]",
      "data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900",
      "dark:data-[highlighted]:text-gray-900 dark:data-[highlighted]:before:bg-gray-100",
    ].join(" "),
    itemIndicator: "col-start-1",
    itemText: "col-start-2",
  },

  // ---------------------------------------------------------------------------
  // SEPARATOR
  // ---------------------------------------------------------------------------
  separator: {
    root: "h-px w-full bg-gray-200 dark:bg-gray-700",
    vertical: "h-full w-px bg-gray-200 dark:bg-gray-700",
  },

  // ---------------------------------------------------------------------------
  // SLIDER
  // ---------------------------------------------------------------------------
  slider: {
    root: "",
    control: "flex w-56 touch-none items-center py-3 select-none",
    track: [
      "h-1 w-full rounded bg-gray-200",
      "shadow-[inset_0_0_0_1px] shadow-gray-200 select-none",
      "dark:bg-gray-700 dark:shadow-gray-700",
    ].join(" "),
    indicator: "rounded bg-gray-700 select-none dark:bg-gray-300",
    thumb: [
      "size-4 rounded-full bg-white",
      "outline outline-1 outline-gray-300 select-none",
      "has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-blue-800",
      "dark:outline-gray-600",
      "dark:has-[:focus-visible]:outline-blue-400",
    ].join(" "),
    value: "text-sm text-gray-900 dark:text-gray-100",
  },

  // ---------------------------------------------------------------------------
  // SWITCH
  // ---------------------------------------------------------------------------
  switch: {
    label: "flex items-center gap-2 text-base text-gray-900 dark:text-gray-100",
    root: [
      "relative flex h-6 w-10 rounded-full p-px",
      "bg-gradient-to-r from-gray-700 from-35% to-gray-200 to-65%",
      "bg-[length:6.5rem_100%] bg-[100%_0%] bg-no-repeat",
      "shadow-[inset_0_1.5px_2px] shadow-gray-200",
      "outline outline-1 -outline-offset-1 outline-gray-200",
      "transition-[background-position,box-shadow] duration-[125ms]",
      "ease-[cubic-bezier(0.26,0.75,0.38,0.45)]",
      "before:absolute before:rounded-full before:outline-offset-2 before:outline-blue-800",
      "focus-visible:before:inset-0 focus-visible:before:outline focus-visible:before:outline-2",
      "active:bg-gray-100 data-[checked]:bg-[0%_0%] data-[checked]:active:bg-gray-500",
      "dark:from-gray-500 dark:shadow-black/75 dark:outline-white/15",
      "dark:data-[checked]:shadow-none",
      "dark:focus-visible:before:outline-blue-400",
    ].join(" "),
    thumb: [
      "aspect-square h-full rounded-full bg-white",
      "shadow-[0_0_1px_1px,0_1px_1px,1px_2px_4px_-1px] shadow-gray-100",
      "transition-transform duration-150",
      "data-[checked]:translate-x-4",
      "dark:shadow-black/25",
    ].join(" "),
  },

  // ---------------------------------------------------------------------------
  // TABS
  // ---------------------------------------------------------------------------
  tabs: {
    root: "rounded-md border border-gray-200 dark:border-gray-700",
    list: [
      "relative z-0 flex gap-1 px-1",
      "shadow-[inset_0_-1px] shadow-gray-200",
      "dark:shadow-gray-700",
    ].join(" "),
    tab: [
      "flex h-8 items-center justify-center border-0 px-2",
      "text-sm font-medium break-keep whitespace-nowrap",
      "text-gray-600 outline-none select-none",
      "before:inset-x-0 before:inset-y-1 before:rounded-sm",
      "before:-outline-offset-1 before:outline-blue-800",
      "hover:text-gray-900 data-[active]:text-gray-900",
      "focus-visible:relative focus-visible:before:absolute",
      "focus-visible:before:outline focus-visible:before:outline-2",
      "dark:text-gray-400 dark:hover:text-gray-100 dark:data-[active]:text-gray-100",
      "dark:before:outline-blue-400",
    ].join(" "),
    indicator: [
      "absolute top-1/2 left-0 z-[-1]",
      "h-6 w-[var(--active-tab-width)]",
      "translate-x-[var(--active-tab-left)] -translate-y-1/2",
      "rounded-sm bg-gray-100 transition-all duration-200 ease-in-out",
      "dark:bg-gray-800",
    ].join(" "),
    panel: [
      "relative flex h-32 items-center justify-center",
      "-outline-offset-1 outline-blue-800",
      "focus-visible:rounded-md focus-visible:outline focus-visible:outline-2",
      "dark:outline-blue-400",
    ].join(" "),
  },

  // ---------------------------------------------------------------------------
  // TOAST
  // ---------------------------------------------------------------------------
  toast: {
    viewport: [
      "fixed z-10 top-auto right-4 bottom-4 mx-auto",
      "flex w-[250px]",
      "sm:right-8 sm:bottom-8 sm:w-[300px]",
    ].join(" "),
    root: [
      // CSS custom properties for stacking
      "[--gap:0.75rem] [--peek:0.75rem]",
      "[--scale:calc(max(0,1-(var(--toast-index)*0.1)))]",
      "[--shrink:calc(1-var(--scale))]",
      "[--height:var(--toast-frontmost-height,var(--toast-height))]",
      "[--offset-y:calc(var(--toast-offset-y)*-1+calc(var(--toast-index)*var(--gap)*-1)+var(--toast-swipe-movement-y))]",
      // Positioning
      "absolute right-0 bottom-0 left-auto",
      "z-[calc(1000-var(--toast-index))]",
      "mr-0 w-full origin-bottom",
      // Transform
      "[transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)-(var(--toast-index)*var(--peek))-(var(--shrink)*var(--height))))_scale(var(--scale))]",
      // Visual
      "rounded-lg border border-gray-200 bg-gray-50 bg-clip-padding p-4",
      "shadow-lg select-none",
      "dark:border-gray-700 dark:bg-gray-900",
      // Transitions
      "[transition:transform_0.5s_cubic-bezier(0.22,1,0.36,1),opacity_0.5s,height_0.15s]",
      // Heights
      "h-[var(--height)]",
      "data-[expanded]:h-[var(--toast-height)]",
      // State styles
      "data-[ending-style]:opacity-0",
      "data-[expanded]:[transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--offset-y)))]",
      "data-[limited]:opacity-0",
      "data-[starting-style]:[transform:translateY(150%)]",
    ].join(" "),
    content: [
      "overflow-hidden transition-opacity [transition-duration:250ms]",
      "data-[behind]:pointer-events-none data-[behind]:opacity-0",
      "data-[expanded]:pointer-events-auto data-[expanded]:opacity-100",
    ].join(" "),
    title: "text-[0.975rem] leading-5 font-medium",
    description: "text-[0.925rem] leading-5 text-gray-700 dark:text-gray-300",
    close: [
      "absolute top-2 right-2 flex h-5 w-5 items-center justify-center",
      "rounded border-none bg-transparent text-gray-500",
      "hover:bg-gray-100 hover:text-gray-700",
      "dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200",
    ].join(" "),
  },

  // ---------------------------------------------------------------------------
  // TOGGLE
  // ---------------------------------------------------------------------------
  toggle: {
    root: [
      "flex size-9 items-center justify-center rounded-md",
      "border border-gray-200 text-gray-600 select-none",
      "hover:bg-gray-100 active:bg-gray-200",
      "focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800",
      "data-[pressed]:bg-gray-900 data-[pressed]:text-gray-50 data-[pressed]:border-gray-900",
      "dark:border-gray-700 dark:text-gray-400",
      "dark:hover:bg-gray-800 dark:active:bg-gray-700",
      "dark:data-[pressed]:bg-gray-100 dark:data-[pressed]:text-gray-900 dark:data-[pressed]:border-gray-100",
      "dark:focus-visible:outline-blue-400",
    ].join(" "),
  },

  // ---------------------------------------------------------------------------
  // TOGGLE GROUP
  // ---------------------------------------------------------------------------
  toggleGroup: {
    root: [
      "flex items-center rounded-md border border-gray-200 p-0.5 gap-0.5",
      "dark:border-gray-700",
    ].join(" "),
    item: [
      "flex size-8 items-center justify-center rounded-sm",
      "text-gray-600 select-none",
      "hover:bg-gray-100 active:bg-gray-200",
      "focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800",
      "data-[pressed]:bg-gray-900 data-[pressed]:text-gray-50",
      "dark:text-gray-400 dark:hover:bg-gray-800",
      "dark:data-[pressed]:bg-gray-100 dark:data-[pressed]:text-gray-900",
      "dark:focus-visible:outline-blue-400",
    ].join(" "),
  },

  // ---------------------------------------------------------------------------
  // TOOLBAR
  // ---------------------------------------------------------------------------
  toolbar: {
    root: [
      "flex items-center gap-1 rounded-md border border-gray-200 bg-gray-50 p-1",
      "dark:border-gray-700 dark:bg-gray-900",
    ].join(" "),
    button: [
      "flex size-8 items-center justify-center rounded-sm",
      "text-gray-900 select-none",
      "hover:bg-gray-100 active:bg-gray-200",
      "focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800",
      "dark:text-gray-100 dark:hover:bg-gray-800",
      "dark:focus-visible:outline-blue-400",
    ].join(" "),
    separator: "mx-0.5 h-5 w-px bg-gray-200 dark:bg-gray-700",
    link: [
      "flex items-center rounded-sm px-2 py-1 text-sm",
      "text-blue-700 underline",
      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-800",
      "dark:text-blue-400",
      "dark:focus-visible:outline-blue-400",
    ].join(" "),
  },

  // ---------------------------------------------------------------------------
  // TOOLTIP
  // ---------------------------------------------------------------------------
  tooltip: {
    provider: "",
    trigger: [
      "flex size-8 items-center justify-center rounded-sm",
      "bg-transparent text-gray-900 select-none border-0",
      "data-[popup-open]:bg-gray-100",
      "hover:bg-gray-100 active:bg-gray-200",
      "focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800",
      "dark:text-gray-100 dark:data-[popup-open]:bg-gray-800",
      "dark:hover:bg-gray-800 dark:active:bg-gray-700",
      "dark:focus-visible:outline-blue-400",
    ].join(" "),
    positioner: "",
    popup: [
      "flex flex-col px-2 py-1 rounded-md bg-[canvas] text-sm",
      "origin-[var(--transform-origin)]",
      "shadow-lg shadow-gray-200 outline outline-1 outline-gray-200",
      "transition-[transform,scale,opacity]",
      "data-[ending-style]:opacity-0 data-[ending-style]:scale-90",
      "data-[instant]:transition-none",
      "data-[starting-style]:opacity-0 data-[starting-style]:scale-90",
      "dark:shadow-none dark:outline-gray-300 dark:-outline-offset-1",
    ].join(" "),
    arrow: [
      "flex",
      "data-[side=bottom]:-top-2 data-[side=bottom]:rotate-0",
      "data-[side=left]:right-[-13px] data-[side=left]:rotate-90",
      "data-[side=right]:left-[-13px] data-[side=right]:-rotate-90",
      "data-[side=top]:-bottom-2 data-[side=top]:rotate-180",
    ].join(" "),
  },
} as const;

// Type-safe access
export type ComponentStyleKey = keyof typeof componentStyles;
export type ComponentPartKey<C extends ComponentStyleKey> =
  keyof (typeof componentStyles)[C];
```

---

## 5. Animation Patterns

Base UI provides purpose-built data attributes for enter/exit animations. The
two primary approaches are **CSS transitions** and **CSS animations**. A third
approach uses JavaScript animation libraries like Motion.

### 5.1 CSS Transitions (Recommended)

CSS transitions are the recommended approach because they can be **smoothly
cancelled midway** (e.g., closing a popup while it is still opening).

**Key attributes:**

| Attribute             | Phase        | Description                          |
| --------------------- | ------------ | ------------------------------------ |
| `data-starting-style` | Enter (from) | Applied on first frame, removed next |
| `data-ending-style`   | Exit (to)    | Applied when closing begins          |

**Standard popup transition pattern:**

```tsx
// Applied to popup elements (Dialog.Popup, Popover.Popup, Menu.Popup, etc.)
className="
  origin-[var(--transform-origin)]
  transition-[transform,scale,opacity] duration-150
  data-[ending-style]:scale-90 data-[ending-style]:opacity-0
  data-[starting-style]:scale-90 data-[starting-style]:opacity-0
"

// Applied to backdrops (Dialog.Backdrop, etc.)
className="
  transition-all duration-150
  data-[ending-style]:opacity-0
  data-[starting-style]:opacity-0
"
```

### 5.2 CSS Animations

For cases where you want distinct enter/exit keyframe animations rather than
symmetric transitions:

**Key attributes:**

| Attribute     | Phase | Description                   |
| ------------- | ----- | ----------------------------- |
| `data-open`   | Enter | Applied when component opens  |
| `data-closed` | Exit  | Applied when component closes |

```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes scaleOut {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.9);
  }
}

.Popup[data-open] {
  animation: scaleIn 250ms ease-out;
}
.Popup[data-closed] {
  animation: scaleOut 250ms ease-in;
}
```

### 5.3 Collapsible / Accordion Height Animation

These components expose a CSS variable for the full content height, enabling
smooth height transitions:

```tsx
// Accordion.Panel or Collapsible.Panel
className="
  h-[var(--accordion-panel-height)]
  overflow-hidden
  transition-[height] ease-out
  data-[ending-style]:h-0
  data-[starting-style]:h-0
"
```

The pattern works because:

1. `--accordion-panel-height` holds the measured content height
2. `h-[var(...)]` sets the "open" height
3. `data-[starting-style]:h-0` and `data-[ending-style]:h-0` are the
   enter-from and exit-to states
4. `transition-[height]` animates between them

### 5.4 Tabs Indicator Animation

The active tab indicator uses CSS variables for position and width:

```tsx
className="
  translate-x-[var(--active-tab-left)]
  w-[var(--active-tab-width)]
  transition-all duration-200 ease-in-out
"
```

### 5.5 Drawer Gesture Animation

Drawers combine CSS variables with physics-based easing:

```tsx
// Popup follows the finger during swipe
className="
  [transform:translateX(var(--drawer-swipe-movement-x))]
  transition-transform duration-[450ms] ease-[cubic-bezier(0.32,0.72,0,1)]
  data-[swiping]:select-none
"

// Backdrop fades proportionally to swipe progress
className="
  opacity-[calc(var(--backdrop-opacity)*(1-var(--drawer-swipe-progress)))]
"
```

### 5.6 Toast Stack Animation

Toasts use the most complex animation system with stacking transforms:

```tsx
// Each toast calculates its position based on index
"[--scale:calc(max(0,1-(var(--toast-index)*0.1)))]";
"[transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(...))]";
```

### 5.7 JavaScript Animation Libraries (Motion)

For advanced animations, use the `render` prop to compose with `motion.div`.
Two patterns exist depending on mount behavior:

**Unmounted when closed (default for popups):**

```tsx
<AnimatePresence>
  {open && (
    <Popover.Portal keepMounted>
      <Popover.Positioner>
        <Popover.Popup
          render={
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            />
          }
        >
          Content
        </Popover.Popup>
      </Popover.Positioner>
    </Popover.Portal>
  )}
</AnimatePresence>
```

**Kept mounted when closed:**

```tsx
<Popover.Popup
  render={(props, state) => (
    <motion.div
      {...(props as HTMLMotionProps<"div">)}
      initial={false}
      animate={{
        opacity: state.open ? 1 : 0,
        scale: state.open ? 1 : 0.8,
      }}
    />
  )}
>
  Content
</Popover.Popup>
```

### 5.8 Instant Tooltips

When a user quickly moves between tooltip triggers, subsequent tooltips skip
their transition. Base UI adds `data-[instant]` for this:

```tsx
className = "data-[instant]:transition-none";
```

---

## 6. Responsive Design

### 6.1 Breakpoint Strategy

The showcase uses Tailwind's default mobile-first breakpoints:

| Breakpoint | Min Width | Usage                         |
| ---------- | --------- | ----------------------------- |
| Default    | 0px       | Mobile layout (single column) |
| `sm`       | 640px     | Small tablets                 |
| `md`       | 768px     | Tablets (2-column grid)       |
| `lg`       | 1024px    | Desktop (sidebar + content)   |
| `xl`       | 1280px    | Wide desktop (3-column grid)  |

### 6.2 Layout Patterns

**Component showcase grid:**

```tsx
className = "grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3";
```

**Demo card:**

```tsx
className = "rounded-xl border border-gray-200 p-4 md:p-6 dark:border-gray-700";
```

**Toast positioning:**

```tsx
className =
  "fixed right-4 bottom-4 w-[250px] sm:right-8 sm:bottom-8 sm:w-[300px]";
```

### 6.3 Touch Target Sizing

On touch devices, interactive elements need larger targets:

```tsx
// Base UI Select.Item uses pointer-coarse media query
className = "pointer-coarse:py-2.5 pointer-coarse:text-[0.925rem]";
```

### 6.4 Responsive Component Width

Many components use `max-w-[calc(...)]` to prevent overflow:

```tsx
// Dialog: stays 24rem but respects viewport
className = "w-96 max-w-[calc(100vw-3rem)]";

// Accordion: full width with a max
className = "w-96 max-w-[calc(100vw-8rem)]";
```

---

## 7. Accessibility Styling

### 7.1 Focus Visible Patterns

All interactive elements use `:focus-visible` (not `:focus`) to show focus
rings only for keyboard navigation, not mouse clicks.

**Standard focus ring (buttons, triggers):**

```tsx
className="
  focus-visible:outline focus-visible:outline-2
  focus-visible:-outline-offset-1 focus-visible:outline-blue-800
  dark:focus-visible:outline-blue-400
"
```

**Detached focus ring (checkboxes, radios, switches):**

```tsx
className="
  focus-visible:outline focus-visible:outline-2
  focus-visible:outline-offset-2 focus-visible:outline-blue-800
  dark:focus-visible:outline-blue-400
"
```

**Nested focus ring (slider thumb via `:has`):**

```tsx
className="
  has-[:focus-visible]:outline
  has-[:focus-visible]:outline-2
  has-[:focus-visible]:outline-blue-800
"
```

**Pseudo-element focus ring (tabs, switches):**

```tsx
// Uses ::before for complex shapes
className="
  before:inset-x-0 before:inset-y-1 before:rounded-sm
  before:-outline-offset-1 before:outline-blue-800
  focus-visible:relative focus-visible:before:absolute
  focus-visible:before:outline focus-visible:before:outline-2
"
```

### 7.2 Disabled State Styling

```tsx
className="
  data-[disabled]:opacity-40
  data-[disabled]:cursor-not-allowed
  data-[disabled]:pointer-events-none
"
```

### 7.3 Color Contrast

All text/background combinations meet WCAG AA (4.5:1) minimum contrast:

| Combination                           | Ratio  | Pass          |
| ------------------------------------- | ------ | ------------- |
| `gray-900` on `white`                 | 17.4:1 | Yes           |
| `gray-600` on `white`                 | 5.7:1  | Yes           |
| `gray-400` on `white`                 | 3.9:1  | AA Large only |
| `gray-100` on `gray-950`              | 16.1:1 | Yes           |
| `gray-400` on `gray-950`              | 5.1:1  | Yes           |
| `gray-50` on `gray-900` (highlighted) | 15.4:1 | Yes           |
| `blue-800` on `white` (focus ring)    | 5.5:1  | Yes           |
| `blue-400` on `gray-950` (dark focus) | 5.8:1  | Yes           |

### 7.4 Motion Preferences

Respect `prefers-reduced-motion` by disabling transitions and animations:

```css
/* Add to globals.css */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### 7.5 High Contrast Mode

Outlines are used instead of box-shadows for popup borders because outlines
remain visible in Windows High Contrast Mode:

```tsx
// Popup border -- uses outline, not border or shadow
className = "outline outline-1 outline-gray-200";
```

### 7.6 Hover Media Query

Hover styles are guarded with `@media (hover: hover)` or Tailwind's
`hover:` prefix (which Tailwind v4 handles automatically). For v3,
wrap hover-dependent styles with the media query in custom CSS when needed:

```css
@media (hover: hover) {
  .Button:hover {
    background-color: var(--color-gray-100);
  }
}
```

---

## Appendix A: Component Anatomy Quick Reference

This table shows every Base UI component and its sub-parts that accept styling.

| Component       | Parts (accept `className`)                                                                                                        |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Accordion       | Root, Item, Header, Trigger, Panel                                                                                                |
| Alert Dialog    | Root, Trigger, Portal, Backdrop, Popup, Title, Description, Close                                                                 |
| Autocomplete    | Root, Trigger, Portal, Positioner, Popup, Option, Input                                                                           |
| Avatar          | Root, Image, Fallback                                                                                                             |
| Button          | (single part)                                                                                                                     |
| Checkbox        | Root, Indicator                                                                                                                   |
| Checkbox Group  | Root                                                                                                                              |
| Collapsible     | Root, Trigger, Panel                                                                                                              |
| Combobox        | Root, Control, Input, Portal, Positioner, Popup, List, Item, ItemText                                                             |
| Context Menu    | Root, Trigger, Portal, Positioner, Popup, Item, Separator                                                                         |
| Dialog          | Root, Trigger, Portal, Backdrop, Viewport, Popup, Title, Description, Close                                                       |
| Drawer          | Root, Trigger, Portal, Backdrop, Viewport, Popup, Content, Title, Description, Close                                              |
| Field           | Root, Label, Description, Error, Control                                                                                          |
| Fieldset        | Root, Legend                                                                                                                      |
| Form            | Root                                                                                                                              |
| Input           | (single part)                                                                                                                     |
| Menu            | Root, Trigger, Portal, Positioner, Popup, Item, Separator, GroupLabel, SubmenuTrigger                                             |
| Menubar         | Root, Menu (nested), Trigger, Popup, Item                                                                                         |
| Meter           | Root, Label, Value, Track, Indicator                                                                                              |
| Navigation Menu | Root, Trigger, Link, Portal, Positioner, Popup, Viewport                                                                          |
| Number Field    | Root, Label, Group, Input, Decrement, Increment, ScrubArea                                                                        |
| Popover         | Root, Trigger, Portal, Positioner, Popup, Arrow, Title, Description, Close                                                        |
| Preview Card    | Root, Trigger, Portal, Positioner, Popup, Arrow                                                                                   |
| Progress        | Root, Label, Value, Track, Indicator                                                                                              |
| Radio           | Root, Indicator                                                                                                                   |
| Scroll Area     | Root, Viewport, Scrollbar, Thumb, Corner                                                                                          |
| Select          | Root, Trigger, Value, Icon, Portal, Positioner, Popup, List, Item, ItemText, ItemIndicator, ScrollUpArrow, ScrollDownArrow, Arrow |
| Separator       | (single part)                                                                                                                     |
| Slider          | Root, Control, Track, Indicator, Thumb, Value                                                                                     |
| Switch          | Root, Thumb                                                                                                                       |
| Tabs            | Root, List, Tab, Indicator, Panel                                                                                                 |
| Toast           | Provider, Portal, Viewport, Root, Content, Title, Description, Close, Action                                                      |
| Toggle          | Root                                                                                                                              |
| Toggle Group    | Root, Item                                                                                                                        |
| Toolbar         | Root, Button, Separator, Link, Group                                                                                              |
| Tooltip         | Provider, Root, Trigger, Portal, Positioner, Popup, Arrow                                                                         |

---

## Appendix B: Utility Functions

### `cn()` -- Class Name Merger

```typescript
// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### Usage with Component Styles

```tsx
import { cn } from "@/lib/utils";
import { componentStyles } from "@/styles/component-styles";

// Allow className overrides from props
interface AccordionDemoProps {
  className?: string;
}

function AccordionDemo({ className }: AccordionDemoProps) {
  return (
    <Accordion.Root className={cn(componentStyles.accordion.root, className)}>
      {/* ... */}
    </Accordion.Root>
  );
}
```

---

## Appendix C: File Structure

```
src/
  lib/
    utils.ts                  # cn() utility
  styles/
    component-styles.ts       # Central style definitions (from Section 4)
  components/
    theme-toggle.tsx          # Dark mode toggle (from Section 3.3)
    ui/                       # Styled Base UI wrapper components
      accordion.tsx
      button.tsx
      checkbox.tsx
      dialog.tsx
      ...
app/
  globals.css                 # CSS variables, reduced-motion, base styles
  layout.tsx                  # Root layout with FOUC prevention
  page.tsx                    # Component showcase grid
```
