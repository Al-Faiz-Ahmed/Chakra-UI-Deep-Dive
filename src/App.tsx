import { useContext, useEffect, useState } from "react";
import {
  Box,
  ChakraProvider,
  useColorMode,
  useDisclosure,
  useTheme,
} from "@chakra-ui/react";
import "./App.css";
import CustomizeTheme from "./Components/CustomTheme";
import Header from "./Components/Header";
import baseTheme from "./Components/theme";
import { GlobalContext } from "./Context/context";
import {
  theme_gold,
  theme_magenta,
  theme_blue,
  theme_purple,
} from "./Components/theme/UITheme";
import ProfileCard from "./Components/Card";

let appColorMode = localStorage.getItem("app-color-mode");
let appThemeColor = localStorage.getItem("app-theme-color");

if (appColorMode === null) {
  localStorage.setItem("app-color-mode", "system");
  appColorMode = "system";
}
if (appThemeColor === null) {
  localStorage.setItem("app-theme-color", "gold");
  appThemeColor = "gold";
} else if (appThemeColor === "gold") {
  if (appColorMode === "light") {
    baseTheme.colors.primary = theme_gold.light;
  }
  if (appColorMode === "dark") {
    baseTheme.colors.primary = theme_gold.dark;
  }
  if (appColorMode === "system") {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      baseTheme.colors.primary = theme_gold.dark;
    } else {
      baseTheme.colors.primary = theme_gold.light;
    }
  }
} else if (appThemeColor === "red") {
  if (appColorMode === "light") {
    baseTheme.colors.primary = theme_magenta.light;
  }
  if (appColorMode === "dark") {
    baseTheme.colors.primary = theme_magenta.dark;
  }
  if (appColorMode === "system") {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      baseTheme.colors.primary = theme_magenta.dark;
    } else {
      baseTheme.colors.primary = theme_magenta.light;
    }
  }
} else if (appThemeColor === "blue") {
  if (appColorMode === "light") {
    baseTheme.colors.primary = theme_blue.light;
  }
  if (appColorMode === "dark") {
    baseTheme.colors.primary = theme_blue.dark;
  }
  if (appColorMode === "system") {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      baseTheme.colors.primary = theme_blue.dark;
    } else {
      baseTheme.colors.primary = theme_blue.light;
    }
  }
} else if (appThemeColor === "purple") {
  if (appColorMode === "light") {
    baseTheme.colors.primary = theme_purple.light;
  }
  if (appColorMode === "dark") {
    baseTheme.colors.primary = theme_purple.dark;
  }
  if (appColorMode === "system") {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      baseTheme.colors.primary = theme_purple.dark;
    } else {
      baseTheme.colors.primary = theme_purple.light;
    }
  }
}

