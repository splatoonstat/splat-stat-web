"use client";

import {
  Center,
  Container,
  HStack,
  Heading,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import { AbilityPointAverageDescription } from "./AbilityPointAverageDescription";

export const PageFallback = () => {
  return (
    <Container
      maxWidth="120em"
      padding={{
        base: "4",
        sm: "6",
        md: "8",
      }}
    >
      <Stack spacing="6">
        <HStack>
          <Heading as="h2" size="md">
            ルール × Xパワー別 ギアパワー平均
          </Heading>
          <AbilityPointAverageDescription />
        </HStack>
        <Center>
          <Spinner color="blue.500" />
        </Center>
      </Stack>
    </Container>
  );
};
