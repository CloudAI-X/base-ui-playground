"use client";

import { Autocomplete } from "@base-ui/react/autocomplete";

interface Language {
  id: string;
  value: string;
}

const languages: Language[] = [
  { id: "js", value: "JavaScript" },
  { id: "ts", value: "TypeScript" },
  { id: "py", value: "Python" },
  { id: "rs", value: "Rust" },
  { id: "go", value: "Go" },
  { id: "java", value: "Java" },
  { id: "csharp", value: "C#" },
  { id: "cpp", value: "C++" },
  { id: "ruby", value: "Ruby" },
  { id: "swift", value: "Swift" },
  { id: "kotlin", value: "Kotlin" },
  { id: "php", value: "PHP" },
  { id: "dart", value: "Dart" },
  { id: "scala", value: "Scala" },
  { id: "elixir", value: "Elixir" },
  { id: "haskell", value: "Haskell" },
  { id: "clojure", value: "Clojure" },
  { id: "lua", value: "Lua" },
  { id: "r", value: "R" },
  { id: "zig", value: "Zig" },
];

export function AutocompleteDemo() {
  return (
    <Autocomplete.Root items={languages}>
      <label className="flex flex-col gap-1 text-sm font-medium leading-5 text-foreground">
        Search languages
        <Autocomplete.Input
          placeholder="e.g. TypeScript"
          className="h-10 w-64 rounded-md border border-border bg-background pl-3.5 text-base font-normal text-foreground focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-ring"
        />
      </label>

      <Autocomplete.Portal>
        <Autocomplete.Positioner className="outline-none" sideOffset={4}>
          <Autocomplete.Popup className="max-h-[23rem] w-[var(--anchor-width)] max-w-[var(--available-width)] rounded-md bg-background text-foreground shadow-lg outline-1 outline-border transition-[transform,scale,opacity] duration-100 data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0">
            <Autocomplete.Empty className="p-4 text-sm leading-4 text-muted empty:m-0 empty:p-0">
              No languages found.
            </Autocomplete.Empty>
            <Autocomplete.List className="max-h-[min(23rem,var(--available-height))] scroll-py-2 overflow-y-auto overscroll-contain py-2 outline-0 data-[empty]:p-0">
              {(language: Language) => (
                <Autocomplete.Item
                  key={language.id}
                  className="flex cursor-default items-center gap-2 py-2 pr-8 pl-4 text-base leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-primary-foreground data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-2 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-primary"
                  value={language}
                >
                  {language.value}
                </Autocomplete.Item>
              )}
            </Autocomplete.List>
          </Autocomplete.Popup>
        </Autocomplete.Positioner>
      </Autocomplete.Portal>
    </Autocomplete.Root>
  );
}
