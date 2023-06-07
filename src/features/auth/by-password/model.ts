import { createMutation } from "@farfetched/core";

import { internalApi } from "@/shared/api";

const authByPasswordMutation = createMutation({ effect: internalApi.authPasswordPost });
