"use client";

import * as React from "react";
import { PageHeader } from "@/components/layout";
import { ComponentDemo } from "@/components/showcase";
import { Toggle } from "@base-ui/react/toggle";
import { ToggleGroup } from "@base-ui/react/toggle-group";
import { Field } from "@base-ui/react/field";
import { Fieldset } from "@base-ui/react/fieldset";
import { Form } from "@base-ui/react/form";
import { ComboboxDemo } from "./combobox-demo";
import { AutocompleteDemo } from "./autocomplete-demo";

/* ============================================
   SVG Icons
   ============================================ */

function BoldIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentcolor"
      {...props}
    >
      <path d="M4 2.5C4 2.22386 4.22386 2 4.5 2H8.5C10.433 2 12 3.567 12 5.5C12 6.50163 11.5826 7.40522 10.9166 8.04998C11.5836 8.69516 12 9.59953 12 10.6027C12 12.4827 10.4827 14 8.60274 14H4.5C4.22386 14 4 13.7761 4 13.5V2.5ZM5.5 8.7H8.60274C9.63 8.7 10.5 9.53503 10.5 10.6027C10.5 11.6296 9.62959 12.5 8.60274 12.5H5.5V8.7ZM5.5 7.2V3.5H8.5C9.60457 3.5 10.5 4.39543 10.5 5.5C10.5 6.4798 9.80237 7.2 8.9 7.2H5.5Z" />
    </svg>
  );
}

function ItalicIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentcolor"
      {...props}
    >
      <path d="M6.49995 2C6.22381 2 5.99995 2.22386 5.99995 2.5C5.99995 2.77614 6.22381 3 6.49995 3H8.22469L5.27462 13H3.49995C3.22381 13 2.99995 13.2239 2.99995 13.5C2.99995 13.7761 3.22381 14 3.49995 14H5.49995H7.49995H9.49995C9.77609 14 9.99995 13.7761 9.99995 13.5C9.99995 13.2239 9.77609 13 9.49995 13H7.77525L10.7253 3H12.4999C12.7761 3 12.9999 2.77614 12.9999 2.5C12.9999 2.22386 12.7761 2 12.4999 2H10.4999H8.49995H6.49995Z" />
    </svg>
  );
}

function UnderlineIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentcolor"
      {...props}
    >
      <path d="M4.5 2C4.77614 2 5 2.22386 5 2.5V8.5C5 10.1569 6.34315 11.5 8 11.5C9.65685 11.5 11 10.1569 11 8.5V2.5C11 2.22386 11.2239 2 11.5 2C11.7761 2 12 2.22386 12 2.5V8.5C12 10.7091 10.2091 12.5 8 12.5C5.79086 12.5 4 10.7091 4 8.5V2.5C4 2.22386 4.22386 2 4.5 2ZM3.5 14C3.22386 14 3 13.7761 3 13.5C3 13.2239 3.22386 13 3.5 13H12.5C12.7761 13 13 13.2239 13 13.5C13 13.7761 12.7761 14 12.5 14H3.5Z" />
    </svg>
  );
}

function AlignLeftIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      stroke="currentcolor"
      strokeLinecap="round"
      {...props}
    >
      <path d="M2.5 3.5H13.5" />
      <path d="M2.5 9.5H13.5" />
      <path d="M2.5 6.5H10.5" />
      <path d="M2.5 12.5H10.5" />
    </svg>
  );
}

function AlignCenterIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      stroke="currentcolor"
      strokeLinecap="round"
      {...props}
    >
      <path d="M3 3.5H14" />
      <path d="M3 9.5H14" />
      <path d="M4.5 6.5H12.5" />
      <path d="M4.5 12.5H12.5" />
    </svg>
  );
}

function AlignRightIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      stroke="currentcolor"
      strokeLinecap="round"
      {...props}
    >
      <path d="M2.5 3.5H13.5" />
      <path d="M2.5 9.5H13.5" />
      <path d="M5.5 6.5H13.5" />
      <path d="M5.5 12.5H13.5" />
    </svg>
  );
}

