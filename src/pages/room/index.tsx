import React from "react";
import { Text } from "@/shared/ui/text";
import { styled } from "@/shared/config/stitches/stitches.config";

const Room = () => {
  return <Section>
    <Text variant="h1">Room page</Text>
  </Section>;
};

const Section = styled("section", {});

export default Room;