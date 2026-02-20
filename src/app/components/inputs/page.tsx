"use client";

import * as React from "react";
import { PageHeader } from "@/components/layout";
import { ComponentDemo } from "@/components/showcase";

import { Button } from "@base-ui/react/button";
import { Input } from "@base-ui/react/input";
import { Checkbox } from "@base-ui/react/checkbox";
import { CheckboxGroup } from "@base-ui/react/checkbox-group";
import { Radio } from "@base-ui/react/radio";
import { RadioGroup } from "@base-ui/react/radio-group";
import { Switch } from "@base-ui/react/switch";
import { Slider } from "@base-ui/react/slider";
import { NumberField } from "@base-ui/react/number-field";
import { Select } from "@base-ui/react/select";
import { Field } from "@base-ui/react/field";

// ─── Shared SVG Icons ─────────────────────────────────────────────────────────

function CheckIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      fill="currentcolor"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      {...props}
    >
      <path d="M9.1603 1.12218C9.50684 1.34873 9.60427 1.81354 9.37792 2.16038L5.13603 8.66012C5.01614 8.8438 4.82192 8.96576 4.60451 8.99384C4.3871 9.02194 4.1683 8.95335 4.00574 8.80615L1.24664 6.30769C0.939709 6.02975 0.916013 5.55541 1.19372 5.24822C1.47142 4.94102 1.94536 4.91731 2.2523 5.19524L4.36085 7.10461L8.12299 1.33999C8.34934 0.993152 8.81376 0.895638 9.1603 1.12218Z" />
    </svg>
  );
}

function HorizontalRuleIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="currentcolor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="3"
        y1="12"
        x2="21"
        y2="12"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronUpDownIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      stroke="currentcolor"
      strokeWidth="1.5"
      {...props}
    >
      <path d="M0.5 4.5L4 1.5L7.5 4.5" />
      <path d="M0.5 7.5L4 10.5L7.5 7.5" />
    </svg>
  );
}

function PlusIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentcolor"
      strokeWidth="1.6"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 5H5M10 5H5M5 5V0M5 5V10" />
    </svg>
  );
}

function MinusIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentcolor"
      strokeWidth="1.6"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 5H10" />
    </svg>
  );
}

function CursorGrowIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="26"
      height="14"
      viewBox="0 0 24 14"
      fill="black"
      stroke="white"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M19.5 5.5L6.49737 5.51844V2L1 6.9999L6.5 12L6.49737 8.5L19.5 8.5V12L25 6.9999L19.5 2V5.5Z" />
    </svg>
  );
}

// ─── Tailwind Class Constants ─────────────────────────────────────────────────

const buttonBase =
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring focus-visible:-outline-offset-1 data-[disabled]:opacity-50 data-[disabled]:pointer-events-none";

const checkboxRoot =
  "flex size-5 items-center justify-center rounded-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring data-[checked]:bg-primary data-[unchecked]:border data-[unchecked]:border-border-hover data-[indeterminate]:border data-[indeterminate]:border-border-hover";

const checkboxIndicator =
  "flex text-primary-foreground data-[unchecked]:hidden data-[indeterminate]:text-foreground";

const radioRoot =
  "flex size-5 items-center justify-center rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring data-[checked]:bg-primary data-[unchecked]:border data-[unchecked]:border-border-hover";

const radioIndicator =
  "flex before:size-2 before:rounded-full before:bg-primary-foreground data-[unchecked]:hidden";

const sliderControl = "flex w-full touch-none items-center py-3 select-none";

const sliderTrack =
  "h-1.5 w-full rounded-full bg-surface-active shadow-[inset_0_0_0_1px] shadow-border select-none";

const sliderIndicator = "rounded-full bg-primary select-none";

const sliderThumb =
  "size-4 rounded-full bg-background shadow-[0_0_0_2px] shadow-primary select-none has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ring has-[:focus-visible]:outline-offset-2";

// ─── Button Demo ──────────────────────────────────────────────────────────────

