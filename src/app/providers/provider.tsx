import { RouterProvider } from "atomic-router-react";
import { type ReactNode } from "react";

import { router } from "../router";

export const Provider = ({ children }: { children: ReactNode }) => {
  return <RouterProvider router={router}>{children}</RouterProvider>;
};
