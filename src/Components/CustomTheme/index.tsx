import { Box, Flex, useColorMode, useTheme } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../Context/context";
import MonitorIcon from "../SVGIcons/MonitorIcon";
import MoonIcon from "../SVGIcons/MoonIcon";
import SunIcon from "../SVGIcons/SunIcon";
import { ThemeNametype, AppColorModetype } from "../../types/globalTypes";

let appThemeColor = localStorage.getItem("app-theme-color");
if (appThemeColor === null) {
  localStorage.setItem("app-theme-color", "gold");
  appThemeColor = "gold";
}
let appColorModefromLocalStr = localStorage.getItem("app-color-mode");
if (appColorModefromLocalStr === null) {
  localStorage.setItem("app-color-mode", "system");
  appColorModefromLocalStr = "system";
}

const CustomizeTheme = () => {
  let { dispatch, state } = useContext(GlobalContext);
  const { colorMode, toggleColorMode } = useColorMode();
  const theme = useTheme();
  const { colors } = theme;

  let [initialtTheme, setInitialTheme] = useState<ThemeNametype>(
    appThemeColor === null
      ? "gold"
      : appThemeColor === "gold"
      ? "gold"
      : appThemeColor === "red"
      ? "red"
      : appThemeColor === "blue"
      ? "blue"
      : appThemeColor === "purple"
      ? "purple"
      : "gold"
  );

  let [appColorMode, setAppColorMode] = useState<AppColorModetype>(
    appColorModefromLocalStr === null
      ? "system"
      : appColorModefromLocalStr === "light"
      ? "light"
      : appColorModefromLocalStr === "dark"
      ? "dark"
      : "system"
  );

  useEffect(() => {
    if (initialtTheme !== state.InitialThemeColor) {
      dispatch({
        type: initialtTheme,
      });
    }
  }, [initialtTheme]);

  useEffect(() => {
    if (appColorMode !== state.AppColorMode) {
      if (colorMode !== appColorMode) {
        if (appColorMode === "light") {
          dispatch({
            type: "..loading-system-app-color",
          });
          toggleColorMode();
        }
        if (appColorMode === "dark") {
          dispatch({
            type: "..loading-system-app-color",
          });
          toggleColorMode();
        }
        if (appColorMode === "system") {
          if (
            window.matchMedia("(prefers-color-scheme: dark)").matches !==
            (colorMode === "dark")
          ) {
            toggleColorMode();
          }
        }
      }
      dispatch({
        type: appColorMode,
      });

      localStorage.setItem("app-color-mode", appColorMode);
    }
  }, [appColorMode]);

  useEffect(() => {
    const detectTHeme = (e: any) => {
      const colorScheme = e.matches ? "dark" : "light";
      if (state.AppColorMode !== "dark") {
        if (state.AppColorMode !== "light") {
          if (
            (colorScheme === "dark") !==
            (state.SystemRuntimeColor === "system-dark")
          ) {
            toggleColorMode();
            dispatch({
              type: "system-dark",
            });
          }
          if (
            (colorScheme === "light") !==
            (state.SystemRuntimeColor === "system-light")
          ) {
            toggleColorMode();
            dispatch({
              type: "system-light",
            });
          }
        }
      }
    };

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", detectTHeme);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", detectTHeme);
    };
  }, []);

  return (
    <Box
      bg="primary.50"
      padding="5"
      marginTop="4"
      borderRadius="10px"
      boxShadow={
        colorMode === "light"
          ? `0px 10px 18px ${colors.primary[400]}26`
          : undefined
      }
    >
      <Flex columnGap="1rem" alignItems="flex-start">
        <Flex flexDirection="column">
          <Box
            as="button"
            padding="5px 12px"
            borderRadius="5px"
            fontSize="sm"
            color="primary.400"
            bg={appColorMode === "light" ? "primary.200" : "transparent"}
            columnGap=".5rem"
            display="flex"
            justifyContent="start"
            onClick={() => {
              setAppColorMode("light");
            }}
          >
            <SunIcon size="22" color={colors.primary[400]} />
            Light
          </Box>
          <Box
            as="button"
            padding="5px 12px"
            borderRadius="5px"
            fontSize="sm"
            color="primary.400"
            bg={appColorMode === "dark" ? "primary.200" : "transparent"}
            columnGap=".5rem"
            display="flex"
            justifyContent="start"
            onClick={() => {
              setAppColorMode("dark");
            }}
          >
            <MoonIcon size="22" color={colors.primary[400]} />
            Dark
          </Box>
          <Box
            as="button"
            padding="5px 12px"
            borderRadius="5px"
            fontSize="sm"
            color="primary.400"
            bg={appColorMode === "system" ? "primary.200" : "transparent"}
            columnGap=".5rem"
            display="flex"
            justifyContent="start"
            onClick={() => {
              setAppColorMode("system");
            }}
          >
            <MonitorIcon size="22" color={colors.primary[400]} />
            System
          </Box>
        </Flex>
        <Flex flexWrap="wrap" maxWidth="100px" gap="2">
        <button
            onClick={() => {
              setInitialTheme("gold");
            }}
            style={{
              borderRadius: "12px",
              width: "44px",
              aspectRatio: "1/1",
              backgroundColor:
                initialtTheme === "gold"
                  ? colorMode === "dark"
                    ? colors.theme_gold.dark[200]
                    : colors.theme_gold.light[200]
                  : colorMode === "dark"
                  ? colors.theme_gold.dark[400]
                  : colors.theme_gold.light[400],
              border:
                initialtTheme === "gold"
                ? colorMode === "dark"
                ? `4px solid ${colors.theme_gold.dark[400]}`
                : `4px solid ${colors.theme_gold.light[400]}`
              : "4px solid transparent",
            }}
          ></button>
        <button
            onClick={() => {
              setInitialTheme("purple");
            }}
            style={{
              borderRadius: "12px",
              width: "44px",
              aspectRatio: "1/1",
              backgroundColor:
                initialtTheme === "purple"
                  ? colorMode === "dark"
                    ? colors.theme_purple.dark[200]
                    : colors.theme_purple.light[200]
                  : colorMode === "dark"
                  ? colors.theme_purple.dark[400]
                  : colors.theme_purple.light[400],
              border:
                initialtTheme === "purple"
                ? colorMode === "dark"
                ? `4px solid ${colors.theme_purple.dark[400]}`
                : `4px solid ${colors.theme_purple.light[400]}`
              : "4px solid transparent",
            }}
          ></button>
          <button
            onClick={() => {
              setInitialTheme("blue");
            }}
            style={{
              borderRadius: "12px",
              width: "44px",
              aspectRatio: "1/1",
              backgroundColor:
                initialtTheme === "blue"
                  ? colorMode === "dark"
                    ? colors.theme_blue.dark[200]
                    : colors.theme_blue.light[200]
                  : colorMode === "dark"
                  ? colors.theme_blue.dark[400]
                  : colors.theme_blue.light[400],
              border:
                initialtTheme === "blue"
                ? colorMode === "dark"
                ? `4px solid ${colors.theme_blue.dark[400]}`
                : `4px solid ${colors.theme_blue.light[400]}`
              : "4px solid transparent",
            }}
          ></button>
          <button
            onClick={() => {
              setInitialTheme("red");
            }}
            style={{
              borderRadius: "12px",
              width: "44px",
              aspectRatio: "1/1",
              backgroundColor:
                initialtTheme === "red"
                  ? colorMode === "dark"
                    ? colors.theme_magenta.dark[200]
                    : colors.theme_magenta.light[200]
                  : colorMode === "dark"
                  ? colors.theme_magenta.dark[400]
                  : colors.theme_magenta.light[400],
              border:
                initialtTheme === "red"
                  ? colorMode === "dark"
                    ? `4px solid ${colors.theme_magenta.dark[400]}`
                    : `4px solid ${colors.theme_magenta.light[400]}`
                  : "4px solid transparent",
            }}
          ></button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CustomizeTheme;
