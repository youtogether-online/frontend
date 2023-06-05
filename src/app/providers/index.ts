import compose from "compose-function";

import { withLocalization } from "./with-localization";
import { withRouter } from "./with-router";

export const withHocs = compose(withRouter, withLocalization);
