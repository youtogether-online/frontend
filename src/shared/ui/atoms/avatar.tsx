import * as AvatarPrimitive from "@radix-ui/react-avatar";

interface AvatarProps {
  url?: string;
  fallback: string;
  alt: string;
}

export const Avatar = ({ url, fallback, alt }: AvatarProps) => {
  return (
    <Root>
      <Image src={url} alt={alt} />
      <Fallback>{fallback}</Fallback>
    </Root>
  );
};

const Image = styled(AvatarPrimitive.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
});

const Root = styled(AvatarPrimitive.Root, {
  width: "38px",
  height: "38px",
  borderRadius: "$full",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "$backgroundContainerDark",
  zIndex: 110,
  position: "relative",
});

const Fallback = styled(AvatarPrimitive.AvatarFallback, {
  textTransform: "capitalize",
});
