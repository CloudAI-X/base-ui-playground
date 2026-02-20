---
title: Context Menu
subtitle: A menu that appears at the pointer on right click or long press.
description: A high-quality, unstyled React context menu component that appears at the pointer on right click or long press.
---

# Context Menu

A high-quality, unstyled React context menu component that appears at the pointer on right click or long press.

## Demo

### Tailwind

This example shows how to implement the component using Tailwind CSS.

```tsx
/* index.tsx */
import { ContextMenu } from '@base-ui/react/context-menu';

export default function ExampleMenu() {
  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger className="flex h-[12rem] w-[15rem] items-center justify-center rounded border border-gray-300 text-gray-900 select-none">
        Right click here
      </ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Positioner className="outline-none">
          <ContextMenu.Popup className="origin-[var(--transform-origin)] rounded-md bg-[canvas] py-1 text-gray-900 shadow-lg shadow-gray-200 outline outline-1 outline-gray-200 transition-[opacity] data-[ending-style]:opacity-0 dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300">
            <ContextMenu.Item className="flex cursor-default py-2 pr-8 pl-4 text-sm leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900">
              Add to Library
            </ContextMenu.Item>
            <ContextMenu.Item className="flex cursor-default py-2 pr-8 pl-4 text-sm leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900">
              Add to Playlist
            </ContextMenu.Item>
            <ContextMenu.Separator className="mx-4 my-1.5 h-px bg-gray-200" />
            <ContextMenu.Item className="flex cursor-default py-2 pr-8 pl-4 text-sm leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900">
              Play Next
            </ContextMenu.Item>
            <ContextMenu.Item className="flex cursor-default py-2 pr-8 pl-4 text-sm leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900">
              Play Last
            </ContextMenu.Item>
            <ContextMenu.Separator className="mx-4 my-1.5 h-px bg-gray-200" />
            <ContextMenu.Item className="flex cursor-default py-2 pr-8 pl-4 text-sm leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900">
              Favorite
            </ContextMenu.Item>
            <ContextMenu.Item className="flex cursor-default py-2 pr-8 pl-4 text-sm leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900">
              Share
            </ContextMenu.Item>
          </ContextMenu.Popup>
        </ContextMenu.Positioner>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
}
```

### CSS Modules

This example shows how to implement the component using CSS Modules.

```css
/* index.module.css */
.Trigger {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15rem;
  height: 12rem;
  border: 1px solid var(--color-gray-300);
  color: var(--color-gray-900);
  border-radius: 0.375rem;
  -webkit-user-select: none;
  user-select: none;
}

.Positioner {
  outline: 0;
}

.Popup {
  box-sizing: border-box;
  padding-block: 0.25rem;
  border-radius: 0.375rem;
  background-color: canvas;
  color: var(--color-gray-900);
  transform-origin: var(--transform-origin);
  transition:
    transform 150ms,
    opacity 150ms;

  &[data-ending-style] {
    opacity: 0;
  }

  @media (prefers-color-scheme: light) {
    outline: 1px solid var(--color-gray-200);
    box-shadow:
      0 10px 15px -3px var(--color-gray-200),
      0 4px 6px -4px var(--color-gray-200);
  }

  @media (prefers-color-scheme: dark) {
    outline: 1px solid var(--color-gray-300);
    outline-offset: -1px;
  }
}

.Item {
  outline: 0;
  cursor: default;
  user-select: none;
  padding-block: 0.5rem;
  padding-left: 1rem;
  padding-right: 2rem;
  display: flex;
  font-size: 0.875rem;
  line-height: 1rem;

  &[data-highlighted] {
    z-index: 0;
    position: relative;
    color: var(--color-gray-50);
  }

  &[data-highlighted]::before {
    content: '';
    z-index: -1;
    position: absolute;
    inset-block: 0;
    inset-inline: 0.25rem;
    border-radius: 0.25rem;
    background-color: var(--color-gray-900);
  }
}

.Separator {
  margin: 0.375rem 1rem;
  height: 1px;
  background-color: var(--color-gray-200);
}
```

```tsx
/* index.tsx */
import { ContextMenu } from '@base-ui/react/context-menu';
import styles from './index.module.css';

export default function ExampleMenu() {
  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger className={styles.Trigger}>Right click here</ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Positioner className={styles.Positioner}>
          <ContextMenu.Popup className={styles.Popup}>
            <ContextMenu.Item className={styles.Item}>Add to Library</ContextMenu.Item>
            <ContextMenu.Item className={styles.Item}>Add to Playlist</ContextMenu.Item>
            <ContextMenu.Separator className={styles.Separator} />
            <ContextMenu.Item className={styles.Item}>Play Next</ContextMenu.Item>
            <ContextMenu.Item className={styles.Item}>Play Last</ContextMenu.Item>
            <ContextMenu.Separator className={styles.Separator} />
            <ContextMenu.Item className={styles.Item}>Favorite</ContextMenu.Item>
            <ContextMenu.Item className={styles.Item}>Share</ContextMenu.Item>
          </ContextMenu.Popup>
        </ContextMenu.Positioner>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
}
```

## Anatomy

Import the components and place them together:

```jsx title="Anatomy"
import { ContextMenu } from '@base-ui/react/context-menu';

<ContextMenu.Root>
  <ContextMenu.Trigger />
  <ContextMenu.Portal>
    <ContextMenu.Backdrop />
    <ContextMenu.Positioner>
      <ContextMenu.Popup>
        <ContextMenu.Arrow />
        <ContextMenu.Item />
        <ContextMenu.LinkItem />
        <ContextMenu.Separator />
        <ContextMenu.Group>
          <ContextMenu.GroupLabel />
        </ContextMenu.Group>
        <ContextMenu.RadioGroup>
          <ContextMenu.RadioItem />
        </ContextMenu.RadioGroup>
        <ContextMenu.CheckboxItem />
        <ContextMenu.SubmenuRoot>
          <ContextMenu.SubmenuTrigger />
        </ContextMenu.SubmenuRoot>
      </ContextMenu.Popup>
    </ContextMenu.Positioner>
  </ContextMenu.Portal>
</ContextMenu.Root>;
```

## Examples

[Menu](/react/components/menu.md) displays additional demos, many of which apply to the context menu as well.

### Nested menu

To create a submenu, create a `<ContextMenu.SubmenuRoot>` inside the parent context menu. Use the `<ContextMenu.SubmenuTrigger>` part for the menu item that opens the nested menu.

## Demo

### Tailwind

This example shows how to implement the component using Tailwind CSS.

