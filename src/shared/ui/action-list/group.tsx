import { forwardRef } from "react";

import { type SxProp } from "../types";

type GroupProps = {} & SxProp;

export const Group = forwardRef<HTMLDivElement, GroupProps>(() => {
  return <div></div>;
});
