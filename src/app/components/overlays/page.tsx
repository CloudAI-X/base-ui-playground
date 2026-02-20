"use client";

import * as React from "react";
import { PageHeader } from "@/components/layout";
import { ComponentDemo } from "@/components/showcase";
import { Dialog } from "@base-ui/react/dialog";
import { AlertDialog } from "@base-ui/react/alert-dialog";
import { DrawerPreview as Drawer } from "@base-ui/react/drawer";
import { Popover } from "@base-ui/react/popover";
import { Tooltip } from "@base-ui/react/tooltip";
import { ContextMenu } from "@base-ui/react/context-menu";
import { PreviewCard } from "@base-ui/react/preview-card";

// ============================================
// Shared styles
// ============================================

const buttonClass =
  "flex h-10 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-gray-900 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100";

const dangerButtonClass =
  "flex h-10 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-red-800 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100";

const backdropClass =
  "fixed inset-0 bg-black opacity-20 transition-all duration-150 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 dark:opacity-70";

const dialogPopupClass =
  "fixed top-1/2 left-1/2 -mt-8 w-96 max-w-[calc(100vw-3rem)] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gray-50 p-6 text-gray-900 outline outline-1 outline-gray-200 transition-all duration-150 data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 dark:outline-gray-300";

const menuItemClass =
  "flex cursor-default py-2 pr-8 pl-4 text-sm leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900";

// ============================================
// Arrow SVG (shared by Popover, Tooltip, PreviewCard)
// ============================================

function ArrowSvg(props: React.ComponentProps<"svg">) {
  return (
    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" {...props}>
      <path
        d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
        className="fill-[canvas]"
      />
      <path
        d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
        className="fill-gray-200 dark:fill-none"
      />
      <path
        d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"
        className="dark:fill-gray-300"
      />
    </svg>
  );
}

const arrowPositionClass =
  "data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180";

// ============================================
// Dialog Demo
// ============================================

function DialogDemo() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className={buttonClass}>
        View notifications
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className={backdropClass} />
        <Dialog.Popup className={dialogPopupClass}>
          <Dialog.Title className="-mt-1.5 mb-1 text-lg font-medium">
            Notifications
          </Dialog.Title>
          <Dialog.Description className="mb-6 text-base text-gray-600">
            You are all caught up. Good job!
          </Dialog.Description>
          <div className="flex justify-end gap-4">
            <Dialog.Close className={buttonClass}>Close</Dialog.Close>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

// ============================================
// Alert Dialog Demo
// ============================================

function AlertDialogDemo() {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger className={dangerButtonClass}>
        Discard draft
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Backdrop className={backdropClass} />
        <AlertDialog.Popup className={dialogPopupClass}>
          <AlertDialog.Title className="-mt-1.5 mb-1 text-lg font-medium">
            Discard draft?
          </AlertDialog.Title>
          <AlertDialog.Description className="mb-6 text-base text-gray-600">
            You can&apos;t undo this action. All unsaved changes will be lost.
          </AlertDialog.Description>
          <div className="flex justify-end gap-4">
            <AlertDialog.Close className={buttonClass}>
              Cancel
            </AlertDialog.Close>
            <AlertDialog.Close className={dangerButtonClass}>
              Discard
            </AlertDialog.Close>
          </div>
        </AlertDialog.Popup>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}

// ============================================
// Drawer Demo
// ============================================