function ButtonDemo() {
  const [loading, setLoading] = React.useState(false);

  return (
    <div className="flex w-full flex-col gap-8">
      {/* Variants */}
      <div className="flex flex-col gap-3">
        <span className="text-xs font-medium uppercase tracking-wider text-muted">
          Variants
        </span>
        <div className="flex flex-wrap items-center gap-3">
          <Button
            className={`${buttonBase} h-10 px-4 border border-border bg-surface text-foreground hover:bg-surface-hover active:bg-surface-active`}
          >
            Default
          </Button>
          <Button
            className={`${buttonBase} h-10 px-4 bg-primary text-primary-foreground hover:bg-primary-hover active:opacity-90`}
          >
            Primary
          </Button>
          <Button
            className={`${buttonBase} h-10 px-4 border border-border text-foreground hover:bg-surface active:bg-surface-active bg-transparent`}
          >
            Outline
          </Button>
          <Button
            className={`${buttonBase} h-10 px-4 text-foreground hover:bg-surface active:bg-surface-active bg-transparent`}
          >
            Ghost
          </Button>
          <Button
            className={`${buttonBase} h-10 px-4 bg-red-600 text-white hover:bg-red-700 active:bg-red-800`}
          >
            Destructive
          </Button>
        </div>
      </div>

      {/* Sizes */}
      <div className="flex flex-col gap-3">
        <span className="text-xs font-medium uppercase tracking-wider text-muted">
          Sizes
        </span>
        <div className="flex flex-wrap items-center gap-3">
          <Button
            className={`${buttonBase} h-8 px-3 text-xs bg-primary text-primary-foreground hover:bg-primary-hover`}
          >
            Small
          </Button>
          <Button
            className={`${buttonBase} h-10 px-4 bg-primary text-primary-foreground hover:bg-primary-hover`}
          >
            Medium
          </Button>
          <Button
            className={`${buttonBase} h-12 px-6 text-base bg-primary text-primary-foreground hover:bg-primary-hover`}
          >
            Large
          </Button>
        </div>
      </div>

      {/* States */}
      <div className="flex flex-col gap-3">
        <span className="text-xs font-medium uppercase tracking-wider text-muted">
          States
        </span>
        <div className="flex flex-wrap items-center gap-3">
          <Button
            disabled
            className={`${buttonBase} h-10 px-4 bg-primary text-primary-foreground`}
          >
            Disabled
          </Button>
          <Button
            className={`${buttonBase} h-10 px-4 bg-primary text-primary-foreground hover:bg-primary-hover`}
            disabled={loading}
            focusableWhenDisabled
            onClick={() => {
              setLoading(true);
              setTimeout(() => setLoading(false), 2000);
            }}
          >
            {loading ? "Loading..." : "Click to Load"}
          </Button>
        </div>
      </div>
    </div>
  );
}

// ─── Input Demo ───────────────────────────────────────────────────────────────

const inputClass =
  "h-10 w-full rounded-md border border-border bg-background px-3.5 text-sm text-foreground placeholder:text-muted transition-colors focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-ring data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed";

function InputDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-foreground">Name</span>
        <Input placeholder="Enter your name" className={inputClass} />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-foreground">Email</span>
        <Input
          type="email"
          placeholder="you@example.com"
          className={inputClass}
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-foreground">
          Disabled Input
        </span>
        <Input disabled placeholder="Cannot edit this" className={inputClass} />
      </label>
    </div>
  );
}

// ─── Checkbox Demo ────────────────────────────────────────────────────────────

function CheckboxDemo() {
  const [indeterminate, setIndeterminate] = React.useState(true);

  return (
    <div className="flex w-full flex-col gap-6">
      {/* Basic checkboxes */}
      <div className="flex flex-col gap-3">
        <span className="text-xs font-medium uppercase tracking-wider text-muted">
          Basic
        </span>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2.5 text-sm text-foreground">
            <Checkbox.Root defaultChecked className={checkboxRoot}>
              <Checkbox.Indicator className={checkboxIndicator}>
                <CheckIcon className="size-3" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Checked by default
          </label>

          <label className="flex items-center gap-2.5 text-sm text-foreground">
            <Checkbox.Root className={checkboxRoot}>
              <Checkbox.Indicator className={checkboxIndicator}>
                <CheckIcon className="size-3" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Unchecked by default
          </label>

          <label className="flex items-center gap-2.5 text-sm text-foreground opacity-50">
            <Checkbox.Root disabled className={checkboxRoot}>
              <Checkbox.Indicator className={checkboxIndicator}>
                <CheckIcon className="size-3" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Disabled
          </label>
        </div>
      </div>

      {/* Indeterminate */}
      <div className="flex flex-col gap-3">
        <span className="text-xs font-medium uppercase tracking-wider text-muted">
          Indeterminate
        </span>
        <label className="flex items-center gap-2.5 text-sm text-foreground">
          <Checkbox.Root
            checked={indeterminate ? undefined : false}
            indeterminate={indeterminate}
            onCheckedChange={() => setIndeterminate(false)}
            className={checkboxRoot}
          >
            <Checkbox.Indicator
              className={checkboxIndicator}
              keepMounted
              render={(props, state) => (
                <span {...props}>
                  {state.indeterminate ? (
                    <HorizontalRuleIcon className="size-3" />
                  ) : (
                    <CheckIcon className="size-3" />
                  )}
                </span>
              )}
            />
          </Checkbox.Root>
          {indeterminate ? "Indeterminate state" : "Click to check"}
        </label>
      </div>
    </div>
  );
}

