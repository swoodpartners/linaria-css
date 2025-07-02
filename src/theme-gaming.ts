import { css, cx } from "@linaria/atomic";

import { coreTokens } from "./theme-base";

export const gamingLightTheme = cx(
  coreTokens,
  css`
    --accent: var(--yellow50);
    --accentBackgroundDefault: var(--accent);
  `
);

export const gamingDarkTheme = cx(
  coreTokens,
  css`
    --accent: var(--yellow800);
    --accentBackgroundDefault: var(--accent);
  `
);
