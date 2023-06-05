import { RouterProvider } from "atomic-router-react";
import { ComponentType, FC, type ReactNode } from "react";

import { router } from "../router";

export const withRouter = (WrappedComponent: ComponentType) => () => {
  return (
    <RouterProvider router={router}>
      <WrappedComponent />
    </RouterProvider>
  );
};
