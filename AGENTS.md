## Project: Base UI Playground

### Stack

- Next.js 16.1.6 (App Router, Turbopack)
- React 19.2.3
- @base-ui/react ^1.2.0
- Tailwind CSS v4 (CSS-first config, NO tailwind.config.ts)
- lucide-react (icons), clsx (classnames)

### Commands

- `npm run dev` — starts dev server on :3000
- `npm run build` — production build
- `npm run lint` — ESLint

### Key Files

| File                                         | Purpose                                                                                     |
| -------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `src/app/globals.css`                        | Tailwind v4 theme tokens + custom CSS var utilities                                         |
| `src/app/page.tsx`                           | Home — 6 category navigation cards                                                          |
| `src/app/components/inputs/page.tsx`         | 9 demos: Button, Input, Checkbox, CheckboxGroup, Radio, Switch, Slider, NumberField, Select |
| `src/app/components/overlays/page.tsx`       | 7 demos: Dialog, AlertDialog, Drawer, Popover, Tooltip, ContextMenu, PreviewCard            |
| `src/app/components/navigation/page.tsx`     | 6 demos: Tabs, Menu, Menubar, NavigationMenu, Toolbar, Accordion                            |
| `src/app/components/feedback/page.tsx`       | 3 demos: Progress, Meter, Toast                                                             |
| `src/app/components/data-display/page.tsx`   | 4 demos: Avatar, Collapsible, ScrollArea, Separator                                         |
| `src/app/components/layout/page.tsx`         | 7 demos: Toggle, ToggleGroup, Field, Fieldset, Form, Combobox, Autocomplete                 |
| `src/components/layout/page-header.tsx`      | Reusable header with back nav                                                               |
| `src/components/showcase/component-demo.tsx` | Demo wrapper component                                                                      |
| `base-ui-docs/`                              | 53 markdown files of Base UI documentation                                                  |
| `docs/ARCHITECTURE.md`                       | Architecture blueprint                                                                      |
| `docs/DESIGN_SYSTEM.md`                      | Design system spec                                                                          |

### Architecture

- App Router pages under `src/app/components/{category}/page.tsx`
- All pages are `"use client"` — Base UI requires client components
- Shared layout components in `src/components/layout/` and `src/components/showcase/`
- Theme uses CSS custom properties in `:root` with `@theme inline {}` for Tailwind v4

### Patterns

- **Import pattern:** `import { ComponentName } from '@base-ui/react/component-name'`
- **Package name:** `@base-ui/react` (NOT `@base-ui-components/react`)
- **Styling:** Data attributes for state (`data-[checked]`, `data-[highlighted]`, etc.)
- **Popups:** Always use Portal + Positioner + Popup pattern
- **Animations:** `data-[starting-style]` / `data-[ending-style]` + CSS transitions
- **Drawer:** Import as `DrawerPreview as Drawer` from `@base-ui/react/drawer`

### Gotchas

| Issue                                                          | Fix                                                                                        |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Turbopack can't parse `h-[var(...)]` arbitrary Tailwind values | Use custom CSS classes in globals.css (`.h-accordion-panel`, `.max-h-available`, etc.)     |
| Tailwind v4 scans markdown files for class names → invalid CSS | Add `@source not "../../base-ui-docs";` to globals.css                                     |
| Base UI components render nothing without styles               | Must style EVERY sub-part — there are zero defaults                                        |
| Dev server lock file stale after crash                         | Delete `.next/dev/lock`                                                                    |
| Toast CSS is very long                                         | Copy from base-ui-docs/toast.md — too many transform/swipe calculations for manual writing |

### Custom CSS Utilities (globals.css)

These replace `h-[var(--name)]` patterns that Turbopack can't parse:

- `.h-accordion-panel` → `height: var(--accordion-panel-height)`
- `.h-collapsible-panel` → `height: var(--collapsible-panel-height)`
- `.max-h-available` → `max-height: var(--available-height)`
- `.h-toast-height` → `height: var(--height)`
- `.h-toast-height-expanded` → `height: var(--toast-height)`

### Session Log

- 2026-02-20: Built complete Base UI playground with 36 components across 6 categories. Created base-ui-skills Claude Code skill. Fixed Turbopack CSS var parsing issues.
