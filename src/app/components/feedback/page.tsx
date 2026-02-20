"use client";

import * as React from "react";
import { Progress } from "@base-ui/react/progress";
import { Meter } from "@base-ui/react/meter";
import { Toast } from "@base-ui/react/toast";
import { PageHeader } from "@/components/layout";
import { ComponentDemo } from "@/components/showcase";

// ============================================
// Progress Demo
// ============================================

function ProgressDemo() {
  const [value, setValue] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(true);

  React.useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setValue((current) => {
        const next = Math.min(100, Math.round(current + Math.random() * 15));
        if (next >= 100) setIsRunning(false);
        return next;
      });
    }, 800);
    return () => clearInterval(interval);
  }, [isRunning]);

  function handleReset() {
    setValue(0);
    setIsRunning(true);
  }

  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Progress.Root className="grid w-full grid-cols-2 gap-y-2" value={value}>
        <Progress.Label className="text-sm font-medium text-foreground">
          Uploading files...
        </Progress.Label>
        <Progress.Value className="col-start-2 text-right text-sm text-muted" />
        <Progress.Track className="col-span-full h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
          <Progress.Indicator className="block h-full rounded-full bg-primary transition-all duration-500 ease-out" />
        </Progress.Track>
      </Progress.Root>

      <button
        type="button"
        onClick={handleReset}
        className="self-start rounded-md border border-border bg-surface px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-active focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
      >
        {value >= 100 ? "Restart" : "Reset"}
      </button>
    </div>
  );
}

// ============================================
// Meter Demo
// ============================================

interface MeterItemProps {
  label: string;
  value: number;
  max?: number;
  colorClass?: string;
}

function MeterItem({
  label,
  value,
  max = 100,
  colorClass = "bg-primary",
}: MeterItemProps) {
  return (
    <Meter.Root
      className="grid w-full grid-cols-2 gap-y-2"
      value={value}
      max={max}
    >
      <Meter.Label className="text-sm font-medium text-foreground">
        {label}
      </Meter.Label>
      <Meter.Value className="col-start-2 text-right text-sm text-muted" />
      <Meter.Track className="col-span-full h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
        <Meter.Indicator
          className={`block h-full rounded-full transition-all duration-500 ${colorClass}`}
        />
      </Meter.Track>
    </Meter.Root>
  );
}

function MeterDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <MeterItem label="Disk Usage" value={72} colorClass="bg-amber-500" />
      <MeterItem label="Memory" value={45} colorClass="bg-primary" />
      <MeterItem label="CPU Temperature" value={89} colorClass="bg-red-500" />
    </div>
  );
}

// ============================================
// Toast Demo
// ============================================

function ToastButton() {
  const toastManager = Toast.useToastManager();
  const [count, setCount] = React.useState(0);

  const toastTypes = [
    {
      title: "File uploaded",
      description: "Your file has been uploaded successfully.",
    },
    {
      title: "Message sent",
      description: "Your message has been delivered.",
    },
    {
      title: "Settings saved",
      description: "Your preferences have been updated.",
    },
    {
      title: "Item removed",
      description: "The item has been moved to trash.",
    },
  ];

  function createToast() {
    const toastData = toastTypes[count % toastTypes.length];
    setCount((prev) => prev + 1);
    toastManager.add({
      title: toastData.title,
      description: toastData.description,
    });
  }

  return (
    <button
      type="button"
      className="rounded-md border border-border bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
      onClick={createToast}
    >
      Show toast
    </button>
  );
}

function ToastList() {
  const { toasts } = Toast.useToastManager();
  return toasts.map((toast) => (
    <Toast.Root
      key={toast.id}
      toast={toast}
      className="[--gap:0.75rem] [--peek:0.75rem] [--scale:calc(max(0,1-(var(--toast-index)*0.1)))] [--shrink:calc(1-var(--scale))] [--height:var(--toast-frontmost-height,var(--toast-height))] [--offset-y:calc(var(--toast-offset-y)*-1+calc(var(--toast-index)*var(--gap)*-1)+var(--toast-swipe-movement-y))] absolute right-0 bottom-0 left-auto z-[calc(1000-var(--toast-index))] mr-0 w-full origin-bottom [transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)-(var(--toast-index)*var(--peek))-(var(--shrink)*var(--height))))_scale(var(--scale))] rounded-lg border border-border bg-background bg-clip-padding p-4 shadow-lg select-none after:absolute after:top-full after:left-0 after:h-[calc(var(--gap)+1px)] after:w-full after:content-[''] data-[ending-style]:opacity-0 data-[expanded]:[transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--offset-y)))] data-[limited]:opacity-0 data-[starting-style]:[transform:translateY(150%)] [&[data-ending-style]:not([data-limited]):not([data-swipe-direction])]:[transform:translateY(150%)] data-[ending-style]:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))] data-[expanded]:data-[ending-style]:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))] data-[ending-style]:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))] data-[expanded]:data-[ending-style]:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))] data-[ending-style]:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))] data-[expanded]:data-[ending-style]:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))] data-[ending-style]:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))] data-[expanded]:data-[ending-style]:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))] h-toast-height data-[expanded]:h-toast-height-expanded [transition:transform_0.5s_cubic-bezier(0.22,1,0.36,1),opacity_0.5s,height_0.15s]"
    >
      <Toast.Content className="overflow-hidden transition-opacity [transition-duration:250ms] data-[behind]:pointer-events-none data-[behind]:opacity-0 data-[expanded]:pointer-events-auto data-[expanded]:opacity-100">
        <Toast.Title className="text-sm font-medium leading-5 text-foreground" />
        <Toast.Description className="mt-0.5 text-sm leading-5 text-muted" />
        <Toast.Close
          className="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded border-none bg-transparent text-muted transition-colors hover:bg-surface-active hover:text-foreground"
          aria-label="Close"
        >
          <XIcon className="h-4 w-4" />
        </Toast.Close>
      </Toast.Content>
    </Toast.Root>
  ));
}

function XIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function ToastDemo() {
  return (
    <Toast.Provider>
      <div className="flex flex-col items-center gap-3">
        <ToastButton />
        <p className="text-xs text-muted">
          Click multiple times to see stacking behavior
        </p>
      </div>
      <Toast.Portal>
        <Toast.Viewport className="fixed top-auto right-4 bottom-4 z-50 mx-auto flex w-[280px] sm:right-8 sm:bottom-8 sm:w-[320px]">
          <ToastList />
        </Toast.Viewport>
      </Toast.Portal>
    </Toast.Provider>
  );
}

// ============================================
// Page
// ============================================

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Feedback"
        description="Progress indicators, meters, and toast notifications for communicating status to users."
      />

      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="space-y-8">
          <ComponentDemo
            title="Progress"
            description="Displays the completion status of a task with an animated fill bar and percentage label."
          >
            <ProgressDemo />
          </ComponentDemo>

          <ComponentDemo
            title="Meter"
            description="A gauge that displays a value within a known range, such as disk usage or temperature."
          >
            <MeterDemo />
          </ComponentDemo>

          <ComponentDemo
            title="Toast"
            description="Toast notifications that stack and animate. Click the button to trigger them."
          >
            <ToastDemo />
          </ComponentDemo>
        </div>
      </main>
    </div>
  );
}
