import { createContext } from "react";
import initialState from "./initialState";

export const store = createContext({
  state: initialState,
  dispatch: () => 0
});

export const provider = store.provider;
