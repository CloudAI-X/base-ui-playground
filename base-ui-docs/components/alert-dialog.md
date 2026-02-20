---
title: Alert Dialog
subtitle: A dialog that requires a user response to proceed.
description: A high-quality, unstyled React alert dialog component that requires a user response to proceed.
---

# Alert Dialog

A high-quality, unstyled React alert dialog component that requires a user response to proceed.

## Demo

### Tailwind

This example shows how to implement the component using Tailwind CSS.

```tsx
/* index.tsx */
import { AlertDialog } from '@base-ui/react/alert-dialog';

export default function ExampleAlertDialog() {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger className="flex h-10 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-red-800 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100">
        Discard draft
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Backdrop className="fixed inset-0 min-h-dvh bg-black opacity-20 transition-all duration-150 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 dark:opacity-70 supports-[-webkit-touch-callout:none]:absolute" />
        <AlertDialog.Popup className="fixed top-1/2 left-1/2 -mt-8 w-96 max-w-[calc(100vw-3rem)] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gray-50 p-6 text-gray-900 outline outline-1 outline-gray-200 transition-all duration-150 data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 dark:outline-gray-300">
          <AlertDialog.Title className="-mt-1.5 mb-1 text-lg font-medium">
            Discard draft?
          </AlertDialog.Title>
          <AlertDialog.Description className="mb-6 text-base text-gray-600">
            You can’t undo this action.
          </AlertDialog.Description>
          <div className="flex justify-end gap-4">
            <AlertDialog.Close className="flex h-10 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-gray-900 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100">
              Cancel
            </AlertDialog.Close>
            <AlertDialog.Close className="flex h-10 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-red-800 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100">
              Discard
            </AlertDialog.Close>
          </div>
        </AlertDialog.Popup>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
```

### CSS Modules

This example shows how to implement the component using CSS Modules.

```css
/* index.module.css */
.Button {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  padding: 0 0.875rem;
  margin: 0;
  outline: 0;
  border: 1px solid var(--color-gray-200);
  border-radius: 0.375rem;
  background-color: var(--color-gray-50);
  font-family: inherit;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: var(--color-gray-900);
  user-select: none;

  &[data-color='red'] {
    color: var(--color-red);
  }

  @media (hover: hover) {
    &:hover {
      background-color: var(--color-gray-100);
    }
  }

  &:active {
    background-color: var(--color-gray-100);
  }

  &:focus-visible {
    outline: 2px solid var(--color-blue);
    outline-offset: -1px;
  }
}

.Backdrop {
  position: fixed;
  min-height: 100dvh;
  inset: 0;
  background-color: black;
  opacity: 0.2;
  transition: opacity 150ms;

  /* iOS 26+: Ensure the backdrop covers the entire visible viewport. */
  @supports (-webkit-touch-callout: none) {
    position: absolute;
  }

  @media (prefers-color-scheme: dark) {
    opacity: 0.7;
  }

  &[data-starting-style],
  &[data-ending-style] {
    opacity: 0;
  }
}

.Popup {
  box-sizing: border-box;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24rem;
  max-width: calc(100vw - 3rem);
  margin-top: -2rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  outline: 1px solid var(--color-gray-300);
  background-color: var(--color-gray-50);
  color: var(--color-gray-900);
  transition: all 150ms;

  @media (prefers-color-scheme: dark) {
    outline: 1px solid var(--color-gray-300);
  }

  &[data-starting-style],
  &[data-ending-style] {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.9);
  }
}

.Title {
  margin-top: -0.375rem;
  margin-bottom: 0.25rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  letter-spacing: -0.0025em;
  font-weight: 500;
}

.Description {
  margin: 0 0 1.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  color: var(--color-gray-600);
}

.Actions {
  display: flex;
  justify-content: end;
  gap: 1rem;
}
```

```tsx
/* index.tsx */
import { AlertDialog } from '@base-ui/react/alert-dialog';
import styles from './index.module.css';

export default function ExampleAlertDialog() {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger data-color="red" className={styles.Button}>
        Discard draft
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Backdrop className={styles.Backdrop} />
        <AlertDialog.Popup className={styles.Popup}>
          <AlertDialog.Title className={styles.Title}>Discard draft?</AlertDialog.Title>
          <AlertDialog.Description className={styles.Description}>
            You can't undo this action.
          </AlertDialog.Description>
          <div className={styles.Actions}>
            <AlertDialog.Close className={styles.Button}>Cancel</AlertDialog.Close>
            <AlertDialog.Close data-color="red" className={styles.Button}>
              Discard
            </AlertDialog.Close>
          </div>
        </AlertDialog.Popup>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
```

## Anatomy

Import the component and assemble its parts:

