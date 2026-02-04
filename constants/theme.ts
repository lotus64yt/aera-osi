import { Platform } from "react-native";

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};

export const AppColors = {
  onboardingBackground: "rgb(16, 34, 22)",
  primaryGreen: "#13ec5b",
  secondaryGreen: "#dbe6df",
  textSecondary: "#6b6f6b",
  textPrimary: "#ffffff",
  textTitle: "#fff",
  buttonPrimary: "#13ec5b",
  iconPrimary: "#13ec5b",
  iconSecondary: "#6b6f6b",
  hubBackground: "rgba(19, 236, 91, 0.1)",
  waterLevel: "rgba(59, 130, 246, 0.3)",
  hubBorder: "#f0f0f0",
  screenBackground: "#f5f5f5",
  waterTankBackground: "#eff6ff",
  buttonText: "#102216",
};

export const Fonts = Platform.select({
  ios: {
    sans: "system-ui",
    serif: "ui-serif",
    rounded: "ui-rounded",
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