```tsx
/* index.tsx */
import * as React from 'react';
import { ContextMenu } from '@base-ui/react/context-menu';

export default function ExampleContextMenu() {
  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger className="flex h-[12rem] w-[15rem] items-center justify-center rounded border border-gray-300 text-gray-900 select-none">
        Right click here
      </ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Positioner className="outline-none">
          <ContextMenu.Popup className="origin-[var(--transform-origin)] rounded-md bg-[canvas] py-1 text-gray-900 shadow-lg shadow-gray-200 outline outline-1 outline-gray-200 transition-[opacity] data-[ending-style]:opacity-0 dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300">
            <ContextMenu.Item className="flex cursor-default py-2 pr-8 pl-4 text-sm leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900 data-[popup-open]:relative data-[popup-open]:z-0 data-[popup-open]:before:absolute data-[popup-open]:before:inset-x-1 data-[popup-open]:before:inset-y-0 data-[popup-open]:before:z-[-1] data-[popup-open]:before:rounded-sm data-[popup-open]:before:bg-gray-100 data-[highlighted]:data-[popup-open]:before:bg-gray-900">
              Add to Library
            </ContextMenu.Item>

            <ContextMenu.SubmenuRoot>
              <ContextMenu.SubmenuTrigger className="flex cursor-default items-center justify-between gap-4 py-2 pr-4 pl-4 text-sm leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900 data-[popup-open]:relative data-[popup-open]:z-0 data-[popup-open]:before:absolute data-[popup-open]:before:inset-x-1 data-[popup-open]:before:inset-y-0 data-[popup-open]:before:z-[-1] data-[popup-open]:before:rounded-sm data-[popup-open]:before:bg-gray-100 data-[highlighted]:data-[popup-open]:before:bg-gray-900">
                Add to Playlist <ChevronRightIcon />
              </ContextMenu.SubmenuTrigger>
              <ContextMenu.Portal>
                <ContextMenu.Positioner className="outline-none" alignOffset={-4} sideOffset={-4}>
                  <ContextMenu.Popup className="origin-[var(--transform-origin)] rounded-md bg-[canvas] py-1 text-gray-900 shadow-lg shadow-gray-200 outline outline-1 outline-gray-200 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300">
                    <ContextMenu.Item className="flex cursor-default py-2 pr-8 pl-4 text-sm leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900 data-[popup-open]:relative data-[popup-open]:z-0 data-[popup-open]:before:absolute data-[popup-open]:before:inset-x-1 data-[popup-open]:before:inset-y-0 data-[popup-open]:before:z-[-1] data-[popup-open]:before:rounded-sm data-[popup-open]:before:bg-gray-100 data-[highlighted]:data-[popup-open]:before:bg-gray-900">
                      Get Up!
                    </ContextMenu.Item>
                    <ContextMenu.Item className="flex cursor-default py-2 pr-8 pl-4 text-sm leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900 data-[popup-open]:relative data-[popup-open]:z-0 data-[popup-open]:before:absolute data-[popup-open]:before:inset-x-1 data-[popup-open]:before:inset-y-0 data-[popup-open]:before:z-[-1] data-[popup-open]:before:rounded-sm data-[popup-open]:before:bg-gray-100 data-[highlighted]:data-[popup-open]:before:bg-gray-900">
                      Inside Out
                    </ContextMenu.Item>
                    <ContextMenu.Item className="flex cursor-default py-2 pr-8 pl-4 text-sm leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900 data-[popup-open]:relative data-[popup-open]:z-0 data-[popup-open]:before:absolute data-[popup-open]:before:inset-x-1 data-[popup-open]:before:inset-y-0 data-[popup-open]:before:z-[-1] data-[popup-open]:before:rounded-sm data-[popup-open]:before:bg-gray-100 data-[highlighted]:data-[popup-open]:before:bg-gray-900">
                      Night Beats
                    </ContextMenu.Item>
                    <ContextMenu.Separator className="mx-4 my-1.5 h-px bg-gray-200" />
                    <ContextMenu.Item className="flex cursor-default py-2 pr-8 pl-4 text-sm leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900 data-[popup-open]:relative data-[popup-open]:z-0 data-[popup-open]:before:absolute data-[popup-open]:before:inset-x-1 data-[popup-open]:before:inset-y-0 data-[popup-open]:before:z-[-1] data-[popup-open]:before:rounded-sm data-[popup-open]:before:bg-gray-100 data-[highlighted]:data-[popup-open]:before:bg-gray-900">
                      New playlist…
                    </ContextMenu.Item>
                  </ContextMenu.Popup>
                </ContextMenu.Positioner>
              </ContextMenu.Portal>
            </ContextMenu.SubmenuRoot>

            <ContextMenu.Separator className="mx-4 my-1.5 h-px bg-gray-200" />

            <ContextMenu.Item className="flex cursor-default py-2 pr-8 pl-4 text-sm leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900 data-[popup-open]:relative data-[popup-open]:z-0 data-[popup-open]:before:absolute data-[popup-open]:before:inset-x-1 data-[popup-open]:before:inset-y-0 data-[popup-open]:before:z-[-1] data-[popup-open]:before:rounded-sm data-[popup-open]:before:bg-gray-100 data-[highlighted]:data-[popup-open]:before:bg-gray-900">
              Play Next
            </ContextMenu.Item>
            <ContextMenu.Item className="flex cursor-default py-2 pr-8 pl-4 text-sm leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900 data-[popup-open]:relative data-[popup-open]:z-0 data-[popup-open]:before:absolute data-[popup-open]:before:inset-x-1 data-[popup-open]:before:inset-y-0 data-[popup-open]:before:z-[-1] data-[popup-open]:before:rounded-sm data-[popup-open]:before:bg-gray-100 data-[highlighted]:data-[popup-open]:before:bg-gray-900">
              Play Last
            </ContextMenu.Item>
            <ContextMenu.Separator className="mx-4 my-1.5 h-px bg-gray-200" />
            <ContextMenu.Item className="flex cursor-default py-2 pr-8 pl-4 text-sm leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900 data-[popup-open]:relative data-[popup-open]:z-0 data-[popup-open]:before:absolute data-[popup-open]:before:inset-x-1 data-[popup-open]:before:inset-y-0 data-[popup-open]:before:z-[-1] data-[popup-open]:before:rounded-sm data-[popup-open]:before:bg-gray-100 data-[highlighted]:data-[popup-open]:before:bg-gray-900">
              Favorite
            </ContextMenu.Item>
            <ContextMenu.Item className="flex cursor-default py-2 pr-8 pl-4 text-sm leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900 data-[popup-open]:relative data-[popup-open]:z-0 data-[popup-open]:before:absolute data-[popup-open]:before:inset-x-1 data-[popup-open]:before:inset-y-0 data-[popup-open]:before:z-[-1] data-[popup-open]:before:rounded-sm data-[popup-open]:before:bg-gray-100 data-[highlighted]:data-[popup-open]:before:bg-gray-900">
              Share
            </ContextMenu.Item>
          </ContextMenu.Popup>
        </ContextMenu.Positioner>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
}

function ChevronRightIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" {...props}>
      <path d="M3.5 9L7.5 5L3.5 1" stroke="currentcolor" strokeWidth="1.5" />
    </svg>
  );
}
```

