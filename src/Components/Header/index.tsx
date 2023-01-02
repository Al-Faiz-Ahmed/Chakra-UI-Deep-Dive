import {
  Box,
  Heading,
  useTheme,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../../Context/context";
import DownArrowIcon from "../SVGIcons/DownArrowIcon";
import MonitorIcon from "../SVGIcons/MonitorIcon";
import MoonIcon from "../SVGIcons/MoonIcon";
import SunIcon from "../SVGIcons/SunIcon";

type propType = {
  themeController: Object;
};

const Header = ({ themeController }: propType) => {
  let { state } = useContext(GlobalContext);
  const { colorMode } = useColorMode();
  const bg = useColorModeValue("#fff", "#000");
  const theme = useTheme();
  const { colors } = theme;
  return (
    <Box
      as="header"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      marginTop="1rem"
      borderRadius="10px"
      padding="1rem"
      bg="primary.50"
      boxShadow={
        colorMode === "light"
          ? `0px 10px 18px ${colors.primary[400]}26`
          : undefined
      }
    >
      <Heading
        as="h3"
        color={colorMode === "dark" ? "#fff" : "#000"}
        fontSize="2xl"
      >
        Profile Card Design
      </Heading>
      <Box
        {...themeController}
        as="button"
        display="flex"
        alignItems="center"
        bg="primary.200"
        borderRadius="17px 10px 10px 17px"
      >
        <Box bg="primary.400" padding=".6rem" borderRadius="16px">
          {state.AppColorMode === "system" ? (
            <MonitorIcon color={bg} size="30px" />
          ) : state.AppColorMode === "dark" ? (
            <MoonIcon color={bg} size="30px" />
          ) : (
            <SunIcon color={bg} size="30px" />
          )}
        </Box>
        <Box sx={{ marginInline: "6px 8px" }}>
          <DownArrowIcon color={colors.primary[400]} size="14px" />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
