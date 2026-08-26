export const fullClass = {
    root: "flex flex-col gap-1.5 w-full",
    label: "text-sm font-medium text-zinc-900 dark:text-zinc-100 select-none",
    control: "relative flex items-center rounded-md border border-base bg-app shadow-sm transition-colors focus-within:ring-1 focus-within:ring-zinc-950 dark:focus-within:ring-zinc-300",
    input: "h-9 w-full bg-transparent px-3 py-1 text-sm outline-none placeholder:text-zinc-500 disabled:cursor-not-allowed",
    trigger: "flex h-9 w-9 items-center justify-center text-zinc-500",
    content: "z-50 min-w-[8rem] overflow-hidden rounded-md border border-base bg-app text-zinc-950 shadow-md animate-in zoom-in-95 dark:text-zinc-50 data-[expanded]:animate-in data-[closed]:animate-out",
    listbox: "p-1",
    item: "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[highlighted]:bg-zinc-100 data-[highlighted]:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:data-[highlighted]:bg-zinc-800 dark:data-[highlighted]:text-zinc-50",
    itemIndicator: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
    icon: "h-4 w-4 transition-transform duration-200 origin-center data-[expanded]:rotate-180",
}
