import { RouterProvider } from "atomic-router-react";
import { type ComponentType } from "react";

import { router } from "@/shared/routing";

export const withRouter = (WrappedComponent: ComponentType) => () => {
  return (
    <RouterProvider router={router}>
      <WrappedComponent />
    </RouterProvider>
  );
};
