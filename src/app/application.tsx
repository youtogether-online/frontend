import { Pages } from "@/pages";

import "./index.css";
import { withHocs } from "./providers/index";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-canvas-default">
      <Pages />
    </div>
  );
};

export default withHocs(App);
