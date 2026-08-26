export const defaultClass = {
    overlay: "fixed inset-0 z-50 backdrop-blur-sm animate-in duration-200 data-[expanded]:animate-in data-[closed]:animate-out",
    content: "fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-base bg-app text-main p-4 shadow-lg rounded-xl data-[expanded]:animate-in data-[closed]:animate-out",
    title: "text-lg font-semibold leading-none text-zinc-950 dark:text-zinc-50",
    description: "text-sm text-zinc-500 dark:text-zinc-400 mt-2",
    closeButton: "rounded-sm opacity-70 transition-opacity hover:opacity-100 dark:text-zinc-400",
}