```jsx title="Anatomy"
import { AlertDialog } from '@base-ui/react/alert-dialog';

<AlertDialog.Root>
  <AlertDialog.Trigger />
  <AlertDialog.Portal>
    <AlertDialog.Backdrop />
    <AlertDialog.Viewport>
      <AlertDialog.Popup>
        <AlertDialog.Title />
        <AlertDialog.Description />
        <AlertDialog.Close />
      </AlertDialog.Popup>
    </AlertDialog.Viewport>
  </AlertDialog.Portal>
</AlertDialog.Root>;
```

## Examples

### Open from a menu

In order to open a dialog using a menu, control the dialog state and open it imperatively using the `onClick` handler on the menu item.

```tsx {12-13,17-18,24-25,28-29} title="Connecting a dialog to a menu"
import * as React from 'react';
import { AlertDialog } from '@base-ui/react/alert-dialog';
import { Menu } from '@base-ui/react/menu';

function ExampleMenu() {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Menu.Root>
        <Menu.Trigger>Open menu</Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner>
            <Menu.Popup>
              {/* Open the dialog when the menu item is clicked */}
              <Menu.Item onClick={() => setDialogOpen(true)}>Open dialog</Menu.Item>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>

      {/* Control the dialog state */}
      <AlertDialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialog.Portal>
          <AlertDialog.Backdrop />
          <AlertDialog.Popup>
            {/* prettier-ignore */}
            {/* Rest of the dialog */}
          </AlertDialog.Popup>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </React.Fragment>
  );
}
```

### Close confirmation

This example shows a nested confirmation dialog that opens if the text entered in the parent dialog is going to be discarded.

To implement this, both dialogs should be controlled. The confirmation dialog may be opened when `onOpenChange` callback of the parent dialog receives a request to close. This way, the confirmation is automatically shown when the user clicks the backdrop, presses the Esc key, or clicks a close button.

Use the `[data-nested-dialog-open]` selector and the `var(--nested-dialogs)` CSS variable to customize the styling of the parent dialog. Backdrops of the child dialogs won't be rendered so that you can present the parent dialog in a clean way behind the one on top of it.

import { DemoDialogCloseConfirmation } from '../dialog/demos/close-confirmation';

### Detached triggers

An alert dialog can be controlled by a trigger located either inside or outside the `<AlertDialog.Root>` component.
For simple, one-off interactions, place the `<AlertDialog.Trigger>` inside `<AlertDialog.Root>`, as shown in the example at the top of this page.

However, if defining the alert dialog's content next to its trigger is not practical, you can use a detached trigger.
This involves placing the `<AlertDialog.Trigger>` outside of `<AlertDialog.Root>` and linking them with a `handle` created by the `AlertDialog.createHandle()` function.

```jsx title="Detached triggers" {3,5} "handle={demoAlertDialog}"
const demoAlertDialog = AlertDialog.createHandle();

<AlertDialog.Trigger handle={demoAlertDialog}>Open</AlertDialog.Trigger>

<AlertDialog.Root handle={demoAlertDialog}>
  ...
</AlertDialog.Root>
```

## Demo

### Tailwind

This example shows how to implement the component using Tailwind CSS.

```tsx
/* index.tsx */
'use client';
import * as React from 'react';
import { AlertDialog } from '@base-ui/react/alert-dialog';

const demoAlertDialog = AlertDialog.createHandle();

export default function AlertDialogDetachedTriggersSimpleDemo() {
  return (
    <React.Fragment>
      <AlertDialog.Trigger
        className="flex h-10 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-red-800 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100"
        handle={demoAlertDialog}
      >
        Discard draft
      </AlertDialog.Trigger>

      <AlertDialog.Root handle={demoAlertDialog}>
        <AlertDialog.Portal>
          <AlertDialog.Backdrop className="fixed inset-0 min-h-dvh bg-black opacity-20 transition-all duration-150 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 dark:opacity-70 supports-[-webkit-touch-callout:none]:absolute" />
          <AlertDialog.Popup className="fixed top-1/2 left-1/2 -mt-8 w-96 max-w-[calc(100vw-3rem)] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gray-50 p-6 text-gray-900 outline outline-1 outline-gray-200 transition-all duration-150 data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 dark:outline-gray-300">
            <AlertDialog.Title className="-mt-1.5 mb-1 text-lg font-medium">
              Discard draft?
            </AlertDialog.Title>
            <AlertDialog.Description className="mb-6 text-base text-gray-600">
              This action cannot be undone.
            </AlertDialog.Description>
            <div className="flex justify-end gap-4">
              <AlertDialog.Close className="flex h-10 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-gray-900 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100">
                Cancel
              </AlertDialog.Close>
              <AlertDialog.Close className="flex h-10 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-red-800 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100">
                Discard
              </AlertDialog.Close>
            </div>
          </AlertDialog.Popup>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </React.Fragment>
  );
}
```