/* ============================================
   Toggle Demo
   ============================================ */

function ToggleDemo() {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Single toggle with pressed/unpressed visual states */}
      <div className="flex gap-px rounded-md border border-border bg-surface p-0.5">
        <Toggle
          aria-label="Bold"
          className="flex size-9 items-center justify-center rounded-sm text-muted transition-colors select-none hover:bg-surface-hover focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-ring active:bg-surface-active data-[pressed]:bg-surface-active data-[pressed]:text-foreground"
        >
          <BoldIcon className="size-4" />
        </Toggle>
      </div>
      <p className="text-sm text-muted">
        Click the button to toggle bold on/off
      </p>
    </div>
  );
}

/* ============================================
   Toggle Group Demos
   ============================================ */

function ToggleGroupDemo() {
  return (
    <div className="flex flex-col items-center gap-8">
      {/* Single selection group */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm font-medium text-foreground">
          Single selection (text alignment)
        </p>
        <ToggleGroup
          defaultValue={["left"]}
          className="flex gap-px rounded-md border border-border bg-surface p-0.5"
        >
          <Toggle
            aria-label="Align left"
            value="left"
            className="flex size-9 items-center justify-center rounded-sm text-muted transition-colors select-none hover:bg-surface-hover focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-ring active:bg-surface-active data-[pressed]:bg-surface-active data-[pressed]:text-foreground"
          >
            <AlignLeftIcon className="size-4" />
          </Toggle>
          <Toggle
            aria-label="Align center"
            value="center"
            className="flex size-9 items-center justify-center rounded-sm text-muted transition-colors select-none hover:bg-surface-hover focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-ring active:bg-surface-active data-[pressed]:bg-surface-active data-[pressed]:text-foreground"
          >
            <AlignCenterIcon className="size-4" />
          </Toggle>
          <Toggle
            aria-label="Align right"
            value="right"
            className="flex size-9 items-center justify-center rounded-sm text-muted transition-colors select-none hover:bg-surface-hover focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-ring active:bg-surface-active data-[pressed]:bg-surface-active data-[pressed]:text-foreground"
          >
            <AlignRightIcon className="size-4" />
          </Toggle>
        </ToggleGroup>
      </div>

      {/* Multiple selection group */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm font-medium text-foreground">
          Multiple selection (text formatting)
        </p>
        <ToggleGroup
          multiple
          defaultValue={["bold"]}
          className="flex gap-px rounded-md border border-border bg-surface p-0.5"
        >
          <Toggle
            aria-label="Bold"
            value="bold"
            className="flex size-9 items-center justify-center rounded-sm text-muted transition-colors select-none hover:bg-surface-hover focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-ring active:bg-surface-active data-[pressed]:bg-surface-active data-[pressed]:text-foreground"
          >
            <BoldIcon className="size-4" />
          </Toggle>
          <Toggle
            aria-label="Italic"
            value="italic"
            className="flex size-9 items-center justify-center rounded-sm text-muted transition-colors select-none hover:bg-surface-hover focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-ring active:bg-surface-active data-[pressed]:bg-surface-active data-[pressed]:text-foreground"
          >
            <ItalicIcon className="size-4" />
          </Toggle>
          <Toggle
            aria-label="Underline"
            value="underline"
            className="flex size-9 items-center justify-center rounded-sm text-muted transition-colors select-none hover:bg-surface-hover focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-ring active:bg-surface-active data-[pressed]:bg-surface-active data-[pressed]:text-foreground"
          >
            <UnderlineIcon className="size-4" />
          </Toggle>
        </ToggleGroup>
      </div>
    </div>
  );
}

/* ============================================
   Field Demo
   ============================================ */

const inputClass =
  "h-10 w-full rounded-md border border-border bg-background pl-3.5 text-base text-foreground placeholder:text-muted-foreground focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-ring data-[invalid]:border-red-500";

function FieldDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      {/* Basic field with label, description, and error */}
      <Field.Root className="flex w-full flex-col items-start gap-1">
        <Field.Label className="text-sm font-medium text-foreground">
          Full name
        </Field.Label>
        <Field.Control
          required
          placeholder="Enter your full name"
          className={inputClass}
        />
        <Field.Error className="text-sm text-red-600" match="valueMissing">
          Please enter your name.
        </Field.Error>
        <Field.Description className="text-sm text-muted">
          Your name as it appears on official documents.
        </Field.Description>
      </Field.Root>

      {/* Email field with type validation */}
      <Field.Root className="flex w-full flex-col items-start gap-1">
        <Field.Label className="text-sm font-medium text-foreground">
          Email address
        </Field.Label>
        <Field.Control
          type="email"
          required
          placeholder="you@example.com"
          className={inputClass}
        />
        <Field.Error className="text-sm text-red-600" match="valueMissing">
          Email is required.
        </Field.Error>
        <Field.Error className="text-sm text-red-600" match="typeMismatch">
          Please enter a valid email address.
        </Field.Error>
        <Field.Description className="text-sm text-muted">
          We will never share your email.
        </Field.Description>
      </Field.Root>
    </div>
  );
}

