"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export const Providers = ({ children }: PropsWithChildren) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};
