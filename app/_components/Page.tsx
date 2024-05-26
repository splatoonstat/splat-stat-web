"use client";

import {
  Center,
  Container,
  HStack,
  Heading,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { data } from "../data";
import { ChangeEventHandler, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AbilityPointAverage } from "./AbilityPointAverage";
import { AbilityPointAverageDescription } from "./AbilityPointAverageDescription";

export const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const weapon = searchParams.get("weapon");
  const [selectedWeapon, setSelectedWeapon] = useState("");

  useEffect(() => {
    if (weapon) {
      setSelectedWeapon(weapon);
    }
  }, [weapon]);

  const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const newWeapon = e.target.value;
    setSelectedWeapon(newWeapon);

    const newParams = new URLSearchParams(searchParams);
    if (newWeapon) {
      newParams.set("weapon", newWeapon);
    } else {
      newParams.delete("weapon");
    }
    router.replace(`?${newParams.toString()}`);
  };

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
        <Select
          placeholder="ブキを選択してください"
          value={selectedWeapon}
          onChange={handleSelectChange}
          maxWidth="96"
        >
          {data.master.weapons.map((weapon) => (
            <option key={weapon.id} value={weapon.id}>
              {weapon.name}
            </option>
          ))}
        </Select>

        {selectedWeapon ? (
          <AbilityPointAverage weapon={selectedWeapon} />
        ) : (
          <Center
            height="32"
            background="gray.100"
            borderRadius="md"
            fontWeight="bold"
          >
            <Text>ブキを選択してください</Text>
          </Center>
        )}
      </Stack>
    </Container>
  );
};
