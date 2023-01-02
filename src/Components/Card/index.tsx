import { Box, Flex, Heading, useColorMode, useTheme } from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../../Context/context";

const ProfileCard = () => {
  let { colorMode } = useColorMode();
  let { state } = useContext(GlobalContext);
  const theme = useTheme();
  const { colors } = theme;
  return (
    <div>
      <Flex
        columnGap="4rem"
        // justifyContent="center"
        isolation="isolate"
        borderRadius="10px"
        overflow="hidden"
        maxWidth="900px"
        mx="auto"
        bg="primary.50"
        mt="12rem"
        px="20"
        py="10"
        position="relative"
        boxShadow={
          colorMode === "light"
            ? `0px 10px 18px ${colors.primary[400]}26`
            : undefined
        }
      >
        {/* Side Blured Circle */}
        <Box
          position="absolute"
          width="280px"
          height="280px"
          left="-7rem"
          top="-7rem"
          bg="primary.400"
          zIndex="-1"
          sx={{ filter: "blur(4rem)" }}
        ></Box>
        <Box
          borderRadius="lg"
          position="absolute"
          width="38px"
          height="38px"
          right="-.5rem"
          top="-.5rem"
          bg="primary.400"
          zIndex="-1"
          sx={{ filter: "blur(.5rem)" }}
        ></Box>
        <Box
          borderRadius="lg"
          position="absolute"
          width="38px"
          height="38px"
          right="2.5rem"
          top="-.5rem"
          bg="primary.400"
          zIndex="-1"
          // sx={{filter:"blur(.5rem)"}}
        ></Box>
        <Box
          borderRadius="lg"
          position="absolute"
          width="38px"
          height="38px"
          right="0rem"
          top="2.3rem"
          bg="primary.400"
          zIndex="-1"
        ></Box>
        <Box
          borderRadius="lg"
          position="absolute"
          width="34px"
          height="34px"
          right="1.5rem"
          top="1rem"
          bg="primary.50"
          zIndex="-1"
        ></Box>
        <Box
          borderRadius="lg"
          position="absolute"
          width="34px"
          height="34px"
          right="3rem"
          top="2.2rem"
          bg="primary.400"
          zIndex="-1"
          sx={{ filter: "blur(.6rem)" }}
        ></Box>
        <Box
          bg={
            state.InitialThemeColor === "gold"
              ? "theme_gold.light.100"
              : state.InitialThemeColor === "red"
              ? "theme_magenta.light.100"
              : state.InitialThemeColor === "purple"
              ? "theme_purple.light.100"
              : state.InitialThemeColor === "blue"
              ? "theme_blue.light.100"
              : "theme_gold.light.100"
          }
          borderRadius="3rem"
          overflow="hidden"
        >
          <img
            style={{ marginBottom: "-2px" }}
            src="./Profile-Picture.png"
            width={225}
            alt="UI face"
          />
        </Box>
        <Box>
          <Heading marginTop=".8rem" color="primary.400" fontSize="2rem">
            Martin Carroll
          </Heading>
          <Heading
            fontWeight="500"
            color={colorMode === "dark" ? "#EAEAEA" : "#808080"}
            as="p"
            size="base"
            marginTop=".8rem"
          >
            Sr. Frontend Dev
          </Heading>
          <Heading
            fontWeight="600"
            color="primary.400"
            as="p"
            size="base"
            marginTop="2.5rem"
          >
            Dev Tools
          </Heading>

          <Flex gap="1rem" marginTop=".5rem">
            <Box
              boxShadow={
                colorMode === "light" ? "0px 4px 8px rgba(0, 0, 0, 0.11)" : ""
              }
              bg="primary.75"
              height="45px"
              width="45px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="8px"
            >
              <img
                src="./js_logo.svg"
                style={{ width: "30px", height: "30px", objectFit: "contain" }}
                alt="JS LOGO"
              />
            </Box>
            <Box
              boxShadow={
                colorMode === "light" ? "0px 4px 8px rgba(0, 0, 0, 0.11)" : ""
              }
              bg="primary.75"
              height="45px"
              width="45px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="8px"
            >
              <img
                src="./react_logo.svg"
                style={{ width: "30px", height: "30px", objectFit: "contain" }}
                alt="React LOGO"
              />
            </Box>
            <Box
              boxShadow={
                colorMode === "light" ? "0px 4px 8px rgba(0, 0, 0, 0.11)" : ""
              }
              bg="primary.75"
              height="45px"
              width="45px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="8px"
            >
              <img
                src="./tailwind_logo.svg"
                style={{ width: "30px", height: "30px", objectFit: "contain" }}
                alt="JS LOGO"
              />
            </Box>
            <Box
              boxShadow={
                colorMode === "light" ? "0px 4px 8px rgba(0, 0, 0, 0.11)" : ""
              }
              bg="primary.75"
              height="45px"
              width="45px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="8px"
            >
              <img
                src="./xd_logo.svg"
                style={{ width: "30px", height: "30px", objectFit: "contain" }}
                alt="JS LOGO"
              />
            </Box>
            <Box
              boxShadow={
                colorMode === "light" ? "0px 4px 8px rgba(0, 0, 0, 0.11)" : ""
              }
              bg="primary.75"
              height="45px"
              width="45px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="8px"
            >
              <img
                src="./figma_logo.svg"
                style={{ width: "30px", height: "30px", objectFit: "contain" }}
                alt="JS LOGO"
              />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default ProfileCard;
