"use client";

import { PropsWithChildren } from "react";
import { Providers } from "../providers";
import { Box, Stack } from "@chakra-ui/react";
import { Navbar } from "./Navbar";

export const RootLayoutBody = ({ children }: PropsWithChildren) => {
  return (
    <Providers>
      <Stack spacing="0">
        <Navbar />
        <Box as="main">{children}</Box>
      </Stack>
    </Providers>
  );
};
