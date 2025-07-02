import { css, cx } from '@linaria/atomic';

import { coreTokens } from './theme-base';

export const financeLightTheme = cx(
  coreTokens,
  css`
    --accent: var(--purple50);
    --accentBackgroundDefault: var(--accent);
  `
);

export const financeDarkTheme = cx(
  coreTokens,
  css`
    --accent: var(--purple800);
    --accentBackgroundDefault: var(--accent);
  `
);