// ─── Checkbox Group Demo ──────────────────────────────────────────────────────

const toppings = ["pepperoni", "mushrooms", "olives", "onions"];

function CheckboxGroupDemo() {
  const id = React.useId();
  const [value, setValue] = React.useState<string[]>(["pepperoni"]);

  return (
    <div className="flex w-full flex-col gap-3">
      <CheckboxGroup
        aria-labelledby={id}
        value={value}
        onValueChange={setValue}
        allValues={toppings}
        className="flex flex-col items-start gap-2 text-foreground"
        style={{ marginLeft: "1.25rem" }}
      >
        <label
          className="flex items-center gap-2.5 text-sm font-medium"
          id={id}
          style={{ marginLeft: "-1.25rem" }}
        >
          <Checkbox.Root className={checkboxRoot} parent>
            <Checkbox.Indicator
              className={checkboxIndicator}
              keepMounted
              render={(props, state) => (
                <span {...props}>
                  {state.indeterminate ? (
                    <HorizontalRuleIcon className="size-3" />
                  ) : (
                    <CheckIcon className="size-3" />
                  )}
                </span>
              )}
            />
          </Checkbox.Root>
          Pizza Toppings
        </label>

        {toppings.map((topping) => (
          <label
            key={topping}
            className="flex items-center gap-2.5 text-sm text-foreground"
          >
            <Checkbox.Root value={topping} className={checkboxRoot}>
              <Checkbox.Indicator className={checkboxIndicator}>
                <CheckIcon className="size-3" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            {topping.charAt(0).toUpperCase() + topping.slice(1)}
          </label>
        ))}
      </CheckboxGroup>
    </div>
  );
}

// ─── Radio Demo ───────────────────────────────────────────────────────────────

function RadioDemo() {
  const id = React.useId();

  const options = [
    {
      value: "startup",
      label: "Startup",
      description: "12GB RAM, 6 CPUs, 160 GB SSD",
    },
    {
      value: "business",
      label: "Business",
      description: "16GB RAM, 8 CPUs, 512 GB SSD",
    },
    {
      value: "enterprise",
      label: "Enterprise",
      description: "32GB RAM, 12 CPUs, 1024 GB SSD",
    },
  ];

  return (
    <RadioGroup
      aria-labelledby={id}
      defaultValue="business"
      className="flex w-full flex-col items-start gap-2 text-foreground"
    >
      <div className="text-sm font-medium" id={id}>
        Server Plan
      </div>

      {options.map((option) => (
        <label
          key={option.value}
          className="flex w-full max-w-xs cursor-pointer items-start gap-3 rounded-lg border border-border p-3 transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ring hover:bg-surface"
        >
          <Radio.Root value={option.value} className={radioRoot}>
            <Radio.Indicator className={radioIndicator} />
          </Radio.Root>
          <div className="flex flex-col">
            <span className="text-sm font-medium">{option.label}</span>
            <span className="text-xs text-muted">{option.description}</span>
          </div>
        </label>
      ))}
    </RadioGroup>
  );
}

// ─── Switch Demo ──────────────────────────────────────────────────────────────

function SwitchDemo() {
  return (
    <div className="flex w-full flex-col gap-5">
      <label className="flex items-center gap-3 text-sm text-foreground">
        <Switch.Root
          defaultChecked
          className="relative flex h-6 w-10 shrink-0 cursor-pointer rounded-full bg-surface-active p-0.5 transition-colors duration-150 data-[checked]:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <Switch.Thumb className="block size-5 rounded-full bg-background shadow-sm transition-transform duration-150 data-[checked]:translate-x-4" />
        </Switch.Root>
        Wi-Fi
      </label>

      <label className="flex items-center gap-3 text-sm text-foreground">
        <Switch.Root className="relative flex h-6 w-10 shrink-0 cursor-pointer rounded-full bg-surface-active p-0.5 transition-colors duration-150 data-[checked]:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
          <Switch.Thumb className="block size-5 rounded-full bg-background shadow-sm transition-transform duration-150 data-[checked]:translate-x-4" />
        </Switch.Root>
        Bluetooth
      </label>

      <label className="flex items-center gap-3 text-sm text-foreground opacity-50">
        <Switch.Root
          disabled
          className="relative flex h-6 w-10 shrink-0 rounded-full bg-surface-active p-0.5 transition-colors duration-150 data-[checked]:bg-primary cursor-not-allowed"
        >
          <Switch.Thumb className="block size-5 rounded-full bg-background shadow-sm transition-transform duration-150 data-[checked]:translate-x-4" />
        </Switch.Root>
        Airplane Mode (disabled)
      </label>
    </div>
  );
}

