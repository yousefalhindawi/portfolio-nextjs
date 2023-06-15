import React from "react";
import { useRouter } from "next/router";
export const RouterContext = React.createContext();
export function RouterProvider({ children }) {
  const router = useRouter();
  return (
    <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
  );
}
