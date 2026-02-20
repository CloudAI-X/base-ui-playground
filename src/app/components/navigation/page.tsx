"use client";

import { PageHeader } from "@/components/layout";
import { ComponentDemo } from "@/components/showcase";
import { Tabs } from "@base-ui/react/tabs";
import { Menu } from "@base-ui/react/menu";
import { Menubar } from "@base-ui/react/menubar";
import { NavigationMenu } from "@base-ui/react/navigation-menu";
import { Toolbar } from "@base-ui/react/toolbar";
import { Accordion } from "@base-ui/react/accordion";
import { ToggleGroup } from "@base-ui/react/toggle-group";
import { Toggle } from "@base-ui/react/toggle";

// ============================================
// Tabs Demo
// ============================================

function TabsDemo() {
  return (
    <Tabs.Root
      className="w-full max-w-md rounded-md border border-gray-200"
      defaultValue="overview"
    >
      <Tabs.List className="relative z-0 flex gap-1 px-1 shadow-[inset_0_-1px] shadow-gray-200">
        <Tabs.Tab
          className="flex h-8 items-center justify-center border-0 px-2 text-sm font-medium whitespace-nowrap text-gray-600 outline-none select-none hover:text-gray-900 focus-visible:relative focus-visible:before:absolute focus-visible:before:inset-x-0 focus-visible:before:inset-y-1 focus-visible:before:rounded-sm focus-visible:before:outline focus-visible:before:outline-2 focus-visible:before:-outline-offset-1 focus-visible:before:outline-blue-800 data-[active]:text-gray-900"
          value="overview"
        >
          Overview
        </Tabs.Tab>
        <Tabs.Tab
          className="flex h-8 items-center justify-center border-0 px-2 text-sm font-medium whitespace-nowrap text-gray-600 outline-none select-none hover:text-gray-900 focus-visible:relative focus-visible:before:absolute focus-visible:before:inset-x-0 focus-visible:before:inset-y-1 focus-visible:before:rounded-sm focus-visible:before:outline focus-visible:before:outline-2 focus-visible:before:-outline-offset-1 focus-visible:before:outline-blue-800 data-[active]:text-gray-900"
          value="projects"
        >
          Projects
        </Tabs.Tab>
        <Tabs.Tab
          className="flex h-8 items-center justify-center border-0 px-2 text-sm font-medium whitespace-nowrap text-gray-600 outline-none select-none hover:text-gray-900 focus-visible:relative focus-visible:before:absolute focus-visible:before:inset-x-0 focus-visible:before:inset-y-1 focus-visible:before:rounded-sm focus-visible:before:outline focus-visible:before:outline-2 focus-visible:before:-outline-offset-1 focus-visible:before:outline-blue-800 data-[active]:text-gray-900"
          value="account"
        >
          Account
        </Tabs.Tab>
        <Tabs.Indicator className="absolute top-1/2 left-0 z-[-1] h-6 w-[var(--active-tab-width)] translate-x-[var(--active-tab-left)] -translate-y-1/2 rounded-sm bg-gray-100 transition-all duration-200 ease-in-out" />
      </Tabs.List>
      <Tabs.Panel
        className="relative flex h-32 items-center justify-center -outline-offset-1 outline-blue-800 focus-visible:rounded-md focus-visible:outline focus-visible:outline-2"
        value="overview"
      >
        <OverviewIcon className="size-10 text-gray-300" />
      </Tabs.Panel>
      <Tabs.Panel
        className="relative flex h-32 items-center justify-center -outline-offset-1 outline-blue-800 focus-visible:rounded-md focus-visible:outline focus-visible:outline-2"
        value="projects"
      >
        <ProjectIcon className="size-10 text-gray-300" />
      </Tabs.Panel>
      <Tabs.Panel
        className="relative flex h-32 items-center justify-center -outline-offset-1 outline-blue-800 focus-visible:rounded-md focus-visible:outline focus-visible:outline-2"
        value="account"
      >
        <PersonIcon className="size-10 text-gray-300" />
      </Tabs.Panel>
    </Tabs.Root>
  );
}

