import { RouterProvider } from "atomic-router-react";
import { type ComponentType } from "react";

import { router } from "../router";

export const withRouter = (WrappedComponent: ComponentType) => () => {
  return (
    <RouterProvider router={router}>
      <WrappedComponent />
    </RouterProvider>
  );
};
