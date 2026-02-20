# Base UI Overview

This document combines the About, Quick Start, and Accessibility pages from the Base UI documentation.

**Source:** https://base-ui.com

---

## About Base UI

An open-source React component library for building accessible user interfaces.

From the creators of Radix, Material UI, and Floating UI, Base UI is an unstyled React component library for building accessible user interfaces.
The focus is on accessibility, performance, and developer experience.
The goal is to provide a complete set of open-source UI components, with a delightful developer experience, in a sustainable way.

### Features

#### Headless

Base UI components are unstyled, don't bundle CSS, and don't prescribe a styling solution.
You retain complete control over your application's CSS layer.
Base UI is compatible with Tailwind, CSS Modules, plain CSS, CSS-in-JS, or any other styling engine you prefer.

#### Accessible

Poor accessibility can make your application difficult to navigate for all users, not just for users with disabilities.
Accessibility is the primary focus.
Base UI components adhere to [WAI-ARIA design patterns](https://www.w3.org/WAI/ARIA/apg/patterns/) and are tested on a wide range of platforms, devices, browsers, screen readers, and other environments.

#### Composable

Component APIs are fully open, so you have direct access to each node, you can easily add or remove parts, and you can wrap them however you prefer.

### Team

- **Colm Tuite** (Radix) [@colmtuite](https://x.com/colmtuite)
- **James Nelson** (Floating UI) [@atomiksdev](https://x.com/atomiksdev)
- **Michal Dudak** (Material UI) [@michaldudak](https://x.com/michaldudak)
- **Marija Najdova** (Material UI + Fluent UI) [@marijanajdova](https://x.com/marijanajdova)
- **Albert Yu** (Material UI) [@mj12albert](https://github.com/mj12albert)
- **Lukas Tyla** (Material UI) [@LukasTy](https://github.com/LukasTy)

### Browser Support

Base UI supports all modern browsers that implement features marked as [Baseline Widely Available](https://web.dev/baseline) at the time of the last major version release.
This means the features used have been supported across major browsers for at least 30 months, ensuring broad compatibility and stability.

### React Versions

Base UI supports React 17 and newer versions.

### Community

- **GitHub:** https://github.com/mui/base-ui
- **Discord:** https://base-ui.com/r/discord
- **X:** https://x.com/base_ui
- **Bluesky:** https://bsky.app/profile/base-ui.com

---

## Quick Start

### Install the Library

Install Base UI using a package manager.

```bash
npm i @base-ui/react
```

All components are included in a single package. Base UI is tree-shakable, so your app bundle will contain only the components that you actually use.

### Set Up

#### Portals

Base UI uses portals for components that render popups, such as Dialog and Popover.
To make portaled components always appear on top of the entire page, add the following style to your application layout root:

```tsx
<body>
  <div className="root">{children}</div>
</body>
```

```css
.root {
  isolation: isolate;
}
```

This style creates a separate stacking context for your application's `.root` element.
This way, popups always appear above the page contents, and any `z-index` property in your styles won't interfere with them.

#### iOS 26+ Safari

Starting with iOS 26, Safari allows content beneath the UI chrome to be visible. Backdrops such as those used by dialogs must use `position: absolute` instead of `position: fixed` to cover the entire visual viewport. For this to work after the page is scrolled, the following style must be added to your global styles:

```css
body {
  position: relative;
}
```

### Next Steps

Browse the rest of the documentation to see what components are available in the library and how to use them.

---

## Accessibility

Accessibility is a top priority for Base UI.
Base UI components handle many complex accessibility details including ARIA attributes, role attributes, pointer interactions, keyboard navigation, and focus management.
The goal is to provide an accessible user experience out of the box, with intuitive APIs for configuration.

### Keyboard Navigation

Base UI components adhere to the [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/) to provide basic keyboard accessibility out of the box.
This is critical for users who have difficulty using a pointer device, but it's also important for users who prefer navigating with a keyboard or other input mode.

Many components provide support for arrow keys, alphanumeric keys, Home, End, Enter, and Esc.

### Focus Management

Base UI components manage focus automatically following a user interaction.
Additionally, some components provide props like `initialFocus` and `finalFocus`, to configure focus management.

While Base UI components manage focus, it's the developer's responsibility to visually indicate focus.
This is typically handled by styling the `:focus` or `:focus-visible` CSS pseudo-classes.

### Color Contrast

When styling elements, it's important to meet the minimum requirements for color contrast between each foreground element and its corresponding background element.
Consider adhering to [APCA](https://apcacontrast.com/), which is slated to become the new standard in WCAG 3.

### Accessible Labels

Base UI provides components like Form, Input, Field, Fieldset to automatically associate form controls. Additionally, you can use the native HTML `<label>` element to provide context to corresponding inputs.

Most applications present custom controls that require accessible names provided by markup features such as `alt`, `aria-label`, or `aria-labelledby`.

### Testing

Base UI components are tested on a broad spectrum of browsers, devices, platforms, screen readers, and environments.