### CSS Modules

This example shows how to implement the component using CSS Modules.

```css
/* index.module.css */
.Button {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  padding: 0 0.875rem;
  margin: 0;
  outline: 0;
  border: 1px solid var(--color-gray-200);
  border-radius: 0.375rem;
  background-color: var(--color-gray-50);
  font-family: inherit;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: var(--color-gray-900);
  user-select: none;

  @media (hover: hover) {
    &:hover {
      background-color: var(--color-gray-100);
    }
  }

  &:active {
    background-color: var(--color-gray-100);
  }

  &:focus-visible {
    outline: 2px solid var(--color-blue);
    outline-offset: -1px;
  }
}

.DangerButton {
  color: var(--color-red);
}

.Backdrop {
  position: fixed;
  min-height: 100dvh;
  inset: 0;
  background-color: black;
  opacity: 0.2;
  transition: opacity 150ms cubic-bezier(0.45, 1.005, 0, 1.005);

  /* iOS 26+: Ensure the backdrop covers the entire visible viewport. */
  @supports (-webkit-touch-callout: none) {
    position: absolute;
  }

  @media (prefers-color-scheme: dark) {
    opacity: 0.7;
  }

  &[data-starting-style],
  &[data-ending-style] {
    opacity: 0;
  }
}

.Popup {
  box-sizing: border-box;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24rem;
  max-width: calc(100vw - 3rem);
  margin-top: -2rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  outline: 1px solid var(--color-gray-200);
  background-color: var(--color-gray-50);
  color: var(--color-gray-900);
  transition: all 150ms;

  @media (prefers-color-scheme: dark) {
    outline: 1px solid var(--color-gray-300);
  }

  &[data-starting-style],
  &[data-ending-style] {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.9);
  }
}

.Title {
  margin-top: -0.375rem;
  margin-bottom: 0.25rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  letter-spacing: -0.0025em;
  font-weight: 500;
}

.Description {
  margin: 0 0 1.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  color: var(--color-gray-600);
}

.Actions {
  display: flex;
  justify-content: end;
  gap: 1rem;
}

.Container {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
}
```

```tsx
/* index.tsx */
'use client';
import * as React from 'react';
import { AlertDialog } from '@base-ui/react/alert-dialog';
import styles from './index.module.css';

const demoAlertDialog = AlertDialog.createHandle();

export default function AlertDialogDetachedTriggersSimpleDemo() {
  return (
    <React.Fragment>
      <AlertDialog.Trigger
        className={`${styles.Button} ${styles.DangerButton}`}
        handle={demoAlertDialog}
      >
        Discard draft
      </AlertDialog.Trigger>

      <AlertDialog.Root handle={demoAlertDialog}>
        <AlertDialog.Portal>
          <AlertDialog.Backdrop className={styles.Backdrop} />
          <AlertDialog.Popup className={styles.Popup}>
            <AlertDialog.Title className={styles.Title}>Discard draft?</AlertDialog.Title>
            <AlertDialog.Description className={styles.Description}>
              This action cannot be undone.
            </AlertDialog.Description>
            <div className={styles.Actions}>
              <AlertDialog.Close className={styles.Button}>Cancel</AlertDialog.Close>
              <AlertDialog.Close className={`${styles.Button} ${styles.DangerButton}`}>
                Discard
              </AlertDialog.Close>
            </div>
          </AlertDialog.Popup>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </React.Fragment>
  );
}
```

### Multiple triggers

A single alert dialog can be opened by multiple trigger elements.
You can achieve this by using the same `handle` for several detached triggers, or by placing multiple `<AlertDialog.Trigger>` components inside a single `<AlertDialog.Root>`.

```jsx title="Multiple triggers within the Root part"
<AlertDialog.Root>
  <AlertDialog.Trigger>Trigger 1</AlertDialog.Trigger>
  <AlertDialog.Trigger>Trigger 2</AlertDialog.Trigger>
  ...
</AlertDialog.Root>
```

```jsx title="Multiple detached triggers"
const demoAlertDialog = AlertDialog.createHandle();

<AlertDialog.Trigger handle={demoAlertDialog}>Trigger 1</AlertDialog.Trigger>
<AlertDialog.Trigger handle={demoAlertDialog}>Trigger 2</AlertDialog.Trigger>
<AlertDialog.Root handle={demoAlertDialog}>
  ...
</AlertDialog.Root>
```

The alert dialog can render different content depending on which trigger opened it.
This is achieved by passing a `payload` to the `<AlertDialog.Trigger>` and using the function-as-a-child pattern in `<AlertDialog.Root>`.

The payload can be strongly typed by providing a type argument to the `createHandle()` function:

