import { Text } from "@chakra-ui/react";

export const AbilityPointAverage = ({ weapon }: { weapon: string }) => {
  if (!weapon) {
    return null;
  }

  return <Text>{weapon}</Text>;
};