// ─── Slider Demo ──────────────────────────────────────────────────────────────

function SliderDemo() {
  const [singleValue, setSingleValue] = React.useState<number | number[]>(35);
  const [rangeValue, setRangeValue] = React.useState<number | number[]>([
    20, 75,
  ]);

  return (
    <div className="flex w-full max-w-sm flex-col gap-8">
      {/* Single slider */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-foreground">Volume</span>
          <span className="text-sm tabular-nums text-muted">
            {Array.isArray(singleValue) ? singleValue[0] : singleValue}%
          </span>
        </div>
        <Slider.Root defaultValue={35} onValueChange={setSingleValue}>
          <Slider.Control className={sliderControl}>
            <Slider.Track className={sliderTrack}>
              <Slider.Indicator className={sliderIndicator} />
              <Slider.Thumb aria-label="Volume" className={sliderThumb} />
            </Slider.Track>
          </Slider.Control>
        </Slider.Root>
      </div>

      {/* Range slider */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span
            id="price-range-label"
            className="text-sm font-medium text-foreground"
          >
            Price Range
          </span>
          <span className="text-sm tabular-nums text-muted">
            ${Array.isArray(rangeValue) ? rangeValue[0] : rangeValue} - $
            {Array.isArray(rangeValue) ? rangeValue[1] : rangeValue}
          </span>
        </div>
        <Slider.Root
          defaultValue={[20, 75]}
          onValueChange={setRangeValue}
          aria-labelledby="price-range-label"
        >
          <Slider.Control className={sliderControl}>
            <Slider.Track className={sliderTrack}>
              <Slider.Indicator className={sliderIndicator} />
              <Slider.Thumb
                index={0}
                aria-label="Minimum price"
                className={sliderThumb}
              />
              <Slider.Thumb
                index={1}
                aria-label="Maximum price"
                className={sliderThumb}
              />
            </Slider.Track>
          </Slider.Control>
        </Slider.Root>
      </div>
    </div>
  );
}

// ─── Number Field Demo ────────────────────────────────────────────────────────

const numberFieldButton =
  "flex size-10 items-center justify-center border border-border bg-surface text-foreground select-none hover:bg-surface-hover active:bg-surface-active transition-colors";

function NumberFieldDemo() {
  const id = React.useId();

  return (
    <div className="flex w-full flex-col gap-6">
      <NumberField.Root
        id={id}
        defaultValue={50}
        min={0}
        max={100}
        className="flex flex-col items-start gap-1.5"
      >
        <NumberField.ScrubArea className="cursor-ew-resize">
          <label
            htmlFor={id}
            className="cursor-ew-resize text-sm font-medium text-foreground"
          >
            Quantity
          </label>
          <NumberField.ScrubAreaCursor className="drop-shadow-[0_1px_1px_#0008] filter">
            <CursorGrowIcon />
          </NumberField.ScrubAreaCursor>
        </NumberField.ScrubArea>

        <NumberField.Group className="flex">
          <NumberField.Decrement
            className={`${numberFieldButton} rounded-l-md`}
          >
            <MinusIcon />
          </NumberField.Decrement>
          <NumberField.Input className="h-10 w-20 border-t border-b border-border bg-background text-center text-sm text-foreground tabular-nums focus:z-10 focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-ring" />
          <NumberField.Increment
            className={`${numberFieldButton} rounded-r-md`}
          >
            <PlusIcon />
          </NumberField.Increment>
        </NumberField.Group>
      </NumberField.Root>
    </div>
  );
}

// ─── Select Demo ──────────────────────────────────────────────────────────────

const frameworks = [
  { label: "Next.js", value: "nextjs" },
  { label: "Remix", value: "remix" },
  { label: "Astro", value: "astro" },
  { label: "SvelteKit", value: "sveltekit" },
  { label: "Nuxt", value: "nuxt" },
];

function SelectDemo() {
  return (
    <Field.Root className="flex w-full flex-col gap-1.5">
      <Field.Label className="cursor-default text-sm font-medium text-foreground">
        Framework
      </Field.Label>
      <Select.Root items={frameworks}>
        <Select.Trigger className="flex h-10 min-w-48 items-center justify-between gap-3 rounded-md border border-border bg-background pr-3 pl-3.5 text-sm text-foreground select-none hover:bg-surface transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-ring data-[popup-open]:bg-surface">
          <Select.Value
            className="data-[placeholder]:text-muted"
            placeholder="Select a framework"
          />
          <Select.Icon className="flex text-muted">
            <ChevronUpDownIcon />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Positioner
            className="z-50 outline-none select-none"
            sideOffset={8}
          >
            <Select.Popup className="group min-w-[var(--anchor-width)] origin-[var(--transform-origin)] rounded-lg border border-border bg-background p-1 shadow-lg transition-[transform,scale,opacity] data-[starting-style]:scale-90 data-[starting-style]:opacity-0 data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[side=none]:min-w-[calc(var(--anchor-width)+1rem)] data-[side=none]:data-[starting-style]:scale-100 data-[side=none]:data-[starting-style]:opacity-100 data-[side=none]:data-[ending-style]:transition-none data-[side=none]:data-[starting-style]:transition-none">
              <Select.ScrollUpArrow className="flex h-4 w-full cursor-default items-center justify-center" />
              <Select.List className="scroll-py-1 overflow-y-auto max-h-available">
                {frameworks.map(({ label, value }) => (
                  <Select.Item
                    key={value}
                    value={value}
                    className="grid cursor-default grid-cols-[1rem_1fr] items-center gap-2 rounded-md py-2 pr-4 pl-2 text-sm leading-5 outline-none select-none data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground"
                  >
                    <Select.ItemIndicator className="col-start-1">
                      <CheckIcon className="size-3" />
                    </Select.ItemIndicator>
                    <Select.ItemText className="col-start-2">
                      {label}
                    </Select.ItemText>
                  </Select.Item>
                ))}
              </Select.List>
              <Select.ScrollDownArrow className="flex h-4 w-full cursor-default items-center justify-center" />
            </Select.Popup>
          </Select.Positioner>
        </Select.Portal>
      </Select.Root>
    </Field.Root>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function InputsPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Inputs"
        description="Form controls for capturing user input: buttons, text fields, checkboxes, radios, switches, sliders, and more."
      />

      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8">
          {/* Button */}
          <ComponentDemo
            title="Button"
            description="Triggers an action or event. Supports multiple variants, sizes, and states including loading."
            className="flex-col items-start"
          >
            <ButtonDemo />
          </ComponentDemo>

          {/* Input */}
          <ComponentDemo
            title="Input"
            description="A text input for capturing freeform user input. Supports placeholder text and disabled state."
            className="justify-start"
          >
            <InputDemo />
          </ComponentDemo>

          {/* Checkbox */}
          <ComponentDemo
            title="Checkbox"
            description="A toggle control that allows selecting one or more options. Supports checked, unchecked, indeterminate, and disabled states."
            className="justify-start"
          >
            <CheckboxDemo />
          </ComponentDemo>

          {/* Checkbox Group */}
          <ComponentDemo
            title="Checkbox Group"
            description="A group of related checkboxes with a parent checkbox that controls all children. Supports indeterminate state when partially selected."
            className="justify-start"
          >
            <CheckboxGroupDemo />
          </ComponentDemo>

          {/* Radio */}
          <ComponentDemo
            title="Radio Group"
            description="A set of mutually exclusive options where only one can be selected at a time. Ideal for choosing between a small set of options."
            className="justify-start"
          >
            <RadioDemo />
          </ComponentDemo>

          {/* Switch */}
          <ComponentDemo
            title="Switch"
            description="A toggle control for binary on/off settings. Provides immediate visual feedback of the current state."
            className="justify-start"
          >
            <SwitchDemo />
          </ComponentDemo>

          {/* Slider */}
          <ComponentDemo
            title="Slider"
            description="A draggable control for selecting a numeric value within a range. Supports both single-value and range selection."
            className="justify-start"
          >
            <SliderDemo />
          </ComponentDemo>

          {/* Number Field */}
          <ComponentDemo
            title="Number Field"
            description="A numeric input with increment and decrement buttons, keyboard support, and scrub-to-adjust functionality."
            className="justify-start"
          >
            <NumberFieldDemo />
          </ComponentDemo>

          {/* Select */}
          <ComponentDemo
            title="Select"
            description="A dropdown menu for choosing a single value from a predefined list. Keyboard-navigable with scroll support."
            className="justify-start"
          >
            <SelectDemo />
          </ComponentDemo>
        </div>
      </main>
    </div>
  );
}
