import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;
    const updateClassList = (themeToAdd: Theme) => {
      root.classList.remove("light", "dark");
      root.classList.add(themeToAdd);
    };

    const systemThemeChangeHandler = (e: MediaQueryListEvent) => {
      updateClassList(e.matches ? "dark" : "light");
    };

    const systemThemeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    if (theme === "system") {
      updateClassList(systemThemeMediaQuery.matches ? "dark" : "light");
      systemThemeMediaQuery.addEventListener(
        "change",
        systemThemeChangeHandler
      );

      // Cleanup function to remove the event listener
      return () => {
        systemThemeMediaQuery.removeEventListener(
          "change",
          systemThemeChangeHandler
        );
      };
    } else {
      updateClassList(theme);
    }
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};

export const getCurrentThemeString = () => {
  const { theme } = useTheme();
  console.log(theme);
  if (theme === "light" || theme === "dark") {
    return theme;
  }

  if (theme === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return "dark";
};
