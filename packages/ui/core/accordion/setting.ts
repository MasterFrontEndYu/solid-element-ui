export const defaultClass = {
  root: " w-50 divide-y divide-base border border-base rounded-lg overflow-hidden",
  item: "group",
  header: "flex",
  trigger: [
    "flex flex-1 items-center justify-between cursor-pointer py-4 px-4 text-md font-medium transition-all ",
    "bg-foreground hover:bg-foreground/80",
  ],
  content: [
    "overflow-hidden text-md transition-all bg-transparent text-main",
    "data-[expanded]:animate-accordion-down data-[closed]:animate-accordion-up",
  ],
  contentText: "p-4",
  icon: "h-4 w-4 transition-transform duration-200 group-data-[expanded]:rotate-180",
}
