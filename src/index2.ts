import type {
  Theme,
  Base16Theme,
  GetDefaultStyling,
  StylingOptions,
} from './types';

declare function invertTheme(base16Theme: Base16Theme): Base16Theme;

declare function createStyling(
  getDefaultStyling: (base16Theme: Base16Theme) => StylingConfig,
  options?: {
    defaultBase16?: Theme;
    base16Themes: Theme[];
  }
): (theme: Theme, invertTheme: boolean) => StylingFunction;

declare function createStyling(
  getDefaultStyling: (base16Theme: Base16Theme) => StylingConfig,
  options?: {
    defaultBase16?: Theme;
    base16Themes: Theme[];
  },
  theme: Theme,
  invertTheme: boolean
): StylingFunction;

declare function getBase16Theme(
  theme: Theme,
  base16Themes: Base16Theme[]
): Base16Theme;