```jsx title="Detached triggers with payload" {1,3,7,12}
const demoAlertDialog = AlertDialog.createHandle<{ message: string }>();

<AlertDialog.Trigger handle={demoAlertDialog} payload={{ message: 'Trigger 1' }}>
  Trigger 1
</AlertDialog.Trigger>

<AlertDialog.Trigger handle={demoAlertDialog} payload={{ message: 'Trigger 2' }}>
  Trigger 2
</AlertDialog.Trigger>

<AlertDialog.Root handle={demoAlertDialog}>
  {({ payload }) => (
    <AlertDialog.Portal>
      <AlertDialog.Popup>
        <AlertDialog.Title>Alert dialog</AlertDialog.Title>
        {payload !== undefined && (
          <AlertDialog.Description>
            Confirming {payload.message}
          </AlertDialog.Description>
        )}
      </AlertDialog.Popup>
    </AlertDialog.Portal>
  )}
</AlertDialog.Root>
```

### Controlled mode with multiple triggers

You can control the alert dialog's open state externally using the `open` and `onOpenChange` props on `<AlertDialog.Root>`.
This allows you to manage the alert dialog's visibility based on your application's state.
When using multiple triggers, you have to manage which trigger is active with the `triggerId` prop on `<AlertDialog.Root>` and the `id` prop on each `<AlertDialog.Trigger>`.

Note that there is no separate `onTriggerIdChange` prop.
Instead, the `onOpenChange` callback receives an additional argument, `eventDetails`, which contains the trigger element that initiated the state change.

## Demo

### Tailwind

This example shows how to implement the component using Tailwind CSS.

```tsx
/* index.tsx */
'use client';
import * as React from 'react';
import { AlertDialog } from '@base-ui/react/alert-dialog';

type AlertPayload = { message: string };

const demoAlertDialog = AlertDialog.createHandle<AlertPayload>();

export default function AlertDialogDetachedTriggersControlledDemo() {
  const [open, setOpen] = React.useState(false);
  const [triggerId, setTriggerId] = React.useState<string | null>(null);

  const handleOpenChange = (isOpen: boolean, eventDetails: AlertDialog.Root.ChangeEventDetails) => {
    setOpen(isOpen);
    setTriggerId(eventDetails.trigger?.id ?? null);
  };

  return (
    <React.Fragment>
      <div className="flex flex-wrap gap-2 justify-center">
        <AlertDialog.Trigger
          className="flex h-10 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-red-800 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100"
          handle={demoAlertDialog}
          id="alert-trigger-1"
          payload={{ message: 'Discard draft?' }}
        >
          Discard
        </AlertDialog.Trigger>

        <AlertDialog.Trigger
          className="flex h-10 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-red-800 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100"
          handle={demoAlertDialog}
          id="alert-trigger-2"
          payload={{ message: 'Delete project?' }}
        >
          Delete
        </AlertDialog.Trigger>

        <AlertDialog.Trigger
          className="flex h-10 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-gray-900 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100"
          handle={demoAlertDialog}
          id="alert-trigger-3"
          payload={{ message: 'Sign out?' }}
        >
          Sign out
        </AlertDialog.Trigger>

        <button
          type="button"
          className="flex h-10 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-gray-900 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100"
          onClick={() => {
            setTriggerId('alert-trigger-2');
            setOpen(true);
          }}
        >
          Open programmatically
        </button>
      </div>

      <AlertDialog.Root<AlertPayload>
        handle={demoAlertDialog}
        open={open}
        onOpenChange={handleOpenChange}
        triggerId={triggerId}
      >
        {({ payload }) => (
          <AlertDialog.Portal>
            <AlertDialog.Backdrop className="fixed inset-0 min-h-dvh bg-black opacity-20 transition-all duration-150 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 dark:opacity-70 supports-[-webkit-touch-callout:none]:absolute" />
            <AlertDialog.Popup className="fixed top-1/2 left-1/2 -mt-8 w-96 max-w-[calc(100vw-3rem)] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gray-50 p-6 text-gray-900 outline outline-1 outline-gray-200 transition-all duration-150 data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 dark:outline-gray-300">
              <AlertDialog.Title className="-mt-1.5 mb-1 text-lg font-medium">
                {payload?.message ?? 'Are you sure?'}
              </AlertDialog.Title>
              <AlertDialog.Description className="mb-6 text-base text-gray-600">
                This action cannot be undone.
              </AlertDialog.Description>
              <div className="flex justify-end gap-4">
                <AlertDialog.Close className="flex h-10 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-gray-900 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100">
                  Cancel
                </AlertDialog.Close>
                <AlertDialog.Close className="flex h-10 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-red-800 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100">
                  Confirm
                </AlertDialog.Close>
              </div>
            </AlertDialog.Popup>
          </AlertDialog.Portal>
        )}
      </AlertDialog.Root>
    </React.Fragment>
  );
}
```

