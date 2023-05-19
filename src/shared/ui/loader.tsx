import { ReactComponent as LoaderIcon } from "@/shared/ui/icons/loader.svg";

const spin = keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" },
});

export const Loader = styled(LoaderIcon, {
  animation: `${spin} 1s cubic-bezier(0, 0, 0.2, 1) infinite`,
  width: "20px",
  height: "20px",
});