// ============================================
// Menu Demo
// ============================================

const menuItemClassName =
  "flex cursor-default py-2 pr-8 pl-4 text-sm leading-4 outline-none select-none " +
  "data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 " +
  "data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 " +
  "data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900";

const menuPopupClassName =
  "origin-[var(--transform-origin)] rounded-md bg-[canvas] py-1 text-gray-900 " +
  "shadow-lg shadow-gray-200 outline outline-1 outline-gray-200 " +
  "transition-[transform,scale,opacity] " +
  "data-[ending-style]:scale-90 data-[ending-style]:opacity-0 " +
  "data-[starting-style]:scale-90 data-[starting-style]:opacity-0 " +
  "dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300";

function MenuDemo() {
  return (
    <Menu.Root>
      <Menu.Trigger className="flex h-10 items-center justify-center gap-1.5 rounded-md border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-gray-900 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100 data-[popup-open]:bg-gray-100">
        Song <ChevronDownIcon className="-mr-1" />
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner className="outline-none" sideOffset={8}>
          <Menu.Popup className={menuPopupClassName}>
            <Menu.Arrow className="data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180">
              <ArrowSvg />
            </Menu.Arrow>
            <Menu.Item className={menuItemClassName}>Add to Library</Menu.Item>
            <Menu.Item className={menuItemClassName}>Add to Playlist</Menu.Item>
            <Menu.Separator className="mx-4 my-1.5 h-px bg-gray-200" />
            <Menu.Item className={menuItemClassName}>Play Next</Menu.Item>
            <Menu.Item className={menuItemClassName}>Play Last</Menu.Item>
            <Menu.Separator className="mx-4 my-1.5 h-px bg-gray-200" />
            <Menu.Item className={menuItemClassName}>Favorite</Menu.Item>
            <Menu.Item className={menuItemClassName}>Share</Menu.Item>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}

// ============================================
// Menubar Demo
// ============================================

const menubarTriggerClassName =
  "h-8 rounded px-3 text-sm font-medium text-gray-600 outline-none select-none " +
  "focus-visible:bg-gray-100 data-[disabled]:opacity-50 data-[popup-open]:bg-gray-100";

const menubarPopupClassName =
  "origin-[var(--transform-origin)] rounded-md bg-[canvas] py-1 text-gray-900 " +
  "shadow-lg shadow-gray-200 outline outline-1 outline-gray-200 " +
  "data-[ending-style]:opacity-0 data-[ending-style]:transition-opacity " +
  "data-[instant]:transition-none " +
  "dark:shadow-none dark:outline dark:outline-1 dark:-outline-offset-1 dark:outline-gray-300";

const menubarItemClassName =
  "flex cursor-default items-center justify-between gap-4 px-4 py-2 text-sm leading-4 " +
  "outline-none select-none " +
  "data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 " +
  "data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 " +
  "data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900";

const menubarSubmenuTriggerClassName =
  "flex w-full cursor-default items-center justify-between gap-4 px-4 py-2 text-sm leading-4 " +
  "outline-none select-none " +
  "data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 " +
  "data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 " +
  "data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900 " +
  "data-[popup-open]:relative data-[popup-open]:z-0 " +
  "data-[popup-open]:before:absolute data-[popup-open]:before:inset-x-1 data-[popup-open]:before:inset-y-0 " +
  "data-[popup-open]:before:z-[-1] data-[popup-open]:before:rounded-sm data-[popup-open]:before:bg-gray-100 " +
  "data-[highlighted]:data-[popup-open]:before:bg-gray-900";

function MenubarDemo() {
  return (
    <Menubar className="flex rounded-md border border-gray-200 bg-gray-50 p-0.5">
      <Menu.Root>
        <Menu.Trigger className={menubarTriggerClassName}>File</Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner className="outline-none" sideOffset={6}>
            <Menu.Popup className={menubarPopupClassName}>
              <Menu.Item className={menubarItemClassName}>New</Menu.Item>
              <Menu.Item className={menubarItemClassName}>Open</Menu.Item>
              <Menu.Item className={menubarItemClassName}>Save</Menu.Item>

              <Menu.SubmenuRoot>
                <Menu.SubmenuTrigger className={menubarSubmenuTriggerClassName}>
                  Export
                  <ChevronRightIcon />
                </Menu.SubmenuTrigger>
                <Menu.Portal>
                  <Menu.Positioner>
                    <Menu.Popup className={menubarPopupClassName}>
                      <Menu.Item className={menubarItemClassName}>
                        PDF
                      </Menu.Item>
                      <Menu.Item className={menubarItemClassName}>
                        PNG
                      </Menu.Item>
                      <Menu.Item className={menubarItemClassName}>
                        SVG
                      </Menu.Item>
                    </Menu.Popup>
                  </Menu.Positioner>
                </Menu.Portal>
              </Menu.SubmenuRoot>

              <Menu.Separator className="mx-4 my-1.5 h-px bg-gray-200" />
              <Menu.Item className={menubarItemClassName}>Print</Menu.Item>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>

      <Menu.Root>
        <Menu.Trigger className={menubarTriggerClassName}>Edit</Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner className="outline-none" sideOffset={6}>
            <Menu.Popup className={menubarPopupClassName}>
              <Menu.Item className={menubarItemClassName}>Cut</Menu.Item>
              <Menu.Item className={menubarItemClassName}>Copy</Menu.Item>
              <Menu.Item className={menubarItemClassName}>Paste</Menu.Item>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>

      <Menu.Root>
        <Menu.Trigger className={menubarTriggerClassName}>View</Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner className="outline-none" sideOffset={6}>
            <Menu.Popup className={menubarPopupClassName}>
              <Menu.Item className={menubarItemClassName}>Zoom In</Menu.Item>
              <Menu.Item className={menubarItemClassName}>Zoom Out</Menu.Item>

              <Menu.SubmenuRoot>
                <Menu.SubmenuTrigger className={menubarSubmenuTriggerClassName}>
                  Layout
                  <ChevronRightIcon />
                </Menu.SubmenuTrigger>
                <Menu.Portal>
                  <Menu.Positioner>
                    <Menu.Popup className={menubarPopupClassName}>
                      <Menu.Item className={menubarItemClassName}>
                        Single Page
                      </Menu.Item>
                      <Menu.Item className={menubarItemClassName}>
                        Two Pages
                      </Menu.Item>
                      <Menu.Item className={menubarItemClassName}>
                        Continuous
                      </Menu.Item>
                    </Menu.Popup>
                  </Menu.Positioner>
                </Menu.Portal>
              </Menu.SubmenuRoot>

              <Menu.Separator className="mx-4 my-1.5 h-px bg-gray-200" />
              <Menu.Item className={menubarItemClassName}>
                Full Screen
              </Menu.Item>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>

      <Menu.Root disabled>
        <Menu.Trigger className={menubarTriggerClassName}>Help</Menu.Trigger>
      </Menu.Root>
    </Menubar>
  );
}

// ============================================
// Navigation Menu Demo
// ============================================

const navTriggerClassName =
  "box-border flex items-center justify-center gap-1.5 h-10 " +
  "px-3.5 m-0 rounded-md bg-gray-50 text-gray-900 font-medium " +
  "text-base leading-6 select-none no-underline " +
  "hover:bg-gray-100 active:bg-gray-100 data-[popup-open]:bg-gray-100 " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 focus-visible:relative";

const navContentClassName =
  "w-max min-w-[400px] h-full p-6 " +
  "transition-[opacity,transform,translate] duration-[var(--duration)] ease-[var(--easing)] " +
  "data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 " +
  "data-[starting-style]:data-[activation-direction=left]:translate-x-[-50%] " +
  "data-[starting-style]:data-[activation-direction=right]:translate-x-[50%] " +
  "data-[ending-style]:data-[activation-direction=left]:translate-x-[50%] " +
  "data-[ending-style]:data-[activation-direction=right]:translate-x-[-50%]";

const navLinkCardClassName =
  "block rounded-md p-3 no-underline text-inherit " +
  "hover:bg-gray-100 focus-visible:relative focus-visible:outline focus-visible:outline-2 " +
  "focus-visible:-outline-offset-1 focus-visible:outline-blue-800";

const overviewLinks = [
  {
    href: "#quick-start",
    title: "Quick Start",
    description: "Install and assemble your first component.",
  },
  {
    href: "#accessibility",
    title: "Accessibility",
    description: "Learn how we build accessible components.",
  },
  {
    href: "#releases",
    title: "Releases",
    description: "See what's new in the latest versions.",
  },
  {
    href: "#about",
    title: "About",
    description: "Learn more about Base UI and our mission.",
  },
] as const;

const handbookLinks = [
  {
    href: "#styling",
    title: "Styling",
    description:
      "Components can be styled with plain CSS, Tailwind, CSS-in-JS, or CSS Modules.",
  },
  {
    href: "#animation",
    title: "Animation",
    description:
      "Components can be animated with CSS transitions, CSS animations, or JavaScript.",
  },
  {
    href: "#composition",
    title: "Composition",
    description:
      "Components can be replaced and composed with your own existing components.",
  },
] as const;

function NavLink(props: NavigationMenu.Link.Props) {
  return <NavigationMenu.Link render={<a />} {...props} />;
}

function NavigationMenuDemo() {
  return (
    <NavigationMenu.Root className="min-w-max rounded-lg bg-gray-50 p-1 text-gray-900">
      <NavigationMenu.List className="relative flex">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className={navTriggerClassName}>
            Overview
            <NavigationMenu.Icon className="transition-transform duration-200 ease-in-out data-[popup-open]:rotate-180">
              <ChevronDownIcon />
            </NavigationMenu.Icon>
          </NavigationMenu.Trigger>

          <NavigationMenu.Content className={navContentClassName}>
            <ul className="grid list-none grid-cols-[12rem_12rem] gap-0">
              {overviewLinks.map((item) => (
                <li key={item.href}>
                  <NavLink href={item.href} className={navLinkCardClassName}>
                    <h3 className="m-0 mb-1 text-base leading-5 font-medium">
                      {item.title}
                    </h3>
                    <p className="m-0 text-sm leading-5 text-gray-500">
                      {item.description}
                    </p>
                  </NavLink>
                </li>
              ))}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className={navTriggerClassName}>
            Handbook
            <NavigationMenu.Icon className="transition-transform duration-200 ease-in-out data-[popup-open]:rotate-180">
              <ChevronDownIcon />
            </NavigationMenu.Icon>
          </NavigationMenu.Trigger>

          <NavigationMenu.Content className={navContentClassName}>
            <ul className="flex max-w-[400px] flex-col justify-center">
              {handbookLinks.map((item) => (
                <li key={item.href}>
                  <NavLink href={item.href} className={navLinkCardClassName}>
                    <h3 className="m-0 mb-1 text-base leading-5 font-medium">
                      {item.title}
                    </h3>
                    <p className="m-0 text-sm leading-5 text-gray-500">
                      {item.description}
                    </p>
                  </NavLink>
                </li>
              ))}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavLink className={navTriggerClassName} href="#">
            GitHub
          </NavLink>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      <NavigationMenu.Portal>
        <NavigationMenu.Positioner
          sideOffset={10}
          collisionPadding={{ top: 5, bottom: 5, left: 20, right: 20 }}
          collisionAvoidance={{ side: "none" }}
          className="box-border h-positioner-height w-positioner-width max-w-available-width transition-[top,left,right,bottom] duration-[var(--duration)] ease-[var(--easing)] before:absolute before:content-[''] data-[instant]:transition-none data-[side=bottom]:before:top-[-10px] data-[side=bottom]:before:right-0 data-[side=bottom]:before:left-0 data-[side=bottom]:before:h-2.5 data-[side=left]:before:top-0 data-[side=left]:before:right-[-10px] data-[side=left]:before:bottom-0 data-[side=left]:before:w-2.5 data-[side=right]:before:top-0 data-[side=right]:before:bottom-0 data-[side=right]:before:left-[-10px] data-[side=right]:before:w-2.5 data-[side=top]:before:right-0 data-[side=top]:before:bottom-[-10px] data-[side=top]:before:left-0 data-[side=top]:before:h-2.5"
          style={
            {
              "--duration": "0.35s",
              "--easing": "cubic-bezier(0.22, 1, 0.36, 1)",
            } as React.CSSProperties
          }
        >
          <NavigationMenu.Popup className="relative h-popup-height-exact w-popup-width-exact origin-[var(--transform-origin)] rounded-lg bg-[canvas] text-gray-900 shadow-lg shadow-gray-200 outline outline-1 outline-gray-200 transition-[opacity,transform,width,height,scale,translate] duration-[var(--duration)] ease-[var(--easing)] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[ending-style]:duration-150 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300">
            <NavigationMenu.Arrow className="flex transition-[left] duration-[var(--duration)] ease-[var(--easing)] data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180">
              <ArrowSvg />
            </NavigationMenu.Arrow>
            <NavigationMenu.Viewport className="relative h-full w-full overflow-hidden" />
          </NavigationMenu.Popup>
        </NavigationMenu.Positioner>
      </NavigationMenu.Portal>
    </NavigationMenu.Root>
  );
}

// ============================================
// Toolbar Demo
// ============================================

const toolbarButtonClassName =
  "flex h-8 items-center justify-center rounded-sm px-[0.75rem] font-[inherit] text-sm font-medium " +
  "text-gray-600 select-none hover:bg-gray-100 " +
  "focus-visible:bg-none focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 " +
  "active:bg-gray-200 data-[pressed]:bg-gray-100 data-[pressed]:text-gray-900";

function ToolbarDemo() {
  return (
    <Toolbar.Root className="flex items-center gap-px rounded-md border border-gray-200 bg-gray-50 p-0.5">
      <ToggleGroup className="flex gap-1" aria-label="Text formatting">
        <Toolbar.Button
          render={<Toggle />}
          aria-label="Bold"
          value="bold"
          className={toolbarButtonClassName}
        >
          <BoldIcon />
        </Toolbar.Button>
        <Toolbar.Button
          render={<Toggle />}
          aria-label="Italic"
          value="italic"
          className={toolbarButtonClassName}
        >
          <ItalicIcon />
        </Toolbar.Button>
        <Toolbar.Button
          render={<Toggle />}
          aria-label="Underline"
          value="underline"
          className={toolbarButtonClassName}
        >
          <UnderlineIcon />
        </Toolbar.Button>
      </ToggleGroup>

      <Toolbar.Separator className="m-1 h-4 w-px bg-gray-300" />

      <Toolbar.Group className="flex gap-1" aria-label="Alignment">
        <Toolbar.Button
          className="flex size-8 items-center justify-center rounded-sm font-[inherit] text-sm text-gray-600 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-200"
          aria-label="Align left"
        >
          <AlignLeftIcon />
        </Toolbar.Button>
        <Toolbar.Button
          className="flex size-8 items-center justify-center rounded-sm font-[inherit] text-sm text-gray-600 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-200"
          aria-label="Align center"
        >
          <AlignCenterIcon />
        </Toolbar.Button>
        <Toolbar.Button
          className="flex size-8 items-center justify-center rounded-sm font-[inherit] text-sm text-gray-600 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-200"
          aria-label="Align right"
        >
          <AlignRightIcon />
        </Toolbar.Button>
      </Toolbar.Group>

      <Toolbar.Separator className="m-1 h-4 w-px bg-gray-300" />

      <Toolbar.Link
        className="mr-3.5 ml-auto flex-none self-center text-sm text-gray-500 no-underline hover:text-blue-800 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blue-800"
        href="#"
      >
        Edited 2m ago
      </Toolbar.Link>
    </Toolbar.Root>
  );
}

// ============================================
// Accordion Demo
// ============================================

const accordionTriggerClassName =
  "group relative flex w-full items-baseline justify-between gap-4 bg-gray-50 py-2 pr-1 pl-3 " +
  "text-left font-medium hover:bg-gray-100 " +
  "focus-visible:z-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-800";

const accordionPanelClassName =
  "h-accordion-panel overflow-hidden text-base text-gray-600 " +
  "transition-[height] ease-out data-[ending-style]:h-0 data-[starting-style]:h-0";

function AccordionDemo() {
  return (
    <Accordion.Root className="flex w-96 max-w-full flex-col justify-center text-gray-900">
      <Accordion.Item className="border-b border-gray-200">
        <Accordion.Header>
          <Accordion.Trigger className={accordionTriggerClassName}>
            What is Base UI?
            <PlusIcon className="mr-2 size-3 shrink-0 transition-all ease-out group-data-[panel-open]:scale-110 group-data-[panel-open]:rotate-45" />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel className={accordionPanelClassName}>
          <div className="p-3">
            Base UI is a library of high-quality unstyled React components for
            design systems and web apps. It provides accessible behavior and
            keyboard interactions out of the box.
          </div>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item className="border-b border-gray-200">
        <Accordion.Header>
          <Accordion.Trigger className={accordionTriggerClassName}>
            How do I get started?
            <PlusIcon className="mr-2 size-3 shrink-0 transition-all ease-out group-data-[panel-open]:scale-110 group-data-[panel-open]:rotate-45" />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel className={accordionPanelClassName}>
          <div className="p-3">
            Head to the &ldquo;Quick start&rdquo; guide in the docs. If
            you&rsquo;ve used unstyled libraries before, you&rsquo;ll feel right
            at home.
          </div>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item className="border-b border-gray-200">
        <Accordion.Header>
          <Accordion.Trigger className={accordionTriggerClassName}>
            Can I use it for my project?
            <PlusIcon className="mr-2 size-3 shrink-0 transition-all ease-out group-data-[panel-open]:scale-110 group-data-[panel-open]:rotate-45" />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel className={accordionPanelClassName}>
          <div className="p-3">
            Of course! Base UI is free and open source under the MIT license.
            Use it for personal or commercial projects.
          </div>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item className="border-b border-gray-200">
        <Accordion.Header>
          <Accordion.Trigger className={accordionTriggerClassName}>
            Is it accessible?
            <PlusIcon className="mr-2 size-3 shrink-0 transition-all ease-out group-data-[panel-open]:scale-110 group-data-[panel-open]:rotate-45" />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel className={accordionPanelClassName}>
          <div className="p-3">
            Yes. All components follow WAI-ARIA patterns and support full
            keyboard navigation. Accessibility is a core design principle.
          </div>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion.Root>
  );
}

// ============================================
// Shared SVG Icons
// ============================================

function OverviewIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 30 30"
      fill="currentcolor"
      {...props}
    >
      <path d="M 6 4 C 4.895 4 4 4.895 4 6 L 4 12 C 4 13.105 4.895 14 6 14 L 12 14 C 13.105 14 14 13.105 14 12 L 14 6 C 14 4.895 13.105 4 12 4 L 6 4 z M 18 4 C 16.895 4 16 4.895 16 6 L 16 12 C 16 13.105 16.895 14 18 14 L 24 14 C 25.105 14 26 13.105 26 12 L 26 6 C 26 4.895 25.105 4 24 4 L 18 4 z M 9 6 C 10.657 6 12 7.343 12 9 C 12 10.657 10.657 12 9 12 C 7.343 12 6 10.657 6 9 C 6 7.343 7.343 6 9 6 z M 18 6 L 24 6 L 24 12 L 18 12 L 18 6 z M 6 16 C 4.895 16 4 16.895 4 18 L 4 24 C 4 25.105 4.895 26 6 26 L 12 26 C 13.105 26 14 25.105 14 24 L 14 18 C 14 16.895 13.105 16 12 16 L 6 16 z M 18 16 C 16.895 16 16 16.895 16 18 L 16 24 C 16 25.105 16.895 26 18 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 18 C 26 16.895 25.105 16 24 16 L 18 16 z M 21 17.5 L 24.5 21 L 21 24.5 L 17.5 21 L 21 17.5 z M 9 18 L 11.886719 23 L 6.1132812 23 L 9 18 z" />
    </svg>
  );
}

function ProjectIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 30 30"
      fill="currentcolor"
      {...props}
    >
      <path d="M 14.984375 1.9863281 A 1.0001 1.0001 0 0 0 14 3 L 14 4 L 5 4 L 4 4 A 1.0001 1.0001 0 1 0 3.9804688 6 C 3.9348612 9.0608831 3.6893807 11.887023 3.1523438 14.142578 C 2.5565033 16.645108 1.6039585 18.395538 0.4453125 19.167969 A 1.0001 1.0001 0 0 0 1 21 L 4 21 C 4 22.105 4.895 23 6 23 L 11.787109 23 L 10.148438 26.042969 A 1.5 1.5 0 0 0 9 27.5 A 1.5 1.5 0 0 0 10.5 29 A 1.5 1.5 0 0 0 12 27.5 A 1.5 1.5 0 0 0 11.910156 26.992188 L 14.060547 23 L 15.939453 23 L 18.089844 26.992188 A 1.5 1.5 0 0 0 18 27.5 A 1.5 1.5 0 0 0 19.5 29 A 1.5 1.5 0 0 0 21 27.5 A 1.5 1.5 0 0 0 19.851562 26.042969 L 18.212891 23 L 24 23 C 25.105 23 26 22.105 26 21 L 26 6 A 1.0001 1.0001 0 1 0 26 4 L 25 4 L 16 4 L 16 3 A 1.0001 1.0001 0 0 0 14.984375 1.9863281 z M 5.9589844 6 L 14.832031 6 A 1.0001 1.0001 0 0 0 15.158203 6 L 23.958984 6 C 23.912194 9.0500505 23.687726 11.893974 23.152344 14.142578 C 22.583328 16.532444 21.674397 18.178754 20.585938 19 L 3.1523438 19 C 3.9976592 17.786874 4.6791735 16.365049 5.0976562 14.607422 C 5.6877248 12.129135 5.9137751 9.1554725 5.9589844 6 z" />
    </svg>
  );
}

function PersonIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 30 30"
      fill="currentcolor"
      {...props}
    >
      <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M8,22.141 c1.167-3.5,4.667-2.134,5.25-4.03v-1.264c-0.262-0.141-1.013-1.109-1.092-1.865c-0.207-0.018-0.531-0.223-0.627-1.034 c-0.051-0.435,0.153-0.68,0.276-0.757c0,0-0.308-0.702-0.308-1.399C11.5,9.72,12.526,8,15,8c1.336,0,1.75,0.947,1.75,0.947 c1.194,0,1.75,1.309,1.75,2.844c0,0.765-0.308,1.399-0.308,1.399c0.124,0.077,0.328,0.322,0.277,0.757 c-0.096,0.811-0.42,1.016-0.627,1.034c-0.079,0.756-0.829,1.724-1.092,1.865v1.264c0.583,1.897,4.083,0.531,5.25,4.031 c0,0-2.618,2.859-7,2.859C10.593,25,8,22.141,8,22.141z" />
    </svg>
  );
}

function ChevronDownIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" {...props}>
      <path d="M1 3.5L5 7.5L9 3.5" stroke="currentcolor" strokeWidth="1.5" />
    </svg>
  );
}

function ChevronRightIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M6 12L10 8L6 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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

function PlusIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 12 12" fill="currentcolor" {...props}>
      <path d="M6.75 0H5.25V5.25H0V6.75L5.25 6.75V12H6.75V6.75L12 6.75V5.25H6.75V0Z" />
    </svg>
  );
}

function BoldIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
      <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
    </svg>
  );
}

function ItalicIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="19" y1="4" x2="10" y2="4" />
      <line x1="14" y1="20" x2="5" y2="20" />
      <line x1="15" y1="4" x2="9" y2="20" />
    </svg>
  );
}

function UnderlineIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 4v6a6 6 0 0 0 12 0V4" />
      <line x1="4" y1="20" x2="20" y2="20" />
    </svg>
  );
}

function AlignLeftIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="17" y1="10" x2="3" y2="10" />
      <line x1="21" y1="6" x2="3" y2="6" />
      <line x1="21" y1="14" x2="3" y2="14" />
      <line x1="17" y1="18" x2="3" y2="18" />
    </svg>
  );
}

function AlignCenterIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="18" y1="10" x2="6" y2="10" />
      <line x1="21" y1="6" x2="3" y2="6" />
      <line x1="21" y1="14" x2="3" y2="14" />
      <line x1="18" y1="18" x2="6" y2="18" />
    </svg>
  );
}

function AlignRightIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="21" y1="10" x2="7" y2="10" />
      <line x1="21" y1="6" x2="3" y2="6" />
      <line x1="21" y1="14" x2="3" y2="14" />
      <line x1="21" y1="18" x2="7" y2="18" />
    </svg>
  );
}

