import { ThemeProvider, useTheme } from 'next-themes';
import { ReactNode, useCallback } from 'react';

export type ThemeMode = 'light' | 'dark';

export function useNextTheme() {
  const returns = useTheme();
  let { theme } = returns;
  const { setTheme } = returns;
  const updateTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    return theme;
  }, [theme, setTheme]);

  const setDarkTheme = useCallback(() => {
    setTheme('dark');
    return 'dark';
  }, [setTheme]);
  const setLightTheme = useCallback(() => {
    setTheme('light');
    return 'light';
  }, [setTheme]);
  if (theme === 'system') {
    theme = matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    setTheme(theme);
  }
  return { ...returns, updateTheme, setDarkTheme, setLightTheme };
}

export default function NextThemeProvider(props: { children: ReactNode }) {
  const { children } = props;
  return (
    <ThemeProvider attribute='class' storageKey='next-theme' enableSystem>
      {children}
    </ThemeProvider>
  );
}
