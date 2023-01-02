import React, { createContext, useReducer } from "react";

import { reducer, initialState } from "./reducer";
import {
  initialStateType,
  actionParamType,
  stateAndDispatchType,
} from "../types/globalTypes";

// type dispatchSig = (action: actionParamType) => void;

export const GlobalContext = createContext<stateAndDispatchType>({
  state: initialState,
  dispatch: () => null,
});

type propsTypes = {
  children: React.ReactNode;
};

function ContextProvider({ children }: propsTypes) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default ContextProvider;
