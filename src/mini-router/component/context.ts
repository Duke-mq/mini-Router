import { createContext } from "react";
interface RouterContextType {
  location?: unknown;
  history?: unknown;
  match?: unknown;
}
const RouterContext = createContext<RouterContextType>({});

export { RouterContext };
