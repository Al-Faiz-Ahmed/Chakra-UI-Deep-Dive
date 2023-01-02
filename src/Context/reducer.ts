import {
  ThemeNametype,
  initialStateType,
  actionParamType,
} from "../types/globalTypes";

let initialState: initialStateType = {
  InitialThemeColor: "..loading-theme-color",
  AppColorMode: "..loading-app-color",
  SystemRuntimeColor: "..loading-system-app-color",
};

let reducer: (
  state: initialStateType,
  action: actionParamType
) => initialStateType;

reducer = (state: initialStateType, action: actionParamType) => {
  switch (action.type) {
    case "gold":
      return {
        ...state,
        InitialThemeColor: "gold",
      };
    case "red":
      return {
        ...state,
        InitialThemeColor: "red",
      };
    case "blue":
      return {
        ...state,
        InitialThemeColor: "blue",
      };
    case "purple":
      return {
        ...state,
        InitialThemeColor: "purple",
      };
    case "light":
      return {
        ...state,
        AppColorMode: "light",
      };
    case "dark":
      return {
        ...state,
        AppColorMode: "dark",
      };
    case "system":
      return {
        ...state,
        AppColorMode: "system",
      };
    case "system-dark":
      return {
        ...state,
        SystemRuntimeColor: "system-dark",
      };
    case "system-light":
      return {
        ...state,
        SystemRuntimeColor: "system-light",
      };
    case "..loading-system-app-color":
      return {
        ...state,
        SystemRuntimeColor: "..loading-system-app-color",
      };
    default:
      return state;
  }
};

export { reducer, initialState };
