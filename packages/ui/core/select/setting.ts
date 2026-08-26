export const fullClass = {
    root: "flex flex-col gap-1.5 w-full",
    label: "text-sm font-medium text-muted",
    trigger: "flex h-10 w-full text-main items-center justify-between rounded-md border border-light bg-app px-3 py-2 text-sm ring-offset-white placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50",
    content: "relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-light bg-app shadow-md text-main data-[expanded]:animate-in data-[closed]:animate-out",
    listbox: "p-1",
    item: "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-foreground focus:text-main data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    itemIndicator: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
    description: "mt-1 text-xs text-muted",
}
