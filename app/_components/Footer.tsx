import { Link } from "@chakra-ui/next-js";
import { Center, HStack, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Center as="footer" padding="4" borderTopWidth="1px">
      <Text fontSize="sm">
        © 2024{" "}
        <Link href="https://x.com/splatoon_stat" isExternal>
          @splatoon_stat
        </Link>
      </Text>
    </Center>
  );
};
