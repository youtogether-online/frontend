import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

export const Provider = ({ children }: { children: ReactNode }) => {
  return <BrowserRouter>
    {children}
  </BrowserRouter>;
};

