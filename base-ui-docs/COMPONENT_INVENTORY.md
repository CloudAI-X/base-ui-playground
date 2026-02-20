# Base UI Component Inventory

> **Package:** `@base-ui-components/react` (also available as `@base-ui/react`)
> **Version:** v1.2.0 (latest as of Feb 2026)
> **Source:** [base-ui.com](https://base-ui.com)
> **Styling:** Unstyled / Tailwind CSS v4 / CSS Modules

---

## Table of Contents

1. [Input Components](#input-components)
2. [Navigation Components](#navigation-components)
3. [Overlay Components](#overlay-components)
4. [Data Display Components](#data-display-components)
5. [Feedback Components](#feedback-components)
6. [Layout Components](#layout-components)
7. [Form Components](#form-components)
8. [Utility Components](#utility-components)
9. [Utility Functions & Hooks](#utility-functions--hooks)
10. [Build Checklist](#build-checklist)
11. [Summary](#summary)

---

## Input Components

### 1. Button

- [ ] **Button**

**Import:** `import { Button } from '@base-ui-components/react/button'`

**Description:** A button component that can be rendered as another tag or remain focusable when disabled.

**Complexity:** Simple

**Subcomponents:** None (single element -- renders `<button>`)

**Key Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| focusableWhenDisabled | `boolean` | `false` | Whether the button should be focusable when disabled |
| nativeButton | `boolean` | `true` | Whether rendered element is a native `<button>` |
| disabled | `boolean` | `false` | Whether disabled |
| render | `ReactElement \| Function` | - | Custom render element |

**Data Attributes:** `data-disabled`

---

### 2. Input

- [ ] **Input**

**Import:** `import { Input } from '@base-ui-components/react/input'`

**Description:** An unstyled input component.

**Complexity:** Simple

**Subcomponents:** None (single element -- renders `<input>`)

**Key Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | `string \| Function` | - | CSS class or function returning class |
| render | `ReactElement \| Function` | - | Custom render element |

---

### 3. Checkbox

- [ ] **Checkbox**

**Import:** `import { Checkbox } from '@base-ui-components/react/checkbox'`

**Description:** An easily customizable checkbox component with indeterminate state support.

**Complexity:** Medium

**Subcomponents:**

- `Checkbox.Root` -- The checkbox itself. Renders `<span>` + hidden `<input>`.
- `Checkbox.Indicator` -- Indicates whether checked. Renders `<span>`.

**Key Props (Root):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | `string` | - | Form field name |
| defaultChecked | `boolean` | `false` | Initial checked state (uncontrolled) |
| checked | `boolean` | - | Controlled checked state |
| onCheckedChange | `Function` | - | Change handler |
| indeterminate | `boolean` | `false` | Mixed state |
| value | `string` | - | Value when checked |
| parent | `boolean` | `false` | Controls group of child checkboxes |
| uncheckedValue | `string` | - | Value when unchecked |
| disabled | `boolean` | `false` | Disabled state |
| readOnly | `boolean` | `false` | Read-only state |
| required | `boolean` | `false` | Required validation |
| inputRef | `Ref<HTMLInputElement>` | - | Ref for hidden input |

**Key Props (Indicator):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| keepMounted | `boolean` | `false` | Keep in DOM when unchecked |

**Data Attributes:** `data-checked`, `data-unchecked`, `data-disabled`, `data-readonly`, `data-required`, `data-valid`, `data-invalid`, `data-dirty`, `data-touched`, `data-filled`, `data-focused`, `data-indeterminate`

---

### 4. Checkbox Group

- [ ] **Checkbox Group**

**Import:** `import { CheckboxGroup } from '@base-ui-components/react/checkbox-group'`

**Description:** Provides shared state to a series of checkboxes, including parent checkbox support.

**Complexity:** Medium

**Subcomponents:** None (single element -- renders `<div>`). Used together with `Checkbox.Root`.

**Key Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultValue | `string[]` | - | Initial checked values (uncontrolled) |
| value | `string[]` | - | Controlled checked values |
| onValueChange | `Function` | - | Value change handler |
| allValues | `string[]` | - | All checkbox values (for parent checkbox) |
| disabled | `boolean` | `false` | Disabled state |

**Related:** Works with `Checkbox`, `Field`, `Fieldset`

---

### 5. Radio

- [ ] **Radio**

**Import:** `import { Radio } from '@base-ui-components/react/radio'`

**Description:** An easily stylable radio button component.

**Complexity:** Medium

**Subcomponents:**

- `Radio.Root` -- The radio button itself. Renders `<button>`.
- `Radio.Indicator` -- Visual indicator. Renders `<span>`.

**Key Props (Root):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | `any` | - | Value of the radio item |
| disabled | `boolean` | `false` | Disabled state |

**Related:** Must be used inside `RadioGroup`

---

### 6. Radio Group (via Radio)

- [ ] **Radio Group**

**Import:** `import { RadioGroup } from '@base-ui-components/react/radio-group'`

**Description:** Groups radio buttons with shared state.

**Complexity:** Medium

**Subcomponents:**

- `RadioGroup` (Root) -- Groups radio buttons. Renders `<div>`.

**Key Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultValue | `any` | - | Default selected value |
| value | `any` | - | Controlled value |
| onValueChange | `Function` | - | Change handler |
| disabled | `boolean` | `false` | Disabled state |

---

### 7. Switch

- [ ] **Switch**

**Import:** `import { Switch } from '@base-ui-components/react/switch'`

**Description:** Indicates whether a setting is on or off.

**Complexity:** Simple

**Subcomponents:**

- `Switch.Root` -- The switch itself. Renders `<button>`.
- `Switch.Thumb` -- The movable thumb indicator. Renders `<span>`.

**Key Props (Root):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultChecked | `boolean` | `false` | Initial state (uncontrolled) |
| checked | `boolean` | - | Controlled state |
| onCheckedChange | `Function` | - | Change handler |
| name | `string` | - | Form field name |
| disabled | `boolean` | `false` | Disabled state |
| readOnly | `boolean` | `false` | Read-only state |
| required | `boolean` | `false` | Required validation |
| inputRef | `Ref<HTMLInputElement>` | - | Ref for hidden input |

**Data Attributes:** `data-checked`, `data-unchecked`, `data-disabled`, `data-readonly`, `data-required`

---

### 8. Toggle

- [ ] **Toggle**

**Import:** `import { Toggle } from '@base-ui-components/react/toggle'`

**Description:** A two-state button that can be on or off.

**Complexity:** Simple

**Subcomponents:** None (single element -- renders `<button>`)

**Key Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultPressed | `boolean` | `false` | Initial pressed state |
| pressed | `boolean` | - | Controlled pressed state |
| onPressedChange | `Function` | - | Change handler |
| disabled | `boolean` | `false` | Disabled state |

**Data Attributes:** `data-pressed`, `data-disabled`

---

### 9. Toggle Group

- [ ] **Toggle Group**

**Import:** `import { ToggleGroup } from '@base-ui-components/react/toggle-group'`

**Description:** Provides shared state to a series of toggle buttons.

**Complexity:** Medium

**Subcomponents:**

- `ToggleGroup` (Root) -- Container. Renders `<div>`.

**Key Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultValue | `any[]` | - | Default pressed toggles |
| value | `any[]` | - | Controlled pressed toggles |
| onValueChange | `Function` | - | Change handler |
| multiple | `boolean` | `false` | Allow multiple selections |
| disabled | `boolean` | `false` | Disabled state |

**Related:** Used with `Toggle`

---

### 10. Slider

- [ ] **Slider**

**Import:** `import { Slider } from '@base-ui-components/react/slider'`

**Description:** Works like a range input and is easy to style. Supports single and range values.

**Complexity:** Complex

**Subcomponents:**

- `Slider.Root` -- Groups all parts. Renders `<div>`.
- `Slider.Track` -- The track background. Renders `<div>`.
- `Slider.Fill` -- The filled portion of the track. Renders `<div>`.
- `Slider.Thumb` -- The draggable handle. Renders `<div>`.
- `Slider.Indicator` -- Visual value indicator. Renders `<div>`.
- `Slider.Control` -- Contains the track. Renders `<div>`.
- `Slider.Value` -- Displays the current value. Renders `<span>`.

**Key Props (Root):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultValue | `number \| number[]` | - | Default value(s) |
| value | `number \| number[]` | - | Controlled value(s) |
| onValueChange | `Function` | - | Change handler |
| onValueChangeCommitted | `Function` | - | Called on pointer up |
| min | `number` | `0` | Minimum value |
| max | `number` | `100` | Maximum value |
| step | `number` | `1` | Step increment |
| minStepsBetweenValues | `number` | `0` | Min distance between range thumbs |
| disabled | `boolean` | `false` | Disabled state |
| orientation | `'horizontal' \| 'vertical'` | `'horizontal'` | Orientation |
| name | `string` | - | Form field name |

**CSS Variables:** `--slider-track-width`, `--slider-track-height`, `--slider-fill-width`, `--slider-fill-height`, `--slider-thumb-width`, `--slider-thumb-height`

---

### 11. Number Field

- [ ] **Number Field**

**Import:** `import { NumberField } from '@base-ui-components/react/number-field'`

**Description:** A number input with increment/decrement buttons and a scrub area.

**Complexity:** Complex

**Subcomponents:**

- `NumberField.Root` -- Groups all parts. Renders `<div>`.
- `NumberField.Input` -- The text input. Renders `<input>`.
- `NumberField.Increment` -- Increment button. Renders `<button>`.
- `NumberField.Decrement` -- Decrement button. Renders `<button>`.
- `NumberField.ScrubArea` -- Area for pointer scrubbing. Renders `<div>`.
- `NumberField.ScrubAreaCursor` -- Virtual cursor. Renders `<span>`.
- `NumberField.Group` -- Visual grouping. Renders `<div>`.

**Key Props (Root):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultValue | `number \| null` | - | Default value |
| value | `number \| null` | - | Controlled value |
| onValueChange | `Function` | - | Change handler |
| min | `number` | - | Minimum value |
| max | `number` | - | Maximum value |
| step | `number` | `1` | Step increment |
| smallStep | `number` | `0.1` | Step for Shift key |
| largeStep | `number` | `10` | Step for Page Up/Down |
| disabled | `boolean` | `false` | Disabled state |
| readOnly | `boolean` | `false` | Read-only state |
| required | `boolean` | `false` | Required state |
| allowWheelScrub | `boolean` | `false` | Scroll wheel changes value |
| name | `string` | - | Form field name |
| locale | `string` | - | Locale for formatting |
| format | `Intl.NumberFormatOptions` | - | Number formatting |

---

### 12. Select

- [ ] **Select**

**Import:** `import { Select } from '@base-ui-components/react/select'`

**Description:** A dropdown for choosing a predefined value.

**Complexity:** Complex

**Subcomponents:**

- `Select.Root` -- Groups all parts. No HTML output.
- `Select.Trigger` -- Button that opens the select. Renders `<button>`.
- `Select.Value` -- Displays selected value. Renders `<span>`.
- `Select.Portal` -- Portal container. Renders `<div>`.
- `Select.Positioner` -- Positions the popup. Renders `<div>`.
- `Select.Popup` -- The dropdown container. Renders `<div>`.
- `Select.Item` -- An option. Renders `<div>`.
- `Select.ItemText` -- Text of an option. Renders `<span>`.
- `Select.ItemIndicator` -- Selected indicator. Renders `<span>`.
- `Select.Group` -- Groups related items. Renders `<div>`.
- `Select.GroupLabel` -- Label for a group. Renders `<div>`.
- `Select.Arrow` -- Arrow element. Renders `<div>`.
- `Select.Separator` -- Visual separator. Renders `<div>`.
- `Select.Backdrop` -- Backdrop overlay. Renders `<div>`.
- `Select.ScrollUpArrow` -- Scroll up indicator. Renders `<div>`.
- `Select.ScrollDownArrow` -- Scroll down indicator. Renders `<div>`.

**Key Props (Root):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultValue | `any` | - | Default selected value |
| value | `any` | - | Controlled value |
| onValueChange | `Function` | - | Change handler |
| open | `boolean` | - | Controlled open state |
| onOpenChange | `Function` | - | Open change handler |
| name | `string` | - | Form field name |
| disabled | `boolean` | `false` | Disabled state |
| required | `boolean` | `false` | Required state |
| alignItemToTrigger | `boolean` | `true` | Align selected item to trigger |

---

### 13. Combobox

- [ ] **Combobox**

**Import:** `import { Combobox } from '@base-ui-components/react/combobox'`

**Description:** An input combined with a list of predefined items to select, with filtering.

**Complexity:** Complex

**Subcomponents:**

- `Combobox.Root` -- Groups all parts. No HTML output.
- `Combobox.Control` -- Groups trigger and input. Renders `<div>`.
- `Combobox.Input` -- Text input for filtering. Renders `<input>`.
- `Combobox.Trigger` -- Toggle button. Renders `<button>`.
- `Combobox.Portal` -- Portal container. Renders `<div>`.
- `Combobox.Positioner` -- Positions the popup. Renders `<div>`.
- `Combobox.Popup` -- Dropdown container. Renders `<div>`.
- `Combobox.Item` -- An option. Renders `<div>`.
- `Combobox.ItemText` -- Text of an option. Renders `<span>`.
- `Combobox.ItemIndicator` -- Selected indicator. Renders `<span>`.
- `Combobox.Group` -- Groups related items. Renders `<div>`.
- `Combobox.GroupLabel` -- Label for a group. Renders `<div>`.
- `Combobox.Arrow` -- Arrow element. Renders `<div>`.
- `Combobox.NoItems` -- Shown when no items match. Renders `<div>`.
- `Combobox.ScrollUpArrow` -- Scroll up indicator. Renders `<div>`.
- `Combobox.ScrollDownArrow` -- Scroll down indicator. Renders `<div>`.

**Key Props (Root):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultValue | `any` | - | Default selected value |
| value | `any` | - | Controlled value |
| onValueChange | `Function` | - | Value change handler |
| defaultInputValue | `string` | - | Default input text |
| inputValue | `string` | - | Controlled input text |
| onInputValueChange | `Function` | - | Input change handler |
| open | `boolean` | - | Controlled open state |
| onOpenChange | `Function` | - | Open change handler |
| name | `string` | - | Form field name |
| disabled | `boolean` | `false` | Disabled state |
| required | `boolean` | `false` | Required state |
| multiple | `boolean` | `false` | Allow multiple selections |
| filterOptions | `Function \| null` | built-in | Custom filter function |

---

### 14. Autocomplete

- [ ] **Autocomplete**

**Import:** `import { Autocomplete } from '@base-ui-components/react/autocomplete'`

**Description:** An input with a list of filtered options.

**Complexity:** Complex

**Subcomponents:**

- `Autocomplete.Root` -- Groups all parts. No HTML output.
- `Autocomplete.Input` -- Text input. Renders `<input>`.
- `Autocomplete.Trigger` -- Toggle button. Renders `<button>`.
- `Autocomplete.Portal` -- Portal container. Renders `<div>`.
- `Autocomplete.Positioner` -- Positions the popup. Renders `<div>`.
- `Autocomplete.Popup` -- Dropdown container. Renders `<div>`.
- `Autocomplete.Item` -- An option. Renders `<div>`.
- `Autocomplete.ItemText` -- Text of an option. Renders `<span>`.
- `Autocomplete.ItemIndicator` -- Selected indicator. Renders `<span>`.
- `Autocomplete.Group` -- Groups related items. Renders `<div>`.
- `Autocomplete.GroupLabel` -- Label for a group. Renders `<div>`.
- `Autocomplete.Arrow` -- Arrow element. Renders `<div>`.
- `Autocomplete.ClearButton` -- Clears the input. Renders `<button>`.
- `Autocomplete.NoItems` -- Shown when no items match. Renders `<div>`.
- `Autocomplete.Control` -- Groups trigger and input. Renders `<div>`.

**Key Props (Root):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultValue | `any` | - | Default selected value |
| value | `any` | - | Controlled value |
| onValueChange | `Function` | - | Change handler |
| open | `boolean` | - | Controlled open state |
| onOpenChange | `Function` | - | Open change handler |
| name | `string` | - | Form field name |
| disabled | `boolean` | `false` | Disabled state |
| multiple | `boolean` | `false` | Allow multiple selections |
| filterOptions | `Function \| null` | built-in | Custom filter function |

---

## Navigation Components

### 15. Tabs

- [ ] **Tabs**

**Import:** `import { Tabs } from '@base-ui-components/react/tabs'`

**Description:** Tabs for toggling between related panels on the same page.

**Complexity:** Medium

**Subcomponents:**

- `Tabs.Root` -- Groups all parts. Renders `<div>`.
- `Tabs.List` -- Container for tab buttons. Renders `<div>`.
- `Tabs.Tab` -- A tab button. Renders `<button>`.
- `Tabs.Panel` -- Content panel. Renders `<div>`.
- `Tabs.Indicator` -- Active tab indicator. Renders `<span>`.

**Key Props (Root):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultValue | `any` | - | Default selected tab |
| value | `any` | - | Controlled value |
| onValueChange | `Function` | - | Change handler |
| orientation | `'horizontal' \| 'vertical'` | `'horizontal'` | Tab orientation |

**CSS Variables:** `--active-tab-left`, `--active-tab-top`, `--active-tab-width`, `--active-tab-height`

---

### 16. Menu

- [ ] **Menu**

**Import:** `import { Menu } from '@base-ui-components/react/menu'`

**Description:** A dropdown menu with keyboard navigation, radio items, checkbox items, and submenus.

**Complexity:** Complex

**Subcomponents:**

- `Menu.Root` -- Groups all parts. No HTML output.
- `Menu.Trigger` -- Button that opens the menu. Renders `<button>`.
- `Menu.Portal` -- Portal container. Renders `<div>`.
- `Menu.Positioner` -- Positions the popup. Renders `<div>`.
- `Menu.Popup` -- The menu container. Renders `<div>`.
- `Menu.Item` -- An action item. Renders `<div>`.
- `Menu.LinkItem` -- A navigation link. Renders `<a>`.
- `Menu.Separator` -- Visual separator. Renders `<div>`.
- `Menu.Arrow` -- Arrow element. Renders `<div>`.
- `Menu.Group` -- Groups related items. Renders `<div>`.
- `Menu.GroupLabel` -- Label for a group. Renders `<div>`.
- `Menu.RadioGroup` -- Groups radio items. Renders `<div>`.
- `Menu.RadioItem` -- A radio option. Renders `<div>`.
- `Menu.RadioItemIndicator` -- Radio indicator. Renders `<span>`.
- `Menu.CheckboxItem` -- A checkbox option. Renders `<div>`.
- `Menu.CheckboxItemIndicator` -- Checkbox indicator. Renders `<span>`.
- `Menu.SubmenuRoot` -- Nested submenu. No HTML output.
- `Menu.SubmenuTrigger` -- Item that opens a submenu. Renders `<div>`.

**Key Props (Root):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultOpen | `boolean` | `false` | Initially open |
| open | `boolean` | - | Controlled open state |
| onOpenChange | `Function` | - | Open change handler |
| highlightItemOnHover | `boolean` | `true` | Highlight on hover |
| loopFocus | `boolean` | `true` | Loop keyboard focus |
| closeParentOnEsc | `boolean` | `false` | Close parent on Escape |
| orientation | `'vertical' \| 'horizontal'` | `'vertical'` | Orientation |

**CSS Variables:** `--transform-origin`, `--anchor-width`, `--anchor-height`, `--available-width`, `--available-height`

---

### 17. Context Menu

- [ ] **Context Menu**

**Import:** `import { ContextMenu } from '@base-ui-components/react/context-menu'`

**Description:** A menu that appears at the pointer on right click or long press.

**Complexity:** Complex

**Subcomponents:**

- `ContextMenu.Root` -- Groups all parts. No HTML output.
- `ContextMenu.Trigger` -- Area that triggers the menu. Renders `<div>`.
- `ContextMenu.Portal` -- Portal container. Renders `<div>`.
- `ContextMenu.Positioner` -- Positions the popup. Renders `<div>`.
- `ContextMenu.Popup` -- The menu container. Renders `<div>`.
- `ContextMenu.Backdrop` -- Backdrop overlay. Renders `<div>`.
- `ContextMenu.Item` -- An action item. Renders `<div>`.
- `ContextMenu.LinkItem` -- A navigation link. Renders `<a>`.
- `ContextMenu.Separator` -- Visual separator. Renders `<div>`.
- `ContextMenu.Arrow` -- Arrow element. Renders `<div>`.
- `ContextMenu.Group` -- Groups related items. Renders `<div>`.
- `ContextMenu.GroupLabel` -- Label for a group. Renders `<div>`.
- `ContextMenu.RadioGroup` -- Groups radio items. Renders `<div>`.
- `ContextMenu.RadioItem` -- A radio option. Renders `<div>`.
- `ContextMenu.RadioItemIndicator` -- Radio indicator. Renders `<span>`.
- `ContextMenu.CheckboxItem` -- A checkbox option. Renders `<div>`.
- `ContextMenu.CheckboxItemIndicator` -- Checkbox indicator. Renders `<span>`.
- `ContextMenu.SubmenuRoot` -- Nested submenu. No HTML output.
- `ContextMenu.SubmenuTrigger` -- Item that opens a submenu. Renders `<div>`.

**Key Props (Root):** Same as Menu.Root

---

### 18. Menubar

- [ ] **Menubar**

**Import:** `import { Menubar } from '@base-ui-components/react/menubar'`

**Description:** A menu bar providing commands and options for your application.

**Complexity:** Complex

**Subcomponents:**

- `Menubar.Root` -- Groups all menus. Renders `<div>`.
- (Uses `Menu.Root`, `Menu.Trigger`, `Menu.Popup`, etc. inside)

**Key Props (Root):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| loopFocus | `boolean` | `true` | Loop keyboard focus |

**Related:** Composed with `Menu` subcomponents

---

### 19. Navigation Menu

- [ ] **Navigation Menu**

**Import:** `import { NavigationMenu } from '@base-ui-components/react/navigation-menu'`

**Description:** Displays a collection of links and menus for website navigation.

**Complexity:** Complex

**Subcomponents:**

- `NavigationMenu.Root` -- Groups all parts. Renders `<nav>`.
- `NavigationMenu.List` -- Container for items. Renders `<ul>`.
- `NavigationMenu.Item` -- An item wrapper. Renders `<li>`.
- `NavigationMenu.Trigger` -- Button that opens content. Renders `<button>`.
- `NavigationMenu.Content` -- The dropdown content. Renders `<div>`.
- `NavigationMenu.Link` -- A navigation link. Renders `<a>`.
- `NavigationMenu.Portal` -- Portal container. Renders `<div>`.
- `NavigationMenu.Positioner` -- Positions content. Renders `<div>`.
- `NavigationMenu.Popup` -- The popup container. Renders `<div>`.
- `NavigationMenu.Arrow` -- Arrow element. Renders `<div>`.
- `NavigationMenu.Viewport` -- Animated viewport. Renders `<div>`.
- `NavigationMenu.Indicator` -- Active indicator. Renders `<div>`.

**Key Props (Root):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultValue | `string` | - | Default open item |
| value | `string` | - | Controlled open item |
| onValueChange | `Function` | - | Change handler |
| orientation | `'horizontal' \| 'vertical'` | `'horizontal'` | Orientation |

---

### 20. Toolbar

- [ ] **Toolbar**

**Import:** `import { Toolbar } from '@base-ui-components/react/toolbar'`

**Description:** Groups a set of buttons and controls.

**Complexity:** Medium

**Subcomponents:**

- `Toolbar.Root` -- The toolbar container. Renders `<div>`.
- `Toolbar.Button` -- A toolbar button. Renders `<button>`.
- `Toolbar.Separator` -- Visual separator. Renders `<div>`.
- `Toolbar.Link` -- A toolbar link. Renders `<a>`.
- `Toolbar.Group` -- Groups related items. Renders `<div>`.
- `Toolbar.Input` -- A toolbar input. Renders `<input>`.

**Key Props (Root):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| orientation | `'horizontal' \| 'vertical'` | `'horizontal'` | Orientation |
| loopFocus | `boolean` | `true` | Loop keyboard focus |

---

## Overlay Components

### 21. Dialog

- [ ] **Dialog**

**Import:** `import { Dialog } from '@base-ui-components/react/dialog'`

**Description:** A modal dialog that opens on top of the entire page.

**Complexity:** Complex

**Subcomponents:**

- `Dialog.Root` -- Groups all parts. No HTML output.
- `Dialog.Trigger` -- Button that opens the dialog. Renders `<button>`.
- `Dialog.Portal` -- Portal container. Renders `<div>`.
- `Dialog.Backdrop` -- Overlay behind the dialog. Renders `<div>`.
- `Dialog.Viewport` -- Scrollable positioning container. Renders `<div>`.
- `Dialog.Popup` -- The dialog container. Renders `<div>`.
- `Dialog.Title` -- Heading label. Renders `<h2>`.
- `Dialog.Description` -- Description text. Renders `<p>`.
- `Dialog.Close` -- Close button. Renders `<button>`.

**Key Props (Root):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultOpen | `boolean` | `false` | Initially open |
| open | `boolean` | - | Controlled open state |
| onOpenChange | `Function` | - | Open change handler |
| onOpenChangeComplete | `Function` | - | Called after animations |
| modal | `boolean` | `true` | Whether modal (traps focus) |
| dismissible | `boolean` | `true` | Close on backdrop click / Escape |
| handle | `Dialog.Handle` | - | External trigger handle |

**Key Props (Popup):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| initialFocus | `boolean \| Ref \| Function` | - | Element to focus on open |
| finalFocus | `boolean \| Ref \| Function` | - | Element to focus on close |

**CSS Variables:** `--nested-dialogs`

**Static Methods:** `Dialog.createHandle()` -- creates a handle for detached triggers

---

### 22. Alert Dialog

- [ ] **Alert Dialog**

**Import:** `import { AlertDialog } from '@base-ui-components/react/alert-dialog'`

**Description:** A dialog that requires a user response to proceed (not dismissible by backdrop click).

**Complexity:** Complex

**Subcomponents:**

- `AlertDialog.Root` -- Groups all parts. No HTML output.
- `AlertDialog.Trigger` -- Button that opens the dialog. Renders `<button>`.
- `AlertDialog.Portal` -- Portal container. Renders `<div>`.
- `AlertDialog.Backdrop` -- Overlay behind the dialog. Renders `<div>`.
- `AlertDialog.Viewport` -- Scrollable positioning container. Renders `<div>`.
- `AlertDialog.Popup` -- The dialog container. Renders `<div>`.
- `AlertDialog.Title` -- Heading label. Renders `<h2>`.
- `AlertDialog.Description` -- Description text. Renders `<p>`.
- `AlertDialog.Close` -- Close button. Renders `<button>`.

**Key Props (Root):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultOpen | `boolean` | `false` | Initially open |
| open | `boolean` | - | Controlled open state |
| onOpenChange | `Function` | - | Open change handler |
| onOpenChangeComplete | `Function` | - | Called after animations |
| handle | `AlertDialog.Handle` | - | External trigger handle |
| triggerId | `string \| null` | - | Active trigger ID (controlled) |

**Key Props (Trigger):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| handle | `DialogHandle` | - | Link to detached AlertDialog.Root |
| payload | `Payload` | - | Data passed to the dialog |
| id | `string` | - | Trigger ID for controlled mode |

**Static Methods:** `AlertDialog.createHandle()` -- creates a handle for detached triggers (supports typed payloads)

---

### 23. Drawer

- [ ] **Drawer**

**Import:** `import { Drawer } from '@base-ui-components/react/drawer'`

**Description:** A drawer with swipe-to-dismiss gestures.

**Complexity:** Complex

**Subcomponents:**

- `Drawer.Root` -- Groups all parts. No HTML output.
- `Drawer.Trigger` -- Button that opens the drawer. Renders `<button>`.
- `Drawer.Portal` -- Portal container. Renders `<div>`.
- `Drawer.Backdrop` -- Overlay behind the drawer. Renders `<div>`.
- `Drawer.Popup` -- The drawer container. Renders `<div>`.
- `Drawer.Title` -- Heading label. Renders `<h2>`.
- `Drawer.Description` -- Description text. Renders `<p>`.
- `Drawer.Close` -- Close button. Renders `<button>`.

**Key Props (Root):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultOpen | `boolean` | `false` | Initially open |
| open | `boolean` | - | Controlled open state |
| onOpenChange | `Function` | - | Open change handler |
| onOpenChangeComplete | `Function` | - | Called after animations |
| modal | `boolean` | `true` | Whether modal |
| dismissible | `boolean` | `true` | Can be dismissed |
| direction | `'left' \| 'right' \| 'top' \| 'bottom'` | `'left'` | Slide direction |

---

### 24. Popover

- [ ] **Popover**

**Import:** `import { Popover } from '@base-ui-components/react/popover'`

**Description:** An accessible popup anchored to a button.

**Complexity:** Complex

**Subcomponents:**

- `Popover.Root` -- Groups all parts. No HTML output.
- `Popover.Trigger` -- Button that opens the popover. Renders `<button>`.
- `Popover.Portal` -- Portal container. Renders `<div>`.
- `Popover.Positioner` -- Positions the popup. Renders `<div>`.
- `Popover.Popup` -- The popover container. Renders `<div>`.
- `Popover.Arrow` -- Arrow element. Renders `<div>`.
- `Popover.Backdrop` -- Optional backdrop. Renders `<div>`.
- `Popover.Title` -- Heading label. Renders `<h2>`.
- `Popover.Description` -- Description text. Renders `<p>`.
- `Popover.Close` -- Close button. Renders `<button>`.

**Key Props (Root):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultOpen | `boolean` | `false` | Initially open |
| open | `boolean` | - | Controlled open state |
| onOpenChange | `Function` | - | Open change handler |
| openOnHover | `boolean` | `false` | Open on hover |
| delay | `number` | `300` | Hover open delay (ms) |
| closeDelay | `number` | `0` | Hover close delay (ms) |

**CSS Variables:** `--transform-origin`, `--anchor-width`, `--anchor-height`, `--available-width`, `--available-height`

---

### 25. Tooltip

- [ ] **Tooltip**

**Import:** `import { Tooltip } from '@base-ui-components/react/tooltip'`

**Description:** Appears when an element is hovered or focused, showing a hint for sighted users.

**Complexity:** Medium

**Subcomponents:**

- `Tooltip.Provider` -- Shared delay context for multiple tooltips. No HTML output.
- `Tooltip.Root` -- Groups all parts. No HTML output.
- `Tooltip.Trigger` -- The element that triggers the tooltip. Renders `<button>`.
- `Tooltip.Portal` -- Portal container. Renders `<div>`.
- `Tooltip.Positioner` -- Positions the popup. Renders `<div>`.
- `Tooltip.Popup` -- The tooltip content. Renders `<div>`.
- `Tooltip.Arrow` -- Arrow element. Renders `<div>`.

**Key Props (Root):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultOpen | `boolean` | `false` | Initially open |
| open | `boolean` | - | Controlled open state |
| onOpenChange | `Function` | - | Open change handler |
| delay | `number` | `600` | Open delay (ms) |
| closeDelay | `number` | `0` | Close delay (ms) |
| hoverable | `boolean` | `true` | Whether hovering tooltip keeps it open |

**Key Props (Provider):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| delay | `number` | `600` | Global open delay |
| closeDelay | `number` | `0` | Global close delay |
| groupDelay | `number` | `200` | Instant open when switching between tooltips |

**CSS Variables:** `--transform-origin`, `--anchor-width`, `--anchor-height`

---

### 26. Preview Card

- [ ] **Preview Card**

**Import:** `import { PreviewCard } from '@base-ui-components/react/preview-card'`

**Description:** Appears when a link is hovered, showing a preview for sighted users.

**Complexity:** Medium

**Subcomponents:**

- `PreviewCard.Root` -- Groups all parts. No HTML output.
- `PreviewCard.Trigger` -- The element that triggers the card. Renders `<a>`.
- `PreviewCard.Portal` -- Portal container. Renders `<div>`.
- `PreviewCard.Positioner` -- Positions the popup. Renders `<div>`.
- `PreviewCard.Popup` -- The card content. Renders `<div>`.
- `PreviewCard.Arrow` -- Arrow element. Renders `<div>`.
- `PreviewCard.Backdrop` -- Optional backdrop. Renders `<div>`.

**Key Props (Root):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultOpen | `boolean` | `false` | Initially open |
| open | `boolean` | - | Controlled open state |
| onOpenChange | `Function` | - | Open change handler |
| delay | `number` | `600` | Open delay (ms) |
| closeDelay | `number` | `300` | Close delay (ms) |

---

## Data Display Components

### 27. Accordion

- [ ] **Accordion**

**Import:** `import { Accordion } from '@base-ui-components/react/accordion'`

**Description:** A set of collapsible panels with headings.

**Complexity:** Medium

**Subcomponents:**

- `Accordion.Root` -- Groups all items. Renders `<div>`.
- `Accordion.Item` -- Groups a header with its panel. Renders `<div>`.
- `Accordion.Header` -- A heading that labels the panel. Renders `<h3>`.
- `Accordion.Trigger` -- Button that opens/closes the panel. Renders `<button>`.
- `Accordion.Panel` -- The collapsible content. Renders `<div>`.

**Key Props (Root):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultValue | `any[]` | - | Initially open items |
| value | `any[]` | - | Controlled open items |
| onValueChange | `Function` | - | Change handler |
| multiple | `boolean` | `false` | Allow multiple open panels |
| hiddenUntilFound | `boolean` | `false` | Enable browser search in panels |
| loopFocus | `boolean` | `true` | Loop keyboard focus |
| disabled | `boolean` | `false` | Disabled state |
| orientation | `'vertical' \| 'horizontal'` | `'vertical'` | Orientation |
| keepMounted | `boolean` | `false` | Keep panels in DOM |

**CSS Variables:** `--accordion-panel-height`, `--accordion-panel-width`

**Data Attributes:** `data-open`, `data-disabled`, `data-orientation`, `data-panel-open`, `data-starting-style`, `data-ending-style`, `data-index`

---

### 28. Collapsible

- [ ] **Collapsible**

**Import:** `import { Collapsible } from '@base-ui-components/react/collapsible'`

**Description:** A panel controlled by a button.

**Complexity:** Simple

**Subcomponents:**

- `Collapsible.Root` -- Groups all parts. Renders `<div>`.
- `Collapsible.Trigger` -- Button that toggles the panel. Renders `<button>`.
- `Collapsible.Panel` -- The collapsible content. Renders `<div>`.

**Key Props (Root):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultOpen | `boolean` | `false` | Initially open |
| open | `boolean` | - | Controlled open state |
| onOpenChange | `Function` | - | Open change handler |
| disabled | `boolean` | `false` | Disabled state |

**Key Props (Panel):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| hiddenUntilFound | `boolean` | `false` | Enable browser search |
| keepMounted | `boolean` | `false` | Keep in DOM when closed |

**CSS Variables:** `--collapsible-panel-height`, `--collapsible-panel-width`

---

### 29. Avatar

- [ ] **Avatar**

**Import:** `import { Avatar } from '@base-ui-components/react/avatar'`

**Description:** An easily customizable avatar component.

**Complexity:** Simple

**Subcomponents:**

- `Avatar.Root` -- The avatar container. Renders `<span>`.
- `Avatar.Image` -- The profile image. Renders `<img>`.
- `Avatar.Fallback` -- Fallback when image fails. Renders `<span>`.

**Key Props (Image):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| onLoadingStatusChange | `Function` | - | Loading status callback |

**Key Props (Fallback):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| delay | `number` | - | Delay before showing fallback (ms) |

---

### 30. Separator

- [ ] **Separator**

**Import:** `import { Separator } from '@base-ui-components/react/separator'`

**Description:** A separator accessible to screen readers.

**Complexity:** Simple

**Subcomponents:** None (single element -- renders `<div>`)

**Key Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| orientation | `'horizontal' \| 'vertical'` | `'horizontal'` | Orientation |

**Data Attributes:** `data-orientation`

---

### 31. Scroll Area

- [ ] **Scroll Area**

**Import:** `import { ScrollArea } from '@base-ui-components/react/scroll-area'`

**Description:** A native scroll container with custom scrollbars.

**Complexity:** Medium

**Subcomponents:**

- `ScrollArea.Root` -- Groups all parts. Renders `<div>`.
- `ScrollArea.Viewport` -- The scrollable area. Renders `<div>`.
- `ScrollArea.Scrollbar` -- The custom scrollbar. Renders `<div>`.
- `ScrollArea.Thumb` -- The scrollbar thumb. Renders `<div>`.
- `ScrollArea.Corner` -- Corner element. Renders `<div>`.

**Key Props (Root):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| gutter | `boolean \| string` | - | Reserve scrollbar gutter space |

**Key Props (Scrollbar):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| orientation | `'horizontal' \| 'vertical'` | `'vertical'` | Scrollbar axis |
| keepMounted | `boolean` | `false` | Keep in DOM when not scrolling |

---

## Feedback Components

### 32. Progress

- [ ] **Progress**

**Import:** `import { Progress } from '@base-ui-components/react/progress'`

**Description:** Displays the status of a task that takes a long time.

**Complexity:** Medium

**Subcomponents:**

- `Progress.Root` -- Groups all parts. Renders `<div>`.
- `Progress.Track` -- The background track. Renders `<div>`.
- `Progress.Indicator` -- The filled indicator. Renders `<div>`.
- `Progress.Label` -- Text label. Renders `<span>`.
- `Progress.Value` -- Displays the value. Renders `<span>`.

**Key Props (Root):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | `number \| null` | - | Current value (null = indeterminate) |
| min | `number` | `0` | Minimum value |
| max | `number` | `100` | Maximum value |
| getAriaValueText | `Function` | - | Custom aria-valuetext |

**CSS Variables:** `--progress-indicator-width`, `--progress-indicator-height`

**Data Attributes:** `data-complete`, `data-indeterminate`, `data-progressing`

---

### 33. Meter

- [ ] **Meter**

**Import:** `import { Meter } from '@base-ui-components/react/meter'`

**Description:** Provides a graphical display of a numeric value within a known range.

**Complexity:** Medium

**Subcomponents:**

- `Meter.Root` -- Groups all parts. Renders `<div>`.
- `Meter.Track` -- The background track. Renders `<div>`.
- `Meter.Indicator` -- The filled indicator. Renders `<div>`.
- `Meter.Label` -- Text label. Renders `<span>`.
- `Meter.Value` -- Displays the value. Renders `<span>`.

**Key Props (Root):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | `number` | - | Current value |
| min | `number` | `0` | Minimum value |
| max | `number` | `100` | Maximum value |
| low | `number` | - | Low threshold |
| high | `number` | - | High threshold |
| optimum | `number` | - | Optimum value |

**CSS Variables:** `--meter-indicator-width`, `--meter-indicator-height`

**Data Attributes:** `data-low`, `data-high`, `data-optimum`

---

### 34. Toast

- [ ] **Toast**

**Import:** `import { Toast } from '@base-ui-components/react/toast'`

**Description:** Generates notifications for the user.

**Complexity:** Complex

**Subcomponents:**

- `Toast.Provider` -- Provides toast context. No HTML output.
- `Toast.Viewport` -- Container for toasts. Renders `<div>`.
- `Toast.Root` -- A single toast. Renders `<div>`.
- `Toast.Title` -- Toast heading. Renders `<div>`.
- `Toast.Description` -- Toast description. Renders `<div>`.
- `Toast.Close` -- Close button. Renders `<button>`.
- `Toast.Action` -- Action button. Renders `<button>`.

**Key Props (Provider):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| timeout | `number` | `5000` | Auto-dismiss timeout (ms) |
| limit | `number` | `3` | Max visible toasts |

**Key Props (Root):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| type | `'foreground' \| 'background'` | `'foreground'` | Toast type (affects urgency) |
| priority | `'low' \| 'high'` | - | Toast priority |
| timeout | `number` | - | Override auto-dismiss timeout |

**Hooks:** `Toast.useToastManager()` -- returns `add()`, `close()`, `update()`, `promise()` methods

---

## Layout Components

### 35. Scroll Area

(See #31 above -- listed under Data Display)

---

## Form Components

### 36. Field

- [ ] **Field**

**Import:** `import { Field } from '@base-ui-components/react/field'`

**Description:** Provides labeling and validation for form controls.

**Complexity:** Medium

**Subcomponents:**

- `Field.Root` -- Groups all parts. Renders `<div>`.
- `Field.Label` -- Accessible label. Renders `<label>`.
- `Field.Control` -- The form input. Renders `<input>`.
- `Field.Description` -- Help text. Renders `<p>`.
- `Field.Item` -- Groups items in checkbox/radio group. Renders `<div>`.
- `Field.Error` -- Error message. Renders `<div>`.
- `Field.Validity` -- Custom validity display. Render function child.

**Key Props (Root):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | `string` | - | Form field name |
| disabled | `boolean` | `false` | Disabled state |
| invalid | `boolean` | - | External invalid state |
| dirty | `boolean` | - | External dirty state |
| touched | `boolean` | - | External touched state |
| validate | `Function` | - | Custom validation function |
| validationMode | `'onSubmit' \| 'onBlur' \| 'onChange'` | `'onSubmit'` | When to validate |
| validationDebounceTime | `number` | `0` | Debounce for onChange validation |

**Key Props (Error):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| match | `boolean \| ValidityState key` | - | Show based on validity state |

**Data Attributes:** `data-valid`, `data-invalid`, `data-dirty`, `data-touched`, `data-filled`, `data-focused`, `data-disabled`

**Related:** Works with `Form`, `Checkbox`, `Select`, `Combobox`, `NumberField`, `Input`, `Radio`, `Switch`, etc.

---

### 37. Fieldset

- [ ] **Fieldset**

**Import:** `import { Fieldset } from '@base-ui-components/react/fieldset'`

**Description:** A native fieldset with an easily stylable legend.

**Complexity:** Simple

**Subcomponents:**

- `Fieldset.Root` -- The fieldset container. Renders `<fieldset>`.
- `Fieldset.Legend` -- Accessible legend. Renders `<div>`.

**Related:** Often used with `Field` and `CheckboxGroup`

---

### 38. Form

- [ ] **Form**

**Import:** `import { Form } from '@base-ui-components/react/form'`

**Description:** A native form element with consolidated error handling.

**Complexity:** Medium

**Subcomponents:** None (single element -- renders `<form>`)

**Key Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| errors | `Record<string, string \| string[]>` | - | Server-side validation errors mapped by field name |
| onFormSubmit | `Function` | - | Receives form values as JS object |
| validationMode | `'onSubmit' \| 'onBlur' \| 'onChange'` | `'onSubmit'` | When to validate |
| actionsRef | `Ref` | - | Imperative actions (validate) |

**Related:** Works with `Field`, `Fieldset`, `Button`

---

## Utility Components

### 39. CSP Provider

- [ ] **CSP Provider**

**Import:** `import { CspProvider } from '@base-ui-components/react/csp-provider'`

**Description:** Applies a nonce to inline `<style>` and `<script>` tags rendered by Base UI components, and can disable inline `<style>` elements.

**Complexity:** Simple

**Key Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| nonce | `string` | - | CSP nonce value |
| disableStyleSheetGeneration | `boolean` | `false` | Disable inline styles |

---

### 40. Direction Provider

- [ ] **Direction Provider**

**Import:** `import { DirectionProvider } from '@base-ui-components/react/direction-provider'`

**Description:** Enables RTL behavior for Base UI components.

**Complexity:** Simple

**Key Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| direction | `'ltr' \| 'rtl'` | `'ltr'` | Text direction |

---

## Utility Functions & Hooks

### 41. mergeProps

- [ ] **mergeProps**

**Import:** `import { mergeProps } from '@base-ui-components/react/merge-props'`

**Description:** Merges multiple sets of React props, intelligently handling event handlers, className, and style props.

**Complexity:** Simple (utility function)

**Usage:**

```tsx
import { mergeProps } from "@base-ui-components/react/merge-props";

const merged = mergeProps(propsA, propsB);
// Event handlers are chained, className/style are merged
```

---

### 42. useRender

- [ ] **useRender**

**Import:** `import { useRender } from '@base-ui-components/react/use-render'`

**Description:** Hook for enabling a render prop in custom components.

**Complexity:** Simple (hook)

**Usage:**

```tsx
import { useRender } from "@base-ui-components/react/use-render";

function CustomComponent(props) {
  const { renderElement } = useRender({
    render: props.render,
    props: innerProps,
    state,
  });
  return renderElement();
}
```

---

## Build Checklist

### Input Components

- [ ] Button
- [ ] Input
- [ ] Checkbox
- [ ] Checkbox Group
- [ ] Radio
- [ ] Radio Group
- [ ] Switch
- [ ] Toggle
- [ ] Toggle Group
- [ ] Slider
- [ ] Number Field
- [ ] Select
- [ ] Combobox
- [ ] Autocomplete

### Navigation Components

- [ ] Tabs
- [ ] Menu
- [ ] Context Menu
- [ ] Menubar
- [ ] Navigation Menu
- [ ] Toolbar

### Overlay Components

- [ ] Dialog
- [ ] Alert Dialog
- [ ] Drawer
- [ ] Popover
- [ ] Tooltip
- [ ] Preview Card

### Data Display Components

- [ ] Accordion
- [ ] Collapsible
- [ ] Avatar
- [ ] Separator
- [ ] Scroll Area

### Feedback Components

- [ ] Progress
- [ ] Meter
- [ ] Toast

### Form Components

- [ ] Field
- [ ] Fieldset
- [ ] Form

### Utility Components

- [ ] CSP Provider
- [ ] Direction Provider

### Utility Functions & Hooks

- [ ] mergeProps
- [ ] useRender

---

## Summary

| Category                    | Count  | Components                                                                                                                                      |
| --------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Input**                   | 14     | Button, Input, Checkbox, Checkbox Group, Radio, Radio Group, Switch, Toggle, Toggle Group, Slider, Number Field, Select, Combobox, Autocomplete |
| **Navigation**              | 6      | Tabs, Menu, Context Menu, Menubar, Navigation Menu, Toolbar                                                                                     |
| **Overlay**                 | 6      | Dialog, Alert Dialog, Drawer, Popover, Tooltip, Preview Card                                                                                    |
| **Data Display**            | 5      | Accordion, Collapsible, Avatar, Separator, Scroll Area                                                                                          |
| **Feedback**                | 3      | Progress, Meter, Toast                                                                                                                          |
| **Form**                    | 3      | Field, Fieldset, Form                                                                                                                           |
| **Utility Components**      | 2      | CSP Provider, Direction Provider                                                                                                                |
| **Utility Functions/Hooks** | 2      | mergeProps, useRender                                                                                                                           |
| **TOTAL**                   | **41** |                                                                                                                                                 |

### Component Relationships

The following components are designed to work together:

- **Form system:** `Form` + `Field` + `Fieldset` + `Field.Label` + `Field.Error` + `Field.Validity`
- **Checkbox system:** `CheckboxGroup` + `Checkbox` (supports parent/child)
- **Radio system:** `RadioGroup` + `Radio`
- **Toggle system:** `ToggleGroup` + `Toggle`
- **Menu system:** `Menu` shares subcomponents with `ContextMenu` and `Menubar`
- **Select/Combobox/Autocomplete:** Similar composable patterns with Positioner, Popup, Item, etc.
- **Dialog/AlertDialog/Drawer:** Similar overlay patterns with Portal, Backdrop, Popup, Title, Description, Close
- **Tooltip/Popover/PreviewCard:** Similar popup patterns with Positioner, Popup, Arrow

### Complexity Distribution

| Level   | Count | Components                                                                                                                                             |
| ------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Simple  | 12    | Button, Input, Switch, Toggle, Collapsible, Avatar, Separator, Fieldset, CSP Provider, Direction Provider, mergeProps, useRender                       |
| Medium  | 14    | Checkbox, Checkbox Group, Radio, Radio Group, Toggle Group, Tabs, Toolbar, Accordion, Scroll Area, Progress, Meter, Field, Form, Tooltip, Preview Card |
| Complex | 15    | Slider, Number Field, Select, Combobox, Autocomplete, Menu, Context Menu, Menubar, Navigation Menu, Dialog, Alert Dialog, Drawer, Popover, Toast       |

### Import Pattern

All components use the same import pattern:

```tsx
import { ComponentName } from "@base-ui-components/react/component-path";
```

For example:

```tsx
import { Accordion } from "@base-ui-components/react/accordion";
import { AlertDialog } from "@base-ui-components/react/alert-dialog";
import { CheckboxGroup } from "@base-ui-components/react/checkbox-group";
import { NavigationMenu } from "@base-ui-components/react/navigation-menu";
import { NumberField } from "@base-ui-components/react/number-field";
import { PreviewCard } from "@base-ui-components/react/preview-card";
import { ScrollArea } from "@base-ui-components/react/scroll-area";
import { ToggleGroup } from "@base-ui-components/react/toggle-group";
```

### Common Prop Patterns

All components support these shared prop patterns:

- `className` -- string or function `(state) => string`
- `style` -- CSSProperties or function `(state) => CSSProperties`
- `render` -- ReactElement or function `(props, state) => ReactElement` for custom rendering
- `data-*` attributes for CSS-based state styling (e.g., `data-open`, `data-disabled`, `data-checked`)

### CSS Variable Pattern

Many components expose CSS variables for animation and sizing:

- `--accordion-panel-height`, `--collapsible-panel-height`
- `--slider-fill-width`, `--progress-indicator-width`
- `--transform-origin`, `--anchor-width`, `--available-height`
- `--nested-dialogs`

### Animation Pattern

All animated components support:

- `data-starting-style` -- for entrance animations
- `data-ending-style` -- for exit animations
- `keepMounted` -- to keep elements in DOM during exit animations