/* ============================================
   Fieldset Demo
   ============================================ */

function FieldsetDemo() {
  return (
    <Fieldset.Root className="flex w-full max-w-sm flex-col gap-4">
      <Fieldset.Legend className="border-b border-border pb-3 text-lg font-medium text-foreground">
        Shipping Address
      </Fieldset.Legend>

      <Field.Root className="flex flex-col items-start gap-1">
        <Field.Label className="text-sm font-medium text-foreground">
          Street address
        </Field.Label>
        <Field.Control placeholder="123 Main Street" className={inputClass} />
      </Field.Root>

      <div className="grid grid-cols-2 gap-4">
        <Field.Root className="flex flex-col items-start gap-1">
          <Field.Label className="text-sm font-medium text-foreground">
            City
          </Field.Label>
          <Field.Control placeholder="San Francisco" className={inputClass} />
        </Field.Root>

        <Field.Root className="flex flex-col items-start gap-1">
          <Field.Label className="text-sm font-medium text-foreground">
            ZIP code
          </Field.Label>
          <Field.Control
            placeholder="94107"
            pattern="[0-9]{5}"
            className={inputClass}
          />
          <Field.Error className="text-sm text-red-600" match="patternMismatch">
            Enter a 5-digit ZIP code.
          </Field.Error>
        </Field.Root>
      </div>

      <Field.Root className="flex flex-col items-start gap-1">
        <Field.Label className="text-sm font-medium text-foreground">
          Country
        </Field.Label>
        <Field.Control placeholder="United States" className={inputClass} />
      </Field.Root>
    </Fieldset.Root>
  );
}

/* ============================================
   Form Demo
   ============================================ */

async function submitContactForm(value: string) {
  // Simulate a server response
  await new Promise((resolve) => {
    setTimeout(resolve, 800);
  });

  try {
    const url = new URL(value);
    if (url.hostname.endsWith("example.com")) {
      return { error: "The example domain is not allowed." };
    }
  } catch {
    return { error: "Please enter a valid URL." };
  }

  return { success: true };
}

