/* 50 only for Dark color mode but darker than 50 */
/* 75 only for Dark color mode colour but more visible and lighter then 50 */
/* 100 for body baground Color */
/* 200 for Primary tint Version */
/* 300 for Real Primary Color */

export const theme_gold = {
  light: {
    50: "#fff",
    75: "#fff",
    100: "#FFFAED",
    200: "#FFF1CF",
    400: "#E3B100",
  },
  dark: {
    50: "#212121",
    75: "#2F2F2F",
    100: "#1D1C19",
    200: "#454024",
    400: "#F6C000",
  },
};
export const theme_magenta = {
  light: {
    50: "#fff",
    75: "#fff" /* upper light black layer for base layer black  */,
    100: "#FFF2F9",
    200: "#FDD9ED",
    400: "#DD0077",
  },
  dark: {
    50: "#212121",
    75: "#2F2F2F" /* upper light black layer for base layer black  */,
    100: "#1D191B",
    200: "#412534",
    400: "#FF008A",
  },
};
export const theme_blue = {
  light: {
    50: "#fff",
    75: "#fff" /* upper light black layer for base layer black  */,
    100: "#E7ECFF",
    200: "#D9E1FD",
    400: "#0023DD",
  },
  dark: {
    50: "#212121",
    75: "#2F2F2F" /* upper light black layer for base layer black  */,
    100: "#191A1D",
    200: "#20223A",
    400: "#3051FF",
  },
};
export const theme_purple = {
  light: {
    50: "#fff",
    75: "#fff" /* upper light black layer for base layer black  */,
    100: "#F2E7FF",
    200: "#EBD9FD",
    400: "#A200DD",
  },
  dark: {
    50: "#212121",
    75: "#2F2F2F" /* upper light black layer for base layer black  */,
    100: "#1B191D",
    200: "#362541",
    400: "#C625FF",
  },
};

export const colors = {
  primary: theme_gold,
  theme_gold,
  theme_magenta,
  theme_blue,
  theme_purple,
};
