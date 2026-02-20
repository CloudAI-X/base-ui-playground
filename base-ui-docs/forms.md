---
title: Forms
subtitle: A guide to building forms with Base UI components.
description: A guide to building forms with Base UI components.
---

# Forms

A guide to building forms with Base UI components.

Base UI form control components extend the native [constraint validation API](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#the-constraint-validation-api) so you can build forms for collecting user input or providing control over an interface. They also integrate seamlessly with third-party libraries like [React Hook Form](/react/handbook/forms.md) and [TanStack Form](/react/handbook/forms.md).

## Demo

### Tailwind

This example shows how to implement the component using Tailwind CSS.

```tsx
/* index.tsx */
'use client';
import * as React from 'react';
import { ChevronDown, ChevronsUpDown, Check, Plus, Minus } from 'lucide-react';
import { Button } from './button';
import { CheckboxGroup } from './checkbox-group';
import { Form } from './form';
import { RadioGroup } from './radio-group';
import { ToastProvider, useToastManager } from './toast';
import * as Autocomplete from './autocomplete';
import * as Checkbox from './checkbox';
import * as Combobox from './combobox';
import * as Field from './field';
import * as Fieldset from './fieldset';
import * as NumberField from './number-field';
import * as Radio from './radio';
import * as Select from './select';
import * as Slider from './slider';
import * as Switch from './switch';

function ExampleForm() {
  const toastManager = useToastManager();
  return (
    <Form
      aria-label="Launch new cloud server"
      onFormSubmit={(formValues) => {
        toastManager.add({
          title: 'Form submitted',
          description: 'The form contains these values:',
          data: formValues,
        });
      }}
    >
      <Field.Root name="serverName">
        <Field.Label>Server name</Field.Label>
        <Field.Control
          defaultValue=""
          placeholder="e.g. api-server-01"
          required
          minLength={3}
          pattern=".*[A-Za-z].*"
        />
        <Field.Description>Must be 3 or more characters long</Field.Description>
        <Field.Error />
      </Field.Root>

      <Field.Root name="region">
        <Combobox.Root items={REGIONS} required>
          <div className="relative flex flex-col gap-1 text-sm leading-5 font-medium text-gray-900">
            <Field.Label>Region</Field.Label>
            <Combobox.Input placeholder="e.g. eu-central-1" />
            <div className="absolute right-2 bottom-0 flex h-10 items-center justify-center text-gray-600">
              <Combobox.Clear />
              <Combobox.Trigger>
                <ChevronDown className="size-4" />
              </Combobox.Trigger>
            </div>
          </div>
          <Combobox.Portal>
            <Combobox.Positioner>
              <Combobox.Popup>
                <Combobox.Empty>No matches</Combobox.Empty>
                <Combobox.List>
                  {(region: string) => {
                    return (
                      <Combobox.Item key={region} value={region}>
                        <Combobox.ItemIndicator>
                          <Check className="size-4" />
                        </Combobox.ItemIndicator>
                        <div className="col-start-2">{region}</div>
                      </Combobox.Item>
                    );
                  }}
                </Combobox.List>
              </Combobox.Popup>
            </Combobox.Positioner>
          </Combobox.Portal>
        </Combobox.Root>
        <Field.Error />
      </Field.Root>

      <Field.Root name="containerImage">
        <Autocomplete.Root
          items={IMAGES}
          mode="both"
          itemToStringValue={(itemValue: Image) => itemValue.url}
          required
        >
          <Field.Label>Container image</Field.Label>
          <Autocomplete.Input placeholder="e.g. docker.io/library/node:latest" />
          <Field.Description>Enter a registry URL with optional tags</Field.Description>
          <Autocomplete.Portal>
            <Autocomplete.Positioner>
              <Autocomplete.Popup>
                <Autocomplete.List>
                  {(image: Image) => {
                    return (
                      <Autocomplete.Item key={image.url} value={image}>
                        <span className="text-base leading-6">{image.name}</span>
                        <span className="font-mono whitespace-nowrap text-xs leading-4 opacity-80">
                          {image.url}
                        </span>
                      </Autocomplete.Item>
                    );
                  }}
                </Autocomplete.List>
              </Autocomplete.Popup>
            </Autocomplete.Positioner>
          </Autocomplete.Portal>
        </Autocomplete.Root>
        <Field.Error />
      </Field.Root>

      <Field.Root name="serverType">
        <Field.Label className="cursor-default" nativeLabel={false} render={<div />}>
          Server type
        </Field.Label>
        <Select.Root items={SERVER_TYPES} required>
          <Select.Trigger className="w-48">
            <Select.Value />
            <Select.Icon>
              <ChevronsUpDown className="size-4" />
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Positioner>
              <Select.Popup>
                <Select.ScrollUpArrow />
                <Select.List>
                  {SERVER_TYPES.map(({ label, value }) => {
                    return (
                      <Select.Item key={value} value={value}>
                        <Select.ItemIndicator>
                          <Check className="size-4" />
                        </Select.ItemIndicator>
                        <Select.ItemText>{label}</Select.ItemText>
                      </Select.Item>
                    );
                  })}
                </Select.List>
                <Select.ScrollDownArrow />
              </Select.Popup>
            </Select.Positioner>
          </Select.Portal>
        </Select.Root>
        <Field.Error />
      </Field.Root>

      <Field.Root name="numOfInstances">
        <NumberField.Root defaultValue={undefined} min={1} max={64} required>
          <Field.Label>Number of instances</Field.Label>
          <NumberField.Group>
            <NumberField.Decrement>
              <Minus className="size-4" />
            </NumberField.Decrement>
            <NumberField.Input className="!w-16" />
            <NumberField.Increment>
              <Plus className="size-4" />
            </NumberField.Increment>
          </NumberField.Group>
        </NumberField.Root>
        <Field.Error />
      </Field.Root>

      <Field.Root name="scalingThreshold">
        <Fieldset.Root
          render={
            <Slider.Root
              defaultValue={[0.2, 0.8]}
              thumbAlignment="edge"
              min={0}
              max={1}
              step={0.01}
              format={{
                style: 'percent',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }}
              className="w-98/100 gap-y-2"
            />
          }
        >
          <Fieldset.Legend>Scaling threshold</Fieldset.Legend>
          <Slider.Value className="col-start-2 text-end" />
          <Slider.Control>
            <Slider.Track>
              <Slider.Indicator />
              <Slider.Thumb index={0} />
              <Slider.Thumb index={1} />
            </Slider.Track>
          </Slider.Control>
        </Fieldset.Root>
      </Field.Root>

      <Field.Root name="storageType">
        <Fieldset.Root render={<RadioGroup className="gap-4" defaultValue="ssd" />}>
          <Fieldset.Legend className="-mt-px">Storage type</Fieldset.Legend>
          <Field.Item>
            <Field.Label>
              <Radio.Root value="ssd">
                <Radio.Indicator />
              </Radio.Root>
              SSD
            </Field.Label>
          </Field.Item>
          <Field.Item>
            <Field.Label>
              <Radio.Root value="hdd">
                <Radio.Indicator />
              </Radio.Root>
              HDD
            </Field.Label>
          </Field.Item>
        </Fieldset.Root>
      </Field.Root>

      <Field.Root name="restartOnFailure">
        <Field.Label className="gap-4">
          Restart on failure
          <Switch.Root defaultChecked>
            <Switch.Thumb />
          </Switch.Root>
        </Field.Label>
      </Field.Root>

      <Field.Root name="allowedNetworkProtocols">
        <Fieldset.Root render={<CheckboxGroup defaultValue={[]} />}>
          <Fieldset.Legend className="mb-2">Allowed network protocols</Fieldset.Legend>
          <div className="flex gap-4">
            {['http', 'https', 'ssh'].map((val) => {
              return (
                <Field.Item key={val}>
                  <Field.Label className="uppercase">
                    <Checkbox.Root value={val}>
                      <Checkbox.Indicator>
                        <Check className="size-3" />
                      </Checkbox.Indicator>
                    </Checkbox.Root>
                    {val}
                  </Field.Label>
                </Field.Item>
              );
            })}
          </div>
        </Fieldset.Root>
      </Field.Root>

      <Button type="submit" className="mt-3">
        Launch server
      </Button>
    </Form>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <ExampleForm />
    </ToastProvider>
  );
}

function cartesian<T extends string[][]>(...arrays: T): string[][] {
  return arrays.reduce<string[][]>(
    (acc, curr) => acc.flatMap((a) => curr.map((b) => [...a, b])),
    [[]],
  );
}

const REGIONS = cartesian(['us', 'eu', 'ap'], ['central', 'east', 'west'], ['1', '2', '3']).map(
  (part) => part.join('-'),
);

interface Image {
  url: string;
  name: string;
}
/* prettier-ignore */
const IMAGES: Image[] = ['nginx:1.29-alpine', 'node:22-slim', 'postgres:18', 'redis:8.2.2-alpine'].map((name) => ({
  url: `docker.io/library/${name}`,
  name,
}));

const SERVER_TYPES = [
  { label: 'Select server type', value: null },
  ...cartesian(['t', 'm'], ['1', '2'], ['small', 'medium', 'large']).map((part) => {
    const value = part.join('.').replace('.', '');
    return { label: value, value };
  }),
];
```

```tsx
/* button.tsx */
import * as React from 'react';
import { Button as BaseButton } from '@base-ui/react/button';
import clsx from 'clsx';

export function Button({ className, ...props }: React.ComponentPropsWithoutRef<'button'>) {
  return (
    <BaseButton
      type="button"
      className={clsx(
        'flex items-center justify-center h-10 px-3.5 m-0 outline-0 border border-gray-200 rounded-md bg-gray-50 font-inherit text-base font-medium leading-6 text-gray-900 select-none hover:data-[disabled]:bg-gray-50 hover:bg-gray-100 active:data-[disabled]:bg-gray-50 active:bg-gray-200 active:shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)] active:border-t-gray-300 active:data-[disabled]:shadow-none active:data-[disabled]:border-t-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-800 focus-visible:-outline-offset-1 data-[disabled]:text-gray-500',
        className,
      )}
      {...props}
    />
  );
}
```

```tsx
/* checkbox-group.tsx */
import * as React from 'react';
import clsx from 'clsx';
import { CheckboxGroup as BaseCheckboxGroup } from '@base-ui/react/checkbox-group';

export function CheckboxGroup({ className, ...props }: BaseCheckboxGroup.Props) {
  return (
    <BaseCheckboxGroup
      className={clsx('flex flex-col items-start gap-1 text-gray-900', className)}
      {...props}
    />
  );
}
```

```tsx
/* form.tsx */
import * as React from 'react';
import clsx from 'clsx';
import { Form as BaseForm } from '@base-ui/react/form';

export function Form({ className, ...props }: BaseForm.Props) {
  return (
    <BaseForm
      className={clsx('flex w-full max-w-3xs sm:max-w-[20rem] flex-col gap-5', className)}
      {...props}
    />
  );
}
```

```tsx
/* radio-group.tsx */
import * as React from 'react';
import clsx from 'clsx';
import { RadioGroup as BaseRadioGroup } from '@base-ui/react/radio-group';

export function RadioGroup({ className, ...props }: BaseRadioGroup.Props) {
  return (
    <BaseRadioGroup
      className={clsx('w-full flex flex-row items-start gap-1 text-gray-900', className)}
      {...props}
    />
  );
}
```

```tsx
/* toast.tsx */
'use client';
import * as React from 'react';
import { Toast } from '@base-ui/react/toast';
import { X } from 'lucide-react';

function Toasts() {
  const { toasts } = Toast.useToastManager();
  return toasts.map((toast) => (
    <Toast.Root
      key={toast.id}
      toast={toast}
      className="[--gap:0.75rem] [--peek:0.75rem] [--scale:calc(max(0,1-(var(--toast-index)*0.1)))] [--shrink:calc(1-var(--scale))] [--height:var(--toast-frontmost-height,var(--toast-height))] [--offset-y:calc(var(--toast-offset-y)*-1+calc(var(--toast-index)*var(--gap)*-1)+var(--toast-swipe-movement-y))] absolute right-0 bottom-0 left-auto z-[calc(1000-var(--toast-index))] mr-0 w-full origin-bottom [transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)-(var(--toast-index)*var(--peek))-(var(--shrink)*var(--height))))_scale(var(--scale))] rounded-lg border border-gray-200 bg-gray-50 bg-clip-padding p-4 shadow-lg select-none after:absolute after:top-full after:left-0 after:h-[calc(var(--gap)+1px)] after:w-full after:content-[''] data-[ending-style]:opacity-0 data-[limited]:opacity-0 data-[starting-style]:[transform:translateY(150%)] [&[data-ending-style]:not([data-limited]):not([data-swipe-direction])]:[transform:translateY(150%)] data-[ending-style]:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))] data-[ending-style]:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))] data-[ending-style]:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))] data-[ending-style]:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))] h-[var(--height)] [transition:transform_0.5s_cubic-bezier(0.22,1,0.36,1),opacity_0.5s,height_0.15s]"
    >
      <Toast.Content className="overflow-hidden transition-opacity [transition-duration:250ms]">
        <Toast.Title className="text-[0.975rem] leading-5 font-medium" />
        <Toast.Description className="text-[0.925rem] leading-5 text-gray-700" />
        <div
          className="text-xs mt-2 p-3 py-2 bg-gray-100 text-gray-900 font-medium rounded-md select-text"
          data-swipe-ignore
        >
          <pre className="whitespace-pre-wrap">{JSON.stringify(toast.data, null, 2)}</pre>
        </div>
        <Toast.Close
          className="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded border-none bg-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          aria-label="Close"
        >
          <X className="size-4" />
        </Toast.Close>
      </Toast.Content>
    </Toast.Root>
  ));
}

export function ToastProvider(props: { children: React.ReactNode }) {
  return (
    <Toast.Provider limit={1}>
      {props.children}
      <Toast.Portal>
        <Toast.Viewport className="fixed z-10 top-auto right-[1rem] bottom-[1rem] mx-auto flex w-[250px] sm:right-[2rem] sm:bottom-[2rem] sm:w-[360px]">
          <Toasts />
        </Toast.Viewport>
      </Toast.Portal>
    </Toast.Provider>
  );
}

export const useToastManager = Toast.useToastManager;
```

```tsx
/* autocomplete.tsx */
import * as React from 'react';
import clsx from 'clsx';
import { Autocomplete } from '@base-ui/react/autocomplete';

export function Root(props: Autocomplete.Root.Props<any>) {
  return <Autocomplete.Root {...props} />;
}

export const Input = React.forwardRef<HTMLInputElement, Autocomplete.Input.Props>(function Input(
  { className, ...props }: Autocomplete.Input.Props,
  forwardedRef: React.ForwardedRef<HTMLInputElement>,
) {
  return (
    <Autocomplete.Input
      ref={forwardedRef}
      className={clsx(
        'bg-[canvas] h-10 w-[16rem] md:w-[20rem] font-normal rounded-md border border-gray-200 pl-3.5 text-base text-gray-900 focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-blue-800',
        className,
      )}
      {...props}
    />
  );
});

export function Portal(props: Autocomplete.Portal.Props) {
  return <Autocomplete.Portal {...props} />;
}

export function Positioner({ className, ...props }: Autocomplete.Positioner.Props) {
  return (
    <Autocomplete.Positioner
      className={clsx('outline-none data-[empty]:hidden', className)}
      sideOffset={4}
      {...props}
    />
  );
}

export function Popup({ className, ...props }: Autocomplete.Popup.Props) {
  return (
    <Autocomplete.Popup
      className={clsx(
        'w-[var(--anchor-width)] max-h-[min(var(--available-height),23rem)] max-w-[var(--available-width)] overflow-y-auto scroll-pt-2 scroll-pb-2 overscroll-contain rounded-md bg-[canvas] py-2 text-gray-900 shadow-lg shadow-gray-200 outline-1 outline-gray-200 dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300',
        className,
      )}
      {...props}
    />
  );
}

export function List(props: Autocomplete.List.Props) {
  return <Autocomplete.List {...props} />;
}

export function Item({ className, ...props }: Autocomplete.Item.Props) {
  return (
    <Autocomplete.Item
      className={clsx(
        'flex flex-col gap-0.25 cursor-default py-2 pr-8 pl-4 text-base leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-2 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded data-[highlighted]:before:bg-gray-900',
        className,
      )}
      {...props}
    />
  );
}
```

```tsx
/* checkbox.tsx */
import * as React from 'react';
import clsx from 'clsx';
import { Checkbox } from '@base-ui/react/checkbox';

export function Root({ className, ...props }: Checkbox.Root.Props) {
  return (
    <Checkbox.Root
      className={clsx(
        'flex size-5 items-center justify-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 data-[checked]:bg-gray-900 data-[unchecked]:border data-[unchecked]:border-gray-300',
        className,
      )}
      {...props}
    />
  );
}

export function Indicator({ className, ...props }: Checkbox.Indicator.Props) {
  return (
    <Checkbox.Indicator
      className={clsx('flex text-gray-50 data-[unchecked]:hidden', className)}
      {...props}
    />
  );
}
```

```tsx
/* combobox.tsx */
import * as React from 'react';
import clsx from 'clsx';
import { Combobox } from '@base-ui/react/combobox';
import { X } from 'lucide-react';

export function Root(props: Combobox.Root.Props<any, any>) {
  return <Combobox.Root {...props} />;
}

export const Input = React.forwardRef<HTMLInputElement, Combobox.Input.Props>(function Input(
  { className, ...props }: Combobox.Input.Props,
  forwardedRef: React.ForwardedRef<HTMLInputElement>,
) {
  return (
    <Combobox.Input
      ref={forwardedRef}
      className={clsx(
        'h-10 w-64 rounded-md font-normal border border-gray-200 pl-3.5 text-base text-gray-900 bg-[canvas] focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-blue-800',
        className,
      )}
      {...props}
    />
  );
});

export function Clear({ className, ...props }: Combobox.Clear.Props) {
  return (
    <Combobox.Clear
      className={clsx(
        'combobox-clear flex h-10 w-6 items-center justify-center rounded bg-transparent p-0',
        className,
      )}
      {...props}
    >
      <X className="size-4" />
    </Combobox.Clear>
  );
}

export function Trigger({ className, ...props }: Combobox.Trigger.Props) {
  return (
    <Combobox.Trigger
      className={clsx(
        'flex h-10 w-6 items-center justify-center rounded bg-transparent p-0',
        className,
      )}
      {...props}
    />
  );
}

export function Portal(props: Combobox.Portal.Props) {
  return <Combobox.Portal {...props} />;
}

export function Positioner({ className, ...props }: Combobox.Positioner.Props) {
  return (
    <Combobox.Positioner className={clsx('outline-none', className)} sideOffset={4} {...props} />
  );
}

export function Popup({ className, ...props }: Combobox.Popup.Props) {
  return (
    <Combobox.Popup
      className={clsx(
        'w-[var(--anchor-width)] max-h-[23rem] max-w-[var(--available-width)] origin-[var(--transform-origin)] rounded-md bg-[canvas] text-gray-900 shadow-lg shadow-gray-200 outline-1 outline-gray-200 transition-[transform,scale,opacity] data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0 dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300 duration-100',
        className,
      )}
      {...props}
    />
  );
}

export function Empty({ className, ...props }: Combobox.Empty.Props) {
  return (
    <Combobox.Empty
      className={clsx('p-4 text-[0.925rem] leading-4 text-gray-600 empty:m-0 empty:p-0', className)}
      {...props}
    />
  );
}

export function List({ className, ...props }: Combobox.List.Props) {
  return (
    <Combobox.List
      className={clsx(
        'outline-0 overflow-y-auto scroll-py-[0.5rem] py-2 overscroll-contain max-h-[min(23rem,var(--available-height))] data-[empty]:p-0',
        className,
      )}
      {...props}
    />
  );
}

export function Item({ className, ...props }: Combobox.Item.Props) {
  return (
    <Combobox.Item
      className={clsx(
        'grid cursor-default grid-cols-[0.75rem_1fr] items-center gap-2 py-2 pr-8 pl-4 text-base leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-2 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900',
        className,
      )}
      {...props}
    />
  );
}

export function ItemIndicator({ className, ...props }: Combobox.ItemIndicator.Props) {
  return <Combobox.ItemIndicator className={clsx('col-start-1', className)} {...props} />;
}
```

```tsx
/* field.tsx */
import * as React from 'react';
import clsx from 'clsx';
import { Field } from '@base-ui/react/field';

export function Root({ className, ...props }: Field.Root.Props) {
  return <Field.Root className={clsx('flex flex-col items-start gap-1', className)} {...props} />;
}

export function Label({ className, ...props }: Field.Label.Props) {
  return (
    <Field.Label
      className={clsx(
        'text-sm font-medium text-gray-900 has-[[role="checkbox"]]:flex has-[[role="checkbox"]]:items-center has-[[role="checkbox"]]:gap-2 has-[[role="radio"]]:flex has-[[role="radio"]]:items-center has-[[role="radio"]]:gap-2 has-[[role="switch"]]:flex has-[[role="switch"]]:items-center has-[[role="radio"]]:font-normal',
        className,
      )}
      {...props}
    />
  );
}

export function Description({ className, ...props }: Field.Description.Props) {
  return <Field.Description className={clsx('text-sm text-gray-600', className)} {...props} />;
}

export const Control = React.forwardRef<HTMLInputElement, Field.Control.Props>(
  function FieldControl(
    { className, ...props }: Field.Control.Props,
    forwardedRef: React.ForwardedRef<HTMLInputElement>,
  ) {
    return (
      <Field.Control
        ref={forwardedRef}
        className={clsx(
          'h-10 w-full max-w-xs rounded-md bg-[canvas] border border-gray-200 pl-3.5 text-base text-gray-900 focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-blue-800',
          className,
        )}
        {...props}
      />
    );
  },
);

export function Error({ className, ...props }: Field.Error.Props) {
  return <Field.Error className={clsx('text-sm text-red-800', className)} {...props} />;
}

export function Item(props: Field.Item.Props) {
  return <Field.Item {...props} />;
}
```

```tsx
/* fieldset.tsx */
import * as React from 'react';
import clsx from 'clsx';
import { Fieldset } from '@base-ui/react/fieldset';

export function Root(props: Fieldset.Root.Props) {
  return <Fieldset.Root {...props} />;
}

export function Legend({ className, ...props }: Fieldset.Legend.Props) {
  return (
    <Fieldset.Legend className={clsx('text-sm font-medium text-gray-900', className)} {...props} />
  );
}
```

```tsx
/* number-field.tsx */
import * as React from 'react';
import clsx from 'clsx';
import { NumberField } from '@base-ui/react/number-field';

export function Root({ className, ...props }: NumberField.Root.Props) {
  return (
    <NumberField.Root className={clsx('flex flex-col items-start gap-1', className)} {...props} />
  );
}

export function Group({ className, ...props }: NumberField.Group.Props) {
  return <NumberField.Group className={clsx('flex', className)} {...props} />;
}

export function Decrement({ className, ...props }: NumberField.Decrement.Props) {
  return (
    <NumberField.Decrement
      className={clsx(
        'flex size-10 items-center justify-center rounded-tl-md rounded-bl-md border border-gray-200 bg-gray-50 bg-clip-padding text-gray-900 select-none hover:bg-gray-100 active:bg-gray-100',
        className,
      )}
      {...props}
    />
  );
}

export const Input = React.forwardRef<HTMLInputElement, NumberField.Input.Props>(function Input(
  { className, ...props }: NumberField.Input.Props,
  forwardedRef: React.ForwardedRef<HTMLInputElement>,
) {
  return (
    <NumberField.Input
      ref={forwardedRef}
      className={clsx(
        'h-10 w-24 border-t border-b border-gray-200 text-center text-base text-gray-900 tabular-nums focus:z-1 focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-blue-800',
        className,
      )}
      {...props}
    />
  );
});

export function Increment({ className, ...props }: NumberField.Increment.Props) {
  return (
    <NumberField.Increment
      className={clsx(
        'flex size-10 items-center justify-center rounded-tr-md rounded-br-md border border-gray-200 bg-gray-50 bg-clip-padding text-gray-900 select-none hover:bg-gray-100 active:bg-gray-100',
        className,
      )}
      {...props}
    />
  );
}
```

```tsx
/* radio.tsx */
import * as React from 'react';
import clsx from 'clsx';
import { Radio } from '@base-ui/react/radio';

export function Root({ className, ...props }: Radio.Root.Props) {
  return (
    <Radio.Root
      className={clsx(
        'flex size-5 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 data-[checked]:bg-gray-900 data-[unchecked]:border data-[unchecked]:border-gray-300',
        className,
      )}
      {...props}
    />
  );
}

export function Indicator({ className, ...props }: Radio.Indicator.Props) {
  return (
    <Radio.Indicator
      className={clsx(
        'flex before:size-2 before:rounded-full before:bg-gray-50 data-[unchecked]:hidden',
        className,
      )}
      {...props}
    />
  );
}
```

```tsx
/* select.tsx */
import * as React from 'react';
import clsx from 'clsx';
import { Select } from '@base-ui/react/select';

export function Root(props: Select.Root.Props<any>) {
  return <Select.Root {...props} />;
}

export function Trigger({ className, ...props }: Select.Trigger.Props) {
  return (
    <Select.Trigger
      className={clsx(
        'flex h-10 min-w-36 items-center justify-between gap-3 rounded-md border border-gray-200 pr-3 pl-3.5 text-base text-gray-900 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 data-[popup-open]:bg-gray-100 cursor-default not-[[data-filled]]:text-gray-500 bg-[canvas]',
        className,
      )}
      {...props}
    />
  );
}

export function Value({ className, ...props }: Select.Value.Props) {
  return <Select.Value className={clsx('', className)} {...props} />;
}

export function Icon({ className, ...props }: Select.Icon.Props) {
  return <Select.Icon className={clsx('flex', className)} {...props} />;
}

export function Portal(props: Select.Portal.Props) {
  return <Select.Portal {...props} />;
}

export function Positioner({ className, ...props }: Select.Positioner.Props) {
  return (
    <Select.Positioner
      className={clsx('outline-none select-none z-10', className)}
      sideOffset={8}
      {...props}
    />
  );
}

export function Popup({ className, ...props }: Select.Popup.Props) {
  return (
    <Select.Popup
      className={clsx(
        'group origin-[var(--transform-origin)] bg-clip-padding rounded-md bg-[canvas] text-gray-900 shadow-lg shadow-gray-200 outline outline-gray-200 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[side=none]:data-[ending-style]:transition-none data-[starting-style]:scale-90 data-[starting-style]:opacity-0 data-[side=none]:data-[starting-style]:scale-100 data-[side=none]:data-[starting-style]:opacity-100 data-[side=none]:data-[starting-style]:transition-none dark:shadow-none dark:outline-gray-300',
        className,
      )}
      {...props}
    />
  );
}

export function ScrollUpArrow({ className, ...props }: Select.ScrollUpArrow.Props) {
  return (
    <Select.ScrollUpArrow
      className={clsx(
        "top-0 z-[1] flex h-4 w-full cursor-default items-center justify-center rounded-md bg-[canvas] text-center text-xs before:absolute data-[side=none]:before:top-[-100%] before:left-0 before:h-full before:w-full before:content-['']",
        className,
      )}
      {...props}
    />
  );
}

export function ScrollDownArrow({ className, ...props }: Select.ScrollDownArrow.Props) {
  return (
    <Select.ScrollDownArrow
      className={clsx(
        "bottom-0 z-[1] flex h-4 w-full cursor-default items-center justify-center rounded-md bg-[canvas] text-center text-xs before:absolute before:left-0 before:h-full before:w-full before:content-[''] data-[side=none]:before:bottom-[-100%]",
        className,
      )}
      {...props}
    />
  );
}

export function List({ className, ...props }: Select.List.Props) {
  return (
    <Select.List
      className={clsx(
        'relative py-1 scroll-py-6 overflow-y-auto max-h-[var(--available-height)]',
        className,
      )}
      {...props}
    />
  );
}

export function Item({ className, ...props }: Select.Item.Props) {
  return (
    <Select.Item
      className={clsx(
        'grid min-w-[var(--anchor-width)] cursor-default grid-cols-[0.75rem_1fr] items-center gap-3 py-2 pr-4 pl-2.5 text-sm leading-4 outline-none select-none group-data-[side=none]:min-w-[calc(var(--anchor-width)+1rem)] group-data-[side=none]:pr-12 group-data-[side=none]:text-base group-data-[side=none]:leading-4 data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900 pointer-coarse:py-2.5 pointer-coarse:text-[0.925rem]',
        className,
      )}
      {...props}
    />
  );
}

export function ItemIndicator({ className, ...props }: Select.ItemIndicator.Props) {
  return <Select.ItemIndicator className={clsx('col-start-1', className)} {...props} />;
}

export function ItemText({ className, ...props }: Select.ItemText.Props) {
  return <Select.ItemText className={clsx('col-start-2', className)} {...props} />;
}
```

```tsx
/* slider.tsx */
import * as React from 'react';
import clsx from 'clsx';
import { Slider } from '@base-ui/react/slider';

export function Root({ className, ...props }: Slider.Root.Props<any>) {
  return <Slider.Root className={clsx('grid grid-cols-2', className)} {...props} />;
}

export function Value({ className, ...props }: Slider.Value.Props) {
  return (
    <Slider.Value className={clsx('text-sm font-medium text-gray-900', className)} {...props} />
  );
}

export function Control({ className, ...props }: Slider.Control.Props) {
  return (
    <Slider.Control
      className={clsx('flex col-span-2 touch-none items-center py-3 select-none', className)}
      {...props}
    />
  );
}

export function Track({ className, ...props }: Slider.Track.Props) {
  return (
    <Slider.Track
      className={clsx(
        'h-1 w-full rounded bg-gray-200 shadow-[inset_0_0_0_1px] shadow-gray-200 select-none',
        className,
      )}
      {...props}
    />
  );
}

export function Indicator({ className, ...props }: Slider.Indicator.Props) {
  return (
    <Slider.Indicator className={clsx('rounded bg-gray-700 select-none', className)} {...props} />
  );
}

export function Thumb({ className, ...props }: Slider.Thumb.Props) {
  return (
    <Slider.Thumb
      className={clsx(
        'size-4 rounded-full bg-white outline outline-gray-300 select-none has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-blue-800',
        className,
      )}
      {...props}
    />
  );
}
```

```tsx
/* switch.tsx */
import * as React from 'react';
import clsx from 'clsx';
import { Switch } from '@base-ui/react/switch';

export function Root({ className, ...props }: Switch.Root.Props) {
  return (
    <Switch.Root
      className={clsx(
        'relative flex h-6 w-10 rounded-full bg-gradient-to-r from-gray-700 from-35% to-gray-200 to-65% bg-[length:6.5rem_100%] bg-[100%_0%] bg-no-repeat p-px shadow-[inset_0_1.5px_2px] shadow-gray-200 outline outline-1 -outline-offset-1 outline-gray-200 transition-[background-position,box-shadow] duration-[125ms] ease-[cubic-bezier(0.26,0.75,0.38,0.45)] before:absolute before:rounded-full before:outline-offset-2 before:outline-blue-800 focus-visible:before:inset-0 focus-visible:before:outline focus-visible:before:outline-2 active:bg-gray-100 data-[checked]:bg-[0%_0%] data-[checked]:active:bg-gray-500 dark:from-gray-500 dark:shadow-black/75 dark:outline-white/15 dark:data-[checked]:shadow-none',
        className,
      )}
      {...props}
    />
  );
}

export function Thumb({ className, ...props }: Switch.Thumb.Props) {
  return (
    <Switch.Thumb
      className={clsx(
        'aspect-square h-full rounded-full bg-white shadow-[0_0_1px_1px,0_1px_1px,1px_2px_4px_-1px] shadow-gray-100 transition-transform duration-150 data-[checked]:translate-x-4 dark:shadow-black/25',
        className,
      )}
      {...props}
    />
  );
}
```

## Naming form controls

Form controls must have an accessible name in order to be recognized by assistive technologies. `<Field.Label>` and `<Field.Description>` automatically assign the accessible name and description to their associated control:

```tsx {8-9, 14-15} title="Labeling select and slider"
import { Form } from '@base-ui/react/form';
import { Field } from '@base-ui/react/field';
import { Select } from '@base-ui/react/select';
import { Slider } from '@base-ui/react/slider';

<Form>
  <Field.Root>
    <Field.Label>Time zone</Field.Label>
    <Field.Description>Used for notifications and reminders</Field.Description>
    <Select.Root />
  </Field.Root>

  <Field.Root>
    <Field.Label>Zoom level</Field.Label>
    <Field.Description>Adjust the size of the user interface</Field.Description>
    <Slider.Root />
  </Field.Root>
</Form>;
```

You can implicitly label `<Checkbox>`, `<Radio>` and `<Switch>` components by enclosing them with `<Field.Label>`:

```tsx title="Implicitly labeling a switch"
import { Field } from '@base-ui/react/field';
import { Switch } from '@base-ui/react/switch';

<Field.Root>
  <Field.Label>
    <Switch.Root />
    Developer mode
  </Field.Label>
  <Field.Description>Enables extra tools for web developers</Field.Description>
</Field.Root>;
```

Compose `<Fieldset>` when a single label applies to multiple controls, such as a range slider with multiple thumbs or a section that combines several inputs. For checkbox and radio groups, keep the group label in `<Fieldset.Legend>` and wrap each option with `<Field.Item>`:

```tsx {10-11, 18, 22-23, 26} title="Composing range slider and radio group with fieldset"
import { Form } from '@base-ui/react/form';
import { Field } from '@base-ui/react/field';
import { Fieldset } from '@base-ui/react/fieldset';
import { Radio } from '@base-ui/react/radio';
import { RadioGroup } from '@base-ui/react/radio-group';
import { Slider } from '@base-ui/react/slider';

<Form>
  <Field.Root>
    <Fieldset.Root render={<Slider.Root />}>
      <Fieldset.Legend>Price range</Fieldset.Legend>
      <Slider.Control>
        <Slider.Track>
          <Slider.Thumb />
          <Slider.Thumb />
        </Slider.Track>
      </Slider.Control>
    </Fieldset.Root>
  </Field.Root>

  <Field.Root>
    <Fieldset.Root render={<RadioGroup />}>
      <Fieldset.Legend>Storage type</Fieldset.Legend>
      <Radio.Root value="ssd" />
      <Radio.Root value="hdd" />
    </Fieldset.Root>
  </Field.Root>
</Form>;
```

`<Field.Item>` should enclose each checkbox or radio option so every control has its own label and description:

```tsx {10,14-15,19} title="Explicitly labeling checkboxes in a checkbox group"
import { Form } from '@base-ui/react/form';
import { Field } from '@base-ui/react/field';
import { Fieldset } from '@base-ui/react/fieldset';
import { Checkbox } from '@base-ui/react/checkbox';
import { CheckboxGroup } from '@base-ui/react/checkbox-group';

<Field.Root>
  <Fieldset.Root render={<CheckboxGroup />}>
    <Fieldset.Legend>Backup schedule</Fieldset.Legend>
    <Field.Item>
      <Checkbox.Root value="daily" />
      <Field.Label>Daily</Field.Label>
      <Field.Description>Daily at 00:00</Field.Description>
    </Field.Item>
    <Field.Item>
      <Checkbox.Root value="monthly" />
      <Field.Label>Monthly</Field.Label>
      <Field.Description>On the 5th of every month at 23:59</Field.Description>
    </Field.Item>
  </Fieldset.Root>
</Field.Root>;
```

## Building form fields

Pass the `name` prop to `<Field.Root>` to include the wrapped control's value when a parent form is submitted:

```tsx {6} title="Assigning field name to combobox" "name"
import { Form } from '@base-ui/react/form';
import { Field } from '@base-ui/react/field';
import { Combobox } from '@base-ui/react/combobox';

<Form>
  <Field.Root name="country">
    <Field.Label>Country of residence</Field.Label>
    <Combobox.Root />
  </Field.Root>
</Form>;
```

## Submitting data

You can take over form submission using the native `onSubmit`, or custom `onFormSubmit` props:

```tsx {4-9} title="Native submission using onSubmit"
import { Form } from '@base-ui/react/form';

<Form
  onSubmit={async (event) => {
    // Prevent the browser's default full-page refresh
    event.preventDefault();
    // Create a FormData object
    const formData = new FormData(event.currentTarget);
    // Send the FormData instance in a fetch request
    await fetch('https://api.example.com', {
      method: 'POST',
      body: formData,
    });
  }}
/>;
```

When using `onFormSubmit`, you receive form values as a JavaScript object, with `eventDetails` provided as a second argument. Additionally, `preventDefault()` is automatically called on the native submit event:

```tsx {4-9} title="Submission using onFormSubmit"
import { Form } from '@base-ui/react/form';

<Form
  onFormSubmit={async (formValues) => {
    const payload = {
      product_id: formValues.id,
      order_quantity: formValues.quantity,
    };
    await fetch('https://api.example.com', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }}
/>;
```

## Constraint validation

Base UI form components support native HTML validation attributes for many validation rules:

- `required` specifies a required field.
- `minLength` and `maxLength` specify a valid length for text fields.
- `pattern` specifies a regular expression that the field value must match.
- `step` specifies an increment that numeric field values must be an integral multiple of.

```tsx title="Defining constraint validation on a text field"
import { Field } from '@base-ui/react/field';

<Field.Root name="website">
  <Field.Control type="url" required pattern="https?://.*" />
  <Field.Error />
</Field.Root>;
```

Base UI form components use a hidden input to participate in native form submission and validation.
To anchor the hidden input near a control so the native validation bubble points to the correct area, ensure the component has been given a `name`, and wrap controls in a relatively positioned container for best results.

```tsx title="Positioning hidden inputs" {4,6}
import { Field } from '@base-ui/react/field';
import { Select } from '@base-ui/react/select';

<Field.Root name="apple">
  <Field.Label>Apple</Field.Label>
  <div className="relative">
    <Select.Root />
  </div>
</Field.Root>;
```

## Custom validation

You can add custom validation logic by passing a synchronous or asynchronous validation function to the `validate` prop, which runs after native validations have passed.

Use the `validationMode` prop to configure when validation is performed:

- `onSubmit` (default) validates all fields when the containing `<Form>` is submitted, afterwards invalid fields revalidate when their value changes.
- `onBlur` validates the field when focus moves away.
- `onChange` validates the field when the value changes, for example, after each keypress in a text field or when a checkbox is checked or unchecked.

`validationDebounceTime` can be used to debounce the function in use cases such as asynchronous requests or text fields that validate `onChange`.

```tsx {5-7} title="Text input using custom asynchronous validation"
import { Field } from '@base-ui/react/field';

<Field.Root
  name="username"
  validationMode="onChange"
  validationDebounceTime={300}
  validate={async (value) => {
    if (value === 'admin') {
      /* return an error message when invalid */
      return 'Reserved for system use.';
    }

    const result = await fetch(
      {/* prettier-ignore */},
      /* check the availability of a username from an external API */
    );

    if (!result) {
      return `${value} is unavailable.`;
    }

    /* return `null` when valid */
    return null;
  }}
>
  <Field.Control required minLength={3} />
  <Field.Error />
</Field.Root>;
```

## Server-side validation

You can pass errors returned by (post-submission) server-side validation to the `errors` prop, which will be merged into the client-side field state for display.

This should be an object with field names as keys, and an error string or array of strings as the value. Once a field's value changes, any corresponding error in `errors` will be cleared from the field state.

```tsx title="Displaying errors returned by server-side validation" "errors"
import { Form } from '@base-ui/react/form';
import { Field } from '@base-ui/react/field';

async function submitToServer(/* payload */) {
  return {
    errors: {
      promoCode: 'This promo code has expired',
    },
  };
}

const [errors, setErrors] = React.useState();

<Form
  errors={errors}
  onSubmit={async (event) => {
    event.preventDefault();
    const response = await submitToServer(/* data */);
    setErrors(response.errors);
  }}
>
  <Field.Root name="promoCode" />
</Form>;
```

When using [Server Functions with Form Actions](https://react.dev/reference/rsc/server-functions#server-functions-with-use-action-state) you can return server-side errors from `useActionState` to the `errors` prop. A demo is available [here](/react/components/form.md).

```tsx title="Returning errors from useActionState" "state" "errors" "formAction"
// app/form.tsx
/* prettier-ignore */
'use client';
import { Form } from '@base-ui/react/form';
import { Field } from '@base-ui/react/field';
import { login } from './actions';

const [state, formAction, loading] = React.useActionState(login, {});

<Form action={formAction} errors={state.errors}>
  <Field.Root name="password">
    <Field.Control />
    <Field.Error />
  </Field.Root>
</Form>;

// app/actions.ts
/* prettier-ignore */
'use server';
export async function login(formData: FormData) {
  const result = authenticateUser(formData);

  if (!result.success) {
    return {
      errors: {
        password: 'Invalid username or password',
      },
    };
  }
  /* redirect on the server on success */
}
```

## Displaying errors

Use `<Field.Error>` without `children` to automatically display the field's native error message when invalid. The `match` prop can be used to customize the message based on the validity state, and manage internationalization from your application logic:

```tsx title="Customizing error message for a required field"
<Field.Error match="valueMissing">You must create a username</Field.Error>
```

## React Hook Form

[React Hook Form](https://react-hook-form.com) is a popular library that you can integrate with Base UI to externally manage form and field state for your existing components.

## Demo

### Tailwind

This example shows how to implement the component using Tailwind CSS.

```tsx
/* index.tsx */
'use client';
import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ChevronDown, ChevronsUpDown, Check, Plus, Minus } from 'lucide-react';
import { Button } from './button';
import { CheckboxGroup } from './checkbox-group';
import { Form } from './form';
import { RadioGroup } from './radio-group';
import { ToastProvider, useToastManager } from './toast';
import * as Autocomplete from './autocomplete';
import * as Checkbox from './checkbox';
import * as Combobox from './combobox';
import * as Field from './field';
import * as Fieldset from './fieldset';
import * as NumberField from './number-field';
import * as Radio from './radio';
import * as Select from './select';
import * as Slider from './slider';
import * as Switch from './switch';

interface FormValues {
  serverName: string;
  region: string | null;
  containerImage: string;
  serverType: string | null;
  numOfInstances: number | null;
  scalingThreshold: number[];
  storageType: 'ssd' | 'hdd';
  restartOnFailure: boolean;
  allowedNetworkProtocols: string[];
}

function ReactHookForm() {
  const toastManager = useToastManager();

  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      serverName: '',
      region: null,
      containerImage: '',
      serverType: null,
      numOfInstances: null,
      scalingThreshold: [0.2, 0.8],
      storageType: 'ssd',
      restartOnFailure: true,
      allowedNetworkProtocols: [],
    },
  });

  function submitForm(data: FormValues) {
    toastManager.add({
      title: 'Form submitted',
      description: 'The form contains these values:',
      data,
    });
  }

  return (
    <Form aria-label="Launch new cloud server" onSubmit={handleSubmit(submitForm)}>
      <Controller
        name="serverName"
        control={control}
        rules={{
          required: 'This field is required.',
          minLength: { value: 3, message: 'At least 3 characters.' },
        }}
        render={({
          field: { ref, name, value, onBlur, onChange },
          fieldState: { invalid, isTouched, isDirty, error },
        }) => (
          <Field.Root name={name} invalid={invalid} touched={isTouched} dirty={isDirty}>
            <Field.Label>Server name</Field.Label>
            <Field.Control
              ref={ref}
              value={value}
              onBlur={onBlur}
              onValueChange={onChange}
              placeholder="e.g. api-server-01"
            />
            <Field.Description>Must be 3 or more characters long</Field.Description>
            <Field.Error match={!!error}>{error?.message}</Field.Error>
          </Field.Root>
        )}
      />

      <Controller
        name="region"
        control={control}
        rules={{
          required: 'This field is required.',
        }}
        render={({
          field: { ref, name, value, onBlur, onChange },
          fieldState: { invalid, isTouched, isDirty, error },
        }) => (
          <Field.Root name={name} invalid={invalid} touched={isTouched} dirty={isDirty}>
            <Combobox.Root items={REGIONS} value={value} onValueChange={onChange}>
              <div className="relative flex flex-col gap-1 text-sm leading-5 font-medium text-gray-900">
                <Field.Label>Region</Field.Label>
                <Combobox.Input placeholder="e.g. eu-central-1" ref={ref} onBlur={onBlur} />
                <div className="absolute right-2 bottom-0 flex h-10 items-center justify-center text-gray-600">
                  <Combobox.Clear />
                  <Combobox.Trigger>
                    <ChevronDown className="size-4" />
                  </Combobox.Trigger>
                </div>
              </div>
              <Combobox.Portal>
                <Combobox.Positioner>
                  <Combobox.Popup>
                    <Combobox.Empty>No matches</Combobox.Empty>
                    <Combobox.List>
                      {(region: string) => {
                        return (
                          <Combobox.Item key={region} value={region}>
                            <Combobox.ItemIndicator>
                              <Check className="size-4" />
                            </Combobox.ItemIndicator>
                            <div className="col-start-2">{region}</div>
                          </Combobox.Item>
                        );
                      }}
                    </Combobox.List>
                  </Combobox.Popup>
                </Combobox.Positioner>
              </Combobox.Portal>
            </Combobox.Root>
            <Field.Error match={!!error}>{error?.message}</Field.Error>
          </Field.Root>
        )}
      />

      <Controller
        name="containerImage"
        control={control}
        rules={{
          required: 'This field is required.',
        }}
        render={({
          field: { ref, name, value, onBlur, onChange },
          fieldState: { invalid, isTouched, isDirty, error },
        }) => (
          <Field.Root name={name} invalid={invalid} touched={isTouched} dirty={isDirty}>
            <Autocomplete.Root
              items={IMAGES}
              mode="both"
              itemToStringValue={(itemValue: Image) => itemValue.url}
              value={value}
              onValueChange={onChange}
            >
              <Field.Label>Container image</Field.Label>
              <Autocomplete.Input
                placeholder="e.g. docker.io/library/node:latest"
                ref={ref}
                onBlur={onBlur}
              />
              <Field.Description>Enter a registry URL with optional tags</Field.Description>
              <Autocomplete.Portal>
                <Autocomplete.Positioner>
                  <Autocomplete.Popup>
                    <Autocomplete.List>
                      {(image: Image) => {
                        return (
                          <Autocomplete.Item key={image.url} value={image}>
                            <span className="text-base leading-6">{image.name}</span>
                            <span className="font-mono whitespace-nowrap text-xs leading-4 opacity-80">
                              {image.url}
                            </span>
                          </Autocomplete.Item>
                        );
                      }}
                    </Autocomplete.List>
                  </Autocomplete.Popup>
                </Autocomplete.Positioner>
              </Autocomplete.Portal>
            </Autocomplete.Root>
            <Field.Error match={!!error}>{error?.message}</Field.Error>
          </Field.Root>
        )}
      />

      <Controller
        name="serverType"
        control={control}
        rules={{
          required: 'This field is required.',
        }}
        render={({
          field: { ref, name, value, onBlur, onChange },
          fieldState: { invalid, isTouched, isDirty, error },
        }) => (
          <Field.Root name={name} invalid={invalid} touched={isTouched} dirty={isDirty}>
            <Field.Label className="cursor-default" nativeLabel={false} render={<div />}>
              Server type
            </Field.Label>
            <Select.Root items={SERVER_TYPES} value={value} onValueChange={onChange} inputRef={ref}>
              <Select.Trigger className="w-48" onBlur={onBlur}>
                <Select.Value />
                <Select.Icon>
                  <ChevronsUpDown className="size-4" />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Positioner>
                  <Select.Popup>
                    <Select.ScrollUpArrow />
                    <Select.List>
                      {SERVER_TYPES.map(({ label, value: serverType }) => {
                        return (
                          <Select.Item key={serverType} value={serverType}>
                            <Select.ItemIndicator>
                              <Check className="size-4" />
                            </Select.ItemIndicator>
                            <Select.ItemText>{label}</Select.ItemText>
                          </Select.Item>
                        );
                      })}
                    </Select.List>
                    <Select.ScrollDownArrow />
                  </Select.Popup>
                </Select.Positioner>
              </Select.Portal>
            </Select.Root>
            <Field.Error match={!!error}>{error?.message}</Field.Error>
          </Field.Root>
        )}
      />

      <Controller
        name="numOfInstances"
        control={control}
        rules={{
          required: 'This field is required.',
        }}
        render={({
          field: { ref, name, value, onBlur, onChange },
          fieldState: { invalid, isTouched, isDirty, error },
        }) => (
          <Field.Root name={name} invalid={invalid} touched={isTouched} dirty={isDirty}>
            <NumberField.Root value={value} min={1} max={64} onValueChange={onChange}>
              <Field.Label>Number of instances</Field.Label>
              <NumberField.Group>
                <NumberField.Decrement>
                  <Minus className="size-4" />
                </NumberField.Decrement>
                <NumberField.Input className="!w-16" ref={ref} onBlur={onBlur} />
                <NumberField.Increment>
                  <Plus className="size-4" />
                </NumberField.Increment>
              </NumberField.Group>
            </NumberField.Root>
            <Field.Error match={!!error}>{error?.message}</Field.Error>
          </Field.Root>
        )}
      />

      <Controller
        name="scalingThreshold"
        control={control}
        render={({
          field: { ref, name, value, onBlur, onChange },
          fieldState: { invalid, isTouched, isDirty },
        }) => (
          <Field.Root name={name} invalid={invalid} touched={isTouched} dirty={isDirty}>
            <Fieldset.Root
              render={
                <Slider.Root
                  value={value}
                  onValueChange={onChange}
                  onValueCommitted={onChange}
                  thumbAlignment="edge"
                  min={0}
                  max={1}
                  step={0.01}
                  format={{
                    style: 'percent',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }}
                  className="w-98/100 gap-y-2"
                />
              }
            >
              <Fieldset.Legend>Scaling threshold</Fieldset.Legend>
              <Slider.Value className="col-start-2 text-end" />
              <Slider.Control>
                <Slider.Track>
                  <Slider.Indicator />
                  <Slider.Thumb index={0} onBlur={onBlur} inputRef={ref} />
                  <Slider.Thumb index={1} onBlur={onBlur} />
                </Slider.Track>
              </Slider.Control>
            </Fieldset.Root>
          </Field.Root>
        )}
      />

      <Controller
        name="storageType"
        control={control}
        render={({
          field: { ref, name, value, onBlur, onChange },
          fieldState: { invalid, isTouched, isDirty },
        }) => (
          <Field.Root name={name} invalid={invalid} touched={isTouched} dirty={isDirty}>
            <Fieldset.Root
              render={
                <RadioGroup
                  className="gap-4"
                  value={value}
                  onValueChange={onChange}
                  inputRef={ref}
                />
              }
            >
              <Fieldset.Legend className="-mt-px">Storage type</Fieldset.Legend>
              <Field.Item>
                <Field.Label>
                  <Radio.Root value="ssd" onBlur={onBlur}>
                    <Radio.Indicator />
                  </Radio.Root>
                  SSD
                </Field.Label>
              </Field.Item>
              <Field.Item>
                <Field.Label>
                  <Radio.Root value="hdd" onBlur={onBlur}>
                    <Radio.Indicator />
                  </Radio.Root>
                  HDD
                </Field.Label>
              </Field.Item>
            </Fieldset.Root>
          </Field.Root>
        )}
      />

      <Controller
        name="restartOnFailure"
        control={control}
        render={({
          field: { ref, name, value, onBlur, onChange },
          fieldState: { invalid, isTouched, isDirty },
        }) => (
          <Field.Root name={name} invalid={invalid} touched={isTouched} dirty={isDirty}>
            <Field.Label className="gap-4">
              Restart on failure
              <Switch.Root
                checked={value}
                inputRef={ref}
                onCheckedChange={onChange}
                onBlur={onBlur}
              >
                <Switch.Thumb />
              </Switch.Root>
            </Field.Label>
          </Field.Root>
        )}
      />

      <Controller
        name="allowedNetworkProtocols"
        control={control}
        render={({
          field: { ref, name, value, onBlur, onChange },
          fieldState: { invalid, isTouched, isDirty },
        }) => (
          <Field.Root name={name} invalid={invalid} touched={isTouched} dirty={isDirty}>
            <Fieldset.Root render={<CheckboxGroup value={value} onValueChange={onChange} />}>
              <Fieldset.Legend className="mb-2">Allowed network protocols</Fieldset.Legend>
              <div className="flex gap-4">
                {['http', 'https', 'ssh'].map((val) => {
                  return (
                    <Field.Item key={val}>
                      <Field.Label className="uppercase">
                        <Checkbox.Root
                          value={val}
                          inputRef={val === 'http' ? ref : undefined}
                          onBlur={onBlur}
                        >
                          <Checkbox.Indicator>
                            <Check className="size-3" />
                          </Checkbox.Indicator>
                        </Checkbox.Root>
                        {val}
                      </Field.Label>
                    </Field.Item>
                  );
                })}
              </div>
            </Fieldset.Root>
          </Field.Root>
        )}
      />

      <Button type="submit" className="mt-3">
        Launch server
      </Button>
    </Form>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <ReactHookForm />
    </ToastProvider>
  );
}

function cartesian<T extends string[][]>(...arrays: T): string[][] {
  return arrays.reduce<string[][]>(
    (acc, curr) => acc.flatMap((a) => curr.map((b) => [...a, b])),
    [[]],
  );
}

const REGIONS = cartesian(['us', 'eu', 'ap'], ['central', 'east', 'west'], ['1', '2', '3']).map(
  (part) => part.join('-'),
);

interface Image {
  url: string;
  name: string;
}
/* prettier-ignore */
const IMAGES: Image[] = ['nginx:1.29-alpine', 'node:22-slim', 'postgres:18', 'redis:8.2.2-alpine'].map((name) => ({
  url: `docker.io/library/${name}`,
  name,
}));

const SERVER_TYPES = [
  { label: 'Select server type', value: null },
  ...cartesian(['t', 'm'], ['1', '2'], ['small', 'medium', 'large']).map((part) => {
    const value = part.join('.').replace('.', '');
    return { label: value, value };
  }),
];
```

```tsx
/* button.tsx */
import * as React from 'react';
import { Button as BaseButton } from '@base-ui/react/button';
import clsx from 'clsx';

export function Button({ className, ...props }: React.ComponentPropsWithoutRef<'button'>) {
  return (
    <BaseButton
      type="button"
      className={clsx(
        'flex items-center justify-center h-10 px-3.5 m-0 outline-0 border border-gray-200 rounded-md bg-gray-50 font-inherit text-base font-medium leading-6 text-gray-900 select-none hover:data-[disabled]:bg-gray-50 hover:bg-gray-100 active:data-[disabled]:bg-gray-50 active:bg-gray-200 active:shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)] active:border-t-gray-300 active:data-[disabled]:shadow-none active:data-[disabled]:border-t-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-800 focus-visible:-outline-offset-1 data-[disabled]:text-gray-500',
        className,
      )}
      {...props}
    />
  );
}
```

```tsx
/* checkbox-group.tsx */
import * as React from 'react';
import clsx from 'clsx';
import { CheckboxGroup as BaseCheckboxGroup } from '@base-ui/react/checkbox-group';

export function CheckboxGroup({ className, ...props }: BaseCheckboxGroup.Props) {
  return (
    <BaseCheckboxGroup
      className={clsx('flex flex-col items-start gap-1 text-gray-900', className)}
      {...props}
    />
  );
}
```

```tsx
/* form.tsx */
import * as React from 'react';
import clsx from 'clsx';
import { Form as BaseForm } from '@base-ui/react/form';

export function Form({ className, ...props }: BaseForm.Props) {
  return (
    <BaseForm
      className={clsx('flex w-full max-w-3xs sm:max-w-[20rem] flex-col gap-5', className)}
      {...props}
    />
  );
}
```

```tsx
/* radio-group.tsx */
import * as React from 'react';
import clsx from 'clsx';
import { RadioGroup as BaseRadioGroup } from '@base-ui/react/radio-group';

export function RadioGroup({ className, ...props }: BaseRadioGroup.Props) {
  return (
    <BaseRadioGroup
      className={clsx('w-full flex flex-row items-start gap-1 text-gray-900', className)}
      {...props}
    />
  );
}
```

```tsx
/* toast.tsx */
'use client';
import * as React from 'react';
import { Toast } from '@base-ui/react/toast';
import { X } from 'lucide-react';

function Toasts() {
  const { toasts } = Toast.useToastManager();
  return toasts.map((toast) => (
    <Toast.Root
      key={toast.id}
      toast={toast}
      className="[--gap:0.75rem] [--peek:0.75rem] [--scale:calc(max(0,1-(var(--toast-index)*0.1)))] [--shrink:calc(1-var(--scale))] [--height:var(--toast-frontmost-height,var(--toast-height))] [--offset-y:calc(var(--toast-offset-y)*-1+calc(var(--toast-index)*var(--gap)*-1)+var(--toast-swipe-movement-y))] absolute right-0 bottom-0 left-auto z-[calc(1000-var(--toast-index))] mr-0 w-full origin-bottom [transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)-(var(--toast-index)*var(--peek))-(var(--shrink)*var(--height))))_scale(var(--scale))] rounded-lg border border-gray-200 bg-gray-50 bg-clip-padding p-4 shadow-lg select-none after:absolute after:top-full after:left-0 after:h-[calc(var(--gap)+1px)] after:w-full after:content-[''] data-[ending-style]:opacity-0 data-[limited]:opacity-0 data-[starting-style]:[transform:translateY(150%)] [&[data-ending-style]:not([data-limited]):not([data-swipe-direction])]:[transform:translateY(150%)] data-[ending-style]:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))] data-[ending-style]:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))] data-[ending-style]:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))] data-[ending-style]:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))] h-[var(--height)] [transition:transform_0.5s_cubic-bezier(0.22,1,0.36,1),opacity_0.5s,height_0.15s]"
    >
      <Toast.Content className="overflow-hidden transition-opacity [transition-duration:250ms]">
        <Toast.Title className="text-[0.975rem] leading-5 font-medium" />
        <Toast.Description className="text-[0.925rem] leading-5 text-gray-700" />
        <div
          className="text-xs mt-2 p-3 py-2 bg-gray-100 text-gray-900 font-medium rounded-md select-text"
          data-swipe-ignore
        >
          <pre className="whitespace-pre-wrap">{JSON.stringify(toast.data, null, 2)}</pre>
        </div>
        <Toast.Close
          className="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded border-none bg-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          aria-label="Close"
        >
          <X className="size-4" />
        </Toast.Close>
      </Toast.Content>
    </Toast.Root>
  ));
}

export function ToastProvider(props: { children: React.ReactNode }) {
  return (
    <Toast.Provider limit={1}>
      {props.children}
      <Toast.Portal>
        <Toast.Viewport className="fixed z-10 top-auto right-[1rem] bottom-[1rem] mx-auto flex w-[250px] sm:right-[2rem] sm:bottom-[2rem] sm:w-[360px]">
          <Toasts />
        </Toast.Viewport>
      </Toast.Portal>
    </Toast.Provider>
  );
}

export const useToastManager = Toast.useToastManager;
```

```tsx
/* autocomplete.tsx */
import * as React from 'react';
import clsx from 'clsx';
import { Autocomplete } from '@base-ui/react/autocomplete';

export function Root(props: Autocomplete.Root.Props<any>) {
  return <Autocomplete.Root {...props} />;
}

export const Input = React.forwardRef<HTMLInputElement, Autocomplete.Input.Props>(function Input(
  { className, ...props }: Autocomplete.Input.Props,
  forwardedRef: React.ForwardedRef<HTMLInputElement>,
) {
  return (
    <Autocomplete.Input
      ref={forwardedRef}
      className={clsx(
        'bg-[canvas] h-10 w-[16rem] md:w-[20rem] font-normal rounded-md border border-gray-200 pl-3.5 text-base text-gray-900 focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-blue-800',
        className,
      )}
      {...props}
    />
  );
});

export function Portal(props: Autocomplete.Portal.Props) {
  return <Autocomplete.Portal {...props} />;
}

export function Positioner({ className, ...props }: Autocomplete.Positioner.Props) {
  return (
    <Autocomplete.Positioner
      className={clsx('outline-none data-[empty]:hidden', className)}
      sideOffset={4}
      {...props}
    />
  );
}

export function Popup({ className, ...props }: Autocomplete.Popup.Props) {
  return (
    <Autocomplete.Popup
      className={clsx(
        'w-[var(--anchor-width)] max-h-[min(var(--available-height),23rem)] max-w-[var(--available-width)] overflow-y-auto scroll-pt-2 scroll-pb-2 overscroll-contain rounded-md bg-[canvas] py-2 text-gray-900 shadow-lg shadow-gray-200 outline-1 outline-gray-200 dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300',
        className,
      )}
      {...props}
    />
  );
}

export function List(props: Autocomplete.List.Props) {
  return <Autocomplete.List {...props} />;
}

export function Item({ className, ...props }: Autocomplete.Item.Props) {
  return (
    <Autocomplete.Item
      className={clsx(
        'flex flex-col gap-0.25 cursor-default py-2 pr-8 pl-4 text-base leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-2 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded data-[highlighted]:before:bg-gray-900',
        className,
      )}
      {...props}
    />
  );
}
```

```tsx
/* checkbox.tsx */
import * as React from 'react';
import clsx from 'clsx';
import { Checkbox } from '@base-ui/react/checkbox';

export function Root({ className, ...props }: Checkbox.Root.Props) {
  return (
    <Checkbox.Root
      className={clsx(
        'flex size-5 items-center justify-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 data-[checked]:bg-gray-900 data-[unchecked]:border data-[unchecked]:border-gray-300',
        className,
      )}
      {...props}
    />
  );
}

export function Indicator({ className, ...props }: Checkbox.Indicator.Props) {
  return (
    <Checkbox.Indicator
      className={clsx('flex text-gray-50 data-[unchecked]:hidden', className)}
      {...props}
    />
  );
}
```

```tsx
/* combobox.tsx */
import * as React from 'react';
import clsx from 'clsx';
import { Combobox } from '@base-ui/react/combobox';
import { X } from 'lucide-react';

export function Root(props: Combobox.Root.Props<any, any>) {
  return <Combobox.Root {...props} />;
}

export const Input = React.forwardRef<HTMLInputElement, Combobox.Input.Props>(function Input(
  { className, ...props }: Combobox.Input.Props,
  forwardedRef: React.ForwardedRef<HTMLInputElement>,
) {
  return (
    <Combobox.Input
      ref={forwardedRef}
      className={clsx(
        'h-10 w-64 rounded-md font-normal border border-gray-200 pl-3.5 text-base text-gray-900 bg-[canvas] focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-blue-800',
        className,
      )}
      {...props}
    />
  );
});

export function Clear({ className, ...props }: Combobox.Clear.Props) {
  return (
    <Combobox.Clear
      className={clsx(
        'combobox-clear flex h-10 w-6 items-center justify-center rounded bg-transparent p-0',
        className,
      )}
      {...props}
    >
      <X className="size-4" />
    </Combobox.Clear>
  );
}

export function Trigger({ className, ...props }: Combobox.Trigger.Props) {
  return (
    <Combobox.Trigger
      className={clsx(
        'flex h-10 w-6 items-center justify-center rounded bg-transparent p-0',
        className,
      )}
      {...props}
    />
  );
}

export function Portal(props: Combobox.Portal.Props) {
  return <Combobox.Portal {...props} />;
}

export function Positioner({ className, ...props }: Combobox.Positioner.Props) {
  return (
    <Combobox.Positioner className={clsx('outline-none', className)} sideOffset={4} {...props} />
  );
}

export function Popup({ className, ...props }: Combobox.Popup.Props) {
  return (
    <Combobox.Popup
      className={clsx(
        'w-[var(--anchor-width)] max-h-[23rem] max-w-[var(--available-width)] origin-[var(--transform-origin)] rounded-md bg-[canvas] text-gray-900 shadow-lg shadow-gray-200 outline-1 outline-gray-200 transition-[transform,scale,opacity] data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0 dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300 duration-100',
        className,
      )}
      {...props}
    />
  );
}

export function Empty({ className, ...props }: Combobox.Empty.Props) {
  return (
    <Combobox.Empty
      className={clsx('p-4 text-[0.925rem] leading-4 text-gray-600 empty:m-0 empty:p-0', className)}
      {...props}
    />
  );
}

export function List({ className, ...props }: Combobox.List.Props) {
  return (
    <Combobox.List
      className={clsx(
        'outline-0 overflow-y-auto scroll-py-[0.5rem] py-2 overscroll-contain max-h-[min(23rem,var(--available-height))] data-[empty]:p-0',
        className,
      )}
      {...props}
    />
  );
}

export function Item({ className, ...props }: Combobox.Item.Props) {
  return (
    <Combobox.Item
      className={clsx(
        'grid cursor-default grid-cols-[0.75rem_1fr] items-center gap-2 py-2 pr-8 pl-4 text-base leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-2 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900',
        className,
      )}
      {...props}
    />
  );
}

export function ItemIndicator({ className, ...props }: Combobox.ItemIndicator.Props) {
  return <Combobox.ItemIndicator className={clsx('col-start-1', className)} {...props} />;
}
```

```tsx
/* field.tsx */
import * as React from 'react';
import clsx from 'clsx';
import { Field } from '@base-ui/react/field';

export function Root({ className, ...props }: Field.Root.Props) {
  return <Field.Root className={clsx('flex flex-col items-start gap-1', className)} {...props} />;
}

export function Label({ className, ...props }: Field.Label.Props) {
  return (
    <Field.Label
      className={clsx(
        'text-sm font-medium text-gray-900 has-[[role="checkbox"]]:flex has-[[role="checkbox"]]:items-center has-[[role="checkbox"]]:gap-2 has-[[role="radio"]]:flex has-[[role="radio"]]:items-center has-[[role="radio"]]:gap-2 has-[[role="switch"]]:flex has-[[role="switch"]]:items-center has-[[role="radio"]]:font-normal',
        className,
      )}
      {...props}
    />
  );
}

export function Description({ className, ...props }: Field.Description.Props) {
  return <Field.Description className={clsx('text-sm text-gray-600', className)} {...props} />;
}

export const Control = React.forwardRef<HTMLInputElement, Field.Control.Props>(
  function FieldControl(
    { className, ...props }: Field.Control.Props,
    forwardedRef: React.ForwardedRef<HTMLInputElement>,
  ) {
    return (
      <Field.Control
        ref={forwardedRef}
        className={clsx(
          'h-10 w-full max-w-xs rounded-md bg-[canvas] border border-gray-200 pl-3.5 text-base text-gray-900 focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-blue-800',
          className,
        )}
        {...props}
      />
    );
  },
);

export function Error({ className, ...props }: Field.Error.Props) {
  return <Field.Error className={clsx('text-sm text-red-800', className)} {...props} />;
}

export function Item(props: Field.Item.Props) {
  return <Field.Item {...props} />;
}
```

```tsx
/* fieldset.tsx */
import * as React from 'react';
import clsx from 'clsx';
import { Fieldset } from '@base-ui/react/fieldset';

export function Root(props: Fieldset.Root.Props) {
  return <Fieldset.Root {...props} />;
}

export function Legend({ className, ...props }: Fieldset.Legend.Props) {
  return (
    <Fieldset.Legend className={clsx('text-sm font-medium text-gray-900', className)} {...props} />
  );
}
```

```tsx
/* number-field.tsx */
import * as React from 'react';
import clsx from 'clsx';
import { NumberField } from '@base-ui/react/number-field';

export function Root({ className, ...props }: NumberField.Root.Props) {
  return (
    <NumberField.Root className={clsx('flex flex-col items-start gap-1', className)} {...props} />
  );
}

export function Group({ className, ...props }: NumberField.Group.Props) {
  return <NumberField.Group className={clsx('flex', className)} {...props} />;
}

export function Decrement({ className, ...props }: NumberField.Decrement.Props) {
  return (
    <NumberField.Decrement
      className={clsx(
        'flex size-10 items-center justify-center rounded-tl-md rounded-bl-md border border-gray-200 bg-gray-50 bg-clip-padding text-gray-900 select-none hover:bg-gray-100 active:bg-gray-100',
        className,
      )}
      {...props}
    />
  );
}

export const Input = React.forwardRef<HTMLInputElement, NumberField.Input.Props>(function Input(
  { className, ...props }: NumberField.Input.Props,
  forwardedRef: React.ForwardedRef<HTMLInputElement>,
) {
  return (
    <NumberField.Input
      ref={forwardedRef}
      className={clsx(
        'h-10 w-24 border-t border-b border-gray-200 text-center text-base text-gray-900 tabular-nums focus:z-1 focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-blue-800',
        className,
      )}
      {...props}
    />
  );
});

export function Increment({ className, ...props }: NumberField.Increment.Props) {
  return (
    <NumberField.Increment
      className={clsx(
        'flex size-10 items-center justify-center rounded-tr-md rounded-br-md border border-gray-200 bg-gray-50 bg-clip-padding text-gray-900 select-none hover:bg-gray-100 active:bg-gray-100',
        className,
      )}
      {...props}
    />
  );
}
```

```tsx
/* radio.tsx */
import * as React from 'react';
import clsx from 'clsx';
import { Radio } from '@base-ui/react/radio';

export function Root({ className, ...props }: Radio.Root.Props) {
  return (
    <Radio.Root
      className={clsx(
        'flex size-5 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 data-[checked]:bg-gray-900 data-[unchecked]:border data-[unchecked]:border-gray-300',
        className,
      )}
      {...props}
    />
  );
}

export function Indicator({ className, ...props }: Radio.Indicator.Props) {
  return (
    <Radio.Indicator
      className={clsx(
        'flex before:size-2 before:rounded-full before:bg-gray-50 data-[unchecked]:hidden',
        className,
      )}
      {...props}
    />
  );
}
```

```tsx
/* select.tsx */
import * as React from 'react';
import clsx from 'clsx';
import { Select } from '@base-ui/react/select';

export function Root(props: Select.Root.Props<any>) {
  return <Select.Root {...props} />;
}

export function Trigger({ className, ...props }: Select.Trigger.Props) {
  return (
    <Select.Trigger
      className={clsx(
        'flex h-10 min-w-36 items-center justify-between gap-3 rounded-md border border-gray-200 pr-3 pl-3.5 text-base text-gray-900 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 data-[popup-open]:bg-gray-100 cursor-default not-[[data-filled]]:text-gray-500 bg-[canvas]',
        className,
      )}
      {...props}
    />
  );
}

export function Value({ className, ...props }: Select.Value.Props) {
  return <Select.Value className={clsx('', className)} {...props} />;
}

export function Icon({ className, ...props }: Select.Icon.Props) {
  return <Select.Icon className={clsx('flex', className)} {...props} />;
}

export function Portal(props: Select.Portal.Props) {
  return <Select.Portal {...props} />;
}

export function Positioner({ className, ...props }: Select.Positioner.Props) {
  return (
    <Select.Positioner
      className={clsx('outline-none select-none z-10', className)}
      sideOffset={8}
      {...props}
    />
  );
}

export function Popup({ className, ...props }: Select.Popup.Props) {
  return (
    <Select.Popup
      className={clsx(
        'group origin-[var(--transform-origin)] bg-clip-padding rounded-md bg-[canvas] text-gray-900 shadow-lg shadow-gray-200 outline outline-gray-200 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[side=none]:data-[ending-style]:transition-none data-[starting-style]:scale-90 data-[starting-style]:opacity-0 data-[side=none]:data-[starting-style]:scale-100 data-[side=none]:data-[starting-style]:opacity-100 data-[side=none]:data-[starting-style]:transition-none dark:shadow-none dark:outline-gray-300',
        className,
      )}
      {...props}
    />
  );
}

export function ScrollUpArrow({ className, ...props }: Select.ScrollUpArrow.Props) {
  return (
    <Select.ScrollUpArrow
      className={clsx(
        "top-0 z-[1] flex h-4 w-full cursor-default items-center justify-center rounded-md bg-[canvas] text-center text-xs before:absolute data-[side=none]:before:top-[-100%] before:left-0 before:h-full before:w-full before:content-['']",
        className,
      )}
      {...props}
    />
  );
}

export function ScrollDownArrow({ className, ...props }: Select.ScrollDownArrow.Props) {
  return (
    <Select.ScrollDownArrow
      className={clsx(
        "bottom-0 z-[1] flex h-4 w-full cursor-default items-center justify-center rounded-md bg-[canvas] text-center text-xs before:absolute before:left-0 before:h-full before:w-full before:content-[''] data-[side=none]:before:bottom-[-100%]",
        className,
      )}
      {...props}
    />
  );
}

export function List({ className, ...props }: Select.List.Props) {
  return (
    <Select.List
      className={clsx(
        'relative py-1 scroll-py-6 overflow-y-auto max-h-[var(--available-height)]',
        className,
      )}
      {...props}
    />
  );
}

export function Item({ className, ...props }: Select.Item.Props) {
  return (
    <Select.Item
      className={clsx(
        'grid min-w-[var(--anchor-width)] cursor-default grid-cols-[0.75rem_1fr] items-center gap-3 py-2 pr-4 pl-2.5 text-sm leading-4 outline-none select-none group-data-[side=none]:min-w-[calc(var(--anchor-width)+1rem)] group-data-[side=none]:pr-12 group-data-[side=none]:text-base group-data-[side=none]:leading-4 data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900 pointer-coarse:py-2.5 pointer-coarse:text-[0.925rem]',
        className,
      )}
      {...props}
    />
  );
}

export function ItemIndicator({ className, ...props }: Select.ItemIndicator.Props) {
  return <Select.ItemIndicator className={clsx('col-start-1', className)} {...props} />;
}

export function ItemText({ className, ...props }: Select.ItemText.Props) {
  return <Select.ItemText className={clsx('col-start-2', className)} {...props} />;
}
```

```tsx
/* slider.tsx */
import * as React from 'react';
import clsx from 'clsx';
import { Slider } from '@base-ui/react/slider';

export function Root({ className, ...props }: Slider.Root.Props<any>) {
  return <Slider.Root className={clsx('grid grid-cols-2', className)} {...props} />;
}

export function Value({ className, ...props }: Slider.Value.Props) {
  return (
    <Slider.Value className={clsx('text-sm font-medium text-gray-900', className)} {...props} />
  );
}

export function Control({ className, ...props }: Slider.Control.Props) {
  return (
    <Slider.Control
      className={clsx('flex col-span-2 touch-none items-center py-3 select-none', className)}
      {...props}
    />
  );
}

export function Track({ className, ...props }: Slider.Track.Props) {
  return (
    <Slider.Track
      className={clsx(
        'h-1 w-full rounded bg-gray-200 shadow-[inset_0_0_0_1px] shadow-gray-200 select-none',
        className,
      )}
      {...props}
    />
  );
}

export function Indicator({ className, ...props }: Slider.Indicator.Props) {
  return (
    <Slider.Indicator className={clsx('rounded bg-gray-700 select-none', className)} {...props} />
  );
}

export function Thumb({ className, ...props }: Slider.Thumb.Props) {
  return (
    <Slider.Thumb
      className={clsx(
        'size-4 rounded-full bg-white outline outline-gray-300 select-none has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-blue-800',
        className,
      )}
      {...props}
    />
  );
}
```

```tsx
/* switch.tsx */
import * as React from 'react';
import clsx from 'clsx';
import { Switch } from '@base-ui/react/switch';

export function Root({ className, ...props }: Switch.Root.Props) {
  return (
    <Switch.Root
      className={clsx(
        'relative flex h-6 w-10 rounded-full bg-gradient-to-r from-gray-700 from-35% to-gray-200 to-65% bg-[length:6.5rem_100%] bg-[100%_0%] bg-no-repeat p-px shadow-[inset_0_1.5px_2px] shadow-gray-200 outline outline-1 -outline-offset-1 outline-gray-200 transition-[background-position,box-shadow] duration-[125ms] ease-[cubic-bezier(0.26,0.75,0.38,0.45)] before:absolute before:rounded-full before:outline-offset-2 before:outline-blue-800 focus-visible:before:inset-0 focus-visible:before:outline focus-visible:before:outline-2 active:bg-gray-100 data-[checked]:bg-[0%_0%] data-[checked]:active:bg-gray-500 dark:from-gray-500 dark:shadow-black/75 dark:outline-white/15 dark:data-[checked]:shadow-none',
        className,
      )}
      {...props}
    />
  );
}

export function Thumb({ className, ...props }: Switch.Thumb.Props) {
  return (
    <Switch.Thumb
      className={clsx(
        'aspect-square h-full rounded-full bg-white shadow-[0_0_1px_1px,0_1px_1px,1px_2px_4px_-1px] shadow-gray-100 transition-transform duration-150 data-[checked]:translate-x-4 dark:shadow-black/25',
        className,
      )}
      {...props}
    />
  );
}
```

### Initialize the form

Initialize the form with the `useForm` hook, assigning the initial value of each field by their name in the `defaultValues` parameter:

```tsx title="Initialize a form instance"
import { useForm } from 'react-hook-form';

const { control, handleSubmit } = useForm<FormValues>({
  defaultValues: {
    username: '',
    email: '',
  },
});
```

### Integrate components

Use the `<Controller>` component to integrate with any `<Field>` component, forwarding the `name`, `field`, and `fieldState` render props to the appropriate part:

```tsx {11-17,22-26} title="Integrating the controller component with Base UI field" "ref" "value" "onBlur" "onChange" "invalid" "isTouched" "isDirty" "error"
import { useForm, Controller } from "react-hook-form"
import { Field } from '@base-ui/react/field';

const { control, handleSubmit} = useForm({
  defaultValues: {
    username: '',
  }
})

<Controller
  name="username"
  control={control}
  render={({
    field: { name, ref, value, onBlur, onChange },
    fieldState: { invalid, isTouched, isDirty, error },
  }) => (
    <Field.Root name={name} invalid={invalid} touched={isTouched} dirty={isDirty}>
      <Field.Label>Username</Field.Label>
      <Field.Description>
        May appear where you contribute or are mentioned. You can remove it at any time.
      </Field.Description>
      <Field.Control
        placeholder="e.g. alice132"
        value={value}
        onBlur={onBlur}
        onValueChange={onChange}
        ref={ref}
      />
      <Field.Error match={!!error}>
        {error?.message}
      </Field.Error>
    </Field.Root>
  )}
/>
```

For React Hook Form to focus invalid fields when performing validation, you must ensure that any wrapping components forward the `ref` to the underlying Base UI component. You can typically accomplish this using the `inputRef` prop, or directly as the `ref` for components that render an input element like `<NumberField.Input>`.

### Field validation

Specify `rules` on the `<Controller>` in the same format as [`register`](https://react-hook-form.com/docs/useform/register) options, and use the `match` prop to delegate control of the error rendering:

```tsx {5-15, 33-35} title="Defining validation rules and displaying errors"
import { Controller } from "react-hook-form"
import { Field } from '@base-ui/react/field';

<Controller
  name="username"
  control={control}
  rules={{
    required: 'This is a required field',
    minLength: { value: 2, message: 'Too short' },
    validate: (value) => {
      if (/* custom logic */) {
        return 'Invalid'
      }
      return null;
    },
  }}
  render={({
    field: { name, ref, value, onBlur, onChange },
    fieldState: { invalid, isTouched, isDirty, error },
  }) => (
    <Field.Root name={name} invalid={invalid} touched={isTouched} dirty={isDirty}>
      <Field.Label>Username</Field.Label>
      <Field.Description>
        May appear where you contribute or are mentioned. You can remove it at any time.
      </Field.Description>
      <Field.Control
        placeholder="e.g. alice132"
        value={value}
        onBlur={onBlur}
        onValueChange={onChange}
        ref={ref}
      />
      <Field.Error match={!!error}>
        {error?.message}
      </Field.Error>
    </Field.Root>
  )}
/>
```

### Submitting data

Wrap your submit handler function with `handleSubmit` to receive the form values as a JavaScript object for further handling:

```tsx title="Form submission handler"
import { useForm } from 'react-hook-form';
import { Form } from '@base-ui/react/form';

interface FormValues {
  username: string;
  email: string;
}

const { handleSubmit } = useForm<FormValues>();

async function submitForm(data: FormValues) {
  // transform the object and/or submit it to a server
  await fetch(/* ... */);
}

<Form onSubmit={handleSubmit(submitForm)} />;
```

## TanStack Form

[TanStack Form](https://tanstack.com/form/v1/docs/overview) is a form library with a function-based API for orchestrating validations that can also be integrated with Base UI.

## Demo

### Tailwind

This example shows how to implement the component using Tailwind CSS.

```tsx
/* index.tsx */
'use client';
import * as React from 'react';
import { useForm, revalidateLogic, DeepKeys, ValidationError } from '@tanstack/react-form';
import { ChevronDown, ChevronsUpDown, Check, Plus, Minus } from 'lucide-react';
import { Button } from './button';
import { CheckboxGroup } from './checkbox-group';
import { RadioGroup } from './radio-group';
import { ToastProvider, useToastManager } from './toast';
import * as Autocomplete from './autocomplete';
import * as Checkbox from './checkbox';
import * as Combobox from './combobox';
import * as Field from './field';
import * as Fieldset from './fieldset';
import * as NumberField from './number-field';
import * as Radio from './radio';
import * as Select from './select';
import * as Slider from './slider';
import * as Switch from './switch';

interface FormValues {
  serverName: string;
  region: string | null;
  containerImage: string;
  serverType: string | null;
  numOfInstances: number | null;
  scalingThreshold: number[];
  storageType: 'ssd' | 'hdd';
  restartOnFailure: boolean;
  allowedNetworkProtocols: string[];
}

const defaultValues: FormValues = {
  serverName: '',
  region: null,
  containerImage: '',
  serverType: null,
  numOfInstances: null,
  scalingThreshold: [0.2, 0.8],
  storageType: 'ssd',
  restartOnFailure: true,
  allowedNetworkProtocols: [],
};

function TanstackForm() {
  const toastManager = useToastManager();

  const form = useForm({
    defaultValues,
    onSubmit: ({ value: formValues }) => {
      toastManager.add({
        title: 'Form submitted',
        description: 'The form contains these values:',
        data: formValues,
      });
    },
    validationLogic: revalidateLogic({
      mode: 'submit',
      modeAfterSubmission: 'change',
    }),
    validators: {
      onDynamic: ({ value: formValues }) => {
        const errors: Partial<Record<DeepKeys<FormValues>, ValidationError>> = {};

        (
          ['serverName', 'region', 'containerImage', 'serverType', 'numOfInstances'] as const
        ).forEach((requiredField) => {
          if (!formValues[requiredField]) {
            errors[requiredField] = 'This is a required field.';
          }
        });

        if (formValues.serverName && formValues.serverName.length < 3) {
          errors.serverName = 'At least 3 characters.';
        }

        return isEmpty(errors) ? undefined : { form: errors, fields: errors };
      },
    },
  });

  /* eslint-disable react/no-children-prop */
  return (
    <form
      aria-label="Launch new cloud server"
      className="flex w-full max-w-3xs sm:max-w-[20rem] flex-col gap-5"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        form.handleSubmit();
      }}
    >
      <form.Field
        name="serverName"
        children={(field) => {
          return (
            <Field.Root
              name={field.name}
              invalid={!field.state.meta.isValid}
              dirty={field.state.meta.isDirty}
              touched={field.state.meta.isTouched}
            >
              <Field.Label>Server name</Field.Label>
              <Field.Control
                value={field.state.value}
                onValueChange={field.handleChange}
                onBlur={field.handleBlur}
                placeholder="e.g. api-server-01"
              />
              <Field.Description>Must be 3 or more characters long</Field.Description>
              <Field.Error match={!field.state.meta.isValid}>
                {field.state.meta.errors.join(',')}
              </Field.Error>
            </Field.Root>
          );
        }}
      />

      <form.Field
        name="region"
        children={(field) => {
          return (
            <Field.Root
              name={field.name}
              invalid={!field.state.meta.isValid}
              dirty={field.state.meta.isDirty}
              touched={field.state.meta.isTouched}
            >
              <Combobox.Root
                items={REGIONS}
                value={field.state.value}
                onValueChange={field.handleChange}
              >
                <div className="relative flex flex-col gap-1 text-sm leading-5 font-medium text-gray-900">
                  <Field.Label>Region</Field.Label>
                  <Combobox.Input placeholder="e.g. eu-central-1" onBlur={field.handleBlur} />
                  <div className="absolute right-2 bottom-0 flex h-10 items-center justify-center text-gray-600">
                    <Combobox.Clear />
                    <Combobox.Trigger>
                      <ChevronDown className="size-4" />
                    </Combobox.Trigger>
                  </div>
                </div>
                <Combobox.Portal>
                  <Combobox.Positioner>
                    <Combobox.Popup>
                      <Combobox.Empty>No matches</Combobox.Empty>
                      <Combobox.List>
                        {(region: string) => {
                          return (
                            <Combobox.Item key={region} value={region}>
                              <Combobox.ItemIndicator>
                                <Check className="size-3" />
                              </Combobox.ItemIndicator>
                              <div className="col-start-2">{region}</div>
                            </Combobox.Item>
                          );
                        }}
                      </Combobox.List>
                    </Combobox.Popup>
                  </Combobox.Positioner>
                </Combobox.Portal>
              </Combobox.Root>

              <Field.Error match={!field.state.meta.isValid}>
                {field.state.meta.errors.join(',')}
              </Field.Error>
            </Field.Root>
          );
        }}
      />

      <form.Field
        name="containerImage"
        children={(field) => {
          return (
            <Field.Root
              name={field.name}
              invalid={!field.state.meta.isValid}
              dirty={field.state.meta.isDirty}
              touched={field.state.meta.isTouched}
            >
              <Autocomplete.Root
                items={IMAGES}
                mode="both"
                value={field.state.value}
                onValueChange={field.handleChange}
                itemToStringValue={(itemValue: Image) => itemValue.url}
              >
                <Field.Label>Container image</Field.Label>
                <Autocomplete.Input
                  placeholder="e.g. docker.io/library/node:latest"
                  onBlur={field.handleBlur}
                />
                <Field.Description>Enter a registry URL with optional tags</Field.Description>
                <Autocomplete.Portal>
                  <Autocomplete.Positioner>
                    <Autocomplete.Popup>
                      <Autocomplete.List>
                        {(image: Image) => {
                          return (
                            <Autocomplete.Item key={image.url} value={image}>
                              <span className="text-base leading-6">{image.name}</span>
                              <span className="font-mono whitespace-nowrap text-xs leading-4 opacity-80">
                                {image.url}
                              </span>
                            </Autocomplete.Item>
                          );
                        }}
                      </Autocomplete.List>
                    </Autocomplete.Popup>
                  </Autocomplete.Positioner>
                </Autocomplete.Portal>
              </Autocomplete.Root>
              <Field.Error match={!field.state.meta.isValid}>
                {field.state.meta.errors.join(',')}
              </Field.Error>
            </Field.Root>
          );
        }}
      />

      <form.Field
        name="serverType"
        children={(field) => {
          return (
            <Field.Root
              name={field.name}
              invalid={!field.state.meta.isValid}
              dirty={field.state.meta.isDirty}
              touched={field.state.meta.isTouched}
            >
              <Field.Label className="cursor-default" nativeLabel={false} render={<div />}>
                Server type
              </Field.Label>
              <Select.Root
                items={SERVER_TYPES}
                value={field.state.value}
                onValueChange={field.handleChange}
              >
                <Select.Trigger className="!w-48" onBlur={field.handleBlur}>
                  <Select.Value />
                  <Select.Icon>
                    <ChevronsUpDown className="size-4" />
                  </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                  <Select.Positioner>
                    <Select.Popup>
                      <Select.ScrollUpArrow />
                      <Select.List>
                        {SERVER_TYPES.map(({ label, value }) => {
                          return (
                            <Select.Item key={value} value={value}>
                              <Select.ItemIndicator>
                                <Check className="size-3" />
                              </Select.ItemIndicator>
                              <Select.ItemText>{label}</Select.ItemText>
                            </Select.Item>
                          );
                        })}
                      </Select.List>
                      <Select.ScrollDownArrow />
                    </Select.Popup>
                  </Select.Positioner>
                </Select.Portal>
              </Select.Root>
              <Field.Error match={!field.state.meta.isValid}>
                {field.state.meta.errors.join(',')}
              </Field.Error>
            </Field.Root>
          );
        }}
      />

      <form.Field
        name="numOfInstances"
        children={(field) => {
          return (
            <Field.Root
              name={field.name}
              invalid={!field.state.meta.isValid}
              dirty={field.state.meta.isDirty}
              touched={field.state.meta.isTouched}
            >
              <NumberField.Root
                value={field.state.value}
                onValueChange={field.handleChange}
                min={1}
                max={64}
              >
                <Field.Label>Number of instances</Field.Label>
                <NumberField.Group>
                  <NumberField.Decrement>
                    <Minus className="size-4" />
                  </NumberField.Decrement>
                  <NumberField.Input className="!w-16" onBlur={field.handleBlur} />
                  <NumberField.Increment>
                    <Plus className="size-4" />
                  </NumberField.Increment>
                </NumberField.Group>
              </NumberField.Root>
              <Field.Error match={!field.state.meta.isValid}>
                {field.state.meta.errors.join(',')}
              </Field.Error>
            </Field.Root>
          );
        }}
      />

      <form.Field
        name="scalingThreshold"
        children={(field) => {
          return (
            <Field.Root
              name={field.name}
              invalid={!field.state.meta.isValid}
              dirty={field.state.meta.isDirty}
              touched={field.state.meta.isTouched}
            >
              <Fieldset.Root
                render={
                  <Slider.Root
                    value={field.state.value}
                    onValueChange={field.handleChange}
                    onValueCommitted={field.handleChange}
                    thumbAlignment="edge"
                    min={0}
                    max={1}
                    step={0.01}
                    format={{
                      style: 'percent',
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }}
                    className="w-98/100 gap-y-2"
                  />
                }
              >
                <Fieldset.Legend>Scaling threshold</Fieldset.Legend>
                <Slider.Value className="col-start-2 text-end" />
                <Slider.Control>
                  <Slider.Track>
                    <Slider.Indicator />
                    <Slider.Thumb index={0} onBlur={field.handleBlur} />
                    <Slider.Thumb index={1} onBlur={field.handleBlur} />
                  </Slider.Track>
                </Slider.Control>
              </Fieldset.Root>
              <Field.Error match={!field.state.meta.isValid}>
                {field.state.meta.errors.join(',')}
              </Field.Error>
            </Field.Root>
          );
        }}
      />

      <form.Field
        name="storageType"
        children={(field) => {
          return (
            <Field.Root
              name={field.name}
              invalid={!field.state.meta.isValid}
              dirty={field.state.meta.isDirty}
              touched={field.state.meta.isTouched}
            >
              <Fieldset.Root
                render={
                  <RadioGroup
                    value={field.state.value}
                    onValueChange={(newValue) =>
                      field.handleChange(newValue as FormValues['storageType'])
                    }
                    className="gap-4"
                  />
                }
              >
                <Fieldset.Legend className="-mt-px">Storage type</Fieldset.Legend>
                {['ssd', 'hdd'].map((radioValue) => (
                  <Field.Item key={radioValue}>
                    <Field.Label className="uppercase">
                      <Radio.Root value={radioValue}>
                        <Radio.Indicator />
                      </Radio.Root>
                      {radioValue}
                    </Field.Label>
                  </Field.Item>
                ))}
              </Fieldset.Root>
              <Field.Error match={!field.state.meta.isValid}>
                {field.state.meta.errors.join(',')}
              </Field.Error>
            </Field.Root>
          );
        }}
      />

      <form.Field
        name="restartOnFailure"
        children={(field) => {
          return (
            <Field.Root
              name={field.name}
              invalid={!field.state.meta.isValid}
              dirty={field.state.meta.isDirty}
              touched={field.state.meta.isTouched}
            >
              <Field.Label className="gap-4">
                Restart on failure
                <Switch.Root
                  checked={field.state.value}
                  onCheckedChange={field.handleChange}
                  onBlur={field.handleBlur}
                >
                  <Switch.Thumb />
                </Switch.Root>
              </Field.Label>
              <Field.Error match={!field.state.meta.isValid}>
                {field.state.meta.errors.join(',')}
              </Field.Error>
            </Field.Root>
          );
        }}
      />

      <form.Field
        name="allowedNetworkProtocols"
        children={(field) => {
          return (
            <Field.Root
              name={field.name}
              invalid={!field.state.meta.isValid}
              dirty={field.state.meta.isDirty}
              touched={field.state.meta.isTouched}
            >
              <Fieldset.Root
                render={
                  <CheckboxGroup value={field.state.value} onValueChange={field.handleChange} />
                }
              >
                <Fieldset.Legend className="mb-2">Allowed network protocols</Fieldset.Legend>
                <div className="flex gap-4">
                  {['http', 'https', 'ssh'].map((checkboxValue) => {
                    return (
                      <Field.Item key={checkboxValue}>
                        <Field.Label className="uppercase">
                          <Checkbox.Root value={checkboxValue} onBlur={field.handleBlur}>
                            <Checkbox.Indicator>
                              <Check className="size-3" />
                            </Checkbox.Indicator>
                          </Checkbox.Root>
                          {checkboxValue}
                        </Field.Label>
                      </Field.Item>
                    );
                  })}
                </div>
              </Fieldset.Root>
              <Field.Error match={!field.state.meta.isValid}>
                {field.state.meta.errors.join(',')}
              </Field.Error>
            </Field.Root>
          );
        }}
      />

      <Button type="submit" className="mt-3">
        Launch server
      </Button>
    </form>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <TanstackForm />
    </ToastProvider>
  );
}

function isEmpty(object: Partial<Record<DeepKeys<FormValues>, ValidationError>>) {
  // eslint-disable-next-line
  for (const _ in object) {
    return false;
  }
  return true;
}

function cartesian<T extends string[][]>(...arrays: T): string[][] {
  return arrays.reduce<string[][]>(
    (acc, curr) => acc.flatMap((a) => curr.map((b) => [...a, b])),
    [[]],
  );
}

const REGIONS = cartesian(['us', 'eu', 'ap'], ['central', 'east', 'west'], ['1', '2', '3']).map(
  (part) => part.join('-'),
);

interface Image {
  url: string;
  name: string;
}
/* prettier-ignore */
const IMAGES: Image[] = ['nginx:1.29-alpine', 'node:22-slim', 'postgres:18', 'redis:8.2.2-alpine'].map((name) => ({
  url: `docker.io/library/${name}`,
  name,
}));

const SERVER_TYPES = [
  { label: 'Select server type', value: null },
  ...cartesian(['t', 'm'], ['1', '2'], ['small', 'medium', 'large']).map((part) => {
    const value = part.join('.').replace('.', '');
    return { label: value, value };
  }),
];
```

```tsx
/* button.tsx */
import * as React from 'react';
import { Button as BaseButton } from '@base-ui/react/button';
import clsx from 'clsx';

export function Button({ className, ...props }: React.ComponentPropsWithoutRef<'button'>) {
  return (
    <BaseButton
      type="button"
      className={clsx(
        'flex items-center justify-center h-10 px-3.5 m-0 outline-0 border border-gray-200 rounded-md bg-gray-50 font-inherit text-base font-medium leading-6 text-gray-900 select-none hover:data-[disabled]:bg-gray-50 hover:bg-gray-100 active:data-[disabled]:bg-gray-50 active:bg-gray-200 active:shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)] active:border-t-gray-300 active:data-[disabled]:shadow-none active:data-[disabled]:border-t-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-800 focus-visible:-outline-offset-1 data-[disabled]:text-gray-500',
        className,
      )}
      {...props}
    />
  );
}
```

```tsx
/* checkbox-group.tsx */
import * as React from 'react';
import clsx from 'clsx';
import { CheckboxGroup as BaseCheckboxGroup } from '@base-ui/react/checkbox-group';

export function CheckboxGroup({ className, ...props }: BaseCheckboxGroup.Props) {
  return (
    <BaseCheckboxGroup
      className={clsx('flex flex-col items-start gap-1 text-gray-900', className)}
      {...props}
    />
  );
}
```

```tsx
/* radio-group.tsx */
import * as React from 'react';
import clsx from 'clsx';
import { RadioGroup as BaseRadioGroup } from '@base-ui/react/radio-group';

export function RadioGroup({ className, ...props }: BaseRadioGroup.Props) {
  return (
    <BaseRadioGroup
      className={clsx('w-full flex flex-row items-start gap-1 text-gray-900', className)}
      {...props}
    />
  );
}
```

```tsx
/* toast.tsx */
'use client';
import * as React from 'react';
import { Toast } from '@base-ui/react/toast';
import { X } from 'lucide-react';

function Toasts() {
  const { toasts } = Toast.useToastManager();
  return toasts.map((toast) => (
    <Toast.Root
      key={toast.id}
      toast={toast}
      className="[--gap:0.75rem] [--peek:0.75rem] [--scale:calc(max(0,1-(var(--toast-index)*0.1)))] [--shrink:calc(1-var(--scale))] [--height:var(--toast-frontmost-height,var(--toast-height))] [--offset-y:calc(var(--toast-offset-y)*-1+calc(var(--toast-index)*var(--gap)*-1)+var(--toast-swipe-movement-y))] absolute right-0 bottom-0 left-auto z-[calc(1000-var(--toast-index))] mr-0 w-full origin-bottom [transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)-(var(--toast-index)*var(--peek))-(var(--shrink)*var(--height))))_scale(var(--scale))] rounded-lg border border-gray-200 bg-gray-50 bg-clip-padding p-4 shadow-lg select-none after:absolute after:top-full after:left-0 after:h-[calc(var(--gap)+1px)] after:w-full after:content-[''] data-[ending-style]:opacity-0 data-[limited]:opacity-0 data-[starting-style]:[transform:translateY(150%)] [&[data-ending-style]:not([data-limited]):not([data-swipe-direction])]:[transform:translateY(150%)] data-[ending-style]:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))] data-[ending-style]:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))] data-[ending-style]:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))] data-[ending-style]:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))] h-[var(--height)] [transition:transform_0.5s_cubic-bezier(0.22,1,0.36,1),opacity_0.5s,height_0.15s]"
    >
      <Toast.Content className="overflow-hidden transition-opacity [transition-duration:250ms]">
        <Toast.Title className="text-[0.975rem] leading-5 font-medium" />
        <Toast.Description className="text-[0.925rem] leading-5 text-gray-700" />
        <div
          className="text-xs mt-2 p-3 py-2 bg-gray-100 text-gray-900 font-medium rounded-md select-text"
          data-swipe-ignore
        >
          <pre className="whitespace-pre-wrap">{JSON.stringify(toast.data, null, 2)}</pre>
        </div>
        <Toast.Close
          className="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded border-none bg-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          aria-label="Close"
        >
          <X className="size-4" />
        </Toast.Close>
      </Toast.Content>
    </Toast.Root>
  ));
}

export function ToastProvider(props: { children: React.ReactNode }) {
  return (
    <Toast.Provider limit={1}>
      {props.children}
      <Toast.Portal>
        <Toast.Viewport className="fixed z-10 top-auto right-[1rem] bottom-[1rem] mx-auto flex w-[250px] sm:right-[2rem] sm:bottom-[2rem] sm:w-[360px]">
          <Toasts />
        </Toast.Viewport>
      </Toast.Portal>
    </Toast.Provider>
  );
}

export const useToastManager = Toast.useToastManager;
```

```tsx
/* autocomplete.tsx */
import * as React from 'react';
import clsx from 'clsx';
import { Autocomplete } from '@base-ui/react/autocomplete';

export function Root(props: Autocomplete.Root.Props<any>) {
  return <Autocomplete.Root {...props} />;
}

export const Input = React.forwardRef<HTMLInputElement, Autocomplete.Input.Props>(function Input(
  { className, ...props }: Autocomplete.Input.Props,
  forwardedRef: React.ForwardedRef<HTMLInputElement>,
) {
  return (
    <Autocomplete.Input
      ref={forwardedRef}
      className={clsx(
        'bg-[canvas] h-10 w-[16rem] md:w-[20rem] font-normal rounded-md border border-gray-200 pl-3.5 text-base text-gray-900 focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-blue-800',
        className,
      )}
      {...props}
    />
  );
});

export function Portal(props: Autocomplete.Portal.Props) {
  return <Autocomplete.Portal {...props} />;
}

export function Positioner({ className, ...props }: Autocomplete.Positioner.Props) {
  return (
    <Autocomplete.Positioner
      className={clsx('outline-none data-[empty]:hidden', className)}
      sideOffset={4}
      {...props}
    />
  );
}

export function Popup({ className, ...props }: Autocomplete.Popup.Props) {
  return (
    <Autocomplete.Popup
      className={clsx(
        'w-[var(--anchor-width)] max-h-[min(var(--available-height),23rem)] max-w-[var(--available-width)] overflow-y-auto scroll-pt-2 scroll-pb-2 overscroll-contain rounded-md bg-[canvas] py-2 text-gray-900 shadow-lg shadow-gray-200 outline-1 outline-gray-200 dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300',
        className,
      )}
      {...props}
    />
  );
}

export function List(props: Autocomplete.List.Props) {
  return <Autocomplete.List {...props} />;
}

export function Item({ className, ...props }: Autocomplete.Item.Props) {
  return (
    <Autocomplete.Item
      className={clsx(
        'flex flex-col gap-0.25 cursor-default py-2 pr-8 pl-4 text-base leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-2 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded data-[highlighted]:before:bg-gray-900',
        className,
      )}
      {...props}
    />
  );
}
```

```tsx
/* checkbox.tsx */
import * as React from 'react';
import clsx from 'clsx';
import { Checkbox } from '@base-ui/react/checkbox';

export function Root({ className, ...props }: Checkbox.Root.Props) {
  return (
    <Checkbox.Root
      className={clsx(
        'flex size-5 items-center justify-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 data-[checked]:bg-gray-900 data-[unchecked]:border data-[unchecked]:border-gray-300',
        className,
      )}
      {...props}
    />
  );
}

export function Indicator({ className, ...props }: Checkbox.Indicator.Props) {
  return (
    <Checkbox.Indicator
      className={clsx('flex text-gray-50 data-[unchecked]:hidden', className)}
      {...props}
    />
  );
}
```

```tsx
/* combobox.tsx */
import * as React from 'react';
import clsx from 'clsx';
import { Combobox } from '@base-ui/react/combobox';
import { X } from 'lucide-react';

export function Root(props: Combobox.Root.Props<any, any>) {
  return <Combobox.Root {...props} />;
}

export const Input = React.forwardRef<HTMLInputElement, Combobox.Input.Props>(function Input(
  { className, ...props }: Combobox.Input.Props,
  forwardedRef: React.ForwardedRef<HTMLInputElement>,
) {
  return (
    <Combobox.Input
      ref={forwardedRef}
      className={clsx(
        'h-10 w-64 rounded-md font-normal border border-gray-200 pl-3.5 text-base text-gray-900 bg-[canvas] focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-blue-800',
        className,
      )}
      {...props}
    />
  );
});

export function Clear({ className, ...props }: Combobox.Clear.Props) {
  return (
    <Combobox.Clear
      className={clsx(
        'combobox-clear flex h-10 w-6 items-center justify-center rounded bg-transparent p-0',
        className,
      )}
      {...props}
    >
      <X className="size-4" />
    </Combobox.Clear>
  );
}

export function Trigger({ className, ...props }: Combobox.Trigger.Props) {
  return (
    <Combobox.Trigger
      className={clsx(
        'flex h-10 w-6 items-center justify-center rounded bg-transparent p-0',
        className,
      )}
      {...props}
    />
  );
}

export function Portal(props: Combobox.Portal.Props) {
  return <Combobox.Portal {...props} />;
}

export function Positioner({ className, ...props }: Combobox.Positioner.Props) {
  return (
    <Combobox.Positioner className={clsx('outline-none', className)} sideOffset={4} {...props} />
  );
}

export function Popup({ className, ...props }: Combobox.Popup.Props) {
  return (
    <Combobox.Popup
      className={clsx(
        'w-[var(--anchor-width)] max-h-[23rem] max-w-[var(--available-width)] origin-[var(--transform-origin)] rounded-md bg-[canvas] text-gray-900 shadow-lg shadow-gray-200 outline-1 outline-gray-200 transition-[transform,scale,opacity] data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0 dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300 duration-100',
        className,
      )}
      {...props}
    />
  );
}

export function Empty({ className, ...props }: Combobox.Empty.Props) {
  return (
    <Combobox.Empty
      className={clsx('p-4 text-[0.925rem] leading-4 text-gray-600 empty:m-0 empty:p-0', className)}
      {...props}
    />
  );
}

export function List({ className, ...props }: Combobox.List.Props) {
  return (
    <Combobox.List
      className={clsx(
        'outline-0 overflow-y-auto scroll-py-[0.5rem] py-2 overscroll-contain max-h-[min(23rem,var(--available-height))] data-[empty]:p-0',
        className,
      )}
      {...props}
    />
  );
}

export function Item({ className, ...props }: Combobox.Item.Props) {
  return (
    <Combobox.Item
      className={clsx(
        'grid cursor-default grid-cols-[0.75rem_1fr] items-center gap-2 py-2 pr-8 pl-4 text-base leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-2 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900',
        className,
      )}
      {...props}
    />
  );
}

export function ItemIndicator({ className, ...props }: Combobox.ItemIndicator.Props) {
  return <Combobox.ItemIndicator className={clsx('col-start-1', className)} {...props} />;
}
```

```tsx
/* field.tsx */
import * as React from 'react';
import clsx from 'clsx';
import { Field } from '@base-ui/react/field';

export function Root({ className, ...props }: Field.Root.Props) {
  return <Field.Root className={clsx('flex flex-col items-start gap-1', className)} {...props} />;
}

export function Label({ className, ...props }: Field.Label.Props) {
  return (
    <Field.Label
      className={clsx(
        'text-sm font-medium text-gray-900 has-[[role="checkbox"]]:flex has-[[role="checkbox"]]:items-center has-[[role="checkbox"]]:gap-2 has-[[role="radio"]]:flex has-[[role="radio"]]:items-center has-[[role="radio"]]:gap-2 has-[[role="switch"]]:flex has-[[role="switch"]]:items-center has-[[role="radio"]]:font-normal',
        className,
      )}
      {...props}
    />
  );
}

export function Description({ className, ...props }: Field.Description.Props) {
  return <Field.Description className={clsx('text-sm text-gray-600', className)} {...props} />;
}

export const Control = React.forwardRef<HTMLInputElement, Field.Control.Props>(
  function FieldControl(
    { className, ...props }: Field.Control.Props,
    forwardedRef: React.ForwardedRef<HTMLInputElement>,
  ) {
    return (
      <Field.Control
        ref={forwardedRef}
        className={clsx(
          'h-10 w-full max-w-xs rounded-md bg-[canvas] border border-gray-200 pl-3.5 text-base text-gray-900 focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-blue-800',
          className,
        )}
        {...props}
      />
    );
  },
);

export function Error({ className, ...props }: Field.Error.Props) {
  return <Field.Error className={clsx('text-sm text-red-800', className)} {...props} />;
}

export function Item(props: Field.Item.Props) {
  return <Field.Item {...props} />;
}
```

```tsx
/* fieldset.tsx */
import * as React from 'react';
import clsx from 'clsx';
import { Fieldset } from '@base-ui/react/fieldset';

export function Root(props: Fieldset.Root.Props) {
  return <Fieldset.Root {...props} />;
}

export function Legend({ className, ...props }: Fieldset.Legend.Props) {
  return (
    <Fieldset.Legend className={clsx('text-sm font-medium text-gray-900', className)} {...props} />
  );
}
```

```tsx
/* number-field.tsx */
import * as React from 'react';
import clsx from 'clsx';
import { NumberField } from '@base-ui/react/number-field';

export function Root({ className, ...props }: NumberField.Root.Props) {
  return (
    <NumberField.Root className={clsx('flex flex-col items-start gap-1', className)} {...props} />
  );
}

export function Group({ className, ...props }: NumberField.Group.Props) {
  return <NumberField.Group className={clsx('flex', className)} {...props} />;
}

export function Decrement({ className, ...props }: NumberField.Decrement.Props) {
  return (
    <NumberField.Decrement
      className={clsx(
        'flex size-10 items-center justify-center rounded-tl-md rounded-bl-md border border-gray-200 bg-gray-50 bg-clip-padding text-gray-900 select-none hover:bg-gray-100 active:bg-gray-100',
        className,
      )}
      {...props}
    />
  );
}

export const Input = React.forwardRef<HTMLInputElement, NumberField.Input.Props>(function Input(
  { className, ...props }: NumberField.Input.Props,
  forwardedRef: React.ForwardedRef<HTMLInputElement>,
) {
  return (
    <NumberField.Input
      ref={forwardedRef}
      className={clsx(
        'h-10 w-24 border-t border-b border-gray-200 text-center text-base text-gray-900 tabular-nums focus:z-1 focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-blue-800',
        className,
      )}
      {...props}
    />
  );
});

export function Increment({ className, ...props }: NumberField.Increment.Props) {
  return (
    <NumberField.Increment
      className={clsx(
        'flex size-10 items-center justify-center rounded-tr-md rounded-br-md border border-gray-200 bg-gray-50 bg-clip-padding text-gray-900 select-none hover:bg-gray-100 active:bg-gray-100',
        className,
      )}
      {...props}
    />
  );
}
```

```tsx
/* radio.tsx */
import * as React from 'react';
import clsx from 'clsx';
import { Radio } from '@base-ui/react/radio';

export function Root({ className, ...props }: Radio.Root.Props) {
  return (
    <Radio.Root
      className={clsx(
        'flex size-5 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 data-[checked]:bg-gray-900 data-[unchecked]:border data-[unchecked]:border-gray-300',
        className,
      )}
      {...props}
    />
  );
}

export function Indicator({ className, ...props }: Radio.Indicator.Props) {
  return (
    <Radio.Indicator
      className={clsx(
        'flex before:size-2 before:rounded-full before:bg-gray-50 data-[unchecked]:hidden',
        className,
      )}
      {...props}
    />
  );
}
```

```tsx
/* select.tsx */
import * as React from 'react';
import clsx from 'clsx';
import { Select } from '@base-ui/react/select';

export function Root(props: Select.Root.Props<any>) {
  return <Select.Root {...props} />;
}

export function Trigger({ className, ...props }: Select.Trigger.Props) {
  return (
    <Select.Trigger
      className={clsx(
        'flex h-10 min-w-36 items-center justify-between gap-3 rounded-md border border-gray-200 pr-3 pl-3.5 text-base text-gray-900 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 data-[popup-open]:bg-gray-100 cursor-default not-[[data-filled]]:text-gray-500 bg-[canvas]',
        className,
      )}
      {...props}
    />
  );
}

export function Value({ className, ...props }: Select.Value.Props) {
  return <Select.Value className={clsx('', className)} {...props} />;
}

export function Icon({ className, ...props }: Select.Icon.Props) {
  return <Select.Icon className={clsx('flex', className)} {...props} />;
}

export function Portal(props: Select.Portal.Props) {
  return <Select.Portal {...props} />;
}

export function Positioner({ className, ...props }: Select.Positioner.Props) {
  return (
    <Select.Positioner
      className={clsx('outline-none select-none z-10', className)}
      sideOffset={8}
      {...props}
    />
  );
}

export function Popup({ className, ...props }: Select.Popup.Props) {
  return (
    <Select.Popup
      className={clsx(
        'group origin-[var(--transform-origin)] bg-clip-padding rounded-md bg-[canvas] text-gray-900 shadow-lg shadow-gray-200 outline outline-gray-200 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[side=none]:data-[ending-style]:transition-none data-[starting-style]:scale-90 data-[starting-style]:opacity-0 data-[side=none]:data-[starting-style]:scale-100 data-[side=none]:data-[starting-style]:opacity-100 data-[side=none]:data-[starting-style]:transition-none dark:shadow-none dark:outline-gray-300',
        className,
      )}
      {...props}
    />
  );
}

export function ScrollUpArrow({ className, ...props }: Select.ScrollUpArrow.Props) {
  return (
    <Select.ScrollUpArrow
      className={clsx(
        "top-0 z-[1] flex h-4 w-full cursor-default items-center justify-center rounded-md bg-[canvas] text-center text-xs before:absolute data-[side=none]:before:top-[-100%] before:left-0 before:h-full before:w-full before:content-['']",
        className,
      )}
      {...props}
    />
  );
}

export function ScrollDownArrow({ className, ...props }: Select.ScrollDownArrow.Props) {
  return (
    <Select.ScrollDownArrow
      className={clsx(
        "bottom-0 z-[1] flex h-4 w-full cursor-default items-center justify-center rounded-md bg-[canvas] text-center text-xs before:absolute before:left-0 before:h-full before:w-full before:content-[''] data-[side=none]:before:bottom-[-100%]",
        className,
      )}
      {...props}
    />
  );
}

export function List({ className, ...props }: Select.List.Props) {
  return (
    <Select.List
      className={clsx(
        'relative py-1 scroll-py-6 overflow-y-auto max-h-[var(--available-height)]',
        className,
      )}
      {...props}
    />
  );
}

export function Item({ className, ...props }: Select.Item.Props) {
  return (
    <Select.Item
      className={clsx(
        'grid min-w-[var(--anchor-width)] cursor-default grid-cols-[0.75rem_1fr] items-center gap-3 py-2 pr-4 pl-2.5 text-sm leading-4 outline-none select-none group-data-[side=none]:min-w-[calc(var(--anchor-width)+1rem)] group-data-[side=none]:pr-12 group-data-[side=none]:text-base group-data-[side=none]:leading-4 data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900 pointer-coarse:py-2.5 pointer-coarse:text-[0.925rem]',
        className,
      )}
      {...props}
    />
  );
}

export function ItemIndicator({ className, ...props }: Select.ItemIndicator.Props) {
  return <Select.ItemIndicator className={clsx('col-start-1', className)} {...props} />;
}

export function ItemText({ className, ...props }: Select.ItemText.Props) {
  return <Select.ItemText className={clsx('col-start-2', className)} {...props} />;
}
```

```tsx
/* slider.tsx */
import * as React from 'react';
import clsx from 'clsx';
import { Slider } from '@base-ui/react/slider';

export function Root({ className, ...props }: Slider.Root.Props<any>) {
  return <Slider.Root className={clsx('grid grid-cols-2', className)} {...props} />;
}

export function Value({ className, ...props }: Slider.Value.Props) {
  return (
    <Slider.Value className={clsx('text-sm font-medium text-gray-900', className)} {...props} />
  );
}

export function Control({ className, ...props }: Slider.Control.Props) {
  return (
    <Slider.Control
      className={clsx('flex col-span-2 touch-none items-center py-3 select-none', className)}
      {...props}
    />
  );
}

export function Track({ className, ...props }: Slider.Track.Props) {
  return (
    <Slider.Track
      className={clsx(
        'h-1 w-full rounded bg-gray-200 shadow-[inset_0_0_0_1px] shadow-gray-200 select-none',
        className,
      )}
      {...props}
    />
  );
}

export function Indicator({ className, ...props }: Slider.Indicator.Props) {
  return (
    <Slider.Indicator className={clsx('rounded bg-gray-700 select-none', className)} {...props} />
  );
}

export function Thumb({ className, ...props }: Slider.Thumb.Props) {
  return (
    <Slider.Thumb
      className={clsx(
        'size-4 rounded-full bg-white outline outline-gray-300 select-none has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-blue-800',
        className,
      )}
      {...props}
    />
  );
}
```

```tsx
/* switch.tsx */
import * as React from 'react';
import clsx from 'clsx';
import { Switch } from '@base-ui/react/switch';

export function Root({ className, ...props }: Switch.Root.Props) {
  return (
    <Switch.Root
      className={clsx(
        'relative flex h-6 w-10 rounded-full bg-gradient-to-r from-gray-700 from-35% to-gray-200 to-65% bg-[length:6.5rem_100%] bg-[100%_0%] bg-no-repeat p-px shadow-[inset_0_1.5px_2px] shadow-gray-200 outline outline-1 -outline-offset-1 outline-gray-200 transition-[background-position,box-shadow] duration-[125ms] ease-[cubic-bezier(0.26,0.75,0.38,0.45)] before:absolute before:rounded-full before:outline-offset-2 before:outline-blue-800 focus-visible:before:inset-0 focus-visible:before:outline focus-visible:before:outline-2 active:bg-gray-100 data-[checked]:bg-[0%_0%] data-[checked]:active:bg-gray-500 dark:from-gray-500 dark:shadow-black/75 dark:outline-white/15 dark:data-[checked]:shadow-none',
        className,
      )}
      {...props}
    />
  );
}

export function Thumb({ className, ...props }: Switch.Thumb.Props) {
  return (
    <Switch.Thumb
      className={clsx(
        'aspect-square h-full rounded-full bg-white shadow-[0_0_1px_1px,0_1px_1px,1px_2px_4px_-1px] shadow-gray-100 transition-transform duration-150 data-[checked]:translate-x-4 dark:shadow-black/25',
        className,
      )}
      {...props}
    />
  );
}
```

### Initialize the form

Create a form instance with the `useForm` hook, assigning the initial value of each field by their name in the `defaultValues` parameter:

```tsx {13-14} title="Initialize a form instance"
import { useForm } from '@tanstack/react-form';

interface FormValues {
  username: string;
  email: string;
}

const defaultValues: FormValues = {
  username: '',
  email: '',
};

/* useForm returns a form instance */
const form = useForm<FormValues>({
  defaultValues,
});
```

### Integrate components

Use the `<form.Field>` component from the form instance to integrate with Base UI components using the `children` prop, forwarding the various `field` render props to the appropriate part:

```tsx {7-9, 11-14, 18-20, 24} title="Integrating TanStack Form with Base UI components" "field.name" "value" "isValid" "isDirty" "isTouched" "handleChange" "handleBlur"
import { useForm } from '@tanstack/react-form';
import { Field } from '@base-ui/react/field';

const form = useForm(/* defaultValues, other parameters */)

<form>
  <form.Field
    name="username"
    children={(field) => (
      <Field.Root
        name={field.name}
        invalid={!field.state.meta.isValid}
        dirty={field.state.meta.isDirty}
        touched={field.state.meta.isTouched}
      >
        <Field.Label>Username</Field.Label>
        <Field.Control
          value={field.state.value}
          onValueChange={field.handleChange}
          onBlur={field.handleBlur}
          placeholder="e.g. bob276"
        />

        <Field.Error match={!field.state.meta.isValid}>
          {field.state.meta.errors.join(',')}
        </Field.Error>
      </Field.Root>
    )}
  />
</form>
```

The Base UI `<Form>` component is not needed when using TanStack Form.

### Form validation

To configure a native `<form>`-like validation strategy:

1. Use the additional `revalidateLogic` hook and pass it to `useForm`.
2. Pass a validation function to the `validators.onDynamic` prop on `<form.Field>` that returns an error object with keys corresponding to the field `name`s.

This validates all fields when the first submission is attempted, and revalidates any invalid fields when their values change again.

```tsx {8, 13} title="Form-level validators" "revalidateLogic" "onDynamic"
import { useForm, revalidateLogic } from '@tanstack/react-form';

const form = useForm({
  defaultValues: {
    username: '',
    email: '',
  },
  validationLogic: revalidateLogic({
    mode: 'submit',
    modeAfterSubmission: 'change',
  }),
  validators: {
    onDynamic: ({ value: formValues }) => {
      const errors = {};

      if (!formValues.username) {
        errors.username = 'Username is required.';
      } else if (formValues.username.length < 3) {
        errors.username = 'At least 3 characters.';
      }

      if (!formValues.email) {
        errors.email = 'Email is required.';
      } else if (!isValidEmail(formValues.email)) {
        errors.email = 'Invalid email address.';
      }

      return { form: errors, fields: errors };
    },
  },
});
```

### Field validation

You can pass additional validator functions to individual `<form.Field>` components to add validations on top of the form-level validators:

```tsx {8-16} title="Field-level validators"
import { Field } from '@base-ui/react/field';
import { useForm } from '@tanstack/react-form';

const form = useForm();

<form.Field
  name="username"
  validators={{
    onChangeAsync: async ({ value: username }) => {
      const result = await fetch(
        /* check the availability of a username from an external API */
      );

      return result.success ? undefined : `${username} is not available.`
    }
  }}
  children={(field) => (
    <Field.Root name={field.name} /* forward the field props */ />
  )}
>
```

### Submitting data

To submit the form:

1. Pass a submit handler function to the `onSubmit` parameter of `useForm`.
2. Call `form.handleSubmit()` from an event handler such as form `onSubmit` or `onClick` on a button.

```tsx {4-7, 13, 17} title="Form submission handler" "form.handleSubmit()"
import { useForm } from '@tanstack/react-form';

const form = useForm({
  onSubmit: async ({ value: formValues }) => {
    /* prettier-ignore */
    await fetch(/* POST the `formValues` to an external API */);
  },
});

<form
  onSubmit={(event) => {
    event.preventDefault();
    form.handleSubmit();
  }}
>
  {/* form fields */}
  <button type="submit">Submit</button>
</form>;
```
