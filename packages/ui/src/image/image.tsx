import { Image as KImage } from "@kobalte/core/image";
import { omit, type ComponentProps } from "solid-js";
import { tv, type VariantProps } from "tailwind-variants";

const imageStyles = tv(
  {
    slots: {
      root: "relative flex items-center h-full w-full shrink-0 overflow-hidden",
      img: "h-full w-full aspect-square object-cover",
      fallback:
        "flex h-full w-full items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-400",
    },
    variants: {
      radius: {
        none: { root: "rounded-none" },
        sm: { root: "rounded-sm" },
        md: { root: "rounded-md" },
        lg: { root: "rounded-lg" },
        full: { root: "rounded-full" },
      },
    },
    defaultVariants: {
      radius: "none",
    },
  },
  {
    twMerge: true,
  },
);

type ImageVariants = VariantProps<typeof imageStyles>;

export interface ImageProps extends ComponentProps<typeof KImage>, ImageVariants {
  src?: string;
  alt?: string;
  fallback?: string | Array<any>; // 支持自定义 fallback 内容
}

export const Image = (props: ImageProps) => {
  const others = omit(props, "src", "alt", "fallback", "class", "radius");

  const styles = imageStyles({ radius: props.radius });

  return (
    <KImage class={styles.root({ class: props.class })} {...others}>
      <KImage.Img src={props.src} alt={props.alt} class={styles.img()} />
      <KImage.Fallback class={styles.fallback()}>
        {props.fallback || (props.alt ? props.alt.slice(0, 2).toUpperCase() : "IMG")}
      </KImage.Fallback>
    </KImage>
  );
};
