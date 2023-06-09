import { setupWorker } from "msw";

import { handlers } from "./handlers";

const worker = setupWorker(...handlers);

export const startApiMockWorker = () => {
  worker.start({
    onUnhandledRequest(req, print) {
      if (/\.(png|jpg|svg|tsx?|css|jsx?|woff2)$/.test(req.url.pathname)) {
        return;
      }

      print.warning();
    },
  });
};
