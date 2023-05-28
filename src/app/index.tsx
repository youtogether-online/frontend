import { useUnit } from "effector-react";
import { useEffect } from "react";

import { Pages } from "@/pages";

import { appStarted } from "@/entities/session";

import "@/shared/config/i18n";

import "./index.css";
import { Provider } from "./providers";

export const App = () => {
  const startApp = useUnit(appStarted);

  useEffect(() => {
    startApp();
  }, [startApp]);

  return (
    <Provider>
      <div className="flex min-h-screen flex-col overflow-x-hidden bg-canvasDefault">
        <Pages />
      </div>
    </Provider>
  );
};