### CSS Modules

This example shows how to implement the component using CSS Modules.

```css
/* index.module.css */
.Trigger {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15rem;
  height: 12rem;
  border: 1px solid var(--color-gray-300);
  color: var(--color-gray-900);
  border-radius: 0.375rem;
  -webkit-user-select: none;
  user-select: none;
}

.Positioner {
  outline: 0;
}

.Popup,
.SubmenuPopup {
  box-sizing: border-box;
  padding-block: 0.25rem;
  border-radius: 0.375rem;
  background-color: canvas;
  color: var(--color-gray-900);
  transform-origin: var(--transform-origin);
  transition:
    transform 150ms,
    opacity 150ms;

  &[data-ending-style] {
    opacity: 0;
  }

  @media (prefers-color-scheme: light) {
    outline: 1px solid var(--color-gray-200);
    box-shadow:
      0 10px 15px -3px var(--color-gray-200),
      0 4px 6px -4px var(--color-gray-200);
  }

  @media (prefers-color-scheme: dark) {
    outline: 1px solid var(--color-gray-300);
    outline-offset: -1px;
  }
}

.SubmenuPopup {
  &[data-starting-style],
  &[data-ending-style] {
    transform: scale(0.9);
    opacity: 0;
  }
}

.Arrow {
  display: flex;

  &[data-side='top'] {
    bottom: -8px;
    rotate: 180deg;
  }

  &[data-side='bottom'] {
    top: -8px;
    rotate: 0deg;
  }

  &[data-side='left'] {
    right: -13px;
    rotate: 90deg;
  }

  &[data-side='right'] {
    left: -13px;
    rotate: -90deg;
  }
}

.ArrowFill {
  fill: canvas;
}

.ArrowOuterStroke {
  @media (prefers-color-scheme: light) {
    fill: var(--color-gray-200);
  }
}

.ArrowInnerStroke {
  @media (prefers-color-scheme: dark) {
    fill: var(--color-gray-300);
  }
}

.Item,
.SubmenuTrigger {
  outline: 0;
  cursor: default;
  user-select: none;
  padding-block: 0.5rem;
  padding-left: 1rem;
  padding-right: 2rem;
  display: flex;
  font-size: 0.875rem;
  line-height: 1rem;

  &[data-popup-open] {
    z-index: 0;
    position: relative;
  }

  &[data-popup-open]::before {
    content: '';
    z-index: -1;
    position: absolute;
    inset-block: 0;
    inset-inline: 0.25rem;
    border-radius: 0.25rem;
    background-color: var(--color-gray-100);
  }

  &[data-highlighted] {
    z-index: 0;
    position: relative;
    color: var(--color-gray-50);
  }

  &[data-highlighted]::before {
    content: '';
    z-index: -1;
    position: absolute;
    inset-block: 0;
    inset-inline: 0.25rem;
    border-radius: 0.25rem;
    background-color: var(--color-gray-900);
  }
}

.SubmenuTrigger {
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-right: 1rem;
}

.Separator {
  margin: 0.375rem 1rem;
  height: 1px;
  background-color: var(--color-gray-200);
}
```

```tsx
/* index.tsx */
import * as React from 'react';
import { ContextMenu } from '@base-ui/react/context-menu';
import { Menu } from '@base-ui/react/menu';
import styles from './index.module.css';

export default function ExampleContextMenu() {
  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger className={styles.Trigger}>Right click here</ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Positioner className={styles.Positioner}>
          <ContextMenu.Popup className={styles.Popup}>
            <ContextMenu.Item className={styles.Item}>Add to Library</ContextMenu.Item>

            <ContextMenu.SubmenuRoot>
              <ContextMenu.SubmenuTrigger className={styles.SubmenuTrigger}>
                Add to Playlist
                <ChevronRightIcon />
              </ContextMenu.SubmenuTrigger>
              <ContextMenu.Portal>
                <ContextMenu.Positioner
                  className={styles.Positioner}
                  alignOffset={-4}
                  sideOffset={-4}
                >
                  <ContextMenu.Popup className={styles.SubmenuPopup}>
                    <ContextMenu.Item className={styles.Item}>Get Up!</ContextMenu.Item>
                    <ContextMenu.Item className={styles.Item}>Inside Out</ContextMenu.Item>
                    <ContextMenu.Item className={styles.Item}>Night Beats</ContextMenu.Item>
                    <Menu.Separator className={styles.Separator} />
                    <ContextMenu.Item className={styles.Item}>New playlist…</ContextMenu.Item>
                  </ContextMenu.Popup>
                </ContextMenu.Positioner>
              </ContextMenu.Portal>
            </ContextMenu.SubmenuRoot>

            <ContextMenu.Separator className={styles.Separator} />
            <ContextMenu.Item className={styles.Item}>Play Next</ContextMenu.Item>
            <ContextMenu.Item className={styles.Item}>Play Last</ContextMenu.Item>
            <ContextMenu.Separator className={styles.Separator} />
            <ContextMenu.Item className={styles.Item}>Favorite</ContextMenu.Item>
            <ContextMenu.Item className={styles.Item}>Share</ContextMenu.Item>
          </ContextMenu.Popup>
        </ContextMenu.Positioner>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
}

function ChevronRightIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" {...props}>
      <path d="M3.5 9L7.5 5L3.5 1" stroke="currentcolor" strokeWidth="1.5" />
    </svg>
  );
}
```

## API reference

### Root

A component that creates a context menu activated by right clicking or long pressing.
Doesn’t render its own HTML element.

**Root Props:**

