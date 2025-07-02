import { useEffect, useState } from "react";

export type SystemTheme = "light" | "dark";

const THEME = {
  LIGHT: "light" as const,
  DARK: "dark" as const,
} as const;

const MEDIA_QUERY = "(prefers-color-scheme: dark)";

const getSystemTheme = (): SystemTheme => {
  return window.matchMedia(MEDIA_QUERY).matches ? THEME.DARK : THEME.LIGHT;
};

export const useSystemTheme = () => {
  const [systemTheme, setSystemTheme] = useState<SystemTheme>(getSystemTheme);

  useEffect(() => {
    const handleThemeChange = (event: MediaQueryListEvent) => {
      setSystemTheme(event.matches ? THEME.DARK : THEME.LIGHT);
    };

    const mediaQuery = window.matchMedia(MEDIA_QUERY);
    mediaQuery.addEventListener("change", handleThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);

  return { systemTheme };
};
