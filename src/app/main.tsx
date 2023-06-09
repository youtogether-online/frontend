import { createRoot } from "react-dom/client";

import { startApiMockWorker } from "@/shared/api";
import { appStarted } from "@/shared/config/init";

import App from "./application";

const root = createRoot(document.querySelector("#root") as HTMLElement);

if (import.meta.env.DEV) {
  startApiMockWorker();
}

appStarted();
root.render(<App />);