| Prop                                                             | Type                                                                           | Default      | Description                                                                                                                                                                                                                                                       |
| :--------------------------------------------------------------- | :----------------------------------------------------------------------------- | :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| defaultOpen                                                      | `boolean`                                                                      | `false`      | Whether the menu is initially open.To render a controlled menu, use the `open` prop instead.                                                                                                                                                                      |
| open                                                             | `boolean`                                                                      | -            | Whether the menu is currently open.                                                                                                                                                                                                                               |
| onOpenChange                                                     | `((open: boolean, eventDetails: ContextMenu.Root.ChangeEventDetails) => void)` | -            | Event handler called when the menu is opened or closed.                                                                                                                                                                                                           |
| highlightItemOnHover                                             | `boolean`                                                                      | `true`       | Whether moving the pointer over items should highlight them.&#xA;Disabling this prop allows CSS `:hover` to be differentiated from the `:focus` (`data-highlighted`) state.                                                                                       |
| actionsRef                                                       | `RefObject<Menu.Root.Actions \| null>`                                         | -            | A ref to imperative actions.\* `unmount`: When specified, the menu will not be unmounted when closed.&#xA;Instead, the `unmount` function must be called to unmount the menu manually.&#xA;Useful when the menu's animation is controlled by an external library. |
| \* `close`: When specified, the menu can be closed imperatively. |
| closeParentOnEsc                                                 | `boolean`                                                                      | `false`      | When in a submenu, determines whether pressing the Escape key&#xA;closes the entire menu, or only the current child menu.                                                                                                                                         |
| defaultTriggerId                                                 | `string \| null`                                                               | -            | ID of the trigger that the popover is associated with.&#xA;This is useful in conjunction with the `defaultOpen` prop to create an initially open popover.                                                                                                         |
| handle                                                           | `Menu.Handle<unknown>`                                                         | -            | A handle to associate the menu with a trigger.&#xA;If specified, allows external triggers to control the menu's open state.                                                                                                                                       |
| loopFocus                                                        | `boolean`                                                                      | `true`       | Whether to loop keyboard focus back to the first item&#xA;when the end of the list is reached while using the arrow keys.                                                                                                                                         |
| onOpenChangeComplete                                             | `((open: boolean) => void)`                                                    | -            | Event handler called after any animations complete when the menu is closed.                                                                                                                                                                                       |
| triggerId                                                        | `string \| null`                                                               | -            | ID of the trigger that the popover is associated with.&#xA;This is useful in conjunction with the `open` prop to create a controlled popover.&#xA;There's no need to specify this prop when the popover is uncontrolled (i.e. when the `open` prop is not set).   |
| disabled                                                         | `boolean`                                                                      | `false`      | Whether the component should ignore user interaction.                                                                                                                                                                                                             |
| orientation                                                      | `Menu.Root.Orientation`                                                        | `'vertical'` | The visual orientation of the menu.&#xA;Controls whether roving focus uses up/down or left/right arrow keys.                                                                                                                                                      |
| children                                                         | `ReactNode \| PayloadChildRenderFunction<unknown>`                             | -            | The content of the popover.&#xA;This can be a regular React node or a render function that receives the `payload` of the active trigger.                                                                                                                          |

### Trigger

An area that opens the menu on right click or long press.
Renders a `<div>` element.

**Trigger Props:**

| Prop      | Type                                                                                     | Default | Description                                                                                                                                                                                  |
| :-------- | :--------------------------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| className | `string \| ((state: ContextMenu.Trigger.State) => string \| undefined)`                  | -       | CSS class applied to the element, or a function that&#xA;returns a class based on the component’s state.                                                                                     |
| style     | `CSSProperties \| ((state: ContextMenu.Trigger.State) => CSSProperties \| undefined)`    | -       | -                                                                                                                                                                                            |
| render    | `ReactElement \| ((props: HTMLProps, state: ContextMenu.Trigger.State) => ReactElement)` | -       | Allows you to replace the component’s HTML element&#xA;with a different tag, or compose it with another component.Accepts a `ReactElement` or a function that returns the element to render. |

**Trigger Data Attributes:**

| Attribute       | Type | Description                                          |
| :-------------- | :--- | :--------------------------------------------------- |
| data-popup-open | -    | Present when the corresponding context menu is open. |
| data-pressed    | -    | Present when the trigger is pressed.                 |

### Portal

A portal element that moves the popup to a different part of the DOM.
By default, the portal element is appended to `<body>`.
Renders a `<div>` element.

**Portal Props:**

| Prop        | Type                                                                                | Default | Description                                                                                                                                                                                  |
| :---------- | :---------------------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| container   | `HTMLElement \| ShadowRoot \| RefObject<HTMLElement \| ShadowRoot \| null> \| null` | -       | A parent element to render the portal element into.                                                                                                                                          |
| className   | `string \| ((state: Menu.Portal.State) => string \| undefined)`                     | -       | CSS class applied to the element, or a function that&#xA;returns a class based on the component’s state.                                                                                     |
| style       | `CSSProperties \| ((state: Menu.Portal.State) => CSSProperties \| undefined)`       | -       | -                                                                                                                                                                                            |
| keepMounted | `boolean`                                                                           | `false` | Whether to keep the portal mounted in the DOM while the popup is hidden.                                                                                                                     |
| render      | `ReactElement \| ((props: HTMLProps, state: Menu.Portal.State) => ReactElement)`    | -       | Allows you to replace the component’s HTML element&#xA;with a different tag, or compose it with another component.Accepts a `ReactElement` or a function that returns the element to render. |

### Positioner

Positions the menu popup against the trigger.
Renders a `<div>` element.

**Positioner Props:**

| Prop                  | Type                       | Default    | Description                                                                                                                                                                                                                                                                                                                                                                           |
| :-------------------- | :------------------------- | :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| disableAnchorTracking | `boolean`                  | `false`    | Whether to disable the popup from tracking any layout shift of its positioning anchor.                                                                                                                                                                                                                                                                                                |
| align                 | `Align`                    | `'center'` | How to align the popup relative to the specified side.                                                                                                                                                                                                                                                                                                                                |
| alignOffset           | `number \| OffsetFunction` | `0`        | Additional offset along the alignment axis in pixels.&#xA;Also accepts a function that returns the offset to read the dimensions of the anchor&#xA;and positioner elements, along with its side and alignment.The function takes a `data` object parameter with the following properties:\* `data.anchor`: the dimensions of the anchor element with properties `width` and `height`. |

- `data.positioner`: the dimensions of the positioner element with properties `width` and `height`.
- `data.side`: which side of the anchor element the positioner is aligned against.
- `data.align`: how the positioner is aligned relative to the specified side. |
  | side | `Side` | `'bottom'` | Which side of the anchor element to align the popup against.&#xA;May automatically change to avoid collisions. |
  | sideOffset | `number \| OffsetFunction` | `0` | Distance between the anchor and the popup in pixels.&#xA;Also accepts a function that returns the distance to read the dimensions of the anchor&#xA;and positioner elements, along with its side and alignment.The function takes a `data` object parameter with the following properties:\* `data.anchor`: the dimensions of the anchor element with properties `width` and `height`.