// ============================================
// Page Component
// ============================================

export default function NavigationPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Navigation"
        description="Tabs, menus, navigation menus, toolbars, and accordion components for structuring and navigating content."
      />

      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="space-y-12">
          {/* Tabs */}
          <ComponentDemo
            title="Tabs"
            description="Tabbed interface with animated indicator. Use arrow keys to navigate between tabs. The indicator smoothly transitions to the active tab using CSS variables."
          >
            <TabsDemo />
          </ComponentDemo>

          {/* Menu */}
          <ComponentDemo
            title="Menu"
            description="Dropdown menu with items, separators, and full keyboard navigation. Click the trigger or press Enter/Space to open, then use arrow keys to navigate items."
          >
            <MenuDemo />
          </ComponentDemo>

          {/* Menubar */}
          <ComponentDemo
            title="Menubar"
            description="Horizontal menubar with multiple menus (File, Edit, View). Supports submenus, keyboard navigation between menus with arrow keys, and disabled menu triggers."
          >
            <MenubarDemo />
          </ComponentDemo>

          {/* Navigation Menu */}
          <ComponentDemo
            title="Navigation Menu"
            description="Navigation menu with links and dropdown sub-menus. Content panels animate with directional transitions. Commonly used for website top-level navigation."
          >
            <NavigationMenuDemo />
          </ComponentDemo>

          {/* Toolbar */}
          <ComponentDemo
            title="Toolbar"
            description="Toolbar with toggle buttons, regular buttons, separators between groups, and a link. Toggle buttons maintain pressed state. Uses a single tab stop with arrow key navigation."
          >
            <ToolbarDemo />
          </ComponentDemo>

          {/* Accordion */}
          <ComponentDemo
            title="Accordion"
            description="Expandable/collapsible sections with smooth height animation. The panel height animates using the --accordion-panel-height CSS variable. Click or press Enter/Space to toggle."
          >
            <AccordionDemo />
          </ComponentDemo>
        </div>
      </main>
    </div>
  );
}