### CSS Modules

This example shows how to implement the component using CSS Modules.

```css
/* index.module.css */
.Button {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  padding: 0 0.875rem;
  margin: 0;
  outline: 0;
  border: 1px solid var(--color-gray-200);
  border-radius: 0.375rem;
  background-color: var(--color-gray-50);
  font-family: inherit;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: var(--color-gray-900);
  user-select: none;

  @media (hover: hover) {
    &:hover {
      background-color: var(--color-gray-100);
    }
  }

  &:active {
    background-color: var(--color-gray-100);
  }

  &:focus-visible {
    outline: 2px solid var(--color-blue);
    outline-offset: -1px;
  }
}

.DangerButton {
  color: var(--color-red);
}

.Backdrop {
  position: fixed;
  min-height: 100dvh;
  inset: 0;
  background-color: black;
  opacity: 0.2;
  transition: opacity 150ms cubic-bezier(0.45, 1.005, 0, 1.005);

  /* iOS 26+: Ensure the backdrop covers the entire visible viewport. */
  @supports (-webkit-touch-callout: none) {
    position: absolute;
  }

  @media (prefers-color-scheme: dark) {
    opacity: 0.7;
  }

  &[data-starting-style],
  &[data-ending-style] {
    opacity: 0;
  }
}

.Popup {
  box-sizing: border-box;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24rem;
  max-width: calc(100vw - 3rem);
  margin-top: -2rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  outline: 1px solid var(--color-gray-200);
  background-color: var(--color-gray-50);
  color: var(--color-gray-900);
  transition: all 150ms;

  @media (prefers-color-scheme: dark) {
    outline: 1px solid var(--color-gray-300);
  }

  &[data-starting-style],
  &[data-ending-style] {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.9);
  }
}

.Title {
  margin-top: -0.375rem;
  margin-bottom: 0.25rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  letter-spacing: -0.0025em;
  font-weight: 500;
}

.Description {
  margin: 0 0 1.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  color: var(--color-gray-600);
}

.Actions {
  display: flex;
  justify-content: end;
  gap: 1rem;
}

.Container {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
}
```

```tsx
/* index.tsx */
'use client';
import * as React from 'react';
import { AlertDialog } from '@base-ui/react/alert-dialog';
import styles from './index.module.css';

type AlertPayload = { message: string };

const demoAlertDialog = AlertDialog.createHandle<AlertPayload>();

export default function AlertDialogDetachedTriggersControlledDemo() {
  const [open, setOpen] = React.useState(false);
  const [triggerId, setTriggerId] = React.useState<string | null>(null);

  const handleOpenChange = (isOpen: boolean, eventDetails: AlertDialog.Root.ChangeEventDetails) => {
    setOpen(isOpen);
    setTriggerId(eventDetails.trigger?.id ?? null);
  };

  return (
    <React.Fragment>
      <div className={styles.Container}>
        <AlertDialog.Trigger
          className={`${styles.Button} ${styles.DangerButton}`}
          handle={demoAlertDialog}
          id="alert-trigger-1"
          payload={{ message: 'Discard draft?' }}
        >
          Discard
        </AlertDialog.Trigger>

        <AlertDialog.Trigger
          className={`${styles.Button} ${styles.DangerButton}`}
          handle={demoAlertDialog}
          id="alert-trigger-2"
          payload={{ message: 'Delete project?' }}
        >
          Delete
        </AlertDialog.Trigger>

        <AlertDialog.Trigger
          className={styles.Button}
          handle={demoAlertDialog}
          id="alert-trigger-3"
          payload={{ message: 'Sign out?' }}
        >
          Sign out
        </AlertDialog.Trigger>

        <button
          className={styles.Button}
          type="button"
          onClick={() => {
            setTriggerId('alert-trigger-2');
            setOpen(true);
          }}
        >
          Open programmatically
        </button>
      </div>

      <AlertDialog.Root<AlertPayload>
        handle={demoAlertDialog}
        open={open}
        onOpenChange={handleOpenChange}
        triggerId={triggerId}
      >
        {({ payload }) => (
          <AlertDialog.Portal>
            <AlertDialog.Backdrop className={styles.Backdrop} />
            <AlertDialog.Popup className={styles.Popup}>
              <AlertDialog.Title className={styles.Title}>
                {payload?.message ?? 'Are you sure?'}
              </AlertDialog.Title>
              <AlertDialog.Description className={styles.Description}>
                This action cannot be undone.
              </AlertDialog.Description>
              <div className={styles.Actions}>
                <AlertDialog.Close className={styles.Button}>Cancel</AlertDialog.Close>
                <AlertDialog.Close className={`${styles.Button} ${styles.DangerButton}`}>
                  Confirm
                </AlertDialog.Close>
              </div>
            </AlertDialog.Popup>
          </AlertDialog.Portal>
        )}
      </AlertDialog.Root>
    </React.Fragment>
  );
}
```

