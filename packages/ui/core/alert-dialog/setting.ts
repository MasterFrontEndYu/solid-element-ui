export const defaultClass = {
    overlay: "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[expanded]:animate-in data-[closed]:animate-out",
    content: "fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl bg-app p-4 shadow-xl data-[expanded]:animate-in data-[closed]:animate-out",
    header: "flex align-center justify-between",
    title: "text-lg font-semibold text-main",
    description: "text-sm py-2 text-main",
    footer: "mt-6 flex flex-row justify-end gap-3",
    closeButton: "rounded-sm opacity-70 text-main transition-opacity hover:opacity-100 focus:outline-none",
}
