import { Box } from "@chakra-ui/layout";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={10} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