- `data.positioner`: the dimensions of the positioner element with properties `width` and `height`.
- `data.side`: which side of the anchor element the positioner is aligned against.
- `data.align`: how the positioner is aligned relative to the specified side. |
  | arrowPadding | `number` | `5` | Minimum distance to maintain between the arrow and the edges of the popup.Use it to prevent the arrow element from hanging out of the rounded corners of a popup. |
  | anchor | `Element \| VirtualElement \| RefObject<Element \| null> \| (() => Element \| VirtualElement \| null) \| null` | - | An element to position the popup against.&#xA;By default, the popup will be positioned against the trigger. |
  | collisionAvoidance | `CollisionAvoidance` | - | Determines how to handle collisions when positioning the popup. |
  | collisionBoundary | `Boundary` | `'clipping-ancestors'` | An element or a rectangle that delimits the area that the popup is confined to. |
  | collisionPadding | `Padding` | `5` | Additional space to maintain from the edge of the collision boundary. |
  | sticky | `boolean` | `false` | Whether to maintain the popup in the viewport after&#xA;the anchor element was scrolled out of view. |
  | positionMethod | `'absolute' \| 'fixed'` | `'absolute'` | Determines which CSS `position` property to use. |
  | className | `string \| ((state: Menu.Positioner.State) => string \| undefined)` | - | CSS class applied to the element, or a function that&#xA;returns a class based on the component’s state. |
  | style | `CSSProperties \| ((state: Menu.Positioner.State) => CSSProperties \| undefined)` | - | - |
  | render | `ReactElement \| ((props: HTMLProps, state: Menu.Positioner.State) => ReactElement)` | - | Allows you to replace the component’s HTML element&#xA;with a different tag, or compose it with another component.Accepts a `ReactElement` or a function that returns the element to render. |

**Positioner Data Attributes:**

| Attribute          | Type                                                                       | Description                                                           |
| :----------------- | :------------------------------------------------------------------------- | :-------------------------------------------------------------------- |
| data-open          | -                                                                          | Present when the menu popup is open.                                  |
| data-closed        | -                                                                          | Present when the menu popup is closed.                                |
| data-anchor-hidden | -                                                                          | Present when the anchor is hidden.                                    |
| data-align         | `'start' \| 'center' \| 'end'`                                             | Indicates how the popup is aligned relative to specified side.        |
| data-side          | `'top' \| 'bottom' \| 'left' \| 'right' \| 'inline-end' \| 'inline-start'` | Indicates which side the popup is positioned relative to the trigger. |

**Positioner CSS Variables:**

| Variable           | Type     | Default | Description                                                                            |
| :----------------- | :------- | :------ | :------------------------------------------------------------------------------------- |
| --anchor-height    | `number` | -       | The anchor's height.                                                                   |
| --anchor-width     | `number` | -       | The anchor's width.                                                                    |
| --available-height | `number` | -       | The available height between the trigger and the edge of the viewport.                 |
| --available-width  | `number` | -       | The available width between the trigger and the edge of the viewport.                  |
| --transform-origin | `string` | -       | The coordinates that this element is anchored to. Used for animations and transitions. |

### Popup

A container for the menu items.
Renders a `<div>` element.

**Popup Props:**

| Prop       | Type                                                                                                                    | Default | Description                                                                            |
| :--------- | :---------------------------------------------------------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------- |
| finalFocus | `boolean \| RefObject<HTMLElement \| null> \| ((closeType: InteractionType) => boolean \| void \| HTMLElement \| null)` | -       | Determines the element to focus when the menu is closed.\* `false`: Do not move focus. |

