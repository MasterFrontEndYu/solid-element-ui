import { Image as KImage } from "@kobalte/core/image";
import { omit, type ComponentProps } from "solid-js";
import { defaultClass } from "./setting";

export interface ImageProps extends ComponentProps<typeof KImage> {
  src?: string;
  alt?: string;
  fallback?: string | Array<any>; // 支持自定义 fallback 内容
}

export const Image = (props: ImageProps) => {
  const others = omit(props, "src", "alt", "fallback", "class", "radius");

  return (
    <KImage class={defaultClass.root} {...others}>
      <KImage.Img src={props.src} alt={props.alt} class={defaultClass.img} />
      <KImage.Fallback class={defaultClass.fallback}>
        {props.fallback || (props.alt ? props.alt.slice(0, 2).toUpperCase() : "IMG")}
      </KImage.Fallback>
    </KImage>
  );
};
