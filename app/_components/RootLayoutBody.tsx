"use client";

import { PropsWithChildren } from "react";
import { Providers } from "../providers";
import { Box, Spacer, Stack } from "@chakra-ui/react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const RootLayoutBody = ({ children }: PropsWithChildren) => {
  return (
    <Providers>
      <Stack spacing="0" minHeight="100vh">
        <Navbar />
        <Box as="main">{children}</Box>
        <Spacer />
        <Footer />
      </Stack>
    </Providers>
  );
};