function App() {
  const { colorMode } = useColorMode();
  let { state } = useContext(GlobalContext);
  let [theme, updateTheme] = useState<any>(baseTheme);

  useEffect(() => {
    if (state.InitialThemeColor === "gold") {
      localStorage.setItem("app-theme-color", "gold");
      if (state.AppColorMode === "system") {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          updateTheme({
            ...theme,
            colors: {
              ...theme.colors,
              primary: theme_gold.dark,
            },
          });
        } else {
          updateTheme({
            ...theme,
            colors: {
              ...theme.colors,
              primary: theme_gold.light,
            },
          });
        }
      }
      if (state.AppColorMode === "light") {
        updateTheme({
          ...theme,
          colors: {
            ...theme.colors,
            primary: theme_gold.light,
          },
        });
      }
      if (state.AppColorMode === "dark") {
        updateTheme({
          ...theme,
          colors: {
            ...theme.colors,
            primary: theme_gold.dark,
          },
        });
      }
      if (state.SystemRuntimeColor === "system-dark") {
        updateTheme({
          ...theme,
          colors: {
            ...theme.colors,
            primary: theme_gold.dark,
          },
        });
      }
      if (state.SystemRuntimeColor === "system-light") {
        updateTheme({
          ...theme,
          colors: {
            ...theme.colors,
            primary: theme_gold.light,
          },
        });
      }
    }
    if (state.InitialThemeColor === "red") {
      localStorage.setItem("app-theme-color", "red");
      if (state.AppColorMode === "system") {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          updateTheme({
            ...theme,
            colors: {
              ...theme.colors,
              primary: theme_magenta.dark,
            },
          });
        } else {
          updateTheme({
            ...theme,
            colors: {
              ...theme.colors,
              primary: theme_magenta.light,
            },
          });
        }
      }
      if (state.AppColorMode === "light") {
        updateTheme({
          ...theme,
          colors: {
            ...theme.colors,
            primary: theme_magenta.light,
          },
        });
      }
      if (state.AppColorMode === "dark") {
        updateTheme({
          ...theme,
          colors: {
            ...theme.colors,
            primary: theme_magenta.dark,
          },
        });
      }
      if (state.SystemRuntimeColor === "system-dark") {
        updateTheme({
          ...theme,
          colors: {
            ...theme.colors,
            primary: theme_magenta.dark,
          },
        });
      }
      if (state.SystemRuntimeColor === "system-light") {
        updateTheme({
          ...theme,
          colors: {
            ...theme.colors,
            primary: theme_magenta.light,
          },
        });
      }
    }
    if (state.InitialThemeColor === "blue") {
      localStorage.setItem("app-theme-color", "blue");
      if (state.AppColorMode === "system") {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          updateTheme({
            ...theme,
            colors: {
              ...theme.colors,
              primary: theme_blue.dark,
            },
          });
        } else {
          updateTheme({
            ...theme,
            colors: {
              ...theme.colors,
              primary: theme_blue.light,
            },
          });
        }
      }
      if (state.AppColorMode === "light") {
        updateTheme({
          ...theme,
          colors: {
            ...theme.colors,
            primary: theme_blue.light,
          },
        });
      }
      if (state.AppColorMode === "dark") {
        updateTheme({
          ...theme,
          colors: {
            ...theme.colors,
            primary: theme_blue.dark,
          },
        });
      }
      if (state.SystemRuntimeColor === "system-dark") {
        updateTheme({
          ...theme,
          colors: {
            ...theme.colors,
            primary: theme_blue.dark,
          },
        });
      }
      if (state.SystemRuntimeColor === "system-light") {
        updateTheme({
          ...theme,
          colors: {
            ...theme.colors,
            primary: theme_blue.light,
          },
        });
      }
    }
    if (state.InitialThemeColor === "purple") {
      localStorage.setItem("app-theme-color", "purple");
      if (state.AppColorMode === "system") {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          updateTheme({
            ...theme,
            colors: {
              ...theme.colors,
              primary: theme_purple.dark,
            },
          });
        } else {
          updateTheme({
            ...theme,
            colors: {
              ...theme.colors,
              primary: theme_purple.light,
            },
          });
        }
      }
      if (state.AppColorMode === "light") {
        updateTheme({
          ...theme,
          colors: {
            ...theme.colors,
            primary: theme_purple.light,
          },
        });
      }
      if (state.AppColorMode === "dark") {
        updateTheme({
          ...theme,
          colors: {
            ...theme.colors,
            primary: theme_purple.dark,
          },
        });
      }
      if (state.SystemRuntimeColor === "system-dark") {
        updateTheme({
          ...theme,
          colors: {
            ...theme.colors,
            primary: theme_purple.dark,
          },
        });
      }
      if (state.SystemRuntimeColor === "system-light") {
        updateTheme({
          ...theme,
          colors: {
            ...theme.colors,
            primary: theme_purple.light,
          },
        });
      }
    }
  }, [state.InitialThemeColor]);

  useEffect(() => {
    if (state.AppColorMode === "system") {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        updateTheme({
          ...theme,
          colors: {
            ...theme.colors,
            primary:
              state.InitialThemeColor === "gold"
                ? theme.colors.theme_gold.dark
                : state.InitialThemeColor === "red"
                ? theme.colors.theme_magenta.dark
                : state.InitialThemeColor === "blue"
                ? theme.colors.theme_blue.dark
                : state.InitialThemeColor === "purple"
                ? theme.colors.theme_purple.dark
                : theme.colors.theme_gold.dark,
          },
          config: {
            ...theme.config,
            initialColorMode: "system",
            useSystemColorMode: true,
          },
        });
      } else {
        updateTheme({
          ...theme,
          colors: {
            ...theme.colors,
            primary:
              state.InitialThemeColor === "gold"
                ? theme.colors.theme_gold.light
                : state.InitialThemeColor === "red"
                ? theme.colors.theme_magenta.light
                : state.InitialThemeColor === "blue"
                ? theme.colors.theme_blue.light
                : state.InitialThemeColor === "purple"
                ? theme.colors.theme_purple.light
                : theme.colors.theme_gold.light,
          },
          config: {
            ...theme.config,
            initialColorMode: "system",
            useSystemColorMode: true,
          },
        });
      }
    }
    if (state.AppColorMode === "light") {
      updateTheme({
        ...theme,
        colors: {
          ...theme.colors,
          primary:
            state.InitialThemeColor === "gold"
              ? theme.colors.theme_gold.light
              : state.InitialThemeColor === "red"
              ? theme.colors.theme_magenta.light
              : state.InitialThemeColor === "blue"
              ? theme.colors.theme_blue.light
              : state.InitialThemeColor === "purple"
              ? theme.colors.theme_purple.light
              : theme.colors.theme_gold.light,
        },
        config: {
          ...theme.config,
          initialColorMode: "light",
          useSystemColorMode: false,
        },
      });
    }
    if (state.SystemRuntimeColor === "system-light") {
      updateTheme({
        ...theme,
        colors: {
          ...theme.colors,
          primary:
            state.InitialThemeColor === "gold"
              ? theme.colors.theme_gold.light
              : state.InitialThemeColor === "red"
              ? theme.colors.theme_magenta.light
              : state.InitialThemeColor === "blue"
              ? theme.colors.theme_blue.light
              : state.InitialThemeColor === "purple"
              ? theme.colors.theme_purple.light
              : theme.colors.theme_gold.light,
        },
        config: {
          ...theme.config,
          initialColorMode: "light",
          useSystemColorMode: false,
        },
      });
    }
    if (state.AppColorMode === "dark") {
      updateTheme({
        ...theme,
        colors: {
          ...theme.colors,
          primary:
            state.InitialThemeColor === "gold"
              ? theme.colors.theme_gold.dark
              : state.InitialThemeColor === "red"
              ? theme.colors.theme_magenta.dark
              : state.InitialThemeColor === "blue"
              ? theme.colors.theme_blue.dark
              : state.InitialThemeColor === "purple"
              ? theme.colors.theme_purple.dark
              : theme.colors.theme_gold.dark,
        },
        config: {
          ...theme.config,
          initialColorMode: "dark",
          useSystemColorMode: false,
        },
      });
    }
    if (state.SystemRuntimeColor === "system-dark") {
      updateTheme({
        ...theme,
        colors: {
          ...theme.colors,
          primary:
            state.InitialThemeColor === "gold"
              ? theme.colors.theme_gold.dark
              : state.InitialThemeColor === "red"
              ? theme.colors.theme_magenta.dark
              : state.InitialThemeColor === "blue"
              ? theme.colors.theme_blue.dark
              : state.InitialThemeColor === "purple"
              ? theme.colors.theme_purple.dark
              : theme.colors.theme_gold.dark,
        },
        config: {
          ...theme.config,
          initialColorMode: "dark",
          useSystemColorMode: false,
        },
      });
    }
  }, [state.AppColorMode, state.SystemRuntimeColor]);

  const { getDisclosureProps, getButtonProps } = useDisclosure();
  const buttonProps = getButtonProps();
  const disclosureProps = getDisclosureProps();

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Box paddingX="4" className="App">
        <Box position="relative" maxWidth="900px" mx="auto">
          <Header themeController={buttonProps} />
          <Box {...disclosureProps} position="absolute" right="0" top="100%">
            <CustomizeTheme />
          </Box>
        </Box>
        <ProfileCard />
      </Box>
    </ChakraProvider>
  );
}

export default App;
