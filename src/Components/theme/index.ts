import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import styles from "./globalStyle";
import { colors } from "./UITheme";

const fonts = {
  body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto","Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",sans-serif',
  heading:
    '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto","Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",sans-serif',
};

const config: ThemeConfig = {
  initialColorMode: "system",
  // useSystemColorMode: true,
}
const overrides = {
  config,
  colors,
  styles,
  fonts,
}

export default extendTheme(overrides);
