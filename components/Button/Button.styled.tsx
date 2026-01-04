import { cva } from "class-variance-authority";
import styled, { ButtonComponent } from "styled-components";
import { twMerge } from "tailwind-merge";

const baseClasses =
  "inline-block rounded-2xl py-2 px-4 text-center text-base font-medium";

const variants = {
  primary:
    "bg-stone-950 text-white hover:bg-stone-900 active:bg-stone-800 dark:bg-stone-50 dark:text-stone-950 dark:hover:bg-stone-100 dark:hover:bg-stone-200 dark:active:bg-stone-300",
  secondary:
    "bg-transparent text-stone-950 hover:bg-neutral-200 active:bg-neutral-300 dark:text-white dark:hover:bg-[rgba(255,255,255,0.05)] dark:active:bg-[rgba(255,255,255,0.1)]",
  outline:
    "border-[1px] border-solid border-[#EEEEEE] bg-[#F1F1F1] hover:border-stone-200 active:bg-stone-200 dark:border-[#202020] dark:bg-stone-900 dark:text-gray-50 dark:hover:border-stone-800 dark:active:bg-stone-800",
};

const buttonCva = cva(baseClasses, {
  variants: {
    variant: variants,
    layout: {
      block: "w-full",
      inline: "min-w-[206px] inline-block max-sm:w-[170px]",
      icon: "inline-block w-[44px] h-[44px] text-center font-regular py-2 px-2",
      link: "inline-block",
    },
  },
  defaultVariants: {
    variant: "primary",
    layout: "inline",
  },
});

const Button = styled.button.attrs<ButtonComponent>(({ variant, layout }) => ({
  className: twMerge(buttonCva({ variant, layout })),
}))``;

export default Button;
