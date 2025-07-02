import { css } from "@linaria/atomic";
import { cva } from "class-variance-authority";

export const buttonStyles = {
  base: css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;
    border: 1px solid transparent;
    outline: none;
  `,

  accent: css`
    background-color: var(--accentBackgroundDefault);
    :hover {
      text-decoration: underline;
    }
  `,

  link: css`
    background-color: transparent;
    color: #3b82f6;
    :hover {
      text-decoration: underline;
    }
  `,

  sm: css`
    height: 36px;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 6px;
    font-size: 14px;
  `,

  lg: css`
    height: 44px;
    padding-left: 32px;
    padding-right: 32px;
    font-size: 16px;
  `,
};

export const buttonCVA = cva([buttonStyles.base], {
  variants: {
    variant: {
      accent: [buttonStyles.accent],
      link: [buttonStyles.link],
    },
    size: {
      sm: [buttonStyles.sm],
      lg: [buttonStyles.lg],
    },
  },
  defaultVariants: {
    variant: "accent",
    size: "sm",
  },
});
