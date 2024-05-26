import {
  AspectRatio,
  GridItem,
  Heading,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import { data } from "../data";
import { GeneralAbilityChart } from "./GeneralAbilityChart";
import { useChartGrid } from "../_hooks/useChartGrid";
import { PrimaryAbilityChart } from "./PrimaryAbilityChart";

export const AbilityPointAverage = ({ weapon }: { weapon: string }) => {
  const { columns, ratio } = useChartGrid();

  if (!weapon) {
    return null;
  }

  const weaponData = data.abilityPointAverage.weapons.find(
    ({ id }) => id === weapon
  );

  if (!weaponData) {
    return null;
  }

  return (
    <Stack spacing="4">
      <Stack>
        <Heading as="h3" size="sm">
          通常ギア
        </Heading>
        <SimpleGrid columns={columns} gap="2">
          {weaponData.generalAbilities.map((abilityData) => (
            <GridItem key={abilityData.id}>
              <AspectRatio ratio={ratio} maxWidth="full">
                <GeneralAbilityChart
                  weapon={weapon}
                  abilityData={abilityData}
                />
              </AspectRatio>
            </GridItem>
          ))}
        </SimpleGrid>
      </Stack>
      <Stack>
        <Heading as="h3" size="sm">
          専用ギア
        </Heading>
        <SimpleGrid columns={columns} gap="2">
          {weaponData.primaryAbilities.map((abilityData) => (
            <GridItem key={abilityData.id}>
              <AspectRatio ratio={ratio} maxWidth="full">
                <PrimaryAbilityChart
                  weapon={weapon}
                  abilityData={abilityData}
                />
              </AspectRatio>
            </GridItem>
          ))}
        </SimpleGrid>
      </Stack>
    </Stack>
  );
};
