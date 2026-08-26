// src/utils/cn.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * 合并类名，支持条件、对象、数组，并自动解决 Tailwind 冲突
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}