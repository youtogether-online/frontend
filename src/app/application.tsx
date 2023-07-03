import { Pages } from "@/pages";

import "./dark.css";
import "./index.css";
import "./light.css";
import { withHocs } from "./providers/index";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-canvasDefault">
      <Pages />
    </div>
  );
};

export default withHocs(App);
