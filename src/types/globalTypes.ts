import React from "react";
type ThemeNametype =
  | "gold"
  | "red"
  | "blue"
  | "purple"
  | "..loading-theme-color";
type AppColorModetype = "light" | "dark" | "system" | "..loading-app-color";
type SystemRuntimeColortype =
  | "system-light"
  | "system-dark"
  | "..loading-system-app-color";

interface initialStateType {
  InitialThemeColor: ThemeNametype;
  AppColorMode: AppColorModetype;
  SystemRuntimeColor: SystemRuntimeColortype;
}

interface actionParamType {
  type: ThemeNametype | AppColorModetype | SystemRuntimeColortype;
}

type stateAndDispatchType = {
  state: initialStateType;
  dispatch: React.Dispatch<actionParamType>;
};

export type {
  ThemeNametype,
  initialStateType,
  actionParamType,
  stateAndDispatchType,
  AppColorModetype,
};
