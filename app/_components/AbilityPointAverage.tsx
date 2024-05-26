import {
  AspectRatio,
  GridItem,
  HStack,
  Heading,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { data } from "../data";
import { GeneralAbilityChart } from "./GeneralAbilityChart";
import { useChartGrid } from "../_hooks/useChartGrid";
import { PrimaryAbilityChart } from "./PrimaryAbilityChart";
import { formatDate } from "../utils";
import { Link } from "@chakra-ui/next-js";

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

  const { from, to } = data.abilityPointAverage.aggregationPeriod;

  return (
    <Stack spacing="4">
      <Text>
        集計期間: {formatDate(from)} ~ {formatDate(to)}
        <br />
        サンプルサイズ: {weaponData.samples.toLocaleString("ja-JP")} players
      </Text>
      <Stack>
        <Heading as="h3" size="md">
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
        <Heading as="h3" size="md">
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

      <HStack>
        <Spacer />
        <Text color="gray.500" fontSize="sm">
          Powered by{" "}
          <Link href="https://stat.ink/" isExternal color="blue.500">
            stat.ink
          </Link>
        </Text>
      </HStack>
    </Stack>
  );
};
