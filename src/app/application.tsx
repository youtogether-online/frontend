import { Pages } from "@/pages";

import "./index.css";
import { withHocs } from "./providers/index";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-canvasDefault">
      <Pages />
    </div>
  );
};

export default withHocs(App);
