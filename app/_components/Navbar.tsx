import { Link } from "@chakra-ui/next-js";
import { HStack, Heading, Spacer } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <HStack as="header" paddingX="6" paddingY="4" borderBottomWidth="1px">
      <Link href="/">
        <Heading as="h1" size="lg">
          splat-stat-web
        </Heading>
      </Link>
    </HStack>
  );
};