## API reference

### Root

Groups all parts of the alert dialog.
Doesn’t render its own HTML element.

**Root Props:**

| Prop                                                    | Type                                                                           | Default | Description                                                                                                                                                                                                                                                             |
| :------------------------------------------------------ | :----------------------------------------------------------------------------- | :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| defaultOpen                                             | `boolean`                                                                      | `false` | Whether the dialog is initially open.To render a controlled dialog, use the `open` prop instead.                                                                                                                                                                        |
| open                                                    | `boolean`                                                                      | -       | Whether the dialog is currently open.                                                                                                                                                                                                                                   |
| onOpenChange                                            | `((open: boolean, eventDetails: AlertDialog.Root.ChangeEventDetails) => void)` | -       | Event handler called when the dialog is opened or closed.                                                                                                                                                                                                               |
| actionsRef                                              | `RefObject<AlertDialog.Root.Actions \| null>`                                  | -       | A ref to imperative actions.\* `unmount`: When specified, the dialog will not be unmounted when closed.&#xA;Instead, the `unmount` function must be called to unmount the dialog manually.&#xA;Useful when the dialog's animation is controlled by an external library. |
| \* `close`: Closes the dialog imperatively when called. |
| defaultTriggerId                                        | `string \| null`                                                               | -       | ID of the trigger that the dialog is associated with.&#xA;This is useful in conjunction with the `defaultOpen` prop to create an initially open dialog.                                                                                                                 |
| handle                                                  | `AlertDialog.Handle<Payload>`                                                  | -       | A handle to associate the alert dialog with a trigger.&#xA;If specified, allows external triggers to control the alert dialog's open state.&#xA;Can be created with the AlertDialog.createHandle() method.                                                              |
| onOpenChangeComplete                                    | `((open: boolean) => void)`                                                    | -       | Event handler called after any animations complete when the dialog is opened or closed.                                                                                                                                                                                 |
| triggerId                                               | `string \| null`                                                               | -       | ID of the trigger that the dialog is associated with.&#xA;This is useful in conjunction with the `open` prop to create a controlled dialog.&#xA;There's no need to specify this prop when the popover is uncontrolled (i.e. when the `open` prop is not set).           |
| children                                                | `ReactNode \| PayloadChildRenderFunction<Payload>`                             | -       | The content of the dialog.&#xA;This can be a regular React node or a render function that receives the `payload` of the active trigger.                                                                                                                                 |

### Trigger

A button that opens the alert dialog.
Renders a `<button>` element.

**Trigger Props:**

| Prop         | Type                                                                                     | Default | Description                                                                                                                                                                                              |
| :----------- | :--------------------------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| handle       | `DialogHandle<Payload>`                                                                  | -       | A handle to associate the trigger with a dialog.&#xA;Can be created with the AlertDialog.createHandle() method.                                                                                          |
| nativeButton | `boolean`                                                                                | `true`  | Whether the component renders a native `<button>` element when replacing it&#xA;via the `render` prop.&#xA;Set to `false` if the rendered element is not a button (e.g. `<div>`).                        |
| payload      | `Payload`                                                                                | -       | A payload to pass to the dialog when it is opened.                                                                                                                                                       |
| id           | `string`                                                                                 | -       | ID of the trigger. In addition to being forwarded to the rendered element,&#xA;it is also used to specify the active trigger for the dialogs in controlled mode (with the Dialog.Root `triggerId` prop). |
| className    | `string \| ((state: AlertDialog.Trigger.State) => string \| undefined)`                  | -       | CSS class applied to the element, or a function that&#xA;returns a class based on the component’s state.                                                                                                 |
| style        | `CSSProperties \| ((state: AlertDialog.Trigger.State) => CSSProperties \| undefined)`    | -       | -                                                                                                                                                                                                        |
| render       | `ReactElement \| ((props: HTMLProps, state: AlertDialog.Trigger.State) => ReactElement)` | -       | Allows you to replace the component’s HTML element&#xA;with a different tag, or compose it with another component.Accepts a `ReactElement` or a function that returns the element to render.             |

**Trigger Data Attributes:**

| Attribute       | Type | Description                                    |
| :-------------- | :--- | :--------------------------------------------- |
| data-popup-open | -    | Present when the corresponding dialog is open. |
| data-disabled   | -    | Present when the trigger is disabled.          |

### Portal

A portal element that moves the popup to a different part of the DOM.
By default, the portal element is appended to `<body>`.
Renders a `<div>` element.

**Portal Props:**

