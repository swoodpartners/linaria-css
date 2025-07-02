import { css, cx } from "@linaria/atomic";
import { coreTokens } from "./theme-base";

export const newsLightTheme = cx(
  coreTokens,
  css`
    --accent: var(--red50);
    --accentBackgroundDefault: var(--accent);
  `
);

export const newsDarkTheme = cx(
  coreTokens,
  css`
    --accent: var(--red800);
    --accentBackgroundDefault: var(--accent);
  `
);