function DrawerDemo() {
  return (
    <Drawer.Root swipeDirection="right">
      <Drawer.Trigger className={buttonClass}>Open drawer</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Backdrop className="[--backdrop-opacity:0.2] dark:[--backdrop-opacity:0.7] fixed inset-0 min-h-dvh bg-black opacity-[calc(var(--backdrop-opacity)*(1-var(--drawer-swipe-progress)))] transition-opacity duration-[450ms] ease-[cubic-bezier(0.32,0.72,0,1)] data-[swiping]:duration-0 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 data-[ending-style]:duration-[calc(var(--drawer-swipe-strength)*400ms)] supports-[-webkit-touch-callout:none]:absolute" />
        <Drawer.Viewport className="[--viewport-padding:0px] supports-[-webkit-touch-callout:none]:[--viewport-padding:0.625rem] fixed inset-0 flex items-stretch justify-end p-[var(--viewport-padding)]">
          <Drawer.Popup className="[--bleed:3rem] supports-[-webkit-touch-callout:none]:[--bleed:0px] h-full w-[calc(20rem+3rem)] max-w-[calc(100vw-3rem+3rem)] -mr-[3rem] bg-gray-50 p-6 pr-[calc(1.5rem+3rem)] text-gray-900 outline outline-1 outline-gray-200 overflow-y-auto overscroll-contain touch-auto [transform:translateX(var(--drawer-swipe-movement-x))] transition-transform duration-[450ms] ease-[cubic-bezier(0.32,0.72,0,1)] data-[swiping]:select-none data-[ending-style]:[transform:translateX(calc(100%-var(--bleed)+var(--viewport-padding)))] data-[starting-style]:[transform:translateX(calc(100%-var(--bleed)+var(--viewport-padding)))] data-[ending-style]:duration-[calc(var(--drawer-swipe-strength)*400ms)] supports-[-webkit-touch-callout:none]:mr-0 supports-[-webkit-touch-callout:none]:w-[20rem] supports-[-webkit-touch-callout:none]:max-w-[calc(100vw-20px)] supports-[-webkit-touch-callout:none]:rounded-[10px] supports-[-webkit-touch-callout:none]:pr-6 dark:outline-gray-300">
            <Drawer.Content>
              <Drawer.Title className="-mt-1.5 mb-1 text-lg font-medium">
                Drawer
              </Drawer.Title>
              <Drawer.Description className="mb-6 text-base text-gray-600">
                This is a drawer that slides in from the right. You can swipe to
                dismiss it, or use the close button below.
              </Drawer.Description>
              <div className="mt-auto space-y-4">
                <div className="rounded-md border border-gray-200 bg-white p-4">
                  <h4 className="text-sm font-medium text-gray-900">
                    Recent Activity
                  </h4>
                  <ul className="mt-2 space-y-2 text-sm text-gray-600">
                    <li>Updated profile settings</li>
                    <li>Added new team member</li>
                    <li>Deployed v2.1.0</li>
                  </ul>
                </div>
                <div className="flex justify-end gap-4">
                  <Drawer.Close className={buttonClass}>Close</Drawer.Close>
                </div>
              </div>
            </Drawer.Content>
          </Drawer.Popup>
        </Drawer.Viewport>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

// ============================================
// Popover Demo
// ============================================

function PopoverDemo() {
  return (
    <Popover.Root>
      <Popover.Trigger className={buttonClass}>
        <span className="flex items-center gap-2">
          <svg
            fill="currentcolor"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path d="M 8 1 C 7.453125 1 7 1.453125 7 2 L 7 3.140625 C 5.28125 3.589844 4 5.144531 4 7 L 4 10.984375 C 4 10.984375 3.984375 11.261719 3.851563 11.519531 C 3.71875 11.78125 3.558594 12 3 12 L 3 13 L 13 13 L 13 12 C 12.40625 12 12.253906 11.78125 12.128906 11.53125 C 12.003906 11.277344 12 11.003906 12 11.003906 L 12 7 C 12 5.144531 10.71875 3.589844 9 3.140625 L 9 2 C 9 1.453125 8.546875 1 8 1 Z M 8 13 C 7.449219 13 7 13.449219 7 14 C 7 14.550781 7.449219 15 8 15 C 8.550781 15 9 14.550781 9 14 C 9 13.449219 8.550781 13 8 13 Z M 8 4 C 9.664063 4 11 5.335938 11 7 L 11 10.996094 C 11 10.996094 10.988281 11.472656 11.234375 11.96875 C 11.238281 11.980469 11.246094 11.988281 11.25 12 L 4.726563 12 C 4.730469 11.992188 4.738281 11.984375 4.742188 11.980469 C 4.992188 11.488281 5 11.015625 5 11.015625 L 5 7 C 5 5.335938 6.335938 4 8 4 Z" />
          </svg>
          Notifications
        </span>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner sideOffset={8}>
          <Popover.Popup className="origin-[var(--transform-origin)] rounded-lg bg-[canvas] px-6 py-4 text-gray-900 shadow-lg shadow-gray-200 outline outline-1 outline-gray-200 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300">
            <Popover.Arrow className={`flex ${arrowPositionClass}`}>
              <ArrowSvg />
            </Popover.Arrow>
            <Popover.Title className="text-base font-medium">
              Notifications
            </Popover.Title>
            <Popover.Description className="mt-1 text-sm text-gray-600">
              You are all caught up. Good job!
            </Popover.Description>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}

// ============================================
// Tooltip Demo
// ============================================

function TooltipDemo() {
  return (
    <Tooltip.Provider>
      <div className="flex items-center gap-4">
        <Tooltip.Root>
          <Tooltip.Trigger className={buttonClass}>Hover me</Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Positioner sideOffset={10}>
              <Tooltip.Popup className="flex flex-col rounded-md bg-[canvas] px-2 py-1 text-sm origin-[var(--transform-origin)] shadow-lg shadow-gray-200 outline outline-1 outline-gray-200 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[instant]:transition-none data-[starting-style]:scale-90 data-[starting-style]:opacity-0 dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300">
                <Tooltip.Arrow className={`flex ${arrowPositionClass}`}>
                  <ArrowSvg />
                </Tooltip.Arrow>
                This is a tooltip
              </Tooltip.Popup>
            </Tooltip.Positioner>
          </Tooltip.Portal>
        </Tooltip.Root>

        <Tooltip.Root>
          <Tooltip.Trigger className="flex size-10 items-center justify-center rounded-md border border-gray-200 bg-gray-50 text-gray-900 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-label="Settings"
            >
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Positioner sideOffset={10}>
              <Tooltip.Popup className="flex flex-col rounded-md bg-[canvas] px-2 py-1 text-sm origin-[var(--transform-origin)] shadow-lg shadow-gray-200 outline outline-1 outline-gray-200 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[instant]:transition-none data-[starting-style]:scale-90 data-[starting-style]:opacity-0 dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300">
                <Tooltip.Arrow className={`flex ${arrowPositionClass}`}>
                  <ArrowSvg />
                </Tooltip.Arrow>
                Settings
              </Tooltip.Popup>
            </Tooltip.Positioner>
          </Tooltip.Portal>
        </Tooltip.Root>

        <Tooltip.Root>
          <Tooltip.Trigger className="flex size-10 items-center justify-center rounded-md border border-gray-200 bg-gray-50 text-gray-900 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-label="Help"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
            </svg>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Positioner sideOffset={10}>
              <Tooltip.Popup className="flex flex-col rounded-md bg-[canvas] px-2 py-1 text-sm origin-[var(--transform-origin)] shadow-lg shadow-gray-200 outline outline-1 outline-gray-200 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[instant]:transition-none data-[starting-style]:scale-90 data-[starting-style]:opacity-0 dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300">
                <Tooltip.Arrow className={`flex ${arrowPositionClass}`}>
                  <ArrowSvg />
                </Tooltip.Arrow>
                Help
              </Tooltip.Popup>
            </Tooltip.Positioner>
          </Tooltip.Portal>
        </Tooltip.Root>
      </div>
    </Tooltip.Provider>
  );
}

// ============================================
// Context Menu Demo
// ============================================

function ContextMenuDemo() {
  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger className="flex h-48 w-60 items-center justify-center rounded-lg border border-dashed border-gray-300 text-sm text-gray-500 select-none">
        Right click here
      </ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Positioner className="outline-none">
          <ContextMenu.Popup className="origin-[var(--transform-origin)] rounded-md bg-[canvas] py-1 text-gray-900 shadow-lg shadow-gray-200 outline outline-1 outline-gray-200 transition-[opacity] data-[ending-style]:opacity-0 dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300">
            <ContextMenu.Item className={menuItemClass}>
              Add to Library
            </ContextMenu.Item>
            <ContextMenu.Item className={menuItemClass}>
              Add to Playlist
            </ContextMenu.Item>
            <ContextMenu.Separator className="mx-4 my-1.5 h-px bg-gray-200" />
            <ContextMenu.Item className={menuItemClass}>
              Play Next
            </ContextMenu.Item>
            <ContextMenu.Item className={menuItemClass}>
              Play Last
            </ContextMenu.Item>
            <ContextMenu.Separator className="mx-4 my-1.5 h-px bg-gray-200" />
            <ContextMenu.Item className={menuItemClass}>
              Favorite
            </ContextMenu.Item>
            <ContextMenu.Item className={menuItemClass}>Share</ContextMenu.Item>
          </ContextMenu.Popup>
        </ContextMenu.Positioner>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
}

// ============================================
// Preview Card Demo
// ============================================

function PreviewCardDemo() {
  return (
    <PreviewCard.Root>
      <p className="m-0 text-base leading-6 text-gray-900 text-balance">
        The principles of good{" "}
        <PreviewCard.Trigger
          className="text-blue-800 no-underline decoration-blue-800/60 decoration-1 underline-offset-2 outline-0 hover:underline data-[popup-open]:underline focus-visible:rounded-[2px] focus-visible:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-800"
          href="https://en.wikipedia.org/wiki/Typography"
        >
          typography
        </PreviewCard.Trigger>{" "}
        remain in the digital age.
      </p>

      <PreviewCard.Portal>
        <PreviewCard.Positioner sideOffset={8}>
          <PreviewCard.Popup className="w-popup-width h-popup-height rounded-lg bg-[canvas] origin-[var(--transform-origin)] transition-[scale,opacity] duration-150 shadow-lg shadow-gray-200 outline outline-1 outline-gray-200 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 data-[ending-style]:scale-90 data-[ending-style]:opacity-0 dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300">
            <PreviewCard.Arrow className={`flex ${arrowPositionClass}`}>
              <ArrowSvg />
            </PreviewCard.Arrow>
            <div className="flex w-min flex-col gap-2 p-2">
              <img
                width="224"
                height="150"
                className="block max-w-none rounded-sm"
                src="https://images.unsplash.com/photo-1619615391095-dfa29e1672ef?q=80&w=448&h=300"
                alt="Station Hofplein signage in Rotterdam, Netherlands"
              />
              <p className="m-0 text-sm leading-5 text-gray-900 text-pretty">
                <strong>Typography</strong> is the art and science of arranging
                type to make written language clear, visually appealing, and
                effective in communication.
              </p>
            </div>
          </PreviewCard.Popup>
        </PreviewCard.Positioner>
      </PreviewCard.Portal>
    </PreviewCard.Root>
  );
}

// ============================================
// Page Component
// ============================================

export default function OverlaysPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Overlays"
        description="Dialogs, popovers, tooltips, drawers, and menu components"
      />

      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="space-y-8">
          <ComponentDemo
            title="Dialog"
            description="A modal dialog that opens on top of the page with a backdrop overlay, title, description, and close button."
          >
            <DialogDemo />
          </ComponentDemo>

          <ComponentDemo
            title="Alert Dialog"
            description="A confirmation dialog that requires a user response to proceed. Cannot be dismissed by clicking outside or pressing Escape."
          >
            <AlertDialogDemo />
          </ComponentDemo>

          <ComponentDemo
            title="Drawer"
            description="A panel that slides in from the edge of the screen with swipe-to-dismiss gesture support."
          >
            <DrawerDemo />
          </ComponentDemo>

          <ComponentDemo
            title="Popover"
            description="A click-triggered popup anchored to a trigger element with an arrow pointer and auto-positioning."
          >
            <PopoverDemo />
          </ComponentDemo>

          <ComponentDemo
            title="Tooltip"
            description="A popup that appears on hover or focus, providing supplemental information. Wrapped in Tooltip.Provider for coordinated open/close delays."
          >
            <TooltipDemo />
          </ComponentDemo>

          <ComponentDemo
            title="Context Menu"
            description="A menu that appears at the pointer position on right click or long press, with keyboard-navigable items."
          >
            <ContextMenuDemo />
          </ComponentDemo>

          <ComponentDemo
            title="Preview Card"
            description="A hover card that appears when a link is hovered, showing a rich preview with image and text content."
          >
            <PreviewCardDemo />
          </ComponentDemo>
        </div>
      </main>
    </div>
  );
}
