import type { ReactNode } from "react";
import { useState } from "react";
import { financeDarkTheme, financeLightTheme } from "./theme-finance";
import { gamingDarkTheme, gamingLightTheme } from "./theme-gaming";
import { newsDarkTheme, newsLightTheme } from "./theme-news";
import { useSystemTheme, type SystemTheme } from "./useSystemTheme";

interface ThemeProviderProps {
  children: ReactNode;
}

function getTheme(universe: string, systemTheme: SystemTheme) {
  switch (universe) {
    case "finance":
      return systemTheme === "light" ? financeLightTheme : financeDarkTheme;
    case "gaming":
      return systemTheme === "light" ? gamingLightTheme : gamingDarkTheme;
    default:
    case "news ":
      return systemTheme === "light" ? newsLightTheme : newsDarkTheme;
  }
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [universe, setUniverse] = useState<string>("finance");
  const { systemTheme } = useSystemTheme();

  const theme = getTheme(universe, systemTheme);

  const handleUniverseChange = (universe: string) => {
    setUniverse(universe);
  };

  return (
    <div className={theme}>
      {children}
      <div>
        <div>
          <button onClick={() => handleUniverseChange("gaming")}>
            Gaming Theme
          </button>
          <button onClick={() => handleUniverseChange("news")}>
            News Theme
          </button>
          <button onClick={() => handleUniverseChange("finance")}>
            Finance Theme
          </button>
        </div>
      </div>
    </div>
  );
}