| Prop        | Type                                                                                    | Default | Description                                                                                                                                                                                  |
| :---------- | :-------------------------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| container   | `HTMLElement \| ShadowRoot \| RefObject<HTMLElement \| ShadowRoot \| null> \| null`     | -       | A parent element to render the portal element into.                                                                                                                                          |
| className   | `string \| ((state: AlertDialog.Portal.State) => string \| undefined)`                  | -       | CSS class applied to the element, or a function that&#xA;returns a class based on the component’s state.                                                                                     |
| style       | `CSSProperties \| ((state: AlertDialog.Portal.State) => CSSProperties \| undefined)`    | -       | -                                                                                                                                                                                            |
| keepMounted | `boolean`                                                                               | `false` | Whether to keep the portal mounted in the DOM while the popup is hidden.                                                                                                                     |
| render      | `ReactElement \| ((props: HTMLProps, state: AlertDialog.Portal.State) => ReactElement)` | -       | Allows you to replace the component’s HTML element&#xA;with a different tag, or compose it with another component.Accepts a `ReactElement` or a function that returns the element to render. |

### Backdrop

An overlay displayed beneath the popup.
Renders a `<div>` element.

**Backdrop Props:**

| Prop        | Type                                                                                      | Default | Description                                                                                                                                                                                  |
| :---------- | :---------------------------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| forceRender | `boolean`                                                                                 | `false` | Whether the backdrop is forced to render even when nested.                                                                                                                                   |
| className   | `string \| ((state: AlertDialog.Backdrop.State) => string \| undefined)`                  | -       | CSS class applied to the element, or a function that&#xA;returns a class based on the component’s state.                                                                                     |
| style       | `CSSProperties \| ((state: AlertDialog.Backdrop.State) => CSSProperties \| undefined)`    | -       | -                                                                                                                                                                                            |
| render      | `ReactElement \| ((props: HTMLProps, state: AlertDialog.Backdrop.State) => ReactElement)` | -       | Allows you to replace the component’s HTML element&#xA;with a different tag, or compose it with another component.Accepts a `ReactElement` or a function that returns the element to render. |

**Backdrop Data Attributes:**

| Attribute           | Type | Description                               |
| :------------------ | :--- | :---------------------------------------- |
| data-open           | -    | Present when the dialog is open.          |
| data-closed         | -    | Present when the dialog is closed.        |
| data-starting-style | -    | Present when the dialog is animating in.  |
| data-ending-style   | -    | Present when the dialog is animating out. |

### Viewport

A positioning container for the dialog popup that can be made scrollable.
Renders a `<div>` element.

**Viewport Props:**

| Prop      | Type                                                                                      | Default | Description                                                                                                                                                                                  |
| :-------- | :---------------------------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| className | `string \| ((state: AlertDialog.Viewport.State) => string \| undefined)`                  | -       | CSS class applied to the element, or a function that&#xA;returns a class based on the component’s state.                                                                                     |
| style     | `CSSProperties \| ((state: AlertDialog.Viewport.State) => CSSProperties \| undefined)`    | -       | -                                                                                                                                                                                            |
| render    | `ReactElement \| ((props: HTMLProps, state: AlertDialog.Viewport.State) => ReactElement)` | -       | Allows you to replace the component’s HTML element&#xA;with a different tag, or compose it with another component.Accepts a `ReactElement` or a function that returns the element to render. |

**Viewport Data Attributes:**

| Attribute               | Type | Description                                                      |
| :---------------------- | :--- | :--------------------------------------------------------------- |
| data-open               | -    | Present when the dialog is open.                                 |
| data-closed             | -    | Present when the dialog is closed.                               |
| data-nested             | -    | Present when the dialog is nested within another dialog.         |
| data-nested-dialog-open | -    | Present when the dialog has other open dialogs nested within it. |
| data-starting-style     | -    | Present when the dialog is animating in.                         |
| data-ending-style       | -    | Present when the dialog is animating out.                        |

### Popup

A container for the alert dialog contents.
Renders a `<div>` element.

**Popup Props:**

| Prop         | Type                                                                                                                   | Default | Description                                                                              |
| :----------- | :--------------------------------------------------------------------------------------------------------------------- | :------ | :--------------------------------------------------------------------------------------- |
| initialFocus | `boolean \| RefObject<HTMLElement \| null> \| ((openType: InteractionType) => boolean \| void \| HTMLElement \| null)` | -       | Determines the element to focus when the dialog is opened.\* `false`: Do not move focus. |

