// import { TimeField as KTimeField } from "@kobalte/core/time-field";
// import { splitProps, For, type ComponentProps, Show } from "solid-js";
// import { tv, type VariantProps } from "tailwind-variants";

// const timeFieldStyles = tv({
//     slots: {
//         root: "flex flex-col gap-1.5 w-full",
//         label: "text-sm font-medium text-slate-700 dark:text-slate-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
//         control: [
//             "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm transition-shadow",
//             "focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2",
//             "disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950",
//             "data-[invalid]:border-red-500 data-[invalid]:focus-within:ring-red-500",
//         ],
//         segment: [
//             "inline rounded-sm px-0.5 tabular-nums outline-none transition-colors",
//             "focus:bg-blue-600 focus:text-white dark:focus:bg-blue-500",
//             "data-[placeholder]:text-slate-400 data-[type=literal]:px-0",
//         ],
//         description: "text-xs text-slate-500 dark:text-slate-400",
//         errorMessage: "text-xs text-red-500",
//     },
//     variants: {
//         size: {
//             sm: { control: "h-8 px-2 text-xs" },
//             md: { control: "h-10 px-3 text-sm" },
//             lg: { control: "h-12 px-4 text-base" },
//         },
//     },
//     defaultVariants: {
//         size: "md",
//     },
// });

// type TimeFieldVariants = VariantProps<typeof timeFieldStyles>;

// export interface TimeFieldProps
//     extends Omit<ComponentProps<typeof KTimeField>, "class">,
//         TimeFieldVariants {
//     label?: string;
//     description?: string;
//     errorMessage?: string;
//     class?: string;
// }

// export const TimeField = (props: TimeFieldProps) => {
//     const [local, variantProps, others] = splitProps(
//         props,
//         ["label", "description", "errorMessage", "class"],
//         ["size"]
//     );

//     const styles = timeFieldStyles(variantProps);

//     return (
//         <KTimeField
//             class={styles.root({ class: local.class })}
//             validationState={local.errorMessage ? "invalid" : "valid"}
//             {...others}
//         >
//             <Show when={local.label}>
//                 <KTimeField.Label class={styles.label()}>
//                     {local.label}
//                 </KTimeField.Label>
//             </Show>

//             <KTimeField.Input class={styles.control()}>
//                 <For
//                     each={
//                         others.value
//                             ? []
//                             : [1] /* 仅作为占位，Kobalte 内部会自动处理内容 */
//                     }
//                 >
//                     {() => <KTimeField.Segment class={styles.segment()} />}
//                 </For>
//                 {/* 注意：通常情况下，直接在 Input 内部放置 Segment 映射即可 */}
//                 {(state) => (
//                     <For each={state.segments()}>
//                         {(segment) => (
//                             <KTimeField.Segment
//                                 segment={segment}
//                                 class={styles.segment()}
//                             />
//                         )}
//                     </For>
//                 )}
//             </KTimeField.Input>

//             <Show when={local.description}>
//                 <KTimeField.Description class={styles.description()}>
//                     {local.description}
//                 </KTimeField.Description>
//             </Show>

//             <Show when={local.errorMessage}>
//                 <KTimeField.ErrorMessage class={styles.errorMessage()}>
//                     {local.errorMessage}
//                 </KTimeField.ErrorMessage>
//             </Show>
//         </KTimeField>
//     );
// };
