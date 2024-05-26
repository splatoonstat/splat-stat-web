import { Heading, Stack } from "@chakra-ui/react";
import { data } from "../data";
import { GeneralAbilityChart } from "./GeneralAbilityChart";

export const AbilityPointAverage = ({ weapon }: { weapon: string }) => {
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
    <Stack>
      <Heading as="h3" size="sm">
        通常ギア
      </Heading>
      {weaponData.generalAbilities.map((abilityData) => (
        <GeneralAbilityChart
          key={abilityData.id}
          weapon={weapon}
          abilityData={abilityData}
        />
      ))}
    </Stack>
  );

  return null;
};