- `true`: Move focus based on the default behavior (trigger or previously focused element).
- `RefObject`: Move focus to the ref element.
- `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).&#xA;Return an element to focus, `true` to use the default behavior, or `false`/`undefined` to do nothing. |
  | children | `ReactNode` | - | - |
  | className | `string \| ((state: Menu.Popup.State) => string \| undefined)` | - | CSS class applied to the element, or a function that&#xA;returns a class based on the component’s state. |
  | style | `CSSProperties \| ((state: Menu.Popup.State) => CSSProperties \| undefined)` | - | \* |
  | render | `ReactElement \| ((props: HTMLProps, state: Menu.Popup.State) => ReactElement)` | - | Allows you to replace the component’s HTML element&#xA;with a different tag, or compose it with another component.Accepts a `ReactElement` or a function that returns the element to render. |

**Popup Data Attributes:**

| Attribute           | Type                                                                       | Description                                                           |
| :------------------ | :------------------------------------------------------------------------- | :-------------------------------------------------------------------- |
| data-open           | -                                                                          | Present when the menu is open.                                        |
| data-closed         | -                                                                          | Present when the menu is closed.                                      |
| data-align          | `'start' \| 'center' \| 'end'`                                             | Indicates how the popup is aligned relative to specified side.        |
| data-instant        | `'click' \| 'dismiss' \| 'group'`                                          | Present if animations should be instant.                              |
| data-side           | `'top' \| 'bottom' \| 'left' \| 'right' \| 'inline-end' \| 'inline-start'` | Indicates which side the popup is positioned relative to the trigger. |
| data-starting-style | -                                                                          | Present when the menu is animating in.                                |
| data-ending-style   | -                                                                          | Present when the menu is animating out.                               |

### Arrow

Displays an element positioned against the menu anchor.
Renders a `<div>` element.

**Arrow Props:**

| Prop      | Type                                                                            | Default | Description                                                                                                                                                                                  |
| :-------- | :------------------------------------------------------------------------------ | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| className | `string \| ((state: Menu.Arrow.State) => string \| undefined)`                  | -       | CSS class applied to the element, or a function that&#xA;returns a class based on the component’s state.                                                                                     |
| style     | `CSSProperties \| ((state: Menu.Arrow.State) => CSSProperties \| undefined)`    | -       | -                                                                                                                                                                                            |
| render    | `ReactElement \| ((props: HTMLProps, state: Menu.Arrow.State) => ReactElement)` | -       | Allows you to replace the component’s HTML element&#xA;with a different tag, or compose it with another component.Accepts a `ReactElement` or a function that returns the element to render. |

**Arrow Data Attributes:**

| Attribute       | Type                                                                       | Description                                                           |
| :-------------- | :------------------------------------------------------------------------- | :-------------------------------------------------------------------- |
| data-open       | -                                                                          | Present when the menu popup is open.                                  |
| data-closed     | -                                                                          | Present when the menu popup is closed.                                |
| data-uncentered | -                                                                          | Present when the menu arrow is uncentered.                            |
| data-align      | `'start' \| 'center' \| 'end'`                                             | Indicates how the popup is aligned relative to specified side.        |
| data-side       | `'top' \| 'bottom' \| 'left' \| 'right' \| 'inline-end' \| 'inline-start'` | Indicates which side the popup is positioned relative to the trigger. |

### Item

An individual interactive item in the menu.
Renders a `<div>` element.

**Item Props:**

| Prop         | Type                                                                           | Default | Description                                                                                                                                                                                  |
| :----------- | :----------------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| label        | `string`                                                                       | -       | Overrides the text label to use when the item is matched during keyboard text navigation.                                                                                                    |
| onClick      | `((event: BaseUIEvent<MouseEvent<HTMLDivElement, MouseEvent>>) => void)`       | -       | The click handler for the menu item.                                                                                                                                                         |
| closeOnClick | `boolean`                                                                      | `true`  | Whether to close the menu when the item is clicked.                                                                                                                                          |
| nativeButton | `boolean`                                                                      | `false` | Whether the component renders a native `<button>` element when replacing it&#xA;via the `render` prop.&#xA;Set to `true` if the rendered element is a native button.                         |
| disabled     | `boolean`                                                                      | `false` | Whether the component should ignore user interaction.                                                                                                                                        |
| className    | `string \| ((state: Menu.Item.State) => string \| undefined)`                  | -       | CSS class applied to the element, or a function that&#xA;returns a class based on the component’s state.                                                                                     |
| style        | `CSSProperties \| ((state: Menu.Item.State) => CSSProperties \| undefined)`    | -       | -                                                                                                                                                                                            |
| render       | `ReactElement \| ((props: HTMLProps, state: Menu.Item.State) => ReactElement)` | -       | Allows you to replace the component’s HTML element&#xA;with a different tag, or compose it with another component.Accepts a `ReactElement` or a function that returns the element to render. |

**Item Data Attributes:**

| Attribute        | Type | Description                                |
| :--------------- | :--- | :----------------------------------------- |
| data-highlighted | -    | Present when the menu item is highlighted. |
| data-disabled    | -    | Present when the menu item is disabled.    |

### LinkItem

A link in the menu that can be used to navigate to a different page or section.
Renders an `<a>` element.

**LinkItem Props:**

| Prop         | Type                                                                               | Default | Description                                                                                                                                                                                  |
| :----------- | :--------------------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| label        | `string`                                                                           | -       | Overrides the text label to use when the item is matched during keyboard text navigation.                                                                                                    |
| closeOnClick | `boolean`                                                                          | `false` | Whether to close the menu when the item is clicked.                                                                                                                                          |
| className    | `string \| ((state: Menu.LinkItem.State) => string \| undefined)`                  | -       | CSS class applied to the element, or a function that&#xA;returns a class based on the component’s state.                                                                                     |
| style        | `CSSProperties \| ((state: Menu.LinkItem.State) => CSSProperties \| undefined)`    | -       | -                                                                                                                                                                                            |
| render       | `ReactElement \| ((props: HTMLProps, state: Menu.LinkItem.State) => ReactElement)` | -       | Allows you to replace the component’s HTML element&#xA;with a different tag, or compose it with another component.Accepts a `ReactElement` or a function that returns the element to render. |

**LinkItem Data Attributes:**

| Attribute        | Type | Description                           |
| :--------------- | :--- | :------------------------------------ |
| data-highlighted | -    | Present when the link is highlighted. |

### SubmenuRoot

Groups all parts of a submenu.
Doesn’t render its own HTML element.

**SubmenuRoot Props:**

| Prop                                                             | Type                                                                           | Default      | Description                                                                                                                                                                                                                                                       |
| :--------------------------------------------------------------- | :----------------------------------------------------------------------------- | :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| defaultOpen                                                      | `boolean`                                                                      | `false`      | Whether the menu is initially open.To render a controlled menu, use the `open` prop instead.                                                                                                                                                                      |
| open                                                             | `boolean`                                                                      | -            | Whether the menu is currently open.                                                                                                                                                                                                                               |
| onOpenChange                                                     | `((open: boolean, eventDetails: Menu.SubmenuRoot.ChangeEventDetails) => void)` | -            | Event handler called when the menu is opened or closed.                                                                                                                                                                                                           |
| highlightItemOnHover                                             | `boolean`                                                                      | `true`       | Whether moving the pointer over items should highlight them.&#xA;Disabling this prop allows CSS `:hover` to be differentiated from the `:focus` (`data-highlighted`) state.                                                                                       |
| actionsRef                                                       | `RefObject<Menu.Root.Actions \| null>`                                         | -            | A ref to imperative actions.\* `unmount`: When specified, the menu will not be unmounted when closed.&#xA;Instead, the `unmount` function must be called to unmount the menu manually.&#xA;Useful when the menu's animation is controlled by an external library. |
| \* `close`: When specified, the menu can be closed imperatively. |
| closeParentOnEsc                                                 | `boolean`                                                                      | `false`      | When in a submenu, determines whether pressing the Escape key&#xA;closes the entire menu, or only the current child menu.                                                                                                                                         |
| defaultTriggerId                                                 | `string \| null`                                                               | -            | ID of the trigger that the popover is associated with.&#xA;This is useful in conjunction with the `defaultOpen` prop to create an initially open popover.                                                                                                         |
| handle                                                           | `Menu.Handle<unknown>`                                                         | -            | A handle to associate the menu with a trigger.&#xA;If specified, allows external triggers to control the menu's open state.                                                                                                                                       |
| loopFocus                                                        | `boolean`                                                                      | `true`       | Whether to loop keyboard focus back to the first item&#xA;when the end of the list is reached while using the arrow keys.                                                                                                                                         |
| onOpenChangeComplete                                             | `((open: boolean) => void)`                                                    | -            | Event handler called after any animations complete when the menu is closed.                                                                                                                                                                                       |
| triggerId                                                        | `string \| null`                                                               | -            | ID of the trigger that the popover is associated with.&#xA;This is useful in conjunction with the `open` prop to create a controlled popover.&#xA;There's no need to specify this prop when the popover is uncontrolled (i.e. when the `open` prop is not set).   |
| disabled                                                         | `boolean`                                                                      | `false`      | Whether the component should ignore user interaction.                                                                                                                                                                                                             |
| orientation                                                      | `Menu.Root.Orientation`                                                        | `'vertical'` | The visual orientation of the menu.&#xA;Controls whether roving focus uses up/down or left/right arrow keys.                                                                                                                                                      |
| children                                                         | `ReactNode \| PayloadChildRenderFunction<unknown>`                             | -            | The content of the popover.&#xA;This can be a regular React node or a render function that receives the `payload` of the active trigger.                                                                                                                          |

### SubmenuTrigger

A menu item that opens a submenu.
Renders a `<div>` element.

**SubmenuTrigger Props:**

| Prop         | Type                                                                                     | Default | Description                                                                                                                                                                                  |
| :----------- | :--------------------------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| label        | `string`                                                                                 | -       | Overrides the text label to use when the item is matched during keyboard text navigation.                                                                                                    |
| onClick      | `((event: BaseUIEvent<MouseEvent<HTMLDivElement, MouseEvent>>) => void)`                 | -       | -                                                                                                                                                                                            |
| nativeButton | `boolean`                                                                                | `false` | Whether the component renders a native `<button>` element when replacing it&#xA;via the `render` prop.&#xA;Set to `true` if the rendered element is a native button.                         |
| disabled     | `boolean`                                                                                | `false` | Whether the component should ignore user interaction.                                                                                                                                        |
| openOnHover  | `boolean`                                                                                | -       | Whether the menu should also open when the trigger is hovered.                                                                                                                               |
| delay        | `number`                                                                                 | `100`   | How long to wait before the menu may be opened on hover. Specified in milliseconds.Requires the `openOnHover` prop.                                                                          |
| closeDelay   | `number`                                                                                 | `0`     | How long to wait before closing the menu that was opened on hover.&#xA;Specified in milliseconds.Requires the `openOnHover` prop.                                                            |
| className    | `string \| ((state: Menu.SubmenuTrigger.State) => string \| undefined)`                  | -       | CSS class applied to the element, or a function that&#xA;returns a class based on the component’s state.                                                                                     |
| style        | `CSSProperties \| ((state: Menu.SubmenuTrigger.State) => CSSProperties \| undefined)`    | -       | \*                                                                                                                                                                                           |
| render       | `ReactElement \| ((props: HTMLProps, state: Menu.SubmenuTrigger.State) => ReactElement)` | -       | Allows you to replace the component’s HTML element&#xA;with a different tag, or compose it with another component.Accepts a `ReactElement` or a function that returns the element to render. |

**SubmenuTrigger Data Attributes:**

| Attribute        | Type | Description                                      |
| :--------------- | :--- | :----------------------------------------------- |
| data-popup-open  | -    | Present when the corresponding submenu is open.  |
| data-highlighted | -    | Present when the submenu trigger is highlighted. |
| data-disabled    | -    | Present when the submenu trigger is disabled.    |

### Group

Groups related menu items with the corresponding label.
Renders a `<div>` element.

**Group Props:**

| Prop      | Type                                                                            | Default | Description                                                                                                                                                                                  |
| :-------- | :------------------------------------------------------------------------------ | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| children  | `ReactNode`                                                                     | -       | The content of the component.                                                                                                                                                                |
| className | `string \| ((state: Menu.Group.State) => string \| undefined)`                  | -       | CSS class applied to the element, or a function that&#xA;returns a class based on the component’s state.                                                                                     |
| style     | `CSSProperties \| ((state: Menu.Group.State) => CSSProperties \| undefined)`    | -       | -                                                                                                                                                                                            |
| render    | `ReactElement \| ((props: HTMLProps, state: Menu.Group.State) => ReactElement)` | -       | Allows you to replace the component’s HTML element&#xA;with a different tag, or compose it with another component.Accepts a `ReactElement` or a function that returns the element to render. |

### GroupLabel

An accessible label that is automatically associated with its parent group.
Renders a `<div>` element.

**GroupLabel Props:**

| Prop      | Type                                                                                 | Default | Description                                                                                                                                                                                  |
| :-------- | :----------------------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| className | `string \| ((state: Menu.GroupLabel.State) => string \| undefined)`                  | -       | CSS class applied to the element, or a function that&#xA;returns a class based on the component’s state.                                                                                     |
| style     | `CSSProperties \| ((state: Menu.GroupLabel.State) => CSSProperties \| undefined)`    | -       | -                                                                                                                                                                                            |
| render    | `ReactElement \| ((props: HTMLProps, state: Menu.GroupLabel.State) => ReactElement)` | -       | Allows you to replace the component’s HTML element&#xA;with a different tag, or compose it with another component.Accepts a `ReactElement` or a function that returns the element to render. |

### RadioGroup

Groups related radio items.
Renders a `<div>` element.

**RadioGroup Props:**

| Prop          | Type                                                                                 | Default | Description                                                                                                                                                                                  |
| :------------ | :----------------------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| defaultValue  | `any`                                                                                | -       | The uncontrolled value of the radio item that should be initially selected.To render a controlled radio group, use the `value` prop instead.                                                 |
| value         | `any`                                                                                | -       | The controlled value of the radio item that should be currently selected.To render an uncontrolled radio group, use the `defaultValue` prop instead.                                         |
| onValueChange | `((value: any, eventDetails: Menu.RadioGroup.ChangeEventDetails) => void)`           | -       | Function called when the selected value changes.                                                                                                                                             |
| disabled      | `boolean`                                                                            | `false` | Whether the component should ignore user interaction.                                                                                                                                        |
| children      | `ReactNode`                                                                          | -       | The content of the component.                                                                                                                                                                |
| className     | `string \| ((state: Menu.RadioGroup.State) => string \| undefined)`                  | -       | CSS class applied to the element, or a function that&#xA;returns a class based on the component’s state.                                                                                     |
| style         | `CSSProperties \| ((state: Menu.RadioGroup.State) => CSSProperties \| undefined)`    | -       | -                                                                                                                                                                                            |
| render        | `ReactElement \| ((props: HTMLProps, state: Menu.RadioGroup.State) => ReactElement)` | -       | Allows you to replace the component’s HTML element&#xA;with a different tag, or compose it with another component.Accepts a `ReactElement` or a function that returns the element to render. |

### RadioItem

A menu item that works like a radio button in a given group.
Renders a `<div>` element.

**RadioItem Props:**

| Prop         | Type                                                                                | Default | Description                                                                                                                                                                                  |
| :----------- | :---------------------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| label        | `string`                                                                            | -       | Overrides the text label to use when the item is matched during keyboard text navigation.                                                                                                    |
| value        | `any`                                                                               | -       | Value of the radio item.&#xA;This is the value that will be set in the Menu.RadioGroup when the item is selected.                                                                            |
| onClick      | `((event: BaseUIEvent<MouseEvent<HTMLDivElement, MouseEvent>>) => void)`            | -       | The click handler for the menu item.                                                                                                                                                         |
| closeOnClick | `boolean`                                                                           | `false` | Whether to close the menu when the item is clicked.                                                                                                                                          |
| nativeButton | `boolean`                                                                           | `false` | Whether the component renders a native `<button>` element when replacing it&#xA;via the `render` prop.&#xA;Set to `true` if the rendered element is a native button.                         |
| disabled     | `boolean`                                                                           | `false` | Whether the component should ignore user interaction.                                                                                                                                        |
| className    | `string \| ((state: Menu.RadioItem.State) => string \| undefined)`                  | -       | CSS class applied to the element, or a function that&#xA;returns a class based on the component’s state.                                                                                     |
| style        | `CSSProperties \| ((state: Menu.RadioItem.State) => CSSProperties \| undefined)`    | -       | -                                                                                                                                                                                            |
| render       | `ReactElement \| ((props: HTMLProps, state: Menu.RadioItem.State) => ReactElement)` | -       | Allows you to replace the component’s HTML element&#xA;with a different tag, or compose it with another component.Accepts a `ReactElement` or a function that returns the element to render. |

**RadioItem Data Attributes:**

| Attribute        | Type | Description                                       |
| :--------------- | :--- | :------------------------------------------------ |
| data-checked     | -    | Present when the menu radio item is selected.     |
| data-unchecked   | -    | Present when the menu radio item is not selected. |
| data-highlighted | -    | Present when the menu radio item is highlighted.  |
| data-disabled    | -    | Present when the menu radio item is disabled.     |

### RadioItemIndicator

Indicates whether the radio item is selected.
Renders a `<span>` element.

**RadioItemIndicator Props:**

| Prop        | Type                                                                                         | Default | Description                                                                                                                                                                                  |
| :---------- | :------------------------------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| className   | `string \| ((state: Menu.RadioItemIndicator.State) => string \| undefined)`                  | -       | CSS class applied to the element, or a function that&#xA;returns a class based on the component’s state.                                                                                     |
| style       | `CSSProperties \| ((state: Menu.RadioItemIndicator.State) => CSSProperties \| undefined)`    | -       | -                                                                                                                                                                                            |
| keepMounted | `boolean`                                                                                    | `false` | Whether to keep the HTML element in the DOM when the radio item is inactive.                                                                                                                 |
| render      | `ReactElement \| ((props: HTMLProps, state: Menu.RadioItemIndicator.State) => ReactElement)` | -       | Allows you to replace the component’s HTML element&#xA;with a different tag, or compose it with another component.Accepts a `ReactElement` or a function that returns the element to render. |

**RadioItemIndicator Data Attributes:**

| Attribute           | Type | Description                                        |
| :------------------ | :--- | :------------------------------------------------- |
| data-checked        | -    | Present when the menu radio item is selected.      |
| data-unchecked      | -    | Present when the menu radio item is not selected.  |
| data-disabled       | -    | Present when the menu radio item is disabled.      |
| data-starting-style | -    | Present when the radio indicator is animating in.  |
| data-ending-style   | -    | Present when the radio indicator is animating out. |

### CheckboxItem

A menu item that toggles a setting on or off.
Renders a `<div>` element.

**CheckboxItem Props:**

| Prop            | Type                                                                                   | Default | Description                                                                                                                                                                                  |
| :-------------- | :------------------------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| label           | `string`                                                                               | -       | Overrides the text label to use when the item is matched during keyboard text navigation.                                                                                                    |
| defaultChecked  | `boolean`                                                                              | `false` | Whether the checkbox item is initially ticked.To render a controlled checkbox item, use the `checked` prop instead.                                                                          |
| checked         | `boolean`                                                                              | -       | Whether the checkbox item is currently ticked.To render an uncontrolled checkbox item, use the `defaultChecked` prop instead.                                                                |
| onCheckedChange | `((checked: boolean, eventDetails: Menu.CheckboxItem.ChangeEventDetails) => void)`     | -       | Event handler called when the checkbox item is ticked or unticked.                                                                                                                           |
| onClick         | `((event: BaseUIEvent<MouseEvent<HTMLDivElement, MouseEvent>>) => void)`               | -       | The click handler for the menu item.                                                                                                                                                         |
| closeOnClick    | `boolean`                                                                              | `false` | Whether to close the menu when the item is clicked.                                                                                                                                          |
| nativeButton    | `boolean`                                                                              | `false` | Whether the component renders a native `<button>` element when replacing it&#xA;via the `render` prop.&#xA;Set to `true` if the rendered element is a native button.                         |
| disabled        | `boolean`                                                                              | `false` | Whether the component should ignore user interaction.                                                                                                                                        |
| className       | `string \| ((state: Menu.CheckboxItem.State) => string \| undefined)`                  | -       | CSS class applied to the element, or a function that&#xA;returns a class based on the component’s state.                                                                                     |
| style           | `CSSProperties \| ((state: Menu.CheckboxItem.State) => CSSProperties \| undefined)`    | -       | -                                                                                                                                                                                            |
| render          | `ReactElement \| ((props: HTMLProps, state: Menu.CheckboxItem.State) => ReactElement)` | -       | Allows you to replace the component’s HTML element&#xA;with a different tag, or compose it with another component.Accepts a `ReactElement` or a function that returns the element to render. |

**CheckboxItem Data Attributes:**

| Attribute        | Type | Description                                         |
| :--------------- | :--- | :-------------------------------------------------- |
| data-checked     | -    | Present when the menu checkbox item is checked.     |
| data-unchecked   | -    | Present when the menu checkbox item is not checked. |
| data-highlighted | -    | Present when the menu checkbox item is highlighted. |
| data-disabled    | -    | Present when the menu checkbox item is disabled.    |

### CheckboxItemIndicator

Indicates whether the checkbox item is ticked.
Renders a `<span>` element.

**CheckboxItemIndicator Props:**

| Prop        | Type                                                                                            | Default | Description                                                                                                                                                                                  |
| :---------- | :---------------------------------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| className   | `string \| ((state: Menu.CheckboxItemIndicator.State) => string \| undefined)`                  | -       | CSS class applied to the element, or a function that&#xA;returns a class based on the component’s state.                                                                                     |
| style       | `CSSProperties \| ((state: Menu.CheckboxItemIndicator.State) => CSSProperties \| undefined)`    | -       | -                                                                                                                                                                                            |
| keepMounted | `boolean`                                                                                       | `false` | Whether to keep the HTML element in the DOM when the checkbox item is not checked.                                                                                                           |
| render      | `ReactElement \| ((props: HTMLProps, state: Menu.CheckboxItemIndicator.State) => ReactElement)` | -       | Allows you to replace the component’s HTML element&#xA;with a different tag, or compose it with another component.Accepts a `ReactElement` or a function that returns the element to render. |

**CheckboxItemIndicator Data Attributes:**

| Attribute           | Type | Description                                         |
| :------------------ | :--- | :-------------------------------------------------- |
| data-checked        | -    | Present when the menu checkbox item is checked.     |
| data-unchecked      | -    | Present when the menu checkbox item is not checked. |
| data-disabled       | -    | Present when the menu checkbox item is disabled.    |
| data-starting-style | -    | Present when the indicator is animating in.         |
| data-ending-style   | -    | Present when the indicator is animating out.        |

### Separator

A separator element accessible to screen readers.
Renders a `<div>` element.

**Separator Props:**

| Prop        | Type                                                                           | Default        | Description                                                                                                                                                                                  |
| :---------- | :----------------------------------------------------------------------------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| orientation | `Orientation`                                                                  | `'horizontal'` | The orientation of the separator.                                                                                                                                                            |
| className   | `string \| ((state: Separator.State) => string \| undefined)`                  | -              | CSS class applied to the element, or a function that&#xA;returns a class based on the component’s state.                                                                                     |
| style       | `CSSProperties \| ((state: Separator.State) => CSSProperties \| undefined)`    | -              | -                                                                                                                                                                                            |
| render      | `ReactElement \| ((props: HTMLProps, state: Separator.State) => ReactElement)` | -              | Allows you to replace the component’s HTML element&#xA;with a different tag, or compose it with another component.Accepts a `ReactElement` or a function that returns the element to render. |
