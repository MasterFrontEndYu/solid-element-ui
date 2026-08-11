import { Rating as KRating } from "@kobalte/core/rating";
import { splitProps, type ComponentProps, Show, Index } from "solid-js";
import { tv, type VariantProps } from "tailwind-variants";
import { StarIcon } from "lucide-solid";

const ratingStyles = tv({
    slots: {
        root: "flex flex-col gap-1.5 antialiased",
        label: "text-sm font-medium text-slate-700 dark:text-slate-300",
        control: "flex items-center gap-0.5",
        item: "relative cursor-pointer transition-transform active:scale-90 focus-visible:outline-none",
        itemIndicator: "flex items-center justify-center transition-colors",
    },
    variants: {
        color: {
            yellow: {
                itemIndicator:
                    "text-amber-400 fill-transparent data-[highlighted]:fill-amber-400 data-[highlighted]:text-amber-400",
            },
            blue: {
                itemIndicator:
                    "text-blue-500 fill-transparent data-[highlighted]:fill-blue-500 data-[highlighted]:text-blue-500",
            },
            red: {
                itemIndicator:
                    "text-red-500 fill-transparent data-[highlighted]:fill-red-500 data-[highlighted]:text-red-500",
            },
        },
        size: {
            sm: { itemIndicator: "h-4 w-4" },
            md: { itemIndicator: "h-6 w-6" },
            lg: { itemIndicator: "h-8 w-8" },
        },
    },
    defaultVariants: {
        color: "yellow",
        size: "md",
    },
});

type RatingVariants = VariantProps<typeof ratingStyles>;

export interface RatingGroupProps
    extends Omit<ComponentProps<typeof KRating>, "children" | "class">,
        RatingVariants {
    label?: string;
    count?: number; // 星星总数，默认为 5
    class?: string;
}

/**
 * RatingGroup 高度封装版
 * 自动处理星星循环、高亮逻辑及表单集成
 */
export const RatingGroup = (props: RatingGroupProps) => {
    const [local, variantProps, others] = splitProps(
        props,
        ["label", "count", "class"],
        ["color", "size"]
    );

    const s = () =>
        ratingStyles({
            color: variantProps.color,
            size: variantProps.size,
        });


    return (
        <KRating  class={s().root({ class: local.class })} {...others}>
            <Show when={local.label}>
                <KRating.Label class={s().label()}>
                    {local.label}
                </KRating.Label>
            </Show>

            <KRating.Control class={s().control()}>
                <Index each={Array(5)}>
                    {(_) => (
                        <KRating.Item class={s().item()}>
                            <KRating.ItemControl>
                                <StarIcon />
                            </KRating.ItemControl>
                        </KRating.Item>
                    )}
                </Index>
            </KRating.Control>
        </KRating>
    );
};
