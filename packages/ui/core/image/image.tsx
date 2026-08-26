import { Image as KImage } from "@kobalte/core/image";
import { omit, type ComponentProps } from "solid-js";
import { fullClass } from "./setting";

export interface ImageProps extends ComponentProps<typeof KImage> {
  src?: string;
  alt?: string;
  fallback?: string | Array<any>; // 支持自定义 fallback 内容
}

export const Image = (props: ImageProps) => {
  const others = omit(props, "src", "alt", "fallback", "class", "radius");

  return (
    <KImage class={fullClass.root} {...others}>
      <KImage.Img src={props.src} alt={props.alt} class={fullClass.img} />
      <KImage.Fallback class={fullClass.fallback}>
        {props.fallback || (props.alt ? props.alt.slice(0, 2).toUpperCase() : "IMG")}
      </KImage.Fallback>
    </KImage>
  );
};