function FormDemo() {
  const [errors, setErrors] = React.useState<Record<string, string | string[]>>(
    {},
  );
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <Form
      className="flex w-full max-w-sm flex-col gap-4"
      errors={errors}
      onSubmit={async (event) => {
        event.preventDefault();
        setSubmitted(false);

        const formData = new FormData(event.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const website = formData.get("website") as string;

        setLoading(true);

        // Simulate validation
        const newErrors: Record<string, string | string[]> = {};

        if (!name || name.trim().length < 2) {
          newErrors.name = "Name must be at least 2 characters.";
        }

        if (!email || !email.includes("@")) {
          newErrors.email = "Please enter a valid email.";
        }

        if (website) {
          const result = await submitContactForm(website);
          if ("error" in result && result.error) {
            newErrors.website = result.error;
          }
        }

        setErrors(newErrors);
        setLoading(false);

        if (Object.keys(newErrors).length === 0) {
          setSubmitted(true);
        }
      }}
    >
      <Field.Root name="name" className="flex flex-col items-start gap-1">
        <Field.Label className="text-sm font-medium text-foreground">
          Name
        </Field.Label>
        <Field.Control
          required
          placeholder="Your name"
          className={inputClass}
        />
        <Field.Error className="text-sm text-red-600" />
      </Field.Root>

      <Field.Root name="email" className="flex flex-col items-start gap-1">
        <Field.Label className="text-sm font-medium text-foreground">
          Email
        </Field.Label>
        <Field.Control
          type="email"
          required
          placeholder="you@example.com"
          className={inputClass}
        />
        <Field.Error className="text-sm text-red-600" />
      </Field.Root>

      <Field.Root name="website" className="flex flex-col items-start gap-1">
        <Field.Label className="text-sm font-medium text-foreground">
          Website
        </Field.Label>
        <Field.Control
          type="url"
          placeholder="https://yoursite.com"
          className={inputClass}
        />
        <Field.Error className="text-sm text-red-600" />
        <Field.Description className="text-sm text-muted">
          Optional. Must be a valid URL.
        </Field.Description>
      </Field.Root>

      <button
        type="submit"
        disabled={loading}
        className="mt-2 flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit"}
      </button>

      {submitted && (
        <p className="text-sm font-medium text-green-600">
          Form submitted successfully.
        </p>
      )}
    </Form>
  );
}

/* ============================================
   Layout Page
   ============================================ */

export default function LayoutPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Layout"
        description="Toggle controls, form fields, fieldsets, forms with validation, combobox, and autocomplete components."
        backHref="/"
        backLabel="Back to Home"
      />

      <main className="mx-auto max-w-6xl space-y-10 px-6 py-12">
        {/* Toggle */}
        <ComponentDemo
          title="Toggle"
          description="A two-state button that can be pressed or unpressed. Uses data-[pressed] attribute for visual state."
        >
          <ToggleDemo />
        </ComponentDemo>

        {/* Toggle Group */}
        <ComponentDemo
          title="Toggle Group"
          description="A group of toggle buttons with shared state. Supports single selection and multiple selection modes."
        >
          <ToggleGroupDemo />
        </ComponentDemo>

        {/* Field */}
        <ComponentDemo
          title="Field"
          description="A form field with label, input control, description, and error messages. Validation is automatic via native constraint validation."
          className="flex-col items-start"
        >
          <FieldDemo />
        </ComponentDemo>

        {/* Fieldset */}
        <ComponentDemo
          title="Fieldset"
          description="Groups related form fields under a shared legend. Uses a native fieldset element with an easily stylable legend."
          className="flex-col items-start"
        >
          <FieldsetDemo />
        </ComponentDemo>

        {/* Form */}
        <ComponentDemo
          title="Form"
          description="A complete form with field validation and server-side error handling. Submit to see validation in action."
          className="flex-col items-start"
        >
          <FormDemo />
        </ComponentDemo>

        {/* Combobox */}
        <ComponentDemo
          title="Combobox"
          description="An input combined with a filterable dropdown list. Type to filter options, or click the trigger to browse all items."
        >
          <ComboboxDemo />
        </ComponentDemo>

        {/* Autocomplete */}
        <ComponentDemo
          title="Autocomplete"
          description="A text input that suggests matching options as you type. Lightweight alternative to combobox for simple search-and-select use cases."
        >
          <AutocompleteDemo />
        </ComponentDemo>
      </main>
    </div>
  );
}
