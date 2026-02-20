# Base UI Documentation

Complete documentation for `@base-ui/react` - an unstyled React component library for building accessible user interfaces.

**Source:** https://base-ui.com
**Package:** `@base-ui/react`
**Install:** `npm i @base-ui/react`

---

## File Index

### Full Documentation

- [FULL_DOCS.md](./FULL_DOCS.md) - Complete documentation in a single file (all sections concatenated)
- [llms-index.md](./llms-index.md) - Original llms.txt index from base-ui.com

### Overview

- [overview.md](./overview.md) - Combined overview: About, Quick Start, and Accessibility
- [about.md](./about.md) - About Base UI, team, goals, browser support
- [quick-start.md](./quick-start.md) - Installation and setup guide
- [accessibility.md](./accessibility.md) - Accessibility features and guidelines

### Handbook (Guides)

- [styling.md](./styling.md) - Styling with Tailwind, CSS Modules, CSS-in-JS, data attributes, CSS variables
- [animation.md](./animation.md) - CSS transitions, CSS animations, JavaScript animation libraries (Motion)
- [composition.md](./composition.md) - Composing components with `render` prop
- [customization.md](./customization.md) - Event handling, canceling events, controlling components with state
- [forms.md](./forms.md) - Building forms, validation, Field, Fieldset, integration with React Hook Form / TanStack Form
- [typescript.md](./typescript.md) - TypeScript usage, namespaces, Props/State types

### Components (36 total)

| Component       | File                                                  | Description                                          |
| --------------- | ----------------------------------------------------- | ---------------------------------------------------- |
| Accordion       | [accordion.md](./components/accordion.md)             | Collapsible panels with headings                     |
| Alert Dialog    | [alert-dialog.md](./components/alert-dialog.md)       | Modal dialog requiring user response                 |
| Autocomplete    | [autocomplete.md](./components/autocomplete.md)       | Input with filtered option list                      |
| Avatar          | [avatar.md](./components/avatar.md)                   | User avatar with image/fallback                      |
| Button          | [button.md](./components/button.md)                   | Button with render-as and disabled-focusable support |
| Checkbox        | [checkbox.md](./components/checkbox.md)               | Checkbox input                                       |
| Checkbox Group  | [checkbox-group.md](./components/checkbox-group.md)   | Shared state for multiple checkboxes                 |
| Collapsible     | [collapsible.md](./components/collapsible.md)         | Panel controlled by a button                         |
| Combobox        | [combobox.md](./components/combobox.md)               | Input combined with selectable list                  |
| Context Menu    | [context-menu.md](./components/context-menu.md)       | Right-click / long-press menu                        |
| Dialog          | [dialog.md](./components/dialog.md)                   | Modal dialog on top of page                          |
| Drawer          | [drawer.md](./components/drawer.md)                   | Slide-out panel with swipe gestures                  |
| Field           | [field.md](./components/field.md)                     | Labeling and validation for form controls            |
| Fieldset        | [fieldset.md](./components/fieldset.md)               | Group of fields with stylable legend                 |
| Form            | [form.md](./components/form.md)                       | Form with consolidated error handling                |
| Input           | [input.md](./components/input.md)                     | Text input                                           |
| Menu            | [menu.md](./components/menu.md)                       | Dropdown menu with keyboard navigation               |
| Menubar         | [menubar.md](./components/menubar.md)                 | Application menu bar                                 |
| Meter           | [meter.md](./components/meter.md)                     | Graphical display of numeric value                   |
| Navigation Menu | [navigation-menu.md](./components/navigation-menu.md) | Website navigation with links and menus              |
| Number Field    | [number-field.md](./components/number-field.md)       | Number input with increment/decrement                |
| Popover         | [popover.md](./components/popover.md)                 | Popup anchored to a button                           |
| Preview Card    | [preview-card.md](./components/preview-card.md)       | Link hover preview card                              |
| Progress        | [progress.md](./components/progress.md)               | Progress bar for task status                         |
| Radio           | [radio.md](./components/radio.md)                     | Radio button group                                   |
| Scroll Area     | [scroll-area.md](./components/scroll-area.md)         | Custom scrollbars on native scroll container         |
| Select          | [select.md](./components/select.md)                   | Dropdown select for choosing a value                 |
| Separator       | [separator.md](./components/separator.md)             | Accessible separator/divider                         |
| Slider          | [slider.md](./components/slider.md)                   | Range input slider                                   |
| Switch          | [switch.md](./components/switch.md)                   | On/off toggle switch                                 |
| Tabs            | [tabs.md](./components/tabs.md)                       | Tab panels for related content                       |
| Toast           | [toast.md](./components/toast.md)                     | Notification toasts                                  |
| Toggle          | [toggle.md](./components/toggle.md)                   | Two-state on/off button                              |
| Toggle Group    | [toggle-group.md](./components/toggle-group.md)       | Group of toggle buttons                              |
| Toolbar         | [toolbar.md](./components/toolbar.md)                 | Group of buttons and controls                        |
| Tooltip         | [tooltip.md](./components/tooltip.md)                 | Hint shown on hover/focus                            |

### Utilities

- [csp-provider.md](./csp-provider.md) - CSP nonce for inline styles/scripts
- [direction-provider.md](./direction-provider.md) - RTL/LTR direction support
- [merge-props.md](./merge-props.md) - Utility to merge multiple sets of React props
- [use-render.md](./use-render.md) - Hook for enabling render prop in custom components

---

## Key Concepts

### Styling Approach

Base UI is **unstyled/headless**. Components don't bundle CSS. Style with:

- **Tailwind CSS** - Apply classes via `className` prop
- **CSS Modules** - Import `.module.css` and use `className={styles.MyClass}`
- **CSS-in-JS** - Wrap parts with styled-components/emotion
- **Plain CSS** - Use data attributes like `[data-checked]`, `[data-open]`

### Component Structure

Components use a compound/parts pattern:

```tsx
import { Dialog } from "@base-ui/react/dialog";

<Dialog.Root>
  <Dialog.Trigger />
  <Dialog.Portal>
    <Dialog.Backdrop />
    <Dialog.Popup>
      <Dialog.Title />
      <Dialog.Description />
      <Dialog.Close />
    </Dialog.Popup>
  </Dialog.Portal>
</Dialog.Root>;
```

### Data Attributes for Styling

Components expose data attributes for state:

- `[data-open]` / `[data-closed]` - Open/closed state
- `[data-checked]` / `[data-unchecked]` - Checked state
- `[data-highlighted]` - Highlighted item
- `[data-starting-style]` / `[data-ending-style]` - Animation hooks
- `[data-popup-open]` - Trigger has popup open
- `[data-disabled]` - Disabled state
- `[data-side="top|bottom|left|right"]` - Popup positioning

### CSS Variables

Components expose CSS variables for dynamic values:

- `--available-height` / `--available-width` - Available space for popups
- `--anchor-width` / `--anchor-height` - Anchor element dimensions
- `--transform-origin` - Transform origin for animations

### Composition (render prop)

Use `render` to compose with custom components:

```tsx
<Menu.Trigger render={<MyButton size="md" />}>Open menu</Menu.Trigger>
```

### Animation

- **CSS Transitions:** Use `[data-starting-style]` and `[data-ending-style]`
- **CSS Animations:** Use `[data-open]` and `[data-closed]`
- **JS (Motion):** Use `render` prop with `motion.div`, control with `open` state

### Tailwind CSS Note

The documentation examples are written for **Tailwind CSS v4**. If `package.json` uses Tailwind CSS v3, automatically convert unsupported styles to v3-compatible equivalents.