- `true`: Move focus based on the default behavior (first tabbable element or popup).
- `RefObject`: Move focus to the ref element.
- `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).&#xA;Return an element to focus, `true` to use the default behavior, or `false`/`undefined` to do nothing. |
  | finalFocus | `boolean \| RefObject<HTMLElement \| null> \| ((closeType: InteractionType) => boolean \| void \| HTMLElement \| null)` | - | Determines the element to focus when the dialog is closed.\* `false`: Do not move focus.
- `true`: Move focus based on the default behavior (trigger or previously focused element).
- `RefObject`: Move focus to the ref element.
- `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).&#xA;Return an element to focus, `true` to use the default behavior, or `false`/`undefined` to do nothing. |
  | className | `string \| ((state: AlertDialog.Popup.State) => string \| undefined)` | - | CSS class applied to the element, or a function that&#xA;returns a class based on the component’s state. |
  | style | `CSSProperties \| ((state: AlertDialog.Popup.State) => CSSProperties \| undefined)` | - | - |
  | render | `ReactElement \| ((props: HTMLProps, state: AlertDialog.Popup.State) => ReactElement)` | - | Allows you to replace the component’s HTML element&#xA;with a different tag, or compose it with another component.Accepts a `ReactElement` or a function that returns the element to render. |

**Popup Data Attributes:**

| Attribute               | Type | Description                                                      |
| :---------------------- | :--- | :--------------------------------------------------------------- |
| data-open               | -    | Present when the dialog is open.                                 |
| data-closed             | -    | Present when the dialog is closed.                               |
| data-nested             | -    | Present when the dialog is nested within another dialog.         |
| data-nested-dialog-open | -    | Present when the dialog has other open dialogs nested within it. |
| data-starting-style     | -    | Present when the dialog is animating in.                         |
| data-ending-style       | -    | Present when the dialog is animating out.                        |

**Popup CSS Variables:**

| Variable         | Type     | Default | Description                                   |
| :--------------- | :------- | :------ | :-------------------------------------------- |
| --nested-dialogs | `number` | -       | Indicates how many dialogs are nested within. |

### Title

A heading that labels the dialog.
Renders an `<h2>` element.

**Title Props:**

| Prop      | Type                                                                                   | Default | Description                                                                                                                                                                                  |
| :-------- | :------------------------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| className | `string \| ((state: AlertDialog.Title.State) => string \| undefined)`                  | -       | CSS class applied to the element, or a function that&#xA;returns a class based on the component’s state.                                                                                     |
| style     | `CSSProperties \| ((state: AlertDialog.Title.State) => CSSProperties \| undefined)`    | -       | -                                                                                                                                                                                            |
| render    | `ReactElement \| ((props: HTMLProps, state: AlertDialog.Title.State) => ReactElement)` | -       | Allows you to replace the component’s HTML element&#xA;with a different tag, or compose it with another component.Accepts a `ReactElement` or a function that returns the element to render. |

### Description

A paragraph with additional information about the alert dialog.
Renders a `<p>` element.

**Description Props:**

| Prop      | Type                                                                                         | Default | Description                                                                                                                                                                                  |
| :-------- | :------------------------------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| className | `string \| ((state: AlertDialog.Description.State) => string \| undefined)`                  | -       | CSS class applied to the element, or a function that&#xA;returns a class based on the component’s state.                                                                                     |
| style     | `CSSProperties \| ((state: AlertDialog.Description.State) => CSSProperties \| undefined)`    | -       | -                                                                                                                                                                                            |
| render    | `ReactElement \| ((props: HTMLProps, state: AlertDialog.Description.State) => ReactElement)` | -       | Allows you to replace the component’s HTML element&#xA;with a different tag, or compose it with another component.Accepts a `ReactElement` or a function that returns the element to render. |

### Close

A button that closes the alert dialog.
Renders a `<button>` element.

**Close Props:**

| Prop         | Type                                                                                   | Default | Description                                                                                                                                                                                  |
| :----------- | :------------------------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nativeButton | `boolean`                                                                              | `true`  | Whether the component renders a native `<button>` element when replacing it&#xA;via the `render` prop.&#xA;Set to `false` if the rendered element is not a button (e.g. `<div>`).            |
| className    | `string \| ((state: AlertDialog.Close.State) => string \| undefined)`                  | -       | CSS class applied to the element, or a function that&#xA;returns a class based on the component’s state.                                                                                     |
| style        | `CSSProperties \| ((state: AlertDialog.Close.State) => CSSProperties \| undefined)`    | -       | -                                                                                                                                                                                            |
| render       | `ReactElement \| ((props: HTMLProps, state: AlertDialog.Close.State) => ReactElement)` | -       | Allows you to replace the component’s HTML element&#xA;with a different tag, or compose it with another component.Accepts a `ReactElement` or a function that returns the element to render. |

**Close Data Attributes:**

| Attribute     | Type | Description                          |
| :------------ | :--- | :----------------------------------- |
| data-disabled | -    | Present when the button is disabled. |
